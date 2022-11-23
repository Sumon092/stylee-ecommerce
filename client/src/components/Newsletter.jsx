import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height:60vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#fcf5f5;
flex-direction:column;
`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Desc = styled.div`
font-size:24px;
margin-bottom:20px;
`
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
border:1px solid lightgray;
display:flex;
justify-content:space-between;
`
const Input = styled.input`
border:none;
flex:8;
padding:8px;
padding-left:20px;
`
const Button = styled.button`
flex:1;
cursor:pointer;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products!</Desc>
            <InputContainer>
                <Input placeholder='Enter Your Email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;