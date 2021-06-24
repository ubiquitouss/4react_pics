import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    //! method 1 promise based
    // onSearchSubmit (term) {
    //     axios.get('https://api.unsplash.com/search/photos',{
            
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID xssC-DKI-UJwc86oPylMFWzoSYbBdPjYf9FQWJfTg9Q'
    //         }
    //     }).then((response)=>{console.log(response.data.results)})
    // }
    state = {images:[]}
    //! method 2
    onSearchSubmit = async (term)=>{
        const response = await unsplash.get('/search/photos',{    
            params: {query: term}, 
        });

        this.setState({images: response.data.results})
    }

    render() {
        return (
        <div className =  "ui container" style = {{marginTop: '1rem'}}>
            <SearchBar userFormSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
            <ImageList images={this.state.images}/>
        </div>)
    }
}

export default App