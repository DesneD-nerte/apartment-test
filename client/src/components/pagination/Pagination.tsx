import React, { Dispatch, SetStateAction } from "react";
import "./Pagination.style.scss";

interface PaginationProps {
    pageLength: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: PaginationProps) => {
    const { pageLength, page, setPage } = props;

    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleForward = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <nav>
            <ul className="pagination">
                {page > 1 && (
                    <li className="page-item">
                        <button onClick={handleBack} className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                )}
                {Array.from(Array(pageLength).keys()).map((pageIndex) => {
                    return (
                        <li className="page-item" key={pageIndex}>
                            <button
                                className={`page-link ${page == pageIndex + 1 && `is-active`}`}
                                onClick={() => setPage(pageIndex + 1)}
                                key={pageIndex + 1}
                            >
                                {pageIndex + 1}
                            </button>
                        </li>
                    );
                })}
                {page <= pageLength - 1 && (
                    <li className="page-item">
                        <button onClick={handleForward} className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
