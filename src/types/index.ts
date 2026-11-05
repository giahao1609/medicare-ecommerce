export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  brand: string;
  origin: string;
  price: number; // 0 for 'Liên hệ' / 'Quote on request'
  originalPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  shortDesc: string;
  specifications: { [key: string]: string };
  standards: string[]; // e.g. ["ISO 13485", "CE", "FDA", "Bộ Y Tế cấp phép"]
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  itemCount: number;
  iconName: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  organization: string; // Tên bệnh viện / phòng khám / cá nhân
  address: string;
  city: string;
  note?: string;
  paymentMethod: 'cod' | 'bank_transfer' | 'hospital_invoice';
}
