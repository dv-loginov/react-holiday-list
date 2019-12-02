import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import Sidebar from "./containers/Sidebar/Sidebar";
import ListHolidays from "./components/ListHolidays/ListHolidays";
import SelectDate from "./components/SelectDate/SelectDate";
import ListCountries from "./components/ListСountries/ListСountries";
import InfoRequest from "./components/InfoRequest/InfoRequest"
import Info from "./containers/Info/Info"
class App extends Component{
    state={
        year: false,
        countryCode: false,
        countryName: false
    };

    isValid(){
        return !!(this.state.year && this.state.countryCode);
    };

    onChangeYearHandler=(date)=>{
        this.isValid()
          ?this.setState({year:date, countryCode: false,countryName:false})
          :this.setState({year:date});
    };

    onChangeCountryHandler=(key,name)=>{
        this.isValid()
            ?this.setState({countryCode:key, year: false,countryName:name})
            :this.setState({countryCode:key,countryName:name});
    };

    render() {
        return(
            <Layout>
                <Header
                    header='Празничные дни со всего мира'
                />
                <Content>
                    <Sidebar>
                        <SelectDate
                            onChange={(date)=>this.onChangeYearHandler(date)}
                        />
                        <ListCountries
                            onClick={(key,name)=>this.onChangeCountryHandler(key,name)}
                        />
                    </Sidebar>
                    <Info>
                        <InfoRequest
                            year={this.state.year}
                            countryCode={this.state.countryName}
                        />
                        {this.isValid()
                            ? <ListHolidays
                                year={this.state.year}
                                countryCode={this.state.countryCode}
                            />
                            : null
                        }
                    </Info>
                </Content>
            </Layout>
        );
    }
}

export default App;
