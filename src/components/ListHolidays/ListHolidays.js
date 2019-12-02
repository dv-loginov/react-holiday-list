import React,{Component} from 'react'
import './ListHolidays.scss'
import axios from 'axios'
import ItemHoliday from './ItemHoliday/ItemHoliday'

class ListHolidays extends Component{

    state={
        holidays:[]
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`https://date.nager.at/Api/v2/PublicHolidays/${this.props.year}/${this.props.countryCode}`);
            const holidays = response.data;
            this.setState({
                holidays
            });
        } catch (e) {
            console.log(e)
        }
    }

    renderHolidays() {
        return this.state.holidays.map(holiday => {
            return (
                <ItemHoliday
                   key={Math.random()}
                   date={holiday.date}
                   name={holiday.name}
                   localName={holiday.localName}
                   launchYear={holiday.launchYear}
                />
            )
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className='ListHolidays'>
                <ul>
                    { this.renderHolidays() }
                </ul>
            </div>
        )
    }
}

export default ListHolidays