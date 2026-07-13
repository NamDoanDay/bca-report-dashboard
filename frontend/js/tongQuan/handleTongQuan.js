// --- 1. KHỞI TẠO DANH MỤC 50 CSDL THỰC TẾ ---
const mock50Databases = [
    {
        id: 1,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát QLHC về TTXH",
        csdl: "Cơ sở dữ liệu quốc gia về Dân cư",
        startDangXD: new Date("2024-01-10"),
        startDaXong: new Date("2024-05-15"),
        phanMem: "Hệ thống Quản lý Dân cư Quốc gia V2",
        linkPhanMem: "https://dancu.moi.gov.vn",
        tongSoBanGhi: 99244163,
        duLieuDongBo: 98450210,
        phanTratDongBo: 99.2
    },
    {
        id: 2,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát Giao thông",
        csdl: "Cơ sở dữ liệu Đăng ký xe toàn quốc",
        startDangXD: new Date("2024-01-15"),
        startDaXong: new Date("2024-06-20"),
        phanMem: "Phần mềm Đăng ký & Quản lý Phương tiện Giao thông",
        linkPhanMem: "https://dangkyxe.csgt.gov.vn",
        tongSoBanGhi: 6758015,
        duLieuDongBo: 6420115,
        phanTratDongBo: 95.0
    },
    {
        id: 3,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát QLHC về TTXH",
        csdl: "Cơ sở dữ liệu Căn cước công dân",
        startDangXD: new Date("2024-02-01"),
        startDaXong: new Date("2024-05-10"),
        phanMem: "Hệ thống Cấp & Quản lý Thẻ Căn cước gắn chip",
        linkPhanMem: "https://cancuoc.bca.gov.vn",
        tongSoBanGhi: 83120400,
        duLieuDongBo: 83120400,
        phanTratDongBo: 100
    },
    {
        id: 4,
        boNganh: "Bộ Tư Pháp",
        chuQuan: "Cục Công nghệ thông tin",
        csdl: "Cơ sở dữ liệu Hộ tịch điện tử toàn quốc",
        startDangXD: new Date("2024-02-10"),
        startDaXong: new Date("2024-07-15"),
        phanMem: "Hệ thống Đăng ký & Quản lý Hộ tịch dùng chung",
        linkPhanMem: "https://hotich.moj.gov.vn",
        tongSoBanGhi: 49346000,
        duLieuDongBo: 45102300,
        phanTratDongBo: 91.4
    },
    {
        id: 27,
        boNganh: "Bộ Nông nghiệp & Phát triển nông thôn",
        chuQuan: "Cục Chăn nuôi",
        csdl: "Cơ sở dữ liệu Đăng ký thức ăn chăn nuôi",
        startDangXD: new Date("2024-06-15"),
        startDaXong: null,
        tienDoHoanThanh: 65,
        khoKhanVuongMac: "Một số doanh nghiệp nhập khẩu chưa thành thạo khai báo biểu mẫu trực tuyến.",
        duKienXong: "15/12/2026"
    },
    {
        id: 33,
        boNganh: "Thanh tra Chính phủ",
        chuQuan: "Trung tâm Thông tin",
        csdl: "Cơ sở dữ liệu quốc gia về Khiếu nại, Tố cáo",
        startDangXD: new Date("2024-06-01"),
        startDaXong: null,
        tienDoHoanThanh: 45,
        khoKhanVuongMac: "Hạ tầng kết nối mạng nội bộ của một số địa phương chưa đồng bộ tiêu chuẩn mã hóa bảo mật.",
        duKienXong: "30/03/2027"
    },
    {
        id: 34,
        boNganh: "Thanh tra Chính phủ",
        chuQuan: "Cục Bản kê khai",
        csdl: "Cơ sở dữ liệu quốc gia về Kiểm soát tài sản, thu nhập",
        startDangXD: new Date("2024-07-10"),
        startDaXong: null,
        tienDoHoanThanh: 30,
        khoKhanVuongMac: "Vướng mắc cơ chế xác minh thông tin tài khoản ngân hàng thương mại theo thời gian thực.",
        duKienXong: "30/06/2027"
    },
    {
        id: 38,
        boNganh: "Ủy ban Dân tộc",
        chuQuan: "Trung tâm Thông tin",
        csdl: "Cơ sở dữ liệu về Thống kê các dân tộc thiểu số",
        startDangXD: null,
        startDaXong: null,
        lyDoChuaXD: "Vướng mắc quy định phân định danh mục biểu mẫu thống kê dùng chung",
        giaiPhap: "Đang xin ý kiến phối hợp của Tổng cục Thống kê để đồng bộ thông số",
        duKienKhoiCong: "Quý I/2027"
    },
    {
        id: 40,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát PCCC và CNCH",
        csdl: "Cơ sở dữ liệu Thống kê An toàn phòng cháy chữa cháy",
        startDangXD: null,
        startDaXong: null,
        lyDoChuaXD: "Chưa phê duyệt được báo cáo nghiên cứu khả thi (Feasibility Study) hạ tầng phần cứng",
        giaiPhap: "Đang hoàn thiện hồ sơ thẩm định trình Bộ phê duyệt ngân sách đầu tư công",
        duKienKhoiCong: "Tháng 11/2026"
    },
    {
        id: 45,
        boNganh: "Bộ Xây Dựng",
        chuQuan: "Cục Quản lý nhà và Thị trường BĐS",
        csdl: "Cơ sở dữ liệu về Nhà ở và Thị trường bất động sản",
        startDangXD: null,
        startDaXong: null,
        lyDoChuaXD: "Đang xây dựng lại chuẩn kết nối API chia sẻ dữ liệu liên thông với Bộ Tài nguyên Môi trường",
        giaiPhap: "Thành lập tổ công tác liên ngành xử lý xung đột dữ liệu địa chính",
        duKienKhoiCong: "Quý II/2027"
    },
    {
        id: 47,
        boNganh: "Bộ Tài nguyên & Môi trường",
        chuQuan: "Cục Quản lý tài nguyên nước",
        csdl: "Cơ sở dữ liệu Cấp phép tài nguyên nước quốc gia",
        startDangXD: null,
        startDaXong: null,
        lyDoChuaXD: "Thiếu nhân lực chuyên trách công nghệ thông tin tại Cục chuyên ngành",
        giaiPhap: "Thuê dịch vụ công nghệ thông tin trọn gói từ nhà mạng đối tác",
        duKienKhoiCong: "Tháng 02/2027"
    },
    {
        id: 50,
        boNganh: "Bộ Công An",
        chuQuan: "Cục Cảnh sát điều tra tội phạm về ma túy",
        csdl: "Cơ sở dữ liệu Quản lý đối tượng sử dụng ma túy",
        startDangXD: null,
        startDaXong: null,
        lyDoChuaXD: "Cần đảm bảo tiêu chuẩn an ninh, bảo mật cấp độ 4 trước khi thiết lập máy chủ",
        giaiPhap: "Đợi Cục An ninh mạng kiểm tra và cấp chứng nhận an toàn hệ thống thông tin",
        duKienKhoiCong: "Quý III/2027"
    }
];

// Giả lập dữ liệu cho đủ 50 bản ghi
for (let i = 5; i <= 50; i++) {
    if (!mock50Databases.find(d => d.id === i)) {
        mock50Databases.push({
            id: i,
            boNganh: i % 2 === 0 ? "Bộ Tài Chính" : "Bộ Y Tế",
            chuQuan: i % 2 === 0 ? "Tổng cục Thuế" : "Cục Công nghệ thông tin",
            csdl: `Cơ sở dữ liệu giả lập phân hệ số ${i}`,
            startDangXD: new Date("2024-02-15"),
            startDaXong: new Date("2024-07-20"),
            phanMem: `Phần mềm quản lý chuyên ngành v${i}.0`,
            linkPhanMem: "https://mof.gov.vn",
            tongSoBanGhi: 1350000 * i,
            duLieuDongBo: 1250000 * i,
            phanTratDongBo: 95.5
        });
    }
}

let pieChartInstance = null;
let barChartInstance = null;
let currentTab = 'tongquan';

// --- BIẾN TRẠNG THÁI TRUNG TÂM CỦA BẢNG CHI TIẾT GỘP ---
let currentTableStatus = "Đã xây dựng";   // THAY ĐỔI: Mặc định trực tiếp là "Đã xây dựng" thay vì "all"
let currentTableDatePoint = new Date();
let currentTableDateLabel = "Hiện tại";
let currentFilteredListCombined = [];

// --- 2. HÀM ĐỒNG BỘ DATE PICKER ---
function syncDatePicker(input, type) {
    if (!input.value) return;
    const [year, month, day] = input.value.split("-");
    const displayId = type === "start" ? "startDateDisplay" : "endDateDisplay";
    document.getElementById(displayId).value = `${day}/${month}/${year}`;
    executeTimeSearch();
}

function formatDateToString(date) {
    let d = String(date.getDate()).padStart(2, "0");
    let m = String(date.getMonth() + 1).padStart(2, "0");
    let y = date.getFullYear();
    return `${d}/${m}/${y}`;
}

// --- 3. LOGIC TÍNH TRẠNG THÁI TẠI MỘT THỜI ĐIỂM ---
function getStatusAtDate(db, targetDate) {
    if (db.startDaXong && targetDate >= db.startDaXong) return "Đã xây dựng";
    if (db.startDangXD && targetDate >= db.startDangXD) return "Đang xây dựng";
    return "Chưa xây dựng";
}

// --- 4. HÀM TÌM KIẾM THEO KHOẢNG THỜI GIAN ---
function executeTimeSearch() {
    const startStr = document.getElementById("startDatePicker").value;
    const endStr = document.getElementById("endDatePicker").value;

    let startDate = new Date(startStr);
    let endDate = new Date(endStr);

    if (startDate > endDate) {
        alert("Lỗi: Ngày bắt đầu không được lớn hơn ngày kết thúc!");
        return;
    }

    let labels = [];
    let timeSteps = [];
    let curr = new Date(startDate);

    while (curr <= endDate) {
        timeSteps.push(new Date(curr));
        labels.push(formatDateToString(curr));
        curr.setMonth(curr.getMonth() + 1);
    }

    let dataDaXayDung = [];
    let dataDangXayDung = [];
    let dataAnChuaXayDung = [];

    timeSteps.forEach((datePoint) => {
        let countDa = 0, countDang = 0, countChua = 0;
        mock50Databases.forEach((db) => {
            let status = getStatusAtDate(db, datePoint);
            if (status === "Đã xây dựng") countDa++;
            else if (status === "Đang xây dựng") countDang++;
            else countChua++;
        });
        dataDaXayDung.push(countDa);
        dataDangXayDung.push(countDang);
        dataAnChuaXayDung.push(countChua);
    });

    let lastIdx = timeSteps.length - 1;
    if (lastIdx < 0) return;

    document.getElementById("totalCsdlCount").innerText = mock50Databases.length;
    document.getElementById("countDaXayDung").innerText = dataDaXayDung[lastIdx];
    document.getElementById("countDangXayDung").innerText = dataDangXayDung[lastIdx];
    document.getElementById("countChuaXayDung").innerText = dataAnChuaXayDung[lastIdx];

    renderPieChart(dataDaXayDung[lastIdx], dataDangXayDung[lastIdx], dataAnChuaXayDung[lastIdx]);
    renderMultipleBarChart(labels, timeSteps, dataDaXayDung, dataDangXayDung, dataAnChuaXayDung);

    // Giữ nguyên bộ lọc khi đổi khoảng thời gian tìm kiếm
    currentTableDatePoint = timeSteps[lastIdx];
    toggleExpandCombined(currentTableStatus, 'pie');

    if (currentTab === 'tieuchi') {
        renderCriteriaTable();
    }
}

// --- 5. ĐIỀU KHIỂN PIE CHART ---
function renderPieChart(da, dang, chua) {
    const ctx = document.getElementById("csdlPieChart").getContext("2d");
    if (pieChartInstance) pieChartInstance.destroy();
    pieChartInstance = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Đã xây dựng", "Đang xây dựng", "Chưa xây dựng"],
            datasets: [{
                data: [da, dang, chua],
                backgroundColor: ["#10b981", "#ffea00", "#eb1919"],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, activeElements) => {
                if (activeElements && activeElements.length > 0) {
                    const dataIndex = activeElements[0].index;
                    const labelStatus = pieChartInstance.data.labels[dataIndex];
                    toggleExpandCombined(labelStatus, 'pie');
                }
            },
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: '#fff',
                    font: { weight: 'bold', size: 11 },
                    formatter: (value) => value > 0 ? value : ''
                }
            },
        },
        plugins: [ChartDataLabels]
    });
}

// --- 6. ĐIỀU KHIỂN MULTIPLE BAR CHART ---
function renderMultipleBarChart(labels, timeSteps, daArr, dangArr, chuaArr) {
    const ctx = document.getElementById("statusBarChart").getContext("2d");
    if (barChartInstance) barChartInstance.destroy();

    barChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                { label: "Đã xây dựng", data: daArr, backgroundColor: "#10b981", borderRadius: 4 },
                { label: "Đang xây dựng", data: dangArr, backgroundColor: "#ffea00", borderRadius: 4 },
                { label: "Chưa xây dựng", data: chuaArr, backgroundColor: "#eb1919", borderRadius: 4 },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // scales: { y: { beginAtZero: true, max: 55 } },
            scales: {
                y: { ticks: { font: { size: 9 } } },
                x: { ticks: { font: { size: 9 } } }
            },
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 10, font: { size: 10 } } }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const elementIndex = elements[0].index;
                    const datasetIndex = elements[0].datasetIndex;

                    const targetDate = timeSteps[elementIndex];
                    const targetLabel = labels[elementIndex];
                    const datasetLabel = barChartInstance.data.datasets[datasetIndex].label;

                    let selectedStatus = datasetLabel.includes("Đã") ? "Đã xây dựng" : datasetLabel.includes("Đang") ? "Đang xây dựng" : "Chưa xây dựng";

                    toggleExpandCombined(selectedStatus, 'bar', targetDate, targetLabel);
                }
            },
        },
    });
}

// --- 7. CẤU TRÚC HEADER ĐỘNG CHO BẢNG GỘP TRUNG TÂM ---
function renderTableHeaderDynamic(selector, status) {
    const thead = document.querySelector(selector);
    if (!thead) return;

    let headerHTML = `
        <tr class="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold sticky top-0 z-10 text-[11px]">
            <th class="p-2 text-center w-8">STT</th>
            <th class="p-2 w-20">Bộ ngành</th>
            <th class="p-2 w-20">Chủ quan</th>
            <th class="p-2 w-24">Tên Cơ sở dữ liệu</th>
    `;

    if (status === "Đã xây dựng") {
        headerHTML += `
            <th class="p-2 w-20">Phần mềm / Link</th>
            <th class="p-2 text-right w-20">Tổng số bản ghi</th>
            <th class="p-2 text-right w-20">Bản ghi đồng bộ</th>
            <th class="p-2 text-center w-16">% Đ.Bộ</th>
        `;
    } else if (status === "Đang xây dựng") {
        headerHTML += `
            <th class="p-2 text-center w-20">Tiến độ</th>
            <th class="p-2 w-40">Khó khăn / Vướng mắc</th>
            <th class="p-2 text-center w-24">Dự kiến xong</th>
        `;
    } else if (status === "Chưa xây dựng") {
        headerHTML += `
            <th class="p-2 w-40">Lý do tồn đọng / Giải pháp</th>
            <th class="p-2 text-center w-24">Dự kiến k.công</th>
        `;
    } else {
        headerHTML += `<th class="p-2 text-center w-20">Hiện trạng</th>`;
    }

    headerHTML += `</tr>`;
    thead.innerHTML = headerHTML;
}

// --- 8. LOGIC ĐIỀU HƯỚNG TẬP TRUNG CHO BẢNG GỘP ---
function toggleExpandCombined(status, source, datePoint = null, dateLabel = null) {
    currentTableStatus = status;

    if (source === 'pie') {
        const endStr = document.getElementById("endDatePicker")?.value;
        if (!datePoint) {
            currentTableDatePoint = endStr ? new Date(endStr) : new Date();
        }
        document.getElementById("panelSubtitleCombined").innerHTML = `
            <span class="inline-flex items-center gap-1 text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full font-bold border border-teal-200">
                <i class="fa-solid fa-clock-rotate-left text-[10px]"></i> Thời điểm: Hiện tại
            </span>`;
    } else if (source === 'bar' && datePoint && dateLabel) {
        currentTableDatePoint = datePoint;
        currentTableDateLabel = dateLabel;

        document.getElementById("panelSubtitleCombined").innerHTML = `
            <span class="inline-flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-bold border border-blue-200">
                <i class="fa-regular fa-calendar-check text-[10px]"></i> Mốc lịch sử: ${dateLabel}
            </span>`;
    }

    document.getElementById("panelTitleCombined").textContent = `Trạng thái: ${status === 'all' ? 'Tất cả CSDL' : status}`;
    updateCombinedTable();
}

function updateCombinedTable() {
    renderTableHeaderDynamic("#tableHeaderCombined", currentTableStatus);

    currentFilteredListCombined = [...mock50Databases].map(item => ({
        ...item,
        status: getStatusAtDate(item, currentTableDatePoint)
    }));

    if (currentTableStatus !== "all") {
        currentFilteredListCombined = currentFilteredListCombined.filter(item => item.status === currentTableStatus);
    }

    executeSearchCombined();
}

function handleSearchCombined() {
    executeSearchCombined();
}

function executeSearchCombined() {
    const keyword = document.getElementById("searchCombined").value.trim().toLowerCase();
    const tbody = document.getElementById("tableBodyCombined");

    const results = currentFilteredListCombined.filter(item =>
        item.boNganh.toLowerCase().includes(keyword) ||
        item.chuQuan.toLowerCase().includes(keyword) ||
        item.csdl.toLowerCase().includes(keyword)
    );

    renderTableRows(tbody, results, currentTableStatus === "all" ? null : currentTableStatus);
}

// --- 9. HÀM CORE RENDER HÀNG DỮ LIỆU ĐA DẠNG ---
function renderTableRows(tbody, list, fixedStatus = null) {
    tbody.innerHTML = "";
    let colSpanCount = fixedStatus === "Đã xây dựng" ? 8 : (fixedStatus === "Đang xây dựng" || fixedStatus === "Chưa xây dựng" ? 7 : 5);

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${colSpanCount}" class="p-4 text-center text-slate-400 bg-slate-50/50">Không tìm thấy dữ liệu phù hợp.</td></tr>`;
        return;
    }

    let rowsHTML = "";
    list.forEach((row, idx) => {
        let currentStatus = fixedStatus || row.status;

        let rowHTML = `
            <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100 text-xs">
              <td class="p-2 text-center font-mono font-bold text-slate-400">${idx + 1}</td>
              <td class="p-2 font-bold text-slate-800 text-[10px] max-w-[85px]" title="${row.boNganh}">${row.boNganh}</td>
              <td class="p-2 text-slate-500 text-[10px] leading-tight font-medium max-w-[110px]" title="${row.chuQuan}">${row.chuQuan}</td>
              <td class="p-2 text-blue-950 font-semibold leading-tight text-[10.5px] whitespace-normal">${row.csdl}</td>
        `;

        if (currentStatus === "Đã xây dựng") {
            rowHTML += `
                <td class="p-2">
                    <div class="font-bold text-slate-700 text-[10px] max-w-[120px]" title="${row.phanMem || ''}">${row.phanMem || 'N/A'}</div>
                    ${row.linkPhanMem ? `
                        <a href="${row.linkPhanMem}" target="_blank" class="text-[9px] text-teal-600 hover:underline font-extrabold flex items-center gap-0.5 mt-0.5">
                            <i class="fa-solid fa-square-arrow-up-right text-[8px]"></i> Hệ thống Link
                        </a>
                    ` : '<span class="text-[9px] text-slate-400 block mt-0.5">Không có link</span>'}
                </td>
                <td class="p-2 text-right font-mono font-bold text-slate-700 text-[11px]">
                    ${row.tongSoBanGhi ? row.tongSoBanGhi.toLocaleString('vi-VN') : '0'}
                </td>
                <td class="p-2 text-right font-mono text-slate-500 text-[11px]">
                    ${row.duLieuDongBo ? row.duLieuDongBo.toLocaleString('vi-VN') : '0'}
                </td>
                <td class="p-2 text-center">
                    <span class="px-1 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold rounded-sm font-mono">${row.phanTratDongBo ?? 100}%</span>
                </td>
            `;
        } else if (currentStatus === "Đang xây dựng") {
            let progress = row.tienDoHoanThanh || 0;
            rowHTML += `
                <td class="p-2 text-center">
                    <div class="flex items-center gap-1 justify-center">
                        <div class="w-12 bg-slate-100 h-1 rounded-full overflow-hidden shrink-0">
                            <div class="bg-amber-400 h-full rounded-full" style="width: ${progress}%"></div>
                        </div>
                        <span class="font-mono font-bold text-slate-700 text-[10px]">${progress}%</span>
                    </div>
                </td>
                <td class="p-2 text-slate-600 text-[10px] leading-tight whitespace-normal font-medium">
                    ${row.khoKhanVuongMac ? `<span class="text-amber-600 font-semibold flex items-start gap-0.5"><i class="fa-solid fa-triangle-exclamation text-[9px] mt-0.5 shrink-0"></i> ${row.khoKhanVuongMac}</span>` : '<span class="text-slate-400 italic">Không có ghi nhận vướng mắc</span>'}
                </td>
                <td class="p-2 text-center font-mono text-slate-500 text-[10px]">
                    <i class="fa-regular fa-calendar-days text-[9px] text-slate-400 mr-0.5"></i> ${row.duKienXong || 'Chưa định ngày'}
                </td>
            `;
        } else if (currentStatus === "Chưa xây dựng") {
            rowHTML += `
                <td class="p-2">
                    <div class="text-rose-600 text-[10px] font-bold leading-tight" title="${row.lyDoChuaXD || ''}">
                        <i class="fa-solid fa-circle-minus text-[8px] mr-1"></i>${row.lyDoChuaXD || 'Chưa có thông tin lý do'}
                    </div>
                    ${row.giaiPhap ? `<div class="text-[9px] text-slate-400 italic mt-0.5 whitespace-normal" title="${row.giaiPhap}">G/pháp: ${row.giaiPhap}</div>` : ''}
                </td>
                <td class="p-2 text-center font-bold text-amber-600 text-[10px] font-mono">
                    ${row.duKienKhoiCong || 'Chưa lên lịch'}
                </td>
            `;
        } else {
            let badgeColor = currentStatus === "Đã xây dựng" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                currentStatus === "Đang xây dựng" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-rose-50 text-rose-700 border-rose-200";
            rowHTML += `
                <td class="p-2 text-center">
                    <span class="px-1.5 py-0.5 rounded border text-[9px] font-bold whitespace-nowrap ${badgeColor}">${currentStatus}</span>
                </td>
            `;
        }

        rowHTML += `</tr>`;
        rowsHTML += rowHTML;
    });

    tbody.innerHTML = rowsHTML;
}

// --- 10. ĐỔ DỮ LIỆU CÂU HỎI RÀ SOÁT (TAB 2) ---
function renderCriteriaTable() {
    const tbody = document.getElementById("criteriaTableBody");
    if (!tbody) return;
    const nhomTieuChi = ["Pháp lý", "Tài chính", "Hạ tầng", "Dữ liệu", "Phần mềm", "ATTT"];
    tbody.innerHTML = "";

    let stt = 1;
    let rowsHTML = "";
    nhomTieuChi.forEach(nhom => {
        for (let i = 1; i <= 2; i++) {
            rowsHTML += `
                <tr class="hover:bg-slate-50/80 border-b border-slate-100 transition-colors">
                  <td class="p-3 text-center font-mono text-slate-400">${stt++}</td>
                  <td class="p-3 font-semibold text-slate-700 text-xs">${nhom}</td>
                  <td class="p-3 text-slate-600 text-xs">Nội dung câu hỏi rà soát hiện trạng chi tiết thuộc nhóm tiêu chí ${nhom} mục số ${i}.</td>
                  <td class="p-3 text-center">
                    <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">Đạt</span>
                  </td>
                </tr>`;
        }
    });
    tbody.innerHTML = rowsHTML;
}

function filterGroups() {
    const filterValue = document.getElementById("groupSelectFilter").value;
    const rows = document.querySelectorAll("#criteriaTableBody tr");
    rows.forEach(row => {
        const groupCell = row.cells[1].innerText;
        if (filterValue === "all" || groupCell === filterValue) {
            row.classList.remove("hidden");
        } else {
            row.classList.add("hidden");
        }
    });
}

// --- 11. RUNTIME RUN ---
document.addEventListener("DOMContentLoaded", () => {
    executeTimeSearch();
});