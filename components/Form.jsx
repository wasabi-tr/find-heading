import { useRef, useState } from 'react'
import styles from '@/styles/form.module.scss'
function Form() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const [mailSend, setMailSend] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    }
    await fetch('/api/nodemailerApi', {
      method: 'POST',
      headers: {
        Accept: 'application/json,text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 200) {
        console.log('メール送信成功')
        setMailSend(true)
      }
    })
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label htmlFor="name" className={styles.formTitle}>
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="name"
            className={styles.formInput}
            placeholder="山田太郎"
            ref={nameRef}
            readOnly={mailSend && true}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email" className={styles.formTitle}>
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.formInput}
            placeholder="name@example.com"
            ref={emailRef}
            readOnly={mailSend && true}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="message" className={styles.formTitle}>
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.formTextarea}
            rows="3"
            placeholder="お問い合わせ内容をご記入ください"
            ref={messageRef}
            readOnly={mailSend && true}
          ></textarea>
        </div>
        <div className={styles.submitBtnWrap}>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={mailSend && true}
          >
            送信
          </button>
        </div>
      </form>
      {mailSend && <div className={styles.message}>メールを送信しました。</div>}
    </div>
  )
}

export default Form
