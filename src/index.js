import _ from 'lodash';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCupWVKP-0HRQr65OTXURG1kp_4Fhxgx78' ;

//new component
//const App = function(){  //const is because this will not be changed
// => is used in place of function

 /* This was functional based , we will change to class based as below
 const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );  //JSX -> get turns into html
}
*/

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
       videos : [],
       selectedVideo:null
     };
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term: term}, (videos) => {  //video here is value
      this.setState({
        videos : videos,
        selectedVideo:videos[0]
       });
    });
  }

  //because both value and key are identical in name , only works if key and property are same in name variable
  //this.setState ({videos : videos});

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
   return(
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video = {this.state.selectedVideo} />
      <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}/>
    </div>
   );
  }
}

//ReactDOM.render(App); --> will not work because we directly can't render class , we should make one instance and then render.

ReactDOM.render(<App /> , document.querySelector('.container')); //this div is in index.html
