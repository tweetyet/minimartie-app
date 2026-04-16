import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { fetchProducts } from "../../../services/product";
import ButtonSpinner from "../../../components/ButtonSpinner";

const ProductSelectForm = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/dashboard/products?limit=100",
    fetchProducts
  );

  const { register, handleSubmit, reset } = useForm();

  const { addRecord, changeQuantity, records } = useSaleProductStore();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;

    const isExited = records.find(
      ({ product: { id } }) => currentProductId === id
    );

    if (isExited) {
      changeQuantity(isExited.product_id, data.quantity);
    } else {
      addRecord({
        product: currentProduct,
        product_id: currentProduct.id,
        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      });
    }

    reset();
  };

  if (isLoading) return <ButtonSpinner />;

  return (
    <div className="bg-white p-5 rounded-lg border border-[#A16207]/20 mb-5">
  <form action="#" id="recordForm" onSubmit={handleSubmit(onSubmit)}>
    <div className="grid grid-cols-5 gap-5">
      
      <div className="col-span-2">
        <label
          htmlFor="productSelect"
          className="block mb-2 text-sm font-medium  text-gray-900"
        >
          Select Your Product
        </label>

        <select
          id="productSelect"
          {...register("product")}
          className="bg-gray-50 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5"
          required
        >
          <option value="">Select a product</option>
          {!isLoading &&
            data.data.map((product) => (
              <option key={product.id} value={JSON.stringify(product)}>
                {product.product_name}
              </option>
            ))}
        </select>
      </div>

      <div className="col-span-2">
        <label
          htmlFor="quantityInput"
          className="block mb-2 text-sm font-medium  text-gray-900"
        >
          Quantity
        </label>

        <input
          type="number"
          id="quantityInput"
          {...register("quantity")}
          className="bg-gray-50 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5"
          required
        />
      </div>

      <div className="col-span-1">
        <button
          type="submit"
          className="text-gray-900 w-full h-full flex justify-center items-center hover:text-white border border-[#A16207] hover:bg-[#A16207] focus:ring-4 focus:outline-none focus:ring-[#A16207]/30 font-medium rounded-lg text-sm text-center me-2 mb-2 transition"
        >
          Add Product
        </button>
      </div>

    </div>
  </form>
</div>
   
  );
};

export default ProductSelectForm;