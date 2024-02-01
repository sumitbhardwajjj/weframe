import React from "react";
import styles from "../styles/Slidebar.module.css"
const Slidebar = () => {
  return (
 <div  classNamh4 className={styles.h4U}>
    <div className={styles.slidebar}>
     <div className={styles.slide}>
      <div className={styles.items}>
        <img src="home-2.png" alt="" />
        <h4 className={styles.h4U}>Dashboard</h4>
      </div>
      <div className={styles.items}>
        <img src="home-2.png" alt="" />
        <h4 className={styles.h4U}>Content</h4>
      </div>
      <div className={styles.items}>
        <img src="profile-2user.png" alt="" />
        <h4 className={styles.h4U}>Team</h4>
      </div>
      <div className={styles.items}>
        <img src="user-square.png" alt="" />
        <h4 className={styles.h4U}>User</h4>
      </div>
      <div className={styles.items}>
        <img src="monitor.png" alt="" />
        <h4 className={styles.h4U}>App/Web</h4>
      </div>
      <div className={styles.items}>
        <img src="status.png" alt="" />
        <h4 className={styles.h4U}>Analytics</h4>
      </div>
      <div className={styles.items}>
        <img src="video-square.png" alt="" />
        <h4 className={styles.h4U}>Media</h4>
      </div>
      <div className={styles.items}>
        <img src="notification.png" alt="" />
        <h4 className={styles.h4U}>Notification</h4>
      </div>
      <div className={styles.items}>
        <img src="Setting.png" alt="" />
        <h4 className={styles.h4U}>Settings</h4>
      </div>
    </div>
   </div>
 </div>
  );
};

export default Slidebar;
