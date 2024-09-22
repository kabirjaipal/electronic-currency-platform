import {
  BayerLogo,
  BitcoinLogo,
  NetellerLogo,
  PaypalLogo,
  PerfectMoneyLogo,
  SkrillLogo,
  USDTLogo,
} from "@/assets";

export default [
  {
    name: "Paypal",
    options: [
      { price: 10, id: "TC-PR_1NkZj4m", title: "Paypal - $10" },
      { price: 20, id: "TC-PR_mzDr7yA", title: "Paypal - $20" },
      { price: 30, id: "TC-PR_R68qXl1", title: "Paypal - $30" },
    ],
    imageUrl: PaypalLogo,
  },
  {
    name: "Skrill",
    options: [
      { price: 15, id: "TC-PR_AJg9L41", title: "Skrill - $15" },
      { price: 25, id: "TC-PR_mKwNLJm", title: "Skrill - $25" },
      { price: 35, id: "TC-PR_A5VanP1", title: "Skrill - $35" },
    ],
    imageUrl: SkrillLogo,
  },
  {
    name: "Bitcoin",
    options: [
      { price: 50, id: "TC-PR_mgnLvY1", title: "Bitcoin - $50" },
      { price: 100, id: "TC-PR_AxEXB91", title: "Bitcoin - $100" },
      { price: 150, id: "TC-PR_1leKN4m", title: "Bitcoin - $150" },
    ],
    imageUrl: BitcoinLogo,
  },
  {
    name: "Bayer",
    options: [
      { price: 5, id: "TC-PR_RaBwzJA", title: "Bayer - $5" },
      { price: 10, id: "TC-PR_Aqp3Y2R", title: "Bayer - $10" },
      { price: 15, id: "TC-PR_1QkpVWR", title: "Bayer - $15" },
    ],
    imageUrl: BayerLogo,
  },
  {
    name: "Neteller",
    options: [
      { price: 18, id: "TC-PR_AwEnkam", title: "Neteller - $18" },
      { price: 28, id: "TC-PR_m0Djeam", title: "Neteller - $28" },
      { price: 38, id: "TC-PR_mOqXVKA", title: "Neteller - $38" },
    ],
    imageUrl: NetellerLogo,
  },
  {
    name: "USDT",
    options: [
      { price: 8, id: "TC-PR_1MkrVnR", title: "USDT - $8" },
      { price: 16, id: "TC-PR_AZBWE8A", title: "USDT - $16" },
      { price: 24, id: "TC-PR_AZBWE8A", title: "USDT - $24" },
    ],
    imageUrl: USDTLogo,
  },
  {
    name: "The Perfect Money",
    options: [
      {
        price: 12,
        id: "TC-PR_RLkyVbm",
        title: "The Perfect Money - $12",
      },
      {
        price: 22,
        id: "TC-PR_1E7oV2R",
        title: "The Perfect Money - $22",
      },
      {
        price: 32,
        id: "TC-PR_1D32VEA",
        title: "The Perfect Money - $32",
      },
    ],
    imageUrl: PerfectMoneyLogo,
  },
];
