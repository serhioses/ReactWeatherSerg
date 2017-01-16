import React from 'react';
import Nav from 'Nav';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Nav/>
                <h2>Main component</h2>
                {this.props.children}
            </div>
        );
    }
}