import React,{Component} from 'react';
import './App.css';
//import Naviagtion from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import CardList from './components/CardList/CardList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import sample from './libraryvideo.mp4'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import PDF from './components/Pdf/pdf'
//import Iframe from 'react-iframe'

class App extends Component{
     resp = [];

      constructor(props) {
        super(props);
       
        this.state = { 
         // videoURL: 'https://www.youtube.com/watch?v=XRH8pca1akY.mp4',
         responseCount:[],
          books:[],
          img:'',
          searchfield:'',
          route:'home',
          bname:''
        }

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
      this.setState({imgaeList: event.target.value})
    }

    onRouteChange = (route) => {
      // if (route === 'signout') {
      //   this.setState({isSignedIn: false})
      // } else if (route === 'home') {
      //   this.setState({isSignedIn: true})
      // }
      this.setState({route: route});
    }
    

    onImageClick=(data)=>{
    this.setState({route:'pdf'})
    //this.setState({bname:data})
    this.setState({data: encodeURIComponent(data)});
    }

    render(){
      const filteredBooks = this.state.books.filter(book =>{
        return book.filename.toLowerCase().includes(this.state.searchfield.toLowerCase());   
      })

       const {books,data,img,route}  = this.state;        
      console.log(data)
      return !books.length ?
      <h1>Loading</h1>:
       (
      <Router>
      <div>
     
        {/* <Naviagtion/> */}
        <div>
        <Navbar onRouteChange={this.onRouteChange}/>
        </div>
          <div className="container">
              {route==='register'
               ? <Register onRouteChange={this.onRouteChange} />
       
               : (route==='login' ?
                <Login  onRouteChange={this.onRouteChange}/>

                : (route==='profile'?
                <Profile  onRouteChange={this.onRouteChange}/>

                :(route==='home')
                )
               )
              }
              
          </div>       
          <div >  
              <video className='videoTag' autoPlay loop muted resizeMode={"cover"}>
        <source src={sample} type='video/mp4' />
        </video>     
        {route==='home'

         ? 
         <div><Search searchChange={this.onSearchChange}/>  
          <CardList books={filteredBooks} img={this.state.img} onImageClick={this.onImageClick}/>  
          </div>
          
          : 
          (route==='pdf'
          ?          
          <div class="dib">
            <PDF data={this.state.data}/>  
            </div>
            :<div>No PDF available</div>        
          )      

        }
        </div>
         
    </div>
    </Router>
       )
        
    }
}

export default App;
