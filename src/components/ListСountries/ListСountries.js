import React, {Component} from 'react'
import './ListСountries.scss'
import axios from 'axios'
import ItemCountries from "./ItemCountries/ItemCountries";

class ListCountries extends Component{

    state={
        countries:[]
    };

    async componentDidMount() {
        try {
             const response = await axios.get('https://date.nager.at/Api/v2/AvailableCountries');
             const countries = response.data;
              this.setState({
                  countries
              });
         } catch (e) {
            console.log(e)
        }
    }

    renderCountries() {
        return this.state.countries.map(country => {
            return (
                <ItemCountries
                    key={country.key}
                    id={country.key}
                    value={country.value}
                    onClick={this.props.onClick}
                />
            )
        })
    }
    render() {
        return (
            <div className='ListCountries'>
                <span>Страна</span>
                <ul>
                    { this.renderCountries() }
                </ul>
            </div>
            )
    }
}

export default ListCountries