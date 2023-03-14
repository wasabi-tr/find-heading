import styles from "@/styles/post.module.scss"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'
import Pagination from "./Pagination";
function Posts(props) {
  return (
    <>
      <ul className={styles.list}>
        {props.posts.map(({ title, slug, eyecatch, link }) =>
          <li key={slug} className={styles.item}>
            <a href={link} target="_blank" rel="noreferrer" aria-label={`「${title}」のサイトに推移する`}>
              <figure className={styles.image}>
                <Image
                  key={eyecatch.url}
                  src={eyecatch.url}
                  alt={`「${title}」の見出しデザイン`}
                  quality={75}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </figure>
              <div className="flex text-xs mt-2 gap-2">
                <p>{title}</p>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "var(--gray-50)", margin: "3px 0 0 " }}
                />
              </div>
            </a>
          </li>
        )}
      </ul>
      <Pagination totalCount={props.totalCount}></Pagination>
    </>
  );
}

export default Posts;
