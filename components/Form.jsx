import { useRef } from "react";
import styles from "@/styles/form.module.scss"
function Form() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(nameRef.current.value)
        let data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value
        }
        await fetch("/api/nodemailerApi", {
            method: 'POST',
            headers: {
                Accept: "application/json,text/plain",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res => {
            if (res.status == 200) console.log("メール送信成功")
        }))

    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formItem}>
                    <label htmlFor="name" className={styles.formTitle}>お名前</label>
                    <input id="name" name="name" type="name" className={styles.formInput} placeholder="山田太郎" ref={nameRef} />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="email" className={styles.formTitle}>メールアドレス</label>
                    <input id="email" name="email" type="email" className={styles.formInput} placeholder="name@example.com" ref={emailRef} />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="message" className={styles.formTitle}>お問い合わせ内容</label>
                    <textarea id="message" name="message" className={styles.formTextarea} rows="3" ref={messageRef}></textarea>
                </div>
                <div className={styles.submitBtnWrap}>
                    <button type="submit" className={styles.submitBtn}>送信</button>
                </div>
            </form>
        </div>
    )
}

export default Form;