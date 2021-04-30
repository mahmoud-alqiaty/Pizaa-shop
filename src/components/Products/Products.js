import React from 'react'
import {ProductsContainer, ProductsWrapper, ProductItem, ProductInfo, ProductBtn} from './ProductsStyles'

const Products = ({productsData,heading}) => {
    return (
        <ProductsContainer>
            <h1>{heading}</h1>
            <ProductsWrapper>
                {
                    productsData.map(
                        (product, index)=>
                        <ProductItem>
                            <img src={product.img} alt={product.name}/>
                            <ProductInfo>
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <p className="price">{product.price}</p>
                            </ProductInfo>
                            <ProductBtn>add to cart</ProductBtn>
                        </ProductItem>
                    )
                }
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
