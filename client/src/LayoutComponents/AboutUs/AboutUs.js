
import React from 'react';
import './AboutUs.css';
import team from '../../images/team.svg';


const AboutUs = () => {
    return (
        <div>
         <section className='container'>
             <div className='info'>
             <p className='title'>About Us </p>
                 <p className='description'> GSG was launched with the recognition that<br/> consistent access to
                  high-speed fiber internet<br/> could allow Gaza’s highly educated youth to<br/>
                   side-step many of the current restrictions on <br/>the movement of people and goods
                    that <br/> hamper the Gazan economy.</p>

                    <div className='botton'>
                    <a
            href='https://gazaskygeeks.com/about-us/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='learnMore-btn'>Learn More</button>
          </a>
      </div>
             </div>  
             <img className='team-img' src={team} alt='' />        

         </section>
           </div>
    );
}

export default AboutUs;
