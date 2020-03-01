import React, {Component} from 'react';

import './App.css';
import Container from "./components/container/container.component";
import AddCell from "./components/add-cell/add-cell.component";


class App extends Component {

    render() {
        return (
            <>
                <Container/>
                <AddCell/>
            </>
        )
    }
}

export default App;

