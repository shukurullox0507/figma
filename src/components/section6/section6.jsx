import React, { Component } from 'react'
import './section6.scss'
import Unlike from './unlike.png'
import First from './image 26.png'
import Two from './2.png'
import Three from './3.png'
import Four from './4.png'
import Five from './5.png'
import Six from './6.png'
import Seven from './7.png'
import Eight from './8.png'
import Liked from './liked.png'
import Timer from './Timer.png'
import Fork from './ForkKnife.png'
import Left from './kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'
import Rucola from './rucola-png.png'
import Right from './Photo-plate.png'

function ProductCreator({ imageUrl, text, foodType, like }) {
    return (
        <div className="card">
            <img src={imageUrl} alt="" className='main' />
            <p className='card-text'>{text}</p>
            <div className="timer-fork">
                <img src={Timer} alt="" />
                <p>30 minutes</p>
                <img src={Fork} alt="" className='fork' />
                <p>{foodType}</p>
            </div>
            <img src={like} alt="" className='like' />
        </div>
    )

}

class Section6 extends Component {
    render() {
        return (
            <div className="container-section6">
                <div className="text-box">
                    <h2>Try this delicious recipe <br /> to make your day</h2>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>

                <div className="card-box">
                    <ProductCreator
                        imageUrl={First}
                        text='Mixed Tropical Fruit Salad with Superfood Boosts '
                        foodType="Snack"
                        like={Liked}
                    />
                    <ProductCreator
                        imageUrl={Two}
                        text='Big and Juicy Wagyu Beef Cheeseburger'
                        foodType="Fish"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Three}
                        text='Healthy Japanese Fried Rice with Asparagus'
                        foodType="Breakfst"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Four}
                        text='Cauliflower Walnut Vegetarian Taco Meat'
                        foodType="Healthy"
                        like={Liked}
                    />
                    <ProductCreator
                        imageUrl={Five}
                        text='Rainbow Chicken Salad with Almond Honey Mustard Dressing'
                        foodType="Meat"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Six}
                        text='Barbeque Spicy Sandwiches with Chips '
                        foodType="Sweet"
                        like={Liked}
                    />
                    <ProductCreator
                        imageUrl={Seven}
                        text='Firecracker Vegan Lettuce Wraps - Spicy! '
                        foodType="Snack"
                        like={Unlike}
                    />
                    <ProductCreator
                        imageUrl={Eight}
                        text='Chicken Ramen Soup with Mushroom '
                        foodType="Noodles"
                        like={Unlike}
                    />
                </div>

                <div className="inbox">
                    <h2>Deliciousness to your inbox</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div className="input">
                        <input type="text" placeholder='Search....'/>
                        <button>Subscribe</button>
                    </div>
                    <img src={Left} alt="" />
                    <img src={Right} alt="" />
                    <img src={Rucola} alt="" />
                </div>
            </div>
        );
    }
}

export default Section6;