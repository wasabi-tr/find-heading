import Breadcrumb from "@/components/Breadcrumb";
import Categories from "@/components/Categories";
import Section from "@/components/Section";
import styles from "@/styles/page-category.module.scss"
function category() {
    const breadcrumbList = [
        {
            name: "ホーム",
            path: "/",
        },
        {
            name: "カテゴリー",
            path: "/category",
        },
    ]
    return (
        <div className={styles.wrap}>
            <Breadcrumb list={breadcrumbList}></Breadcrumb>
            <Section>
                <Categories></Categories>
            </Section>
        </div>
    );
}

export default category;