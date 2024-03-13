import { PaginationProps } from "./types";

export const usePagination = ({
  total,
  limit,
  currentPage,
}: PaginationProps) => {
  const maxItems = 5;
  const maxLeft = (maxItems - 1) / 2;
  const pages = Math.ceil(total / limit);
  const first = Math.max(currentPage - maxLeft, 1);

  return {
    total,
    maxItems,
    currentPage,
    pages,
    first,
  };
};
