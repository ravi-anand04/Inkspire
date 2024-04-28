import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard className={styles.post} />
      </div>
      <div className={styles.post}>
        <PostCard className={styles.post} />
      </div>
      <div className={styles.post}>
        <PostCard className={styles.post} />
      </div>
      <div className={styles.post}>
        <PostCard className={styles.post} />
      </div>
      <div className={styles.post}>
        <PostCard className={styles.post} />
      </div>
    </div>
  );
};

export default BlogPage;
