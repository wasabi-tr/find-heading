import Link from "next/link";
import styles from "@/styles/breadcrumb.module.scss"

function Breadcrumb(props) {
    console.log(props.list)
    return (
        <ul className={`${styles.breadcrumb} py-3`} >
            {props.list.map(({ name, path }) =>
                <li key={name} className={styles.breadcrumb__list}>
                    <Link
                        href={path}
                    >{name}</Link>
                </li>
            )}
        </ul>
    );
}

export default Breadcrumb;