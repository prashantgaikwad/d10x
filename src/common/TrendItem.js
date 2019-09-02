import React from "react";

const sentimentStyle = { fontSize: 20, alignItems: "center", paddingRight: 4 };

export default function NewsItem({ trend = {} }) {
  return (
    <div style={{ display: "flex", alignContent: "center", padding: "0 4px" }}>
      <div style={{ flex: 1 }}>
        <a href={`/news?tag=${trend.name}`}>{trend.name}</a>
      </div>
      <span>{trend.sentiment === "POSITIVE" ?
        <span style={{ ...sentimentStyle, color: "green" }}>▲</span> :
        <span style={{ ...sentimentStyle, color: "red" }}>▼</span>}
      </span>
      <hr />
    </div>
  );
}
