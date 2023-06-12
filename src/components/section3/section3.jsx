import React, { Component } from 'react'
import './section3.scss'
import Gamburger from './image 26.png'
import Fish from './fish meat.png'
import Banan from './banan.png'
import Salad from './salad.png'
import Meatballs from './meatballs.png'
import AD from './healthy-food.png'
import Pancake from './pancake.png'
import Chicken from './chicken.png'
import Spaget from './spagetti.png'
import Unlike from './unlike.png'
import Liked from './liked.png'
import Fork from './ForkKnife.png'
import Timer from './Timer.png'



export function ProductCreator({ imageUrl, text, foodType, like }) {
    return (
        <div className="card">
            <img src={imageUrl} alt="" className='main'/>
            <p className='card-text'>{text}</p>
            <div className="timer-fork">
                <img src={Timer} alt=""/>
                <p>30 minutes</p>
                <img src={Fork} alt="" className='fork'/>
                <p>{foodType}</p>
            </div>
            <img src={like} alt="" className='like' />
        </div>
    )

}

class Section3 extends Component {
    render() {
        return (
            <div className="container-section3">
                <h2>Simple and tasty recipes</h2>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="card-box">
                    <ProductCreator
                        imageUrl={Gamburger}
                        text='Big and Juicy Wagyu Beef Cheeseburger'
                        foodType="Snack"
                        like={Liked}
                    />
                    <ProductCreator
                        imageUrl={Fish}
                        text='Fresh Lime Roasted Salmon with Ginger Sauce'
                        foodType="Fish"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Banan}
                        text='Strawberry Oatmeal Pancake with Honey Syrup'
                        foodType="Breakfst"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Salad}
                        text='Fresh and Healthy Mixed Mayonnaise Salad'
                        foodType="Healthy"
                        like={Liked}
                    />
                    <ProductCreator
                        imageUrl={Meatballs}
                        text='Chicken Meatballs with Cream Cheese'
                        foodType="Meat"
                        like={Unlike}
                    />
                    <div className="ad">
                        <span>Don’t forget to eat healthy food</span>
                        <img src={AD} alt="" />
                        <p>www.foodieland.com</p>
                    </div>
                    <ProductCreator
                        imageUrl={Pancake}
                        text='Fruity Pancake with Orange & Blueberry'
                        foodType="Sweet"
                        like={Liked}
                    />
                    <ProductCreator
                        imageUrl={Chicken}
                        text='The Best Easy One Pot Chicken and Rice'
                        foodType="Snack"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Spaget}
                        text='The Creamiest Creamy Chicken and Bacon Pasta'
                        foodType="Noodles"
                        like={Unlike}
                    />
                </div>
            </div>
        );
    }
}

export default Section3;
