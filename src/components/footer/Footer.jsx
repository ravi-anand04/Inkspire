import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogBites</div>
      <div className={styles.text}>
        Copyright © 2024 BlogBites. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
