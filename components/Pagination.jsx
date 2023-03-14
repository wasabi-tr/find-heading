import Link from "next/link";
import styles from "@/styles/pagination.module.scss"

function Pagination(props) {
    const PER_PAGE = 100;

    const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

    return (
        <>
            {props.totalCount > PER_PAGE ?
                <ul className={styles.list}>
                    {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number, index) => (
                        <li key={index} className={styles.item}>
                            <Link href={number == 1 ? "/" : `/page/${number}`}>{number}</Link>
                        </li>
                    ))}

                </ul>
                :
                null
            }
        </>
    );
}

export default Pagination;