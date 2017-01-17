import React from 'react';

export default class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e) {
        var location;

        e.preventDefault();

        location = this.refs.location.value;

        if (location) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" placeholder="Enter city name" ref="location"/>
                </div>
                <div>
                    <button className="button expanded hollow" type="submit">Get Weather</button>
                </div>
            </form>
        );
    }
}