import Link from "next/link";
import styles from "@/styles/archive-post.module.css"

function ArchivePosts(props) {
  console.log(props.posts)

  return (
    <ul className={styles.container}>
      {props.posts.map(({ title, slug }) => 
        <li key={slug}>
          <Link href={slug}>{title}</Link>
        </li>
      )}
    </ul>
  );
}

export default ArchivePosts;
