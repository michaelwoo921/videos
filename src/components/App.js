import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


const KEY='AIzaSyA5l_oFQeqhySIl-Sz5gfmtynJWVYFF55I'

class App extends React.Component {

    onTermSubmit= async (term)=>{

        const response = await youtube.get('/search', {params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY,
            type: 'video',
            q: term
            }
        });

        console.log(response.data);

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

// onTermSubmit = term => {
//     youtube.get("/search", {
//       params: {
//         q: term,
//         part: "snippet",
//         maxResults: 5,
//         key: KEY
//       }
//     });