import React from 'react';


class Api extends React.Component {
    state = {
        Starwars : []
    }
        getStarwars = () => {
            fetch("https://akabab.github.io/starwars-api/api/id/3.json")
                .then(res => res.json())
                //.then(res => console.log(res))
                .then(res => this.setState({Starwars: res}))
        }

        componentDidMount() {
            this.getStarwars()
        }
        render() {
            return (
                <div>
                {this.state.Starwars.name}
                <img src={this.state.Starwars.image} />
                </div>
               
            )

        }
    }
        export default Api;
