import './MovieCard.css'
import React from 'react';

export default class MovieCard extends React.Component {
    render() {
        const { title, type } = this.props;
        console.log(title);
        return (
            <div className="moviecard">
                <div className="moviecard-body">
                    <h5 className="moviecard-title">{title}</h5>
                    <h5 className="moviecard-type">{type}</h5>
                </div>
            </div>
        )
    }
}