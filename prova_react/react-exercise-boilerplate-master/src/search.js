import React from 'react';

export default class Search extends React.Component {
    state = {
      value: '',
    }
  
    onChange = (event) => {
      const value = event.target.value;
      this.setState({
        value: value,
      })
      this.props.filter(value)
    }
  
    render() {
      return <input className="search" name="search" placeholder="search" value={this.state.value} onChange={this.onChange}/>
    }
  }