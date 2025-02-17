import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className='text-[#353B46] text-xs font-semibold'>Page {currentPage}</div>
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-xs font-semibold disabled:opacity-50 border-b bg-transparent"
      >
        Previous page
      </button>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-xs font-semibold disabled:opacity-50 border-b bg-transparent"
      >
        Next page
      </button>
    </div>
  );
};

export default Pagination;
