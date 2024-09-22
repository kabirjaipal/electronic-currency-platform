import { Transaction } from "@/types";
import axios, { AxiosRequestConfig } from "axios";

export default class TransactionCloudApi {
  private apiLogin: string;
  private apiPassword: string;
  private apiUrl: string;
  private authToken: string;

  constructor() {
    this.apiUrl = "https://sandbox-api.transaction.cloud";
    this.apiLogin = process.env.NEXT_PUBLIC_API_LOGIN || "";
    this.apiPassword = process.env.NEXT_PUBLIC_API_PASSWORD || "";
    this.authToken = this.generateAuthToken();
  }

  private generateAuthToken(): string {
    return `${this.apiLogin}:${this.apiPassword}`;
  }

  private async makeRequest(config: AxiosRequestConfig): Promise<any> {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error: any) {
      return {} as any;
    }
  }

  public async getTransactionsByEmail(customerEmail: string): Promise<any> {
    const url = `${this.apiUrl}/v1/transactions/${customerEmail}`;
    const config: AxiosRequestConfig = {
      method: "GET",
      url: url,
      headers: { Authorization: this.authToken },
    };
    return this.makeRequest(config);
  }

  public async getTransactionById(transactionId: string): Promise<Transaction> {
    const url = `${this.apiUrl}/v1/transaction/${transactionId}`;
    const config: AxiosRequestConfig = {
      method: "GET",
      url: url,
      headers: { Authorization: this.authToken },
    };
    return this.makeRequest(config);
  }

  // Example: Method to cancel subscription
  public async cancelSubscription(transactionId: string): Promise<any> {
    const url = `${this.apiUrl}/v1/cancel-subscription/${transactionId}`;
    const config: AxiosRequestConfig = {
      method: "POST",
      url: url,
      headers: { Authorization: this.authToken },
    };
    return this.makeRequest(config);
  }

  // Example: Method to refund payment
  public async refundPayment(transactionId: string): Promise<any> {
    const url = `${this.apiUrl}/v1/refund-transaction/${transactionId}`;
    const config: AxiosRequestConfig = {
      method: "POST",
      url: url,
      headers: { Authorization: this.authToken },
    };
    return this.makeRequest(config);
  }
}
