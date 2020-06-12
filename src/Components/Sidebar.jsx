import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav, Image } from "react-bootstrap";


class Sidebar extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="d-block d-md-none" style={{position: "absolute", fontSize: "3rem", color: "white", zIndex: "1000"}}>
                        <div id="mySidenav" className="sidenav d-flex flex-column bg-transparent">
                            <div className="fake-bg position-absolute h-100 w-100 d-none" style={{opacity: "0.9 !important", zIndex: "-1", backgroundColor: "black"}}></div>
                            <a href="javascript:void(0)" className="closebtn text-white d-none" onclick="closeNav()">&times;</a>
                            <div className="sidebar-header d-none" style={{marginTop: "5%", textAlign: "center"}}>
                                <img src="./assets/logos/logo-white.png" style={{width: "100px"}} alt="logo" />
                            </div>
                            <div className="d-none">
                                <a id="home" onclick="changeFrame('homepage.html'), closeNav()">
                                    <i className="fa fa-fw fa-home mr-3"></i>Home
                                </a>
                                <a id="search" onclick="changeFrame('search.html')" href="#">
                                    <i className="fa fa-fw fa-search mr-3"></i>Search
                                </a>
                                <a href="#" onclick="changeFrame('album.html'), closeNav()" className="d-flex align-items-center">
                                    <ion-icon name="library" className="mr-3 ml-1" style={{paddingRight: "2px"}}></ion-icon>Your Library
                                </a>
                            </div>
                            <div className="d-none" style={{textAlign: "center", marginTop: "auto"}}>
                                <div className="mt-auto align-self-center">
                                    <button className="btn btn-light btn-rounded mt-3" type="submit">Sign Up</button>
                                    <a href="login.html">
                                        <button className="btn btn-outline-light btn-rounded mt-3" onclick="closeNav()"
                                            type="submit">Login</button>
                                    </a>
                                </div>
                            </div>
                            <div className="container my-4 d-none" style={{color: "rgb(134, 134, 134)"}}>
                                <div class="row">
                                    <div class="col" style={{fontSize: "16px", textAlign: "center"}}>
                                        Cookie <br /> Policy
                                    </div>
                                    <div className="col" style={{fontSize: "16px", textAlign: "center"}}>
                                        Privacy
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span style={{fontSize: "30px", cursor: "pointer",  marginLeft: "10px,"}} onclick="openNav()">&#9776;</span>
                    </div>

                    {/* Seconda SideBar */}

                    <div className="container-fluid px-0" style={{height: "100vh"}}>
                        <div className="row mx-0 my-0 py-0 px-0" style={{height: "100%"}}> 
                            <div id="collapsingMenu"
                            className="col-12 col-md-2 mx-0 my-0 py-0 px-0 bg-transparent d-md-flex flex-column d-none">
                            {/* Sidebar */}
                            <Nav id="sidebar">
                                <div className="sidebar-header" style={{marginLeft: "10%", marginTop: "5%"}}>
                                    <Image src="assets\logos\logo-white.png" style={{width: "100px"}} alt="logo" />
                                </div>

                                <ul className="list-unstyled components navbar flex-column align-items-start mt-5">
                                    <li className="active">
                                        <a id="home" onclick="changeFrame('homepage.html')" style={{marginLeft: "10%"}}>
                                            <i className="fa fa-fw fa-home mr-3"></i>Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onclick="changeFrame('search.html')" style={{marginLeft: "10%"}}><i className="fa fa-fw fa-search mr-3"></i>Search</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{marginLeft: "10%"}} onclick="changeFrame('album.html')">
                                            <ion-icon name="library" class="mr-3"></ion-icon>Your Library
                                        </a>
                                    </li>
                                </ul>
                            </Nav>
                            <div className="mt-auto align-self-center">
                                <Button className="btn btn-light btn-rounded mt-3" type="submit">Sign Up</Button>
                            </div>
                            <div className="align-self-center mb-2">
                                <a href="login.html">
                                    <Button className="btn btn-outline-light btn-rounded mt-3">Login</Button>
                                </a>
                            </div>
                            <Container style={{marginBottom: "10vh", color: "rgb(134, 134, 134)"}}>
                                <Row>
                                    <Col className="text-center">
                                        Cookie<br />Policy
                                    </Col>
                                    <Col className="text-center">
                                        Privacy
                                    </Col>
                                </Row>
                            </ Container>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default Sidebar;