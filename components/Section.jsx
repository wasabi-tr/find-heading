import styles from "@/styles/section.module.scss"
function Section({children,width}) {
    return (
        <div className={`${styles.section} ${width? styles[width]:""}` }>
            {children}
        </div>
    );
}

export default Section;