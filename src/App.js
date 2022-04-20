import './App.css';
import Header from './Header/Header'
import Content from './Content/Content'
import { makeObservable, observable } from 'mobx'
import {Component} from "react";

class App extends Component {
    header = "Привет";

    constructor() {
        super();
        this.store = makeObservable(this, {header: observable})
    }
    changeHeader() {
        this.store.header = "Пока"
    }

    render() {
        return (
            <div className="App" onClick={ this.changeHeader.bind(this) }>
                <Header store={this.store} />
                <Content/>
            </div>
        );
    }
}

export default App;
