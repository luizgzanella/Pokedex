import styled from 'styled-components/native';
import {elementColor} from '../../utils/elementColor';

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 7px 0;
  padding: 0 20px;
`;

export const StatsName = styled.Text`
  flex-direction: row;
  flex: 0.7;
  text-transform: capitalize;
  font-weight: bold;
`;

export const StatsBarContainer = styled.View`
  flex-direction: row;
  flex: 1;
  height: 8px;
  border-radius: 5px;
  justify-content: flex-start;
`;

export const StatsBar = styled.View`
  width: ${props => (props.length ? props.length : 0)}%;
  background-color: ${props =>
    props.color ? elementColor[props.color] : elementColor.defaultColor};
  border-radius: 5px;
`;

export const StatsValue = styled.Text`
  flex: 0.3;
  text-align: center;
`;
