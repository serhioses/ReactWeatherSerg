import React from 'react';

export default class WeatherMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h3 className="text-center">It's {this.props.temp} in {this.props.location}</h3>
        );
    }
}