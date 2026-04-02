import  { useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
 
  HiPlus,

} from "react-icons/hi2";
import useSWR from "swr";

import { Link } from "react-router-dom";
import { debounce } from "lodash";
// import Pagination from "./Pagination";
import useCookie from "react-use-cookie";
import ProductLoader from "./ProductLoader";
import ProductRow from "./ProductRow";
import ProductEmptyState from "./ProductEmptyState";
import { fetchProducts } from "../../../services/product";
import Pagination from "../../../components/Pagination";

const ProductTable = () => {
  // const [search, setSearch] = useState("");

  const [token] = useCookie("my_token");

  const [fetchUrl, setFetchUrl] = useState(
    "https://invoice-app-api.mms-it.com/api/v2/dashboard/products"
  );



  const { data, isLoading, error } = useSWR(fetchUrl, fetchProducts);

  const handleSearchInput = debounce((e) => {
    console.log(e.target.value);
    // setSearch(e.target.value);
    setFetchUrl(`https://invoice-app-api.mms-it.com/api/v2/dashboard/products?q=${e.target.value}`);
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  // if (isLoading) return <p>Loading...</p>;

  // console.log(data);

  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#A16207] dark:focus:border-[#A16207]"
              placeholder="Search Product"
              // value={search}
              onChange={handleSearchInput}
            />
          </div>
        </div>
        <div className="">
          <Link
            to="/product/create"
            className="text-white flex justify-center items-center gap-3 bg-[#A16207] hover:bg-[#8B4513] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#8B4513] dark:focus:ring-[#8B4513]/50 "
          >
            Add new Product
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductLoader />
            ) : data?.data?.length === 0 ? (
              <ProductEmptyState />
            ) : (
              data?.data?.map((product) => (
                <ProductRow product={product} key={product.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && data &&(
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default ProductTable;