import React, { Component } from 'react'
import './header.scss'
import Facebook from './facebook.png'
import Instagram from './004-instagram.png'
import Tweet from './Path.png'




export class Header extends Component {
    render() { 
        return (
            <div className="header">
                <p className="logo">Foodieland<span>.</span></p>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="1">Home</a>
                        </li>
                        <li>
                            <a href="1">Recipes</a>
                        </li>
                        <li>
                            <a href="1">Blog</a>
                        </li>
                        <li>
                            <a href="1">Contact</a>
                        </li>
                        <li>
                            <a href="1">About us</a>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <img src={Facebook} alt="" />
                    <img src={Tweet} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
        );
    }
}
 
export default Header;