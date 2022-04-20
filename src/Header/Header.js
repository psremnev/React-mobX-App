import './Header.css';
import { Component } from 'react';
import { observer } from 'mobx-react'
import { makeObservable, observable } from 'mobx'

export const Header = observer(class extends Component {
    header = 'Зеленый';
    color = 'green'

    constructor(props) {
        super(props);
        makeObservable(this, {
            header: observable,
            color: observable
        })
    }

    changeHeader = () => {
        this.header = this.header === 'Зеленый' ? 'Красный' : 'Зеленый';
        this.color = this.color === 'green' ? 'red' : 'green';
    }

    render() {
        const color = { backgroundColor: this.color }
        return (
            <div className="App-Header" style={color} onClick={this.changeHeader}>
                {this.header}
            </div>
        );
    }
})
