import React, { Component } from 'react'
import './section1.scss'
import Paper from './image 14.png'
import Timer from './Timer.png'
import Fork from './ForkKnife.png'
import Man from './Ellipse 2.png'
import Play from './PlayCircle.png'
import Main from './baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png'
import Class from './Badge.png'


export class Section1 extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="main-card">
                    <div className="card1">
                        <div className="hot">
                            <img src={Paper} alt="" />
                            <p>Hot Recipes</p>
                        </div>
                        <h1>Spicy delicious chicken wings</h1>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <div className="time-fork">
                            <div className="timer">
                                <img src={Timer} alt="" />
                                <p>30 Minutes</p>
                            </div>
                            <div className="fork">
                                <img src={Fork} alt="" />
                                <p>Chicken</p>
                            </div>
                        </div>
                        <div className="card1-bottom">
                            <div className="name">
                                <img src={Man} alt="" />
                                <div className="date">
                                    <span>John Smith</span>
                                    <p>15 March 2022</p>
                                </div>
                            </div>
                            <div className="view-btn">
                                <button>
                                    View Recipes
                                    <img src={Play} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="main-pic">
                            <img src={Main} alt="" />
                        </div>
                    </div>
                    <img src={Class} alt="" className='middle-pic'/>
                </div>
            </div>
        );
    }
}

export default Section1;