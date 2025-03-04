export { removeMovie } from "../reducers/movieSlice";
import { loadMovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const video = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
    let ultimateDetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      video: video.data.results.find((movie) => movie.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    console.log(ultimateDetails);
    dispatch(loadMovie(ultimateDetails));
  } catch (err) {
    console.log(err.message);
  }
};
