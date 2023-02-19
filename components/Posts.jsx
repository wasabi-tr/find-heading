import Link from "next/link";
import styles from "@/styles/post.module.css"
import Image from "next/image";

function Posts(props) {
  // console.log(props)
  return (
    <ul className={styles.list}>
      {props.posts.map(({ title, slug, eyecatch }) =>
        <li key={slug} className={styles.item}>
          <figure className={styles.image}>
            <Image
              src={eyecatch.url}
              alt={`「${title}」のサムネイル画像`}
              width={eyecatch.width}
              height={eyecatch.height}
              quality={75}
            />
          </figure>
          <Link href={slug}>{title}</Link>
        </li>
      )}
    </ul>
  );
}

export default Posts;
