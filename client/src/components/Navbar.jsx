import React from 'react';
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
height:60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Language = styled.span`
font-size:14px;
cursor: pointer;
`
const Input = styled.input`
border:none;
`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`
const Logo = styled.h1`
font-weight:bold
`
const Center = styled.div`
flex:1;
text-align:center;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: '16px' }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>STYLEE</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;