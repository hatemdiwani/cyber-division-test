
import styled from "styled-components";

const Container = styled.section`
  padding: 0px 100.31px ;
  @media (max-width: 600px) {
    padding: 0px 10px ;
  }
`;

export default ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}