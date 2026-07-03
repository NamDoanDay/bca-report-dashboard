// 1. DỮ LIỆU ĐÁNH GIÁ MẪU (Tổng số CSDL cần đánh giá = 100)
const TOTAL_CSDL = 100;

const criteriaData = {
    "Pháp lý": [
        {
            id: 1,
            q: "Đã có cơ sở pháp lý để triển khai xây dựng CSDL?",
            passed: 75,
        },
        {
            id: 2,
            q: "Đã ban hành quy trình thu thập, tạo lập dữ liệu?",
            passed: 60,
        },
        {
            id: 3,
            q: "Đã ban hành danh mục trường thông tin của CSDL?",
            passed: 45,
        },
    ],
    "Tài chính": [
        { id: 4, q: "Đã đăng ký nhu cầu vốn triển khai?", passed: 80 },
        { id: 5, q: "Đã được bố trí kinh phí triển khai?", passed: 55 },
    ],
    "Hạ tầng": [
        {
            id: 6,
            q: "CSDL đã được triển khai trên hạ tầng tập trung?",
            passed: 70,
        },
        {
            id: 7,
            q: "Hạ tầng đang vận hành tại TTDL đạt tiêu chuẩn?",
            passed: 65,
        },
    ],
    "Dữ liệu": [
        { id: 8, q: "Dữ liệu bảo đảm 'đúng'?", passed: 85 },
        { id: 9, q: "Dữ liệu bảo đảm 'đủ'?", passed: 78 },
        { id: 10, q: "Dữ liệu bảo đảm 'sạch'?", passed: 62 },
        { id: 11, q: "Dữ liệu bảo đảm 'sống'?", passed: 40 },
    ],
};

// 2. GIẢ LẬP DỮ LIỆU DANH SÁCH BỘ BAN NGÀNH (Bổ sung thêm: Đơn vị chủ quản, Căn cứ pháp lý mẫu)
const mockMinistries = [
    {
        ministry: "Bộ Xây dựng",
        ownerUnit: "Cục Quản lý Nhà và Thị trường Bất động sản",
        csdl: "CSDL Quốc gia về Cấp thoát nước đô thị",
        status: "passed",
        legalBasis: ["Nghị quyết NQ123/BCA-TTDLQG", "Thông tư TT05/2024/BXD"]
    },
    {
        ministry: "Bộ Công An",
        ownerUnit: "Cục Cảnh sát QLHC về trật tự xã hội",
        csdl: "CSDL Căn cước công dân và Định danh xác thực",
        status: "passed",
        legalBasis: ["Nghị quyết NQ123/BCA-TTDLQG", "Đáp ứng yêu cầu NQ123/TTg-CP"]
    },
    {
        ministry: "Bộ Tài nguyên và Môi trường",
        ownerUnit: "Cục Chuyển đổi số và Thông tin dữ liệu TNMT",
        csdl: "CSDL Đất đai quốc gia",
        status: "passed",
        legalBasis: ["Đã ban hành theo thông tư TT123/abc-xyz"]
    },
    {
        ministry: "Bộ Giao thông Vận tải",
        ownerUnit: "Cục Đăng kiểm Việt Nam",
        csdl: "CSDL Đăng kiểm phương tiện giao thông",
        status: "failed",
        legalBasis: ["Chưa ban hành thông tư hướng dẫn", "Chưa ban đáp ứng NQ123/TTg-CP"]
    },
    {
        ministry: "Bộ Y tế",
        ownerUnit: "Cục Công nghệ thông tin",
        csdl: "CSDL Hồ sơ sức khỏe điện tử toàn dân",
        status: "failed",
        legalBasis: ["Đang dự thảo Quyết định phối hợp"]
    },
    {
        ministry: "Bộ Giáo dục và Đào tạo",
        ownerUnit: "Trung tâm Chuyển đổi số và Thống kê",
        csdl: "CSDL Văn bằng chứng chỉ số",
        status: "passed",
        legalBasis: ["Thông tư TT21/2023/BGDĐT", "Đáp ứng yêu cầu NQ123/TTg-CP"]
    },
    {
        ministry: "Bộ Tài chính",
        ownerUnit: "Tổng cục Thuế",
        csdl: "CSDL Thuế thu nhập doanh nghiệp tập trung",
        status: "failed",
        legalBasis: ["Vướng mắc tại văn bản quy định cũ"]
    },
];

let polarChartsInstances = {};
let globalPieChart = null;
let activePopupItem = null; // Lưu trữ tiêu chí đang mở popup
let currentPopupTab = "passed"; // Lưu trạng thái tab hiện tại trong popup

// KHỞI TẠO BIỂU ĐỒ TRÒN Ở MÀN HÌNH TỔNG QUAN
function initPieChart() {
    if (globalPieChart) globalPieChart.destroy();
    const ctx = document.getElementById("csdlPieChart").getContext("2d");
    globalPieChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Đã xây dựng", "Đang xây dựng", "Chưa xây dựng"],
            datasets: [
                {
                    data: [17, 8, 1],
                    backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: { boxWidth: 10, font: { size: 9, weight: "bold" } },
                },
            },
        },
    });
}

// CHUYỂN ĐỔI TAB CHÍNH (TỔNG QUAN <-> TIÊU CHÍ)
function switchTab(tabName) {
    const title = document.getElementById("dynamicSectionTitle");
    const filterWrapper = document.getElementById("groupFilterWrapper");

    document.getElementById("tab-tongquan").className =
        "px-3 py-1 text-gray-400 hover:bg-gray-200/50 rounded transition-all";
    document.getElementById("tab-tieuchi").className =
        "px-3 py-1 text-gray-400 hover:bg-gray-200/50 rounded transition-all";
    document.getElementById("tab-content-tongquan").classList.add("hidden");
    document.getElementById("tab-content-tieuchi").classList.add("hidden");

    if (tabName === "tongquan") {
        title.textContent = "Tổng Quan";
        filterWrapper.classList.add("hidden");
        document.getElementById("tab-tongquan").className =
            "px-3 py-1 bg-white rounded shadow-sm text-gray-800 font-semibold transition-all";
        document
            .getElementById("tab-content-tongquan")
            .classList.remove("hidden");
        initPieChart();
    } else {
        title.textContent = "Nhóm tiêu chí đánh giá CSDL";
        filterWrapper.classList.remove("hidden");
        document.getElementById("tab-tieuchi").className =
            "px-3 py-1 bg-white rounded shadow-sm text-gray-800 font-semibold transition-all";
        document
            .getElementById("tab-content-tieuchi")
            .classList.remove("hidden");
        renderCriteriaDashboard();
    }
}

// DỰNG TOÀN BỘ GIAO DIỆN MÀN TIÊU CHÍ
function renderCriteriaDashboard() {
    const container = document.getElementById("tab-content-tieuchi");
    container.innerHTML = "";

    Object.values(polarChartsInstances).forEach((chart) => chart.destroy());
    polarChartsInstances = {};

    Object.keys(criteriaData).forEach((groupName) => {
        const listItems = criteriaData[groupName];
        const safeName = groupName.replace(/\s+/g, "");

        const groupWrapper = document.createElement("div");
        groupWrapper.className =
            "group-card-wrapper border border-slate-200 rounded-2xl p-5 bg-white shadow-sm space-y-4";
        groupWrapper.setAttribute("data-group-name", groupName);

        groupWrapper.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <div>
            <span class="text-md bg-teal-50 text-teal-700 font-bold px-2 py-1 rounded tracking-wide uppercase">${groupName}</span>
          </div>
          <button id="btn-toggle-${safeName}" onclick="toggleColumnsAction(this, '${safeName}')" class="flex items-center gap-1.5 text-[11px] bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-700 px-3 py-1.5 rounded-lg font-bold transition-all">
            <span>Xem tiêu chí</span>
            <i class="fa-solid fa-angles-right text-[10px]"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          <div class="col-span-12 lg:col-span-12 transition-all duration-300 flex justify-center items-center py-4 bg-slate-50/40 border border-slate-100 rounded-xl" id="chart-panel-${safeName}">
            <div class="w-full max-w-[340px] h-60 cursor-pointer">
              <canvas id="polar-${safeName}"></canvas>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-6 hidden space-y-2.5 transition-all duration-300 overflow-y-auto max-h-[250px] pr-1" id="criteria-panel-${safeName}">
            ${listItems
                .map((item) => {
                    const per = Math.round((item.passed / TOTAL_CSDL) * 100);
                    return `
                <div class="p-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-teal-400 hover:shadow-sm transition-all flex items-center justify-between gap-4 relative group/item">
                  <div class="flex-1">
                    <p class="text-xs font-bold text-slate-700 leading-snug">${item.q}</p>
                    <div class="flex items-center gap-2 mt-1.5">
                      <span class="text-[10px] font-bold text-slate-400">Đáp ứng: ${item.passed}/${TOTAL_CSDL}</span>
                      <span class="text-[10px] font-bold text-teal-600">(${per}%)</span>
                    </div>
                  </div>
                  <button onclick="openMinistryModal('${groupName}', ${item.id})" class="flex-shrink-0 w-7 h-7 bg-white border border-slate-200 text-slate-400 hover:text-teal-600 hover:border-teal-300 rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-90" title="Xem chi tiết bộ ngành">
                    <i class="fa-solid fa-expand text-xs"></i>
                  </button>
                </div>
              `;
                })
                .join("")}
          </div>

        </div>
      `;

        container.appendChild(groupWrapper);
        renderPolarChart(groupName, listItems);
    });
}

// KHỞI TẠO BIỂU ĐỒ VÀ BỔ SUNG SỰ KIỆN CLICK VÀO CHART ĐỂ MỞ RỘNG
function renderPolarChart(groupName, items) {
    const safeName = groupName.replace(/\s+/g, "");
    const ctx = document.getElementById(`polar-${safeName}`).getContext("2d");
    const labels = items.map((i) =>
        i.q.length > 25 ? i.q.substring(0, 25) + "..." : i.q,
    );
    const dataValues = items.map((i) => i.passed);

    polarChartsInstances[groupName] = new Chart(ctx, {
        type: "polarArea",
        data: {
            labels: labels,
            datasets: [
                {
                    data: dataValues,
                    backgroundColor: [
                        "rgba(20, 184, 166, 0.65)",
                        "rgba(59, 130, 246, 0.65)",
                        "rgba(245, 158, 11, 0.65)",
                        "rgba(239, 68, 68, 0.65)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                // Nhấp vào vùng bất kỳ của Chart sẽ tự động mở/đóng bảng tiêu chí bên cạnh
                const btnToggle = document.getElementById(`btn-toggle-${safeName}`);
                if (btnToggle) {
                    toggleColumnsAction(btnToggle, safeName);
                }

                // Nếu click trúng một phần tử cụ thể, mở trực tiếp Modal chi tiết của phần tử đó
                if (elements && elements.length > 0) {
                    const index = elements[0].index;
                    const clickedItem = items[index];
                    if (clickedItem) {
                        openMinistryModal(groupName, clickedItem.id);
                    }
                }
            },
            scales: {
                r: {
                    max: TOTAL_CSDL,
                    ticks: { display: false },
                    grid: { color: "#f1f5f9" },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 8,
                        font: { size: 9, weight: "medium" },
                        padding: 6,
                    },
                },
            },
        },
    });
}

// XỬ LÝ COLLAPSE VÀ EXPAND ĐỂ BIẾN ĐỔI SANG GRID COLUMN 2 CỦA CÁC NHÓM CARD TIÊU CHÍ
function toggleColumnsAction(btn, safeName) {
    const chartPanel = document.getElementById(`chart-panel-${safeName}`);
    const criteriaPanel = document.getElementById(`criteria-panel-${safeName}`);
    const label = btn.querySelector("span");
    const icon = btn.querySelector("i");

    if (criteriaPanel.classList.contains("hidden")) {
        chartPanel.className =
            "col-span-12 lg:col-span-6 transition-all duration-300 flex justify-center items-center py-4 bg-slate-50/40 border border-slate-100 rounded-xl";
        criteriaPanel.classList.remove("hidden");
        label.textContent = "Thu gọn nội dung";
        icon.className = "fa-solid fa-angles-left text-[10px]";
    } else {
        chartPanel.className =
            "col-span-12 lg:col-span-12 transition-all duration-300 flex justify-center items-center py-4 bg-slate-50/40 border border-slate-100 rounded-xl";
        criteriaPanel.classList.add("hidden");
        label.textContent = "Xem tiêu chí";
        icon.className = "fa-solid fa-angles-right text-[10px]";
    }
}

// 3. ĐIỀU KHIỂN LOGIC ĐỔ DỮ LIỆU VÀO POPUP BỘ BAN NGÀNH
function openMinistryModal(groupName, itemId) {
    let targetGroup = criteriaData[groupName];
    let foundItem = targetGroup.find((i) => i.id === itemId);
    activePopupItem = { ...foundItem, group: groupName };

    document.getElementById("modalGroupNameBadge").textContent = groupName.toUpperCase();

    // Làm rõ câu tiêu đề đầy đủ của tiêu chí kèm icon nổi bật
    document.getElementById("modalCriterionQuestion").innerHTML = `
    <!-- Khối Icon nổi bật -->
    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-500/20">
      <i class="fa-solid fa-clipboard-question text-lg"></i>
    </div>
    
    <!-- Khối Text nội dung -->
    <div class="space-y-0.5 pt-0.5">
      <p class="text-[10px] font-bold uppercase tracking-wide text-teal-600/90">Tiêu chí đánh giá</p>
      <h3 class="text-lg uppercase font-bold text-slate-900 leading-relaxed">
        ${foundItem.q}
      </h3>
    </div>
`;

    // Reset lại ô tìm kiếm khi mở modal mới
    const searchInput = document.getElementById("ministryPopupSearch");
    if (searchInput) searchInput.value = "";

    const modal = document.getElementById("ministryDetailModal");
    const box = document.getElementById("ministryModalBox");
    modal.classList.remove("hidden");
    setTimeout(() => {
        box.classList.remove("scale-95", "opacity-0");
        box.classList.add("scale-100", "opacity-100");
    }, 10);

    switchPopupTab("passed");
}

function closeMinistryModal() {
    document.getElementById("ministryModalBox").classList.add("scale-95", "opacity-0");
    setTimeout(() => document.getElementById("ministryDetailModal").classList.add("hidden"), 150);
}

// CHUYỂN TAB ĐIỀU KHIỂN BÊN TRONG POPUP VÀ RE-RENDER DỮ LIỆU
function switchPopupTab(tabType) {
    currentPopupTab = tabType;
    const tabs = {
        passed: document.getElementById("btn-popup-passed"),
        failed: document.getElementById("btn-popup-failed"),
        all: document.getElementById("btn-popup-all"),
    };

    Object.keys(tabs).forEach((k) => {
        if (k === tabType) {
            tabs[k].className = "px-4 py-2 text-xs font-bold border-b-2 border-teal-500 text-teal-600 transition-all";
        } else {
            tabs[k].className = "px-4 py-2 text-xs font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition-all";
        }
    });

    renderPopupTable();
}

// XỬ LÝ LỌC DỮ LIỆU TAB KẾT HỢP SEARCH THEO 3 CỘT (Bộ, Đơn vị chủ quản, CSDL)
function renderPopupTable() {
    const tbody = document.getElementById("ministryTableBody");
    tbody.innerHTML = "";

    // 1. Lọc theo trạng thái tab hiện tại
    let filteredList = [];
    if (currentPopupTab === "all") {
        filteredList = mockMinistries;
    } else {
        filteredList = mockMinistries.filter((m) => m.status === currentPopupTab);
    }

    // 2. Lọc tiếp theo từ khóa search (nếu có)
    const searchInput = document.getElementById("ministryPopupSearch");
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

    if (keyword !== "") {
        filteredList = filteredList.filter((m) => {
            const matchMinistry = m.ministry.toLowerCase().includes(keyword);
            const matchOwnerUnit = m.ownerUnit.toLowerCase().includes(keyword);
            const matchCsdl = m.csdl.toLowerCase().includes(keyword);
            return matchMinistry || matchOwnerUnit || matchCsdl;
        });
    }

    // Nếu không có dữ liệu sau khi lọc
    if (filteredList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400 font-medium bg-slate-50/50">Không tìm thấy dữ liệu phù hợp của Bộ ban ngành</td></tr>`;
        return;
    }

    // 3. Đổ dữ liệu ra cấu trúc bảng mới 6 cột
    filteredList.forEach((m, idx) => {
        const isPassed = m.status === "passed";
        const badgeHtml = isPassed
            ? `<div class="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md inline-block">Đã đáp ứng</div>`
            : `<div class="px-2 py-0.5 text-[10px] font-bold bg-rose-50 text-rose-500 border border-rose-200 rounded-md inline-block">Chưa đáp ứng</div>`;

        // Render cấu trúc cột căn cứ gồm nhiều mục danh sách con
        const legalBasisHtml = m.legalBasis && m.legalBasis.length > 0
            ? `<ul class="list-disc list-inside text-[11px] text-slate-500 space-y-0.5">
                ${m.legalBasis.map(item => `<li>${item}</li>`).join('')}
               </ul>`
            : `<span class="text-slate-400 italic text-[11px]">Chưa có dữ liệu căn cứ</span>`;

        const row = document.createElement("tr");
        row.className = "hover:bg-slate-50/60 transition-colors font-medium text-xs border-b border-slate-100";
        row.innerHTML = `
            <td class="p-3 text-slate-400 font-bold text-center">${idx + 1}</td>
            <td class="p-3 font-semibold text-slate-800">${m.ministry}</td>
            <td class="p-3 text-slate-600">${m.ownerUnit}</td>
            <td class="p-3 text-slate-600 font-medium">${m.csdl}</td>
            <td class="p-3 text-center">${badgeHtml}</td>
            <td class="p-3">${legalBasisHtml}</td>
        `;
        tbody.appendChild(row);
    });
}

// LỌC NHÓM CARD TOÀN CỤC Ở THANH TÌM KIẾM TRÊN CÙNG
function filterGroups() {
    const val = document.getElementById("groupSelectFilter").value;
    document.querySelectorAll(".group-card-wrapper").forEach((card) => {
        if (val === "all" || card.getAttribute("data-group-name") === val)
            card.classList.remove("hidden");
        else card.classList.add("hidden");
    });
}

// Khởi động biểu đồ hình tròn ngay khi vừa load trang thành công
document.addEventListener("DOMContentLoaded", () => initPieChart());