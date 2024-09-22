import { StaticImageData } from "next/image";

// Define a type for the price object
export type PriceObject = {
  currency: string;
  price: number;
  priceNet: number;
  tax: number;
  taxName: string;
  taxRate: number;
};

// Define a type for the product object
export type ProductObject = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  recurring: boolean;
  type:
    | "PRODUCT_TYPE_VAULTED"
    | "PRODUCT_TYPE_RECURRING"
    | "PRODUCT_TYPE_ONETIME";
  chargeFrequency:
    | null
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "HALF_YEARLY"
    | "YEARLY";
  price: {
    currency: string;
    price: number;
    priceNet: number;
    tax: number;
    taxName: string;
    taxRate: number;
  };
};

// Define a type for the transaction object
export type TransactionObject = {
  id: string;
  email: string;
  url: string;
};

// Define a type for the buy method options
export type BuyOptions = {
  popup?: boolean;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  companyId?: string;
  zipCode?: string;
  email?: string;
  nonEditableEmail?: boolean;
  coupon?: string;
  payload?: string;
};

// Define a type for the buy method result
export type BuyResult = {
  type: "CLOSE" | "TRANSACTION";
  message: string;
  transaction: TransactionObject | null;
};

export interface TcMethods {
  getPrice: (productId: string) => Promise<PriceObject>;
  getProduct: (productId: string) => Promise<ProductObject>;
  buy: (productId: string, options?: BuyOptions) => Promise<BuyResult>;
}

export interface Entry {
  affiliateIncome: string;
  affiliateIncomeCurrency: string;
  amountTotal: string;
  country: string;
  createDate: string;
  currency: string;
  id: string;
  income: string;
  incomeCurrency: string;
  taxAmount: string;
  taxRate: number;
  type: string;
}

export interface Transaction {
  assignedEmail: string;
  chargeFrequency: string;
  country: string;
  createDate: string;
  currency: string;
  email: string;
  entries: Entry[];
  id: string;
  lastCharge: string;
  netPrice: number;
  netPriceInUSD: number;
  netPriceInUSDS: string;
  netPriceS: string;
  payload: string;
  productId: string;
  productName: string;
  tax: number;
  taxS: string;
  transactionStatus: string;
  transactionType: string;
}

export interface ProductType {
  name: string;
  prices: number[];
  imageUrl: StaticImageData;
  id: string | number;
}

export interface MyFormData {
  name: string;
  email: string;
  message: string;
}
