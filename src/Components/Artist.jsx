import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';

class Artist extends Component {
    render() {
        return (
            <>
            <Container fluid id="artist-header"
                    style={{backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
                    <Container style={{minHeight: "50vh"}}>
                    <Row style={{position: "relative", top: "30vh"}}>
                        <Col md={4}  className="mx-auto px-0">
                        <div id="nestH1Name" style={{textAlign: "center"}}>
                        </div>
                        <Container className="px-0">
                            <div className="text-center">
                            <Button className="btn btn-green btn-rounded" onclick="callback()">PLAY</Button>
                            <Button className="btn btn-rounded btn-outline-light">FOLLOW</Button>
                            <Button className="btn rounded-circle text-white d-inline-flex align-content-center"
                                style={{fontSize: "larger"}}>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </Button>
                            </div>
                        </Container>
                        </Col>
                    </Row>
                    </Container>
                    <Nav className="navbar-expand-md ">
                    <Container fluid className="d-inline">
                        <a className="navbar-brand" href="#"></a>
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </Button>
                        <div className="collapse navbar-collapse d-flex justify-content-center flex-row" id="navbarNavDropdown">
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                            <Nav.Link href="#">TRENDING <span className="sr-only">(current)</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Nav.Link href="#">OVER</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Nav.Link href="#">NEW RELEASES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Nav.Link href="#">DISCOVER</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </div>
                    </Container>               
                </Nav>              
            </Container>
            </>
        );
    }
}

export default Artist;