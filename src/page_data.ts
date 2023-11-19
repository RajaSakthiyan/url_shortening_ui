import { FormEvent, createContext, useContext } from "react";
import { IPageContextModel } from "./type";

export const defaultPageContextData: IPageContextModel = {
  pageTitle: "sho.rt",
  pageDescription: "Create shorter URLs with sho.rt domain",
  shortLink: null,
  userMessage: null,
  errorMessage: null,
  onLoading: false,
  submitForm: (event: FormEvent<HTMLFormElement>) => {},
};

export const PageContext = createContext(defaultPageContextData);

export const usePageData = (): IPageContextModel => {
  return useContext(PageContext);
};
