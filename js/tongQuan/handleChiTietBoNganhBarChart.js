window.coreDataSource = [
    {
        id: 1,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát quản lý hành chính về trật tự xã hội (C06)",
        csdl: "Cơ sở dữ liệu quốc gia về Dân cư",
        statusType: "passed", // Đã xây dựng
        progress: 100,
        pl: true, tc: true, ht: true, dl: true, pm: true, attt: true
    },
    {
        id: 2,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát giao thông (C08)",
        csdl: "Cơ sở dữ liệu Đăng ký xe toàn quốc",
        statusType: "passed", // Đã xây dựng
        progress: 100,
        pl: true, tc: true, ht: true, dl: true, pm: true, attt: true
    },
    {
        id: 3,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát quản lý hành chính về trật tự xã hội (C06)",
        csdl: "Cơ sở dữ liệu Căn cước công dân",
        statusType: "processing", // Đang xây dựng
        progress: 65,
        pl: true, tc: true, ht: true, dl: false, pm: true, attt: false
    },
    {
        id: 4,
        boNganh: "Bộ Tư Pháp",
        chuQuan: "Cục Công nghệ thông tin",
        csdl: "Cơ sở dữ liệu Hộ tịch điện tử toàn quốc",
        statusType: "passed",
        progress: 100,
        pl: true, tc: true, ht: true, dl: true, pm: true, attt: true
    },
    {
        id: 5,
        boNganh: "Bộ Tư Pháp",
        chuQuan: "Cục Đăng ký quốc gia giao dịch bảo đảm",
        csdl: "Cơ sở dữ liệu Giao dịch bảo đảm",
        statusType: "failed", // Chưa xây dựng
        progress: 0,
        pl: false, tc: false, ht: false, dl: false, pm: false, attt: false
    },
    {
        id: 6,
        boNganh: "Bộ Kế hoạch & Đầu tư",
        chuQuan: "Cục Quản lý đăng ký kinh doanh",
        csdl: "Cơ sở dữ liệu quốc gia về Đăng ký doanh nghiệp",
        statusType: "passed",
        progress: 100,
        pl: true, tc: true, ht: true, dl: true, pm: true, attt: true
    },
    {
        id: 7,
        boNganh: "Bộ Kế hoạch & Đầu tư",
        chuQuan: "Vụ Quản lý các khu kinh tế",
        csdl: "Hệ thống thông tin quốc gia về Đầu tư nước ngoài",
        statusType: "processing",
        progress: 45,
        pl: true, tc: false, ht: true, dl: false, pm: false, attt: false
    },
    {
        id: 8,
        boNganh: "Bộ Tài chính",
        chuQuan: "Tổng cục Thuế",
        csdl: "Cơ sở dữ liệu quốc gia về Thuế",
        statusType: "passed",
        progress: 100,
        pl: true, tc: true, ht: true, dl: true, pm: true, attt: true
    },
    {
        id: 9,
        boNganh: "Bộ Tài chính",
        chuQuan: "Tổng cục Hải quan",
        csdl: "Hệ thống thông tin tích hợp hải quan thông minh",
        statusType: "processing",
        progress: 80,
        pl: true, tc: true, ht: true, dl: true, pm: false, attt: false
    },
    {
        id: 10,
        boNganh: "Bộ Tài nguyên & Môi trường",
        chuQuan: "Cục Chuyển đổi số và Thông tin dữ liệu tài nguyên môi trường",
        csdl: "Cơ sở dữ liệu Đất đai quốc gia",
        statusType: "passed",
        progress: 100,
        pl: true, tc: true, ht: true, dl: true, pm: true, attt: true
    },
    {
        id: 11,
        boNganh: "Bộ Giáo dục & Đào tạo",
        chuQuan: "Cục Quản lý chất lượng",
        csdl: "Hệ thống quản lý văn bằng chứng chỉ số quốc gia",
        statusType: "failed",
        progress: 0,
        pl: false, tc: false, ht: false, dl: false, pm: false, attt: false
    }
];

let globalChartInstance = null;

// 1. TỔNG HỢP DỮ LIỆU ĐỒ THỊ THEO THUỘC TÍNH STATUSTYPE MỚI
function generateMinistryDataRaw() {
    const mapData = {};
    if (!window.coreDataSource) return [];

    window.coreDataSource.forEach(item => {
        if (!mapData[item.boNganh]) {
            mapData[item.boNganh] = { name: item.boNganh, passed: 0, processing: 0, failed: 0 };
        }
        if (item.statusType === "passed") mapData[item.boNganh].passed += 1;
        else if (item.statusType === "processing") mapData[item.boNganh].processing += 1;
        else if (item.statusType === "failed") mapData[item.boNganh].failed += 1;
    });
    return Object.values(mapData);
}

// 2. CHART ENGINE
window.initMultipleBarChart = function () {
    const canvas = document.getElementById("multipleBarChartMinistries");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (globalChartInstance) {
        globalChartInstance.destroy();
    }

    const rawData = generateMinistryDataRaw();
    const searchKeyword = (window.tableState && window.tableState.boNganhFilter) ? window.tableState.boNganhFilter.toLowerCase().trim() : "";

    const displayData = rawData.filter(item => item.name.toLowerCase().includes(searchKeyword));

    const labels = displayData.map(item => item.name);
    const passedData = displayData.map(item => item.passed);
    const processingData = displayData.map(item => item.processing);
    const failedData = displayData.map(item => item.failed);
    const totalData = displayData.map(item => item.passed + item.processing + item.failed);

    globalChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                { label: "Đã xây dựng", data: passedData, backgroundColor: "#10b981", borderRadius: 4 },
                { label: "Đang xây dựng", data: processingData, backgroundColor: "#f59e0b", borderRadius: 4 },
                { label: "Chưa xây dựng", data: failedData, backgroundColor: "#ef4444", borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const firstElement = elements[0];
                    const datasetIndex = firstElement.datasetIndex; // 0: Đã, 1: Đang, 2: Chưa
                    const clickedIndex = firstElement.index;
                    const targetMinistry = labels[clickedIndex];

                    let targetStatusText = "passed";
                    if (datasetIndex === 1) targetStatusText = "processing";
                    if (datasetIndex === 2) targetStatusText = "failed";

                    openChartClickDetailsPopup(targetMinistry, targetStatusText);
                }
            },
            plugins: {
                legend: { display: true, position: "bottom" },
                tooltip: {
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    callbacks: {
                        label: function (context) {
                            const index = context.dataIndex;
                            return ` ${context.dataset.label}: ${context.raw}/${totalData[index]} CSDL`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 10, weight: "semibold" }, color: "#64748b" } },
                y: { beginAtZero: true, grid: { color: "#f1f5f9" }, ticks: { stepSize: 1 } }
            }
        }
    });
};

window.onMinistrySearchTrigger = function () {
    const input = document.getElementById("boNganhLineChartSearchInput");
    if (window.tableState) {
        window.tableState.boNganhFilter = input ? input.value : "";
        window.tableState.currentPage = 1;
    }
    window.initMultipleBarChart();
    if (typeof window.renderTableEngine === "function") {
        window.renderTableEngine();
    }
};

// 3. POP-UP CHI TIẾT KHI CLICK VÀO CỘT BIỂU ĐỒ (Cập nhật hiển thị tiêu chí con khi đang xây dựng)
// 3. POP-UP CHI TIẾT KHI CLICK VÀO CỘT BIỂU ĐỒ (Tối ưu UI theo thiết kế mới)
function openChartClickDetailsPopup(ministryName, statusType) {
    if (!window.coreDataSource) return;

    const details = window.coreDataSource.filter(item => item.boNganh === ministryName && item.statusType === statusType);

    let statusTitle = "Đã xây dựng";
    let badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (statusType === "processing") { statusTitle = "Đang xây dựng"; badgeColor = "bg-amber-50 text-amber-700 border-amber-200"; }
    if (statusType === "failed") { statusTitle = "Chưa xây dựng"; badgeColor = "bg-rose-50 text-rose-700 border-rose-200"; }

    const modalTitle = document.getElementById("chartModalTitle");
    const modalContentBox = document.getElementById("chartModalListContent");

    if (!modalTitle || !modalContentBox) return;

    modalTitle.innerHTML = `<i class="fa-solid fa-folder-open text-slate-500 mr-2"></i>Chi tiết CSDL - <span class="font-bold text-slate-800">${ministryName}</span>`;

    if (details.length === 0) {
        modalContentBox.innerHTML = `
            <div class="text-center p-8 text-slate-400 text-sm font-medium">
                <i class="fa-solid fa-inbox text-2xl block mb-2 text-slate-300"></i>
                Không tìm thấy cơ sở dữ liệu nào ở trạng thái này.
            </div>`;
    } else {
        modalContentBox.innerHTML = details.map((d, index) => {
            let progressLabel = "Đã hoàn thành";
            let progressBadgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-100";
            let progressValue = d.progress;

            if (d.statusType === "processing") {
                progressLabel = `Tiến độ: ${d.progress}%`;
                progressBadgeStyle = "bg-amber-50 text-amber-700 border-amber-100";
            } else if (d.statusType === "failed") {
                progressLabel = "Chưa xây dựng";
                progressBadgeStyle = "bg-rose-50 text-rose-700 border-rose-100";
                progressValue = 0;
            }

            // Xử lý hiển thị nhóm tiêu chí chuyên nghiệp & đẹp mắt hơn theo ảnh mẫu
            let criteriaSubSectionHtml = "";
            if (d.statusType === "processing") {
                const mapping = [
                    { name: "Pháp lý", val: d.pl },
                    { name: "Tài chính", val: d.tc },
                    { name: "Hạ tầng", val: d.ht },
                    { name: "Dữ liệu", val: d.dl },
                    { name: "Phần mềm", val: d.pm },
                    { name: "ATTT", val: d.attt }
                ];

                const passedItems = mapping.filter(c => c.val).map(c => `<span class="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md"><i class="fa-solid fa-check text-[10px]"></i> ${c.name}</span>`).join(" ");
                const failedItems = mapping.filter(c => !c.val).map(c => `<span class="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md"><i class="fa-solid fa-xmark text-[10px]"></i> ${c.name}</span>`).join(" ");

                criteriaSubSectionHtml = `
                    <div class="mt-3 pt-3 border-t border-dashed border-slate-100 bg-slate-50/50 p-3 rounded-lg text-[12px] space-y-2">
                        ${passedItems ? `<div class="flex items-start gap-1.5"><span class="font-semibold text-slate-500 shrink-0 w-24">Đã đáp ứng:</span> <div class="flex flex-wrap gap-1.5">${passedItems}</div></div>` : ""}
                        ${failedItems ? `<div class="flex items-start gap-1.5"><span class="font-semibold text-slate-500 shrink-0 w-24">Chưa đáp ứng:</span> <div class="flex flex-wrap gap-1.5">${failedItems}</div></div>` : ""}
                    </div>
                `;
            }

            return `
                <div class="p-4 border border-slate-200/60 rounded-xl bg-white shadow-xs hover:border-slate-300 transition-all space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div class="space-y-1.5">
                            <div class="flex items-start gap-2.5">
                                <span class="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 mt-0.5">#${index + 1}</span>
                                <h4 class="text-sm font-bold text-slate-900 leading-snug">${d.csdl}</h4>
                            </div>
                            
                            <div class="pl-8 space-y-1 text-xs">
                                <p class="text-slate-600"><i class="fa-solid fa-building text-slate-400 mr-1.5 w-3.5 text-center"></i><span class="text-slate-400">Bộ ngành:</span> ${d.boNganh}</p>
                                <p class="text-slate-600"><i class="fa-solid fa-users text-slate-400 mr-1.5 w-3.5 text-center"></i><span class="text-slate-400">Đơn vị chủ quản:</span> ${d.chuQuan}</p>
                            </div>
                        </div>
                        
                        <div class="sm:text-right shrink-0 pl-8 sm:pl-0 flex flex-col items-start sm:items-end gap-1.5">
                            <span class="inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${progressBadgeStyle}">
                                ${progressLabel}
                            </span>
                        </div>
                    </div>
                    
                    <div class="pl-8 pr-2">
                        <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div class="h-full rounded-full ${d.statusType === 'passed' ? 'bg-emerald-500' : (d.statusType === 'failed' ? 'bg-slate-300' : 'bg-amber-500')}" style="width: ${progressValue}%"></div>
                        </div>
                    </div>

                    ${criteriaSubSectionHtml}
                </div>
            `;
        }).join("");
    }

    const container = document.getElementById("chartDetailsDialog");
    if (container) {
        container.classList.remove("hidden");
        setTimeout(() => {
            const box = document.getElementById("chartDialogBoxStructure");
            if (box) box.classList.remove("scale-95", "opacity-0");
        }, 20);
    }
}

window.closeChartClickDetailsPopup = function () {
    const box = document.getElementById("chartDialogBoxStructure");
    if (box) box.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
        const container = document.getElementById("chartDetailsDialog");
        if (container) container.classList.add("hidden");
    }, 140);
};

document.addEventListener("DOMContentLoaded", () => {
    const btnSearch = document.querySelector("#boNganhLineChartSearchInput + button");
    if (btnSearch) {
        btnSearch.setAttribute("onclick", "window.onMinistrySearchTrigger()");
    }
    window.initMultipleBarChart();
});