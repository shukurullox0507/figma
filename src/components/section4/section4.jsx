import React, { Component } from 'react'
import './section4.scss'
import Img from './Group 880.png'


class Section4 extends Component {
    state = {}
    render() {
        return (
            <div className="container-section4">
                <div className="text-box">
                    <h2>Everyone can be a <br /> chef in their own kitchen</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br /> ad minim </p>
                    <button>Learn More</button>
                </div>
                <div className="img-box">
                    <img src={Img} alt="" />
                </div>
            </div>
        );
    }
}

export default Section4;