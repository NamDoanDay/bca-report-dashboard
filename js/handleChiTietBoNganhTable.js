// Tập hợp dữ liệu giả lập chuẩn xác cấu trúc nghiệp vụ liên thông CSDL
const coreDataSource = [
    { id: 1, boNganh: "Bộ Công an", chuQuan: "Cục Cảnh sát QLHC về TTXH", csdl: "Cơ sở dữ liệu quốc gia về Dân cư", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 2, boNganh: "Bộ Công an", chuQuan: "Cục Cảnh sát Giao thông", csdl: "Cơ sở dữ liệu Đăng ký xe toàn quốc", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 3, boNganh: "Bộ Công an", chuQuan: "Cục Cảnh sát QLHC về TTXH", csdl: "Cơ sở dữ liệu Căn cước công dân", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 4, boNganh: "Bộ Tư pháp", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu Hộ tịch điện tử toàn quốc", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 5, boNganh: "Bộ Tư pháp", chuQuan: "Cục Đăng ký quốc gia Giao dịch bảo đảm", csdl: "Cơ sở dữ liệu Giao dịch bảo đảm", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 6, boNganh: "Bộ Kế hoạch & Đầu tư", chuQuan: "Cục Quản lý đăng ký kinh doanh", csdl: "Cơ sở dữ liệu quốc gia về Đăng ký doanh nghiệp", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 7, boNganh: "Bộ Kế hoạch & Đầu tư", chuQuan: "Cục Quản lý Đấu thầu", csdl: "Hệ thống mạng đấu thầu quốc gia", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 8, boNganh: "Bộ Tài chính", chuQuan: "Tổng cục Thuế", csdl: "Cơ sở dữ liệu quốc gia về Thuế", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 9, boNganh: "Bộ Tài chính", chuQuan: "Tổng cục Hải quan", csdl: "Cơ sở dữ liệu Hải quan tích hợp", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 10, boNganh: "Bộ Tài chính", chuQuan: "Kho bạc Nhà nước", csdl: "Hệ thống thông tin Quản lý Ngân sách và Kho bạc (TABMIS)", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 11, boNganh: "Bộ Tài nguyên & Môi trường", chuQuan: "Cục Chuyển đổi số và Dữ liệu TNMT", csdl: "Cơ sở dữ liệu đất đai quốc gia", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 12, boNganh: "Bộ Tài nguyên & Môi trường", chuQuan: "Cục Viễn thám quốc gia", csdl: "Cơ sở dữ liệu ảnh viễn thám quốc gia", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 13, boNganh: "Bộ Lao động - TB & XH", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu An sinh xã hội", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 14, boNganh: "Bộ Lao động - TB & XH", chuQuan: "Cục Việc làm", csdl: "Cơ sở dữ liệu Người lao động và Việc làm", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 15, boNganh: "Bộ Y tế", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu Hồ sơ sức khỏe điện tử", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 16, boNganh: "Bộ Y tế", chuQuan: "Cục Quản lý Dược", csdl: "Hệ thống cơ sở dữ liệu Dược quốc gia", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 17, boNganh: "Bộ Giáo dục & Đào tạo", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu toàn ngành về Giáo dục mầm non và Phổ thông", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 18, boNganh: "Bộ Giáo dục & Đào tạo", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu về Giáo dục đại học (HEMIS)", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 19, boNganh: "Bộ Giao thông vận tải", chuQuan: "Cục Đường bộ Việt Nam", csdl: "Cơ sở dữ liệu Giấy phép lái xe quốc gia", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 20, boNganh: "Bộ Giao thông vận tải", chuQuan: "Cục Đăng kiểm Việt Nam", csdl: "Cơ sở dữ liệu Phương tiện giao thông cơ giới đường bộ", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 21, boNganh: "Bộ Thông tin & Truyền thông", chuQuan: "Cục Phát thanh, truyền hình và thông tin điện tử", csdl: "Cơ sở dữ liệu Quản lý thông tin mạng xã hội", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 22, boNganh: "Bộ Thông tin & Truyền thông", chuQuan: "Cục Tần số vô tuyến điện", csdl: "Cơ sở dữ liệu Quản lý cấp phép tần số vô tuyến điện", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 23, boNganh: "Bộ Nội vụ", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu quốc gia về Cán bộ, công chức, viên chức", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 24, boNganh: "Bộ Nội vụ", chuQuan: "Cục Văn thư và Lưu trữ nhà nước", csdl: "Hệ thống quản lý tài liệu lưu trữ điện tử", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 25, boNganh: "Bộ Xây dựng", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu quốc gia về Hoạt động xây dựng", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 26, boNganh: "Bộ Nông nghiệp & PTNT", chuQuan: "Cục Trồng trọt", csdl: "Cơ sở dữ liệu Mã số vùng trồng quốc gia", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 27, boNganh: "Bộ Nông nghiệp & PTNT", chuQuan: "Cục Chăn nuôi", csdl: "Cơ sở dữ liệu Đăng ký thức ăn chăn nuôi", progress: 40, pl: true, tc: true, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 28, boNganh: "Bộ Văn hóa, Thể thao & Du lịch", chuQuan: "Cục Du lịch Quốc gia Việt Nam", csdl: "Cơ sở dữ liệu Cơ sở lưu trú du lịch", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 29, boNganh: "Bộ Công Thương", chuQuan: "Cục Thương mại điện tử và Kinh tế số", csdl: "Cơ sở dữ liệu Doanh nghiệp Thương mại điện tử", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 30, boNganh: "Bộ Tư pháp", chuQuan: "Cục Lý lịch tư pháp quốc gia", csdl: "Cơ sở dữ liệu Lý lịch tư pháp", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 31, boNganh: "Bảo hiểm Xã hội Việt Nam", chuQuan: "Trung tâm Công nghệ thông tin", csdl: "Cơ sở dữ liệu quốc gia về Bảo hiểm", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 32, boNganh: "Ngân hàng Nhà nước", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu thông tin tín dụng khách hàng vay", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 33, boNganh: "Thanh tra Chính phủ", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu quốc gia về Khiếu nại, Tố cáo", progress: 30, pl: true, tc: false, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 34, boNganh: "Thanh tra Chính phủ", chuQuan: "Cục Bản kê khai", csdl: "Cơ sở dữ liệu quốc gia về Kiểm soát tài sản, thu nhập", progress: 20, pl: true, tc: false, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 35, boNganh: "Bộ Ngoại giao", chuQuan: "Cục Lãnh sự", csdl: "Cơ sở dữ liệu Cấp phát hộ chiếu ngoại giao, công vụ", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 36, boNganh: "Bộ Ngoại giao", chuQuan: "Cục Lãnh sự", csdl: "Hệ thống thông tin Quản lý Xuất nhập cảnh ngành Ngoại giao", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 37, boNganh: "Bộ Khoa học & Công nghệ", chuQuan: "Cục Sở hữu trí tuệ", csdl: "Cơ sở dữ liệu quốc gia về Sở hữu công nghiệp", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 38, boNganh: "Ủy ban Dân tộc", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu về Thống kê các dân tộc thiểu số", progress: 15, pl: true, tc: false, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 39, boNganh: "Văn phòng Chính phủ", chuQuan: "Cổng Dịch vụ công Quốc gia", csdl: "Cơ sở dữ liệu theo dõi trạng thái hồ sơ Dịch vụ công", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 40, boNganh: "Bộ Công an", chuQuan: "Cục Cảnh sát PCCC và CNCH", csdl: "Cơ sở dữ liệu Thống kê An toàn phòng cháy chữa cháy", progress: 50, pl: true, tc: true, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 41, boNganh: "Bộ Tư pháp", chuQuan: "Cục Quốc tịch, chứng thực", csdl: "Cơ sở dữ liệu Quản lý Quốc tịch Việt Nam", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 42, boNganh: "Bộ Tài chính", chuQuan: "Cục Quản lý giá", csdl: "Cơ sở dữ liệu quốc gia về Giá công sản và hàng hóa", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 43, boNganh: "Bộ Y tế", chuQuan: "Cục Quản lý Khám chữa bệnh", csdl: "Cơ sở dữ liệu Giấy phép hành nghề Y - Dược toàn quốc", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 44, boNganh: "Bộ Giao thông vận tải", chuQuan: "Cục Hàng hải Việt Nam", csdl: "Hệ thống thông tin Thuyền viên và Tàu biển", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 45, boNganh: "Bộ Xây dựng", chuQuan: "Cục Quản lý nhà và Thị trường BĐS", csdl: "Cơ sở dữ liệu về Nhà ở và Thị trường bất động sản", progress: 35, pl: true, tc: false, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 46, boNganh: "Bộ Thông tin & Truyền thông", chuQuan: "Cục Viễn thông", csdl: "Cơ sở dữ liệu Quản lý thông tin thuê bao di động", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 47, boNganh: "Bộ Tài nguyên & Môi trường", chuQuan: "Cục Quản lý tài nguyên nước", csdl: "Cơ sở dữ liệu Cấp phép tài nguyên nước quốc gia", progress: 25, pl: true, tc: false, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" }, // startDaXong: null
    { id: 48, boNganh: "Bộ Công Thương", chuQuan: "Cục Điều tiết điện lực", csdl: "Cơ sở dữ liệu Quản lý cấp phép hoạt động điện lực", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 49, boNganh: "Bộ Giáo dục & Đào tạo", chuQuan: "Cục Quản lý chất lượng", csdl: "Cơ sở dữ liệu Văn bằng chứng chỉ hệ thống giáo dục", progress: 100, pl: true, tc: true, ht: true, dl: true, pm: true, attt: true, eval: "Đạt" },
    { id: 50, boNganh: "Bộ Công an", chuQuan: "Cục Cảnh sát điều tra tội phạm về ma túy", csdl: "Cơ sở dữ liệu Quản lý đối tượng sử dụng ma túy", progress: 10, pl: true, tc: false, ht: false, dl: false, pm: false, attt: false, eval: "Chưa đạt" } // startDaXong: null
];

// TanStack Table Core State Simulation Tracker
const tableState = {
    globalFilter: "",
    statusFilter: "all",
    advancedFilter: "all",
    sortDirection: "desc", // desc hoặc asc theo tiến độ
    currentPage: 1, // Trang hiện tại
    rowsPerPage: 10, // Số hàng hiển thị mặc định
};

// Hàm gom dữ liệu tổng hợp động cho trục Chart để tránh khai báo cứng (Hardcode)
function generateMinistryDataRaw() {
    const mapData = {};
    coreDataSource.forEach(item => {
        if (!mapData[item.boNganh]) {
            mapData[item.boNganh] = { name: item.boNganh, passed: 0, processing: 0, failed: 0 };
        }
        if (item.progress === 100) mapData[item.boNganh].passed += 1;
        else if (item.progress >= 40) mapData[item.boNganh].processing += 1;
        else mapData[item.boNganh].failed += 1;
    });
    return Object.values(mapData);
}
const ministryDataRaw = generateMinistryDataRaw();

// Hoàn thiện cấu trúc Hàm OnTableStateChange tích hợp đa nhiệm tìm kiếm liên thông
function onTableStateChange() {
    const searchValue = document.getElementById("tanstackSearch").value;

    // 1. Đồng bộ hóa State cho bộ lọc bảng
    tableState.globalFilter = searchValue;
    tableState.statusFilter = document.getElementById("tanstackFilterStatus").value;
    tableState.advancedFilter = document.getElementById("tanstackFilterAdvanced").value;
    tableState.currentPage = 1;

    // 2. Chạy Engine xử lý lọc & vẽ lại Table giao diện
    renderTableEngine();

    // 3. ĐỒNG BỘ SANG CHART: Render rút gọn lại các cột trên Chart theo từ khóa
    initMultipleBarChart(searchValue);
}

// PHƯƠNG THỨC KẾT XUẤT DỮ LIỆU ĐỘNG (CORE RENDER)
function renderTableEngine() {
    // 1. Thực hiện các bước Filter theo State
    let filteredData = [...coreDataSource];

    // Lọc theo Global Search
    if (tableState.globalFilter) {
        const search = tableState.globalFilter.toLowerCase();
        filteredData = filteredData.filter(
            (d) =>
                d.boNganh.toLowerCase().includes(search) ||
                d.chuQuan.toLowerCase().includes(search) ||
                d.csdl.toLowerCase().includes(search),
        );
    }

    // Lọc theo trạng thái Đánh giá chung
    if (tableState.statusFilter !== "all") {
        filteredData = filteredData.filter(
            (d) => d.eval === tableState.statusFilter,
        );
    }

    // Lọc theo cấu hình nâng cao
    if (tableState.advancedFilter !== "all") {
        if (tableState.advancedFilter === "low")
            filteredData = filteredData.filter((d) => d.progress < 60);
        else if (tableState.advancedFilter === "high")
            filteredData = filteredData.filter((d) => d.progress === 100);
        else if (tableState.advancedFilter === "no-attt")
            filteredData = filteredData.filter((d) => d.attt === false);
    }

    // 2. Thực hiện Sort theo State
    filteredData.sort((a, b) => {
        return tableState.sortDirection === "asc"
            ? a.progress - b.progress
            : b.progress - a.progress;
    });

    // 3. Tính toán Phân trang
    const totalRows = filteredData.length;
    const totalPages = Math.ceil(totalRows / tableState.rowsPerPage) || 1;

    // Khống chế việc tràn số trang khi bộ lọc thay đổi làm giảm tổng số dòng
    if (tableState.currentPage > totalPages) {
        tableState.currentPage = totalPages;
    }

    const startIndex =
        (tableState.currentPage - 1) * tableState.rowsPerPage;
    const endIndex = Math.min(
        startIndex + tableState.rowsPerPage,
        totalRows,
    );

    // Cắt mảng dữ liệu để chỉ hiển thị trang hiện tại
    const paginatedData = filteredData.slice(startIndex, endIndex);

    // 4. Tiến hành đổ dữ liệu ra DOM HTML
    const tbody = document.getElementById("reactTableBody");
    tbody.innerHTML = "";

    if (totalRows === 0) {
        tbody.innerHTML = `<tr><td colspan="13" class="p-8 text-center text-slate-400 font-medium bg-slate-50/50">Không tìm thấy bản ghi dữ liệu phù hợp với cấu hình bộ lọc hiện tại.</td></tr>`;

        // Cập nhật text footer khi rỗng
        document.getElementById("counterRowsSummary").textContent =
            "Hiển thị 0 hệ thống CSDL.";
        updatePaginationUI(1, 1, true, true);
        return;
    }

    paginatedData.forEach((row, index) => {
        const dotValid = `<div class="w-2.5 h-2.5 rounded-full bg-emerald-500 mx-auto" title="Đạt chuẩn"></div>`;
        const dotInvalid = `<div class="w-2.5 h-2.5 rounded-full bg-rose-200 border border-rose-400/30 mx-auto" title="Chưa đạt / Vướng mắc"></div>`;

        const badgeGeneral =
            row.eval === "Đạt"
                ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">🟢 Đạt chuẩn</span>`
                : `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-semibold">🔴 Chưa đạt</span>`;

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50/70 transition-colors bg-white";
        // Số thứ tự tăng tiến chính xác theo vị trí thực tế trong danh sách đã lọc
        const absoluteIndex = startIndex + index + 1;

        tr.innerHTML = `
          <td class="p-3 text-center font-mono text-slate-400 font-bold">${absoluteIndex}</td>
          <td class="p-3 font-semibold text-slate-900">${row.boNganh}</td>
          <td class="p-3 text-slate-500 col-sub-holder">${row.chuQuan}</td>
          <td class="p-3 text-slate-700 font-medium max-w-sm truncate">${row.csdl}</td>
          <td class="p-3 text-center font-bold text-slate-900 font-mono">${row.progress}%</td>
          <td class="p-3 col-sub-criteria">${row.pl ? dotValid : dotInvalid}</td>
          <td class="p-3 col-sub-criteria">${row.tc ? dotValid : dotInvalid}</td>
          <td class="p-3 col-sub-criteria">${row.ht ? dotValid : dotInvalid}</td>
          <td class="p-3 col-sub-criteria">${row.dl ? dotValid : dotInvalid}</td>
          <td class="p-3 col-sub-criteria">${row.pm ? dotValid : dotInvalid}</td>
          <td class="p-3 col-sub-criteria">${row.attt ? dotValid : dotInvalid}</td>
          <td class="p-3 text-center col-sub-eval">${badgeGeneral}</td>
          <td class="p-3 text-center">
            <button onclick="openShadcnDialog(${row.id})" class="w-6 h-6 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-all active:scale-90 shadow-2xs">
              <i class="fa-solid fa-expand text-[10px]"></i>
            </button>
          </td>
        `;
        tbody.appendChild(tr);
    });

    // 5. Đồng bộ văn bản Footer hiển thị kết quả (Ví dụ: Hiển thị từ 1 đến 10 trên tổng số 13 hệ thống CSDL)
    document.getElementById("counterRowsSummary").textContent =
        `Hiển thị từ ${startIndex + 1} đến ${endIndex} trên tổng số ${totalRows} hệ thống CSDL được lọc.`;

    // 6. Cập nhật trạng thái các nút phân trang
    const isPrevDisabled = tableState.currentPage === 1;
    const isNextDisabled = tableState.currentPage === totalPages;
    updatePaginationUI(
        tableState.currentPage,
        totalPages,
        isPrevDisabled,
        isNextDisabled,
    );
}

// HÀM TIỆN ÍCH CẬP NHẬT TRẠNG THÁI UI PHÂN TRANG
function updatePaginationUI(
    currentPage,
    totalPages,
    prevDisabled,
    nextDisabled,
) {
    // Do trong HTML của bạn có 2 cụm nút phân trang trùng ID `paginationInfo`, ta cập nhật cho tất cả.
    const pageInfoElements = document.querySelectorAll("#paginationInfo");
    pageInfoElements.forEach((el) => {
        el.textContent = `Trang ${currentPage} / ${totalPages}`;
    });

    const prevBtn = document.getElementById("prevPageBtn");
    const nextBtn = document.getElementById("nextPageBtn");

    if (prevBtn) {
        prevBtn.disabled = prevDisabled;
    }
    if (nextBtn) {
        nextBtn.disabled = nextDisabled;
    }
}

// EVENT HANDLER ĐỒNG BỘ TRẠNG THÁI TOÀN CỤC (STATE SYNC)
function onTableStateChange() {
    tableState.globalFilter =
        document.getElementById("tanstackSearch").value;
    tableState.statusFilter = document.getElementById(
        "tanstackFilterStatus",
    ).value;
    tableState.advancedFilter = document.getElementById(
        "tanstackFilterAdvanced",
    ).value;
    tableState.currentPage = 1; // Reset về trang 1 khi lọc tiêu chí mới
    renderTableEngine();
}

// XỬ LÝ SỰ KIỆN THAY ĐỔI SỐ HÀNG HIỂN THỊ TRÊN MỘT TRANG
function onRowsPerPageChange() {
    tableState.rowsPerPage = parseInt(
        document.getElementById("rowsPerPageSelect").value,
        10,
    );
    tableState.currentPage = 1; // Quay về trang đầu tiên
    renderTableEngine();
}

// DI CHUYỂN QUA LẠI GIỮA CÁC TRANG (Kế thừa từ hàm goToPage gốc của bạn và sửa lại logic đúng)
function goToPage(direction) {
    tableState.currentPage += direction;
    renderTableEngine();
}

// ĐIỀU KHIỂN SẮP XẾP TIẾN ĐỘ
function toggleProgressSort() {
    tableState.sortDirection =
        tableState.sortDirection === "desc" ? "asc" : "desc";
    document.getElementById("sortLabelText").textContent =
        tableState.sortDirection === "asc" ? "Tăng dần" : "Giảm dần";
    renderTableEngine();
}

// ẨN / HIỆN CỘT BẢNG THEO LỚP CSS ĐỊNH DANH (COLUMN VISIBILITY COUPLING)
function toggleTableCol(colKey, cb) {
    let selector = "";
    if (colKey === 4) selector = ".col-sub-holder";
    else if (colKey === 6) selector = ".col-sub-criteria";
    else if (colKey === 12) selector = ".col-sub-eval";

    if (!selector) return;
    document.querySelectorAll(selector).forEach((el) => {
        el.style.display = cb.checked ? "" : "none";
    });
}

// DIALOG CONTROLLER (Mở / Đóng popup phóng to xem chi tiết bản ghi dữ liệu)
function openShadcnDialog(rowId) {
    const item = coreDataSource.find((d) => d.id === rowId);
    if (!item) return;

    document.getElementById("dialogMetaSTT").textContent =
        `STT-${String(item.id).padStart(2, "0")}`;
    document.getElementById("dialogMetaCsdlName").textContent = item.csdl;
    document.getElementById("dialogMetaBoNganh").textContent = item.boNganh;
    document.getElementById("dialogMetaChuQuan").textContent = item.chuQuan;
    document.getElementById("dialogProgressText").textContent =
        `${item.progress}%`;
    document.getElementById("dialogProgressBar").style.width =
        `${item.progress}%`;

    const criteriaItems = [
        { key: "Pháp lý", val: item.pl },
        { key: "Tài chính", val: item.tc },
        { key: "Hạ tầng", val: item.ht },
        { key: "Dữ liệu", val: item.dl },
        { key: "Phần mềm", val: item.pm },
        { key: "ATTT", val: item.attt },
    ];

    const gridBox = document.getElementById("dialogCriteriaGridBox");
    gridBox.innerHTML = criteriaItems
        .map(
            (c) => `
          <div class="p-2 border rounded-md flex items-center justify-between ${c.val ? "bg-emerald-50/40 border-emerald-200 text-emerald-900" : "bg-slate-50 border-slate-200 text-slate-500"}">
            <span class="font-medium text-slate-600">${c.key}</span>
            <span class="font-bold text-[11px]">${c.val ? "✔️ Đạt" : "❌ Chưa"}</span>
          </div>
        `,
        )
        .join("");

    document.getElementById("dialogGeneralStatusBadge").innerHTML =
        item.eval === "Đạt"
            ? `<span class="px-2.5 py-1 bg-slate-900 text-white rounded font-bold text-[11px]">🟢 Hệ thống đạt chuẩn</span>`
            : `<span class="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded font-bold text-[11px]">🔴 Cần hoàn thiện thêm</span>`;

    const modal = document.getElementById("chiTietDanhGia");
    const box = document.getElementById("dialogBoxStructure");
    modal.classList.remove("hidden");
    setTimeout(() => {
        box.classList.remove("scale-95", "opacity-0");
        box.classList.add("scale-100", "opacity-100");
    }, 20);
}

function closeShadcnDialog() {
    document
        .getElementById("dialogBoxStructure")
        .classList.add("scale-95", "opacity-0");
    setTimeout(() => {
        document.getElementById("chiTietDanhGia").classList.add("hidden");
    }, 140);
}

// Khởi chạy nền bảng ngay khi hệ thống xử lý xong DOM
document.addEventListener("DOMContentLoaded", () => renderTableEngine());