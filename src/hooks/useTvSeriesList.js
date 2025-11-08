import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTvSerieslist } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTvSeriesList = () => {
  // Fetch Data from TMDB API and update the store
  const dispatch = useDispatch();

  const getTvSeriesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvSerieslist(json.results));
  };

  useEffect(() => {
    getTvSeriesList();
  }, []);
};

export default useTvSeriesList;
