import styles from "@/styles/post.module.scss"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney,faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'
function Posts(props) {
  // console.log(props.posts)
  return (
    <ul className={styles.list}>
      {props.posts.map(({ title, slug, eyecatch,link }) =>
        <li key={slug} className={styles.item}>
          <a href={link} target="_blank" rel="noreferrer">
            <figure className={styles.image}>
              <Image
                src={eyecatch.url}
                alt={`「${title}」のサムネイル画像`}
                quality={75}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </figure>
            <div className="flex items-center text-xs mt-2 gap-2">
              <p>{title}</p>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{color:"var(--gray-50)" ,transform: "translateY(-1px)" }}
              />
            </div>
          </a>
        </li>
      )}
    </ul>
  );
}

export default Posts;
