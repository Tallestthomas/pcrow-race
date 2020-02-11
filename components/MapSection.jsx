import React, { useState } from 'react';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

import Avatar from './shared/Avatar';
import Section from './shared/Section';

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
  };
`;

const Marker = styled.circle`
fill: #26a015;
stroke: #F7D002;
stroke-width: 2;

&:hover {
  fill: #7deb6d;
};
`;

const MarkerText = styled.text`
fill: #FDFFFC;
font-size: 0.75rem;
text-shadow: 2px 2px black;
pointer-events: none;
`;

const AvatarRow = styled.div`
display: flex;
flex-flow: row;
`;

const nodes = [
  {
    x: 40,
    y: 70,
    id: 0,
    text: '1) Shrine of Resurrection Clip',
  },
  {
    x: 42,
    y: 70,
    id: 1,
    text: '2) Back in Bounds',
  },
  {
    x: 45,
    y: 69,
    id: 2,
    text: '3) Great Plateau Tower',
  },
  {
    x: 44.5,
    y: 65.5,
    id: 3,
    text: '4) Complete Magnesis',
  },
  {
    x: 42.75,
    y: 66,
    id: 4,
    text: '5) Collect Ice Arrows West of Magnesis',
  },
  {
    x: 46,
    y: 72,
    id: 5,
    text: '6) Complete Bomb Shrine',
  },
  {
    x: 42,
    y: 75.2,
    id: 6,
    text: '7) Complete Stasis Shrine',
  },
  {
    x: 39,
    y: 75.2,
    id: 7,
    text: '8) Aquire Warm Doublet South of Cryonis',
  },
  {
    x: 38,
    y: 71,
    id: 8,
    text: '9) Complete Cryonis Shrine',
  },
  {
    x: 53,
    y: 62,
    id: 9,
    text: '10) Activate Shrine at Riverside Stable',
  },
  {
    x: 39,
    y: 62,
    id: 10,
    text: '11) Outskirt Stable Dog #2',
  },
  {
    x: 37.5,
    y: 30,
    id: 11,
    text: '12) Serenne Stable Dog #2',
  },
  {
    x: 34.5,
    y: 29.5,
    id: 12,
    text: '13) Serenne to Snowfield BTB',
  },
  {
    x: 36.5,
    y: 20,
    id: 13,
    text: '14) Snowfield Stable Dog #3 & Dog #4',
  },
  {
    x: 21.25,
    y: 27.2,
    id: 14,
    text: '15) Activate Shrine at Rito Village',
  },
  {
    x: 54.2,
    y: 87,
    id: 15,
    text: '16) Highland Stable Dog #5',
  },
  {
    x: 61.5,
    y: 88.5,
    id: 16,
    text: '17) Lakeside Stable Dog #6',
  },
  {
    x: 73.4,
    y: 88.5,
    id: 17,
    text: '18) Lurelin Village Dog #7',
  },
  {
    x: 80.2,
    y: 75,
    id: 18,
    text: '19) Hateno Dog #8',
  },
  {
    x: 76.6,
    y: 75,
    id: 19,
    text: '20) Buy Hateno House and Talk to Hudson',
  },
  {
    x: 74.5,
    y: 75.5,
    id: 20,
    text: '21) Hateno to Dueling Peaks Windbomb',
  },
  {
    x: 66.5,
    y: 72,
    id: 21,
    text: '22) Dueling Peaks Dog #9',
  },
  {
    x: 57.7,
    y: 53,
    id: 22,
    text: '23) Wetland Stable Dog #10',
  },
  {
    x: 72,
    y: 37.5,
    id: 23,
    text: '24) Activate Shine at Foothill Stable, Buy 1 Fire Elixer',
  },
  {
    x: 76.5,
    y: 31,
    id: 24,
    text: '25) South Akkala Stable Dog #11',
  },
  {
    x: 83,
    y: 32,
    id: 25,
    text: '26) Activate Dah Hesho Shrine and Talk to Hudson #2',
  },
  {
    x: 86.5,
    y: 17,
    id: 26,
    text: '27) East Akkala Stable Dog #12',
  },
  {
    x: 65.2,
    y: 27,
    id: 27,
    text: '28) Talk to Greyson at Goron Mines',
  },
  {
    x: 61.7,
    y: 28,
    id: 28,
    text: '29) Greyson to Woodland Windbomb',
  },
  {
    x: 57.5,
    y: 34,
    id: 29,
    text: '30) Woodland Stable Dog #13',
  },
  {
    x: 83,
    y: 29.5,
    id: 30,
    text: '31) Talk to Hudson #3',
  },
  {
    x: 28.5,
    y: 75,
    id: 31,
    text: '32) Gerudo Canyon Stable Dog #14',
  },
  {
    x: 23.5,
    y: 79.7,
    id: 32,
    text: '33) Kara Kara Bazzar Dog #15, Talk to Rhondson',
  },
  {
    x: 81.2,
    y: 30.8,
    id: 33,
    text: '34) Talk to Hudson #4',
  },
  {
    x: 19.5,
    y: 27.7,
    id: 34,
    text: '35) Talk to Fyson at Rito Village',
  },
  {
    x: 81.2,
    y: 28.8,
    id: 35,
    text: '36) Talk to Hudson #5 and Tarrey Town Dog #16',
  },
];

export default ({ users = [] }) => {
  const [hoveredNode, updateHoveredNode] = useState({ text: 'Hover over a node to see all racers at that location' });
  const [currentRacers, updateCurrentRacers] = useState([]);

  const xScale = scaleLinear()
    .domain([0, 100])
    .range([0, 960]);

  const yScale = scaleLinear()
    .domain([0, 100])
    .range([0, 690]);

  const handleUpdateHovered = (node) => {
    const currentUsers = users.filter((racer) => racer.data.currentPosition === node.id);

    updateCurrentRacers(currentUsers);
    updateHoveredNode(node);
  };

  return (
    <Section title="Race Map">
      <MapContainer>
        <img src="https://res.cloudinary.com/tallestthomas/image/upload/v1580869761/36_rraonm.png" alt="botw map" />
        <svg
          width={928}
          height={690}
          viewBox="0 0 928 690"
        >
          {nodes.map((node) => (
            <g>
              <Marker
                key={node.id}
                cx={xScale(node.x)}
                cy={yScale(node.y)}
                r="8"
                onMouseEnter={() => handleUpdateHovered(node)}
                onMouseLeave={() => handleUpdateHovered({ text: 'Hover over a node to see all racers at that location' })}
              />
              <MarkerText textAnchor="middle" x={xScale(node.x)} y={yScale(node.y + 0.5)}>
                { node.id + 1 }
              </MarkerText>
            </g>
          ))}
          <g>
            <rect x={0} y={0} height="75px" width="100%" fill="white" />
            <text x={0} y="16px" stroke="black">{hoveredNode.text}</text>
            <foreignObject x={0} y="1.5rem" width="100%" height="60px">
              <AvatarRow>
                { currentRacers.map((racer) => (
                  <Avatar height="45px" width="45px" image={racer.data.profileImage} />
                ))}
              </AvatarRow>
            </foreignObject>
          </g>
        </svg>
      </MapContainer>
    </Section>
  );
};
