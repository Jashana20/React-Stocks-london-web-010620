import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      portfolio: [],
    }
  }

    // sortAlphabetically = (stocks) => {
    //   const sortedArr = stocks.sort((a,b) => a.ticker.localCompare(b.ticker))
    //   this.setState({ alphabetical : sortedArr })
    // }

   setSelectedStock = (stock) => {
    if (this.state.portfolio.includes(stock)){
      const newArr = this.state.portfolio.filter(s => s !== stock)
      this.setState({ portfolio: newArr })
    } else {
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.props.stocks} 
              setSelectedStock={this.setSelectedStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer 
              stocks={this.state.portfolio} 
              setSelectedStock={this.setSelectedStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
