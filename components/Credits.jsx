import React from 'react';

import Section from './shared/Section';
import RacerCard from './RacerCard';

const Credits = () => (
  <Section title="Credits">
    <RacerCard
      username="tallestthomas"
      socials={{
        youtube: 'UCLaVpOJ6OLcDrZAxV8XgozA',
        discord: 'DPZgT4g',
        twitter: 'tallestthomas',
        instagram: 'tallestthomas',
      }}
      profileImage="https://res.cloudinary.com/tallestthomas/image/upload/v1581281840/dfff3e98-8e2c-4a46-b89f-10bc1ec56d29-profile_image-300x300_wyy1v9.png"
    />
    <h3>Design and Coding by @TallestThomas</h3>
    <h4>Accepting comissions currently!</h4>
  </Section>
);

export default Credits;
