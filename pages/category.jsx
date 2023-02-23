import Categories from "@/components/Categories";
import styles from "@/styles/page-category.module.scss"
function category() {
    return (
        <div className={styles.wrap}>
            <Categories></Categories>
        </div>
    );
}

export default category;