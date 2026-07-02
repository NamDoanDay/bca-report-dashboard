// Tập hợp dữ liệu giả lập chuẩn xác cấu trúc nghiệp vụ liên thông CSDL
const coreDataSource = [
    {
        id: 1,
        boNganh: "Bộ Quốc phòng",
        chuQuan: "Cục CNTT",
        csdl: "CSDL Quản lý Sĩ quan & Lực lượng Dự bị động viên",
        progress: 85,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 2,
        boNganh: "Bộ Công an",
        chuQuan: "Cục Cảnh sát QLHC về TTXH",
        csdl: "CSDL Quốc gia về Dân cư cơ bản",
        progress: 100,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: true,
        eval: "Đạt",
    },
    {
        id: 3,
        boNganh: "Bộ Ngoại giao",
        chuQuan: "Cục Lãnh sự",
        csdl: "CSDL Quản lý Thị thực và Hộ chiếu điện tử",
        progress: 70,
        pl: true,
        tc: true,
        ht: true,
        dl: false,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 4,
        boNganh: "Bộ Nội vụ",
        chuQuan: "Trung tâm Thông tin",
        csdl: "CSDL Toàn quốc về Cán bộ, Công chức, Viên chức",
        progress: 100,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: true,
        eval: "Đạt",
    },
    {
        id: 5,
        boNganh: "Bộ Tư pháp",
        chuQuan: "Cục CNTT",
        csdl: "CSDL Hộ tịch điện tử đồng bộ dữ liệu quốc gia",
        progress: 95,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: true,
        eval: "Đạt",
    },
    {
        id: 6,
        boNganh: "Bộ Tài chính",
        chuQuan: "Tổng cục Thuế",
        csdl: "CSDL Hóa đơn điện tử và Nghĩa vụ thuế tập trung",
        progress: 100,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: true,
        eval: "Đạt",
    },
    {
        id: 7,
        boNganh: "Bộ Công Thương",
        chuQuan: "Cục Thương mại điện tử",
        csdl: "CSDL Quản lý Chứng nhận xuất xứ hàng hóa điện tử",
        progress: 45,
        pl: false,
        tc: true,
        ht: false,
        dl: true,
        pm: false,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 8,
        boNganh: "Bộ Nông nghiệp & PTNT",
        chuQuan: "Cục Thủy sản",
        csdl: "CSDL Đăng ký tàu cá và Nhật ký khai thác hải sản",
        progress: 60,
        pl: true,
        tc: false,
        ht: true,
        dl: false,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 9,
        boNganh: "Bộ Xây dựng",
        chuQuan: "Trung tâm Thông tin",
        csdl: "CSDL Hệ thống thông tin thị trường bất động sản",
        progress: 75,
        pl: true,
        tc: true,
        ht: true,
        dl: false,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 10,
        boNganh: "Bộ VHTTDL",
        chuQuan: "Cục Du lịch Quốc gia",
        csdl: "CSDL Quản lý Danh mục di sản và cơ sở lữ hành",
        progress: 35,
        pl: false,
        tc: false,
        ht: true,
        dl: false,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 11,
        boNganh: "Bộ Khoa học & Công nghệ",
        chuQuan: "Cục Sở hữu trí tuệ",
        csdl: "CSDL Đăng ký Tài sản trí tuệ và Văn bằng bảo hộ",
        progress: 80,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
    {
        id: 12,
        boNganh: "Bộ Giáo dục & Đào tạo",
        chuQuan: "Cục QLCL Giáo dục",
        csdl: "CSDL Quốc gia về Văn bằng chứng chỉ liên thông",
        progress: 100,
        pl: true,
        tc: true,
        ht: true,
        dl: true,
        pm: true,
        attt: true,
        eval: "Đạt",
    },
    {
        id: 13,
        boNganh: "Bộ Y tế",
        chuQuan: "Cục Quản lý Dược",
        csdl: "CSDL Quản lý giá thuốc và hệ thống cung ứng Dược",
        progress: 55,
        pl: true,
        tc: false,
        ht: false,
        dl: true,
        pm: true,
        attt: false,
        eval: "Chưa đạt",
    },
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

    const modal = document.getElementById("shadcnDialogModal");
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
        document.getElementById("shadcnDialogModal").classList.add("hidden");
    }, 140);
}

// Khởi chạy nền bảng ngay khi hệ thống xử lý xong DOM
document.addEventListener("DOMContentLoaded", () => renderTableEngine());