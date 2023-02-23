import Link from "next/link";
import styles from "@/styles/post.module.scss"
import Image from "next/image";

function Posts(props) {
  return (
    <ul className={styles.list}>
      {props.posts.map(({ title, slug, eyecatch }) =>
        <li key={slug} className={styles.item}>
          <figure className={styles.image}>
            <Image
              src={eyecatch.url}
              alt={`「${title}」のサムネイル画像`}
              quality={75}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </figure>
          <Link href={slug} className="text-xs">{title}</Link>
        </li>
      )}
    </ul>
  );
}

export default Posts;
