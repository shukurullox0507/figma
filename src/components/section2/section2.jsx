import React, { Component } from 'react'
import './section2.scss'
import Breakfast from './image 25.png'
import Karam from './image 20.png'
import Meat from './meat.png'
import Cake from './cake.png'
import Sendwich from './sendwich.png'
import Choco from './choco.png'


function ProductComponent({ text, imageUrl, name }) {
    return (
        <div className={name}>
            <p>{text}</p>
            <img src={imageUrl} alt="" />
        </div>
    );
}

class Section2 extends Component {
    state = {}
    render() {
        return (
            <div className="container-section2">
                <div className="categories">
                    <h2>Categories</h2>
                    <button class='view-btn'>View All Categories</button>
                </div>
                <div className="products">
                    <ProductComponent
                        text="Breakfast"
                        imageUrl={Breakfast}
                        name = "breakfast product"
                    />
                    <ProductComponent
                        text="Vegan"
                        imageUrl={Karam}
                        name = "vegan product"

                    />
                    <ProductComponent
                        text="Meat"
                        imageUrl={Meat}
                        name = "meat product"
                    />
                    <ProductComponent
                        text="Desert"
                        imageUrl={Cake}
                        name = "cake product"
                    />
                    <ProductComponent
                        text="Lunch"
                        imageUrl={Sendwich}
                        name = "lunch product"
                    />
                    <ProductComponent
                        text="Chocolate"
                        imageUrl={Choco}
                        name = "choco product"
                    />
                </div>
            </div>
        );
    }
}

export default Section2;