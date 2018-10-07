import React from 'react';



class UploadFile extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container" style={{marginTop:"10rem"}}>
        <form>
          <div className="row" style={{marginBottom:"3rem"}}>
            <div className="col-md-12 offset-1">
              <div className="form-check has-success">
                <label className="form-check-label" style={{marginBottom:"1rem"}}>
                  <input type="checkbox" className="form-check-input" id="checkboxSuccess" value="option1" />
                  I Agree to Not Receive the Money ie 50 INR if theres existing menu of the same restaurant in database
                </label><br />
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" id="checkboxSuccess" value="option1" />
                  I Agree to Get Money Via Paytm.
                </label>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <input className="form-control" placeholder="Enter the Name of the Restaurant"/>
            </div>
            <div className="col-md-4">
              <input className="form-control" placeholder="Enter You PhoneNumber" type="number"/>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="material-icons">attach_file</i></span>
                </div>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                  <label className="custom-file-label" htmlFor="inputGroupFile01">Upload Your File here</label>
                </div>
                <button className="btn btn-md btn-outline-danger">Upload</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default UploadFile;