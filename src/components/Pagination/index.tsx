import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronLeft,
} from "react-icons/hi";
import * as S from "./styles";
import { NavigateProps, usePagination } from "./usePagination";

export const Pagination = (props: NavigateProps) => {
  const {
    total,
    onPageChange,
    maxItems,
    current,
    pages,
    first,
    shouldRenderBack,
    shouldRenderNext,
  } = usePagination(props);

  if (!total) return null;

  return (
    <S.Wrapper>
      <ul>
        {shouldRenderBack && (
          <>
            <S.PaginationArrow>
              <button
                onClick={() => onPageChange(1)}
                aria-label="Primeira página"
              >
                <HiOutlineChevronDoubleLeft />
              </button>
            </S.PaginationArrow>
            <S.PaginationArrow>
              <button
                onClick={() => onPageChange(current - 1)}
                aria-label="Página anterior"
              >
                <HiOutlineChevronLeft />
              </button>
            </S.PaginationArrow>
          </>
        )}

        {Array.from({ length: maxItems })
          .map((_, index) => index + first)
          .map((page, index) => {
            if (page > pages) return null;
            return (
              <S.PaginationItem
                isActive={page === current}
                key={pages + page + index}
              >
                <button onClick={() => onPageChange(page)}>{page}</button>
              </S.PaginationItem>
            );
          })}

        {shouldRenderNext && (
          <>
            <S.PaginationArrow>
              <button
                onClick={() => onPageChange(current + 1)}
                disabled={current === pages}
                aria-label="Próxima página"
              >
                <HiOutlineChevronRight />
              </button>
            </S.PaginationArrow>
            <S.PaginationArrow>
              <button
                onClick={() => onPageChange(pages)}
                aria-label="Ultima página"
              >
                <HiOutlineChevronDoubleRight />
              </button>
            </S.PaginationArrow>
          </>
        )}
      </ul>
    </S.Wrapper>
  );
};
