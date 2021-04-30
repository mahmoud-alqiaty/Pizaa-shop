import React from 'react'

import{
    FeaturedProductContainer,
    FeaturedProductContents, 
    FeaturedProductBtn} from './FeaturedProductStyle'

const FeaturedProduct = () => {
    return (
        <FeaturedProductContainer>
            <FeaturedProductContents>
                <h1>pizza of the day</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <FeaturedProductBtn>
                    order now
                </FeaturedProductBtn>

            </FeaturedProductContents>
        </FeaturedProductContainer>
    )
}

export default FeaturedProduct
