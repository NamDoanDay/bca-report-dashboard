// ==========================================
// 1. FAKE DATA PHÂN CẤP THEO YÊU CẦU
// ==========================================
const databaseStateData = {
    "bo-cong-an": {
        name: "Bộ Công An",
        count: 3,
        units: {
            "c12": {
                code: "C12",
                name: "C12 - Trung tâm dữ liệu quốc gia",
                databases: {
                    "csdl-toi-pham": {
                        name: "Cơ sở dữ liệu tội phạm",
                        timeline: [
                            {
                                date: "01/01/2026",
                                displayDate: "01/01",
                                title: "Báo cáo tổng kết quý III - CSDL Tội phạm",
                                highlights: [
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "15.420.112 (85%)", icon: "fa-check", desc: "Dữ liệu tội phạm được chuẩn hóa tích cực, tỷ lệ làm sạch đạt chuẩn đề ra của giai đoạn đầu năm." },
                                    { criteria: "Xác thực dân cư", stats: "12.000.000 (72%)", icon: "fa-users", desc: "Xác thực danh tính đối tượng hình sự trực tiếp với hệ thống cơ sở dữ liệu quốc gia về dân cư." },
                                    { criteria: "Đồng bộ hạ tầng", stats: "Hoàn thành 100%", icon: "fa-chart-pie", desc: "Đã thiết lập đường truyền chuyên dụng bảo mật cao về máy chủ dự phòng quốc gia." }
                                ],
                                summary: "Hệ thống vận hành ổn định, dữ liệu nhập liệu cập nhật đúng tiến độ phục vụ công tác điều tra phá án trực tuyến."
                            },
                            {
                                date: "15/01/2026",
                                displayDate: "15/01",
                                title: "Kế hoạch mở rộng phân hệ CSDL tội phạm mạng",
                                highlights: [
                                    { criteria: "Pháp lý công nghệ", stats: "Đã phê duyệt", icon: "fa-book-journal-whills", desc: "Quyết định triển khai mở rộng thu thập dữ liệu hành vi vi phạm trên không gian mạng." },
                                    { criteria: "Nền tảng lõi", stats: "2 Phân hệ mới", icon: "fa-buffer", desc: "Tích hợp công nghệ AI phân tích hành vi và dự báo xu hướng tội phạm công nghệ cao." }
                                ],
                                summary: "Đang phối hợp với Cục An ninh mạng bổ sung các tiêu chuẩn kỹ thuật an toàn thông tin lớp core nâng cao."
                            }
                        ]
                    },
                    "csdl-dan-cu": {
                        name: "Cơ sở dữ liệu dân cư",
                        timeline: [
                            {
                                date: "20/02/2026",
                                displayDate: "20/02",
                                title: "Tổng kết chiến dịch làm sạch dữ liệu dân cư",
                                highlights: [
                                    { criteria: "Đúng - Đủ - Sạch - Sống", stats: "98.231.405 (99%)", icon: "fa-check", desc: "Dữ liệu thông tin công dân toàn quốc đảm bảo chính xác theo thời gian thực." },
                                    { criteria: "Xác thực định danh", stats: "78.000.000 tài khoản", icon: "fa-users", desc: "Kích hoạt thành công tài khoản định danh điện tử VNeID mức độ 2 cho công dân." }
                                ],
                                summary: "Là hạt nhân cốt lõi thúc đẩy chuyển đổi số quốc gia, sẵn sàng chia sẻ cho tất cả các bộ ngành khác liên thông."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-tai-chinh": {
        name: "Bộ Tài Chính",
        count: 2,
        units: {
            "tong-cuc-thue": {
                code: "TCT",
                name: "Tổng cục Thuế",
                databases: {
                    "csdl-hoa-don-dien-tu": {
                        name: "CSDL Hóa đơn điện tử",
                        timeline: [
                            {
                                date: "01/03/2026",
                                displayDate: "01/03",
                                title: "Báo cáo phân tích rủi ro hóa đơn điện tử",
                                highlights: [
                                    { criteria: "Chuẩn hóa cấu trúc", stats: "100% Doanh nghiệp", icon: "fa-check", desc: "Áp dụng cấu trúc định dạng dữ liệu XML mới nhất theo thông tư hướng dẫn hành chính." },
                                    { criteria: "Phát hiện gian lận", stats: "Phát hiện 1.200 ca", icon: "fa-chart-pie", desc: "Hệ thống tự động quét và đối chiếu chéo doanh thu bất thường dựa trên chuỗi cung ứng." }
                                ],
                                summary: "Quản lý dữ liệu hóa đơn tập trung hỗ trợ đắc lực cho công tác hoàn thuế và chống thất thu ngân sách."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-thong-tin-va-truyen-thong": {
        name: "Bộ Thông Tin và Truyền Thông",
        count: 4,
        units: {
            "cuc-chuyen-doi-so-quoc-gia": {
                code: "CĐSQG",
                name: "Cục Chuyển đổi số Quốc gia",
                databases: {
                    "nen-tang-lgsp": {
                        name: "Nền tảng tích hợp, chia sẻ dữ liệu quốc gia (NDXP)",
                        timeline: [
                            {
                                date: "10/03/2026",
                                displayDate: "10/03",
                                title: "Kiểm tra hiệu năng kết nối liên thông dữ liệu",
                                highlights: [
                                    { criteria: "Tốc độ xử lý", stats: "平均 45ms/request", icon: "fa-bolt", desc: "Hạ tầng kết nối giữa các Bộ, ngành, địa phương đạt băng thông tiêu chuẩn." },
                                    { criteria: "Số lượng giao dịch", stats: "2.5 triệu/ngày", icon: "fa-exchange-alt", desc: "Sản lượng giao dịch đồng bộ qua trục liên thông NDXP tăng trưởng ổn định." },
                                    { criteria: "An toàn thông tin", stats: "Cấp độ 4", icon: "fa-shield-halved", desc: "Hệ thống giám sát SOC hoạt động 24/7 bảo vệ luồng truyền tin quốc gia." }
                                ],
                                summary: "Đảm bảo huyết mạch truyền nhận dữ liệu thông suốt giữa các nền tảng chính phủ số."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-y-te": {
        name: "Bộ Y Tế",
        count: 3,
        units: {
            "cuc-quan-ly-kham-chua-benh": {
                code: "KCB",
                name: "Cục Quản lý Khám chữa bệnh",
                databases: {
                    "ho-so-suc-khoe-dien-tu": {
                        name: "Hồ sơ sức khỏe điện tử toàn dân",
                        timeline: [
                            {
                                date: "15/03/2026",
                                displayDate: "15/03",
                                title: "Chiến dịch liên thông dữ liệu Giấy chứng sinh/Báo tử",
                                highlights: [
                                    { criteria: "Tỷ lệ số hóa", stats: "92% Bệnh viện", icon: "fa-hospital", desc: "Hầu hết các cơ sở y tế từ tuyến huyện trở lên đã liên thông trực tiếp." },
                                    { criteria: "Tích hợp VNeID", stats: "65 triệu hồ sơ", icon: "fa-address-card", desc: "Dữ liệu khám chữa bệnh cơ bản được hiển thị mượt mà trên ứng dụng định danh." }
                                ],
                                summary: "Hỗ trợ cắt giảm tối đa thủ tục hành chính khi người dân đi khám chữa bệnh bảo hiểm y tế."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-giao-duc-va-dao-tao": {
        name: "Bộ Giáo Dục và Đào Tạo",
        count: 2,
        units: {
            "cuc-cong-nghe-thong-tin-gdtw": {
                code: "CNTT-GD",
                name: "Cục Công nghệ thông tin",
                databases: {
                    "csdl-van-bang-chung-chi": {
                        name: "Hệ thống quản lý văn bằng chứng chỉ quốc gia",
                        timeline: [
                            {
                                date: "22/03/2026",
                                displayDate: "22/03",
                                title: "Số hóa dữ liệu bằng tốt nghiệp THPT qua các thời kỳ",
                                highlights: [
                                    { criteria: "Dữ liệu lịch sử", stats: "Thu thập 15 triệu bằng", icon: "fa-database", desc: "Cập nhật và làm sạch dữ liệu văn bằng từ năm 2015 đến nay phục vụ tra cứu." },
                                    { criteria: "Chống gian lận", stats: "Xác thực 100%", icon: "fa-user-shield", desc: "Triển khai mã QR định danh duy nhất trên mỗi phôi bằng được cấp phát mới." }
                                ],
                                summary: "Cung cấp cổng dịch vụ công trực tuyến giúp các cơ quan rà soát, đối chiếu bằng cấp tức thời."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-ke-hoach-va-dau-tu": {
        name: "Bộ Kế Hoạch và Đầu Tư",
        count: 3,
        units: {
            "cuc-quan-ly-dang-ky-kinh-doanh": {
                code: "ĐKKD",
                name: "Cục Quản lý Đăng ký kinh doanh",
                databases: {
                    "csdl-quoc-gia-doanh-nghiep": {
                        name: "Cơ sở dữ liệu quốc gia về đăng ký doanh nghiệp",
                        timeline: [
                            {
                                date: "01/04/2026",
                                displayDate: "01/04",
                                title: "Chuẩn hóa mã số doanh nghiệp kết hợp mã số thuế",
                                highlights: [
                                    { criteria: "Đồng bộ định danh", stats: "1.2 triệu DN hoạt động", icon: "fa-id-card-clip", desc: "Đảm bảo nguyên tắc 1 mã số duy nhất cho cả quy trình cấp phép và quản lý thuế." },
                                    { criteria: "Thời gian xử lý", stats: "Rút ngắn còn 1.5 ngày", icon: "fa-clock", desc: "Tự động hóa phê duyệt hồ sơ đăng ký qua mạng đối với một số ngành nghề thông thường." }
                                ],
                                summary: "Cải thiện mạnh mẽ chỉ số môi trường kinh doanh và gia nhập thị trường cho doanh nghiệp."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-lao-dong-thuong-binh-va-xa-hoi": {
        name: "Bộ Lao Động - Thương Binh và Xã Hội",
        count: 2,
        units: {
            "cuc-bao-tro-xa-hoi": {
                code: "BTXH",
                name: "Cục Bảo trợ xã hội",
                databases: {
                    "csdl-an-sinh-xa-hoi": {
                        name: "Cơ sở dữ liệu an sinh xã hội toàn quốc",
                        timeline: [
                            {
                                date: "10/04/2026",
                                displayDate: "10/04",
                                title: "Chi trả chế độ an sinh không dùng tiền mặt",
                                highlights: [
                                    { criteria: "Tài khoản liên kết", stats: "85% Đối tượng", icon: "fa-credit-card", desc: "Đồng bộ số tài khoản ngân hàng/ví điện tử của người thuộc diện chính sách với số CCCD." },
                                    { criteria: "Chính xác chi trả", stats: "Không sai sót", icon: "fa-square-poll-vertical", desc: "Hệ thống tự động đối soát loại trừ trùng lặp hoặc người đã từ trần." }
                                ],
                                summary: "Đảm bảo tính minh bạch, kịp thời của ngân sách nhà nước hỗ trợ nhóm đối tượng yếu thế."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-tu-phap": {
        name: "Bộ Tư Pháp",
        count: 3,
        units: {
            "cuc-ho-tich-quoc-tich-chung-thuc": {
                code: "HTQTCT",
                name: "Cục Hộ tịch, quốc tịch, chứng thực",
                databases: {
                    "csdl-ho-tich-dien-tu": {
                        name: "Cơ sở dữ liệu hộ tịch điện tử toàn quốc",
                        timeline: [
                            {
                                date: "18/04/2026",
                                displayDate: "18/04",
                                title: "Số hóa sổ hộ tịch lịch sử",
                                highlights: [
                                    { criteria: "Tiến độ cuốn chiếu", stats: "Hoàn thành 78%", icon: "fa-file-lines", desc: "Chuyển đổi các sổ đăng ký khai sinh, kết hôn bằng giấy từ năm 2000 về trước vào hệ thống." },
                                    { criteria: "Liên thông khai sinh", stats: "100% Cấp xã", icon: "fa-network-wired", desc: "Đăng ký khai sinh trực tuyến liên thông cấp mã định danh cá nhân và thẻ BHYT cho trẻ em." }
                                ],
                                summary: "Giúp đơn giản hóa tối đa quy trình thủ tục tư pháp hộ tịch tại địa phương."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-tai-nguyen-va-moi-truong": {
        name: "Bộ Tài Nguyên và Môi Trường",
        count: 4,
        units: {
            "cuc-dang-ky-va-du-lieu-dat-dai": {
                code: "DKĐĐ",
                name: "Cục Đăng ký và Dữ liệu đất đai",
                databases: {
                    "csdl-dat-dai-quoc-gia": {
                        name: "Cơ sở dữ liệu đất đai đa mục tiêu",
                        timeline: [
                            {
                                date: "25/04/2026",
                                displayDate: "25/04",
                                title: "Thí điểm tích hợp dữ liệu không gian đất đai hình thể",
                                highlights: [
                                    { criteria: "Bản đồ số hóa", stats: "35 Tỉnh/Thành", icon: "fa-map-location-dot", desc: "Tích hợp bản đồ địa chính dạng vector GIS lên hệ thống quản lý tập trung." },
                                    { criteria: "Thông tin sở hữu", stats: "18 triệu thửa đất", icon: "fa-key", desc: "Đồng bộ hóa giấy chứng nhận quyền sử dụng đất với mã định danh chủ sở hữu." }
                                ],
                                summary: "Tiến tới công khai minh bạch thị trường bất động sản và hỗ trợ công tác quy hoạch vùng."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-giao-thong-van-tai": {
        name: "Bộ Giao Thông Vận Tải",
        count: 3,
        units: {
            "cuc-du-duong-bo-viet-nam": {
                code: "CĐBVN",
                name: "Cục Đường bộ Việt Nam",
                databases: {
                    "csdl-giay-phep-lai-xe": {
                        name: "Hệ thống quản lý Cơ sở dữ liệu Giấy phép lái xe",
                        timeline: [
                            {
                                date: "05/05/2026",
                                displayDate: "05/05",
                                title: "Đồng bộ dữ liệu vi phạm giao thông thời gian thực",
                                highlights: [
                                    { criteria: "Chia sẻ dữ liệu", stats: "Kết nối Cục CSGT", icon: "fa-handshake", desc: "Cập nhật tức thời trạng thái tước, tạm giữ bằng lái từ hệ thống xử phạt của Cảnh sát giao thông." },
                                    { criteria: "Dịch vụ công", stats: "95% Đổi GPLX trực tuyến", icon: "fa-address-card", desc: "Người dân sử dụng kết quả khám sức khỏe điện tử để gia hạn bằng lái tại nhà." }
                                ],
                                summary: "Giảm thiểu hồ sơ giấy tờ và ngăn chặn hành vi sử dụng bằng lái giả hoặc gian lận cấp đổi."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-cong-thuong": {
        name: "Bộ Công Thương",
        count: 2,
        units: {
            "cuc-thuong-mai-dien-tu-va-kinh-te-so": {
                code: "TMĐTTS",
                name: "Cục Thương mại điện tử và Kinh tế số",
                databases: {
                    "csdl-san-thuong-mai-dien-tu": {
                        name: "Hệ thống quản lý hoạt động thương mại điện tử",
                        timeline: [
                            {
                                date: "15/05/2026",
                                displayDate: "15/05",
                                title: "Kết nối dữ liệu doanh nghiệp sàn TMĐT xuyên biên giới",
                                highlights: [
                                    { criteria: "Quản lý nhà bán hàng", stats: "Phân loại 450.000 shop", icon: "fa-store", desc: "Yêu cầu các sàn cung cấp mã định danh/MST của hộ kinh doanh để quản lý." },
                                    { criteria: "Bảo vệ người tiêu dùng", stats: "Xử lý 98% khiếu nại", icon: "fa-shield-heart", desc: "Ứng dụng cổng tiếp nhận tự động phản ánh hàng giả, hàng nhái từ người mua." }
                                ],
                                summary: "Xây dựng môi trường cạnh tranh lành mạnh trên không gian số."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-nong-nghiep-va-phat-trien-nong-thon": {
        name: "Bộ Nông Nghiệp và Phát Triển Nông Thôn",
        count: 2,
        units: {
            "cuc-chan-nuoi": {
                code: "CCN",
                name: "Cục Chăn nuôi",
                databases: {
                    "csdl-truy-xuat-nguon-goc": {
                        name: "Hệ thống CSDL truy xuất nguồn gốc nông sản, vật nuôi",
                        timeline: [
                            {
                                date: "22/05/2026",
                                displayDate: "22/05",
                                title: "Cấp mã số vùng trồng và cơ sở đóng gói xuất khẩu",
                                highlights: [
                                    { criteria: "Số hóa vùng trồng", stats: "12.500 Mã vùng", icon: "fa-seedling", desc: "Định vị tọa độ các trang trại phục vụ thị trường Châu Âu, Trung Quốc." },
                                    { criteria: "Chuỗi cung ứng", stats: "Theo dõi 100% lô hàng", icon: "fa-link", desc: "Áp dụng công nghệ Blockchain kiểm soát từ khâu trang trại đến cửa khẩu." }
                                ],
                                summary: "Nâng cao giá trị thương hiệu và đáp ứng các tiêu chuẩn kỹ thuật gắt gao quốc tế."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-van-hoa-the-thao-va-du-lich": {
        name: "Bộ Văn Hóa, Thể Thao và Du Lịch",
        count: 2,
        units: {
            "cuc-du-lich-quoc-gia-viet-nam": {
                code: "VNAT",
                name: "Cục Du lịch Quốc gia Việt Nam",
                databases: {
                    "csdl-co-so-luu-tru-du-lich": {
                        name: "Hệ thống cơ sở dữ liệu lưu trú và lữ hành toàn quốc",
                        timeline: [
                            {
                                date: "02/06/2026",
                                displayDate: "02/06",
                                title: "Liên thông khai báo lưu trú khách quốc tế",
                                highlights: [
                                    { criteria: "Tự động hóa", stats: "88% Khách sạn 3 sao+", icon: "fa-hotel", desc: "Dữ liệu check-in của khách nước ngoài tự động đồng bộ sang phân hệ quản lý xuất nhập cảnh." },
                                    { criteria: "Thống kê số lượng", stats: "Cập nhật theo ngày", icon: "fa-chart-line", desc: "Cung cấp dashboard chỉ số tăng trưởng lưu trú phục vụ điều hành vĩ mô." }
                                ],
                                summary: "Nâng cao trải nghiệm du lịch số và tăng cường an ninh lưu trú."
                            }
                        ]
                    }
                }
            }
        }
    },
    "bo-noi-vu": {
        name: "Bộ Nội Vụ",
        count: 2,
        units: {
            "cuc-van-thu-va-luu-tru-nha-nuoc": {
                code: "VTLTNN",
                name: "Cục Văn thư và Lưu trữ nhà nước",
                databases: {
                    "csdl-can-bo-cong-chuc": {
                        name: "Cơ sở dữ liệu quốc gia về Cán bộ, công chức, viên chức",
                        timeline: [
                            {
                                date: "15/06/2026",
                                displayDate: "15/06",
                                title: "Hoàn thành đồng bộ hồ sơ nhân sự cơ quan hành chính",
                                highlights: [
                                    { criteria: "Tỷ lệ chuẩn hóa", stats: "2.3 triệu hồ sơ (100%)", icon: "fa-user-tie", desc: "Toàn bộ hồ sơ lý lịch điện tử được ký số và bảo mật thông tin tuyệt đối." },
                                    { criteria: "Liên thông nghiệp vụ", stats: "Tích hợp quản lý lương", icon: "fa-calculator", desc: "Kết nối trực tiếp dữ liệu nhân sự với phân hệ phê duyệt nâng lương tự động." }
                                ],
                                summary: "Cải cách căn bản phương thức quản trị nguồn nhân lực trong khu vực công."
                            }
                        ]
                    }
                }
            }
        }
    }
};

// Biến toàn cục theo dõi trạng thái đang chọn
let currentSelection = {
    boNganhId: "bo-cong-an",
    unitId: "c12",
    dbId: "csdl-toi-pham",
    timelineIndex: 0
};

// ==========================================
// 2. HÀM KHỞI TẠO GIAO DIỆN (SIDEBAR + TIMELINE)
// ==========================================
function initAppNavigation() {
    const sidebarNav = document.querySelector(".tab-1 nav");
    if (!sidebarNav) return;

    // 2.1. Vẽ danh sách Bộ Ngành ở trên cùng Sidebar
    let boNganhHtml = `
    <div class="flex items-center justify-between px-3 py-1 text-xs font-bold tracking-wider uppercase mb-1">
      Tên Bộ Ngành <i class="fa-solid fa-chevron-down"></i>
    </div>`;

    Object.keys(databaseStateData).forEach(key => {
        const bo = databaseStateData[key];
        const activeClass = currentSelection.boNganhId === key ? 'bg-white text-slate-900 font-medium shadow-sm' : 'text-slate-500 hover:bg-slate-100';
        boNganhHtml += `
      <a href="javascript:void(0)" onclick="selectBoNganh('${key}')" class="flex items-center justify-between px-3 py-2 rounded-lg transition ${activeClass}">
        <div class="flex items-center gap-3"><i class="fa-solid fa-building"></i> ${bo.name}</div>
        <span class="text-xs font-semibold bg-slate-100 px-2 py-0.5 rounded-full">${bo.count}</span>
      </a>`;
    });
    sidebarNav.innerHTML = boNganhHtml;

    // 2.2. Vẽ danh sách Đơn vị chủ quản & CSDL ở giữa màn hình (Section thứ 2)
    const unitSection = document.querySelector("section.w-80 .divide-y");
    if (!unitSection) return;

    const currentBo = databaseStateData[currentSelection.boNganhId];
    let unitHtml = `
    <div class="p-2">
      <div class="neu-inset rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1 mb-2 flex items-center gap-1">
        <i class="fa-solid fa-city"></i> <span>Đơn vị chủ quản / CSDL</span>
      </div>
      <div class="space-y-2 p-2">`;

    Object.keys(currentBo.units).forEach(uKey => {
        const unit = currentBo.units[uKey];
        const dbCount = Object.keys(unit.databases).length;
        const isUnitOpen = currentSelection.unitId === uKey ? "open" : "";

        unitHtml += `
      <details class="group bg-white border border-slate-100 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden" ${isUnitOpen}>
        <summary class="p-3 hover:bg-slate-50 cursor-pointer flex gap-3 items-center justify-between select-none outline-none">
          <div class="flex gap-3 items-center min-w-0">
            <span class="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-xs flex-shrink-0">${unit.code}</span>
            <div class="min-w-0">
              <h4 class="font-semibold text-slate-800 text-xs truncate">${unit.name}</h4>
              <p class="text-slate-400 text-[11px] mt-0.5">${dbCount} Cơ sở dữ liệu</p>
            </div>
          </div>
          <i class="fa-solid fa-chevron-down text-slate-400 transition-transform duration-200 group-open:rotate-180 text-xs"></i>
        </summary>
        <div class="bg-slate-50/50 border-t border-slate-100 p-2 space-y-1">`;

        Object.keys(unit.databases).forEach((dbKey, idx) => {
            const db = unit.databases[dbKey];
            const isDbActive = currentSelection.dbId === dbKey ? "bg-white shadow-sm font-semibold text-teal-700" : "text-slate-600 hover:bg-white hover:shadow-sm";
            unitHtml += `
        <a href="javascript:void(0)" onclick="selectDatabase('${uKey}', '${dbKey}')" class="flex items-center gap-3 p-2.5 rounded-lg text-xs transition ${isDbActive}">
          <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-medium flex items-center justify-center text-[10px]">${idx + 1}</span>
          <span class="font-medium truncate flex-1 text-left">${db.name}</span>
          <i class="fa-solid fa-database text-[10px] text-slate-400"></i>
        </a>`;
        });

        unitHtml += `</div></details>`;
    });

    unitHtml += `</div></div>`;
    unitSection.innerHTML = unitHtml;

    // Cập nhật lại Timeline ứng với CSDL đang chọn
    renderTimeline();
}

// ==========================================
// 3. HÀM VẼ TIMELINE (TIẾN ĐỘ THEO NGÀY)
// ==========================================
function renderTimeline() {
    const timelineContainer = document.querySelector("section.w-10 .flex-col.gap-8");
    if (!timelineContainer) return;

    const currentBo = databaseStateData[currentSelection.boNganhId];
    const currentDb = currentBo.units[currentSelection.unitId].databases[currentSelection.dbId];

    if (!currentDb || !currentDb.timeline || currentDb.timeline.length === 0) {
        timelineContainer.innerHTML = '<span class="text-[9px] text-slate-400">Trống</span>';
        renderReportContent(null);
        return;
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

    // Thiết lập lại sự kiện hiển thị Tooltip Hover cho các nút Timeline mới sinh ra
    setupTimelineTooltipEvents();

    // Hiển thị nội dung chi tiết báo cáo của mốc thời gian đang chọn
    renderReportContent(currentDb.timeline[currentSelection.timelineIndex]);
}

// ==========================================
// 4. HÀM CẬP NHẬT NỘI DUNG BÁO CÁO CHI TIẾT (MAIN REPORT)
// ==========================================
function renderReportContent(reportData) {
    const reportHeader = document.querySelector("section.flex-1 .border-b .flex.items-center.gap-4");
    const cardsContainer = document.querySelector("section.flex-1 .grid");
    const assessmentBox = document.querySelector("section.flex-1 .bg-teal-50\\/50 p");

    if (!reportData) {
        if (reportHeader) reportHeader.innerHTML = `<h3>Không có dữ liệu báo cáo</h3>`;
        if (cardsContainer) cardsContainer.innerHTML = "";
        if (assessmentBox) assessmentBox.innerHTML = "Chưa có đánh giá chung cho giai đoạn này.";
        return;
    }

    // 4.1 Cập nhật thanh Tiêu đề Header
    if (reportHeader) {
        reportHeader.innerHTML = `
      <h3 class="font-bold text-slate-700">Ngày ${reportData.date}</h3>
      <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
      <h3 class="text-slate-500 font-medium">${reportData.title}</h3>
    `;
    }

    // 4.2 Cập nhật các Card tiêu chí chấm điểm
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

    // 4.3 Cập nhật ô đánh giá tổng kết chung
    if (assessmentBox) {
        assessmentBox.innerHTML = reportData.summary;
    }
}

// ==========================================
// 5. CÁC HÀM SỰ KIỆN CLICK (ACTIONS)
// ==========================================
window.selectBoNganh = function (boId) {
    currentSelection.boNganhId = boId;
    // Tự động gán phần tử đầu tiên của Bộ mới chọn để tránh lỗi crash dữ liệu
    const firstUnitKey = Object.keys(databaseStateData[boId].units)[0];
    currentSelection.unitId = firstUnitKey;
    currentSelection.dbId = Object.keys(databaseStateData[boId].units[firstUnitKey].databases)[0];
    currentSelection.timelineIndex = 0;

    initAppNavigation();
};

window.selectDatabase = function (unitId, dbId) {
    currentSelection.unitId = unitId;
    currentSelection.dbId = dbId;
    currentSelection.timelineIndex = 0;

    initAppNavigation();
};

window.selectTimeline = function (index) {
    currentSelection.timelineIndex = index;
    renderTimeline();
};

// Hàm cài đặt sự kiện Hover Tooltip cho Timeline (Giữ nguyên kiến trúc của bạn)
function setupTimelineTooltipEvents() {
    const nodes = document.querySelectorAll(".timeline-node");
    const popup = document.getElementById("timeline-popup");
    const popupDate = document.getElementById("popup-date");
    const popupTitle = document.getElementById("popup-title");

    nodes.forEach((node) => {
        node.addEventListener("mouseenter", (e) => {
            const rect = node.getBoundingClientRect();
            popupDate.textContent = node.getAttribute("data-date");
            popupTitle.textContent = node.getAttribute("data-title");

            popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight / 2 + rect.height / 2}px`;
            popup.style.left = `${rect.right + window.scrollX + 10}px`;
            popup.style.opacity = "1";
            popup.style.visibility = "visible";
            popup.style.transform = "translateX(0)";
        });

        node.addEventListener("mouseleave", () => {
            popup.style.opacity = "0";
            popup.style.visibility = "hidden";
            popup.style.transform = "translateX(8px)";
        });
    });
}

// Chạy khởi tạo ứng dụng khi tải trang xong
document.addEventListener("DOMContentLoaded", () => {
    initAppNavigation();
});

window.openCriteriaModal = function (buttonElement) {
    // Tìm ngược lên thẻ div cha chứa data-criteria, data-stats, data-desc
    const parentCard = buttonElement.closest('.group');
    if (!parentCard) return;

    document.getElementById("modalCriteriaName").textContent = parentCard.getAttribute("data-criteria");
    document.getElementById("modalCriteriaStats").textContent = parentCard.getAttribute("data-stats");
    document.getElementById("modalCriteriaDesc").textContent = parentCard.getAttribute("data-desc");

    const modal = document.getElementById("criteriaModal");
    const content = document.getElementById("criteriaContent");

    modal.classList.remove("hidden");
    setTimeout(() => {
        content.classList.remove("scale-95", "opacity-0");
        content.classList.add("scale-100", "opacity-100");
    }, 10);
};

window.closeCriteriaModal = function () {
    const modal = document.getElementById("criteriaModal");
    const content = document.getElementById("criteriaContent");

    content.classList.remove("scale-100", "opacity-100");
    content.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
};


//2