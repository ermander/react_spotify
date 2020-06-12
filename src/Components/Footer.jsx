import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap"

class Footer extends Component {
    render() {
        return (
            <Row className="px-0 mx-0 border-light">
                <Col className=" px-0 text-white">
                    <Container fluid id="player-section"
                        className=" footer px-0 mx-0 d-flex justify-content-center text-white align-items-center bg-dark"
                        style={{borderTop: "1px solid grey"}}>
                        <div id="full-footer" className="position-relative w-100 d-flex align-items-center">
                            <div id="title-display" className="ml-3 my-1 text-white" style={{width: "auto"}}>
                                <h5 id="track-title">-</h5>
                                <span id="track-artist">-</span>
                            </div>

                            <div id="player-controls-wrapper" className="d-flex flex-column">
                                <div id="player-controls" className="d-flex justify-content-around align-items-center mx-auto">
                                    <label className="form-check-label d-flex align-items-center">
                                        <input onchange="shuffleToggled()" type="checkbox" className="form-check-input d-none"
                                            name="" id="shuffle-toggle" value="checkedValue" />
                                        <ion-icon name="shuffle"></ion-icon>
                                    </label>
                                    <ion-icon onclick="reward()" name="play-skip-back">
                                    </ion-icon>
                                    <ion-icon id="play-btn" onclick="togglePlay()" name="play" style={{fontSize: "1.3rem"}}>
                                    </ion-icon>
                                    <ion-icon onclick="forward()" name="play-skip-forward">
                                    </ion-icon>
                                    <label className="form-check-label d-flex control-toggled align-items-center">
                                        <input onchange="cycleToggled()" type="checkbox" className="form-check-input d-none"
                                            name="" id="cycle-toggle" value="checkedValue" checked />
                                        <ion-icon name="repeat"></ion-icon>
                                    </label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center text-center">
                                    <span id="track-current-time"></span>
                                    <span id="seek-obj-container">
                                        <progress id="progress-bar" className="d-none d-md-inline-block" value="0"
                                            max="1"></progress>
                                    </span>
                                    <small style={{float: "left", position: "relative", left: "15px"}} id="start-time"></small>
                                    <small style={{float: "right", position: "relative", right: "20px"}} id="end-time"></small>
                                    <span id="track-duration"></span>
                                </div>

                            </div>

                            <div className="mr-3 position-absolute d-none d-md-flex text-white align-items-center"
                                style={{right: "15px"}}>
                                {/* <progress id="volume-bar" value="1" max="1" class="ml-3"></progress> */}

                                {/* <label for="volume" class=""> */}
                                <ion-icon id="volume-icon" name="volume-high-sharp" onclick="toggleMute()"></ion-icon>
                                {/* </label> */}
                                <input style={{maxWidth: "90px"}} type="range" id="volume-bar" name="volume" className="ml-3"
                                    min="0" max="100" value="100" oninput="tweakVolume(this.value)" />
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        );
    }
}

export default Footer;