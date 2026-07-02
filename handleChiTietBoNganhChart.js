document.addEventListener("DOMContentLoaded", () => {
    // 1. Khởi tạo danh sách 14 Bộ Ban Ngành kèm Fake Data chi tiết
    const ministryDataRaw = [
        { name: "Bộ Quốc phòng", passed: 12, processing: 4, failed: 2 },
        { name: "Bộ Công an", passed: 15, processing: 3, failed: 1 },
        { name: "Bộ Ngoại giao", passed: 6, processing: 2, failed: 1 },
        { name: "Bộ Nội vụ", passed: 8, processing: 3, failed: 0 },
        { name: "Bộ Tư pháp", passed: 9, processing: 4, failed: 2 },
        { name: "Bộ Tài chính", passed: 18, processing: 6, failed: 2 },
        { name: "Bộ Công Thương", passed: 11, processing: 5, failed: 3 },
        { name: "Bộ NN & PTNT", passed: 14, processing: 4, failed: 4 }, // Viết gọn để hiển thị trục X đẹp hơn
        { name: "Bộ Xây dựng", passed: 10, processing: 5, failed: 1 },
        { name: "Bộ VHTTDL", passed: 7, processing: 3, failed: 2 },
        { name: "Bộ KH & CN", passed: 8, processing: 2, failed: 1 },
        { name: "Bộ GD & ĐT", passed: 13, processing: 4, failed: 0 },
        { name: "Bộ Y tế", passed: 12, processing: 6, failed: 3 },
        { name: "Ủy ban Dân tộc", passed: 5, processing: 2, failed: 1 }, // Đại diện Bộ Dân tộc và Tôn giáo
    ];

    // 2. Tách mảng dữ liệu phục vụ Chart.js
    const labels = ministryDataRaw.map((item) => item.name);

    // Tạo cấu trúc chuỗi hiển thị dạng "Số lượng / Tổng số" phục vụ Tooltip khi hover vào cột
    const passedData = ministryDataRaw.map((item) => item.passed);
    const processingData = ministryDataRaw.map((item) => item.processing);
    const failedData = ministryDataRaw.map((item) => item.failed);
    const totalData = ministryDataRaw.map(
        (item) => item.passed + item.processing + item.failed,
    );

    // 3. Khởi tạo cấu hình Multiple Bar Chart
    const ctx = document
        .getElementById("multipleBarChartMinistries")
        .getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Đã xây dựng",
                    data: passedData,
                    backgroundColor: "#10b981", // Màu xanh lục lá thanh lịch
                    borderRadius: 4,
                    barPercentage: 0.8,
                    categoryPercentage: 0.85,
                },
                {
                    label: "Đang xây dựng",
                    data: processingData,
                    backgroundColor: "#f59e0b", // Màu vàng hổ phách nổi bật
                    borderRadius: 4,
                    barPercentage: 0.8,
                    categoryPercentage: 0.85,
                },
                {
                    label: "Chưa xây dựng",
                    data: failedData,
                    backgroundColor: "#ef4444", // Màu đỏ hồng chuẩn lỗi
                    borderRadius: 4,
                    barPercentage: 0.8,
                    categoryPercentage: 0.85,
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
                    labels: {
                        boxWidth: 12,
                        padding: 16,
                        font: { size: 11, weight: "bold" },
                    },
                },
                tooltip: {
                    backgroundColor: "rgba(15, 23, 42, 0.9)", // Nền tối hiện đại (Slate 900)
                    titleFont: { size: 12, weight: "bold" },
                    bodyFont: { size: 11 },
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        // Biến đổi hiển thị nội dung hover thành định dạng "Hiện tại / Tổng số" theo đúng nghiệp vụ của bạn
                        label: function (context) {
                            const index = context.dataIndex;
                            const currentVal = context.raw;
                            const total = totalData[index];
                            const datasetLabel = context.dataset.label;
                            return ` ${datasetLabel}: ${currentVal}/${total} CSDL`;
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        font: { size: 10, weight: "semibold" },
                        color: "#64748b",
                        maxRotation: 45, // Tự động nghiêng chữ nếu màn hình thiết bị quá hẹp
                        minRotation: 0,
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#f1f5f9" },
                    ticks: {
                        font: { size: 10 },
                        color: "#94a3b8",
                        stepSize: 5,
                    },
                },
            },
        },
    });
});