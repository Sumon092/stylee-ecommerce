import React from 'react';
import styled from '@emotion/styled';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
height:40px;
width:40px;
border-radius:50%;
color:white;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>STYLEE</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem tempore ratione temporibus, at qui.</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='red'>
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    );
};

export default Footer;