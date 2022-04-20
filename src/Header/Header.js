import './Header.css';
import { Component } from 'react';

export default class Header extends Component{

    constructor(props) {
        super();
        this.props = props;
        this.store = props.store;
    }
    componentDidMount() {
        return;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        return;
    }

    componentWillUnmount() {
        return;
    }

    render() {
        return (
            <div className="App-Header">
                {this.store.header }
            </div>
        );
    }
}
