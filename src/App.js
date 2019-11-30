import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import Sidebar from "./containers/Sidebar/Sidebar";
import Info from "./containers/Info/Info";
import SelectDate from "./components/SelectDate/SelectDate";
import ListCountries from "./components/ListСountries/ListСountries";

class App extends Component{
    state={
        year: '',
        countryCode: ''
    };

    onYarnHandler=(date)=>{
      console.log(this.state);
      console.log(date);
      this.setState({year:date});
    };

    render() {
        console.log(this.state);
        return(
            <Layout>
                <Header
                    header='Празничные дни со всего мира'
                />
                <Content>
                    <Sidebar>
                        <SelectDate
                            onChange={(date)=>this.onYarnHandler(date)}
                        />
                        <ListCountries/>
                    </Sidebar>
                    <Info>Info</Info>
                </Content>
            </Layout>
        );
    }
}

export default App;
