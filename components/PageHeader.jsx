import styles from "@/styles/page-header.module.scss"
function PageHeader(props) {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>{props.pageTitle}</h2>
        </div>
    );
}

export default PageHeader;