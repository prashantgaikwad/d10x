import React from "react";
import axios from "axios";
import {
  Navbar,
} from "react-bootstrap";
import "./SectorPage.css";
import { map } from "lodash";
import TrendItem from "../common/TrendItem";
import NewsItem from "../common/NewsItem";

const ROOT_URL = "http://www.omdbapi.com/?apikey=e8d60998";

const sentimentStyle = { fontSize: 20, alignItems: "center", paddingRight: 4 };

export default class SectorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sector: {},
    };
  }

  componentDidMount() {
    const url = `${ROOT_URL}&s=dark`;
    this.setState({ loading: true });
    axios.get(url).then((sector) => {
      this.setState({ loading: false, sector });
    }).catch(() => {
      this.setState({ loading: false, sector: {} });
    });
  }

  renderTop() {
    const { sector = {} } = this.state;
    return (
      <div style={{ display: "flex", padding: "8px" }}>
        <div style={{ flex: 1 }}>{"Today's Change"}<hr /></div>
        <div style={{ flex: 1 }}>{map(sector.trends, (trend, index) => <TrendItem key={index} trend={trend} />)}</div>
        <div style={{ flex: 2 }}></div>
      </div>
    );
  }

  renderNews() {
    const { sector = {} } = this.state;
    return (map(sector.relatedNews, ((newsItem) => (<NewsItem news={newsItem} />))));
  }

  renderSubsectors() {
    const { sector = {} } = this.state;
    return map(sector.subsectors, (sector) => (
      <div style={{ backgroundColor: "aliceblue", padding: "6px 0px 6px 30px", display: "flex" }}>
        <div style={{ flex: 2 }}>
          <a href={`/sectors/?sector=${sector.name}`}>{sector.name}</a>
        </div>
        <div style={{ flex: 1 }}>
          {sector.sentiment.direction === "POSITIVE"
            ? <span style={{ ...sentimentStyle, color: "green" }}>▲</span>
            : <span style={{ ...sentimentStyle, color: "red" }}>▼</span>}
        </div>
      </div>
    ));
  }

  render() {
    const { loading, sector = {} } = this.state;
    return (
      <div className="sector-page">
        <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem" }}>
          <Navbar.Brand>Sector: {sector.name}</Navbar.Brand>
        </Navbar>
        <div style={{ flex: 1 }}>
          {loading ? (
            <div style={{ width: "100%", padding: 50, display: "flex", justifyContent: "center" }}>
              Loading...
            </div>
          ) : (
            <div>
              {this.renderTop()}
              {this.renderNews()}
              {this.renderSubsectors()}
            </div>
          )}
        </div>
      </div>
    );
  }
}
