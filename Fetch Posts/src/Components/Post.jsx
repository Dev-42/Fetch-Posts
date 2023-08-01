import React from "react";
import styles from './post.module.css'
const Post = ({props}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {/* Here show the title of the post  */}
        {props.title}
      </h1>
      <h3 className={styles.body}>
        {/* Here show the body of the post  */}
        {props.body}
      </h3>
    </div>
  );
};

export default Post;
