class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  async _fetchApi(method, path = "", body = undefined) {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method,
      headers: {
        "Content-Type": body ? "application/json" : undefined,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) {
      return Promise.reject(`Error: ${response.status}`);
    }
    const json = await response.json();
    return json;
  }

  getUserInfo() {
    return this._fetchApi("GET", "users/me");
  }

  setUserInfo({ name, about }) {
    return this._fetchApi("PATCH", "users/me", { name, about });
  }

  setUserImage(imageURL) {
    return this._fetchApi("PATCH", "users/me/avatar", { avatar: imageURL });
  }
}

const api = new Api({
  baseUrl: "http://localhost:3000/",
});

export default api;
