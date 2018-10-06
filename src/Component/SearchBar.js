import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { components } from 'react-select';
import axios from 'axios';
import SearchOption from './SearchOption';
import {store} from "../index"
class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange = (value) =>{
   this.setState({data: value})
    console.log("the data is",this.state.data);
  }
  handlechutiya = () => {
    store.dispatch({type: "INCREMENT"})
  }
  render(){
    const getOptions = (input) =>{
      // console.log("input:"+input);
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
          // console.log(options);
          var regxinput = new RegExp(input,'i');
          // console.log(regxinput);
          var filtered_data = options.filter((item) => item.label.match(regxinput));
          console.log(filtered_data,":Filtered_data");
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
        <p className="allmeno-color"> Note:You can Enter Multiple Entries...</p>
            <div className="col-md-6 offset-md-3">
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
        <button onClick={this.handlechutiya}>sumanth please click here.</button>
      </div>

    );
  }
}

export default SearchBar;