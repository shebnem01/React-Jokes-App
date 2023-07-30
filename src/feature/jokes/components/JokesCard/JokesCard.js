import React, { memo, useCallback, useState } from "react";
import styles from "./JokesCard.module.css";
import img1 from "assets/1.png";
import img2 from "assets/2.png";
import img3 from "assets/3.png";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const JokesCard = ({ joke, id, vote, i, handleIncrease, handleDecrease }) => {
  const [defaultVote, setDefaultVote] = useState(0);
  const increaseVote = useCallback(
    (id) => {
      let neVote = defaultVote + 1;
      handleIncrease(id, neVote);
      setDefaultVote(neVote);
    },
    [defaultVote]
  );
  const decreaseVote = useCallback(
    (id) => {
      let neVote = defaultVote - 1;
      handleDecrease(id, neVote);
      setDefaultVote(neVote);
    },
    [defaultVote]
  );

  return (
    <li className={styles["jokes-card"]}>
      <div className={styles.action}>
        <button className={styles.inc} onClick={() => increaseVote(id)}>
          <AiOutlineArrowUp size={25} />
        </button>
        <span
          className={
            i < 3
              ? `${styles.count} ${styles.green}`
              : i < 6
              ? `${styles.count} ${styles.orange}`
              : `${styles.count} ${styles.yellow}`
          }
        >
          {vote}
        </span>
        <button className={styles.dec} onClick={() => decreaseVote(id)}>
          <AiOutlineArrowDown size={25} />
        </button>
      </div>
      <div className={styles["jokes-name"]}>{joke}</div>
      <div className={styles["small-icon"]}>
        <img src={i < 3 ? img1 : i < 6 ? img2 : img3} alt="" />
      </div>
    </li>
  );
};

export default memo(JokesCard);
