import React, { Component } from 'react'
import './section5.scss'
import First from './1.png'
import Second from './2.png'
import Third from './3.png'
import Fourth from './4.png'
import Insta from './004-instagram.png'


class Section5 extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container-5">
                <h2>Check out @foodieland on Instagram</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqut enim ad minim </p>
                <div className="img-box">
                    <img src={First} alt="" />
                    <img src={Second} alt="" />
                    <img src={Third} alt="" />
                    <img src={Fourth} alt="" />
                </div>
                <button>Visit Our Instagram <img src={Insta} alt="" /></button>
            </div>

        );
    }
}
 
export default Section5;