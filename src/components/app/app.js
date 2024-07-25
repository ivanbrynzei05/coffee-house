import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/header";
import Home from "../../pages/home/home";
import OurCoffee from "../../pages/our-coffee/our-coffee";
import { ContainerXLarge } from "../container/container";
import AboutCoffee from "../../pages/about-coffee/about-coffee";
import ForYourPleasure from "../../pages/for-your-pleasure/for-your-pleasure";
import Footer from "../footer/footer";

import GlobalStyle from "../../styles/GlobalStyle";

import data from "../../helpers/coffee-data";

class App extends Component {
    state = {
        page: 'main-page',
        data,
        term: '',
        filter: 'all'
    }

    getBestItems(data) {
        return data.filter(item => item.best)
    }

    searchData(items, term) {
        if (term.length === 0) {
            return items;
        } else {
            return items.filter(item => {
                return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
            })
        }
    }

    onSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterData(items, filter) {
        if (filter.toLowerCase() !== 'all') {
            return items.filter(item => {
                return item.country.toLowerCase() === filter.toLowerCase()
            })
        } else {
            return items
        }
    }

    onFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    onSetItem(props) {
        console.log(props)
    }

    render() {
        const { data, term, filter } = this.state
        const bestCoffeeItems = this.getBestItems(data, term);
        const visibleItems = this.filterData(this.searchData(data, term), filter)
        return (
            <div className="App">
                <GlobalStyle />
                <Router basename="/coffee-house">
                    <ContainerXLarge>
                        <Header />
                    </ContainerXLarge>
                    <Routes>
                        <Route path="/" element={
                            <Home
                                data={bestCoffeeItems}
                            />} />

                        <Route path="/our-coffee" element={
                            <OurCoffee
                                onSearch={(term) => this.onSearch(term)}
                                onFilter={(filter) => this.onFilter(filter)}
                                filter={filter}
                                data={visibleItems}
                            />} />

                        <Route path="/about-coffee/:id" element={
                            <AboutCoffee />} />

                        <Route path="/for-your-pleasure" element={
                            <ForYourPleasure
                                data={data}
                            />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default App;
