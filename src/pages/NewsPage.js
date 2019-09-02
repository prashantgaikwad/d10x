import React from "react";
import axios from "axios";
import {
  Navbar,
} from "react-bootstrap";
import "./NewsPage.css";

const ROOT_URL = "http://www.omdbapi.com/?apikey=e8d60998";

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(props.location.search);
    this.state = {
      loading: true,
      data: {},
      searchParams,
    };
  }

  componentDidMount() {
    const url = `${ROOT_URL}&s=dark`;
    this.setState({ loading: true });
    axios.get(url).then(({ data }) => {
      this.setState({ loading: false, data });
    }).catch(() => {
      this.setState({ loading: false, data: {} });
    });
  }

  render() {
    const { loading, data, searchParams } = this.state;
    return (
      <div className="news-page">
        <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem" }}>
          <Navbar.Brand>News {searchParams.get("tag") ? `#${searchParams.get("tag")}` : ""}</Navbar.Brand>
        </Navbar>
        <div style={{ flex: 1 }}>
          {loading ? (
            <div style={{ width: "100%", padding: 50, display: "flex", justifyContent: "center" }}>
              Loading...
            </div>
          ) : (
            <div>
              {data.Title}
            </div>
          )}
        </div>
      </div>
    );
  }
}
