import React, { Component } from 'react';
import { styled } from 'styled-components';


const SearchStye = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 14px;
        margin-right: 20px;
    }
    input {
        width: 180px;
        height: 30px;
        border: none;
        box-shadow: 0px 0px 10px 0px #00000030;
        text-align: center;
        border-radius: 5px;
        font-size: 14px;
    }
    @media (max-width: 768px) {
        span {
            font-size: 12px;
            margin-right: 20px;
        }
        input {
            width: 100px;
            height: 25px;
            font-size: 10px;
        }
    }
`
class Search extends Component {
    state = {
        term: ''
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onSearch(term)
    }
    render() {
        return (
            <SearchStye>
                <span>Lookiing for</span>
                <input
                    type="text" 
                    placeholder='start typing here...'
                    value={this.state.term}
                    onChange={this.onSearch}/>
            </SearchStye>
        );
    }
}

export default Search;