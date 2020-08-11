import React from 'react';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';//require file index.js in component
import style from './App.module.css';

import { fetchData } from './api';//tự động đi lấy file index
import coronaImage from './images/image.png';
class App extends React.Component{
    state = {
        data: {},
        country: 'Vietnam',
    }
    async componentDidMount(){
        const fetchedData = await fetchData(this.state.country);
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) =>{
        //fetch the data
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});

        //set the state
    }
    render (){
        const { data, country } = this.state;
        return (
            <div className={style.container}>
                <img src={coronaImage} className={style.image} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;