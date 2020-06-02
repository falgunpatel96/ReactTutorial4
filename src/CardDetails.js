import React from 'react';
export default class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetail: [],
        };
    }

    render() {
        const { movieDetail } = this.props;
        // console.log(title);
        return (
            <div className="CardDetails" style={{ width: '18rem' }}>
                <h5 className="card-title">{movieDetail.title}</h5>
                <h5 className="card-title">{movieDetail.type}</h5>
                <h5 className="card-title">{movieDetail.country}</h5>
                <h5 className="card-title">{movieDetail.release_year}</h5>
                <h5 className="card-title">{movieDetail.duration}</h5>
                <p className="card-text">{movieDetail.description}</p>
            </div>
        )
    }
}