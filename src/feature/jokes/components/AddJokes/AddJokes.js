import styles from "./AddJokes.module.css";
import jokeImg from "assets/jokes.png";
import { Link } from "react-router-dom";
import { ROUTER } from "shared/constant/router";
const AddJokes = () => {
  return (
    <div className={styles["add-jokes"]}>
      <div className={styles.title}>
        <span>dad</span>
        <span>jokes</span>
      </div>
      <div className={styles["big-icon"]}>
        <img src={jokeImg} alt="" />
      </div>
      <Link className={styles["add-btn"]} to={ROUTER.ADDJOKES}>
        new jokes
      </Link>
    </div>
  );
}

export default AddJokes