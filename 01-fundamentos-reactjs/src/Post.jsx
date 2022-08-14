import React from "react";
import styles from "./Post.module.css";
import Comment from "./components/Comment";

function Post(props) {
  let comments = [
    {
      author: "as vezes vc me pergunta",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
    {
      author: "eu mesmo ",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
    {
      author: "virtor",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
  ];

  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img src={props.icon} />
            <div className={styles.authorInfo}>
              <strong>{props.author}</strong>
              <span>{props.authorInfo}</span>
            </div>
          </div>
          <time title={props.published} dateTime={props.published}>
            Published {props.published} ago
          </time>
        </header>
        <div className={styles.content}>{props.content}</div>
        <form className={styles.commentForm}>
          <textarea placeholder="Deixe seu comentario"></textarea>

          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <div className={styles.commentList}>
            {comments.map((val, i) => (
              <Comment
                author={val.author}
                comment={val.comment}
                icon={val.icon}
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Post;
