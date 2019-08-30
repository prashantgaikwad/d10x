import React from "react";
import {
  Navbar,
} from "react-bootstrap";
import "./NewsPage.css";

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="news-page">
        <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem"}}>
          <Navbar.Brand>News</Navbar.Brand>
        </Navbar>
        <div style={{ flex: 1 }}>
        </div>
      </div>
    );
  }
}
