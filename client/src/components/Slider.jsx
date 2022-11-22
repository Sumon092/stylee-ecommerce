import React from 'react';
import styled from 'styled-components';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';

const Container = styled.div`
height:100vh;
width:100%;
display:flex;
`

const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
`

const Slider = () => {
    return (
        <Container>
            <Arrow>
                <ArrowLeftOutlined />
            </Arrow>
            <Arrow>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;