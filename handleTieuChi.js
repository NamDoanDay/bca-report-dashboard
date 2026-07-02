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

// 2. GIẢ LẬP DỮ LIỆU DANH SÁCH BỘ BAN NGÀNH VÀ CÁC CSDL ĐỂ ĐỔ VÀO POPUP XEM CHI TIẾT
const mockMinistries = [
    {
        ministry: "Bộ Xây dựng",
        csdl: "CSDL Quốc gia về Cấp thoát nước đô thị",
        status: "passed",
    },
    {
        ministry: "Bộ Công An",
        csdl: "CSDL Căn cước công dân và Định danh xác thực",
        status: "passed",
    },
    {
        ministry: "Bộ Tài nguyên và Môi trường",
        csdl: "CSDL Đất đai quốc gia",
        status: "passed",
    },
    {
        ministry: "Bộ Giao thông Vận tải",
        csdl: "CSDL Đăng kiểm phương tiện giao thông",
        status: "failed",
    },
    {
        ministry: "Bộ Y tế",
        csdl: "CSDL Hồ sơ sức khỏe điện tử toàn dân",
        status: "failed",
    },
    {
        ministry: "Bộ Giáo dục và Đào tạo",
        csdl: "CSDL Văn bằng chứng chỉ số",
        status: "passed",
    },
    {
        ministry: "Bộ Tài chính",
        csdl: "CSDL Thuế thu nhập doanh nghiệp tập trung",
        status: "failed",
    },
];

let polarChartsInstances = {};
let globalPieChart = null;
let activePopupItem = null; // Lưu trữ tiêu chí đang mở popup

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

        // Khung bọc nhóm tiêu chí bự
        const groupWrapper = document.createElement("div");
        groupWrapper.className =
            "group-card-wrapper border border-slate-200 rounded-2xl p-5 bg-white shadow-sm space-y-4";
        groupWrapper.setAttribute("data-group-name", groupName);

        groupWrapper.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <div>
            <span class="text-md bg-teal-50 text-teal-700 font-bold px-2 py-1 rounded tracking-wide uppercase">${groupName}</span>
          </div>
          <button onclick="toggleColumnsAction(this, '${safeName}')" class="flex items-center gap-1.5 text-[11px] bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-700 px-3 py-1.5 rounded-lg font-bold transition-all">
            <span>Xem tiêu chí</span>
            <i class="fa-solid fa-angles-right text-[10px]"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          <div class="col-span-12 lg:col-span-12 transition-all duration-300 flex justify-center items-center py-4 bg-slate-50/40 border border-slate-100 rounded-xl" id="chart-panel-${safeName}">
            <div class="w-full max-w-[340px] h-60">
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

// KHỞI TẠO VÀ HIỂN THỊ POLAR AREA CHART KÈM LABEL
function renderPolarChart(groupName, items) {
    const safeName = groupName.replace(/\s+/g, "");
    const ctx = document
        .getElementById(`polar-${safeName}`)
        .getContext("2d");
    const labels = items.map((i) =>
        i.q.length > 25 ? i.q.substring(0, 25) + "..." : i.q,
    );
    const dataValues = items.map((i) => i.passed);

    polarChartsInstances[groupName] = new Chart(ctx, {
        type: "polarArea",
        data: {
            labels: labels, // Label tiêu chí hiển thị rõ ràng bên dưới biểu đồ
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
    const criteriaPanel = document.getElementById(
        `criteria-panel-${safeName}`,
    );
    const label = btn.querySelector("span");
    const icon = btn.querySelector("i");

    if (criteriaPanel.classList.contains("hidden")) {
        // Chuyển đổi sang giao diện grid 2 cột (Cột 1: Chart chiếm 6 phần | Cột 2: Tiêu chí chiếm 6 phần)
        chartPanel.className =
            "col-span-12 lg:col-span-6 transition-all duration-300 flex justify-center items-center py-4 bg-slate-50/40 border border-slate-100 rounded-xl";
        criteriaPanel.classList.remove("hidden");
        label.textContent = "Thu gọn nội dung";
        icon.className = "fa-solid fa-angles-left text-[10px]"; // Collapse icon
    } else {
        // Thu gọn về trạng thái cũ (Chỉ hiển thị Polar Area Chart chiếm trọn 12 phần)
        chartPanel.className =
            "col-span-12 lg:col-span-12 transition-all duration-300 flex justify-center items-center py-4 bg-slate-50/40 border border-slate-100 rounded-xl";
        criteriaPanel.classList.add("hidden");
        label.textContent = "Xem tiêu chí";
        icon.className = "fa-solid fa-angles-right text-[10px]"; // Expand icon
    }
}

// 3. ĐIỀU KHIỂN LOGIC ĐỔ DỮ LIỆU VÀO POPUP BỘ BAN NGÀNH (MINISTRY DETAILED POPUP)
function openMinistryModal(groupName, itemId) {
    let targetGroup = criteriaData[groupName];
    let foundItem = targetGroup.find((i) => i.id === itemId);
    activePopupItem = { ...foundItem, group: groupName };

    document.getElementById("modalGroupNameBadge").textContent =
        groupName.toUpperCase();
    document.getElementById("modalCriterionQuestion").textContent =
        `Tiêu chí: ${foundItem.q}`;

    // Mở Modal kèm hiệu ứng mượt
    const modal = document.getElementById("ministryDetailModal");
    const box = document.getElementById("ministryModalBox");
    modal.classList.remove("hidden");
    setTimeout(() => {
        box.classList.remove("scale-95", "opacity-0");
        box.classList.add("scale-100", "opacity-100");
    }, 10);

    // Mặc định ban đầu hiển thị Tab "Đã đạt"
    switchPopupTab("passed");
}

function closeMinistryModal() {
    document
        .getElementById("ministryModalBox")
        .classList.add("scale-95", "opacity-0");
    setTimeout(
        () =>
            document
                .getElementById("ministryDetailModal")
                .classList.add("hidden"),
        150,
    );
}

// CHUYỂN TAB ĐIỀU KHIỂN BÊN TRONG POPUP (Đã đạt | Chưa đạt | Tổng quan)
function switchPopupTab(tabType) {
    // Đổi giao diện nút tab hoạt động
    const tabs = {
        passed: document.getElementById("btn-popup-passed"),
        failed: document.getElementById("btn-popup-failed"),
        all: document.getElementById("btn-popup-all"),
    };

    Object.keys(tabs).forEach((k) => {
        if (k === tabType) {
            tabs[k].className =
                "px-4 py-2 text-xs font-bold border-b-2 border-teal-500 text-teal-600 transition-all";
        } else {
            tabs[k].className =
                "px-4 py-2 text-xs font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition-all";
        }
    });

    // Lọc danh sách và vẽ bảng số liệu tương ứng
    const tbody = document.getElementById("ministryTableBody");
    tbody.innerHTML = "";

    let filteredList = [];
    if (tabType === "all") {
        filteredList = mockMinistries;
    } else {
        filteredList = mockMinistries.filter((m) => m.status === tabType);
    }

    if (filteredList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-slate-400 font-medium bg-slate-50/50">Không tìm thấy dữ liệu phù hợp của Bộ ban ngành</td></tr>`;
        return;
    }

    filteredList.forEach((m, idx) => {
        const isPassed = m.status === "passed";
        const badgeHtml = isPassed
            ? `<div class="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md">Đã đáp ứng</div>`
            : `<div class="px-2 py-0.5 text-[10px] font-bold bg-rose-50 text-rose-500 border border-rose-200 rounded-md">Chưa đáp ứng</div>`;

        const row = document.createElement("tr");
        row.className = "hover:bg-slate-50/60 transition-colors font-medium";
        row.innerHTML = `
        <td class="p-3 text-slate-400 font-bold">${idx + 1}</td>
        <td class="p-3 font-semibold text-slate-800">${m.ministry}</td>
        <td class="p-3 text-slate-600">${m.csdl}</td>
        <td class="p-3 text-center">${badgeHtml}</td>
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