import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var {title, message} = this.props,
            modalMarkup = ( 
                <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                    <h4>{title}</h4>
                    <p>{message}</p>
                    <p>
                        <button className="button hollow" data-close="">Okay</button>
                    </p>
                </div>
            ),
            modalEl = $(ReactDOMServer.renderToString(modalMarkup)),
            modal;

        // $(ReactDOM.findDOMNode(this)).html(modalEl);
        $('body').append(modalEl);

        modal = new Foundation.Reveal($('#error-modal'));

        modal.open();
    }
    render() {
        return <div></div>;
    }
}

ErrorModal.defaultProps = {
    title: 'Error'
};

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
};

export default ErrorModal;