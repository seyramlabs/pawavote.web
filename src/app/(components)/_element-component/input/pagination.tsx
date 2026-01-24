'use client'
import React from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationTemplateProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // how many pages to show around current
};

export const CustomPagination: React.FC<PaginationTemplateProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const createPageRange = () => {
    const range: (number | 'ellipsis')[] = [];

    const showLeftEllipsis = currentPage - siblingCount > 2;
    const showRightEllipsis = currentPage + siblingCount < totalPages - 1;

    const startPage = showLeftEllipsis ? currentPage - siblingCount : 1;
    const endPage = showRightEllipsis ? currentPage + siblingCount : totalPages;

    if (startPage > 1) range.push(1);
    if (showLeftEllipsis) range.push('ellipsis');

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    if (showRightEllipsis) range.push('ellipsis');
    if (endPage < totalPages) range.push(totalPages);

    return range;
  };

  const pageRange = createPageRange();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={e => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {pageRange.map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={e => {
                  e.preventDefault();
                  onPageChange(page);
                }}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
