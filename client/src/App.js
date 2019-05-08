import React,{Component} from 'react';
import './App.css';
//import Naviagtion from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import CardList from './components/CardList/CardList'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


class App extends Component{
     resp = [];

      constructor(props) {
        super(props);
       
        this.state = { 
         // videoURL: 'https://www.youtube.com/watch?v=XRH8pca1akY.mp4',
         responseCount:[],
          books:[],
          img:'',
          searchfield:''
        };

    }

    arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
  };
   
    componentWillMount() {
        fetch("http://localhost:9000/Home")
            .then(response => response.json())
            .then(bookdata => this.setState({ books: bookdata.file}));  
            //.then(files => {alert(files)});   

           fetch("http://localhost:9000/bookimg")
           .then(response => response.json())
            .then((imgdata) => {
              var base64Flag = 'data:image/jpeg;base64,';

              var imgstring=[]
              for(var i=0;i<imgdata.img.length;i++)
              {
             var imageStr = this.arrayBufferToBase64(imgdata.img[i].data)
                  imgstring.push(base64Flag + imageStr)
            
                }
                this.setState({
                  img: imgstring
              })
             })
            
    }
    onSearchChange = (event) => {
      // console.log(event.target.value);
      this.setState({ searchfield: event.target.value})

    }
    
    render(){
      const filteredBooks = this.state.books.filter(book =>{
        return book.filename.toLowerCase().includes(this.state.searchfield.toLowerCase());   
      })
      
      const books  = this.state.books;  

          
      const {img}= this.state;
      // console.log(img.length)
    //   const image = function (filteredBooks, books, filename) {
    //     for(var i = 0; i < books.length; i++) {
    //         if(books[i][filename] === filteredBooks) {
    //             return i;
    //         }
    //     }
    //     return -1; //to handle the case where the value doesn't exist
    // } 
    //   console.log("couhjuuhzuhuhih"+image);
      //console.log(img.)
      return !books.length ?
      <h1>Loading</h1>:
       (
      <Router>
      <div>
        {/* <Naviagtion/> */}
        <Navbar />
        <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>       
          <div >
          <Logo/>
          <Search searchChange={this.onSearchChange}/>          
          <CardList books={filteredBooks} img={this.state.img}/>  
        </div>
    </div>
    </Router>
       )
        
    }
}

export default App;
