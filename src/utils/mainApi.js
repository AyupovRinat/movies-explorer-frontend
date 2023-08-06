import { BASE_URL } from "./constants";

class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
    this.headersWithToken = { ...headers, Authorization: null };
  }

  _checkOk = (res) => res.ok ? res.json() : Promise.reject(res.status);
	
	setToken = (token) => this.headersWithToken = { ...this.headersWithToken, Authorization: `Bearer ${token}` }


  register(userData) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(userData),
    })
    .then(this._checkOk);
  }

	
  login(userData) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(userData),
    })
  	.then(this._checkOk);
  }

  getUser() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headersWithToken,
    })
    .then(this._checkOk);
  }
	
	getMovies() {
		return fetch(`${this.url}/movies`, {
			headers: this.headersWithToken,
		})
		.then(this._checkOk);
	}

  patchUser(userData) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headersWithToken,
      body: JSON.stringify(userData),
    })
    .then(this._checkOk);
  }


  postMovie(movie) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: this.headersWithToken,
      body: JSON.stringify(movie),
    })
    .then(this._checkOk);
  }

  deleteMovie(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headersWithToken,
    })
    .then(this._checkOk);
  }
}

const mainApi = new MainApi({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;