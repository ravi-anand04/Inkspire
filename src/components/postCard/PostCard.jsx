import Image from "next/image";
import React from "react";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3782462/pexels-photo-3782462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className={styles.img}
            alt="blog-image"
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          veritatis amet sed quas culpa quis perspiciatis. Cumque dolorum non in
          officia doloremque corporis. Mollitia quas officia nulla dolorum animi
          modi.
        </p>
        <Link className={styles.link} href="/blog/post/">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
