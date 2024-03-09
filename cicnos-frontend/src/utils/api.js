class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
    this.jwtToken = localStorage.getItem("jwt");
  }

  async _fetchApi(method, path = "", body = undefined) {
    const headers = {
      "Content-Type": body ? "application/json" : undefined,
    };

    if (this.jwtToken) {
      headers["Authorization"] = `Bearer ${this.jwtToken}`;
    }

    const response = await fetch(`${this.baseUrl}/${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(
        `Error: ${response.status} - ${errorMessage.message} -  ${this.jwtToken}`
      );
    }

    const json = await response.json();
    return json;
  }
  catch(error) {
    console.error("Error en la solicitud:", error.message);
    throw error;
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
  baseUrl: "http://localhost:3000",
});

export default api;
