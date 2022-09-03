export type NavigateProps = {
  total: number;
  offset: number;
  onChange: (value: number) => void;
};

export const usePagination = ({ total, offset, onChange }: NavigateProps) => {
  const maxItems = 5;
  const limit = 10;
  const maxLeft = (maxItems - 1) / 2;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - maxLeft, 1);
  const shouldRenderBack = current > 1;
  const shouldRenderNext = current < pages;

  function onPageChange(page: number) {
    onChange((page - 1) * limit);
  }

  return {
    total,
    onPageChange,
    maxItems,
    current,
    pages,
    first,
    shouldRenderBack,
    shouldRenderNext,
  };
};
