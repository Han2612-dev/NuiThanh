/**
 * DỮ LIỆU ĐỀ ÁN: BẢO TỒN VÀ PHỤC HỒI HỆ SINH THÁI RỪNG NGẬP MẶN TẠI XÃ NÚI THÀNH (2026 - 2030)
 * Trực quan hoá toàn bộ nội dung từ tài liệu đề án chính thức.
 */

const PROJECT_INFO = {
    title: "Góp phần bảo tồn và phục hồi hệ sinh thái rừng ngập mặn tại xã Núi Thành, giai đoạn 2026 - 2030",
    leadUnit: "Câu lạc bộ Đất Quảng Yêu Thương (Chủ nhiệm: Phạm Duy Khánh)",
    partners: [
        { name: "UBMTTQVN xã Núi Thành", role: "Phối hợp chỉ đạo, vận động và quản lý địa bàn" },
        { name: "Trường THPT Nguyễn Huệ, Núi Thành", role: "Vận hành vườn ươm học đường và tổ chức học tập trải nghiệm" },
        { name: "Công ty TNHH CCI Việt Nam cùng quý đối tác", role: "Đồng hành, tài trợ nguồn lực tài chính và vật tư" }
    ],
    general: {
        timeline: "4 năm (từ 2026 – 2030, chia theo từng giai đoạn)",
        location: "Các vùng rừng ngập mặn ven biển, vùng cây bị chết, cửa sông trọng yếu trên địa bàn xã Núi Thành (An Hòa, Cửa Lở).",
        budget: "Dự kiến trên 100.000.000 đ / năm. Nguồn kinh phí xã hội hóa kết hợp đóng góp ngày công cộng đồng."
    },
    targets: {
        scope: "Các khu vực rừng ngập mặn hiện hữu, khu vực bị suy thoái, bãi bồi có khả năng phục hồi rừng ngập mặn tại xã Núi Thành.",
        participants: "Nhà tài trợ, tình nguyện viên CLB Đất Quảng Yêu Thương, cán bộ, đoàn viên thanh niên xã, học sinh THCS, THPT và chuyên gia nông nghiệp/lâm nghiệp."
    }
};

const CLIMATE_WARNING = {
    title: "CẢNH BÁO KHÍ HẬU TOÀN CẦU (2025 - 2029)",
    expert: "Ts. Nguyễn Ngọc Huy",
    expertTitle: "Chuyên gia khí tượng và biến đổi khí hậu",
    tempRiseMin: 1.2,
    tempRiseMax: 1.9,
    probability15C: 86,
    probFiveYear15C: 70,
    arcticMultiplier: 3.5,
    impacts: [
        "Mực nước biển dâng làm thay đổi điều kiện thủy văn, rừng ngập mặn bị ngập sâu và lâu hơn trước.",
        "Thiếu hụt phù sa, gia tăng cường độ thiên tai cực đoan gây xói lở đường bờ nghiêm trọng.",
        "Nhiệt độ ấm lên nhanh tác động tiêu cực đến tiến trình sinh trưởng bình thường của hệ sinh thái.",
        "Không còn sự che chở của rễ cây ngập mặn, bãi bồi bùn cát ven sông sẽ bị bào mòn nhanh chóng dưới tác động của sóng."
    ]
};

const CORE_GOALS = [
    {
        title: "Trồng mới & phục hồi",
        value: "3.000 - 5.000",
        unit: "cây / năm (đước, bần)",
        desc: "Mỗi năm trồng mới trên diện tích bãi bồi do địa phương đề nghị, hỗ trợ 2 - 5 đợt thả con giống tái tạo nguồn lợi thủy sản."
    },
    {
        title: "Nhận thức cộng đồng",
        value: "70%",
        unit: "người dân vùng biển",
        desc: "Giúp người dân hiểu rõ giá trị sinh thái rừng ngập mặn, ngưng việc phá rừng tự phát làm ao nuôi tôm thâm canh."
    },
    {
        title: "Vườn ươm học đường",
        value: "1.000 - 5.000",
        unit: "cây giống / năm",
        desc: "Thành lập khu vườn thực nghiệm 'Ươm Mầm Hy Vọng' do học sinh vận hành nhằm chủ động nguồn giống thích nghi thổ nhưỡng."
    },
    {
        title: "Dọn dẹp rác thải nhựa",
        value: "12",
        unit: "đợt ra quân / năm",
        desc: "Tổ chức ít nhất mỗi tháng 1 lần thu gom rác nhựa, bảo vệ rễ cây ngập mặn khỏi ô nhiễm nguồn nước."
    },
    {
        title: "Giáo dục học sinh",
        value: "90%",
        unit: "đoàn viên, học sinh",
        desc: "Nâng cao hiểu biết thông qua các buổi học ngoại khóa thực hành và các diễn đàn chuyên đề học đường."
    },
    {
        title: "Quản lý cộng đồng",
        value: "01",
        unit: "tổ/đội bảo vệ rừng",
        desc: "Thành lập tổ cộng đồng tự quản bảo vệ rừng ngập mặn với quy chế hoạt động và khen thưởng rõ ràng."
    }
];

const IMPLEMENTATION_PHASES = [
    {
        phase: "Giai đoạn 1: Khảo sát, chuẩn bị và truyền thông",
        duration: "3 tháng",
        details: [
            "Khảo sát thực địa bãi bồi, đánh giá chất đất, độ mặn để lựa chọn loài cây trồng phù hợp.",
            "Xây dựng kế hoạch chi tiết, dự trù kinh phí và vận động tài trợ từ các doanh nghiệp, đối tác.",
            "Chuẩn bị dụng cụ lao động, liên hệ hạt giống và chuẩn bị khu tự ươm cây con.",
            "Tuyên truyền học đường, tổ chức nói chuyện chuyên đề và các cuộc thi vẽ tranh, viết bài bảo vệ môi trường."
        ]
    },
    {
        phase: "Giai đoạn 2: Triển khai các hoạt động thực địa",
        duration: "24 tháng",
        details: [
            "Tổ chức các đợt trồng cây quy mô lớn, xây dựng ngân hàng hạt giống và vận hành vườn ươm tại địa phương.",
            "Tổ chức dọn rác định kỳ ven sông, phân loại rác thải tại nguồn và tặng thùng rác cho các hộ dân ven đê.",
            "Phân công các đội tình nguyện nòng cốt chăm sóc cây con (làm cỏ, nhặt ốc hại, gia cố rào chắn sóng mềm).",
            "Xây dựng mô hình 'Vườn ươm cây thanh niên' trong trường học vùng dự án."
        ]
    },
    {
        phase: "Giai đoạn 3: Giám sát, đánh giá và duy trì",
        duration: "2 năm tiếp theo",
        details: [
            "Định kỳ kiểm tra tỷ lệ sống, tốc độ sinh trưởng của cây và mức độ xói lở bờ đê.",
            "Đánh giá sự thay đổi nhận thức cộng đồng, tổ chức hội nghị sơ kết, tổng kết rút kinh nghiệm.",
            "Duy trì các nhóm nòng cốt bảo vệ rừng, nhân rộng mô hình sang các địa bàn ngập mặn lân cận.",
            "Tuyên dương, khen thưởng kịp thời các tập thể, cá nhân có đóng góp xuất sắc."
        ]
    }
];

const PILLARS_DATA = [
    {
        id: 1,
        title: "Chính quyền (UBND xã)",
        role: "Quản lý & Pháp lý",
        icon: "fa-landmark",
        details: [
            "Quy hoạch, giao đất bãi bồi thực địa ven sông phù hợp để trồng rừng.",
            "Chỉ đạo Công an xã và Biên phòng Kỳ Hà hỗ trợ tuần tra, bảo vệ vùng trồng tránh phá hoại.",
            "Chủ trì chương trình dân vận: 'Thu gom rác nhựa - Đổi sinh kế xanh' (cấp cây giống lâm nghiệp/ăn quả, thùng rác, máy lọc nước...).",
            "Đồng giám sát dòng vốn và phê duyệt văn bản báo cáo kết quả định kỳ 6 tháng/lần."
        ]
    },
    {
        id: 2,
        title: "Nhà tài trợ & Đối tác",
        role: "Nguồn lực & Đồng hành",
        icon: "fa-handshake-angle",
        details: [
            "Cung cấp kinh phí mua cây giống đạt chuẩn, phân bón, vật tư rào chắn và chi phí vận hành.",
            "Cử đại diện đồng hành tham gia ngày hội trồng cây thực địa cùng người dân.",
            "Thực hiện kiểm tra đột xuất hoặc định kỳ, đóng góp ý kiến đảm bảo nguồn lực sử dụng đúng mục đích.",
            "Phát triển thương hiệu xanh gắn liền với phát triển bền vững."
        ]
    },
    {
        id: 3,
        title: "CLB Đất Quảng Yêu Thương",
        role: "Điều phối & Giám sát",
        icon: "fa-users-gear",
        details: [
            "Lập kế hoạch, kết nối nhà tài trợ với địa phương, khảo sát hiện trạng thổ nhưỡng.",
            "Hợp tác chuyên gia hướng dẫn kỹ thuật trồng đước/bần và cách rào bảo vệ cây con.",
            "Kiểm đếm định kỳ, lập báo cáo hình ảnh và số liệu gửi nhà tài trợ 6 tháng một lần.",
            "Xây dựng dự toán chi tiết các hạng mục và cấp giấy chứng nhận khen thưởng các cá nhân nòng cốt."
        ]
    },
    {
        id: 4,
        title: "Đoàn thể địa phương",
        role: "Lực lượng nòng cốt",
        icon: "fa-people-group",
        details: [
            "Huy động lực lượng đoàn viên, phụ nữ, nông dân tham gia ngày công trồng rừng và dọn dẹp vệ sinh.",
            "Vận động người dân ven cửa sông không xả rác bừa bãi và có ý thức bảo vệ tài nguyên chung.",
            "Nhận bàn giao tự quản chăm sóc cây: bắt ốc hại, nhổ cỏ dại, trồng dặm cây chết.",
            "Lắp đặt các rào chắn mềm bảo vệ cây tránh gia súc hoặc rác đè."
        ]
    },
    {
        id: 5,
        title: "Nhà trường (THPT Nguyễn Huệ)",
        role: "Giáo dục & Ươm mầm",
        icon: "fa-school",
        details: [
            "Tổ chức các lớp học ngoại khóa trải nghiệm thực tế ngay tại khu vực rừng ngập mặn.",
            "Bố trí đất lập khu vườn ươm 'Ươm mầm hy vọng' để học sinh tự gieo mầm hạt giống đặc hữu.",
            "Thành lập đội tình nguyện 'Chiến binh xanh' thu gom rác ven bờ sông học đường.",
            "Tích hợp giáo dục môi sinh vào các giờ sinh hoạt, tổ chức các cuộc thi vẽ tranh tuyên truyền."
        ]
    },
    {
        id: 6,
        title: "Đối tác Truyền thông",
        role: "Lan tỏa & Giám sát",
        icon: "fa-bullhorn",
        details: [
            "Báo Quảng Nam, Báo Đà Nẵng đưa tin định kỳ về tiến trình và hiệu quả sinh học của đề án.",
            "Đóng vai trò giám sát xã hội độc lập, đảm bảo tính công khai minh bạch trong sử dụng kinh phí.",
            "Xây dựng các diễn đàn, phóng sự ngắn truyền thông nâng cao nhận thức cộng đồng rộng rãi.",
            "Lan tỏa mô hình 'Đổi rác nhựa' ra các khu vực lân cận ở miền Trung."
        ]
    }
];

const EXPECTED_BENEFITS = {
    environment: [
        "Diện tích rừng ngập mặn ven bãi bồi Núi Thành được mở rộng và phục hồi bền vững.",
        "Giảm xói lở bờ sông, gia cố hệ thống đê bao tự nhiên phòng chống thiên tai bão lũ.",
        "Làm sạch cảnh quan cửa sông, cải thiện môi trường nước nhờ kiểm soát tốt rác thải nhựa.",
        "Khôi phục bãi đẻ, nơi trú ngụ tự nhiên cho các loài thủy hải sản bản địa."
    ],
    social: [
        "Nâng cao nhận thức sâu rộng cho thế hệ trẻ và người dân về tài nguyên rừng ngập mặn.",
        "Gắn kết tình đoàn kết giữa chính quyền địa phương, trường học, doanh nghiệp và các đoàn thể.",
        "Mở ra cơ hội phát triển mô hình du lịch sinh thái cộng đồng dưới tán rừng đước trong tương lai.",
        "Tạo sinh kế bền vững nhờ khai thác nguồn lợi thủy sản tự nhiên (tôm, cua, cá) dưới tán rừng sinh trưởng ổn định."
    ]
};

const FINANCIAL_BUDGET = {
    sources: [
        "Vận động tài trợ từ các doanh nghiệp (Công ty TNHH CCI Việt Nam & đối tác).",
        "Nguồn quỹ hoạt động của CLB Đất Quảng Yêu Thương.",
        "Hỗ trợ, đối ứng từ ngân sách địa phương và chính quyền các cấp (nếu có).",
        "Đóng góp ngày công lao động, vật tư hỗ trợ từ nhân dân và tình nguyện viên."
    ],
    expenses: [
        "Chi phí mua hạt giống, cây giống đạt chuẩn xuất xứ.",
        "Chi phí mua công cụ lao động, rào bảo vệ (ủng, găng tay, lưới chắn sóng mềm...).",
        "Chi phí truyền thông học đường (in ấn tài liệu học tập, băng rôn, tổ chức cuộc thi vẽ tranh...).",
        "Chi phí nước uống, hỗ trợ hậu cần cho tình nguyện viên thực địa."
    ]
};

const LEGAL_BASIS = {
    central: [
        "Luật Lâm nghiệp (Luật số 16/2017/QH14) thông qua ngày 15/11/2017.",
        "Nghị định số 156/2018/NĐ-CP của Chính phủ Quy định chi tiết thi hành một số điều của Luật Lâm nghiệp.",
        "Nghị định số 119/2016/NĐ-CP của Chính phủ về một số chính sách quản lý, bảo vệ và phát triển bền vững rừng ven biển.",
        "Quyết định số 120/QĐ-TTg của Thủ tướng Chính phủ về phê duyệt Đề án bảo vệ và phát triển rừng ven biển ứng phó với biến đổi khí hậu.",
        "Quyết định số 72/QĐ-TTg ngày 17/01/2024 của Thủ tướng Chính phủ Phê duyệt quy hoạch tỉnh Quảng Nam thời kỳ 2021-2030, tầm nhìn đến năm 2050.",
        "Thông tư số 16/2023/TT-BNNPTNT ngày 15/12/2023 sửa đổi, bổ sung quy định về điều tra, kiểm kê và theo dõi rừng."
    ],
    local: [
        "Quyết định số 120/QĐ-UBND của UBND tỉnh Quảng Nam về phê duyệt quy hoạch bảo vệ và phát triển rừng.",
        "Quyết định số 226/QĐ-UBND ngày 05/02/2025 của UBND tỉnh Quảng Nam phê duyệt số liệu hiện trạng rừng năm 2024.",
        "Quyết định số 1790/QĐ-UBND ngày 28/02/2024 của UBND huyện Núi Thành về giao nhiệm vụ chủ trì các dự án đầu tư.",
        "Thông báo số 47/TB-SNN&PTNT ngày 11/4/2024 của Sở NN&PTNT Quảng Nam về giải pháp phục hồi rừng ngập mặn huyện Núi Thành."
    ]
};

const NEWS_LINKS = [
    {
        title: "Quảng Nam khôi phục các cánh rừng ngập mặn",
        source: "Báo Bảo vệ rừng và môi trường (16/04/2025)",
        url: "https://baovemoitruong.org.vn/quang-nam-khoi-phuc-cac-canh-rung-ngap-man/"
    },
    {
        title: "Rừng chết",
        source: "Báo Quảng Nam (10/07/2021)",
        url: "https://baoquangnam.vn/rung-chet-3067775.html"
    },
    {
        title: "Quảng Nam: Nhiều diện tích rừng ngập mặn ở Tam Giang bị chết chưa rõ nguyên nhân",
        source: "Báo Dân tộc và Phát triển (08/04/2024)",
        url: "https://baodantoc.vn/quang-nam-nhieu-dien-tich-rung-ngap-man-o-tam-giang-bi-chet-chua-ro-nguyen-nhan-1712418208543.htm"
    },
    {
        title: "Rừng ngập mặn ven biển Quảng Nam chết dần chưa rõ nguyên nhân",
        source: "Báo Tuổi Trẻ (11/03/2024)",
        url: "https://tuoitre.vn/rung-ngap-man-ven-bien-quang-nam-chet-dan-chua-ro-nguyen-nhan-2024031112404522.htm"
    },
    {
        title: "Rừng ngập mặn Tam Giang chờ tái sinh",
        source: "Báo Quảng Nam (01/03/2024)",
        url: "https://baoquangnam.vn/rung-ngap-man-tam-giang-cho-tai-sinh-3130511.html"
    }
];

const PROJECT_RECOMMENDATIONS = [
    "Đề nghị UBND xã Núi Thành hỗ trợ tối đa về mặt pháp lý, tích cực chỉ đạo các ban ngành phối hợp để dự án được thuận lợi.",
    "Kêu gọi sự chung tay, ủng hộ tích cực của các doanh nghiệp, nhà hảo tâm, cùng ngày công đóng góp từ toàn thể cộng đồng bản địa.",
    "Cần có sự bàn bạc, thống nhất cụ thể giữa các bên tham gia trước khi ban hành Kế hoạch chính thức.",
    "Việc khảo sát kỹ lưỡng ban đầu là vô cùng quan trọng để đảm bảo tính khả thi và hiệu quả lâu dài của dự án.",
    "Luôn cập nhật và điều chỉnh kế hoạch thực địa phù hợp nếu có những thay đổi bất thường của điều kiện thời tiết."
];
