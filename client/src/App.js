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
//import Iframe from 'react-iframe'

class App extends Component{
     resp = [];
      constructor(props) {
        super(props);
       
        this.state = { 
         // videoURL: 'https://www.youtube.com/watch?v=XRH8pca1akY.mp4',
         responseCount:[],
          books:[],
          img:''
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
    render(){
      const books  = this.state.books;            
      const {img}= this.state;
      console.log(img.length)
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
          <Search/>          
          <CardList books={books} img={img}/>  
          <iframe src="http://localhost:9000/book/To%20Kill%20a%20Mockingbird%20-%20Lee%2C%20Nelle%20Harper"
        width="1000"
        height="3000"
        id="myId"
        allowFullScreen
       />
        </div>
    </div>
    </Router>
       )
        
    }
}

export default App;
