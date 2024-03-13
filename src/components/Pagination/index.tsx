import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronLeft,
} from "react-icons/hi";
import * as S from "./styles";
import { usePagination } from "./usePagination";
import { PaginationProps } from "./types";

export const Pagination = (props: PaginationProps) => {
  const { total, maxItems, currentPage, pages, first } = usePagination(props);

  if (!total) return null;

  return (
    <S.Wrapper>
      <S.PaginationItem
        to="/?page=1"
        aria-label="Primeira página"
        disabled={currentPage === 1}
      >
        <HiOutlineChevronDoubleLeft />
      </S.PaginationItem>
      <S.PaginationItem
        to={`/?page=${currentPage - 1}`}
        aria-label="Primeira página"
        disabled={currentPage === 1 || currentPage > pages}
      >
        <HiOutlineChevronLeft />
      </S.PaginationItem>

      {Array.from({ length: maxItems })
        .map((_, index) => index + first)
        .map((page, index) => {
          if (page > pages) return null;
          return (
            <S.PaginationItem
              isActive={page === currentPage}
              key={pages + page + index}
              to={`/?page=${page}`}
            >
              {page}
            </S.PaginationItem>
          );
        })}

      <S.PaginationItem
        aria-label="Próxima página"
        to={`/?page=${currentPage + 1}`}
        disabled={currentPage >= pages}
      >
        <HiOutlineChevronRight />
      </S.PaginationItem>
      <S.PaginationItem
        aria-label="Ultima página"
        to={`/?page=${pages}`}
        disabled={currentPage >= pages}
      >
        <HiOutlineChevronDoubleRight />
      </S.PaginationItem>
    </S.Wrapper>
  );
};
