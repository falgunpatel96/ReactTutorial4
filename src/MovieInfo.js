import React from 'react';
import CardDetails from './CardDetails';
import { link } from 'react-router-dom';

export default class MovieInfo extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            movie_id : props.match.params.show_id,
            movieDetail : {},
        };
    }

    componentDidMount(){
        this.getMovieInfo()
    }

    async getMovieInfo() {
        try {
            const result = await fetch("https://api-tutorial4.herokuapp.com/movies?show_id="+this.state.movie_id)
            const [movieDetail] = await result.json()
            this.setState({ movieDetail })
        } catch (error) {
            console.log(error)
        }
    }
    
    render() {
        // this.getMovieInfo()

        return (
            <div>
                <CardDetails movieDetail={this.state.movieDetail} />
            </div>
        )
    }
}