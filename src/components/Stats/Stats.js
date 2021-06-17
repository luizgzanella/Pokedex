import React from 'react';
import {
  StatsContainer,
  StatsName,
  StatsBarContainer,
  StatsBar,
  StatsValue,
} from './style';

const Stats = ({value, name}) => {
  const parsedName = name.replace(/\-/g, ' ');

  return (
    <StatsContainer>
      <StatsName>{parsedName}</StatsName>
      <StatsBarContainer>
        <StatsBar length={value / 2.5} color={'grass'} />
      </StatsBarContainer>
      <StatsValue>{value}</StatsValue>
    </StatsContainer>
  );
};

export default Stats;
