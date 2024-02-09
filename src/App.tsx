import React from "react";
import "./App.css";
import picture from "./PicOfMe.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Daniel Mahler
            </header>
            <h1>This is for the third task</h1>
            <img
                src={picture}
                alt="A picture of me in a suit"
                width="200"
                height="300"
            />
            <div style={{ textAlign: "left", width: "50%", margin: "auto" }}>
                Classes I am taking this semester:
                <ul>
                    <li>CISC 275</li>
                    <li>CISC 361</li>
                    <li>MATH 205</li>
                    <li>ECON 100</li>
                    <li>FINC 200</li>
                </ul>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column.
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column.
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
        </div>
    );
}

export default App;
