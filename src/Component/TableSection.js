import React from 'react';
import { connect } from 'react-redux'

class TableSection extends React.Component{
  constructor(props){
    super(props);
  }
  handleQuantityChange = (event) =>{
    debugger;
  }
  render(){
    return(
      <table className="table table-hover">
        <thead className="table-head" id="table-head">
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
        {this.props.tableData.map(function(item,key){
          return(
            <tr key={key}>
              <td>{key+1}</td>
              <td style={{textTransform:"capitalize"}}>{item.hotel_name}</td>
              <td style={{textTransform:"capitalize"}}>{item.label}</td>
              <td>{item.price}</td>
              <td><input type="number"/></td>
              <td>0</td>
            </tr>
          )
        })}
        </tbody>
      </table>

    );
  }
}
const mapStateToProps = (state) => {
  return{
    number:state.number,
    tableData: state.tableData
  }
}
export default connect(mapStateToProps)(TableSection);