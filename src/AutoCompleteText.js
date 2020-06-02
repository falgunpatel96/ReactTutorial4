import React from 'react';
import './AutoCompleteText.css';
import MovieCard from './MovieCard';
// import MovieInfo from './MovieInfo';
import { Link } from 'react-router-dom'

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        // console.log(e.target.value)
        const value = e.target.value;
        let suggestions = [];
        if (value.trim().length > 0) {
            this.apiCallMovie(value.trim());
        }
        this.setState(() =>
            (
                { suggestions, text: value }
            )
        );

    }

    

    async apiCallMovie(value) {
        try {
            const res = await fetch("https://api-tutorial4.herokuapp.com/movies?title_like=.*" + value + ".*")
            const suggestions = await res.json()
            this.setState({ suggestions })

        } catch (err) {
            console.log(err)
        }
        
    }

    render() {
        const { suggestions, text } = this.state;
        return (
            <React.Fragment>
                <div className="AutoCompleteText mt-5 ml-auto mr-auto" style={{width: '600px'}}>
                    <input value={text} onChange={this.onTextChanged}  type="text" />
                </div>
                <div class="row ml-auto mr-auto">

                    {suggestions.length ?
                        suggestions.map(({ title, type, show_id }, key) =>
                            <div class="col col-sm-3 mt-3">
                                <Link to={`/movie-info/${show_id}`} >
                                    <MovieCard key={key} title={title} type={type}/>
                                </Link>
                            </div>
                        )
                        : null}
                </div>
            </React.Fragment>


        )
    }
}