import React from "react";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["error-page"]}>
      <div className={styles.title}>404</div>
      <div className={styles.text}>page not found</div>
      <button onClick={() => navigate("../")} className={styles.btn}>
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;
