import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.alt} title={this.props.imgTitle} width='200' height='200'>{this.props.image}</img>
        <p>{this.props.description}</p>
        </article>
      </>
      
      

    )
  }
}

export default HornedBeast;