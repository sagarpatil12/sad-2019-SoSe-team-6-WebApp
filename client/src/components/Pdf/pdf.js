import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 
class BookPdf extends Component {
  constructor(props){
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      bookname:''
    }
  }

  
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
     const { pageNumber, numPages } = this.state;
    const { data } = this.props;
    
    return (
      <div class="pa4 dib">     
        <iframe src={`http://localhost:9000/book/${data}`}
        width="1000"
        height="1333"
        id="myId" className="pdf"/>   
      </div>   
        
    );
  }
}


export default BookPdf;