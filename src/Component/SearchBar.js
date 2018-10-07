import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { components } from 'react-select';
import axios from 'axios';
import SearchOption from './SearchOption';
import {store} from "../index";
class SearchBar extends React.Component{
  // const $ = require('jquery');
  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidMount(){
   //You can Implement Jquery here
  }
  handleOnChange = (value) =>{
   store.dispatch({type:"CLICKED OPTION DATA",data:value});
  }
  render(){
    const getOptions = (input) =>{
      return axios.get(`/allmeno.json`)
        .then(response => {
          var options = response.data.map((item)=>{
            return{
              value : item.dish_name,
              label : item.dish_name,
              price : item.price,
              hotel_name: item.hotel_name,
              type: item.type
            }
          });
          var regxinput = new RegExp(input,'i');
          var filtered_data = options.filter((item) => item.label.match(regxinput));
          return filtered_data;
        })
    };
    const DropdownIndicator = (props) => {
      return components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <i className="material-icons">search</i>
        </components.DropdownIndicator>
      );
    };
    return(
      <div className="search-container">
        <p className="searchbar-heading">Find your favourite dish from one Website...</p>
        <p className="allmeno-color" style={{fontSize:"18px"}}><blink>Note:You can Enter Multiple Entries...</blink></p>
            <div className="col-md-6 offset-md-3 target">
              <AsyncSelect
                components={{DropdownIndicator}}
                isMulti={true}
                loadOptions={getOptions}
                getOptionLabel = {(option)=><SearchOption option={option}/>}
                placeholder = "Enter Any Receipe Name"
                onChange = {(value) => {
                  this.handleOnChange(value);
                }}
              />
            </div>
      </div>
    );
  }
}

export default SearchBar;