import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      <Image className={styles.img} src='https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill={true} alt=''/>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
      </div>
     </div>
     <div className={styles.textContainer}>
       <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>The electronic computer is one of the most important developments of the twentieth century. Like the
            industrial revolution of the nineteenth century, the computer and the information and communication
            technology built upon it have drastically changed business, culture, government and science, and have
            touched nearly every aspect of our lives</p>
       </div>
       <div className={styles.item}>
       <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>The electronic computer is one of the most important developments of the twentieth century. Like the
            industrial revolution of the nineteenth century, the computer and the information and communication
            technology built upon it have drastically changed business, culture, government and science, and have
            touched nearly every aspect of our lives</p>
       </div>

     </div>
     
     </div>
  )
}

export default About