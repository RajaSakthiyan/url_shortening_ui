import { IServerResponse, IShortUrlResponse } from "./types";

const SHORT_URL = "http://127.0.0.1:8082/"; //"https://sho.rt/";
const SERVER_API = "http://127.0.0.1:8081/create_short_url";

const defaultShortUrlResponse: IShortUrlResponse = {
  userMessage: null,
  errorMessage: null,
  shortUrl: null,
};

async function getShortURl(data: string): Promise<IShortUrlResponse> {
  try {
    // await fetch("https://hub.dummyapis.com/delay?seconds=1")
    const response = await fetch(SERVER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
      mode: "cors",
    });
    const result: IServerResponse = await response.json();
    return {
      userMessage: result.status == "success" ? result.message : null,
      errorMessage: result.status == "error" ? result.message : null,
      shortUrl:
        result.status == "success" ? SHORT_URL + result?.alias?.code : null,
    };
  } catch (error) {
    return {
      userMessage: null,
      shortUrl: null,
      errorMessage: (error as Error).message,
    };
  }
}

export { getShortURl, defaultShortUrlResponse };
