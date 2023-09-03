import Link from 'next/link'
import React from 'react'
import styles from '@/styles/button.module.scss'

export const Button = ({ href, children }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  )
}
