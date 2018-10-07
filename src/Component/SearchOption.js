import React from 'react';
const SearchOption = ({option}) => {
    return(
      <a href="#table-head" className="select-option">
       <strong>
          <div className="search-option" style={{padding:"0px"}}>
           <span style={{float:"left"}}>{option.hotel_name}</span>
            <span style={{float:"inherit"}}>{option.value}</span>
            <span style={{float:"right"}}>{option.price}</span>
          </div>
        </strong>
      </a>
    );
}

export default SearchOption;