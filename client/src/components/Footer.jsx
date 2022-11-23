import React from 'react';
import styled from '@emotion/styled';
import { Facebook, Instagram, MailOutline, PhoneAndroid, Room, Twitter, YouTube } from '@mui/icons-material';

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
background-color:#${props => props.color};
display:flex;
justify-content:center;
align-items:center;
margin-right:20px;
cursor:pointer;
`
const Center = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Right = styled.div`
flex:1;
padding:20px;
`
const ContactItem = styled.div`
display:flex;
align-items:center;
margin-bottom:10px;
`
const Payment = styled.img`
    width: 50%;
    cursor:pointer;
`;

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
                    <SocialIcon color='FF0000'>
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: '10px' }} />555, South gate, Sherpur 2100</ContactItem>
                <ContactItem><PhoneAndroid style={{ marginRight: '10px' }} />+880 123456789</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: '10px' }} />contact@sumon.dev</ContactItem>

                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;