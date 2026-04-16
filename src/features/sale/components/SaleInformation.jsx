import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import toast from "react-hot-toast";
import { storeVoucher } from "../../../services/voucher";

const SaleInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useSaleProductStore();

  const onSubmit = async (data) => {
    setIsSending(true);

    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const net_total = total + tax;

    const currentVoucher = { ...data, records, total, tax, net_total };

    const res = await storeVoucher(currentVoucher);

    const json = await res.json();

    // console.log(json)

    if (res.status === 201) {
      toast.success("Voucher created successfully");

      resetRecord();

      reset();

      setIsSending(false);

      if (data.redirect_to_detail) {
        navigate(`/dashboard/voucher-detail/${json?.data?.id}`);
      }
    } else {
      toast.error(json.message);
    }
  };

  // Utility function to generate a unique invoice number
  function generateInvoiceNumber() {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }

  return (
    <form
  onSubmit={handleSubmit(onSubmit)}
  className="flex flex-col h-full"
  id="infoForm"
>
  <div className="grid grid-cols-1 gap-5 mb-10">

    {/* Voucher ID */}
    <div>
      <label
        className={`block mb-2 text-sm font-medium ${
          errors.voucher_id ? "text-red-500" : "text-[#A16207]"
        }`}
      >
        Voucher ID
      </label>

      <input
        type="text"
        defaultValue={generateInvoiceNumber()}
        {...register("voucher_id", { required: true })}
        className={`bg-gray-50 border ${
          errors.voucher_id
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-[#A16207]/30 focus:ring-[#A16207] focus:border-[#A16207]"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
      />

      {errors.voucher_id && (
        <p className="text-red-500 text-sm mt-1">
          Voucher ID is required
        </p>
      )}
    </div>

    {/* Customer Name */}
    <div>
      <label
        className={`block mb-2 text-sm font-medium ${
          errors.customer_name ? "text-red-500" : "text-[#A16207]"
        }`}
      >
        Customer Name
      </label>

      <input
        type="text"
        {...register("customer_name", { required: true })}
        className={`bg-gray-50 border ${
          errors.customer_name
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-[#A16207]/30 focus:ring-[#A16207] focus:border-[#A16207]"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
      />

      {errors.customer_name && (
        <p className="text-red-500 text-sm mt-1">
          Customer Name is required
        </p>
      )}
    </div>

    {/* Customer Email */}
    <div>
      <label
        className={`block mb-2 text-sm font-medium ${
          errors.customer_email ? "text-red-500" : "text-[#A16207]"
        }`}
      >
        Customer Email
      </label>

      <input
        type="text"
        {...register("customer_email", { required: true })}
        className={`bg-gray-50 border ${
          errors.customer_email
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-[#A16207]/30 focus:ring-[#A16207] focus:border-[#A16207]"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
      />

      {errors.customer_email && (
        <p className="text-red-500 text-sm mt-1">
          Customer Email is required
        </p>
      )}
    </div>

    {/* Sale Date */}
    <div>
      <label
        className={`block mb-2 text-sm font-medium ${
          errors.sale_date ? "text-red-500" : "text-[#A16207]"
        }`}
      >
        Sale Date
      </label>

      <input
        type="date"
        defaultValue={new Date().toISOString().slice(0, 10)}
        {...register("sale_date", { required: true })}
        className={`bg-gray-50 border ${
          errors.sale_date
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-[#A16207]/30 focus:ring-[#A16207] focus:border-[#A16207]"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
      />

      {errors.sale_date && (
        <p className="text-red-500 text-sm mt-1">
          Sale Date is required
        </p>
      )}
    </div>
  </div>

  {/* Bottom Section */}
  <div className="flex flex-col justify-end items-end mt-auto gap-3">

    <div className="flex items-center">
      <label className="me-2 text-sm font-medium text-[#A16207]">
        Redirect to Voucher Detail
      </label>
      <input
        {...register("redirect_to_detail")}
        type="checkbox"
        className="w-4 h-4 border-[#A16207] rounded focus:ring-[#A16207] text-[#A16207]"
      />
    </div>

    <div className="flex items-center">
      <label className="me-2 text-sm font-medium text-[#A16207]">
        Make sure all field are correct
      </label>
      <input
        {...register("all_correct")}
        required
        type="checkbox"
        className="w-4 h-4 border-[#A16207] rounded focus:ring-[#A16207] text-[#A16207]"
      />
    </div>

    <button
      type="submit"
      className="text-white bg-[#A16207] inline-flex gap-3 hover:bg-[#854d0e] focus:ring-4 focus:outline-none focus:ring-[#A16207]/30 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-5 text-center transition"
    >
      <span>Confirm Voucher</span>
      {isSending && (
        <l-tailspin
          size="20"
          stroke="5"
          speed="0.9"
          color="white"
        ></l-tailspin>
      )}
    </button>

  </div>
</form>
  );
};

export default SaleInformation;