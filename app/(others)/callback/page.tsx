import TransactionCloudApi from "@/utils/TranscationCloudApi";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

interface Params {
  id: string;
  user: string;
  first: string;
  last: string;
  org: string;
}

interface CallbackPageProps {
  searchParams: Params;
}

const CallbackPage: React.FC<CallbackPageProps> = async ({ searchParams }) => {
  const tc = new TransactionCloudApi();

  const transaction = await tc.getTransactionById(searchParams.id);

  const checkTransaction = () => {
    if (
      transaction?.id == searchParams.id &&
      transaction.email == searchParams.user &&
      Object.keys(transaction).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (checkTransaction()) {
    console.log("transaction", transaction.id);
  } else {
    console.log("transaction not found");
  }

  return (
    <div className="min-h-[78vh] flex flex-col items-center justify-center bg-gradient-to-tr from-gray-800 via-zinc-950 to-slate-900">
      <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mt-10 flex items-center justify-center gap-4">
        Transaction{" "}
        <span>
          {checkTransaction() ? (
            <FaCheckCircle />
          ) : (
            <RxCross1 className="text-red-700" />
          )}
        </span>
      </h1>
      <div className="shadow-md rounded-lg p-6 md:p-8 w-full md:w-[80%]">
        {checkTransaction() ? (
          <div>
            <div className="border border-zinc-700 p-6 md:p-10 rounded-lg">
              <p className="mb-2 md:mb-4">
                <span className="font-bold text-gray-300">Transaction ID:</span>{" "}
                <span className="text-gray-500"> {transaction.id}</span>
              </p>
              <p className="mb-2 md:mb-4">
                <span className="font-bold text-gray-300">Product Name:</span>{" "}
                <span className="text-gray-500">
                  {" "}
                  {transaction.productName}
                </span>
              </p>
              <p className="mb-2 md:mb-4">
                <span className="font-bold text-gray-300">Status:</span>{" "}
                <span className="text-gray-500">
                  {transaction.transactionStatus ===
                  "ONE_TIME_PAYMENT_STATUS_PAID"
                    ? "Paid"
                    : "Not Paid"}
                </span>
              </p>

              {/* Additional Payment Information */}
              {transaction.transactionStatus ===
                "ONE_TIME_PAYMENT_STATUS_PAID" && (
                <div>
                  <p className="mb-2 md:mb-4">
                    <span className="font-bold text-gray-300">
                      Payment Amount:
                    </span>{" "}
                    <span className="text-gray-500">
                      {" "}
                      {transaction.currency} {transaction.netPrice}
                    </span>
                  </p>
                  {/* Add more payment details as needed */}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center flex-col gap-10">
              <p className="text-gray-400 text-2xl font-semibold mt-6 text-center">
                Thank you for your purchase!
              </p>

              <a
                href="/products"
                className="text-white border border-indigo-400 px-4 md:px-6 py-2 md:py-3 rounded-full text-lg md:text-xl font-semibold inline-block"
              >
                Explore Products
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-6">
            <p className="text-red-500 text-center text-lg md:text-3xl font-bold mb-4">
              Transaction failed to process
            </p>
            <a
              href="/products"
              className="text-white border border-indigo-400 px-4 md:px-6 py-2 md:py-3 rounded-full text-lg md:text-xl font-semibold inline-block"
            >
              Explore Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallbackPage;
