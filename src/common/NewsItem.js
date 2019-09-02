/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import { map } from "lodash";
import "./NewsItem.css";

export default function NewsItem({ news = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0 4px" }}>
      <a href="javascript:void(0)" onClick={() => window.open(news.publishUrl)}>
        <b>{news.headline}</b>
      </a>
      <div style={{ fontSize: 12 }}>Date: {news.publishDate}</div>
      <div style={{ marginBottom: 2 }}>
        {map(news.tags, (tag) => (
          <a className="tag" href="javascript:void(0)" onClick={() => window.open(`/news?tag=${tag}`)}>
            {tag}
          </a>
        ))}
      </div>
      <hr />
    </div>
  );
}
