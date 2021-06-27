import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';

//const ImageList = (props)=> {
    //const images = props.images.map((image) => {
        // key has to be written to the root element
       //return <img alt = {image.description} key= {image.id} src={image.urls.regular} /> 
       
       //example 
       // return
       //<div key= {image.id}> 
       //<img  src={image.urls.regular} /> 
       //</div>
    //});

//};
const ImageList = (props)=>{
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image= {image}/>
    });
    return <div className="image-list">{images}</div>
};
export default ImageList;