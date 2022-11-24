import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div`

`
const Title = styled.h1`

`
const FilterContainer = styled.h1`

`
const Filter = styled.div`

`


const ProductsList = () => {

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>Flter</Filter>
                <Filter>Flter2</Filter>
            </FilterContainer>
        </Container>
    );
};

export default ProductsList;