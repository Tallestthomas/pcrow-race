import styled from 'styled-components';

const Avatar = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.image});
  background-size: ${(props) => props.width};
  border-radius: 50%;
`;

export default Avatar;
