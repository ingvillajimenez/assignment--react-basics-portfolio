import React, { Component } from 'react';
import juan from '../images/juan.jpg';

class PortfolioFixed extends Component {
    render() {
        return(
            <div class="portfolio-fixed">
                <img src={juan}/>
                <h1>Juan Villa</h1>
                <p>Web Developer | Network Engineer</p>
            </div>
        );
    }
}

export default PortfolioFixed;