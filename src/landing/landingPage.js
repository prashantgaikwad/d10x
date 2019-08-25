import React from "react";
import {
  Tab, Nav,
} from "react-bootstrap";
import "./Landing.css";
import SectorSummary from "./SectorSummary";
import sectors from "../mock/sectors";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSector: 0
    }
  }

  renderTabs = () => {
    return sectors.map((sector, index) => (
      <Nav.Item key={index} onClick={() => {
        this.setState({ selectedSector: index });
      }}>
        <Nav.Link eventKey={index}>{sector.sectorName}</Nav.Link>
      </Nav.Item>
    ))
  }

  render() {
    const { selectedSector } = this.state;
    return (
      <div className="landing-page">
        <div style={{ flex: 1 }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <div style={{ display: "flex"}}>
              <div style={{ flex: 1}}>
                <Nav variant="pills" className="flex-column">
                  {this.renderTabs()}
                </Nav>
              </div>
              <div style={{ flex: 4 }}>
                <Tab.Content>
                  <SectorSummary sector={sectors[selectedSector]}/>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
        <div style={{ flex: 2, height: "100%" }}>
        </div>
      </div>
    );
  }
}
