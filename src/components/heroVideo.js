import React from 'react'
import styles from './hero.module.css'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <video className={styles.heroVideo} loop playsInline muted autoPlay>
        <source src={data.videoFile.file.url} />
      </video>
    </div>
  )
}
