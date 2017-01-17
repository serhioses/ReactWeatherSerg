import React from 'react';
import WeatherMessage from 'WeatherMessage';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            isLoading: false
        };
    }
    handleSearch(location) {
        var self = this;
        
        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            console.log(errorMessage);
            self.setState({
                isLoading: false
            });
        });
    }
    render() {
        var {isLoading, temp, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
}