import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {

    render()
    {
        return (
            <div className="Card">
                <div className="Heading">{this.props.heading}</div>
                {this.props.value ? <div className="Value">{this.props.value}</div> : ''}
                {this.props.imgSrc ?  <img src={this.props.imgSrc} className="Image" alt="logo" /> : ''}

            </div>
        );
    }
}
Card.propTypes = {
    heading: PropTypes.String,
    value: PropTypes.String,
    imgSrc: PropTypes.String
};
export default Card;