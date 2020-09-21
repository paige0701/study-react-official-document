import React, {useState} from "react";
import './FilterableProductTable.css'
const FilterableProductTable = () => {

    const [inStockOnly, OnInStockOnly] = useState(false)
    const [filterText, onFilterText] = useState('')

    const checkHandling = (value) => {
        OnInStockOnly(value)
    }

    const searchHandling = (value) => {
        onFilterText(value)
    }

    return(
        <div>
            <SearchBox onChecked={checkHandling} onFilterText={searchHandling} inStockOnly={inStockOnly} filterText={filterText}/>
            <ProductTable products={products} isStockOnly={inStockOnly} filterText={filterText}/>
        </div>
    )
}

const SearchBox = (props) => {

    const inStockOnly = props.inStockOnly
    const filterText = props.filterText

    const onChangeCheckbox = () => {
        props.onChecked(!inStockOnly)
    }

    const onChangeValue = (event) => {
        props.onFilterText(event.target.value)
    }


    return (
        <div>
            <div><input type="text" placeholder='search...' value={filterText} onChange={onChangeValue}/></div>
            <div><input type="checkbox" checked={inStockOnly} onChange={onChangeCheckbox}/>Only show products in stock</div>
        </div>
    )
}

const ProductTable = (props) => {

    const products = props.products
    const isStockOnly = props.isStockOnly
    const filterText = props.filterText

    const rows = [];
    let lastCategory = null;
    products.forEach((item) => {


        if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return
        }

        if (item.category !== lastCategory) {
            rows.push(<ProductRow category={item.category} key={item.category}/>)
        }

        if (isStockOnly && !item.stocked) {
            return;
        }
        rows.push(<ProductCategoryRow product={item} key={item.name}/>)
        lastCategory = item.category

    })


    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
}

const ProductRow = (props) => {
    return (
        <tr>
            <th colSpan="2">
                {props.category}
            </th>
        </tr>
    )
}

const ProductCategoryRow = (props) => {
    const product = props.product
    const name = product.stocked?
        product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>

    return (
        <tr>
            <th>{name}</th>
            <th>{product.price}</th>
        </tr>
    )
}

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default FilterableProductTable