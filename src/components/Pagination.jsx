import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = ({
  links: { prev, next } = {},
  meta: { total, to, from, links = [] } = {},
  updateFetchUrl,
}) => {
  const handleNextBtn = () => {
    if (next) updateFetchUrl(next);
  };

  const handlePrevBtn = () => {
    if (prev) updateFetchUrl(prev);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4">
  {/* Help text */}
  <span className="text-sm text-stone-600">
    Showing <b>{from ?? 0}</b> to <b>{to ?? 0}</b> of <b>{total ?? 0}</b> Entries
  </span>

  {/* Buttons */}
  <div className="flex items-center gap-2 bg-[#A16207]/10 backdrop-blur-sm px-3 py-2 rounded-2xl shadow-sm">
    {links?.map((link, index) => (
      <button
        key={index}
        disabled={!link?.url}
        onClick={() => link?.url && updateFetchUrl(link.url)}
        className={`
          ${link?.active 
            ? "bg-[#A16207] text-white shadow-md scale-105" 
            : "bg-white text-[#A16207]"
          }
          flex items-center justify-center
          min-w-[38px] h-9 px-2
          text-sm font-medium
          rounded-xl
          border border-[#A16207]/20
          transition-all duration-200
          hover:bg-[#A16207]
          hover:text-white
          hover:shadow-md
          disabled:opacity-40 disabled:pointer-events-none
        `}
      >
        {link?.label === "&laquo; Previous" ? (
          <HiArrowLeft />
        ) : link?.label === "Next &raquo;" ? (
          <HiArrowRight />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: link?.label }} />
        )}
      </button>
    ))}
  </div>
</div>
  );
};

export default Pagination;