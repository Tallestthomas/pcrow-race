import styled from "styled-components";

const Avatar = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: url(${props => props.image});
  border-radius: 50%;
`;

export default Avatar
