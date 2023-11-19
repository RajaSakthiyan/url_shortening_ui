import React, { useState, FormEvent } from "react";
import { PageTitle } from "./title";
import { PageContext, defaultPageContextData } from "./page_data";
import { IPageContextModel, IShortUrlResponse, Nullable } from "./type";
import UrlForm from "./form";
import { ShowShortUrl } from "./show_short_url";
import { ShowLoader } from "./loader";
import { defaultShortUrlResponse, getShortURl } from "./api";
import { ShowMessage } from "./show_message";

export const App = () => {
  const [shortLink, setShortLink] = useState<Nullable<string>>(null);
  const [userMessage, setUserMessage] = useState<Nullable<string>>(null);
  const [errorMessage, setErrorMessage] = useState<Nullable<string>>(null);
  const [onLoading, setOnLoading] = useState<boolean>(false);
  const updateStates = (response: IShortUrlResponse, loading: boolean) => {
    setUserMessage(response.userMessage);
    setErrorMessage(response.errorMessage);
    setShortLink(response.shortUrl);
    setOnLoading(loading);
  };
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateStates(defaultShortUrlResponse, true);
    const formData = new FormData(event.target as HTMLFormElement);
    // console.log({ data: Object.fromEntries(formData.entries()) });
    const response: IShortUrlResponse = await getShortURl(formData);
    updateStates(response, false);
    return false;
  };
  const value: IPageContextModel = {
    ...defaultPageContextData,
    submitForm,
    onLoading,
    shortLink,
    userMessage,
    errorMessage,
  };
  return (
    <PageContext.Provider value={value}>
      <div className="main">
        <div className="url-wrapper">
          <PageTitle />
          <UrlForm />
          <ShowMessage />
          <ShowShortUrl />
          <ShowLoader />
        </div>
      </div>
    </PageContext.Provider>
  );
};
