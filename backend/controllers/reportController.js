const pool = require('../config/db');

exports.getAllReports = async (req, res) => {
    try {
        // 1. Query Catalog
        const catalogQuery = `
            SELECT ntc.id AS categoryId, ntc.code AS categoryCode, ntc.name AS categoryName,
                   tc.id AS criteriaId, tc.name AS questionText
            FROM nhom_tieu_chi ntc
            JOIN tieu_chi tc ON tc.nhom_tieu_chi_id = ntc.id
            WHERE ntc.is_active = 1 AND tc.is_active = 1
            ORDER BY ntc.display_order ASC, tc.display_order ASC;
        `;
        const [catalogRows] = await pool.query(catalogQuery);

        const criteriaCatalogMap = {};
        catalogRows.forEach(row => {
            if (!criteriaCatalogMap[row.categoryId]) {
                criteriaCatalogMap[row.categoryId] = {
                    categoryId: row.categoryId,
                    categoryCode: row.categoryCode,
                    categoryName: row.categoryName,
                    items: []
                };
            }
            criteriaCatalogMap[row.categoryId].items.push({
                criteriaId: row.criteriaId,
                questionText: row.questionText
            });
        });

        // 2. Query Data phẳng
        const dataQuery = `
            SELECT 
                bn.id AS bn_id, bn.name AS bn_name, bn.code AS bn_code,
                dv.id AS dv_id, dv.name AS dv_name, dv.code AS dv_code,
                csdl.id AS csdl_id, csdl.name AS csdl_name,
                ttd.id AS td_id, ttd.report_date AS td_date, ttd.year AS td_year, ttd.quarter AS td_quarter, ttd.general_comment AS td_summary,
                tt.code AS status_code,
                ntc.code AS cat_code, ntc.name AS cat_name,
                kq.tieu_chi_id AS criteria_id, kq.is_completed AS is_passed, kq.score AS passed_percent, kq.reviewer_comment AS reviewer_comment
            FROM bo_nganh bn
            JOIN don_vi_chu_quan dv ON dv.bo_nganh_id = bn.id
            JOIN co_so_du_lieu csdl ON csdl.don_vi_chu_quan_id = dv.id
            JOIN tien_do_xay_dung_csdl ttd ON ttd.co_so_du_lieu_id = csdl.id
            JOIN trang_thai_xay_dung tt ON ttd.trang_thai_xay_dung_id = tt.id
            LEFT JOIN ket_qua_danh_gia_tieu_chi kq ON kq.tien_do_xay_dung_csdl_id = ttd.id
            LEFT JOIN tieu_chi tc ON kq.tieu_chi_id = tc.id
            LEFT JOIN nhom_tieu_chi ntc ON tc.nhom_tieu_chi_id = ntc.id
            WHERE bn.is_active = 1 AND dv.is_active = 1 AND csdl.is_active = 1
            ORDER BY bn.id, dv.id, csdl.id, ttd.report_date DESC;
        `;
        const [rows] = await pool.query(dataQuery);

        // 3. Logic Reducer (Giữ nguyên cấu trúc logic đã viết ở câu trả lời trước)
        const ministriesMap = {};
        rows.forEach(row => {
            if (!ministriesMap[row.bn_id]) {
                ministriesMap[row.bn_id] = { id: row.bn_id, name: row.bn_name, code: row.bn_code, unitsMap: {} };
            }
            const ministry = ministriesMap[row.bn_id];

            if (!ministry.unitsMap[row.dv_id]) {
                ministry.unitsMap[row.dv_id] = { id: row.dv_id, name: row.dv_name, code: row.dv_code, databasesMap: {} };
            }
            const unit = ministry.unitsMap[row.dv_id];

            if (!unit.databasesMap[row.csdl_id]) {
                unit.databasesMap[row.csdl_id] = { id: row.csdl_id, name: row.csdl_name, status: "passed", progress: 100, timelineMap: {} };
            }
            const db = unit.databasesMap[row.csdl_id];

            if (!db.timelineMap[row.td_id]) {
                let formattedDate = "";
                let displayDate = "";
                if (row.td_date) {
                    const d = new Date(row.td_date);
                    formattedDate = row.td_date.toISOString().split('T')[0];
                    displayDate = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
                }
                db.timelineMap[row.td_id] = {
                    id: row.td_id, date: formattedDate, displayDate: displayDate,
                    title: `Đánh giá Quý ${row.td_quarter}/${row.td_year}`,
                    statusType: row.status_code === 'passed' ? 'success' : 'processing',
                    progress: 100, highlights: [], categoriesDetail: {}, summary: row.td_summary || ""
                };
            }
            const timeline = db.timelineMap[row.td_id];

            if (row.cat_code) {
                if (!timeline.categoriesDetail[row.cat_code]) {
                    timeline.categoriesDetail[row.cat_code] = { passed: true, assessmentItems: [] };
                }
                const category = timeline.categoriesDetail[row.cat_code];
                let commentsArray = [];
                if (row.reviewer_comment) {
                    commentsArray = typeof row.reviewer_comment === 'string' ? JSON.parse(row.reviewer_comment) : row.reviewer_comment;
                }
                category.assessmentItems.push({
                    criteriaId: row.criteria_id,
                    isPassed: row.is_passed === 1,
                    passedPercent: parseFloat(row.passed_percent || 0),
                    comment: commentsArray
                });
                if (row.is_passed !== 1) {
                    category.passed = false;
                    db.status = "failed";
                    db.progress = 50;
                    timeline.statusType = "error";
                    timeline.progress = 50;
                }
            }
        });

        // Chuyển map thành array
        const ministries = Object.values(ministriesMap).map(m => {
            const units = Object.values(m.unitsMap).map(u => {
                const databases = Object.values(u.databasesMap).map(d => {
                    return { id: d.id, name: d.name, status: d.status, progress: d.progress, timeline: Object.values(d.timelineMap) };
                });
                return { id: u.id, name: u.name, code: u.code, databases };
            });
            return { id: m.id, name: m.name, code: m.code, units };
        });

        res.json({
            meta: { version: "1.2", updatedAt: "2026-07-06", description: "Hệ thống quản lý trạng thái CSDL - Đồng bộ cấu trúc định danh criteriaId" },
            criteriaCatalog: Object.values(criteriaCatalogMap),
            ministries: ministries
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", detail: error.message });
    }
};