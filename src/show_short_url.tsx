import React from "react";
import { usePageData } from "./page_data";

export const ShowShortUrl: React.FC = () => {
  const { shortLink, onLoading } = usePageData();

  const copyLink = () => {
    if (shortLink) navigator.clipboard.writeText(shortLink);
  };

  const hideContent = onLoading == true || shortLink == null;

  return (
    <div style={hideContent ? { display: "none" } : {}} className="result">
      <div className="short-url">{shortLink}</div>
      <div className="short-url-copy" onClick={copyLink} />
      <span className="copy_msg">copy</span>
    </div>
  );
};
