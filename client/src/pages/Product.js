import styled from "styled-components";
import Navbar from "../components/Navbar.jsx"
import Announcement from "../components/Announcement.jsx"
import Newsletter from "../components/Newsletter.jsx"
import Footer from "../components/Footer.jsx"
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
padding: 50px;
`
const ImageContainer = styled.div`
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
`
const Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin:30px 0px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props => props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding:5px;
/* font-size: 14px; */
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor:pointer;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 2px solid teal;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 5px;
    
`
const Button = styled.button`
    padding: 15px;
    background-color: white;
    border:2px solid teal;
    cursor:pointer;
    text-transform: uppercase;
    font-weight: 550;

    &:hover{
        background-color: #f8f4f4;
    }
`
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia non dolorum ea. Vero assumenda velit sapiente, ut ex eos amet? In tempora ullam explicabo commodi nostrum repellendus, eligendi iusto atque.
                    </Desc>
                    <Price>$ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;