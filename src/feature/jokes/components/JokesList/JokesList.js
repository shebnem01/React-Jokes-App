import styles from "./JokesList.module.css";
import JokesCard from "../JokesCard/JokesCard";
import PropTypes from "prop-types";
const JokesList = ({ jokes, handleIncrease, handleDecrease }) => {
  let content = jokes?.map((joke, i) => {
    return (
      <JokesCard
        {...joke}
        key={joke.id}
        i={i}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    );
  });
  return <div className={styles["jokes-list"]}>{content}</div>;
};

export default JokesList;
JokesList.propTypes = {
  jokes: PropTypes.array,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};
JokesList.defaultProps = {
  jokes: [],
  isLodaer: true,
};
