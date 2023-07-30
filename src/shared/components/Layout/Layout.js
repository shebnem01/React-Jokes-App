import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { getJokes } from "service/jokes";
import { ROUTER } from "shared/constant/router";
import ErrorPage from "shared/components/ErrorPage/ErrorPage";
import Loader from "shared/components/Loader/Loader";
const JokesPage = lazy(() => import("pages/JokesPage/JokesPage"));
const AddJokesPage = lazy(() => import("pages/AddJokesPage/AddJokesPage"));
const Layout = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoader(true);
      let jokesData = await getJokes();
      let results = jokesData.data.results.map((item) => {
        return { ...item, vote: 0 };
      });
      setJokes(results);
      setIsLoader(false);
    })();
  }, []);
  const sortProcess = useCallback(
    (vote, voteID) => {
      let newJokeList = [...jokes];
      let currentItem = newJokeList.findIndex((item) => item.id === voteID);
      newJokeList[currentItem].vote = vote;
      let jokeSort = newJokeList.sort((a, b) => b.vote - a.vote);
      setJokes(jokeSort);
    },
    [jokes]
  );
  const handleIncrease = (voteID, vote) => {
    sortProcess(vote, voteID);
  };
  const handleDecrease = (voteID, vote) => {
    sortProcess(vote, voteID);
  };
  const addJokes = useCallback(
    (joke) => {
      if (!joke.trim()) return false;
      let newJokesList = [...jokes];
      let newJoke = {
        id: nanoid(),
        joke,
        vote: 0,
      };
      newJokesList = [...newJokesList, newJoke];
      setJokes(newJokesList);
      toast.success("Joke added");
    },
    [jokes]
  );
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTER.HOME} replace />} />
      <Route
        path={ROUTER.HOME}
        element={
          <Suspense fallback={<Loader />}>
            <JokesPage
              isLoader={isLoader}
              jokes={jokes}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
          </Suspense>
        }
      />
      <Route
        path={ROUTER.ADDJOKES}
        element={
          <Suspense fallback={<Loader />}>
            <AddJokesPage addJokes={addJokes} />
          </Suspense>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Layout;
