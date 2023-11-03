'use client';
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image';
import Hero from 'public/home.jpg'
import Button from './components/Button/Button'

export default function Home() {
  return (
   <main>
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Turning your Idea into Reality. we bring together the teams from the global tech industry.</p>
        <Button url='/portfolio' text='See Our Works' />
      </div>
      <div className={styles.item}>
      <Image className={styles.img} width={500} height={400} src='https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
      </div>
     
    </div>  
   </main>
  )
}
