document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.initMultipleBarChart === "function") window.initMultipleBarChart();

    if (window.coreDataSource && window.coreDataSource.length > 0) {
        if (typeof window.renderTableEngine === "function") window.renderTableEngine();
    }
});

// 1. ĐỊNH NGHĨA DỮ LIỆU TIÊU CHÍ THÀNH PHẦN CHI TIẾT
const criteriaData1 = {
    "Pháp lý": [
        { id: 1, q: "Đã có cơ sở pháp lý để triển khai xây dựng CSDL?", passed: 75 },
        { id: 2, q: "Đã ban hành quy trình thu thập, tạo lập dữ liệu?", passed: 60 },
        { id: 3, q: "Đã ban hành danh mục trường thông tin của CSDL?", passed: 45 },
    ],
    "Tài chính": [
        { id: 4, q: "Đã đăng ký nhu cầu vốn triển khai?", passed: 80 },
        { id: 5, q: "Đã được bố trí kinh phí triển khai?", passed: 55 },
    ],
    "Hạ tầng": [
        { id: 6, q: "CSDL đã được triển khai trên hạ tầng tập trung?", passed: 70 },
        { id: 7, q: "Hạ tầng đang vận hành tại TTDL đạt tiêu chuẩn?", passed: 65 },
    ],
    "Dữ liệu": [
        { id: 8, q: "Dữ liệu bảo đảm 'đúng'?", passed: 85 },
        { id: 9, q: "Dữ liệu bảo đảm 'đủ'?", passed: 78 },
        { id: 10, q: "Dữ liệu bảo đảm 'sạch'?", passed: 62 },
        { id: 11, q: "Dữ liệu bảo đảm 'sống'?", passed: 40 },
    ],
    "Phần mềm": [
        { id: 12, q: "Có phần mềm ứng dụng nội bộ xử lý nghiệp vụ?", passed: 90 },
        { id: 13, q: "Hỗ trợ bóc tách dữ liệu tự động?", passed: 70 }
    ],
    "ATTT": [
        { id: 14, q: "Hệ thống được phê duyệt hồ sơ cấp độ ATTT?", passed: 100 },
        { id: 15, q: "Đã triển khai giám sát SOC đầy đủ?", passed: 50 }
    ]
};

window.tableState = {
    boNganhFilter: "",
    subGlobalFilter: "",
    statusFilter: "all",
    advancedFilter: "all",
    sortDirection: "desc",
    currentPage: 1,
    rowsPerPage: 10,
    hiddenColumns: {
        chuQuan: false,
        tieuChiCon: false,
        danhGiaChung: false
    },
    // ---- BỔ SUNG 3 THUỘC TÍNH NÀY ----
    useProgressSlider: false,
    sliderMin: 0,
    sliderMax: 100
};

let _internalCoreData = window.coreDataSource || [];
Object.defineProperty(window, 'coreDataSource', {
    get: function () { return _internalCoreData; },
    set: function (newData) {
        _internalCoreData = newData;
        if (typeof window.renderTableEngine === "function") {
            window.renderTableEngine();
        }
    },
    configurable: true
});

window.renderTableEngine = function () {
    const dataSource = window.coreDataSource || [];
    if (!dataSource || dataSource.length === 0) {
        const tbody = document.getElementById("reactTableBody");
        if (tbody) {
            tbody.innerHTML = `<tr><td colspan="13" class="p-8 text-center text-slate-400 font-medium bg-slate-50/50"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Đang tải dữ liệu cấu phần dữ liệu...</td></tr>`;
        }
        return;
    }

    let filteredData = [...dataSource];

    if (window.tableState.boNganhFilter) {
        const keywordBoNganh = window.tableState.boNganhFilter.toLowerCase().trim();
        filteredData = filteredData.filter(d => d.boNganh && d.boNganh.toLowerCase().includes(keywordBoNganh));
    }

    if (window.tableState.subGlobalFilter) {
        const keywordSub = window.tableState.subGlobalFilter.toLowerCase().trim();
        filteredData = filteredData.filter(d =>
            (d.chuQuan && d.chuQuan.toLowerCase().includes(keywordSub)) ||
            (d.csdl && d.csdl.toLowerCase().includes(keywordSub))
        );
    }

    if (window.tableState.statusFilter !== "all") {
        filteredData = filteredData.filter(d => d.statusType === window.tableState.statusFilter);
    }

    // ======= CHÈN THÊM LOGIC BỘ LỌC SLIDER VÀO ĐÂY =======
    if (window.tableState.useProgressSlider) {
        filteredData = filteredData.filter(d => {
            // Chuẩn hóa tiến độ về số (Nếu là chuỗi hoặc rỗng thì quy về 0, "passed" quy về 100)
            let currentProgress = 0;
            if (d.statusType === "passed") currentProgress = 100;
            else if (d.statusType === "failed") currentProgress = 0;
            else currentProgress = parseInt(d.progress, 10) || 0;

            return currentProgress >= window.tableState.sliderMin && currentProgress <= window.tableState.sliderMax;
        });
    }
    // =====================================================

    filteredData.sort((a, b) => {
        return window.tableState.sortDirection === "asc" ? (a.progress || 0) - (b.progress || 0) : (b.progress || 0) - (a.progress || 0);
    });

    const totalRows = filteredData.length;
    const totalPages = Math.ceil(totalRows / window.tableState.rowsPerPage) || 1;
    if (window.tableState.currentPage > totalPages) window.tableState.currentPage = totalPages;

    const startIndex = (window.tableState.currentPage - 1) * window.tableState.rowsPerPage;
    const endIndex = Math.min(startIndex + window.tableState.rowsPerPage, totalRows);
    const paginatedData = filteredData.slice(startIndex, endIndex);

    const tbody = document.getElementById("reactTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (totalRows === 0) {
        tbody.innerHTML = `<tr><td colspan="13" class="p-8 text-center text-slate-400 font-medium bg-slate-50/50">Không tìm thấy bản ghi dữ liệu phù hợp.</td></tr>`;
        return;
    }

    paginatedData.forEach((row, index) => {
        // Tích hợp icon mắt ẩn, tự động hiện/ẩn hoán đổi với dấu chấm tròn khi hover vào ô
        const dotValid = `
            <div class="relative flex items-center justify-center w-6 h-6 mx-auto">
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-2xs group-hover:opacity-0 group-hover:scale-50 transition-all duration-150"></div>
                <i class="fa-solid fa-eye text-emerald-600 text-xs absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150"></i>
            </div>
        `;

        const dotInvalid = `
            <div class="relative flex items-center justify-center w-6 h-6 mx-auto">
                <div class="w-2.5 h-2.5 rounded-full bg-rose-200 border border-rose-400/30 shadow-2xs group-hover:opacity-0 group-hover:scale-50 transition-all duration-150"></div>
                <i class="fa-solid fa-eye text-rose-500 text-xs absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150"></i>
            </div>
        `;

        let badgeGeneral = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">🟢 Đã xây dựng</span>`;
        let textProgress = "Đã xong";

        if (row.statusType === "processing") {
            badgeGeneral = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold">🟡 Đang xây dựng</span>`;
            textProgress = `${row.progress || 0}%`;
        } else if (row.statusType === "failed") {
            badgeGeneral = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-semibold">🔴 Chưa xây dựng</span>`;
            textProgress = "Chưa làm";
        }

        // Tạo chuỗi an toàn mã hóa JSON để truyền trực tiếp vào thẻ onclick dạng đối tượng
        const rowDataString = JSON.stringify(row).replace(/"/g, '&quot;');

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50/70 transition-colors bg-white border-b border-slate-100";
        tr.innerHTML = `
            <td class="p-3 text-center font-mono text-slate-400 font-bold">${startIndex + index + 1}</td>
            <td class="p-3 font-semibold text-slate-900 bo-nganh-cell">${row.boNganh || ''}</td>
            <td class="p-3 text-slate-500 col-sub-holder ${window.tableState.hiddenColumns.chuQuan ? 'hidden' : ''}">${row.chuQuan || ''}</td>
            <td class="p-3 text-slate-700 font-medium max-w-sm truncate">${row.csdl || ''}</td>
            <td class="p-3 text-center font-bold text-slate-900 font-mono">${textProgress}</td>
            
            <td class="p-3 col-sub-criteria cursor-pointer hover:bg-slate-100 group transition-all text-center ${window.tableState.hiddenColumns.tieuChiCon ? 'hidden' : ''}" 
                onclick="event.stopPropagation(); window.openSubPopupFromTable(${rowDataString}, 'pl')" title="Xem chi tiết tiêu chí Pháp lý">
                ${row.pl ? dotValid : dotInvalid}
            </td>
            
            <td class="p-3 col-sub-criteria cursor-pointer hover:bg-slate-100 group transition-all text-center ${window.tableState.hiddenColumns.tieuChiCon ? 'hidden' : ''}" 
                onclick="event.stopPropagation(); window.openSubPopupFromTable(${rowDataString}, 'tc')" title="Xem chi tiết tiêu chí Tài chính">
                ${row.tc ? dotValid : dotInvalid}
            </td>
            
            <td class="p-3 col-sub-criteria cursor-pointer hover:bg-slate-100 group transition-all text-center ${window.tableState.hiddenColumns.tieuChiCon ? 'hidden' : ''}" 
                onclick="event.stopPropagation(); window.openSubPopupFromTable(${rowDataString}, 'ht')" title="Xem chi tiết tiêu chí Hạ tầng">
                ${row.ht ? dotValid : dotInvalid}
            </td>
            
            <td class="p-3 col-sub-criteria cursor-pointer hover:bg-slate-100 group transition-all text-center ${window.tableState.hiddenColumns.tieuChiCon ? 'hidden' : ''}" 
                onclick="event.stopPropagation(); window.openSubPopupFromTable(${rowDataString}, 'dl')" title="Xem chi tiết tiêu chí Dữ liệu">
                ${row.dl ? dotValid : dotInvalid}
            </td>
            
            <td class="p-3 col-sub-criteria cursor-pointer hover:bg-slate-100 group transition-all text-center ${window.tableState.hiddenColumns.tieuChiCon ? 'hidden' : ''}" 
                onclick="event.stopPropagation(); window.openSubPopupFromTable(${rowDataString}, 'pm')" title="Xem chi tiết tiêu chí Phần mềm">
                ${row.pm ? dotValid : dotInvalid}
            </td>
            
            <td class="p-3 col-sub-criteria cursor-pointer hover:bg-slate-100 group transition-all text-center ${window.tableState.hiddenColumns.tieuChiCon ? 'hidden' : ''}" 
                onclick="event.stopPropagation(); window.openSubPopupFromTable(${rowDataString}, 'attt')" title="Xem chi tiết tiêu chí ATTT">
                ${row.attt ? dotValid : dotInvalid}
            </td>

            <td class="p-3 text-center col-sub-eval ${window.tableState.hiddenColumns.danhGiaChung ? 'hidden' : ''}">${badgeGeneral}</td>
            <td class="p-3 text-center">
                <button onclick="openShadcnDialog(${row.id})" class="w-6 h-6 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-all shadow-2xs mx-auto">
                    <i class="fa-solid fa-expand text-[10px]"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const counterRows = document.getElementById("counterRowsSummary");
    if (counterRows) {
        counterRows.textContent = `Hiển thị từ ${startIndex + 1} đến ${endIndex} trên tổng số ${totalRows} hệ thống CSDL được lọc.`;
    }

    window.updatePaginationUI(totalRows);
};
window.toggleProgressSort = function () {
    window.tableState.sortDirection = window.tableState.sortDirection === "desc" ? "asc" : "desc";
    const label = document.getElementById("sortLabelText");
    if (label) label.textContent = window.tableState.sortDirection === "desc" ? "Giảm dần" : "Tăng dần";
    window.renderTableEngine();
};

window.toggleColumnMenuDropdown = function (event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("columnDisplayDropdownMenu");
    if (dropdown) dropdown.classList.toggle("hidden");
};

window.toggleTableColDynamic = function (type, checkbox) {
    if (!window.tableState.hiddenColumns.hasOwnProperty(type)) return;
    window.tableState.hiddenColumns[type] = !checkbox.checked;

    if (type === "chuQuan") {
        document.querySelectorAll("th.col-sub-holder").forEach(el => el.classList.toggle("hidden", !checkbox.checked));
    } else if (type === "tieuChiCon") {
        document.querySelectorAll("th.col-sub-criteria").forEach(el => el.classList.toggle("hidden", !checkbox.checked));
    } else if (type === "danhGiaChung") {
        document.querySelectorAll("th.col-sub-eval").forEach(el => el.classList.toggle("hidden", !checkbox.checked));
    }
    window.renderTableEngine();
};

document.addEventListener("click", () => {
    const dropdown = document.getElementById("columnDisplayDropdownMenu");
    if (dropdown) dropdown.classList.add("hidden");
});

window.onTableStateChange = function () {
    const subInput = document.getElementById("donViCSDLSearchInput");
    window.tableState.subGlobalFilter = subInput ? subInput.value : "";
    window.tableState.currentPage = 1;
    window.renderTableEngine();
};

// Khởi tạo bộ lưu trữ cache toàn cục
let activeCriteriaCache = null;

/**
 * Hàm cầu nối trung gian hỗ trợ mở nhanh Sub-Popup trực tiếp từ Table Cell
 */
window.openSubPopupFromTable = function (rowObj, fieldCode) {
    if (!rowObj || !fieldCode) return;

    // Nạp dữ liệu dòng được chọn vào cache trước để sub-popup đọc căn cứ pháp lý lý thuyết/thực tế
    activeCriteriaCache = rowObj;

    const mapping = {
        pl: { key: "Pháp lý", icon: "fa-scale-balanced" },
        tc: { key: "Tài chính", icon: "fa-coins" },
        ht: { key: "Hạ tầng", icon: "fa-server" },
        dl: { key: "Dữ liệu", icon: "fa-database" },
        pm: { key: "Phần mềm", icon: "fa-laptop-code" },
        attt: { key: "ATTT", icon: "fa-shield-halved" }
    };

    const target = mapping[fieldCode];
    if (!target) return;

    const isPassed = rowObj[fieldCode] ? 1 : 0;

    // Kích hoạt hiển thị popup chi tiết tiêu chí trực tiếp lên màn hình
    if (typeof window.openSubPopup === "function") {
        window.openSubPopup(target.key, isPassed, target.icon);
    }
};

window.openShadcnDialog = function (rowId) {
    const dataSource = window.coreDataSource || [];
    const item = dataSource.find((d) => d.id === rowId);
    if (!item) return;

    const modal = document.getElementById("chiTietDanhGia");
    if (!modal) return;

    // Lưu dữ liệu tổng của item hiện tại vào cache
    activeCriteriaCache = item;

    // Đồng bộ cấu hình kích thước giao diện chính
    const modalContentContainer = modal.querySelector('.bg-white, [class*="bg-white"]');
    if (modalContentContainer) {
        modalContentContainer.classList.remove("max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl", "max-w-3xl", "max-w-4xl");
        modalContentContainer.className = "bg-white w-full max-w-5xl h-[80vh] max-h-[85vh] rounded-2xl shadow-xl border border-slate-100 flex flex-col overflow-hidden transition-all duration-200 relative animate-in fade-in zoom-in-95";
    }

    if (document.getElementById("dialogMetaSTT")) document.getElementById("dialogMetaSTT").innerHTML = `<i class="fa-solid fa-fingerprint mr-1"></i>STT-${String(item.id).padStart(2, "0")}`;
    if (document.getElementById("dialogMetaCsdlName")) document.getElementById("dialogMetaCsdlName").textContent = item.csdl;

    const elBoNganh = document.getElementById("dialogMetaBoNghanh") || document.getElementById("dialogMetaBoNganh");
    if (elBoNganh) elBoNganh.innerHTML = `<i class="fa-solid fa-building text-slate-400 mr-2"></i><span class="text-slate-500 inline-block w-24">Bộ ban ngành:</span><span class="font-semibold text-slate-800">${item.boNganh}</span>`;
    if (document.getElementById("dialogMetaChuQuan")) document.getElementById("dialogMetaChuQuan").innerHTML = `<i class="fa-solid fa-users text-slate-400 mr-2"></i><span class="text-slate-500 inline-block w-24">Đơn vị chủ quản:</span><span class="font-medium text-slate-700">${item.chuQuan}</span>`;

    let progressValue = item.progress || 0;
    let progressColorClass = "bg-amber-500";

    const elProgText = document.getElementById("dialogProgressText");
    if (elProgText) {
        if (item.statusType === "passed") {
            elProgText.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i>Đã hoàn thành`;
            progressColorClass = "bg-emerald-500";
        } else if (item.statusType === "failed") {
            elProgText.innerHTML = `<i class="fa-solid fa-circle-minus text-rose-500 mr-1"></i>Chưa làm`;
            progressColorClass = "bg-slate-200";
            progressValue = 0;
        } else {
            elProgText.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-amber-500 mr-1"></i>Tiến độ: ${progressValue}%`;
            progressColorClass = "bg-amber-500";
        }
    }

    const progressBar = document.getElementById("dialogProgressBar");
    if (progressBar) {
        progressBar.className = `h-full rounded-full transition-all duration-500 ${progressColorClass}`;
        progressBar.style.width = `${progressValue}%`;
    }

    const criteriaConfig = [
        { key: "Pháp lý", val: item.pl, icon: "fa-scale-balanced" },
        { key: "Tài chính", val: item.tc, icon: "fa-coins" },
        { key: "Hạ tầng", val: item.ht, icon: "fa-server" },
        { key: "Dữ liệu", val: item.dl, icon: "fa-database" },
        { key: "Phần mềm", val: item.pm, icon: "fa-laptop-code" },
        { key: "ATTT", val: item.attt, icon: "fa-shield-halved" },
    ];

    const gridBox = document.getElementById("dialogCriteriaGridBox");
    if (gridBox) {
        gridBox.style.display = "grid";
        gridBox.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";
        gridBox.style.gap = "14px";

        gridBox.innerHTML = criteriaConfig.map((c) => {
            const bgClass = c.val
                ? "bg-emerald-50/60 hover:bg-emerald-50 border-emerald-200 text-emerald-900 shadow-2xs"
                : "bg-rose-50/40 hover:bg-rose-50/70 border-rose-100 text-slate-500";

            const statusBadge = c.val
                ? "<span class='px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold'><i class='fa-solid fa-check mr-1'></i> Đạt</span>"
                : "<span class='px-2 py-0.5 rounded bg-rose-400 text-white text-[10px] font-bold'><i class='fa-solid fa-xmark mr-1'></i> Chưa đạt</span>";

            return `
                <div onclick="openSubPopup('${c.key}', ${c.val ? 1 : 0}, '${c.icon}')" 
                     class="border rounded-xl p-4 flex items-center justify-between cursor-pointer select-none transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] group ${bgClass}">
                    <div class="flex items-center gap-3 truncate">
                        <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-700 shadow-3xs group-hover:text-slate-900 transition-colors shrink-0">
                            <i class="fa-solid ${c.icon} text-base"></i>
                        </div>
                        <div class="flex flex-col text-left truncate">
                            <span class="font-bold text-sm text-slate-800 leading-tight">${c.key}</span>
                            <span class="text-[11px] text-slate-400 mt-0.5 font-medium">Bấm xem chi tiết</span>
                        </div>
                    </div>
                    <div class="shrink-0 pl-1">
                        ${statusBadge}
                    </div>
                </div>
            `;
        }).join("");
    }

    const generalBadge = document.getElementById("dialogGeneralStatusBadge");
    if (generalBadge) {
        generalBadge.innerHTML =
            item.statusType === "passed" ? `<span class="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold text-[11px]"><i class="fa-solid fa-circle text-[8px] mr-1.5 align-middle"></i>Đã xây dựng</span>` :
                (item.statusType === "failed" ? `<span class="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full font-bold text-[11px]"><i class="fa-solid fa-circle text-[8px] mr-1.5 align-middle"></i>Chưa xây dựng</span>` :
                    `<span class="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full font-bold text-[11px]"><i class="fa-solid fa-circle text-[8px] mr-1.5 align-middle"></i>Đang xây dựng</span>`);
    }

    modal.classList.remove("hidden");
};

/**
 * Mở Sidebar bằng cách xóa class hidden, thêm class flex
 */
window.openLegalLeftSidebar = function () {
    const sidebar = document.getElementById("legalLeftSidebar");
    if (sidebar) {
        sidebar.classList.remove("hidden");
        sidebar.classList.add("flex");
    }
};

/**
 * Đóng Sidebar bằng cách xóa class flex, thêm lại class hidden
 */
window.closeLegalLeftSidebar = function () {
    const sidebar = document.getElementById("legalLeftSidebar");
    if (sidebar) {
        sidebar.classList.remove("flex");
        sidebar.classList.add("hidden");
    }
};

// ==========================================
// HÀM XỬ LÝ QUẢN LÝ POPUP PHỤ TIÊU CHÍ CHI TIẾT
// ==========================================

window.openSubPopup = function (criteriaKey, isPassed, iconClass) {
    if (!activeCriteriaCache) return;

    const subPopup = document.getElementById("popupTieuChiChiTiet");
    const headerTitle = document.getElementById("subPopupHeaderTitle");
    const bodyContent = document.getElementById("subPopupBodyContent");

    if (!subPopup || !headerTitle || !bodyContent) return;

    // 1. Tạo Header cho Popup phụ
    const badgeStatus = isPassed
        ? "<span class='px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold'><i class='fa-solid fa-check mr-1'></i> Đạt tiêu chuẩn</span>"
        : "<span class='px-2 py-0.5 rounded-md bg-rose-400 text-white text-[10px] font-bold'><i class='fa-solid fa-xmark mr-1'></i> Chưa đáp ứng</span>";

    headerTitle.innerHTML = `
        <div class="w-8 h-8 rounded-lg bg-slate-200/60 border border-slate-200 flex items-center justify-center text-slate-800">
            <i class="fa-solid ${iconClass} text-sm"></i>
        </div>
        <div class="flex items-center gap-2">
            <h5 class="font-bold text-slate-900 text-sm">Tiêu chí: ${criteriaKey}</h5>
            ${badgeStatus}
        </div>
    `;

    // 2. Lấy danh sách văn bản căn cứ pháp lý & Tiêu chí thành phần (Sửa đổi đồng bộ criteriaData1)
    const subList = criteriaData1[criteriaKey] || [];
    const basisArray = activeCriteriaCache.legalBasis && activeCriteriaCache.legalBasis.length > 0
        ? activeCriteriaCache.legalBasis
        : [`Căn cứ văn bản chỉ đạo hệ thống & Quy chuẩn vận hành kỹ thuật liên quan đến phân hệ ${criteriaKey}.`];

    const basisHtml = basisArray.map(b => `
        <div class="text-slate-600 font-medium text-[12px] leading-relaxed py-0.5 text-left">
            <i class="fa-solid fa-bookmark text-amber-500 mr-2"></i>${b}
        </div>
    `).join("");

    const subItemsHtml = subList.map(sub => `
        <div class="p-3 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2 relative">
            <i onclick="window.openLegalLeftSidebar()" 
               class="fa-solid fa-up-right-and-down-left-from-center absolute top-3 right-3 text-slate-400 text-[12px] hover:scale-110 hover:text-black cursor-pointer transition-all"></i>
            
            <div class="flex flex-col gap-2 text-left">
                <p class="text-xs font-semibold text-slate-800 leading-normal pr-4">
                    <i class="fa-regular fa-circle-question text-slate-400 mr-1.5"></i>${sub.q}
                </p>
                <span class="text-[10px] font-bold ${isPassed ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-slate-400 bg-slate-100 border-slate-200'} px-2 py-0.5 rounded-md border self-start">
                    Mức độ đáp ứng: ${isPassed ? sub.passed + '%' : '0%'}
                </span>
            </div>
        </div>
    `).join("");

    // 3. Đổ dữ liệu vào vùng nội dung
    bodyContent.innerHTML = `
        <div class="p-3.5 bg-amber-50/40 border border-amber-100 rounded-xl space-y-1.5 animate-in fade-in-50 duration-200">
            <span class="text-[10px] uppercase tracking-wider font-bold text-slate-400 block text-left"><i class="fa-solid fa-scroll mr-1"></i>Hồ sơ tài liệu / Căn cứ pháp lý</span>
            <div class="space-y-1">${basisHtml}</div>
        </div>
        
        <div class="space-y-2.5">
            <span class="text-[10px] uppercase tracking-wider font-bold text-slate-400 block text-left"><i class="fa-solid fa-list-check mr-1"></i>Danh mục tiêu chí thành phần kiểm tra</span>
            <div class="space-y-2">${subItemsHtml || '<p class="text-slate-400 italic">Không có dữ liệu tiêu chí con.</p>'}</div>
        </div>
    `;

    subPopup.classList.remove("hidden");
};

// Đóng Popup phụ độc lập
window.closeSubPopup = function () {
    const subPopup = document.getElementById("popupTieuChiChiTiet");
    if (subPopup) subPopup.classList.add("hidden");
};

// Hàm xử lý khi bấm ra vùng trống bên ngoài của Sub Popup để Close
window.handleSubPopupBackdropClick = function (event) {
    const subPopup = document.getElementById("popupTieuChiChiTiet");
    if (event.target === subPopup) {
        closeSubPopup();
    }
};

// BỔ SUNG SỰ KIỆN PHÍM TẮT: NHẤN ESC ĐỂ TỰ ĐỘNG ĐÓNG POPUP
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
        // Ưu tiên đóng popup phụ trước
        const subPopup = document.getElementById("popupTieuChiChiTiet");
        if (subPopup && !subPopup.classList.contains("hidden")) {
            closeSubPopup();
            return;
        }
        // Sau đó đóng popup lớn
        const mainModal = document.getElementById("chiTietDanhGia");
        if (mainModal && !mainModal.classList.contains("hidden")) {
            closeShadcnDialog();
        }
    }
});

function closeShadcnDialog() {
    const modal = document.getElementById("chiTietDanhGia");
    if (modal) modal.classList.add("hidden");
    activeCriteriaCache = null; // giải phóng bộ nhớ tạm
}

/**
 * Hàm xử lý chuyển trang (Lùi trang hoặc Tiến trang)
 * @param {number} direction - Nhận giá trị -1 (Lùi trang) hoặc 1 (Tiến trang)
 */
window.goToPage = function (direction) {
    // 1. Tính toán lại tổng số dòng sau khi đã qua bộ lọc (Filter)
    const dataSource = window.coreDataSource || [];
    let filteredData = [...dataSource];

    if (window.tableState.boNganhFilter) {
        const keywordBoNganh = window.tableState.boNganhFilter.toLowerCase().trim();
        filteredData = filteredData.filter(d => d.boNganh && d.boNganh.toLowerCase().includes(keywordBoNganh));
    }

    if (window.tableState.subGlobalFilter) {
        const keywordSub = window.tableState.subGlobalFilter.toLowerCase().trim();
        filteredData = filteredData.filter(d =>
            (d.chuQuan && d.chuQuan.toLowerCase().includes(keywordSub)) ||
            (d.csdl && d.csdl.toLowerCase().includes(keywordSub))
        );
    }

    if (window.tableState.statusFilter !== "all") {
        filteredData = filteredData.filter(d => d.statusType === window.tableState.statusFilter);
    }

    const totalRows = filteredData.length;
    const totalPages = Math.ceil(totalRows / window.tableState.rowsPerPage) || 1;

    // 2. Cập nhật trang hiện tại dựa trên hướng click
    const targetPage = window.tableState.currentPage + direction;

    // Kiểm tra chặn nếu vượt quá giới hạn trang cho phép
    if (targetPage >= 1 && targetPage <= totalPages) {
        window.tableState.currentPage = targetPage;

        // 3. Render lại dữ liệu bảng cho trang mới
        window.renderTableEngine();
    }
};

/**
 * Hàm cập nhật trạng thái hiển thị của các nút phân trang và text thông báo
 * @param {number} totalRows - Tổng số dòng sau khi lọc
 */
window.updatePaginationUI = function (totalRows) {
    const totalPages = Math.ceil(totalRows / window.tableState.rowsPerPage) || 1;

    // Đảm bảo trang hiện tại không vượt quá tổng số trang hợp lệ
    if (window.tableState.currentPage > totalPages) {
        window.tableState.currentPage = totalPages;
    }

    // 1. Cập nhật Text hiển thị: "Trang X / Y"
    const paginationInfo = document.getElementById("paginationInfo");
    if (paginationInfo) {
        paginationInfo.textContent = `Trang ${window.tableState.currentPage} / ${totalPages}`;
    }

    // 2. Vô hiệu hóa (Disable) nút bấm nếu ở trang đầu hoặc trang cuối
    const prevPageBtn = document.getElementById("prevPageBtn");
    const nextPageBtn = document.getElementById("nextPageBtn");

    if (prevPageBtn) {
        prevPageBtn.disabled = (window.tableState.currentPage === 1);
    }
    if (nextPageBtn) {
        nextPageBtn.disabled = (window.tableState.currentPage === totalPages);
    }
};

/**
 * Hàm xử lý khi người dùng thay đổi số lượng hàng hiển thị trên một trang
 */
window.onRowsPerPageChange = function () {
    const select = document.getElementById("rowsPerPageSelect");
    if (!select) return;

    // Cập nhật cấu hình rowsPerPage mới và quay về trang 1 để tránh lỗi lệch index
    window.tableState.rowsPerPage = parseInt(select.value, 10) || 10;
    window.tableState.currentPage = 1;

    // Render lại giao diện
    window.renderTableEngine();
};

/**
 * Hàm ẩn/hiện container Slider khi click checkbox
 */
window.toggleProgressSlider = function (checkbox) {
    const container = document.getElementById("sliderContainer");
    window.tableState.useProgressSlider = checkbox.checked;

    if (checkbox.checked) {
        container.classList.remove("hidden");
    } else {
        container.classList.add("hidden");
        // Reset lại giá trị lọc về mặc định khi tắt tính năng
        window.tableState.sliderMin = 0;
        window.tableState.sliderMax = 100;
        document.getElementById("sliderMinInput").value = 0;
        document.getElementById("sliderMaxInput").value = 100;
        window.updateSliderTrackUI();
    }
    window.tableState.currentPage = 1; // Reset về trang 1
    window.renderTableEngine();
};

/**
 * Hàm đồng bộ giá trị kéo từ giao diện vào logic bộ lọc
 */
window.onSliderInputChange = function () {
    const minInput = document.getElementById("sliderMinInput");
    const maxInput = document.getElementById("sliderMaxInput");

    let minVal = parseInt(minInput.value, 10);
    let maxVal = parseInt(maxInput.value, 10);

    // Xử lý chặn nếu người dùng kéo nút Min vượt quá nút Max
    if (minVal > maxVal) {
        let temp = minVal;
        minVal = maxVal;
        maxVal = temp;
    }

    window.tableState.sliderMin = minVal;
    window.tableState.sliderMax = maxVal;

    // Cập nhật giao diện thanh kéo và nhãn văn bản
    window.updateSliderTrackUI();

    // Thực thi lọc dữ liệu tức thì (Real-time Filter)
    window.tableState.currentPage = 1;
    window.renderTableEngine();
};

/**
 * Hàm vẽ lại thanh màu xanh đại diện khoảng cách giữa 2 nút kéo
 */
window.updateSliderTrackUI = function () {
    const min = window.tableState.sliderMin;
    const max = window.tableState.sliderMax;

    document.getElementById("sliderRangeLabel").textContent = `${min}% - ${max}%`;

    const activeTrack = document.getElementById("sliderActiveTrack");
    if (activeTrack) {
        activeTrack.style.left = `${min}%`;
        activeTrack.style.right = `${100 - max}%`;
    }
};