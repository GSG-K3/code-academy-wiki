import React from "react";
import computer from '../../images/home-illustrations/computer.svg';
import girl from '../../images/home-illustrations/girl.png';
import boy from '../../images/home-illustrations/boy.png';
import technologies from '../../images/home-illustrations/technologies.png';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <section className="home-container">
                <div className="home-intro">
                    <p className="page-title"><b>Gaza Sky Geeks</b><br /> Code Academy Wiki</p>
                    <p className="description">The GSG Code Academy is Palestine’s first immersive, 6-month career accelerating web development bootcamp.</p>
                    <a href="https://gazaskygeeks.com/code/" target="_blank" rel="noopener noreferrer"><button className="join-btn">Join Us</button></a>
                </div>
                <img src={computer} alt="" />
            </section>

            <section className="cohorts-container">
                <span className='cohorts-title'>Code Academy Cohorts</span>
                <div className="cohorts">
                    <img src={girl} alt="" />
                    <div className="cohorts-btns">
                        <button className="cohort-btn">Gaza</button>
                        <button className="cohort-btn">Khalil</button>
                    </div>
                    <img src={boy} alt="" />
                </div>
            </section>

            <section className="technologies">
                <span className='technologies-title'>Technologies Used in Our Academy</span>
                <img src={technologies} alt="" />
            </section>
        </div>
    );
}
export default Home;
