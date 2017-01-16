import React from 'react';

export default class WeatherMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>It's {this.props.temp} in {this.props.location}</p>
        );
    }
}