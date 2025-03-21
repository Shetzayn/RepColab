import Navbar from "../common/navbar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MainLayout() {
  return (
    <LayoutContainer>
      <Navbar />
    </LayoutContainer>
  );
}

export default MainLayout;