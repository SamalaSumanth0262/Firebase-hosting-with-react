import React from 'react';


class TableSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subtotal: 0
    }
  }
  render(){
    console.log("im in table section:"+this.props.data);
    return(
      <table className="table table-hover" style={{marginTop:"15rem"}}>
        <thead className="table-head">
        <tr>
          <th scope="col">S.no</th>
          <th scope="col">Hotel Name</th>
          <th scope="col">Recipe Name</th>
          <th scope="col">Price</th>
          <th scope="col">No.Quantity</th>
          <th scope="col">Total</th>
        </tr>
        </thead>
        <tbody>
        {this.props.data.map(function(item,key){
          return(
            <tr key={key}>
              <td>{key+1}</td>
              <td>{item.hotel_name}</td>
              <td>{item.label}</td>
              <td>{item.price}</td>
              <td><input type="number" /></td>
              <td>{this.state.subtotal}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    );
  }
}

export default TableSection;