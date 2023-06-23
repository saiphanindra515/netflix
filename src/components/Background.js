import styled from 'styled-components'; 
import login from '../assets/login.jpg';
const Background = () => {
    return <Container>
        <img src={login} ></img>
    </Container>
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
`;
export default Background;