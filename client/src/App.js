import React,{Component} from 'react';
import './App.css';
import Naviagtion from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import CardList from './components/CardList/CardList'
class App extends Component{
     resp = [];
      constructor(props) {
        super(props);
       
        this.state = { 
         // videoURL: 'https://www.youtube.com/watch?v=XRH8pca1akY.mp4',
          books:[]
        };
    }
   
    componentWillMount() {
        fetch("http://localhost:9000/Home")
            .then(response => response.json())
            .then(bookdata => this.setState({ books: bookdata.file}));  
            //.then(files => {alert(files)});  
       
    }
    render(){
      const books  = this.state.books;

      return !books.length ?
      <h1>Loading</h1>:
       (
      <div>
        <Logo/>
        <Search/>
        <Naviagtion/>
        <div >
          <CardList books={books}/>  
        </div>
    </div>
       )
        
    }
}

export default App;
