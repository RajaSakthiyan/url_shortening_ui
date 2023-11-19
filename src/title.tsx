import React from "react";
import { usePageData } from "./page_data";

export const PageTitle: React.FC = () => {
  const { pageTitle, pageDescription } = usePageData();
  return (
    <>
      <div className="title-wrapper">
        <div className="title-logo"></div>
        <div className="title">{pageTitle}</div>
      </div>
      <div className="title-wrapper title-desc">{pageDescription}</div>
    </>
  );
};
