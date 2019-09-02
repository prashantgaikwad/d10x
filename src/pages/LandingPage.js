import React from "react";
import {
  Tab, Nav, Card, Accordion, Navbar,
} from "react-bootstrap";
import axios from "axios";
import "./Landing.css";
import { map } from "lodash";
import SectorSummary from "./SectorSummary";
import mockSectors from "../mock/sectors";


const ROOT_URL = "http://www.omdbapi.com/?apikey=e8d60998";
const sentimentStyle = { fontSize: 20, alignItems: "center", paddingRight: 4 };

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSector: 0,
      loading: true,
      sectors: {},
    };
  }
  
  componentDidMount() {
    const url = `${ROOT_URL}&s=dark`;
    this.setState({ loading: true });
    axios.get(url).then(({ data }) => {
      // TODO: replace this with actual result
      this.setState({ loading: false, sectors: mockSectors });
    }).catch(() => {
      this.setState({ loading: false, sectors: {} });
    });
  }

  renderTabs() {
    const { sectors } = this.state;
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
    const { selectedSector, loading, sectors } = this.state;
    return (
      <div className="landing-page">
        <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem"}}>
          <Navbar.Brand>Top Sectors</Navbar.Brand>
        </Navbar>
        {loading ? (
          <div style={{ width: "100%", padding: 50, display: "flex", justifyContent: "center" }}>
            Loading...
          </div>
        ) : (
          <div>
            <div style={{ flex: 1 }}>
              <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <Nav variant="pills" className="flex-column">
                      {this.renderTabs()}
                    </Nav>
                  </div>
                  <div style={{ flex: 4 }}>
                    <Tab.Content>
                      <SectorSummary sector={sectors[selectedSector]} />
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </div>
            <div style={{ flex: 2, height: "100%" }}>
              <hr />
              <Navbar bg="dark" variant="dark" style={{ padding: "0 1rem" }}>
                <Navbar.Brand>All Sectors</Navbar.Brand>
              </Navbar>
              <Accordion>
                {map(sectors, ((sector, index) => (
                  <Card key={index}>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={index} style={{ display: "flex" }}>
                      <div style={{ flex: 2 }}>
                        <a href={`/sectors/?sector=${sector.name}`}>{sector.name}</a>
                      </div>
                      <div style={{ flex: 1 }}>
                        {sector.sentiment.direction === "POSITIVE"
                          ? <span style={{ ...sentimentStyle, color: "green" }}>▲</span>
                          : <span style={{ ...sentimentStyle, color: "red" }}>▼</span>}
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )))}
              </Accordion>
            </div>
          </div>
        )}
      </div>
    );
  }
}
