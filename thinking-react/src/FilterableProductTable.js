import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    const { dataModel } = this.props;
    return (
      <div className="FilterableProductTable">
        <SearchBar />
	<ProductTable dataModel={dataModel}/>
      </div>
    );
  }
}

FilterableProductTable.defaultProps = {
  dataModel: [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]
}

export default FilterableProductTable;
