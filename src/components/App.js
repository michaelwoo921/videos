import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
  

    onTermSubmit=(term)=>{
        console.log(term);
    }
    render(){
        return(
            <div className="ui container"> 
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoDetail />
                <VideoList />
            </div>
        );
    }
}

export default App;