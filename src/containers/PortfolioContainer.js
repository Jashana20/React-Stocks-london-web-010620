import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const eachSelectedStock =  this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} setSelectedStock={this.props.setSelectedStock} />)
    return (
      <div>
        <h2>My Portfolio</h2>
          {eachSelectedStock}
      </div>
    );
  }

}

export default PortfolioContainer;
