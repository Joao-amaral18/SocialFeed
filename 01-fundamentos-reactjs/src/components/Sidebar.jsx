import styles from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <aside className={styles.sidebar}>
      <img className="cover" src={props.banner} />
      <div className={styles.profile}>
        <img className={styles.avatar} src={props.icon} />
        <strong>{props.name}</strong>
        <span>{props.about}</span>
      </div>
    </aside>
  );
}

export default Sidebar;
