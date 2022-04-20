import './App.css';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Component } from "react";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Content />
            </div>
        );
    }
}
