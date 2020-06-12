import React, { Component } from 'react';
import {Col, Row, Container, Button, Card} from "react-bootstrap"

class Prova extends Component {
    render() {
        return (
            <div>
                <Container fluid id="artist-header"
                    style={{backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "over"}}>
                    <Container style={{minHeight: "50vh"}}>
                    <Row style={{position: "relative", top: "30vh"}}>
                        <div className="col-12 col-md-4 mx-auto px-0">
                        <div id="nestH1Name" style={{textAlign: "center"}}>
                        </div>
                        <Container fluid className="px-0">
                            <div className="text-center">
                            <Button className="btn btn-green btn-rounded" onclick="callback()">PLAY</Button>
                            <Button className="btn btn-rounded btn-outline-light">FOLLOW</Button>
                            <Button className="btn rounded-circle text-white d-inline-flex align-content-center"
                                style={{fontSize: "larger"}}>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </Button>
                            </div>
                        </Container>
                        </div>
                    </Row>
                    </Container>
                    <nav className="navbar navbar-expand-md ">
                    <Container fluid className="d-inline">
                        <a className="navbar-brand" href="#"></a>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </Button>
                        <div className="collapse navbar-collapse d-flex justify-content-center flex-row" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <a className="nav-link" href="#">TRENDING <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">OVER</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">MOODS AND GENRES</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">NEW RELEASES</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">DISCOVER</a>
                            </li>
                        </ul>   
                        </div>   
                        </Container>                 
                    </nav>                    
                </Container>
                <Container className="mt-3">
                    <h2 style={{fontWeight: "800", color: "seashell"}}>Discography</h2>
                    <Row>
                    <Col>
                        <div className="card-fluid">
                        <div className="card">
                            <img src="./assets/Q1.jpeg" className="card-img-top" alt="..." />
                            <Card.Body>
                            <h5 className="card-title">HOT SPACE</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted" > 3 mins ago</small></p>
                            </Card.Body>
                        </div>
                        </div>
                    </Col>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <Col>
                        <div className="card">
                        <img src="./assets/Q2.jpeg" className="card-img-top" alt="..." />
                        <Card.Body>
                            <h5 className="card-title">CLASSIC QUEEN</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted"> 3 mins ago</small></p>
                        </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                        <img src="./assets/Q4.jpeg" className="card-img-top" alt="..." />
                        <Card.Body>
                            <h5 className="card-title">KILLER QUEEN</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted"> 3 mins ago</small></p>
                        </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                        <img src="./assets/Q6.jpeg" className="card-img-top" alt="..." />
                        <Card.Body>
                            <h5 className="card-title">ROCK YOU</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted"> 3 mins ago</small></p>
                        </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                        <img src="./assets/Q7.jpeg" className="card-img-top" alt="..." />
                        <Card.Body>
                            <h5 className="card-title">FREDDIE MERCURY</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted"> 3 mins ago</small></p>
                        </Card.Body>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Prova;