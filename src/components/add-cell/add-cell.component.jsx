import React, {Component} from 'react';
import './add-cell.styles.scss';
import {connect} from "react-redux";
import {addCell} from "../../redux/section/section.actions";


class AddCell extends Component {

    state = {
        value: '',
    };

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>

                <p>Create new Cell</p>
                <input type="text"
                       placeholder={'name'}
                       value={this.state.value}
                       onChange={e => this.handleChange(e)}
                />
                <input type="submit" value="Create"/>
            </form>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addCell(this.state.value);
        this.setState({value: ''})
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
}


export default connect(null, {addCell})(AddCell);