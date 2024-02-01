import React from 'react'
import styles from '../styles/Stories.module.css'

const Stories = () => {
  return (
    <div className={styles.Stories}>
    <h3 className={styles.h3T}>Top Articles</h3>
    <div className={styles.StoriesContainer}>
      <div className={styles.StoriesContain} >
          <div className={styles.itemsStories}>
              <img src="Rectangle-2.png" alt="" />
              <div className={styles.itemStory}>
                <div><img src="vector-2.png" alt="" /></div><span>428</span>
              </div>
              <div className={styles.itemstory} ><img src="status.png" alt="" /></div>
           </div>
           <div className={styles.itemsStories}>
              <img src="Rectangle-2.png" alt="" />
              <div className={styles.itemStory}>
                <div><img src="vector-2.png" alt="" /></div><span>428</span>
              </div>
              <div className={styles.itemstory} ><img src="status.png" alt="" /></div>
           </div>
           <div className={styles.itemsStories}>
              <img src="Rectangle-2.png" alt="" />
              <div className={styles.itemStory}>
                <div><img src="vector-2.png" alt="" /></div><span>428</span>
              </div>
              <div className={styles.itemstory} ><img src="status.png" alt="" /></div>
           </div>
           <div className={styles.itemsStories}>
              <img src="Rectangle-2.png" alt="" />
              <div className={styles.itemStory}>
                <div><img src="vector-2.png" alt="" /></div><span>428</span>
              </div>
              <div className={styles.itemstory} ><img src="status.png" alt="" /></div>
           </div>
      </div>
    </div>
  </div>
  )
}

export default Stories
