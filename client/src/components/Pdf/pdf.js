import React, { Component } from 'react';
//import { Document, Page } from 'react-pdf';
 
class BookPdf extends Component {
  constructor(props){
    super(props);
    this.state = {
      // numPages: null,
      // pageNumber: 1,
      bookname:''
    }
  }

  
  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages });
  // }
 
  render() {
    // const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <iframe src="http://localhost:9000/book/To%20Kill%20a%20Mockingbird%20-%20Lee%2C%20Nelle%20Harper?page=hsn#toolbar=0"
        width="1000"
        height="1333"
        id="myId"
        allowFullScreen
       />
       <div>

       <button type="button" class="btn btn-success">Download</button>
        </div>      
      </div>
      
    );
  }
}


export default BookPdf;