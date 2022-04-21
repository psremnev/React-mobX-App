import './App.css';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Component } from "react";

export default class App extends Component {
	theme = 'Default_Theme'
    render() {
        const appClass = `App ${this.theme}`
        return (
            <div className={appClass}>
                <Header />
                <Content />
            </div>
        );
    }
}
