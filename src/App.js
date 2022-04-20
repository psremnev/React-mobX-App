import './App.css';
import Header from './Header/Header'
import Content from './Content/Content'
import { observer } from 'mobx-react-lite'
import {Component} from "react";

class App extends Component {
    header = { message: "Привет"}

    changeHeader() {
        this.setState()
        this.header = { message: "Пока"}
    }

    render() {
        const HeaderView = observer(({title}) => <Header title={title}/>)
        return (
            <div className="App" onClick={ this.changeHeader.bind(this) }>
                <HeaderView title={this.header} />
                <Content/>
            </div>
        );
    }
}

export default App;
