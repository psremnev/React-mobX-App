import './Header.css';
import { Component } from 'react';
import { observer } from 'mobx-react'
import { makeObservable, observable } from 'mobx'

export const Header = observer(class extends Component {
    header = 'Зеленый';

    constructor(props) {
        super(props);
        makeObservable(this, {
            header: observable
        })
    }

    changeHeader = () => {
        this.header = this.header === 'Зеленый' ? 'Красный' : 'Зеленый';
    }

    render() {
        return (
            <div className="App-Header" onClick={this.changeHeader}>
                {this.header}
            </div>
        );
    }
})
