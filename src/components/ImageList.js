import React from 'react';

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
    const images = props.images.map(({description,id,urls}) => {
        return <img alt = {description} key= {id} src={urls.regular} />;
    });
    return <div>{images}</div>
};
export default ImageList;