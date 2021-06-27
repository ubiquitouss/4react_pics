import React from 'react';

class ImageCard extends React.Component {
    constructor (props) {
        super(props);
        this.imageRef = React.createRef()
        this.state = {spans: 0};
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans)
    }
    // ? here after loading we are calling setSpans. the 'load' and addEventListener
    // wer are calling the function to get the image

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({spans:spans});
    }
    render() {
        const {description,urls} = this.props.image;
        console.log(this.props.image)
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref = {this.imageRef}
                alt = {description}
                src = {urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;