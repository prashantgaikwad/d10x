import React from "react";
import "./Landing.css";
import {
  Card,
} from "react-bootstrap";
import { map } from "lodash";
import NewsItem from "../common/NewsItem";
import TrendItem from "../common/TrendItem";

const subheaderStyle = {
  height: 30, backgroundColor: "lightgrey", padding: 4, fontWeight: 700,
};

export default function SectorSummary({ sector }) {
  return (

    <div className="sector-summary" style={{ display: "flex" }}>
      <div style={{ flex: 3 }}>
        <Card>
          <Card.Header><b>News</b></Card.Header>
          <Card.Body>
            {map(sector.relatedNews, ((newsItem) => (<NewsItem news={newsItem} />)))}
          </Card.Body>
        </Card>
      </div>
      <div style={{ flex: 1 }}>
        <Card>
          <Card.Header><b>Trends</b></Card.Header>
          <Card.Body>
            {map(sector.trends, (trend) => <TrendItem trend={trend} />)}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
