import React from "react";
import styles from "./pagination.module.css";

interface Props {
  initialPage?: number;
  onPageChange: (page: number) => void;
  hasNextPage?: boolean;
  page?: number;
}

function Pagination({
  initialPage = 1,
  onPageChange,
  hasNextPage = true,
  page: currentPage,
}: Props) {
  const controlledPage = currentPage !== undefined;
  const [localPage, setLocalPage] = React.useState<number>(
    controlledPage ? currentPage : initialPage
  );

  const handlePreviousPage = () => {
    setLocalPage((currentPage) => {
      const nextPage = currentPage - 1;
      if (nextPage < 1) return 1;
      onPageChange(nextPage);
      return nextPage;
    });
  };

  const handleNextPage = () => {
    if (!hasNextPage) return;

    setLocalPage((currentPage) => {
      const nextPage = currentPage + 1;
      onPageChange(nextPage);
      return nextPage;
    });
  };

  React.useEffect(() => {
    if (controlledPage) {
      setLocalPage(currentPage);
    }
  }, [controlledPage, currentPage]);

  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <button
          disabled={localPage <= 1}
          onClick={handlePreviousPage}
          className={styles["button"]}
        >
          &lsaquo;
        </button>
        <span className={styles["page-display"]}>{localPage}</span>
        <button
          disabled={!hasNextPage}
          onClick={handleNextPage}
          className={styles["button"]}
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
