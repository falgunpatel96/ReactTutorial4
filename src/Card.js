import './Card.css'
import React from 'react';

export default class Card extends React.Component {
    render() {
        const { title, type } = this.props;
        console.log(title);
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-type">{type}</h5>
                </div>
            </div>
        )
    }
}