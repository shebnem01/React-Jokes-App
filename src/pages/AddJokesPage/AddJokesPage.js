import React, { useCallback, useState } from "react";
import styles from "./AddJokesPage.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const AddJokesPage = ({ addJokes }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = useCallback((e) => {
    addJokes(text);
    e.preventDefault();
    if(text){
      navigate("/");
    }
  },[text])
  return (
    <form className={styles["add-form"]}>
      <div className={styles.title}>Add joke </div>
      <div className={styles.content}>
        <input onChange={handleChange} type="text" placeholder="Add new joke" />
        <button onClick={handleSubmit} className={styles["add-btn"]}>
          <AiOutlinePlus size={30} />
        </button>
      </div>
      <Link className={styles["home-link"]} to="/">
        All jokes <FaLongArrowAltRight size={20} />
      </Link>
    </form>
  );
};
export default AddJokesPage;
AddJokesPage.propTypes = {
  addJokes: PropTypes.func,
};
