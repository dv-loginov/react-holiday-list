import React from 'react'
import './SelectDate.scss'

import YearPicker from "react-year-picker";

const  SelectDate = props => {
        return (
            <div className='SelectDate'>
                <span>Выбирайте год</span>
                <YearPicker onChange={props.onChange} />
            </div>
    );
}

export default SelectDate