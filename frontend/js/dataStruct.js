const data = {
    "meta": {
        "version": "1.2",
        "updatedAt": "2026-07-06",
        "description": "Hệ thống quản lý trạng thái CSDL - Đồng bộ cấu trúc định danh criteriaId"
    },
    "criteriaCatalog": [
        {
            "categoryId": 1,
            "categoryCode": "legal",
            "categoryName": "Pháp lý",
            "items": [
                { "criteriaId": 1, "questionText": "Đã có cơ sở pháp lý để triển khai xây dựng CSDL?" },
                { "criteriaId": 2, "questionText": "Đã ban hành quy trình thu thập, tạo lập dữ liệu?" },
                { "criteriaId": 3, "questionText": "Đã ban hành danh mục trường thông tin của CSDL?" },
                { "criteriaId": 16, "questionText": "Đã ban hành danh mục dữ liệu mở?" },
                { "criteriaId": 17, "questionText": "Đã ban hành danh mục dữ liệu chủ?" }
            ]
        },
        {
            "categoryId": 2,
            "categoryCode": "finance",
            "categoryName": "Tài chính",
            "items": [
                { "criteriaId": 4, "questionText": "Đã đăng ký nhu cầu vốn triển khai?" },
                { "criteriaId": 5, "questionText": "Đã được bố trí kinh phí triển khai?" },
                { "criteriaId": 18, "questionText": "Đã bố trí kinh phí vận hành, duy trì?" }
            ]
        },
        {
            "categoryId": 3,
            "categoryCode": "infrastructure",
            "categoryName": "Hạ tầng",
            "items": [
                { "criteriaId": 6, "questionText": "CSDL đã được triển khai trên hạ tầng tập trung?" },
                { "criteriaId": 7, "questionText": "Hạ tầng đang vận hành tại TTDL đạt tiêu chuẩn?" },
                { "criteriaId": 19, "questionText": "Hạ tầng có khả năng mở rộng (scale-out/scale-up)?" },
                { "criteriaId": 20, "questionText": "Có hệ thống giám sát hạ tầng 24/7?" },
                { "criteriaId": 21, "questionText": "Có hệ thống cân bằng tải (Load Balancer)?" }
            ]
        },
        {
            "categoryId": 4,
            "categoryCode": "data",
            "categoryName": "Dữ liệu",
            "items": [
                { "criteriaId": 8, "questionText": "Dữ liệu bảo đảm 'đúng'?" },
                { "criteriaId": 9, "questionText": "Dữ liệu bảo đảm 'đủ'?" },
                { "criteriaId": 10, "questionText": "Dữ liệu bảo đảm 'sạch'?" },
                { "criteriaId": 11, "questionText": "Dữ liệu bảo đảm 'sống'?" }
            ]
        },
        {
            "categoryId": 5,
            "categoryCode": "software",
            "categoryName": "Phần mềm",
            "items": [
                { "criteriaId": 12, "questionText": "Có phần mềm ứng dụng nội bộ xử lý nghiệp vụ?" },
                { "criteriaId": 13, "questionText": "Hỗ trợ bóc tách dữ liệu tự động?" },
                { "criteriaId": 22, "questionText": "Phần mềm đáp ứng yêu cầu quản lý?" },
                { "criteriaId": 23, "questionText": "Phần mềm hỗ trợ chia sẻ dữ liệu qua API/dịch vụ?" },
                { "criteriaId": 24, "questionText": "Phần mềm có khả năng kết nối với HTTT/CSDL khác?" }
            ]
        },
        {
            "categoryId": 6,
            "categoryCode": "security",
            "categoryName": "An toàn thông tin",
            "items": [
                { "criteriaId": 14, "questionText": "Hệ thống được phê duyệt hồ sơ cấp độ ATTT?" },
                { "criteriaId": 15, "questionText": "Đã triển khai giám sát SOC đầy đủ?" },
                { "criteriaId": 25, "questionText": "Đã triển khai sao lưu dữ liệu?" },
                { "criteriaId": 26, "questionText": "Đã triển khai giám sát ATTT?" },
                { "criteriaId": 27, "questionText": "Đã triển khai giải pháp bảo vệ hệ thống?" }
            ]
        }
    ],
    "ministries": [
        {
            "id": 1,
            "name": "Bộ Công An",
            "code": "BCA",
            "units": [
                {
                    "id": 101,
                    "name": "Cục Cảnh sát quản lý hành chính về trật tự xã hội (C06)",
                    "code": "C06",
                    "databases": [
                        {
                            "id": 1,
                            "name": "Cơ sở dữ liệu quốc gia về Dân cư",
                            "status": "passed",
                            "progress": 100,
                            "timeline": [
                                {
                                    "id": 1,
                                    "date": "2026-02-20",
                                    "displayDate": "20/02",
                                    "title": "Vv Khởi động triển khai dự án",
                                    "statusType": "processing",
                                    "progress": 10,
                                    "highlights": [],
                                    "categoriesDetail": {
                                        "legal": {
                                            "passed": true,
                                            "assessmentItems": [
                                                {
                                                    "criteriaId": 1,
                                                    "isPassed": true,
                                                    "passedPercent": 100,
                                                    "comment": ["Đã ban hành Nghị quyết 123/TTg-CP quy định quy trình tạo lập dữ liệu.", "Đã ban hành Thông tư hướng dẫn triển khai quy trình tạo lập dữ liệu."]
                                                },
                                                {
                                                    "criteriaId": 2,
                                                    "isPassed": true,
                                                    "passedPercent": 100,
                                                    "comment": ["Ban hành khung kiến trúc để xây dựng phần mềm cốt lõi.", "Đã hoàn thành việc tích hợp hệ thống."]
                                                },
                                                {
                                                    "criteriaId": 3,
                                                    "isPassed": true,
                                                    "passedPercent": 100,
                                                    "comment": ["Đã phê duyệt danh mục 15 trường thông tin dùng chung.", "Đã hoàn thành việc chuẩn hóa dữ liệu."]
                                                }
                                            ]
                                        },
                                        "security": {
                                            "passed": false,
                                            "assessmentItems": [
                                                {
                                                    "criteriaId": 14,
                                                    "isPassed": false,
                                                    "passedPercent": 0,
                                                    "comment": ["Hệ thống chưa được phê duyệt hồ sơ cấp độ 4 về an toàn thông tin.", "Hệ thống chưa có biện pháp bảo vệ dữ liệu hiệu quả."]
                                                },
                                                {
                                                    "criteriaId": 15,
                                                    "isPassed": false,
                                                    "passedPercent": 0,
                                                    "comment": ["Hệ thống không có kết nối giám sát SOC đầy đủ 24/7.", "Hệ thống chưa triển khai các biện pháp giám sát an ninh mạng."]
                                                }
                                            ]
                                        }
                                    },
                                    "summary": "Về cơ bản, điều kiện..."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}