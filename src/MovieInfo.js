import React from 'react';

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
        const {movieDetail} = this.state;
        return (
            <div> 
                <Card className="card text-center mx-auto" style={{width: '600px', marginTop: '75px'}}>
                <Card.Header className="card-header bg-info">
                    <b>{movieDetail.type}</b>
                </Card.Header>
                <Card.Body className="card-body">
                    <Card.Title className="card-title"> {movieDetail.title} </Card.Title>
                    <Card.Text className="card-text"> <b> Description: </b> {movieDetail.description} </Card.Text>        
                </Card.Body>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <b> Cast: </b> {movieDetail.cast} </li>
                    <li class="list-group-item"> <b> Rating: </b> {movieDetail.rating} </li>
                    <li class="list-group-item"> <b> Duration: </b> {movieDetail.duration} </li>
                    <li class="list-group-item"> <b> Release Date: </b>  {movieDetail.date_added} </li>
                </ul>
                </Card>
            </div>
        )
    }
}