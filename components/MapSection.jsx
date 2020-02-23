import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { scaleLinear } from 'd3-scale';

import Avatar from './shared/Avatar';
import Section from './shared/Section';
import nodes from '../data/nodes';

const MapSectionContainer = styled.div`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const MapContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  position: relative;

  img {
    display: block;
    max-width: 100%;
  }

  svg {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Marker = styled.circle`
  fill: #26a015;
  stroke: #f7d002;
  stroke-width: 2;

  &:hover {
    fill: #7deb6d;
  }
`;

const MarkerText = styled.text`
  fill: #fdfffc;
  font-size: 0.75rem;
  text-shadow: 2px 2px black;
  pointer-events: none;
`;

const AvatarRow = styled.div`
  display: flex;
  flex-flow: row;
`;

class MapSection extends React.Component {
  state = {
    hoveredNode: {
      text: 'Hover over a node to see all racers at that location',
    },
    currentRacers: [],
    users: [],
  };

  interval = null;

  async componentDidMount() {
    await this.fetchUsers();

    this.interval = setInterval(async () => await this.fetchUsers(), 5000);
  }

  fetchUsers = async () => {
    const data = await fetch('/api');
    const users = await data.json();

    this.setState({ users });
  };

  handleUpdateHovered = (node) => {
    const { users } = this.state;
    const currentRacers = users.filter((racer) => racer.data.currentPosition === node.id);

    this.setState({
      currentRacers,
      hoveredNode: node,
    });
  };

  render() {
    const { hoveredNode, currentRacers, users } = this.state;

    const xScale = scaleLinear()
      .domain([0, 100])
      .range([0, 960]);

    const yScale = scaleLinear()
      .domain([0, 100])
      .range([0, 690]);

    return (
      <MapSectionContainer>
        <Section title="Race Map">
          <MapContainer>
            <img
              src="https://res.cloudinary.com/tallestthomas/image/upload/v1580869761/36_rraonm.png"
              alt="botw map"
            />
            <svg width={928} height={690} viewBox="0 0 928 690">
              {nodes.map((node) => (
                <g key={node.id}>
                  <Marker
                    key={node.id}
                    cx={xScale(node.x)}
                    cy={yScale(node.y)}
                    r="8"
                    onMouseEnter={() => this.handleUpdateHovered(node)}
                    onMouseLeave={() =>
                      this.handleUpdateHovered({
                        text: 'Hover over a node to see all racers at that location',
                      })
                    }
                  />
                  <MarkerText textAnchor="middle" x={xScale(node.x)} y={yScale(node.y + 0.5)}>
                    {node.id + 1}
                  </MarkerText>
                </g>
              ))}
              <g>
                <rect x={0} y={0} height="75px" width="100%" fill="white" />
                <text x={0} y="16px" stroke="black">
                  {hoveredNode.text}
                </text>
                <foreignObject x={0} y="1.5rem" width="100%" height="60px">
                  <AvatarRow>
                    {currentRacers.map((racer) => (
                      <Avatar
                        height="45px"
                        width="45px"
                        key={racer.data.username}
                        image={racer.data.profileImage}
                      />
                    ))}
                  </AvatarRow>
                </foreignObject>
              </g>
            </svg>
          </MapContainer>
        </Section>
      </MapSectionContainer>
    );
  }
}

export default MapSection;
