import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex:1;
height:70vh;
margin:3px;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Info = styled.div`

`
const Title = styled.h1`
`
const Button = styled.button`
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;