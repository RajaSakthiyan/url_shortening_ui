import React from "react";
import { usePageData } from "./page_data";

export const ShowMessage: React.FC = () => {
  const { userMessage, errorMessage, onLoading } = usePageData();

  const hideContent =
    onLoading == true || (userMessage == null && errorMessage == null);

  return (
    <div hidden={hideContent} className="result">
      <div className="message" hidden={userMessage == null}>
        {userMessage ?? ""}
      </div>
      <div
        className="message"
        hidden={errorMessage == null}
        style={{ color: "red" }}
      >
        {errorMessage ?? ""}
      </div>
    </div>
  );
};
