import React from "react";
import {
  Tab, Nav, Card, Accordion, Navbar,
} from "react-bootstrap";
import "./Landing.css";
import { map } from "lodash";
import SectorSummary from "./SectorSummary";
import sectors from "../mock/sectors";

const sentimentStyle = { fontSize: 20, alignItems: "center", paddingRight: 4 };

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSector: 0,
    };
  }

  renderTabs() {
    return sectors.map((sector, index) => (
      <Nav.Item
        key={index}
        onClick={() => {
          this.setState({ selectedSector: index });
        }}
      >
        <Nav.Link eventKey={index}>{sector.name}</Nav.Link>
      </Nav.Item>
    ));
  }

  render() {
    const { selectedSector } = this.state;
    return (
      <div className="landing-page">
        <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem"}}>
          <Navbar.Brand >Top Sectors</Navbar.Brand>
        </Navbar>
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
          <hr />
          <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem"}}>
            <Navbar.Brand >All Sectors</Navbar.Brand>
          </Navbar>
          <Accordion>
            {map(sectors, ((sector, index) => (
              <Card key={index}>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={index} style={{ display: "flex"}}>
                  <a href={`/sectors/?sector=${sector.name}`}style={{ flex: 2}}>{sector.name}</a>
                  <div style={{ flex: 1}}>
                    {sector.sentiment.direction === "POSITIVE" ?
                      <span style={{...sentimentStyle, color: "green" }}>▲</span> :
                      <span style={{...sentimentStyle, color: "red" }}>▼</span>}
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              ))
            )}
          </Accordion>
        </div>
      </div>
    );
  }
}
