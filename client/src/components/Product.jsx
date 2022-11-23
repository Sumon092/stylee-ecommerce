import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Search } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height: 350px;
display:flex;
justify-content:center;
align-items:center;
`
const Circle = styled.div`

`
const Info = styled.div`

`
const Image = styled.img`
height:75%;
`
const Icon = styled.div`

`

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <Search />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;