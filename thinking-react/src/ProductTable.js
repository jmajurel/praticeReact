import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow'; 
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    let { dataModel } = this.props;
    let category = dataModel.map(({category}) => category);
    category = category.reduce((acc,item) => {
      acc.includes(item) ? null : acc.push(item)
      return acc
    }, [])

    const products = dataModel.map((data, idx) => (
      <ProductRow key={idx} name={data.name} price={data.price} />
    ));

    return (
      <table>
        <thead>
	  <tr>
	    <th>Name</th>
	    <th>Price</th>
	  </tr>
	</thead>
	<tbody>
	  <ProductCategoryRow category='Sport equip' />
	  {products}
	</tbody>
      </table>
    )
  }
}

export default ProductTable;
