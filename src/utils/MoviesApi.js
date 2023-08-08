import { MOVIES_URL } from "./constants";

const getMovies = () => {
	return fetch(`${MOVIES_URL}/beatfilm-movies`).then((res) => res.ok ? res.json() : Promise.reject(res.status));
}
export { getMovies, MOVIES_URL };