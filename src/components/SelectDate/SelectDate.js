import React, {Component} from 'react'
import './SelectDate.scss'

import YearPicker from "react-year-picker";

class SelectDate extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log(date);
    }

    render() {
        return (
            <div className='SelectDate'>
                <span>Выбирайте год</span>
                <YearPicker onChange={this.handleChange} />
            </div>
    );
    }
}
export default SelectDate