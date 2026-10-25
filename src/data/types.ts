export interface Product {
  id?: number;
  name: string;
  barcode: string;
  categoryId?: number;
  brand: string;
  purchasePrice: number;
  retailPrice: number;
  wholesalePrice: number;
  stock: number;
  minStock: number;
  notes: string;
  image?: string;
  createdAt: number;
}
export interface Category { id?: number; name: string }
export interface Customer { id?: number; name: string; phone: string; balance: number; createdAt: number }
export interface CustomerPayment { id?: number; customerId: number; amount: number; date: number; note: string }
export type PriceType = "retail" | "wholesale";
export interface SaleLine {
  productId: number;
  name: string;
  qty: number;
  unitPrice: number;
  purchasePrice: number;
  priceType: PriceType;
}
export type PaymentStatus = "paid" | "partial" | "credit";
export interface Sale {
  id?: number;
  date: number;
  items: SaleLine[];
  subtotal: number;
  discount: number;
  total: number;
  paid: number;
  remaining: number;
  status: PaymentStatus;
  customerId?: number;
  customerName?: string;
}
export interface Supplier { id?: number; name: string; phone: string }
export interface PurchaseLine { productId: number; name: string; qty: number; purchasePrice: number }
export interface Purchase { id?: number; date: number; supplierId?: number; supplierName?: string; items: PurchaseLine[]; total: number }
export type MovementType = "sale" | "purchase" | "adjust";
export interface Movement { id?: number; date: number; productId: number; productName: string; type: MovementType; qty: number; note: string }
export interface Expense { id?: number; date: number; category: string; amount: number; note: string }
export interface Settings {
  key: "main";
  shopName: string;
  logo?: string;
  phone: string;
  address: string;
  receiptFooter: string;
  paperWidth: 58 | 80;
  language: "ar" | "fr";
  lastBackup?: number;
}
