import React , {Component} from 'react';

//This is function based component
//const SearchBar = () => {
//  return <input />;
//};

//Class based component
//class SearchBar extends React.Component {   //we can now use all functionalities of React.component
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
  //  return <input onChange = {this.onInputChange} />;  --> use in case you are using seperate handler
      return(
      <div className = "search-bar">
         <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
}

onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
  }
}
//Adding this in searchBar class return
//onInputChange(event){  //event is object for event -> describes the context of event
//  console.log(event.target.value)
//}

export default SearchBar;

//event handler
