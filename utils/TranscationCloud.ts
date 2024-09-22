import { TcMethods } from "@/types";

export default class TransactionCloud {
  private tc: TcMethods;

  constructor() {
    this.tc = window.tc;
  }

  /**
   * Get product information using the provided product ID.
   * @param productId - The ID of the product.
   * @returns A Promise resolving to the product information.
   */
  async getProduct(productId: string) {
    if (!this.tc) {
      console.error("tc is not available");
      return null;
    }

    return await this.tc.getProduct(productId);
  }

  /**
   * Initiate a purchase for the specified product ID.
   * @param productId - The ID of the product to purchase.
   * @returns A Promise indicating the success of the purchase initiation.
   */
  async buy(productId: string) {
    if (!this.tc) {
      console.error("tc is not available");
      return null;
    }
    return await this.tc.buy(productId);
  }
}
