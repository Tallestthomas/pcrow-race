import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <MapContainer>
    <img src="https://placehold.it/600x400" />
    <img src="https://placehold.it/300x400" />
  </MapContainer>
);
