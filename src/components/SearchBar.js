import React from 'react'


class SearchBar extends React.Component {
   
    state = {term: 'HI there'}

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.userFormSubmit(this.state.term);
    }

    render() {
        return (
        <div className= "ui segment">
            {/* this commented line beneath for solution 2 */}
            {/* <form onSubmit={{event}=>this.onFormSubmit(event)} className = "ui form"> */}
            <form onSubmit={this.onFormSubmit} className = "ui form">

                <div className = "field">
                    <label>Image Search</label>
                    <input 
                    type ="text" 
                    value = {this.state.term} 
                    onChange={(e) => this.setState({term: e.target.value})}/>
                </div>
            
            
            </form>

        </div>);
    }
}

export default SearchBar