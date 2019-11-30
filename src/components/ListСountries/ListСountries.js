import React, {Component} from 'react'
import './ListСountries.scss'

class ListCountries extends Component{

    async componentDidMount() {
        try {
        //     const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
        //     const quiz = response.data
        //
        //     this.setState({
        //         quiz,
        //         loading: false
        //     })
         } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (<div>ListCountries</div>)
    }
}

export default ListCountries