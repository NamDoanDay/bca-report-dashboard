const databaseStateData = [
    {
        id: 1,
        shortName: "BCA",
        boNganhName: "Bộ Công An",
        units: [
            {
                id: 1,
                unitName: "Cục Cảnh sát quản lý hành chính về trật tự xã hội",
                unitCode: "C06",
                databases: [
                    {
                        dbId: 101, dbName: "Cơ sở dữ liệu quốc gia về Dân cư", statusType: "passed", progress: 100,
                        criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true },
                        timeline: [
                            {
                                id: 1, date: "20/02/2026", displayDate: "20/02", title: "Tổng kết chiến dịch làm sạch dữ liệu dân cư 1",
                                highlights: [
                                    { criteria: "Dữ liệu Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đáp ứng ATTT", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đã đồng bộ về TTDLQG", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đồng bộ dữ liệu", stats: "98.231.405 bản ghi", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Hạ tầng đặt tại TTDLQG", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đã ban hành Khung", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Các tiêu chí nổi bật khác", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },

                                ],
                                summary: "Về cơ bản, điều kiện “cần” về dữ liệu và hệ thống đã được hình thành; CSDL có quy mô đủ lớn, có thể sử dụng liên thông chia sẻ dữ liệu, thay thế các loại giấy tờ thủ công, giúp cắt giảm các thủ tục hành chính. Mặt khác, tuy đã có hệ thống VNLIS tập trung tại Trung ương, tuy nhiên việc tồn tại nhiều hệ thống vận hành song song tại địa phương (như VBDLIS, VNPT-iLIS,.. đã đầu tư tư trước) đang làm phân tán công cụ điều hành, hạn chế khả năng quản lý tập trung, thống nhất ở tầm quốc gia, đòi hỏi phải có kết luận chỉ đạo dứt điểm về mô hình và nền tảng vận hành thống nhất."
                            }, {
                                id: 2, date: "20/04/2026", displayDate: "20/02", title: "Tổng kết chiến dịch làm sạch dữ liệu dân cư 2",
                                highlights: [
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Thống nhất dùng chung", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Tiêu chí khác", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                ],
                                summary: "Về cơ bản, điều kiện “cần” về dữ liệu và hệ thống đã được hình thành; CSDL có quy mô đủ lớn, có thể sử dụng liên thông chia sẻ dữ liệu, thay thế các loại giấy tờ thủ công, giúp cắt giảm các thủ tục hành chính. Mặt khác, tuy đã có hệ thống VNLIS tập trung tại Trung ương, tuy nhiên việc tồn tại nhiều hệ thống vận hành song song tại địa phương (như VBDLIS, VNPT-iLIS,.. đã đầu tư tư trước) đang làm phân tán công cụ điều hành, hạn chế khả năng quản lý tập trung, thống nhất ở tầm quốc gia, đòi hỏi phải có kết luận chỉ đạo dứt điểm về mô hình và nền tảng vận hành thống nhất."
                            },
                            {
                                id: 3, date: "20/05/2026", displayDate: "20/02", title: "Tổng kết chiến dịch làm sạch dữ liệu dân cư 3",
                                highlights: [
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đã đồng bộ về TTDLQG", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Tiêu chí khác", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                ],
                                summary: "Về cơ bản, điều kiện “cần” về dữ liệu và hệ thống đã được hình thành; CSDL có quy mô đủ lớn, có thể sử dụng liên thông chia sẻ dữ liệu, thay thế các loại giấy tờ thủ công, giúp cắt giảm các thủ tục hành chính. Mặt khác, tuy đã có hệ thống VNLIS tập trung tại Trung ương, tuy nhiên việc tồn tại nhiều hệ thống vận hành song song tại địa phương (như VBDLIS, VNPT-iLIS,.. đã đầu tư tư trước) đang làm phân tán công cụ điều hành, hạn chế khả năng quản lý tập trung, thống nhất ở tầm quốc gia, đòi hỏi phải có kết luận chỉ đạo dứt điểm về mô hình và nền tảng vận hành thống nhất."
                            }, {
                                id: 4, date: "20/06/2026", displayDate: "20/02", title: "Tổng kết chiến dịch làm sạch dữ liệu dân cư 4",
                                highlights: [
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                ],
                                summary: "Về cơ bản, điều kiện “cần” về dữ liệu và hệ thống đã được hình thành; CSDL có quy mô đủ lớn, có thể sử dụng liên thông chia sẻ dữ liệu, thay thế các loại giấy tờ thủ công, giúp cắt giảm các thủ tục hành chính. Mặt khác, tuy đã có hệ thống VNLIS tập trung tại Trung ương, tuy nhiên việc tồn tại nhiều hệ thống vận hành song song tại địa phương (như VBDLIS, VNPT-iLIS,.. đã đầu tư tư trước) đang làm phân tán công cụ điều hành, hạn chế khả năng quản lý tập trung, thống nhất ở tầm quốc gia, đòi hỏi phải có kết luận chỉ đạo dứt điểm về mô hình và nền tảng vận hành thống nhất."
                            },
                        ]
                    },
                    { dbId: 102, dbName: "Cơ sở dữ liệu quốc gia về Căn cước công dân", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/02/2026", displayDate: "20/02", title: "Tổng kết chiến dịch làm sạch dữ liệu dân cư", highlights: [{ criteria: "Xác thực định danh", stats: "78.000.000 tài khoản", icon: "fa-users", desc: "Kích hoạt thành công tài khoản định danh điện tử VNeID." }], summary: "Sẵn sàng chia sẻ liên thông." }] },
                    { dbId: 103, dbName: "CSDL Quản lý xuất nhập cảnh công dân Việt Nam", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "15/03/2026", displayDate: "15/03", title: "Cấp hộ chiếu phổ thông trực tuyến mức độ 4", highlights: [{ criteria: "Xử lý hồ sơ", stats: "Hơn 2 triệu hộ chiếu", icon: "fa-passport", desc: "Người dân nhận hộ chiếu tại nhà qua bưu điện." }], summary: "Chờ rà soát bảo mật bổ sung." }] },
                    { dbId: 104, dbName: "CSDL Quản lý cư trú và tạm vắng", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/04/2026", displayDate: "10/04", title: "Số hóa quy trình thông báo lưu trú", highlights: [{ criteria: "Khai báo qua app", stats: "100% Khách sạn", icon: "fa-hotel", desc: "Tích hợp tính năng thông báo lưu trú trên VNeID." }], summary: "Vận hành thông suốt." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Cảnh sát giao thông",
                unitCode: "C08",
                databases: [
                    { dbId: 105, dbName: "Cơ sở dữ liệu Đăng ký xe toàn quốc", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "01/01/2026", displayDate: "01/01", title: "Báo cáo tiến độ phân hệ đăng ký xe trực tuyến", highlights: [{ criteria: "Chuẩn hóa", stats: "15.420.112 xe (85%)", icon: "fa-car", desc: "Dữ liệu phương tiện được làm sạch chuẩn đề ra." }], summary: "Phục vụ đắc lực qua dịch vụ công định danh." }] },
                    { dbId: 106, dbName: "CSDL Xử phạt vi phạm hành chính trật tự ATGT", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "12/02/2026", displayDate: "12/02", title: "Nộp phạt nguội qua Cổng Dịch vụ công", highlights: [{ criteria: "Xử lý điện tử", stats: "90% Quyết định", icon: "fa-gavel", desc: "Liên thông kho bạc Nhà nước tự động trừ tiền." }], summary: "Đang hoàn thiện đồng bộ." }] },
                    { dbId: 107, dbName: "CSDL Tai nạn giao thông đường bộ quốc gia", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/03/2026", displayDate: "05/03", title: "Bản đồ số các điểm đen tai nạn", highlights: [{ criteria: "Cảnh báo sớm", stats: "Thời gian thực", icon: "fa-triangle-exclamation", desc: "Tích hợp dữ liệu định vị hỗ trợ phân luồng." }], summary: "Hoàn thành số hóa." }] },
                    { dbId: 108, dbName: "CSDL Quản lý phương tiện bị tạm giữ, tịch thu", statusType: "failed", progress: 50, criteriaStatus: { pl: true, tc: false, ht: false, dl: true, pm: false, attt: false }, timeline: [{ id: 1, date: "18/04/2026", displayDate: "18/04", title: "Kiểm kê bãi xe tang vật", highlights: [{ criteria: "Nhập liệu số", stats: "Chưa đạt", icon: "fa-circle-xmark", desc: "Hạ tầng kho bãi địa phương chưa đồng bộ thiết bị quét mã." }], summary: "Cần thúc đẩy đầu tư." }] }
                ]
            },
            {
                id: 3,
                unitName: "Cục Cảnh sát phòng cháy, chữa cháy và CNCH",
                unitCode: "C07",
                databases: [
                    { dbId: 109, dbName: "CSDL Thẩm duyệt, nghiệm thu PCCC công trình", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/01/2026", displayDate: "10/01", title: "Công khai trạng thái an toàn công trình", highlights: [{ criteria: "Tra cứu", stats: "100% Nhà cao tầng", icon: "fa-building", desc: "Người dân tự kiểm tra tòa nhà mình mua có chuẩn PCCC không." }], summary: "Vận hành tốt." }] },
                    { dbId: 110, dbName: "CSDL Quản lý cơ sở nguy hiểm về cháy, nổ", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "20/02/2026", displayDate: "20/02", title: "Bản đồ số nguồn nước chữa cháy toàn quốc", highlights: [{ criteria: "Trụ nước", stats: "95% Tọa độ GIS", icon: "fa-faucet-drip", desc: "Xe cứu hỏa tìm nhanh nguồn nước khi xảy ra hỏa hoạn." }], summary: "Chờ thẩm định bảo mật đường truyền." }] },
                    { dbId: 111, dbName: "Hệ thống tiếp nhận thông tin báo cháy tự động", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/03/2026", displayDate: "15/03", title: "Kết nối thiết bị IoT cảnh báo sớm", highlights: [{ criteria: "Thời gian truyền", stats: "< 2 giây", icon: "fa-bell", desc: "Tự động báo về trung tâm 114 khi có khói." }], summary: "Đang mở rộng vùng thử nghiệm." }] },
                    {
                        dbId: 112, dbName: "CSDL Chứng chỉ hành nghề tư vấn, thiết kế PCCC", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true },
                        timeline: [
                            {
                                id: 1, date: "02/04/2026", displayDate: "02/04", title: "Số hóa hồ sơ chuyên gia PCCC", highlights: [
                                    { criteria: "Xác thực", stats: "100% Hồ sơ", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." },
                                    { criteria: "Số CSDL đã đồng bộ", stats: "100% CSDL dân cư", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." },
                                    { criteria: "Hạ tầng đã đảm bảo", stats: "100% liên thông", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." },
                                    { criteria: "Dữ liệu đã đồng bộ", stats: "100% Dữ liệu", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." },
                                    { criteria: "Tiêu chí khác....", stats: "Đang tải", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." },
                                ]
                                , summary: "Đã đưa vào khai thác."
                            },

                            { id: 2, date: "02/05/2026", displayDate: "02/04", title: "Số hóa hồ sơ chuyên gia PCCC", highlights: [{ criteria: "Xác thực", stats: "100% CSDL", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." }], summary: "Đã đưa vào khai thác." },
                            { id: 3, date: "02/06/2026", displayDate: "02/04", title: "Số hóa hồ sơ chuyên gia PCCC", highlights: [{ criteria: "Xác thực", stats: "100% CSDL", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." }], summary: "Đã đưa vào khai thác." },
                            { id: 4, date: "02/07/2026", displayDate: "02/04", title: "Số hóa hồ sơ chuyên gia PCCC", highlights: [{ criteria: "Xác thực", stats: "100% CSDL", icon: "fa-id-card", desc: "Ngăn chặn dùng chứng chỉ giả đi nghiệm thu công trình." }], summary: "Đã đưa vào khai thác." },
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        shortName: "BTC",
        boNganhName: "Bộ Tài chính",
        units: [
            {
                id: 1,
                unitName: "Tổng cục Thuế",
                unitCode: "TCT",
                databases: [
                    { dbId: 201, dbName: "Cơ sở dữ liệu quốc gia về Thuế", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/03/2026", displayDate: "15/03", title: "Hiện đại hóa hệ thống quản lý thuế tập trung", highlights: [{ criteria: "Số hóa hóa đơn", stats: "100% Doanh nghiệp", icon: "fa-file-invoice-dollar", desc: "Áp dụng định dạng XML mới cho hóa đơn điện tử." }], summary: "Kết nối trực tiếp đến cổng định danh." }] },
                    { dbId: 202, dbName: "CSDL Hóa đơn điện tử khởi tạo từ máy tính tiền", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "22/03/2026", displayDate: "22/03", title: "Triển khai hóa đơn may mắn", highlights: [{ criteria: "Phát hành", stats: "Triệu hóa đơn/ngày", icon: "fa-ticket", desc: "Khuyến khích người dân lấy hóa đơn khi mua sắm lẻ." }], summary: "Chờ nghiệm thu ATTT." }] },
                    { dbId: 203, dbName: "Hệ thống quản lý thuế đối với Thương mại điện tử", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "10/04/2026", displayDate: "10/04", title: "Quét dữ liệu các sàn TMĐT quốc tế", highlights: [{ criteria: "Doanh thu", stats: "Chống thất thu lớn", icon: "fa-cart-shopping", desc: "Đối chiếu tài khoản ngân hàng của cá nhân kinh doanh online." }], summary: "Đang ưu hóa luồng đối soát tự động." }] },
                    { dbId: 204, dbName: "CSDL Bản đồ số hộ kinh doanh cá thể", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/05/2026", displayDate: "05/05", title: "Công khai mức thuế khoán", highlights: [{ criteria: "Minh bạch", stats: "63 Tỉnh thành", icon: "fa-map-location-dot", desc: "Người dân tự giám sát mức thuế của các hộ kinh doanh cùng khu vực." }], summary: "Vận hành chính thức." }] }
                ]
            },
            {
                id: 2,
                unitName: "Tổng cục Hải quan",
                unitCode: "TCHQ",
                databases: [
                    { dbId: 205, dbName: "Hệ thống thông suốt dữ liệu Hải quan quốc gia", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "10/04/2026", displayDate: "10/04", title: "Nâng cấp cơ chế một cửa quốc gia", highlights: [{ criteria: "Thông quan tự động", stats: "Phản hồi < 3s", icon: "fa-ship", desc: "Tự động phân luồng tờ khai xuất nhập khẩu." }], summary: "Cần thắt chặt tiêu chí ATTT." }] },
                    { dbId: 206, dbName: "CSDL Danh mục hàng hóa xuất nhập khẩu Việt Nam", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/04/2026", displayDate: "20/04", title: "Đồng bộ mã HS quốc tế", highlights: [{ criteria: "Áp mã tự động", stats: "Chính xác 100%", icon: "fa-barcode", desc: "Hệ thống tự tính thuế xuất nhập khẩu theo hiệp định FTA." }], summary: "Vận hành hoàn chỉnh." }] },
                    { dbId: 207, dbName: "Hệ thống quản lý rủi ro thông tin hành khách (ATS)", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "02/05/2026", displayDate: "02/05", title: "Quét thông tin trước chuyến bay", highlights: [{ criteria: "Sân bay quốc tế", stats: "100% Chuyến bay", icon: "fa-plane-arrival", desc: "Sàng lọc đối tượng buôn lậu trước khi hạ cánh." }], summary: "Đang mở rộng vùng lưu trữ." }] },
                    { dbId: 208, dbName: "CSDL Doanh nghiệp ưu tiên hải quan", statusType: "failed", progress: 45, criteriaStatus: { pl: false, tc: true, ht: false, dl: false, pm: true, attt: false }, timeline: [{ id: 1, date: "18/05/2026", displayDate: "18/05", title: "Xét duyệt luồng xanh tự động", highlights: [{ criteria: "Lỗi luồng dữ liệu", stats: "Nghẽn kết nối ngoài", icon: "fa-triangle-exclamation", desc: "Chưa đối chiếu được lịch sử nợ đọng thuế từ bên Tổng cục Thuế." }], summary: "Tạm ngưng hệ thống sửa lỗi API." }] }
                ]
            },
            {
                id: 3,
                unitName: "Kho bạc Nhà nước",
                unitCode: "KBNN",
                databases: [
                    { dbId: 209, dbName: "Hệ thống quản lý thông tin ngân sách và kho bạc (TABMIS)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "12/01/2026", displayDate: "12/01", title: "Quyết toán ngân sách nhà nước tự động", highlights: [{ criteria: "Chính xác", stats: "100%", icon: "fa-calculator", desc: "Kiểm soát chi ngân sách theo thời gian thực." }], summary: "Hệ thống chạy cực tốt." }] },
                    { dbId: 210, dbName: "CSDL Dịch vụ công trực tuyến Kho bạc Nhà nước", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "25/02/2026", displayDate: "25/02", title: "Ký số chứng từ chi điện tử", highlights: [{ criteria: "Không dùng giấy", stats: "100% Đơn vị", icon: "fa-signature", desc: "Các cơ quan hành chính nhận tiền cấp phát hoàn toàn online." }], summary: "Vận hành thông suốt." }] },
                    { dbId: 211, dbName: "CSDL Mã số các đơn vị có quan hệ với ngân sách", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "18/03/2026", displayDate: "18/03", title: "Cấp mã định danh đơn vị dự toán", highlights: [{ criteria: "Quản lý mã", stats: "150.000 Mã", icon: "fa-id-badge", desc: "Đồng nhất mã ngân sách trên toàn quốc." }], summary: "Chờ rà soát chứng duyệt bảo mật mạng." }] },
                    { dbId: 212, dbName: "Hệ thống giám sát số dư tài khoản tiền gửi của Kho bạc", statusType: "passed", progress: 85, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "29/04/2026", displayDate: "29/04", title: "Tập trung dòng tiền về Ngân hàng Nhà nước", highlights: [{ criteria: "Tối ưu hóa", stats: "Hàng ngày", icon: "fa-money-bill-transfer", desc: "Giảm thiểu lượng tiền mặt tồn kho không sinh lời." }], summary: "Đang kiểm thử tải đỉnh." }] }
                ]
            }
        ]
    },
    {
        id: 3,
        shortName: "BGTVT",
        boNganhName: "Bộ Giao thông vận tải",
        units: [
            {
                id: 1,
                unitName: "Cục Đường bộ Việt Nam",
                unitCode: "CĐB",
                databases: [
                    { dbId: 301, dbName: "Cơ sở dữ liệu Giấy phép lái xe toàn quốc", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/02/2026", displayDate: "05/02", title: "Hoàn tất đồng bộ dữ liệu GPLX lên VNeID", highlights: [{ criteria: "Tích hợp", stats: "35.000.000 GPLX", icon: "fa-address-card", desc: "Làm sạch và hiển thị bằng lái hợp lệ trên app định danh." }], summary: "Giúp người dân sử dụng GPLX điện tử." }] },
                    { dbId: 302, dbName: "CSDL Thiết bị giám sát hành trình xe kinh doanh", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "20/03/2026", displayDate: "20/03", title: "Báo cáo tốc độ xe khách realtime", highlights: [{ criteria: "GPS gửi về", stats: "Triệu gói tin/phút", icon: "fa-location-crosshairs", desc: "Tự động phát hiện xe phóng nhanh vượt ẩu, chạy quá giờ lái xe liên tục." }], summary: "Hệ thống đang chịu tải tốt." }] },
                    { dbId: 303, dbName: "Hệ thống quản lý dữ liệu thiết bị camera xe container", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "14/04/2026", displayDate: "14/04", title: "Truy xuất hình ảnh tài xế ngủ gật", highlights: [{ criteria: "AI quét ảnh", stats: "Thử nghiệm", icon: "fa-eye-slash", desc: "Gửi cảnh báo về bộ phận điều hành của hãng xe." }], summary: "Chờ cấp chứng nhận bảo mật ATTT." }] },
                    { dbId: 304, dbName: "CSDL Quản lý hạ tầng cầu đường, hành lang an toàn", statusType: "failed", progress: 40, criteriaStatus: { pl: false, tc: true, ht: false, dl: false, pm: true, attt: false }, timeline: [{ id: 1, date: "25/05/2026", displayDate: "25/05", title: "Số hóa lý trình các tuyến quốc lộ", highlights: [{ criteria: "Sai lệch tọa độ", stats: "Chưa khớp bản đồ", icon: "fa-map-pin", desc: "Dữ liệu khảo sát cũ bị lệch so với định vị vệ tinh GPS hiện đại." }], summary: "Yêu cầu đo đạc lại thực địa." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Đăng kiểm Việt Nam",
                unitCode: "ĐK",
                databases: [
                    { dbId: 305, dbName: "CSDL Kiểm định phương tiện cơ giới đường bộ", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "12/02/2026", displayDate: "12/02", title: "Đặt lịch kiểm định trực tuyến qua app", highlights: [{ criteria: "Hạn chế xếp hàng", stats: "100% Trung tâm", icon: "fa-calendar-check", desc: "Chủ xe chủ động chọn giờ và đóng phí kiểm định online." }], summary: "Giải quyết triệt để nạn ùn tắc bến bãi." }] },
                    { dbId: 306, dbName: "Hệ thống thông số kỹ thuật và khí thải phương tiện", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/03/2026", displayDate: "05/03", title: "Tra cứu thông tin thu hồi xe lỗi", highlights: [{ criteria: "Tra cứu số khung", stats: "Tức thời", icon: "fa-car-burst", desc: "Hỗ trợ hãng xe triệu hồi các lô xe bị lỗi kỹ thuật nhà máy." }], summary: "Vận hành rất ổn định." }] },
                    { dbId: 307, dbName: "CSDL Chứng chỉ linh kiện sản xuất, lắp ráp xe", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "19/04/2026", displayDate: "19/04", title: "Hợp quy linh kiện nhập khẩu điện tử", highlights: [{ criteria: "Hải quan một cửa", stats: "95% Hồ sơ", icon: "fa-gears", desc: "Rút ngắn thời gian thông quan phụ tùng chính hãng." }], summary: "Chờ duyệt an toàn thông tin hệ thống mạng." }] },
                    { dbId: 308, dbName: "CSDL Đăng kiểm tàu cá và phương tiện thủy nội địa", statusType: "failed", progress: 50, criteriaStatus: { pl: true, tc: false, ht: false, dl: true, pm: false, attt: false }, timeline: [{ id: 1, date: "30/05/2026", displayDate: "30/05", title: "Rà soát số liệu tàu cá ba không", highlights: [{ criteria: "Mất kết nối dữ liệu", stats: "Nghẽn vùng biên", icon: "fa-anchor", desc: "Ngư dân tự ý cải hoán tàu không khai báo với trạm biên phòng." }], summary: "Yêu cầu phối hợp bộ tư lệnh biên phòng." }] }
                ]
            },
            {
                id: 3,
                unitName: "Cục Hàng hải Việt Nam",
                unitCode: "HHAI",
                databases: [
                    { dbId: 309, dbName: "Hệ thống thông tin tàu thuyền ra vào cảng biển (VTS)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/01/2026", displayDate: "15/01", title: "Số hóa thủ tục cảng biển điện tử", highlights: [{ criteria: "Thủ tục điện tử", stats: "100% Cảng biển", icon: "fa-ship", desc: "Tàu nước ngoài làm thủ tục neo đậu hoàn toàn từ xa." }], summary: "Hệ thống lõi vận hành xuất sắc." }] },
                    { dbId: 310, dbName: "CSDL Chứng chỉ chuyên môn của thuyền viên", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "24/02/2026", displayDate: "24/02", title: "Tra cứu trực tuyến bằng thuyền trưởng", highlights: [{ criteria: "Quét mã quốc tế", stats: "Chuẩn IMO", icon: "fa-id-card-clip", desc: "Hỗ trợ các cảng vụ quốc tế tra cứu nhanh lý lịch thuyền viên Việt Nam." }], summary: "Vận hành thông suốt." }] },
                    { dbId: 311, dbName: "Hệ thống bản đồ số luồng hàng hải quốc gia", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "10/04/2026", displayDate: "10/04", title: "Cập nhật cao độ nạo vét luồng", highlights: [{ criteria: "Sonar đo quét", stats: "Realtime", icon: "fa-water", desc: "Cảnh báo độ sâu an toàn tránh việc tàu lớn bị mắc cạn." }], summary: "Đang ưu hóa luồng tải bản đồ nặng." }] },
                    { dbId: 312, dbName: "CSDL Quản lý phao tiêu, hải đăng và báo hiệu hàng hải", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "12/05/2026", displayDate: "12/05", title: "Giám sát pin mặt trời của hải đăng", highlights: [{ criteria: "Cảnh báo nguồn", stats: "95% Thiết bị", icon: "fa-solar-panel", desc: "Phát hiện nhanh các ngọn đèn biển bị tắt do lỗi ắc quy." }], summary: "Chờ rà soát lỗ hổng bảo mật cổng IoT ngoài." }] }
                ]
            }
        ]
    },
    {
        id: 4,
        shortName: "BYT",
        boNganhName: "Bộ Y tế",
        units: [
            {
                id: 1,
                unitName: "Cục Quản lý Khám chữa bệnh",
                unitCode: "KCB",
                databases: [
                    { dbId: 401, dbName: "Hệ thống Hồ sơ sức khỏe điện tử quốc gia", statusType: "failed", progress: 45, criteriaStatus: { pl: true, tc: true, ht: false, dl: false, pm: true, attt: false }, timeline: [{ id: 1, date: "12/05/2026", displayDate: "12/05", title: "Kiểm tra tiến độ liên thông dữ liệu bệnh viện", highlights: [{ criteria: "Chuẩn kết nối", stats: "Chưa đồng bộ hạ tầng", icon: "fa-triangle-exclamation", desc: "Các bệnh viện tuyến tỉnh chưa đồng nhất cấu trúc dữ liệu HL7/FHIR." }], summary: "Hạ tầng lưu trữ địa phương còn nghẽn mạch." }] },
                    { dbId: 402, dbName: "CSDL Chứng chỉ hành nghề y dược của bác sĩ", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/01/2026", displayDate: "20/01", title: "Công khai danh sách bác sĩ hành nghề", highlights: [{ criteria: "Tra cứu nhanh", stats: "100% Bác sĩ", icon: "fa-user-doctor", desc: "Người dân phát hiện nhanh phòng khám chui, bác sĩ giả." }], summary: "Vận hành ổn định." }] },
                    { dbId: 403, dbName: "Hệ thống cấp mã định danh cơ sở y tế toàn quốc", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "18/02/2026", displayDate: "18/02", title: "Đồng nhất mã bệnh viện quốc gia", highlights: [{ criteria: "Liên thông BHXH", stats: "100% Cơ sở", icon: "fa-hospital", desc: "Hỗ trợ thanh toán bảo hiểm y tế tuyến đầu không cần giấy chuyển viện." }], summary: "Vận hành thông suốt." }] },
                    { dbId: 404, dbName: "CSDL Quản lý bệnh án điện tử (EMR) trọng điểm", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "05/04/2026", displayDate: "05/04", title: "Thử nghiệm ký số bệnh án", highlights: [{ criteria: "Bảo mật", stats: "95% Bệnh viện TW", icon: "fa-file-medical", desc: "Thay thế hoàn toàn kho lưu trữ hồ sơ giấy rách nát." }], summary: "Chờ phê duyệt ATTT cấp độ 4." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Quản lý Dược",
                unitCode: "QLD",
                databases: [
                    { dbId: 405, dbName: "Ngân hàng dữ liệu ngành Dược (DrugBank)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/02/2026", displayDate: "10/02", title: "Tra cứu giá thuốc trúng thầu công khai", highlights: [{ criteria: "Minh bạch giá", stats: "100% Loại thuốc", icon: "fa-capsules", desc: "Chống hiện tượng thổi giá thuốc, nâng giá thiết bị vật tư." }], summary: "Vận hành rất tốt." }] },
                    { dbId: 406, dbName: "CSDL Mã vạch, nguồn gốc xuất xứ thuốc", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "12/03/2026", displayDate: "12/03", title: "Quét mã chống thuốc giả tại quầy", highlights: [{ criteria: "QR code truy xuất", stats: "95% Nhà máy", icon: "fa-qrcode", desc: "Theo dõi chuỗi cung ứng từ nhà máy đến tay người bệnh." }], summary: "Chờ phê duyệt phương án mật mã bảo mật." }] },
                    { dbId: 407, dbName: "Hệ thống liên thông đơn thuốc điện tử quốc gia", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "24/04/2026", displayDate: "24/04", title: "Chặn bán thuốc kháng sinh không đơn", highlights: [{ criteria: "Đơn điện tử", stats: "Đang kết nối", icon: "fa-file-prescription", desc: "Bác sĩ kê trên máy, hiệu thuốc check trên cổng để bán." }], summary: "Đang tinh chỉnh luồng dữ liệu API." }] },
                    { dbId: 408, dbName: "CSDL Quản lý thử nghiệm lâm sàng thuốc mới", statusType: "failed", progress: 55, criteriaStatus: { pl: true, tc: false, ht: false, dl: true, pm: false, attt: false }, timeline: [{ id: 1, date: "20/05/2026", displayDate: "20/05", title: "Hồ sơ phản ứng phụ của thuốc (ADR)", highlights: [{ criteria: "Nhập liệu báo cáo", stats: "Chậm tiến độ", icon: "fa-circle-exclamation", desc: "Các trung tâm y tế cơ sở thiếu công cụ báo cáo nhanh ca biến chứng." }], summary: "Yêu cầu nâng cấp phân hệ phần mềm." }] }
                ]
            },
            {
                id: 3,
                unitName: "Cục An toàn thực phẩm",
                unitCode: "ATTP",
                databases: [
                    { dbId: 409, dbName: "CSDL Cấp giấy chứng nhận cơ sở đủ điều kiện ATTP", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/01/2026", displayDate: "05/01", title: "Số hóa giấy chứng nhận cơ sở nấu ăn", highlights: [{ criteria: "Cấp trực tuyến", stats: "100% Cơ sở cấp mới", icon: "fa-utensils", desc: "Rút ngắn quy trình thẩm định thực địa xuống 7 ngày." }], summary: "Vận hành trơn tru." }] },
                    { dbId: 410, dbName: "Hệ thống tiếp nhận tự công bố sản phẩm thực phẩm", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/02/2026", displayDate: "15/02", title: "Kho số hóa nhãn mác thực phẩm nhập khẩu", highlights: [{ criteria: "Công khai thành phần", stats: "100% Tra cứu", icon: "fa-eye", desc: "Giúp người tiêu dùng kiểm tra chất cấm có trong thực phẩm đóng hộp." }], summary: "Hệ thống hoạt động ổn định." }] },
                    { dbId: 411, dbName: "CSDL Quản lý nguy cơ và ngộ độc thực phẩm", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "18/03/2026", displayDate: "18/03", title: "Bản đồ cảnh báo vùng ngộ độc cấp tính", highlights: [{ criteria: "Truy vết nguồn", stats: "Quét chuỗi thức ăn", icon: "fa-route", desc: "Khoanh vùng nhanh lô nông sản chứa dư lượng thuốc trừ sâu." }], summary: "Đang kiểm thử tải luồng API liên ngành." }] },
                    { dbId: 412, dbName: "CSDL Cấp phép quảng cáo thực phẩm chức năng", statusType: "failed", progress: 50, criteriaStatus: { pl: false, tc: true, ht: false, dl: false, pm: true, attt: false }, timeline: [{ id: 1, date: "22/04/2026", displayDate: "22/04", title: "Quét video quảng cáo sai sự thật", highlights: [{ criteria: "AI quét từ khóa", stats: "Lỗi nhận diện", icon: "fa-bug", desc: "Mô hình AI nhận diện sai ngữ cảnh nói quá về công dụng thuốc chữa ung thư." }], summary: "Tạm dừng để train lại model AI." }] }
                ]
            }
        ]
    },
    {
        id: 5,
        shortName: "BKHĐT",
        boNganhName: "Bộ Kế hoạch và Đầu tư",
        units: [
            {
                id: 1,
                unitName: "Cục Quản lý đăng ký kinh doanh",
                unitCode: "ĐKKD",
                databases: [
                    { dbId: 501, dbName: "CSDL quốc gia về Đăng ký doanh nghiệp", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/01/2026", displayDate: "10/01", title: "Số hóa doanh nghiệp thành lập mới", highlights: [{ criteria: "Đồng bộ", stats: "100%", icon: "fa-check", desc: "Liên thông tức thời với hệ thống Thuế." }], summary: "Vận hành ổn định." }] },
                    { dbId: 502, dbName: "Hệ thống thông tin đăng ký hộ kinh doanh", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "15/02/2026", displayDate: "15/02", title: "Chuẩn hóa dữ liệu hộ cá thể", highlights: [{ criteria: "Làm sạch", stats: "85%", icon: "fa-broom", desc: "Rà soát mã số thuế hộ kinh doanh." }], summary: "Đang hoàn thiện." }] },
                    { dbId: 503, dbName: "CSDL về doanh nghiệp giải thể và phá sản", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/03/2026", displayDate: "20/03", title: "Cập nhật trạng thái pháp lý tự động", highlights: [{ criteria: "Chính xác", stats: "100%", icon: "fa-bolt", desc: "Tự động chặn giao dịch khi có cảnh báo." }], summary: "Hoàn thành." }] },
                    { dbId: 504, dbName: "Hệ thống thông tin hợp tác xã toàn quốc", statusType: "failed", progress: 50, criteriaStatus: { pl: true, tc: false, ht: false, dl: true, pm: false, attt: false }, timeline: [{ id: 1, date: "05/04/2026", displayDate: "05/04", title: "Nâng cấp hạ tầng kết nối HTX", highlights: [{ criteria: "Kết nối", stats: "Chưa đạt", icon: "fa-exclamation", desc: "Hạ tầng địa phương chưa đồng bộ." }], summary: "Cần thúc đẩy hạ tầng phần cứng." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Đầu tư nước ngoài",
                unitCode: "ĐTNN",
                databases: [
                    { dbId: 505, dbName: "Hệ thống thông tin quốc gia về đầu tư nước ngoài", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "01/02/2026", displayDate: "01/02", title: "Quản lý dự án FDI", highlights: [{ criteria: "Số lượng", stats: "45.000 dự án", icon: "fa-globe", desc: "Quản lý toàn diện vòng đời dự án." }], summary: "Vận hành tốt." }] },
                    { dbId: 506, dbName: "CSDL về đầu tư của Việt Nam ra nước ngoài", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "18/02/2026", displayDate: "18/02", title: "Đồng bộ dòng vốn đầu tư ra ngoài", highlights: [{ criteria: "Chính xác", stats: "100%", icon: "fa-chart-pie", desc: "Theo dõi sát sao luồng tiền ngoại tệ." }], summary: "Hoàn tất." }] },
                    { dbId: 507, dbName: "Hệ thống giám sát xúc tiến đầu tư", statusType: "passed", progress: 85, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "22/03/2026", displayDate: "22/03", title: "Số hóa dữ liệu đối tác quốc tế", highlights: [{ criteria: "Hồ sơ", stats: "12.000 đối tác", icon: "fa-briefcase", desc: "Phân loại nhóm ngành tiềm năng." }], summary: "Đang hoàn thiện kết nối mạng." }] },
                    { dbId: 508, dbName: "CSDL ưu đãi đầu tư và đặc khu kinh tế", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "30/04/2026", displayDate: "30/04", title: "Kiểm tra chính sách ưu đãi", highlights: [{ criteria: "Đúng luật", stats: "100%", icon: "fa-gavel", desc: "Tự động áp dụng khung thuế ưu đãi." }], summary: "Chờ rà soát chứng duyệt bảo mật." }] }
                ]
            },
            {
                id: 3,
                unitName: "Tổng cục Thống kê",
                unitCode: "TCTK",
                databases: [
                    { dbId: 509, dbName: "CSDL Tổng điều tra dân số và nhà ở", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/03/2026", displayDate: "05/03", title: "Đồng bộ kho dữ liệu dân số", highlights: [{ criteria: "Khớp BCA", stats: "99.5%", icon: "fa-users-gear", desc: "Làm sạch dựa trên dữ liệu dân cư quốc gia." }], summary: "Hoàn thành xuất sắc." }] },
                    { dbId: 510, dbName: "Hệ thống chỉ số giá tiêu dùng (CPI) quốc gia", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "25/03/2026", displayDate: "25/03", title: "Tính toán CPI tự động", highlights: [{ criteria: "Thời gian", stats: "< 1 giây", icon: "fa-calculator", desc: "Thu thập giá cả trực tuyến theo thời gian thực." }], summary: "Vận hành chính thức." }] },
                    { dbId: 511, dbName: "CSDL điều tra doanh nghiệp hàng năm", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "10/04/2026", displayDate: "10/04", title: "Thu thập báo cáo tài chính", highlights: [{ criteria: "Mẫu biểu", stats: "95% Doanh nghiệp", icon: "fa-file-lines", desc: "Chuyển đổi hoàn toàn sang khai báo điện tử." }], summary: "Chờ nghiệm thu an toàn thông tin." }] },
                    { dbId: 512, dbName: "Hệ thống thông tin thống kê tài khoản quốc gia", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "02/05/2026", displayDate: "02/05", title: "Ước tính chỉ số GDP", highlights: [{ criteria: "Độ chính xác", stats: "Nâng cao", icon: "fa-chart-area", desc: "Tích hợp thêm dữ liệu kinh tế số." }], summary: "Đang kiểm thử chất lượng dữ liệu." }] }
                ]
            }
        ]
    },
    {
        id: 6,
        shortName: "BTTTT",
        boNganhName: "Bộ Thông tin và Truyền thông",
        units: [
            {
                id: 1,
                unitName: "Cục Viễn thông",
                unitCode: "CVT",
                databases: [
                    { dbId: 601, dbName: "CSDL thông tin thuê bao di động quốc gia", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "11/01/2026", displayDate: "11/01", title: "Chiến dịch xóa bỏ SIM rác", highlights: [{ criteria: "Chính chủ", stats: "100% Thuê bao", icon: "fa-sim-card", desc: "Đối chiếu trùng khớp hoàn toàn với CSDL Dân cư." }], summary: "Hoàn thành làm sạch." }] },
                    { dbId: 602, dbName: "Hệ thống quản lý kho số viễn thông", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "08/02/2026", displayDate: "08/02", title: "Đấu giá trực tuyến kho số đẹp", highlights: [{ criteria: "Minh bạch", stats: "Cổng công khai", icon: "fa-gavel", desc: "Tích hợp thanh toán trực tuyến quốc gia." }], summary: "Vận hành tốt." }] },
                    { dbId: 603, dbName: "CSDL quy hoạch hạ tầng viễn thông thụ động", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "19/03/2026", displayDate: "19/03", title: "Bản đồ số trạm phát sóng BTS", highlights: [{ criteria: "Tọa độ GIS", stats: "95% Trạm trạm", icon: "fa-map-pin", desc: "Số hóa vị trí các trạm 5G mới." }], summary: "Cần bổ sung chứng nhận ATTT." }] },
                    { dbId: 604, dbName: "Hệ thống đo lường chất lượng băng thông", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "24/04/2026", displayDate: "24/04", title: "Giám sát tốc độ Internet", highlights: [{ criteria: "Mẫu quét", stats: "Triệu mẫu/ngày", icon: "fa-gauge-high", desc: "Phát hiện nhanh các khu vực mạng yếu." }], summary: "Kiểm thử luồng thu thập dữ liệu." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Chuyển đổi số quốc gia",
                unitCode: "CĐSQG",
                databases: [
                    { dbId: 605, dbName: "Nền tảng tích hợp, chia sẻ dữ liệu (NDXP)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "02/02/2026", displayDate: "02/02", title: "Kết nối trục liên thông quốc gia", highlights: [{ criteria: "Giao dịch", stats: "2.5 triệu/ngày", icon: "fa-network-wired", desc: "Kết nối thông suốt toàn bộ các Bộ, Tỉnh." }], summary: "Trục xương sống vận hành ổn định." }] },
                    { dbId: 606, dbName: "CSDL đánh giá chỉ số DTI toàn quốc", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "28/02/2026", displayDate: "28/02", title: "Xếp hạng chuyển đổi số 2025", highlights: [{ criteria: "Tự động", stats: "63 Tỉnh thành", icon: "fa-ranking-star", desc: "Thu thập báo cáo số điện tử, chấm điểm AI." }], summary: "Đã công bố báo cáo." }] },
                    { dbId: 607, dbName: "Hệ thống quản lý danh mục điện tử dùng chung", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "15/03/2026", displayDate: "15/03", title: "Đồng bộ chuẩn dữ liệu danh mục", highlights: [{ criteria: "Chuẩn hóa", stats: "100% Danh mục", icon: "fa-list-ol", desc: "Mã quốc gia, tỉnh thành chuẩn." }], summary: "Đang làm tờ trình phê duyệt bảo mật." }] },
                    { dbId: 608, dbName: "Kho dữ liệu thủ tục hành chính điện tử công dân", statusType: "passed", progress: 85, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/04/2026", displayDate: "10/04", title: "Kho số hóa kết quả TTHC", highlights: [{ criteria: "Tái sử dụng", stats: "85% Kết quả", icon: "fa-folder-open", desc: "Dân không cần nộp lại giấy tờ cũ." }], summary: "Đang mở rộng vùng lưu trữ hạ tầng." }] }
                ]
            },
            {
                id: 3,
                unitName: "Cục An toàn thông tin",
                unitCode: "ATTT",
                databases: [
                    { dbId: 609, dbName: "Hệ thống giám sát không gian mạng quốc gia", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "12/03/2026", displayDate: "12/03", title: "Chặn lọc website độc hại và lừa đảo", highlights: [{ criteria: "Triệt phá", stats: "4.500 trang giả", icon: "fa-shield-halved", desc: "Bảo vệ an toàn thông tin tài chính cho người dân." }], summary: "Vận hành liên tục 24/7." }] },
                    { dbId: 610, dbName: "CSDL cấp chứng nhận an toàn hệ thống thông tin", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "29/03/2026", displayDate: "29/03", title: "Phân loại hệ thống cấp độ 1-5", highlights: [{ criteria: "Số hóa", stats: "10.000 Hệ thống", icon: "fa-certificate", desc: "Quản lý thời hạn và đôn đốc kiểm thử định kỳ." }], summary: "Vận hành ổn định." }] },
                    { dbId: 611, dbName: "Hệ thống điều phối ứng cứu sự cố mạng (VNCERT)", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "22/04/2026", displayDate: "22/04", title: "Mạng lưới ứng cứu mã độc tống tiền", highlights: [{ criteria: "Thành viên", stats: "800 Đầu mối", icon: "fa-tower-cell", desc: "Chia sẻ mẫu mã độc ransomware theo thời gian thực." }], summary: "Đang cấu hình phân hệ mật mã bảo mật." }] },
                    { dbId: 612, dbName: "CSDL quản lý IP và tên miền độc hại", statusType: "failed", progress: 50, criteriaStatus: { pl: true, tc: false, ht: false, dl: true, pm: false, attt: false }, timeline: [{ id: 1, date: "22/05/2026", displayDate: "22/05", title: "Quét lỗ hổng mạng lỗi bộ", highlights: [{ criteria: "Công cụ scan", stats: "Quá tải", icon: "fa-triangle-exclamation", desc: "Dung lượng máy chủ không đủ đáp ứng gói dữ liệu lớn." }], summary: "Yêu cầu cấu hình lại phần cứng." }] }
                ]
            }
        ]
    },
    {
        id: 7,
        shortName: "BXD",
        boNganhName: "Bộ Xây dựng",
        units: [
            {
                id: 1,
                unitName: "Cục Quản lý nhà và thị trường bất động sản",
                unitCode: "QLN",
                databases: [
                    { dbId: 701, dbName: "CSDL thông tin về nhà ở và thị trường BĐS", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/01/2026", displayDate: "05/01", title: "Công khai chỉ số giá bất động sản", highlights: [{ criteria: "Minh bạch", stats: "Cập nhật quý", icon: "fa-house-trending-up", desc: "Chống thao túng giá, thổi giá đất nền." }], summary: "Vận hành tốt." }] },
                    { dbId: 702, dbName: "Hệ thống quản lý nhà ở xã hội toàn quốc", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "14/02/2026", displayDate: "14/02", title: "Xét duyệt đối tượng mua NOXH", highlights: [{ criteria: "Liên thông", stats: "Thuế & Đất đai", icon: "fa-user-shield", desc: "Tự động loại bỏ đối tượng đã đóng thuế cao." }], summary: "Chờ phê duyệt ATTT cấp độ 3." }] },
                    { dbId: 703, dbName: "CSDL chứng chỉ hành nghề môi giới BĐS", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/03/2026", displayDate: "20/03", title: "Quét mã QR sàn môi giới", highlights: [{ criteria: "Xác thực", stats: "100% Công khai", icon: "fa-qrcode", desc: "Giúp người dân tra cứu sàn chính thống tránh lừa đảo." }], summary: "Hoàn tất." }] },
                    { dbId: 704, dbName: "Hệ thống thống kê quỹ đất phát triển đô thị", statusType: "passed", progress: 85, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "28/04/2026", displayDate: "28/04", title: "Số hóa ranh giới dự án đô thị", highlights: [{ criteria: "Bản đồ", stats: "85% Dự án", icon: "fa-map", desc: "Tích hợp lớp bản đồ quy hoạch xây dựng." }], summary: "Đang hoàn thiện cơ sở hạ tầng mạng." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Giám định nhà nước về chất lượng công trình",
                unitCode: "GĐXD",
                databases: [
                    { dbId: 705, dbName: "CSDL sự cố công trình xây dựng quốc gia", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/02/2026", displayDate: "10/02", title: "Hồ sơ lưu trữ điện tử sự cố lớn", highlights: [{ criteria: "Tra cứu", stats: "Tìm kiếm < 2s", icon: "fa-database", desc: "Lưu trữ nguyên nhân phục vụ nghiên cứu." }], summary: "Hoàn thành số hóa." }] },
                    { dbId: 706, dbName: "Hệ thống thông tin phòng thí nghiệm chuyên ngành (Las-XD)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "02/03/2026", displayDate: "02/03", title: "Quản lý mã số phòng thí nghiệm hợp chuẩn", highlights: [{ criteria: "Xác thực", stats: "100% Phòng kiểm", icon: "fa-flask-vial", desc: "Tránh hiện tượng làm giả kết quả nén bê tông." }], summary: "Vận hành ổn định." }] },
                    { dbId: 707, dbName: "CSDL chứng chỉ năng lực hành nghề tổ chức xây dựng", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "15/04/2026", displayDate: "15/04", title: "Liên thông đấu thầu quốc gia", highlights: [{ criteria: "Tự động check", stats: "Hạng năng lực", icon: "fa-id-card-clip", desc: "Nhà thầu không thể gian lận năng lực khi thầu." }], summary: "Đang tinh chỉnh API." }] },
                    { dbId: 708, dbName: "Hệ thống đăng ký kiểm tra nhà nước công trình trọng điểm", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "04/05/2026", displayDate: "04/05", title: "Lên lịch kiểm tra nghiệm thu điện tử", highlights: [{ criteria: "Lịch trình", stats: "Đồng bộ", icon: "fa-calendar-days", desc: "Hội đồng kiểm tra theo dõi tiến độ thi công." }], summary: "Chờ bàn giao mật mã bảo mật." }] }
                ]
            },
            {
                id: 3,
                unitName: "Vụ Quản lý quy hoạch kiến trúc",
                unitCode: "QHKT",
                databases: [
                    { dbId: 709, dbName: "Cổng thông tin quy hoạch xây dựng toàn quốc", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/02/2026", displayDate: "15/02", title: "Công khai quy hoạch chung đô thị", highlights: [{ criteria: "Bản đồ GIS", stats: "Tất cả thành phố", icon: "fa-map-location-dot", desc: "Người dân tự tra cứu đất quy hoạch." }], summary: "Hệ thống chạy mượt mà." }] },
                    { dbId: 710, dbName: "CSDL kiến trúc truyền thống và bảo tồn", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/03/2026", displayDate: "10/03", title: "Số hóa 3D công trình di sản kiến trúc", highlights: [{ criteria: "Mô hình 3D", stats: "500 Di sản", icon: "fa-cubes", desc: "Lưu trữ phục vụ công tác trùng tu cổ kính." }], summary: "Hoàn thành mục tiêu năm." }] },
                    { dbId: 711, dbName: "Hệ thống cấp phép quy hoạch trực tuyến", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "02/04/2026", displayDate: "02/04", title: "Cấp chứng chỉ quy hoạch", highlights: [{ criteria: "Ký số", stats: "Ban hành điện tử", icon: "fa-signature", desc: "Rút ngắn thời gian cấp giấy phép." }], summary: "Chờ rà soát lỗ hổng bảo mật." }] },
                    { dbId: 712, dbName: "Hệ thống giám sát xây dựng sai quy hoạch", statusType: "failed", progress: 35, criteriaStatus: { pl: false, tc: false, ht: false, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "25/05/2026", displayDate: "25/05", title: "Tích hợp ảnh vệ tinh phát hiện sai phạm", highlights: [{ criteria: "Ảnh vệ tinh", stats: "Sai lệch lớn", icon: "fa-satellite", desc: "Độ phân giải chưa đủ nét để quét ban công tràn ngoài." }], summary: "Cần đổi đối tác bản đồ vệ tinh." }] }
                ]
            }
        ]
    },
    {
        id: 8,
        shortName: "BTNMT",
        boNganhName: "Bộ Tài nguyên và Môi trường",
        units: [
            {
                id: 1,
                unitName: "Cục Đăng ký và Dữ liệu thông tin đất đai",
                unitCode: "ĐĐAI",
                databases: [
                    { dbId: 801, dbName: "CSDL đất đai quốc gia (Sổ đỏ điện tử)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "01/01/2026", displayDate: "01/01", title: "Liên thông dữ liệu thuế đất và công chứng", highlights: [{ criteria: "Chống khai gian", stats: "Tự động so khớp", icon: "fa-handshake", desc: "Ngăn chặn việc mua bán ký hai giá trốn thuế đất." }], summary: "Hệ thống hạt nhân vận hành tốt." }] },
                    { dbId: 802, dbName: "Hệ thống thông tin bản đồ địa chính số quốc gia", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "15/02/2026", displayDate: "15/02", title: "Số hóa ranh giới thửa đất nông nghiệp", highlights: [{ criteria: "Thửa đất", stats: "25 triệu thửa", icon: "fa-draw-polygon", desc: "Xác định chính xác tọa độ tránh tranh chấp." }], summary: "Đang chờ chứng duyệt an toàn hệ thống." }] },
                    { dbId: 803, dbName: "CSDL giá đất thị trường và bảng giá đất tỉnh", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "18/03/2026", displayDate: "18/03", title: "Cập nhật bảng giá đất theo Luật mới", highlights: [{ criteria: "Khớp luật", stats: "100%", icon: "fa-gavel", desc: "Hệ thống tự tính giá đền bù giải tỏa tự động." }], summary: "Vận hành chính thức." }] },
                    { dbId: 804, dbName: "Hệ thống thống kê, kiểm kê đất đai định kỳ", statusType: "passed", progress: 85, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "30/04/2026", displayDate: "30/04", title: "Báo cáo chuyển đổi mục đích sử dụng đất", highlights: [{ criteria: "Biến động", stats: "Đang kết xuất", icon: "fa-arrow-rotate-left", desc: "Giám sát chặt việc chuyển đất lúa sang dự án." }], summary: "Đang nâng cấp ổ cứng lưu trữ hạ tầng." }] }
                ]
            },
            {
                id: 2,
                unitName: "Cục Kiểm soát ô nhiễm môi trường",
                unitCode: "ÔNMT",
                databases: [
                    { dbId: 805, dbName: "Hệ thống quan trắc môi trường tự động, liên tục", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/02/2026", displayDate: "20/02", title: "Giám sát xả thải khu công nghiệp", highlights: [{ criteria: "Cảnh báo sớm", stats: "< 5 giây", icon: "fa-industry", desc: "Tự động đóng van xả khi phát hiện nồng độ kim loại nặng." }], summary: "Vận hành hoàn hảo." }] },
                    { dbId: 806, dbName: "CSDL nguồn thải và bản đồ ô nhiễm quốc gia", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "05/03/2026", displayDate: "05/03", title: "Định danh mã số nguồn thải lớn", highlights: [{ criteria: "Doanh nghiệp", stats: "12.000 nguồn", icon: "fa-smog", desc: "Theo dõi lượng khí thải carbon phát ra khí quyển." }], summary: "Đang kết nối cổng dịch vụ công." }] },
                    { dbId: 807, dbName: "CSDL quản lý chất thải nguy hại và phế liệu", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "12/04/2026", displayDate: "12/04", title: "Cấp chứng từ chất thải điện tử", highlights: [{ criteria: "GPS xe chở", stats: "90% Xe thùng", icon: "fa-truck-droplet", desc: "Ngăn chặn đổ trộm rác độc hại ra môi trường." }], summary: "Đang chạy thử nghiệm." }] },
                    { dbId: 808, dbName: "Hệ thống giám sát chất lượng không khí (AQI) đô thị", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "08/05/2026", displayDate: "08/05", title: "Đồng bộ trạm cảm biến bụi mịn PM2.5", highlights: [{ criteria: "Dữ liệu mở", stats: "Cung cấp API công cộng", icon: "fa-wind", desc: "Phục vụ hiển thị chỉ số sức khỏe môi trường." }], summary: "Chờ rà soát tường lửa bảo mật." }] }
                ]
            },
            {
                id: 3,
                unitName: "Cục Quản lý tài nguyên nước",
                unitCode: "TNNM",
                databases: [
                    { dbId: 809, dbName: "CSDL lưu vực sông và hành lang bảo vệ nguồn nước", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "10/01/2026", displayDate: "10/01", title: "Mô hình thủy văn lưu vực sông Mê Kông", highlights: [{ criteria: "Hạn mặn", stats: "Dự báo trước 7 ngày", icon: "fa-water", desc: "Hỗ trợ bà con miền Tây chủ động trữ nước ngọt." }], summary: "Hiệu quả thực tế cao." }] },
                    { dbId: 810, dbName: "Hệ thống cấp phép thăm dò, khai thác nước ngầm", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "22/02/2026", displayDate: "22/02", title: "Bản đồ số cao độ sụt lún địa chất", highlights: [{ criteria: "Cảnh báo vùng", stats: "100% Khóa sổ", icon: "fa-mountain", desc: "Tự động từ chối cấp phép tại vùng sụt lún cao." }], summary: "Vận hành đồng bộ." }] },
                    { dbId: 811, dbName: "CSDL các hồ chứa và nhà điện thủy điện toàn quốc", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "04/04/2026", displayDate: "04/04", title: "Giám sát mực nước hồ thủy điện", highlights: [{ criteria: "Xả lũ", stats: "Liên thông EVN", icon: "fa-bolt-lightning", desc: "Tự động cảnh báo vùng hạ du phối hợp di dời dân." }], summary: "Chờ phê duyệt ATTT." }] },
                    { dbId: 812, dbName: "CSDL tài nguyên nước dưới đất vùng biên giới", statusType: "failed", progress: 30, criteriaStatus: { pl: false, tc: false, ht: false, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "30/05/2026", displayDate: "30/05", title: "Đồng bộ dữ liệu nước ngầm biên giới", highlights: [{ criteria: "Số liệu", stats: "Chưa khớp mạng", icon: "fa-link-slash", desc: "Khó khăn trong việc trao đổi định dạng với nước bạn." }], summary: "Cần họp liên tịch bộ ngoại giao." }] }
                ]
            }
        ]
    },
    {
        id: 9,
        shortName: "NHNN",
        boNganhName: "Ngân hàng Nhà nước Việt Nam",
        units: [
            {
                id: 1,
                unitName: "Cơ quan Thanh tra, giám sát ngân hàng",
                unitCode: "TTGS",
                databases: [
                    { dbId: 901, dbName: "CSDL thông tin tín dụng quốc gia (CIC)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "09/01/2026", displayDate: "09/01", title: "Trả kết quả nhóm nợ xấu tự động", highlights: [{ criteria: "Thời gian", stats: "< 0.5 giây", icon: "fa-credit-card", desc: "Cung cấp lịch sử tín dụng tức thì cho ngân hàng." }], summary: "Hệ thống huyết mạch chạy rất tốt." }] },
                    { dbId: 902, dbName: "Hệ thống giám sát phòng chống rửa tiền", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "17/02/2026", displayDate: "17/02", title: "Quét luồng tiền lớn chuyển ra nước ngoài", highlights: [{ criteria: "AI phát hiện", stats: "95% Chính xác", icon: "fa-user-secret", desc: "Tự động phong tỏa tài khoản lừa đảo số lượng lớn." }], summary: "Đang xin phê duyệt mật mã bảo mật mạng." }] },
                    { dbId: 903, dbName: "CSDL danh sách cổ đông sở hữu chéo ngân hàng", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "24/03/2026", displayDate: "24/03", title: "Bóc tách nhóm lợi ích sân sau", highlights: [{ criteria: "Sơ đồ mạng lưới", stats: "Realtime", icon: "fa-diagram-project", desc: "Theo dõi người đứng tên hộ và công ty liên kết." }], summary: "Hoàn thành." }] },
                    { dbId: 904, dbName: "Hệ thống quản lý tỷ lệ an toàn vốn (CAR)", statusType: "passed", progress: 90, criteriaStatus: { pl: true, tc: true, ht: true, dl: false, pm: true, attt: true }, timeline: [{ id: 1, date: "02/05/2026", displayDate: "02/05", title: "Thu thập báo cáo Basel II/III", highlights: [{ criteria: "Tần suất", stats: "Hàng ngày", icon: "fa-chart-line", desc: "Đảm bảo ngân hàng thương mại duy trì thanh khoản an toàn." }], summary: "Đang tinh chỉnh luồng truyền nhận." }] }
                ]
            },
            {
                id: 2,
                unitName: "Vụ Thanh toán",
                unitCode: "VTT",
                databases: [
                    { dbId: 905, dbName: "Hệ thống thanh toán điện tử liên ngân hàng (Citad)", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/01/2026", displayDate: "15/01", title: "Nâng cấp hạn mức giao dịch bù trừ", highlights: [{ criteria: "Thông lượng", stats: "10 triệu lệnh/giờ", icon: "fa-money-bill-transfer", desc: "Hạ tầng lõi xử lý tiền liên ngân hàng không nghẽn mạng." }], summary: "Vận hành tuyệt đối ổn định." }] },
                    { dbId: 906, dbName: "CSDL thông tin tài khoản thanh toán công dân", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "18/02/2026", displayDate: "18/02", title: "Xác thực sinh trắc học khi chuyển tiền > 10tr", highlights: [{ criteria: "Quét khuôn mặt", stats: "Khớp BCA 99%", icon: "fa-face-id", desc: "Triệt hạ hoàn toàn nạn mua bán tài khoản rác của tội phạm." }], summary: "Đã triển khai diện rộng." }] },
                    { dbId: 907, dbName: "Hệ thống giám sát mã QR thanh toán chuẩn (VietQR)", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "30/03/2026", displayDate: "30/03", title: "Thống nhất chuẩn kết nối cổng Napas", highlights: [{ criteria: "Liên thông quốc tế", stats: "Thái Lan, Trung Quốc", icon: "fa-money-bill-trend-up", desc: "Khách quốc tế quét thanh toán trực tiếp không cần đổi tiền mặt." }], summary: "Chờ nghiệm thu hệ thống bảo mật trục ngoài." }] },
                    { dbId: 908, dbName: "CSDL cấp phép dịch vụ trung gian thanh toán", statusType: "passed", progress: 85, criteriaStatus: { pl: true, tc: true, ht: false, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "12/04/2026", displayDate: "12/04", title: "Rà soát điều kiện ký quỹ Fintech", highlights: [{ criteria: "Ký quỹ", stats: "Đạt chuẩn 100%", icon: "fa-building-columns", desc: "Bảo đảm quyền lợi tiền gửi ví điện tử của khách hàng." }], summary: "Đang kiểm tra hạ tầng bảo mật." }] }
                ]
            },
            {
                id: 3,
                unitName: "Cục Công nghệ thông tin",
                unitCode: "CNTT",
                databases: [
                    { dbId: 909, dbName: "Hệ thống quản lý khóa mật mã và chứng thư số", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "20/02/2026", displayDate: "20/02", title: "Ban hành cặp khóa PKI bảo mật lõi", highlights: [{ criteria: "Mật mã hình học", stats: "Chống máy tính lượng tử", icon: "fa-key", desc: "Bảo vệ thông tin tài chính tối cao quốc gia." }], summary: "Vận hành tuyệt mật." }] },
                    { dbId: 910, dbName: "CSDL chứng nhận an toàn hệ thống thông tin ngân hàng", statusType: "passed", progress: 100, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: true }, timeline: [{ id: 1, date: "15/03/2026", displayDate: "15/03", title: "Giám sát tiêu chuẩn ISO 27001", highlights: [{ criteria: "Đánh giá", stats: "100% Tổ chức", icon: "fa-shield-halved", desc: "Ép buộc các ngân hàng nhỏ phải vá lỗ hổng bảo mật hàng tháng." }], summary: "Hoàn tất kiểm tra đợt 1." }] },
                    { dbId: 911, dbName: "Hệ thống trung tâm dữ liệu dự phòng thảm họa", statusType: "passed", progress: 95, criteriaStatus: { pl: true, tc: true, ht: true, dl: true, pm: true, attt: false }, timeline: [{ id: 1, date: "05/04/2026", displayDate: "05/04", title: "Diễn tập ứng cứu mất điện toàn hệ thống", highlights: [{ criteria: "Switch mạng", stats: "Thời gian < 30s", icon: "fa-server", desc: "Hệ thống dự phòng tự động backup thay thế khi có sự cố." }], summary: "Chờ thẩm định vị trí địa lý bảo mật." }] },
                    { dbId: 912, dbName: "Hệ thống ứng phó sự cố tấn công từ chối dịch vụ (DDoS)", statusType: "failed", progress: 55, criteriaStatus: { pl: true, tc: false, ht: false, dl: true, pm: false, attt: false }, timeline: [{ id: 1, date: "04/06/2026", displayDate: "04/06", title: "Kiểm thử hệ thống tường lửa chuyên dụng mới", highlights: [{ criteria: "Tường lửa chặn nhầm", stats: "Lọt mã độc", icon: "fa-bug-slash", desc: "Hệ thống nhận diện nhầm luồng dẫn đến chặn nhầm IP người dùng thật." }], summary: "Hủy hợp đồng thử nghiệm, yêu cầu sửa thuật toán." }] }
                ]
            }
        ]
    }
];

// ==========================================
// 1. BIẾN TOÀN CỤC THEO DÕI TRẠNG THÁI
// ==========================================
const currentSelection = {
    boId: 1,
    unitCode: "C06",
    dbId: 101,          // SỬA: Đổi CSDL mặc định thành 101 cho khớp dữ liệu Bộ Công An
    timelineIndex: 0    // SỬA: Khởi tạo tường minh tránh lỗi undefined
};

// Hàm bổ trợ: Tìm kiếm chính xác CSDL dựa vào cặp khóa (boId + dbId)
function findDatabaseContext(boId, dbId) {
    const targetBo = databaseStateData.find(bo => bo.id === boId) || databaseStateData[0];

    for (const unit of targetBo.units) {
        const db = unit.databases.find(d => d.dbId === dbId);
        if (db) {
            return { boNganh: targetBo, unit: unit, db: db };
        }
    }

    // SỬA: Fallback an toàn tuyệt đối bằng Optional Chaining (?.) chống crash ứng dụng
    const firstUnit = targetBo.units?.[0] || databaseStateData[0]?.units?.[0];
    const firstDb = firstUnit?.databases?.[0] || databaseStateData[0]?.units?.[0]?.databases?.[0];

    return { boNganh: targetBo, unit: firstUnit, db: firstDb };
}

// ==========================================
// 2. HÀM KHỞI TẠO GIAO DIỆN (SIDEBAR + TIMELINE)
// ==========================================
function initAppNavigation() {
    const sidebarNav = document.querySelector(".tab-1 nav");
    if (!sidebarNav) return;

    const context = findDatabaseContext(currentSelection.boId, currentSelection.dbId);

    // ĐỒNG BỘ NGƯỢC
    if (!currentSelection.unitCode && context?.unit) {
        currentSelection.unitCode = context.unit.unitCode;
    }

    // --- 2.1. Vẽ danh sách BỘ NGÀNH ở trên cùng Sidebar ---
    let boNganhHtml = `
    <div class="flex items-center justify-between px-3 py-1 text-xs font-bold tracking-wider uppercase mb-1">
      Tên Bộ Ngành <i class="fa-solid fa-chevron-down"></i>
    </div>`;

    databaseStateData.forEach(bo => {
        const totalDbs = bo.units.reduce((sum, unit) => sum + unit.databases.length, 0);
        const firstUnit = bo.units[0];
        const firstDbId = firstUnit?.databases[0]?.dbId || null;
        const firstUnitCode = firstUnit?.unitCode || '';

        const isBoActive = currentSelection.boId === bo.id;
        const activeClass = isBoActive ? 'bg-white text-slate-900 font-medium shadow-sm' : 'text-slate-500 hover:bg-slate-100';

        boNganhHtml += `
      <a href="javascript:void(0)" onclick="selectBoNganh(${bo.id}, ${firstDbId}, '${firstUnitCode}')" class="flex items-center justify-between px-3 py-2 rounded-lg transition ${activeClass}">
        <div class="flex items-center gap-3"><i class="fa-solid fa-building"></i> ${bo.boNganhName}</div>
        <span class="text-xs font-semibold bg-slate-100 px-2 py-0.5 rounded-full">${totalDbs}</span>
      </a>`;
    });
    sidebarNav.innerHTML = boNganhHtml;

    // --- 2.2. Vẽ danh sách ĐƠN VỊ CHỦ QUẢN & CSDL thuộc Bộ ngành đang chọn ---
    const unitSection = document.querySelector("section.w-80 .divide-y");
    if (!unitSection) return;

    let unitHtml = `
    <div class="p-2">
      <div class="neu-inset rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1 mb-2 flex items-center gap-1">
        <i class="fa-solid fa-city"></i> <span>Đơn vị chủ quản / CSDL</span>
      </div>
      <div class="space-y-2 p-2">`;

    const currentBoData = databaseStateData.find(bo => bo.id === currentSelection.boId) || databaseStateData[0];

    currentBoData.units.forEach(unit => {
        const dbCount = unit.databases.length;
        const isCurrentUnitActive = unit.unitCode === currentSelection.unitCode;

        const existingDetails = document.querySelector(`details[data-unit-code="${unit.unitCode}"]`);
        const isUnitOpen = existingDetails
            ? (existingDetails.hasAttribute("open") ? "open" : "")
            : (isCurrentUnitActive ? "open" : "");

        unitHtml += `
      <details data-unit-code="${unit.unitCode}" class="group bg-white border border-slate-100 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden" ${isUnitOpen}>
        <summary class="p-3 hover:bg-slate-50 cursor-pointer flex gap-3 items-center justify-between select-none outline-none">
          <div class="flex gap-3 items-center min-w-0">
            <span class="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-xs flex-shrink-0">${unit.unitCode}</span>
            <div class="min-w-0">
              <h4 class="font-semibold text-slate-800 text-xs truncate">${unit.unitName}</h4>
              <p class="text-slate-400 text-[11px] mt-0.5">${dbCount} Cơ sở dữ liệu</p>
            </div>
          </div>
          <i class="fa-solid fa-chevron-down text-slate-400 transition-transform duration-200 group-open:rotate-180 text-xs"></i>
        </summary>
        <div class="bg-slate-50/50 border-t border-slate-100 p-2 space-y-1">`;

        unit.databases.forEach((db, idx) => {
            const isMatch = (currentSelection.dbId === db.dbId) && isCurrentUnitActive;
            const isDbActive = isMatch
                ? "bg-white shadow-sm font-semibold text-teal-700"
                : "text-slate-600 hover:bg-white hover:shadow-sm";

            unitHtml += `
        <a href="javascript:void(0)" onclick="selectDatabase('${unit.unitCode}', ${currentBoData.id}, ${db.dbId})" class="flex items-center gap-3 p-2.5 rounded-lg text-xs transition ${isDbActive}">
          <span class="w-5 h-5 rounded-full ${isMatch ? 'bg-teal-50 text-teal-700' : 'bg-slate-200 text-slate-700'} font-medium flex items-center justify-center text-[10px]">${idx + 1}</span>
          <span class="font-medium truncate flex-1 text-left">${db.dbName}</span>
          <i class="fa-solid fa-database text-[10px] ${isMatch ? 'text-teal-600' : 'text-slate-400'}"></i>
        </a>`;
        });

        unitHtml += `</div></details>`;
    });

    unitHtml += `</div></div>`;
    unitSection.innerHTML = unitHtml;

    renderTimeline();
}

// ==========================================
// 3. HÀM VẼ TIMELINE (TIẾN ĐỘ THEO NGÀY)
// ==========================================
function renderTimeline() {
    const timelineContainer = document.querySelector("section.w-10 .flex-col.gap-8");
    if (!timelineContainer) return;

    const context = findDatabaseContext(currentSelection.boId, currentSelection.dbId);
    const currentDb = context.db;

    // Trường hợp CSDL trống hoặc không có timeline
    if (!currentDb || !currentDb.timeline || currentDb.timeline.length === 0) {
        timelineContainer.innerHTML = '<span class="text-[9px] text-slate-400">Trống</span>';
        renderReportContent(null);

        // Cập nhật trạng thái phân trang về 0 khi không có dữ liệu
        const pagText = document.getElementById("timelinePaginationText");
        const btnPrev = document.getElementById("btnPrevTimeline");
        const btnNext = document.getElementById("btnNextTimeline");
        if (pagText) pagText.textContent = "0 Trong 0";
        if (btnPrev) btnPrev.disabled = true;
        if (btnNext) btnNext.disabled = true;
        return;
    }

    if (currentSelection.timelineIndex >= currentDb.timeline.length) {
        currentSelection.timelineIndex = 0;
    }

    let timelineHtml = "";
    currentDb.timeline.forEach((item, index) => {
        const isNodeActive = currentSelection.timelineIndex === index;
        const borderClass = isNodeActive ? 'border-teal-600 bg-teal-600 scale-125' : 'border-slate-400';

        timelineHtml += `
      <div class="timeline-node relative flex flex-col items-center cursor-pointer group" 
           data-date="Ngày ${item.date}" 
           data-title="${item.title}"
           onclick="selectTimeline(${index})">
        <div class="w-3 h-3 rounded-full bg-white border-2 ${borderClass} group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:scale-125 transition-all duration-200"></div>
        <span class="text-[9px] text-slate-400 mt-1 scale-90">${item.displayDate}</span>
      </div>`;
    });

    timelineContainer.innerHTML = timelineHtml;
    setupTimelineTooltipEvents();
    renderReportContent(currentDb.timeline[currentSelection.timelineIndex]);

    // ==========================================================
    // LOGIC CẬP NHẬT PHÂN TRANG (X TRONG Y) & DISABLE BUTTON NEXT/PREV
    // ==========================================================
    const pagText = document.getElementById("timelinePaginationText");
    const btnPrev = document.getElementById("btnPrevTimeline");
    const btnNext = document.getElementById("btnNextTimeline");

    if (pagText && btnPrev && btnNext) {
        const totalTimelines = currentDb.timeline.length;
        // timelineIndex chạy từ 0 nên vị trí hiển thị thực tế phải + 1
        const currentPosition = currentSelection.timelineIndex + 1;

        // 1. Cập nhật chuỗi hiển thị dạng "1 Trong 4"
        pagText.textContent = `${currentPosition} Trong ${totalTimelines}`;

        // 2. Nếu đang ở mốc đầu tiên (index = 0) thì khóa nút Previous (Quay lại)
        btnPrev.disabled = (currentSelection.timelineIndex === 0);

        // 3. Nếu đang ở mốc cuối cùng (index = total - 1) thì khóa nút Next (Kế tiếp)
        btnNext.disabled = (currentSelection.timelineIndex === totalTimelines - 1);
    }
}

// ==========================================
// 4. HÀM CẬP NHẬT NỘI DUNG BÁO CÁO CHI TIẾT
// ==========================================
function renderReportContent(reportData) {
    const reportHeader = document.querySelector("section.flex-1 .border-b .flex.items-center.gap-4");
    const cardsContainer = document.querySelector("section.flex-1 .grid");
    const assessmentBox = document.querySelector("section.flex-1 .bg-teal-50\\/50 p");

    const context = findDatabaseContext(currentSelection.boId, currentSelection.dbId);

    // SỬA: Thêm kiểm tra phần tử tồn tại trước khi dùng innerHTML tránh lỗi console log
    const unitBadge = document.getElementById("reportUnitBadge");
    const dbBadge = document.getElementById("reportDbBadge");
    if (unitBadge) unitBadge.innerHTML = `<i class="fa-solid fa-city text-[10px]"></i> ${context.unit.unitName} (${context.unit.unitCode})`;
    if (dbBadge) dbBadge.innerHTML = `<i class="fa-solid fa-database text-[10px]"></i> ${context.db.dbName}`;

    if (!reportData) {
        if (reportHeader) reportHeader.innerHTML = `<h3>Không có dữ liệu báo cáo</h3>`;
        if (cardsContainer) cardsContainer.innerHTML = "";
        if (assessmentBox) assessmentBox.innerHTML = "Chưa có đánh giá chung cho giai đoạn này.";
        return;
    }

    if (reportHeader) {
        reportHeader.innerHTML = `
          <h3 class="font-bold text-slate-700">Ngày ${reportData.date}</h3>
          <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          <h3 class="text-slate-500 font-medium">${reportData.title}</h3>
        `;
    }

    if (cardsContainer) {
        let cardsHtml = "";
        reportData.highlights.forEach(card => {
            cardsHtml += `
        <div class="p-4 rounded-2xl neu-flat flex items-center gap-4 relative group"
              data-criteria="${card.criteria}"
              data-stats="${card.stats}"
              data-desc="${card.desc}">
          <button onclick="openCriteriaModal(this)" class="absolute top-3 right-3 text-gray-400 hover:text-teal-600 transition p-1 text-xs active:scale-90" title="Xem chi tiết">
            <i class="fa-solid fa-expand"></i>
          </button>
          <div class="w-12 h-12 rounded-xl neu-inset flex items-center justify-center text-gray-500 text-lg flex-shrink-0">
            <i class="fa-solid ${card.icon}"></i>
          </div>
          <div class="pr-6">
            <p class="text-xs font-bold uppercase tracking-wider text-gray-700">${card.criteria}</p>
            <h3 class="text-xs font-medium text-teal-600 mt-0.5">${card.stats}</h3>
          </div>
        </div>`;
        });
        cardsContainer.innerHTML = cardsHtml;
    }

    if (assessmentBox) {
        assessmentBox.innerHTML = reportData.summary;
    }
}

// ==========================================
// 5. CÁC HÀM SỰ KIỆN CLICK (ACTIONS)
// ==========================================
// SỬA: Nhận tường minh các giá trị đầu tiên của bộ ngành để tránh bug gán cứng `|| 1`
window.selectBoNganh = function (boId, targetDbId, defaultUnitCode) {
    if (!boId) return;
    currentSelection.boId = boId;
    currentSelection.dbId = targetDbId;
    currentSelection.unitCode = defaultUnitCode;
    currentSelection.timelineIndex = 0;
    initAppNavigation();
};

// SỬA: Truyền thêm tham số unitCode để cập nhật đồng bộ, tránh click CSDL bị nhảy sai khối đơn vị
window.selectDatabase = function (unitCode, boId, dbId) {
    currentSelection.unitCode = unitCode;
    currentSelection.boId = boId;
    currentSelection.dbId = dbId;
    currentSelection.timelineIndex = 0;
    initAppNavigation();
};

window.selectTimeline = function (index) {
    currentSelection.timelineIndex = index;
    renderTimeline();
};

// ==========================================
// 6. SỰ KIỆN HOVER TOOLTIP TIMELINE & MODAL
// ==========================================
function setupTimelineTooltipEvents() {
    const nodes = document.querySelectorAll(".timeline-node");
    const popup = document.getElementById("timeline-popup");
    const popupDate = document.getElementById("popup-date");
    const popupTitle = document.getElementById("popup-title");

    if (!popup) return;

    nodes.forEach((node) => {
        node.addEventListener("mouseenter", () => {
            const date = node.getAttribute("data-date");
            const title = node.getAttribute("data-title");

            if (popupDate) popupDate.textContent = date;
            if (popupTitle) popupTitle.textContent = title;

            const rect = node.getBoundingClientRect();
            popup.style.top = `${rect.top + rect.height / 2 - popup.offsetHeight / 2}px`;
            popup.style.left = `${rect.right + 12}px`;

            popup.classList.remove("opacity-0", "invisible", "translate-x-2");
            popup.classList.add("opacity-100", "translate-x-0");
        });

        node.addEventListener("mouseleave", () => {
            popup.classList.remove("opacity-100", "translate-x-0");
            popup.classList.add("opacity-0", "invisible", "translate-x-2");
        });
    });
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    initAppNavigation();
});

window.openCriteriaModal = function (buttonElement) {
    const parentCard = buttonElement.closest('.group');
    if (!parentCard) return;

    const modalCriteriaName = document.getElementById("modalCriteriaName");
    const modalCriteriaStats = document.getElementById("modalCriteriaStats");
    const modalCriteriaDesc = document.getElementById("modalCriteriaDesc");

    if (modalCriteriaName) modalCriteriaName.textContent = parentCard.getAttribute("data-criteria");
    if (modalCriteriaStats) modalCriteriaStats.textContent = parentCard.getAttribute("data-stats");
    if (modalCriteriaDesc) modalCriteriaDesc.textContent = parentCard.getAttribute("data-desc");

    const modal = document.getElementById("criteriaModal");
    const content = document.getElementById("criteriaContent");

    if (modal && content) {
        modal.classList.remove("hidden");
        setTimeout(() => {
            content.classList.remove("scale-95", "opacity-0");
            content.classList.add("scale-100", "opacity-100");
        }, 10);
    }
};

window.closeCriteriaModal = function () {
    const modal = document.getElementById("criteriaModal");
    const content = document.getElementById("criteriaContent");

    if (modal && content) {
        content.classList.remove("scale-100", "opacity-100");
        content.classList.add("scale-95", "opacity-0");
        setTimeout(() => {
            modal.classList.add("hidden");
        }, 300);
    }
};


//2
// Thay đổi từ viết tắt tiếng Việt có dấu sang không dấu để tìm kiếm chính xác hơn (Tùy chọn)
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|ã|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|EFF/g, "E");
    str = str.replace(/Ì|Í|Ị|ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.trim().toLowerCase();
}

// Biến kiểm soát trạng thái sự kiện tìm kiếm tránh lặp lại
document.addEventListener("DOMContentLoaded", () => {
    initMinistrySearch();
    initUnitAndDbSearch();
});

// ==========================================
// CHỨC NĂNG 1: TÌM KIẾM BỘ NGÀNH
// ==========================================
function initMinistrySearch() {
    const searchInput = document.getElementById("search-ministry");
    const searchBtn = document.getElementById("btn-search-ministry");
    const ministryList = document.getElementById("ministry-list");

    if (!searchInput || !ministryList) return;

    function handleSearch() {
        const keyword = removeVietnameseTones(searchInput.value);
        // Lấy toàn bộ các thẻ liên kết <a> của bộ ngành, loại trừ phần tiêu đề text-xs font-bold
        const items = ministryList.querySelectorAll("a[onclick]");

        items.forEach(item => {
            const text = removeVietnameseTones(item.textContent);
            if (text.includes(keyword)) {
                item.classList.remove("hidden"); // Hiển thị nếu khớp
            } else {
                item.classList.add("hidden");    // Ẩn nếu không khớp
            }
        });
    }

    // Gắn sự kiện gõ phím trực tiếp (Real-time Filter)
    searchInput.addEventListener("input", handleSearch);

    // Gắn sự kiện click nút kính lúp cạnh ô input
    if (searchBtn) {
        searchBtn.addEventListener("click", handleSearch);
    }
}

// ==========================================
// CHỨC NĂNG 2: TÌM KIẾM ĐƠN VỊ CHỦ QUẢN & CSDL
// ==========================================
function initUnitAndDbSearch() {
    const searchInput = document.getElementById("search-unit-db");
    const searchSection = document.querySelector("section.w-80 .divide-y");

    if (!searchInput || !searchSection) return;

    searchInput.addEventListener("input", () => {
        const keyword = removeVietnameseTones(searchInput.value);
        const detailsBlocks = searchSection.querySelectorAll("details[data-unit-code]");

        // Nếu ô tìm kiếm trống, hiển thị lại toàn bộ và đóng/mở theo trạng thái mặc định ban đầu
        if (!keyword) {
            detailsBlocks.forEach(details => {
                details.classList.remove("hidden");
                // Đóng các khối lại, khối nào active ban đầu thì giữ nguyên tùy thuộc UI của bạn
                const dbs = details.querySelectorAll("a[onclick]");
                dbs.forEach(db => db.classList.remove("hidden"));
            });
            return;
        }

        // Tiến hành lọc logic tìm kiếm sâu
        detailsBlocks.forEach(details => {
            const summaryText = removeVietnameseTones(details.querySelector("summary").textContent);
            const dbs = details.querySelectorAll("a[onclick]");

            let hasVisibleDb = false;

            // Kiểm tra các CSDL con bên trong đơn vị
            dbs.forEach(db => {
                const dbText = removeVietnameseTones(db.textContent);
                if (dbText.includes(keyword)) {
                    db.classList.remove("hidden");
                    hasVisibleDb = true;
                } else {
                    db.classList.add("hidden");
                }
            });

            // Nếu tên Đơn vị khớp HOẶC có ít nhất 1 CSDL bên trong khớp từ khóa
            if (summaryText.includes(keyword) || hasVisibleDb) {
                details.classList.remove("hidden");
                details.setAttribute("open", ""); // Tự động bung rộng để xem kết quả

                // Nếu tên đơn vị khớp nhưng các CSDL con không khớp -> vẫn hiện CSDL con ra cho người dùng thấy
                if (summaryText.includes(keyword) && !hasVisibleDb) {
                    dbs.forEach(db => db.classList.remove("hidden"));
                }
            } else {
                details.classList.add("hidden");
                details.removeAttribute("open");
            }
        });
    });
}

// ==========================================
// HÀM ĐIỀU HƯỚNG TIMELINE (NEXT / PREVIOUS)
// ==========================================
window.navigateTimeline = function (direction) {
    const context = findDatabaseContext(currentSelection.boId, currentSelection.dbId);
    const currentDb = context.db;

    if (!currentDb || !currentDb.timeline || currentDb.timeline.length === 0) return;

    // Tính toán index mới dựa vào hướng đi (direction: -1 là lùi, 1 là tiến)
    let newIndex = currentSelection.timelineIndex + direction;

    // Giới hạn biên an toàn không cho vượt quá phạm vi mảng mốc thời gian
    if (newIndex >= 0 && newIndex < currentDb.timeline.length) {
        currentSelection.timelineIndex = newIndex;

        // Gọi lại hàm renderTimeline để cập nhật đồng bộ toàn bộ giao diện chấm điểm và node timeline
        renderTimeline();
    }
};