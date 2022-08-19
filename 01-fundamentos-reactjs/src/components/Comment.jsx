import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

function Comment(props) {
  function handleDeleteComment() {
    console.log(props.comment);
    props.onDeleteComment(props.comments);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={props.icon} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.author}</strong>

              <p>{props.comment}</p>
              <time>2h ago</time>
            </div>
            <button onClick={handleDeleteComment} title="Delete Comment">
              {" "}
              <Trash size={24} />{" "}
            </button>{" "}
          </header>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            <span>Like</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
