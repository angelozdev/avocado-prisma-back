import React from "react";
import styles from "./pagination.module.css";

interface Props {
  initialPage?: number;
  onPageChange: (page: number) => void;
  hasNextPage?: boolean;
}

function Pagination({
  initialPage = 1,
  onPageChange,
  hasNextPage = true,
}: Props) {
  const [page, setPage] = React.useState<number>(initialPage);

  const handlePreviousPage = () => {
    setPage((currentPage) => {
      const nextPage = currentPage - 1;
      if (nextPage < 1) return 1;
      onPageChange(nextPage);
      return nextPage;
    });
  };

  const handleNextPage = () => {
    if (!hasNextPage) return;

    setPage((currentPage) => {
      const nextPage = currentPage + 1;
      onPageChange(nextPage);
      return nextPage;
    });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <button
          disabled={page <= 1}
          onClick={handlePreviousPage}
          className={styles["button"]}
        >
          &lsaquo;
        </button>
        <span className={styles["page-display"]}>{page}</span>
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
