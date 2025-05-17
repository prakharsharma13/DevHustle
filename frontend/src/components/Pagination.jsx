import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-800 disabled:opacity-50"
        disabled={page === 1}
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
      >
        <ArrowLeft size={16} /> Previous
      </button>
      <div>Page {page} of 849</div>
      <button
        className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-800"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
