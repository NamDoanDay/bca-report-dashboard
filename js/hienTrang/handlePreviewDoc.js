const data = {
    "meta": {
        "version": "1.0",
        "updatedAt": "2026-07-05",
        "description": "Hệ thống quản lý trạng thái xây dựng CSDL các Bộ Ngành"
    },
    "criteriaTemplates": {
        "Pháp lý": [
            { "id": 1, "q": "Đã có cơ sở pháp lý để triển khai xây dựng CSDL?" },
            { "id": 2, "q": "Đã ban hành quy trình thu thập, tạo lập dữ liệu?" },
            { "id": 3, "q": "Đã ban hành danh mục trường thông tin của CSDL?" }
        ],
        "Tài chính": [
            { "id": 4, "q": "Đã đăng ký nhu cầu vốn triển khai?" },
            { "id": 5, "q": "Đã được bố trí kinh phí triển khai?" }
        ],
        "Hạ tầng": [
            { "id": 6, "q": "CSDL đã được triển khai trên hạ tầng tập trung?" },
            { "id": 7, "q": "Hạ tầng đang vận hành tại TTDL đạt tiêu chuẩn?" }
        ],
        "Dữ liệu": [
            { "id": 8, "q": "Dữ liệu bảo đảm 'đúng'?" },
            { "id": 9, "q": "Dữ liệu bảo đảm 'đủ'?" },
            { "id": 10, "q": "Dữ liệu bảo đảm 'sạch'?" },
            { "id": 11, "q": "Dữ liệu bảo đảm 'sống'?" }
        ],
        "Phần mềm": [
            { "id": 12, "q": "Có phần mềm ứng dụng nội bộ xử lý nghiệp vụ?" },
            { "id": 13, "q": "Hỗ trợ bóc tách dữ liệu tự động?" }
        ],
        "ATTT": [
            { "id": 14, "q": "Hệ thống được phê duyệt hồ sơ cấp độ ATTT?" },
            { "id": 15, "q": "Đã triển khai giám sát SOC đầy đủ?" }
        ]
    },
    "ministries": [
        {
            "id": 1,
            "name": "Bộ Công An",
            "code": "BCA",
            "units": [
                {
                    "id": 101,
                    "name": "Cục Cảnh sát quản lý hành chính về trật tự xã hội (C06)",
                    "databases": [
                        {
                            "id": 1,
                            "name": "Cơ sở dữ liệu quốc gia về Dân cư",
                            "status": "passed",
                            "progress": 100,
                            "timeline": [
                                {
                                    "index": 0,
                                    "date": "2024-01-10",
                                    "displayDate": "10/01/2024",
                                    "title": "Khởi động & Đang xây dựng",
                                    "statusType": "processing",
                                    "progress": 30,
                                    "legalBasis": ["Nghị quyết NQ123/BCA-TTDLQG"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": false, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": [
                                        { "id": 1, "passed": 75 }, { "id": 2, "passed": 0 }, { "id": 3, "passed": 0 }
                                    ]
                                },
                                {
                                    "index": 1,
                                    "date": "2024-05-15",
                                    "displayDate": "15/05/2024",
                                    "title": "Nghiệm thu Đã xây dựng hoàn thành",
                                    "statusType": "passed",
                                    "progress": 100,
                                    "legalBasis": ["Nghị quyết NQ123/BCA-TTDLQG", "Đáp ứng yêu cầu NQ123/TTg-CP"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": true, "dl": true, "pm": true, "attt": true
                                    },
                                    "criteriaScores": [
                                        { "id": 1, "passed": 100 }, { "id": 2, "passed": 100 }, { "id": 3, "passed": 100 },
                                        { "id": 4, "passed": 100 }, { "id": 5, "passed": 100 },
                                        { "id": 6, "passed": 100 }, { "id": 7, "passed": 100 },
                                        { "id": 8, "passed": 100 }, { "id": 9, "passed": 100 }, { "id": 10, "passed": 100 }, { "id": 11, "passed": 100 },
                                        { "id": 12, "passed": 100 }, { "id": 13, "passed": 100 },
                                        { "id": 14, "passed": 100 }, { "id": 15, "passed": 100 }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "name": "Cơ sở dữ liệu Căn cước công dân",
                            "status": "processing",
                            "progress": 65,
                            "timeline": [
                                {
                                    "index": 0,
                                    "date": "2024-02-01",
                                    "displayDate": "01/02/2024",
                                    "title": "Bắt đầu triển khai hạng mục phụ",
                                    "statusType": "processing",
                                    "progress": 40,
                                    "legalBasis": ["Kế hoạch số 45/KH-C06"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": false, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": [
                                        { "id": 1, "passed": 75 }, { "id": 2, "passed": 60 }, { "id": 3, "passed": 45 }
                                    ]
                                },
                                {
                                    "index": 1,
                                    "date": "2024-05-10",
                                    "displayDate": "10/05/2024",
                                    "title": "Đánh giá tiến độ giữa kỳ",
                                    "statusType": "processing",
                                    "progress": 65,
                                    "legalBasis": ["Báo cáo số 122/BC-C06"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": true, "dl": false, "pm": true, "attt": false
                                    },
                                    "criteriaScores": [
                                        { "id": 1, "passed": 75 }, { "id": 2, "passed": 60 }, { "id": 3, "passed": 45 },
                                        { "id": 4, "passed": 80 }, { "id": 5, "passed": 55 },
                                        { "id": 6, "passed": 70 }, { "id": 7, "passed": 65 },
                                        { "id": 8, "passed": 85 }, { "id": 9, "passed": 78 }, { "id": 10, "passed": 62 }, { "id": 11, "passed": 40 },
                                        { "id": 12, "passed": 90 }, { "id": 13, "passed": 70 }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 102,
                    "name": "Cục Cảnh sát giao thông (C08)",
                    "databases": [
                        {
                            "id": 2,
                            "name": "Cơ sở dữ liệu Đăng ký xe toàn quốc",
                            "status": "passed",
                            "progress": 100,
                            "timeline": [
                                {
                                    "index": 0,
                                    "date": "2024-01-15",
                                    "displayDate": "15/01/2024",
                                    "title": "Khởi động hạ tầng",
                                    "statusType": "processing",
                                    "progress": 50,
                                    "legalBasis": ["Thông tư quy định đăng ký xe"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": true, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": []
                                },
                                {
                                    "index": 1,
                                    "date": "2024-06-20",
                                    "displayDate": "20/06/2024",
                                    "title": "Đã nghiệm thu đưa vào vận hành",
                                    "statusType": "passed",
                                    "progress": 100,
                                    "legalBasis": ["Quyết định đưa vào khai thác chính thức"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": true, "dl": true, "pm": true, "attt": true
                                    },
                                    "criteriaScores": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Bộ Tư Pháp",
            "code": "BTP",
            "units": [
                {
                    "id": 201,
                    "name": "Cục Công nghệ thông tin",
                    "databases": [
                        {
                            "id": 4,
                            "name": "Cơ sở dữ liệu Hộ tịch điện tử toàn quốc",
                            "status": "passed",
                            "progress": 100,
                            "timeline": [
                                {
                                    "index": 0,
                                    "date": "2024-02-10",
                                    "displayDate": "10/02/2024",
                                    "title": "Bắt đầu số hóa",
                                    "statusType": "processing",
                                    "progress": 45,
                                    "legalBasis": ["Luật Hộ tịch"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": false, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": []
                                },
                                {
                                    "index": 1,
                                    "date": "2024-07-15",
                                    "displayDate": "15/07/2024",
                                    "title": "Hoàn thành đồng bộ toàn quốc",
                                    "statusType": "passed",
                                    "progress": 100,
                                    "legalBasis": ["Nghị định hướng dẫn thi hành luật hộ tịch"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": true, "ht": true, "dl": true, "pm": true, "attt": true
                                    },
                                    "criteriaScores": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 202,
                    "name": "Cục Đăng ký quốc gia giao dịch bảo đảm",
                    "databases": [
                        {
                            "id": 5,
                            "name": "Cơ sở dữ liệu Giao dịch bảo đảm",
                            "status": "failed",
                            "progress": 0,
                            "timeline": [
                                {
                                    "index": 0,
                                    "date": "2024-02-20",
                                    "displayDate": "20/02/2024",
                                    "title": "Khảo sát và ghi nhận vướng mắc",
                                    "statusType": "failed",
                                    "progress": 0,
                                    "legalBasis": ["Chưa ban hành thông tư hướng dẫn"],
                                    "categoriesStatus": {
                                        "pl": false, "tc": false, "ht": false, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "Bộ Giao thông Vận tải",
            "code": "BGTVT",
            "units": [
                {
                    "id": 301,
                    "name": "Cục Đăng kiểm Việt Nam",
                    "databases": [
                        {
                            "id": 20,
                            "name": "CSDL Đăng kiểm phương tiện giao thông",
                            "status": "failed",
                            "progress": 0,
                            "timeline": [
                                {
                                    "index": 0,
                                    "date": "2024-03-05",
                                    "displayDate": "05/03/2024",
                                    "title": "Khởi động dự án",
                                    "statusType": "processing",
                                    "progress": 20,
                                    "legalBasis": ["Đang chuẩn bị đề xuất đầu tư"],
                                    "categoriesStatus": {
                                        "pl": true, "tc": false, "ht": false, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": []
                                },
                                {
                                    "index": 1,
                                    "date": "2024-08-30",
                                    "displayDate": "30/08/2024",
                                    "title": "Tạm dừng do chưa đáp ứng tiêu chí",
                                    "statusType": "failed",
                                    "progress": 0,
                                    "legalBasis": ["Chưa đáp ứng NQ123/TTg-CP"],
                                    "categoriesStatus": {
                                        "pl": false, "tc": false, "ht": false, "dl": false, "pm": false, "attt": false
                                    },
                                    "criteriaScores": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}