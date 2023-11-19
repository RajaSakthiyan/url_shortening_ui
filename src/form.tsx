import React from "react";
import { usePageData } from "./page_data";

export default function UrlForm() {
  const { submitForm } = usePageData();
  return (
    <form name="url_form" onSubmit={submitForm} autoComplete="off">
      <div className="url">
        <input
          type="url"
          className="url-box"
          placeholder="enter url here"
          name="long_url"
          required
          autoFocus
        />
        <div className="url-button">
          <button className="url-icon" type="submit"></button>
        </div>
      </div>
    </form>
  );
}
