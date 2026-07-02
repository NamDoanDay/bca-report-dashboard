// --- 1. KHỞI TẠO DANH MỤC 50 CSDL THỰC TẾ TRẢI DÀI TRONG NĂM 2024 ---
const mock50Databases = [
    { id: 1, boNganh: "Bộ Công An", chuQuan: "Cục Cảnh sát QLHC về TTXH", csdl: "Cơ sở dữ liệu quốc gia về Dân cư", startDangXD: new Date("2024-01-10"), startDaXong: new Date("2024-05-15") },
    { id: 2, boNganh: "Bộ Công An", chuQuan: "Cục Cảnh sát Giao thông", csdl: "Cơ sở dữ liệu Đăng ký xe toàn quốc", startDangXD: new Date("2024-01-15"), startDaXong: new Date("2024-06-20") },
    { id: 3, boNganh: "Bộ Công An", chuQuan: "Cục Cảnh sát QLHC về TTXH", csdl: "Cơ sở dữ liệu Căn cước công dân", startDangXD: new Date("2024-02-01"), startDaXong: new Date("2024-05-10") },
    { id: 4, boNganh: "Bộ Tư Pháp", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu Hộ tịch điện tử toàn quốc", startDangXD: new Date("2024-02-10"), startDaXong: new Date("2024-07-15") },
    { id: 5, boNganh: "Bộ Tư Pháp", chuQuan: "Cục Đăng ký quốc gia Giao dịch bảo đảm", csdl: "Cơ sở dữ liệu Giao dịch bảo đảm", startDangXD: new Date("2024-02-20"), startDaXong: new Date("2024-08-05") },
    { id: 6, boNganh: "Bộ Kế hoạch & Đầu tư", chuQuan: "Cục Quản lý đăng ký kinh doanh", csdl: "Cơ sở dữ liệu quốc gia về Đăng ký doanh nghiệp", startDangXD: new Date("2024-01-05"), startDaXong: new Date("2024-04-30") },
    { id: 7, boNganh: "Bộ Kế hoạch & Đầu tư", chuQuan: "Cục Quản lý Đấu thầu", csdl: "Hệ thống mạng đấu thầu quốc gia", startDangXD: new Date("2024-03-01"), startDaXong: new Date("2024-09-10") },
    { id: 8, boNganh: "Bộ Tài Chính", chuQuan: "Tổng cục Thuế", csdl: "Cơ sở dữ liệu quốc gia về Thuế", startDangXD: new Date("2024-01-20"), startDaXong: new Date("2024-06-15") },
    { id: 9, boNganh: "Bộ Tài Chính", chuQuan: "Tổng cục Hải quan", csdl: "Cơ sở dữ liệu Hải quan tích hợp", startDangXD: new Date("2024-02-15"), startDaXong: new Date("2024-07-25") },
    { id: 10, boNganh: "Bộ Tài Chính", chuQuan: "Kho bạc Nhà nước", csdl: "Hệ thống thông tin Quản lý Ngân sách và Kho bạc (TABMIS)", startDangXD: new Date("2024-03-10"), startDaXong: new Date("2024-08-20") },
    { id: 11, boNganh: "Bộ Tài nguyên & Môi trường", chuQuan: "Cục Chuyển đổi số và Dữ liệu TNMT", csdl: "Cơ sở dữ liệu đất đai quốc gia", startDangXD: new Date("2024-03-15"), startDaXong: new Date("2024-11-15") },
    { id: 12, boNganh: "Bộ Tài nguyên & Môi trường", chuQuan: "Cục Viễn thám quốc gia", csdl: "Cơ sở dữ liệu ảnh viễn thám quốc gia", startDangXD: new Date("2024-04-01"), startDaXong: new Date("2024-10-05") },
    { id: 13, boNganh: "Bộ Lao động - Thương binh & Xã hội", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu An sinh xã hội", startDangXD: new Date("2024-04-10"), startDaXong: new Date("2024-09-20") },
    { id: 14, boNganh: "Bộ Lao động - Thương binh & Xã hội", chuQuan: "Cục Việc làm", csdl: "Cơ sở dữ liệu Người lao động và Việc làm", startDangXD: new Date("2024-05-01"), startDaXong: new Date("2024-12-10") },
    { id: 15, boNganh: "Bộ Y Tế", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu Hồ sơ sức khỏe điện tử", startDangXD: new Date("2024-02-05"), startDaXong: new Date("2024-08-15") },
    { id: 16, boNganh: "Bộ Y Tế", chuQuan: "Cục Quản lý Dược", csdl: "Hệ thống cơ sở dữ liệu Dược quốc gia", startDangXD: new Date("2024-03-20"), startDaXong: new Date("2024-09-05") },
    { id: 17, boNganh: "Bộ Giáo dục & Đào tạo", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu toàn ngành về Giáo dục mầm non và Phổ thông", startDangXD: new Date("2024-01-15"), startDaXong: new Date("2024-06-30") },
    { id: 18, boNganh: "Bộ Giáo dục & Đào tạo", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu về Giáo dục đại học (HEMIS)", startDangXD: new Date("2024-04-15"), startDaXong: new Date("2024-10-25") },
    { id: 19, boNganh: "Bộ Giao thông vận tải", chuQuan: "Cục Đường bộ Việt Nam", csdl: "Cơ sở dữ liệu Giấy phép lái xe quốc gia", startDangXD: new Date("2024-02-01"), startDaXong: new Date("2024-06-10") },
    { id: 20, boNganh: "Bộ Giao thông vận tải", chuQuan: "Cục Đăng kiểm Việt Nam", csdl: "Cơ sở dữ liệu Phương tiện giao thông cơ giới đường bộ", startDangXD: new Date("2024-03-05"), startDaXong: new Date("2024-08-30") },
    { id: 21, boNganh: "Bộ Thông tin & Truyền thông", chuQuan: "Cục Phát thanh, truyền hình và thông tin điện tử", csdl: "Cơ sở dữ liệu Quản lý thông tin mạng xã hội", startDangXD: new Date("2024-05-10"), startDaXong: new Date("2024-11-20") },
    { id: 22, boNganh: "Bộ Thông tin & Truyền thông", chuQuan: "Cục Tần số vô tuyến điện", csdl: "Cơ sở dữ liệu Quản lý cấp phép tần số vô tuyến điện", startDangXD: new Date("2024-04-20"), startDaXong: new Date("2024-09-15") },
    { id: 23, boNganh: "Bộ Nội Vụ", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu quốc gia về Cán bộ, công chức, viên chức", startDangXD: new Date("2024-02-15"), startDaXong: new Date("2024-07-30") },
    { id: 24, boNganh: "Bộ Nội Vụ", chuQuan: "Cục Văn thư và Lưu trữ nhà nước", csdl: "Hệ thống quản lý tài liệu lưu trữ điện tử", startDangXD: new Date("2024-06-01"), startDaXong: new Date("2024-12-15") },
    { id: 25, boNganh: "Bộ Xây Dựng", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu quốc gia về Hoạt động xây dựng", startDangXD: new Date("2024-05-15"), startDaXong: new Date("2024-11-05") },
    { id: 26, boNganh: "Bộ Nông nghiệp & Phát triển nông thôn", chuQuan: "Cục Trồng trọt", csdl: "Cơ sở dữ liệu Mã số vùng trồng quốc gia", startDangXD: new Date("2024-04-10"), startDaXong: new Date("2024-10-10") },
    { id: 27, boNganh: "Bộ Nông nghiệp & Phát triển nông thôn", chuQuan: "Cục Chăn nuôi", csdl: "Cơ sở dữ liệu Đăng ký thức ăn chăn nuôi", startDangXD: new Date("2024-06-15"), startDaXong: null },
    { id: 28, boNganh: "Bộ Văn hóa, Thể thao & Du lịch", chuQuan: "Cục Du lịch Quốc gia Việt Nam", csdl: "Cơ sở dữ liệu Cơ sở lưu trú du lịch", startDangXD: new Date("2024-05-20"), startDaXong: new Date("2024-12-01") },
    { id: 29, boNganh: "Bộ Công Thương", chuQuan: "Cục Thương mại điện tử và Kinh tế số", csdl: "Cơ sở dữ liệu Doanh nghiệp Thương mại điện tử", startDangXD: new Date("2024-04-05"), startDaXong: new Date("2024-09-30") },
    { id: 30, boNganh: "Bộ Tư Pháp", chuQuan: "Cục Lý lịch tư pháp quốc gia", csdl: "Cơ sở dữ liệu Lý lịch tư pháp", startDangXD: new Date("2024-03-25"), startDaXong: new Date("2024-08-25") },
    { id: 31, boNganh: "Bảo hiểm Xã hội Việt Nam", chuQuan: "Trung tâm Công nghệ thông tin", csdl: "Cơ sở dữ liệu quốc gia về Bảo hiểm", startDangXD: new Date("2024-01-01"), startDaXong: new Date("2024-04-15") },
    { id: 32, boNganh: "Ngân hàng Nhà nước Việt Nam", chuQuan: "Cục Công nghệ thông tin", csdl: "Cơ sở dữ liệu thông tin tín dụng khách hàng vay", startDangXD: new Date("2024-02-15"), startDaXong: new Date("2024-07-10") },
    { id: 33, boNganh: "Thanh tra Chính phủ", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu quốc gia về Khiếu nại, Tố cáo", startDangXD: new Date("2024-06-01"), startDaXong: null },
    { id: 34, boNganh: "Thanh tra Chính phủ", chuQuan: "Cục Bản kê khai", csdl: "Cơ sở dữ liệu quốc gia về Kiểm soát tài sản, thu nhập", startDangXD: new Date("2024-07-10"), startDaXong: null },
    { id: 35, boNganh: "Bộ Ngoại Giao", chuQuan: "Cục Lãnh sự", csdl: "Cơ sở dữ liệu Cấp phát hộ chiếu ngoại giao, công vụ", startDangXD: new Date("2024-03-10"), startDaXong: new Date("2024-08-12") },
    { id: 36, boNganh: "Bộ Ngoại Giao", chuQuan: "Cục Lãnh sự", csdl: "Hệ thống thông tin Quản lý Xuất nhập cảnh ngành Ngoại giao", startDangXD: new Date("2024-05-05"), startDaXong: new Date("2024-11-10") },
    { id: 37, boNganh: "Bộ Khoa học & Công nghệ", chuQuan: "Cục Sở hữu trí tuệ", csdl: "Cơ sở dữ liệu quốc gia về Sở hữu công nghiệp", startDangXD: new Date("2024-04-12"), startDaXong: new Date("2024-10-18") },
    { id: 38, boNganh: "Ủy ban Dân tộc", chuQuan: "Trung tâm Thông tin", csdl: "Cơ sở dữ liệu về Thống kê các dân tộc thiểu số", startDangXD: new Date("2024-08-01"), startDaXong: null },
    { id: 39, boNganh: "Văn phòng Chính phủ", chuQuan: "Cổng Dịch vụ công Quốc gia", csdl: "Cơ sở dữ liệu theo dõi trạng thái hồ sơ Dịch vụ công", startDangXD: new Date("2024-01-20"), startDaXong: new Date("2024-05-30") },
    { id: 40, boNganh: "Bộ Công An", chuQuan: "Cục Cảnh sát PCCC và CNCH", csdl: "Cơ sở dữ liệu Thống kê An toàn phòng cháy chữa cháy", startDangXD: new Date("2024-07-20"), startDaXong: null },
    { id: 41, boNganh: "Bộ Tư Pháp", chuQuan: "Cục Quốc tịch, chứng thực", csdl: "Cơ sở dữ liệu Quản lý Quốc tịch Việt Nam", startDangXD: new Date("2024-05-15"), startDaXong: new Date("2024-10-30") },
    { id: 42, boNganh: "Bộ Tài Chính", chuQuan: "Cục Quản lý giá", csdl: "Cơ sở dữ liệu quốc gia về Giá công sản và hàng hóa", startDangXD: new Date("2024-04-18"), startDaXong: new Date("2024-09-25") },
    { id: 43, boNganh: "Bộ Y Tế", chuQuan: "Cục Quản lý Khám chữa bệnh", csdl: "Cơ sở dữ liệu Giấy phép hành nghề Y - Dược toàn quốc", startDangXD: new Date("2024-03-01"), startDaXong: new Date("2024-08-10") },
    { id: 44, boNganh: "Bộ Giao thông vận tải", chuQuan: "Cục Hàng hải Việt Nam", csdl: "Hệ thống thông tin Thuyền viên và Tàu biển", startDangXD: new Date("2024-05-02"), startDaXong: new Date("2024-10-15") },
    { id: 45, boNganh: "Bộ Xây Dựng", chuQuan: "Cục Quản lý nhà và Thị trường BĐS", csdl: "Cơ sở dữ liệu về Nhà ở và Thị trường bất động sản", startDangXD: new Date("2024-06-20"), startDaXong: null },
    { id: 46, boNganh: "Bộ Thông tin & Truyền thông", chuQuan: "Cục Viễn thông", csdl: "Cơ sở dữ liệu Quản lý thông tin thuê bao di động", startDangXD: new Date("2024-02-10"), startDaXong: new Date("2024-07-05") },
    { id: 47, boNganh: "Bộ Tài nguyên & Môi trường", chuQuan: "Cục Quản lý tài nguyên nước", csdl: "Cơ sở dữ liệu Cấp phép tài nguyên nước quốc gia", startDangXD: new Date("2024-07-01"), startDaXong: null },
    { id: 48, boNganh: "Bộ Công Thương", chuQuan: "Cục Điều tiết điện lực", csdl: "Cơ sở dữ liệu Quản lý cấp phép hoạt động điện lực", startDangXD: new Date("2024-05-12"), startDaXong: new Date("2024-11-15") },
    { id: 49, boNganh: "Bộ Giáo dục & Đào tạo", chuQuan: "Cục Quản lý chất lượng", csdl: "Cơ sở dữ liệu Văn bằng chứng chỉ hệ thống giáo dục", startDangXD: new Date("2024-03-15"), startDaXong: new Date("2024-09-10") },
    { id: 50, boNganh: "Bộ Công An", chuQuan: "Cục Cảnh sát điều tra tội phạm về ma túy", csdl: "Cơ sở dữ liệu Quản lý đối tượng sử dụng ma túy", startDangXD: new Date("2024-09-01"), startDaXong: null }
];

let pieChartInstance = null;
let barChartInstance = null;
let currentTab = 'tongquan';

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

// --- 4. HÀM TÌM KIẾM THEO KHOẢNG THỜI GIAN (TỪ NGÀY -> ĐẾN NGÀY) ---
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

    // Tạo mảng các mốc thời gian cách nhau từng tháng từ khoảng Từ Ngày -> Đến Ngày
    while (curr <= endDate) {
        timeSteps.push(new Date(curr));
        labels.push(formatDateToString(curr));
        curr.setMonth(curr.getMonth() + 1);
    }

    let dataDaXayDung = [];
    let dataDangXayDung = [];
    let dataChuaXayDung = [];

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
        dataChuaXayDung.push(countChua);
    });

    let lastIdx = timeSteps.length - 1;
    if (lastIdx < 0) return;

    // Đổ dữ liệu của mốc thời gian cuối (Đến ngày) lên bộ đếm Thẻ Card của index2.html
    document.getElementById("totalCsdlCount").innerText = mock50Databases.length;
    document.getElementById("countDaXayDung").innerText = dataDaXayDung[lastIdx];
    document.getElementById("countDangXayDung").innerText = dataDangXayDung[lastIdx];
    document.getElementById("countChuaXayDung").innerText = dataChuaXayDung[lastIdx];

    // Vẽ lại Biểu đồ tròn và Biểu đồ cột động
    renderPieChart(dataDaXayDung[lastIdx], dataDangXayDung[lastIdx], dataChuaXayDung[lastIdx]);
    renderMultipleBarChart(labels, timeSteps, dataDaXayDung, dataDangXayDung, dataChuaXayDung);

    if (currentTab === 'tieuchi') {
        renderCriteriaTable();
    }
}

// --- 5. ĐIỀU KHIỂN BIỂU ĐỒ TRÒN (PIE CHART) ---
function renderPieChart(da, dang, chua) {
    const ctx = document.getElementById("csdlPieChart").getContext("2d");
    if (pieChartInstance) pieChartInstance.destroy();
    pieChartInstance = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Đã xây dựng", "Đang xây dựng", "Chưa xây dựng"],
            datasets: [{
                data: [da, dang, chua],
                backgroundColor: ["#10b981", "#f59e0b", "#f43f5e"],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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

// --- 6. ĐIỀU KHIỂN BIỂU ĐỒ CỘT (MULTIPLE BAR CHART) ---
function renderMultipleBarChart(labels, timeSteps, daArr, dangArr, chuaArr) {
    const ctx = document.getElementById("statusBarChart").getContext("2d");
    if (barChartInstance) barChartInstance.destroy();

    barChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                { label: "Đã xây dựng", data: daArr, backgroundColor: "#10b981" },
                { label: "Đang xây dựng", data: dangArr, backgroundColor: "#f59e0b" },
                { label: "Chưa xây dựng", data: chuaArr, backgroundColor: "#f43f5e" },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 55 },
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

                    let selectedStatus = datasetLabel.includes("Đã")
                        ? "Đã xây dựng"
                        : datasetLabel.includes("Đang")
                            ? "Đang xây dựng"
                            : "Chưa xây dựng";

                    openModalDetailList(selectedStatus, targetDate, targetLabel);
                }
            },
        },
    });
}

// --- 7. ĐIỀU HƯỚNG TƯƠNG TÁC TABS ---
function switchTab(tabId) {
    currentTab = tabId;
    const tabTongQuan = document.getElementById("tab-tongquan");
    const tabTieuChi = document.getElementById("tab-tieuchi");
    const viewTongQuan = document.getElementById("tab-content-tongquan");
    const viewTieuChi = document.getElementById("tab-content-tieuchi");
    const groupFilter = document.getElementById("groupFilterWrapper");

    if (tabId === "tongquan") {
        tabTongQuan.className = "px-4 py-1.5 bg-white rounded-lg shadow-xs text-slate-800 font-bold transition-all duration-150";
        tabTieuChi.className = "px-4 py-1.5 text-slate-500 hover:text-slate-800 rounded-lg transition-all duration-150";
        viewTongQuan.classList.remove("hidden");
        viewTieuChi.classList.add("hidden");
        if (groupFilter) groupFilter.classList.add("hidden");
    } else if (tabId === "tieuchi") {
        tabTongQuan.className = "px-4 py-1.5 text-slate-500 hover:text-slate-800 rounded-lg transition-all duration-150";
        tabTieuChi.className = "px-4 py-1.5 bg-white rounded-lg shadow-xs text-slate-800 font-bold transition-all duration-150";
        viewTongQuan.classList.add("hidden");
        viewTieuChi.classList.remove("hidden");
        if (groupFilter) groupFilter.classList.remove("hidden");
        renderCriteriaTable();
    }
}

// --- 8. KHỚP NỐI ĐÓNG/MỞ VÀ ĐỔ DỮ LIỆU VÀO MODAL CỦA INDEX2.HTML ---
function openModalDetailList(status, datePoint, dateLabel) {
    // Đồng bộ chính xác ID "chartDetailModal" của file index2.html
    const modal = document.getElementById("chartDetailModal");
    const tbody = document.getElementById("modalTableBody");

    document.getElementById("modalTitle").textContent = `Danh sách CSDL chuyên ngành - Trạng thái: ${status}`;
    document.getElementById("modalSubtitle").textContent = `Mốc thời điểm kiểm kê: Ngày ${dateLabel}`;

    const filteredList = mock50Databases.filter(
        (db) => getStatusAtDate(db, datePoint) === status,
    );

    tbody.innerHTML = "";
    if (filteredList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400">Không có dữ liệu phù hợp tại mốc thời gian này.</td></tr>`;
    } else {
        filteredList.forEach((row, idx) => {
            let badgeColor = status === "Đã xây dựng"
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : status === "Đang xây dựng"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-rose-50 text-rose-700 border-rose-200";

            tbody.innerHTML += `
        <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
          <td class="p-2.5 text-center font-mono font-bold text-slate-400">${idx + 1}</td>
          <td class="p-2.5 font-bold text-slate-800 text-[11px]">${row.boNganh}</td>
          <td class="p-2.5 text-slate-600 font-medium">${row.chuQuan}</td>
          <td class="p-2.5 text-blue-950 font-semibold">${row.csdl}</td>
          <td class="p-2.5 text-center">
            <span class="px-2 py-0.5 rounded border text-[10px] font-bold ${badgeColor}">${status}</span>
          </td>
        </tr>`;
        });
    }

    // Hiển thị modal (gỡ class hidden)
    modal.classList.remove("hidden");
    const modalBox = document.getElementById("modalBoxStructure");
    if (modalBox) {
        setTimeout(() => {
            modal.classList.remove("opacity-0");
            modalBox.classList.remove("scale-95");
        }, 50);
    }
}

function closeDetailModal() {
    const modal = document.getElementById("chartDetailModal");
    modal.classList.add("hidden");
}

// --- 9. ĐỔ DỮ LIỆU CHO BẢNG TIÊU CHÍ CHI TIẾT (TAB 2) ---
function renderCriteriaTable() {
    const tbody = document.getElementById("criteriaTableBody");
    if (!tbody) return;
    const nhomTieuChi = ["Pháp lý", "Tài chính", "Hạ tầng", "Dữ liệu", "Phần mềm", "ATTT"];
    tbody.innerHTML = "";

    let stt = 1;
    nhomTieuChi.forEach(nhom => {
        for (let i = 1; i <= 2; i++) {
            tbody.innerHTML += `
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

function openDetailModal(statusType, timeKey = null, timeLabel = null) {
    const modal = document.getElementById("chartDetailModal");
    const box = document.getElementById("modalBoxStructure");
    const title = document.getElementById("modalTitle");
    const subtitle = document.getElementById("modalSubtitle");
    const tbody = document.getElementById("modalTableBody");

    if (!modal || !box || !title || !subtitle || !tbody) return;

    title.textContent =
        statusType === "all"
            ? "Tổng số tất cả hệ thống CSDL thành phần"
            : `Hiện trạng: ${statusType}`;
    subtitle.textContent = timeLabel
        ? `Mốc thời gian ghi nhận: ${timeLabel}`
        : `Xem chi tiết danh sách thông tin hệ thống`;

    // Lọc chính xác bản ghi khớp với tháng được click (nếu có click từ Bar Chart)
    let records = [...mock50Databases].map((item) => {
        const status = getStatusAtDate(item, timeKey ? new Date(timeKey) : new Date());
        return {
            ...item,
            status
        };
    });;
    if (statusType !== "all") {
        records = records.filter((item) => item.status === statusType);
    }
    if (timeKey) {
        records = records.filter((item) => item.date === timeKey);
    }

    tbody.innerHTML = "";
    if (records.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-slate-400 bg-slate-50">Không ghi nhận dữ liệu phù hợp.</td></tr>`;
    } else {
        records.forEach((row, idx) => {
            const badgeColor =
                row.status === "Đã xây dựng"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : row.status === "Đang xây dựng"
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-rose-50 text-rose-700 border-rose-200";

            tbody.innerHTML += `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="p-2.5 text-center font-bold text-slate-400">${idx + 1}</td>
          <td class="p-2.5 font-semibold text-slate-800">${row.boNganh}</td>
          <td class="p-2.5 text-slate-500">${row.chuQuan}</td>
          <td class="p-2.5 text-slate-700 font-medium">${row.csdl}</td>
          <td class="p-2.5 text-center"><span class="px-2 py-0.5 rounded text-[10px] font-bold border ${badgeColor}">${row.status}</span></td>
        </tr>`;
        });
    }

    modal.classList.remove("hidden");
    setTimeout(() => {
        box.classList.remove("scale-95", "opacity-0");
        box.classList.add("scale-100", "opacity-100");
    }, 20);
}

function openDetailModal(statusType, timeKey = null, timeLabel = null) {
    const modal = document.getElementById("csdlDetailModal");
    const box = document.getElementById("csdlBoxStructure");
    const title = document.getElementById("csdlTitle");
    const subtitle = document.getElementById("csdlSubtitle");
    const tbody = document.getElementById("csdlTableBody");

    if (!modal || !box || !title || !subtitle || !tbody) return;

    // 1. Cập nhật nội dung text
    title.textContent = statusType === "all"
        ? "Tổng số tất cả hệ thống CSDL thành phần"
        : `Hiện trạng: ${statusType}`;

    subtitle.textContent = timeLabel
        ? `Mốc thời gian ghi nhận: ${timeLabel}`
        : `Xem chi tiết danh sách thông tin hệ thống`;

    // 2. Logic lọc dữ liệu (Giữ nguyên của bạn)
    let records = [...mock50Databases].map((item) => {
        const status = getStatusAtDate(item, timeKey ? new Date(timeKey) : new Date());
        return { ...item, status };
    });
    if (statusType !== "all") {
        records = records.filter((item) => item.status === statusType);
    }
    if (timeKey) {
        records = records.filter((item) => item.date === timeKey);
    }

    // 3. Render Table (Giữ nguyên của bạn)
    tbody.innerHTML = "";
    if (records.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-slate-400 bg-slate-50">Không ghi nhận dữ liệu phù hợp.</td></tr>`;
    } else {
        records.forEach((row, idx) => {
            const badgeColor =
                row.status === "Đã xây dựng" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                    row.status === "Đang xây dựng" ? "bg-amber-50 text-amber-700 border-amber-200" :
                        "bg-rose-50 text-rose-700 border-rose-200";

            tbody.innerHTML += `
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-2.5 text-center font-bold text-slate-400">${idx + 1}</td>
                  <td class="p-2.5 font-semibold text-slate-800">${row.boNganh}</td>
                  <td class="p-2.5 text-slate-500">${row.chuQuan}</td>
                  <td class="p-2.5 text-slate-700 font-medium">${row.csdl}</td>
                  <td class="p-2.5 text-center"><span class="px-2 py-0.5 rounded text-[10px] font-bold border ${badgeColor}">${row.status}</span></td>
                </tr>`;
        });
    }

    // 4. HIỂN THỊ MODAL (Sửa tại đây)
    modal.classList.remove("hidden");

    // Thêm setTimeout một chút để hiệu ứng transition của Tailwind hoạt động mượt mà
    setTimeout(() => {
        // Hiện background mờ của modal cha
        modal.classList.remove("opacity-0");
        modal.classList.add("opacity-100");

        // Phóng to và hiện rõ hộp nội dung bên trong
        box.classList.remove("scale-95", "opacity-0");
        box.classList.add("scale-100", "opacity-100");
    }, 20);
}

// BỔ SUNG: Hàm đóng modal mượt mà
function closeCsdlModal() {
    const modal = document.getElementById("csdlDetailModal");
    const box = document.getElementById("csdlBoxStructure");
    if (!modal || !box) return;

    // Thu nhỏ và ẩn hộp nội dung, làm mờ background
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");

    box.classList.remove("scale-100", "opacity-100");
    box.classList.add("scale-95", "opacity-0");

    // Đợi chạy xong hiệu ứng transition (200ms) rồi mới thêm hẳn class 'hidden'
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 200);
}

// BỔ SUNG: Lắng nghe phím ESC để đóng modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeCsdlModal();
    }
});

// --- 10. RUNTIME SETUP ---
document.addEventListener("DOMContentLoaded", () => {
    executeTimeSearch();
});

