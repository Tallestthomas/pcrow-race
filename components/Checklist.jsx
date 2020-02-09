import React from 'react';
import styled from 'styled-components';
import Section from './shared/Section';

const ChecklistItem = styled.li`
margin-bottom: 1rem;

iframe {
  margin-top: 0.5rem;
}
`;

const Checklist = () => (
  <Section title="Routing">
    <h3> Each Dog Needs 4 Pieces of Fruit or Meat Fed to Lead to Treasure</h3>
    <h3> Total items needed are 3000 Rupees, 90 Wood, 64 Fruit or Meat </h3>
    <ol>
      <ChecklistItem>
        Shrine of Resurrection Clip
        <br />
        <iframe src="https://player.twitch.tv/?autoplay=false&video=v549242555" frameBorder="0" allowFullScreen="true" scrolling="no" height="378" width="620" title="SoR Clip" />
      </ChecklistItem>
      <ChecklistItem>
        Back in Bounds / Sidestep
        <br />
        <iframe src="https://player.twitch.tv/?autoplay=false&video=v549248612" frameBorder="0" allowFullScreen="true" scrolling="no" height="378" width="620" title="Back In Bounds" />
      </ChecklistItem>
      <ChecklistItem>
        Great Plateau Tower
      </ChecklistItem>
      <ChecklistItem>
        Complete Magnesis Shrine
      </ChecklistItem>
      <ChecklistItem>
        Collect Ice Arrows West of Magnesis
      </ChecklistItem>
      <ChecklistItem>
        Complete Bomb Shrine
      </ChecklistItem>
      <ChecklistItem>
        Complete Stasis Shrine
      </ChecklistItem>
      <ChecklistItem>
        Aquire Warm Doublet South of Cryonis
      </ChecklistItem>
      <ChecklistItem>
        Complete Cryonis Shrine
      </ChecklistItem>
      <ChecklistItem>
        Activate Shrine at Riverside Stable
      </ChecklistItem>
      <ChecklistItem>
        Outskirt Stable Dog #1
      </ChecklistItem>
      <ChecklistItem>
        Serenne Stable Dog #2
        <ul>
          <ChecklistItem>Black Dog by Cooking Pot</ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Serenne to Snowfield BTB
        <br />
        <iframe src="https://player.twitch.tv/?autoplay=false&video=v549242134" frameBorder="0" allowFullScreen="true" scrolling="no" height="378" width="620" title="Sereene to Snowfield" />
      </ChecklistItem>
      <ChecklistItem>
        Snowfield Stable Dog #3 & Dog #4
        <ul>
          <ChecklistItem>Tricolor Dog on the Westside (not middle)</ChecklistItem>
          <ChecklistItem>Black Dog on the Eastside </ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Activate Shrine at Rito Village
      </ChecklistItem>
      <ChecklistItem>
        Highland Stable Dog #5
      </ChecklistItem>
      <ChecklistItem>
        Lakeside Stable Dog #6
      </ChecklistItem>
      <ChecklistItem>
        Lurelin Village Dog #7
      </ChecklistItem>
      <ChecklistItem>
        Hateno Dog #8
        <ul>
          <ChecklistItem>Tricolor Dog in Field with Sheep</ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Buy Hateno House and Talk to Hudson
        <ul>
          <ChecklistItem>3000 Rupees Needed</ChecklistItem>
          <ChecklistItem>30 Wood Needed</ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Hateno to Dueling Peaks Windbomb
        <br />
        <iframe src="https://player.twitch.tv/?autoplay=false&video=v549242524" frameBorder="0" allowFullScreen="true" scrolling="no" height="378" width="620" title="Windbomb/BoomyZoomy/CrowBlox" />
      </ChecklistItem>
      <ChecklistItem>
        Dueling Peaks Dog #9
      </ChecklistItem>
      <ChecklistItem>
        Wetland Stable Dog #10
      </ChecklistItem>
      <ChecklistItem>
        Activate Shine at Foothill Stable, Buy 1 Fire Elixer
        <ul>
          <ChecklistItem>
            Fire Elixer Sold by Girl at Cooking Pot
          </ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        South Akkala Stable Dog #11
      </ChecklistItem>
      <ChecklistItem>
        Activate Dah Hesho Shrine and Talk to Hudson #2
        <ul>
          <ChecklistItem>
            10 Wood Needed
          </ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        East Akkala Stable Dog #12
      </ChecklistItem>
      <ChecklistItem>
        Talk to Greyson at Goron Mines
      </ChecklistItem>
      <ChecklistItem>
        Greyson to Woodland Windbomb
        <br />
        <iframe src="https://player.twitch.tv/?autoplay=false&video=v549242524" frameBorder="0" allowFullScreen="true" scrolling="no" height="378" width="620" title="Windbomb/BoomyZoomy/CrowBlox" />
        <br />
        (same video, because it&apos;s the same trick)
      </ChecklistItem>
      <ChecklistItem>
        Woodland Stable Dog #13
      </ChecklistItem>
      <ChecklistItem>
        Talk to Hudson #3
        <ul>
          <ChecklistItem>
            20 Wood Needed
          </ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Gerudo Canyon Stable Dog #14
      </ChecklistItem>
      <ChecklistItem>
        Kara Kara Bazzar Dog #15, Talk to Rhondson
      </ChecklistItem>
      <ChecklistItem>
        Talk to Hudson #4
        <ul>
          <ChecklistItem>
            30 Wood Needed
          </ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Talk to Fyson at Rito Village
        <ul>
          <ChecklistItem>
            Need to be wearing a Shirt (seriously)
          </ChecklistItem>
        </ul>
      </ChecklistItem>
      <ChecklistItem>
        Talk to Hudson #5 and Tarrey Town Dog #16
        <ul>
          <ChecklistItem>
            Black on the Westside
          </ChecklistItem>
        </ul>
      </ChecklistItem>
    </ol>
  </Section>
);

export default Checklist;
