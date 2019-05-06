import React,{Component} from 'react';
import './App.css';
import Naviagtion from './components/Navigation/Navigation';
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
          books:[],
          chunks:[]
        };
    }
   
    componentWillMount() {
        fetch("http://localhost:9000/Home")
            .then(response => response.json())
            .then(bookdata => this.setState({ books: bookdata.file}));  
            //.then(files => {alert(files)});  

            fetch("http://localhost:9000/chunk")
            .then(response => response.json())
            .then(imgdata=>{alert(imgdata.img)})
           // .then(imgdata => this.setState({ chunks: imgdata.img}));  
            
    }
    render(){
      const books  = this.state.books;

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
          <CardList books={books}/>  
        </div>
        

    </div>
    </Router>
       )
        
    }
}

export default App;
