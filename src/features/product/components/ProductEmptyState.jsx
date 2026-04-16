import { Link } from "react-router-dom";

const ProductEmptyState = () => {
  return  (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
      <td colSpan={5} className="px-6 py-4 text-center">
        There is no Product
        <Link
          to="/dashboard/product-create"
          className="text-[#A16207] hover:text-[#8B4513]"
        >
          Add one
        </Link>
      </td>
    </tr>
  );
};


export default ProductEmptyState
