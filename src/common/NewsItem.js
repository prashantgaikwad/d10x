import React from "react";

const subheaderStyle = { height: 30, alignItems: "center", backgroundColor: "lightgrey" };

export default function NewsItem({ news = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0 4px" }}>
      <b>{news.headline}</b>
      <div>Date: {news.publishDate}</div>
      <hr />
    </div>
  );
}
