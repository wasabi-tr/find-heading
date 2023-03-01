import { getAllCategories } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/categories.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Categories(props) {
    const [categories, setCategories] = useState([]);//空の配列を初期値に持った変数を定義
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {//マウント時に処理をさせたいため、useEffectを使用
        const fetchCategoriesData = async () => {
            const categoriesByDesignType = await getAllCategories("design-type");
            const categoriesBySiteType = await getAllCategories("site-type");
            const allCategories = [
                { catName: "デザインの系統", catApiName: "design-type", catSlugs: categoriesByDesignType },
                { catName: "サイトの種類", catApiName: "site-type", catSlugs: categoriesBySiteType }
            ]
            setCategories(allCategories);
            setIsLoading();
        }
        fetchCategoriesData();//取得したカテゴリーをsetCategoriesに渡す処理
    }, [])


    return (
        <>
            {isLoading ?
                <div className="text-center" aria-label="ロード中">
                    <FontAwesomeIcon icon={faSpinner} spin /> {/* フォントアイコンを表示 */}
                    <span>ロード中...</span> {/* テキストを<span>で囲む */}
                </div> : null /* ローディングスピナーが表示されない場合はnullを返す */
            }
            <div className="flex flex-col gap-7 ">

                {categories.map(({ catApiName, catName, catSlugs }) =>
                    <div key={catApiName}>
                        <div className="border-b pb-3 mb-2">{catName}</div>
                        <ul className={styles.categoryList}>
                            {catSlugs.map(({ name, slug }) =>
                                <li key={slug}>
                                    <Link
                                        href={`/category/${catApiName}/${slug}`}
                                        onClick={props.closeMenu}
                                        className={"text-xs"}
                                    >{name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Categories;