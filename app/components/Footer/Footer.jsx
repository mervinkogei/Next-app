'use client';
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
    console.log('Testing Console');
  return (    
    <div className={styles.container}>
        <div>@2023 Lamia. All Rights Reserved</div>
        <div className={styles.social}>
            <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt='Lamamia Dec' />
            <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt='Lamamia Dec' />
            <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt='Lamamia Dec' />
        </div>
    </div>
  )
}

export default Footer