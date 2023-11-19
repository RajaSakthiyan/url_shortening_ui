import { FormEventHandler, MouseEventHandler } from "react";

export type Nullable<T> = T | null;

export interface IPageContextModel {
  pageTitle: string;
  pageDescription?: string;
  shortLink: Nullable<string>;
  submitForm: FormEventHandler<HTMLElement>;
  userMessage: Nullable<string>;
  errorMessage: Nullable<string>;
  onLoading: boolean;
}

export interface IShortUrlResponse {
  userMessage: Nullable<string>;
  errorMessage: Nullable<string>;
  shortUrl: Nullable<string>;
}

export interface IServerResponse {
  status: string;
  message: string;
  alias?: {
    code: string;
    id: string;
  };
  long_url?: string;
}
