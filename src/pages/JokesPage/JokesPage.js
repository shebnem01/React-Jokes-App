import AddJokes from "feature/jokes/components/AddJokes/AddJokes";
import Loader from "shared/components/Loader/Loader";
import styles from "./JokesPage.module.css";
import PropTypes from "prop-types";
import JokesList from "feature/jokes/components/JokesList/JokesList";
import { memo } from "react";
const JokesPage = ({ jokes, isLoader, handleIncrease, handleDecrease }) => {
  return (
      <div className={styles["jokes-page"]}>
        <AddJokes />
          <JokesList
            jokes={jokes}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        {isLoader && <Loader />}
      </div>
  );
};

export default memo(JokesPage);
JokesPage.propTypes = {
  jokes: PropTypes.array,
  isLodaer: PropTypes.bool,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};
JokesPage.defaultProps = {
  jokes: [],
  isLodaer: true,
};
