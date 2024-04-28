import React from "react";
import styles from "./SinglePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3782462/pexels-photo-3782462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Blog Title</h1>
      </div>
    </div>
  );
};

export default SinglePostPage;
