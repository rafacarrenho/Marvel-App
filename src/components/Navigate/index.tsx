import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronLeft,
} from "react-icons/hi";
import * as S from "./styles";

type NavigateProps = {
  total: number;
  offset: number;
  onChange: (value: number) => void;
};

export const Navigate = ({ total, offset, onChange }: NavigateProps) => {
  const maxItems = 5;
  const limit = 10;
  const maxLeft = (maxItems - 1) / 2;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - maxLeft, 1);

  function onPageChange(page: number) {
    onChange((page - 1) * limit);
  }

  if (!total) return null;

  return (
    <S.Wrapper>
      <ul>
        {current === 1 ? undefined : (
          <>
            <S.PaginationArrow>
              <button onClick={() => onPageChange(1)}>
                <HiOutlineChevronDoubleLeft />
              </button>
            </S.PaginationArrow>
            <S.PaginationArrow>
              <button onClick={() => onPageChange(current - 1)}>
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

        {current >= pages ? undefined : (
          <>
            <S.PaginationArrow>
              <button
                onClick={() => onPageChange(current + 1)}
                disabled={current === pages}
              >
                <HiOutlineChevronRight />
              </button>
            </S.PaginationArrow>
            <S.PaginationArrow>
              <button onClick={() => onPageChange(pages)}>
                <HiOutlineChevronDoubleRight />
              </button>
            </S.PaginationArrow>
          </>
        )}
      </ul>
    </S.Wrapper>
  );
};
