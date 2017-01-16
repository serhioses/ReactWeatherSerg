import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Nav component</h2>
                <IndexLink to="/" className="link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" className="link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" className="link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>
        );
    }
}