import React,{Component} from 'react'
import './InfoHolidays.scss'
import axios from 'axios'

class InfoHolidays extends Component{

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

    render() {
        console.log(this.state);
        return this.state.holidays.map(holiday => {
            return (
                <div>
                    <span>{holiday.date}</span>
                    <span>{holiday.name}</span>
                    <span>{holiday.localName}</span>
                </div>
            )
        })

    }
}

export default InfoHolidays