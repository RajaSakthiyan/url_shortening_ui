import { IServerResponse, IShortUrlResponse } from "./type";

const SHORT_URL = "https://sho.rt/";
const SERVER_API =
  "https://run.mocky.io/v3/3fc6a678-29c1-422e-9e46-c1c1e9b1cd89";

const defaultShortUrlResponse: IShortUrlResponse = {
  userMessage: null,
  errorMessage: null,
  shortUrl: null,
};

async function getShortURl(data: FormData): Promise<IShortUrlResponse> {
  try {
    const response = await fetch(SERVER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
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
