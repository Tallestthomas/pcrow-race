import React from "react";
import styled from "styled-components";

const Avatar = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: ${props.image};
`;

export default () => <Avatar />;
