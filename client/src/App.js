import React,{Component} from 'react';
import './App.css';
import Naviagtion from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import Card from './components/Card/Card'
class App extends Component{
     resp = [];
      constructor(props) {
        super(props);
       
        this.state = { 
          videoURL: 'https://www.youtube.com/watch?v=XRH8pca1akY.mp4',
          apiResponse: "" ,
        };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));  
    }
    componentWillMount() {
        this.callAPI();
        
       
    }
    render(){
      return (

        
    <div className="">  
    {/* <logo></logo>
    <search></search>
    <menu></menu>
    <container></container> */}
    {/* <view><video id="background-video" loop autoPlay>
    <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
    <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" />
    Your browser does not support the video tag.
</video>
    </view> */}
    <Logo/>
    <Search/>
    <Naviagtion/>
    <div >
    <p>{this.state.apiResponse}</p>
    <Card/>    
    </div>
    {/* <video id="background-video" loop autoPlay>
    <source src="libraryvideo.mp4" type="video/mp4" /> 
    </video> 
    <img src="libraryimg.jpg" className="App-logo" alt="logo" />
        <h1>sddsdsd</h1> */}
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />            
          </header> */}
          
          {/* <p className="App-intro">{this.state.apiResponse}</p> */}
        </div>

      );
    }
}

export default App;
