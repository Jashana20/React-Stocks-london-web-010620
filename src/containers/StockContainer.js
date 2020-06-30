import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    const eachStock = this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} setSelectedStock={this.props.setSelectedStock}/>)
    return (
      <div>
        <h2>Stocks</h2>
          {eachStock}
      </div>
    );
  }

}

export default StockContainer;
