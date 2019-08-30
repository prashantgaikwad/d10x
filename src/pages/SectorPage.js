import React from "react";
import {
  Navbar,
} from "react-bootstrap";
import "./SectorPage.css";

export default class SectorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="sector-page">
        <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem" }}>
          <Navbar.Brand>Sector</Navbar.Brand>
        </Navbar>
        <div style={{ flex: 1 }}>
        </div>
      </div>
    );
  }
}
