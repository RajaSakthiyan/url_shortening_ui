import React from "react";
import { usePageData } from "./page_data";

export const ShowLoader: React.FC = () => {
  const { onLoading } = usePageData();
  return (
    <div className="result">
      <span className={`${onLoading ? "loader" : ""}`}></span>
    </div>
  );
};
