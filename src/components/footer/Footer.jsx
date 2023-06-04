import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 FPAT. All rights reserved.</div>
      <div className={styles.icons}>
        <Image src='/1.png' alt='Facebook'  className={styles.icon} height={15} width={15} />
        <Image src='/2.png' alt='Instagram' className={styles.icon}  height={15} width={15} />
        <Image src='/3.png' alt='Google' className={styles.icon}  height={15} width={15} />
        <Image src='/4.png' alt='Facebook' className={styles.icon}  height={15} width={15} />
      </div>
    </div>
  )
}

export default Footer