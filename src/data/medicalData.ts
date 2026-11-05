import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'Tất Cả Danh Mục',
    slug: 'all',
    itemCount: 16,
    iconName: 'LayoutGrid',
    description: 'Trang thiết bị y tế và vật tư tiêu hao toàn diện'
  },
  {
    id: 'chan-doan-hinh-anh',
    name: 'Chẩn Đoán Hình Ảnh',
    slug: 'chan-doan-hinh-anh',
    itemCount: 4,
    iconName: 'Activity',
    description: 'Máy siêu âm 4D/5D, máy X-quang, máy soi cổ tử cung, MRI'
  },
  {
    id: 'xet-nghiem',
    name: 'Thiết Bị Xét Nghiệm',
    slug: 'xet-nghiem',
    itemCount: 4,
    iconName: 'FlaskConical',
    description: 'Máy huyết học, sinh hóa tự động, máy xét nghiệm nước tiểu'
  },
  {
    id: 'hoi-suc-phong-mo',
    name: 'Hồi Sức Cấp Cứu & P.Mổ',
    slug: 'hoi-suc-phong-mo',
    itemCount: 4,
    iconName: 'HeartPulse',
    description: 'Máy thở cao cấp, dao mổ điện, lồng ấp sơ sinh, giường cấp cứu'
  },
  {
    id: 'tham-do-chuc-nang',
    name: 'Thăm Dò Chức Năng',
    slug: 'tham-do-chuc-nang',
    itemCount: 2,
    iconName: 'Cpu',
    description: 'Máy điện não vi tính, máy điện tim 3/6/12 cần'
  },
  {
    id: 'vat-tu-tieu-hao',
    name: 'Hóa Chất & Vật Tư Tiêu Hao',
    slug: 'vat-tu-tieu-hao',
    itemCount: 2,
    iconName: 'Boxes',
    description: 'Kim luồn, bơm tiêm, găng tay phẫu thuật, phim khô y tế'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'med-01',
    name: 'Máy Soi Cổ Tử Cung Kỹ Thuật Số Focus Nine',
    category: 'chan-doan-hinh-anh',
    categoryName: 'Chẩn Đoán Hình Ảnh',
    brand: 'Focus Medical',
    origin: 'Hàn Quốc',
    price: 68500000,
    originalPrice: 75000000,
    image: '/img/0-1450675090_soi-co-tu-cung-focus-nine-focus-9-han-quoc.jpg',
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    shortDesc: 'Độ phóng đại 1-36x, cảm biến CCD màu độ phân giải cao, hỗ trợ nguồn sáng LED lạnh công suất cao.',
    specifications: {
      'Cảm biến hình ảnh': '1/4 inch SONY CCD',
      'Độ phóng đại': '1 - 36x Zoom quang học',
      'Khoảng cách làm việc': '200 - 400 mm',
      'Nguồn sáng': 'Đèn LED tròn không tỏa nhiệt (White LED)',
      'Phần mềm': 'Quản lý hồ sơ bệnh nhân đa ngữ, in báo cáo màu trực tiếp'
    },
    standards: ['ISO 13485', 'CE Medical', 'Bộ Y Tế cấp phép']
  },
  {
    id: 'med-02',
    name: 'Máy Xét Nghiệm Sinh Hóa Tự Động Chemray 420',
    category: 'xet-nghiem',
    categoryName: 'Thiết Bị Xét Nghiệm',
    brand: 'Rayto',
    origin: 'Rayto Life Sciences',
    price: 185000000,
    originalPrice: 198000000,
    image: '/img/Chemray-420-500x500.jpg',
    rating: 4.8,
    reviewsCount: 29,
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    shortDesc: 'Tốc độ 400 test/giờ (tối đa 560 test/giờ với ISE). Hệ thống rửa cuvette 8 bước tự động thông minh.',
    specifications: {
      'Tốc độ xét nghiệm': '400 xét nghiệm/giờ (không ISE)',
      'Vị trí mẫu': '80 vị trí mẫu, hỗ trợ chạy mẫu cấp cứu STAT',
      'Vị trí hóa chất': '80 vị trí có làm lạnh liên tục 24/7',
      'Hệ thống quang học': 'Lưới nhiễu xạ ngược, 12 bước sóng 340-800nm',
      'Mức tiêu hao nước': 'Dưới 15 Lít/giờ'
    },
    standards: ['ISO 13485', 'CE', 'FDA Listed']
  },
  {
    id: 'med-03',
    name: 'Máy Huyết Học Laser Tự Động Hemaray 86',
    category: 'xet-nghiem',
    categoryName: 'Thiết Bị Xét Nghiệm',
    brand: 'Rayto',
    origin: 'Rayto',
    price: 135000000,
    originalPrice: 145000000,
    image: '/img/Hemaray 86.jpg',
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    shortDesc: 'Phân tích 5 thành phần bạch cầu (5-Part Diff) với công nghệ Laser tán xạ đa góc và nhuộm hóa học.',
    specifications: {
      'Công nghệ': 'Laser Scatter + Flow Cytometry',
      'Thông số': '28 thông số + 3 biểu đồ phân tán 3D + 3 biểu đồ Histogram',
      'Công suất': '60 mẫu/giờ',
      'Thể tích hút mẫu': 'Chỉ 20μL máu toàn phần hoặc máu mao mạch',
      'Màn hình': 'Cảm ứng màu độ nét cao 10.4 inch'
    },
    standards: ['ISO 13485', 'CE Mark']
  },
  {
    id: 'med-04',
    name: 'Máy Điện Não 18 Kênh Vi Tính KT88-1018A',
    category: 'tham-do-chuc-nang',
    categoryName: 'Thăm Dò Chức Năng',
    brand: 'Contec',
    origin: 'Contec Medical Systems',
    price: 52000000,
    originalPrice: 58000000,
    image: '/img/0-Máy điện não 18 kênh KT88-1018A Contec.jpg',
    rating: 4.7,
    reviewsCount: 19,
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    shortDesc: 'Ghi điện não đồ (EEG) 18 đạo trình tiêu chuẩn, khuếch đại sinh học chính xác cao với chức năng lọc nhiễu tự động.',
    specifications: {
      'Số kênh': '16 kênh EEG + 2 kênh ECG/EOG',
      'Tần số lấy mẫu': '100 Hz, độ phân giải 16 bit',
      'Đèn kích thích': 'Kích thích quang nhấp nháy đa tần số điều khiển bằng máy tính',
      'Chức năng phân tích': 'Phân tích phổ năng lượng sóng Alpha, Beta, Theta, Delta và BEAM mapping 3D'
    },
    standards: ['ISO 13485', 'CE', 'Bộ Y Tế cấp phép']
  },
  {
    id: 'med-05',
    name: 'Máy Thở Hồi Sức Cao Cấp Mek-ics',
    category: 'hoi-suc-phong-mo',
    categoryName: 'Hồi Sức Cấp Cứu & P.Mổ',
    brand: 'Mek-ics',
    origin: 'Hàn Quốc',
    price: 320000000,
    originalPrice: 350000000,
    image: '/img/may-tho-mek.png',
    rating: 5.0,
    reviewsCount: 15,
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    shortDesc: 'Máy thở xâm lấn và không xâm lấn toàn diện cho bệnh nhân người lớn, trẻ em và trẻ sơ sinh (ICU/CCU).',
    specifications: {
      'Đối tượng sử dụng': 'Người lớn, trẻ em, trẻ sơ sinh',
      'Chế độ thở': 'VCV, PCV, SIMV-V, SIMV-P, CPAP/PSV, PRVC, Bi-Level, HFNC',
      'Màn hình': 'Màn hình cảm ứng 12.1 inch hiển thị đồng thời 3 đồ thị sóng và 2 vòng lặp (Loops)',
      'Pin dự phòng': 'Tích hợp pin Li-ion hoạt động liên tục 4 giờ'
    },
    standards: ['ISO 13485', 'CE Class IIb', 'FDA Approved']
  },
  {
    id: 'med-06',
    name: 'Tủ An Toàn Sinh Học Cấp 1 BYKG-I Biobase',
    category: 'xet-nghiem',
    categoryName: 'Thiết Bị Xét Nghiệm',
    brand: 'Biobase',
    origin: 'Biobase Group',
    price: 24500000,
    originalPrice: 28000000,
    image: '/img/BYKG-I.jpg',
    rating: 4.6,
    reviewsCount: 22,
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    shortDesc: 'Bảo vệ kỹ thuật viên và môi trường phòng xét nghiệm, trang bị màng lọc HEPA hiệu năng lọc 99.999% ở hạt 0.3μm.',
    specifications: {
      'Kiểu bảo vệ': 'Bảo vệ người vận hành và môi trường (Biosafety Level 1, 2)',
      'Màng lọc': 'HEPA Filter hiệu suất 99.999% tại 0.3 um',
      'Đèn tiệt trùng': 'Đèn UV phát xạ bước sóng 253.7nm',
      'Vật liệu': 'Thép không gỉ SUS 304 nguyên khối chịu hóa chất'
    },
    standards: ['ISO 9001', 'ISO 13485', 'CE']
  },
  {
    id: 'med-07',
    name: 'Lồng Ấp Trẻ Sơ Sinh Kỹ Thuật Số BT-500',
    category: 'hoi-suc-phong-mo',
    categoryName: 'Hồi Sức Cấp Cứu & P.Mổ',
    brand: 'Bistos',
    origin: 'Hàn Quốc',
    price: 95000000,
    originalPrice: 105000000,
    image: '/img/1451544990_83830.jpg',
    rating: 4.9,
    reviewsCount: 31,
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    shortDesc: 'Kiểm soát nhiệt độ không khí và nhiệt độ da chính xác, màn hình màu theo dõi liên tục thông số sinh tồn của bé.',
    specifications: {
      'Kiểm soát nhiệt': 'Chế độ Air mode và Skin mode với độ lệch dưới 0.2 độ C',
      'Độ ẩm': 'Hệ thống bù ẩm tự động bằng hơi nước siêu âm',
      'Màn hình': 'Màn hình LCD 7 inch hiển thị nhiệt độ da, nhiệt độ lồng và độ ẩm',
      'Hệ thống cảnh báo': 'Cảnh báo quá nhiệt, mất nguồn, cảm biến lỗi bằng âm thanh và đèn'
    },
    standards: ['ISO 13485', 'CE Medical', 'KFDA']
  },
  {
    id: 'med-08',
    name: 'Dao Mổ Điện Cao Tần Đa Năng DT-200S',
    category: 'hoi-suc-phong-mo',
    categoryName: 'Hồi Sức Cấp Cứu & P.Mổ',
    brand: 'Daiwha',
    origin: 'Hàn Quốc',
    price: 48000000,
    originalPrice: 53000000,
    image: '/img/daiwha_DT200s.jpg',
    rating: 4.8,
    reviewsCount: 26,
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    shortDesc: 'Công suất cắt 200W, hỗ trợ cả chế độ đơn cực (Monopolar) và lưỡng cực (Bipolar) an toàn trong phẫu thuật.',
    specifications: {
      'Công suất cắt thuần': '200W tại tải 300 Ohm',
      'Chế độ cắt phối hợp': 'Blend 1 (150W), Blend 2 (120W)',
      'Chế độ cầm máu': 'Coagulation tiếp xúc và phun xịt (Spray)',
      'Hệ thống an toàn': 'REM (Return Electrode Monitoring) ngắt dòng bảo vệ bệnh nhân'
    },
    standards: ['ISO 13485', 'CE', 'Bộ Y Tế cấp phép']
  },
  {
    id: 'med-09',
    name: 'Giường Cấp Cứu Bệnh Nhân 1 Tay Quay Đa Năng',
    category: 'hoi-suc-phong-mo',
    categoryName: 'Hồi Sức Cấp Cứu & P.Mổ',
    brand: 'Medicare K&P Standard',
    origin: 'Việt Nam / Nhập khẩu',
    price: 8500000,
    originalPrice: 9800000,
    image: '/img/0-giuongcapcuu1tayquay.jpg',
    rating: 4.7,
    reviewsCount: 65,
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    shortDesc: 'Khung thép sơn tĩnh điện chống ăn mòn y tế, nâng hạ đầu mượt mà, kèm thanh chắn hai bên và cọc truyền dịch inox.',
    specifications: {
      'Kích thước': '2100 x 960 x 500 mm',
      'Góc nâng lưng': '0 - 80 độ qua tay quay cơ học trục ren mạ crom',
      'Bánh xe': '4 bánh xe phi 125mm có khóa phanh độc lập',
      'Tải trọng an toàn': '250 kg'
    },
    standards: ['ISO 9001', 'ISO 13485', 'Bộ Y Tế']
  },
  {
    id: 'med-10',
    name: 'Phim X-Quang Khô Y Tế Kỹ Thuật Số Agfa Drystar',
    category: 'vat-tu-tieu-hao',
    categoryName: 'Hóa Chất & Vật Tư Tiêu Hao',
    brand: 'Agfa Healthcare',
    origin: 'Bỉ / Đức',
    price: 3850000,
    originalPrice: 4200000,
    image: '/img/0-Phim-kho-agfa.jpg',
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    shortDesc: 'Hộp 100 tờ kích thước 14x17 inch (hoặc 8x10), độ tương phản cao, công nghệ in nhiệt khô trực tiếp sắc nét.',
    specifications: {
      'Kích thước': '14x17 inch (35x43 cm)',
      'Quy cách': '100 tờ / hộp kín chống ẩm và ánh sáng',
      'Tương thích': 'Các dòng máy in phim khô Agfa Drystar 5302, 5503, AXYS',
      'Mật độ quang học tối đa': 'Dmax > 3.1'
    },
    standards: ['ISO 13485', 'CE', 'FDA']
  },
  {
    id: 'med-11',
    name: 'Găng Tay Phẫu Thuật Tiệt Trùng Y Tế Không Bột (Hộp 50 Đôi)',
    category: 'vat-tu-tieu-hao',
    categoryName: 'Hóa Chất & Vật Tư Tiêu Hao',
    brand: 'Top Glove Medical',
    origin: 'Malaysia',
    price: 360000,
    originalPrice: 420000,
    image: '/img/0-găng tay.jpg',
    rating: 4.8,
    reviewsCount: 154,
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    shortDesc: 'Cao su tự nhiên tinh chế, tiệt trùng bằng khí EO từng đôi, thiết kế giải phẫu vừa khít bàn tay phẫu thuật viên.',
    specifications: {
      'Chất liệu': 'Latex tự nhiên phủ Polymer giảm dị ứng',
      'Quy cách đóng gói': '50 đôi / hộp, mỗi đôi đóng gói riêng trong bao giấy tiệt trùng',
      'Kích cỡ': 'Size 6.5, 7.0, 7.5, 8.0',
      'Độ dài': 'Tối thiểu 280 mm bảo vệ cổ tay'
    },
    standards: ['ASTM D3577', 'EN 455', 'ISO 13485']
  },
  {
    id: 'med-12',
    name: 'Máy Đo Huyết Áp Bắp Tay Tự Động Cao Cấp Ampall',
    category: 'chan-doan-hinh-anh',
    categoryName: 'Chẩn Đoán Hình Ảnh',
    brand: 'Ampall',
    origin: 'Hàn Quốc',
    price: 18500000,
    originalPrice: 21000000,
    image: '/img/1.jpg',
    rating: 4.9,
    reviewsCount: 47,
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    shortDesc: 'Máy đo huyết áp chuyên nghiệp cho phòng khám và bệnh viện, tích hợp máy in nhiệt mini và giọng nói hướng dẫn.',
    specifications: {
      'Phương pháp đo': 'Dao động kế (Oscillometric method)',
      'Dải đo': 'Huyết áp 30 - 300 mmHg, Nhịp tim 30 - 240 bpm',
      'Máy in tích hợp': 'In nhiệt tốc độ cao hiển thị chỉ số SYS/DIA/PULSE và phân loại theo WHO',
      'Chức năng âm thanh': 'Giọng nói hướng dẫn tư thế đo và đọc kết quả tự động'
    },
    standards: ['ISO 13485', 'CE 0120', 'KFDA']
  }
];

export const TRUST_METRICS = [
  { value: '1.248+', label: 'Thiết Bị Y Tế Đạt Chuẩn', detail: 'Được chứng nhận ISO 13485 & CE' },
  { value: '4.129+', label: 'Vật Tư & Hóa Chất Sẵn Kho', detail: 'Hàng chính hãng, hạn dùng minh bạch' },
  { value: '63', label: 'Tỉnh Thành Phủ Sóng', detail: 'Vận chuyển chuyên dụng đạt chuẩn GSP' },
  { value: '24/7', label: 'Hỗ Trợ Kỹ Thuật Viện', detail: 'Kỹ sư chuyên khoa trực hotline' }
];

export const PARTNERS = [
  { name: 'Mindray', logo: '/img/0-Mindray_1.jpg' },
  { name: 'Sysmex', logo: '/img/0-Sysmex_1.jpg' },
  { name: 'Rayto', logo: '/img/RT 7600.jpg' },
  { name: 'Mek-ics', logo: '/img/Mek1.jpg' },
  { name: 'Contec', logo: '/img/0-Máy điện não 18 kênh KT88-1018A Contec.jpg' },
  { name: 'Bistos', logo: '/img/Bistos1.jpg' }
];
