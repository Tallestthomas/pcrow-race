import React from "react";
import styled from "styled-components";

const HamburgerMenu = styled.button`
  position: absolute;
  top: 5%;
  background: transparent;
  margin: 8px 8px 8px auto;
  border: none;
`;

const HamburgerMenuBar = styled.span`
  display: block;
  content: "";
  background-color: #fefefe;
  height: 2px;
  width: 2rem;
  border-radius: 1px;
  margin: 0.5rem 0;
`;

export default () => {
  return (
    <HamburgerMenu>
      <HamburgerMenuBar />
      <HamburgerMenuBar />
      <HamburgerMenuBar />
    </HamburgerMenu>
  );
};
