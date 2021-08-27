import React from "react";
import { PaginationContainer } from "./Pagination.styled";

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <PaginationContainer>
      <button onClick={onLeftClick}>
        <div>⬅️</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>➡️</div>
      </button>
    </PaginationContainer>
  );
};
export default Pagination;
