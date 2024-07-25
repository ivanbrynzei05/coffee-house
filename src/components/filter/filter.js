import { v4 as uuidv4 } from 'uuid';

import { styled } from 'styled-components';

import data from '../../helpers/country-filters';

const FilterStye = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 14px;
        margin-right: 20px;
    }
    div {
        display: flex;
        button {
            min-width: 75px;
            height: 30px;
            font-size: 12px;
            color: #000;
            background-color: #fff;
            border: none;
            box-shadow: 0px 0px 10px 0px #00000030;
            margin-right: 5px;
            &:first-child {
                border-radius: 5px 0px 0px 5px;
            }
            &:last-child {
                border-radius: 0px 5px 5px 0px;
            }
            &.active {
                border: 1px solid #000;
            }
        }
    }
        @media (max-width: 768px) {
        span {
            font-size: 12px;
            margin-right: 20px;
        }
        div {
            button {
                min-width: 50px;
                height: 25px;
                font-size: 8px;
            }
        }
    }
`
const filterAll = {id: uuidv4(), name: 'All'}
let elements = data;

elements.unshift(filterAll)

function Filter(props) {
        elements = data.map(item => {
        const clazz = props.filter.toLowerCase() === item.name.toLowerCase();

        const className = clazz ? 'active' : ''
            return (
                <button
                    type='button'
                    key={item.id}
                    onClick={() => props.onFilter(item.name)}
                    className={className}
                    >
                        {item.name}
                    
                </button>
            )
        })
    
        return (
            <FilterStye>
                <span>Or filter</span>
                <div>
                   {elements}
                </div>
            </FilterStye>
        );
}

export default Filter;