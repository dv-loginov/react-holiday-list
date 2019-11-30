import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import Sidebar from "./containers/Sidebar/Sidebar";
import Info from "./containers/Info/Info";
import SelectDate from "./components/SelectDate/SelectDate";
import ListCountries from "./components/ListСountries/ListСountries";

function App() {
  return (
   <Layout>
     <Header
        header='Празничные дни со всего мира'
     />
       <Content>
           <Sidebar>
              <SelectDate/>
              <ListCountries/>
           </Sidebar>
           <Info>Info</Info>
       </Content>

   </Layout>
  );
}

export default App;
