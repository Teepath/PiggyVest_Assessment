import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../theme';

const {width, height} = Dimensions.get('window');

export const Slider = styled.SafeAreaView`
  width: ${width}px;
  min-height: ${height}px;
  height: auto;
  background-color: ${theme.palette.tertiary.grey};
  flex: 1;
`;

export const Slide = styled.View`
  flex: 1;
  margin-top: ${width * 0.1}px;
`;

export const ImageBox = styled.View`
  width: ${width}px;
  height: 373px;
  border-radius: ${width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DotsBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width}px;
`;

export const ContentBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  width: ${width}px;
`;

export const ContentTitle = styled.Text<{color: string}>`
  color: white;
  font-family: ${theme.fontTypes.body};
  font-size: ${theme.fontSizes.h1}px;
  line-height ${theme.lineHeight.h1}px;
  text-align: center;
  font-weight: bold;
`;

export const ContentText = styled.Text`
  color: ${theme.palette.white};
  font-size: ${theme.fontSizes.small}px;
  line-height ${theme.lineHeight.small}px;
  font-family: ${theme.fontTypes.body};
  font-weight: normal;
  text-align: center;
`;

export const NavigationBox = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const NavigationText = styled.Text<{color: string}>`
  color: white;
  font-size: ${theme.fontSizes.small}px;
  line-height ${theme.lineHeight.small}px;
  font-family: ${theme.fontTypes.body};
  font-weight: normal;
  text-align: center;
  margin-top: -2px;
`;
