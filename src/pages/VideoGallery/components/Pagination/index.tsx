import React from "react";
import styled from "styled-components";

import { PaginationWrapper, PageButton, Ellipsis, TotalInfo } from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
}) => {
  const renderPages = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    pages.push(
      <PageButton
        key={1}
        active={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        1
      </PageButton>
    );

    if (startPage > 2) {
      pages.push(<Ellipsis key="start-ellipsis">...</Ellipsis>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          active={currentPage === i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageButton>
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(<Ellipsis key="end-ellipsis">...</Ellipsis>);
    }

    if (totalPages > 1) {
      pages.push(
        <PageButton
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          Total {totalPages}
        </PageButton>
      );
    }

    return pages;
  };

  return <PaginationWrapper>{renderPages()}</PaginationWrapper>;
};

export default PaginationComponent;
