import React from 'react';
import {TextInputProps, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {MARGIN_SIZES} from '../common/typings';
import Spacing from '../Spacing';
import {theme} from '../theme';


const {width} = Dimensions.get('window')
export enum INPUT_MODES {
  default = 'default',
  disabled = 'disabled',
  focus = 'focus',
  filled = 'filled',
  error = 'error',
  success = 'success',
  outline='outline'
}

interface BaseTextInputProps extends TextInputProps {
  // Input label. will be placed above the input
  label?: string;

  
  helperText?: string;

  // input's placeholder text.
  placeholder: string;

  //To add an icon to the left side of the input
  leftIcon?: (props: {textColor: string}) => React.ReactNode;

  //To add an icon to the right side of the input
  rightIcon?: (props: {textColor: string}) => React.ReactNode;

  fill?: boolean;

  mode?: INPUT_MODES;

  bgColor?: string;

  //input custom border color, this would overwrite the default input modes
  borderColor?: string;

  //customize input margin set at the bottom of input
  marginBottom?: MARGIN_SIZES;
}

const InputBox = styled.View<{fill: boolean}>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${({fill}) => (fill ? '100%' : `${width-20}px`)};
`;

/** TextInput Box */
interface InputWrapperProps {
  borderColor: string;
  color: string;
  bgColor?: string;
  mode?:any;
  numberOfLines?: number;
}

export const InputWrapper = styled.View<InputWrapperProps>`
  width: 100%;
  height: ${({numberOfLines = 1}) => `${44 * numberOfLines}px`};
  border-radius: ${theme.borderRadii.sm}px;
  border: grey;
  background-color: ${({bgColor}) => (bgColor ? bgColor : theme.palette.white)};
  color: black;
`;

/** TextInput styles */
const TextInput = styled.TextInput<{hasLeftIcon: boolean} & any>`
  padding: 12px;
  padding-left: ${({hasLeftIcon}) => (hasLeftIcon ? '38px' : '12px')};
  font-family: ${theme.fontTypes.body};
`;

/** Helper Text styles **/
const HelperText = styled.Text<{color: string}>`
  color: ${({color}) => color};
  font-size: ${theme.fontSizes.tiny}px;
`;

export const Label = styled.Text`
  font-size: ${theme.fontSizes.tiny}px;
  color: grey;
  font-family: ${theme.fontTypes.body};
`;

/** Icon box styles */
const IconBox = styled.View<{position: 'left' | 'right'}>`
  position: absolute;
  ${({position}) => (position === 'left' ? 'left: 10px' : 'right: 10px')};
  top: 12px;
  height: 18px;
  width: 18px;
  z-index: 2;
`;

const getModeColor = (mode: INPUT_MODES): string => {
  switch (mode) {
    case INPUT_MODES.disabled:
      return theme.palette.tertiary.grey;
    case INPUT_MODES.focus:
      return theme.palette.primary.blue;
    case INPUT_MODES.error:
      return theme.palette.error;
    case INPUT_MODES.success:
      return theme.palette.success;
    case INPUT_MODES.filled:
      return theme.palette.tertiary.grey;
    case INPUT_MODES.outline:
      return theme.palette.white
    default:
      return theme.palette.tertiary.grey;
  }
};

const BaseTextInput: React.FC<BaseTextInputProps> = ({
  placeholder,
  fill = false,
  label,
  helperText,
  leftIcon,
  rightIcon,
  bgColor,
  borderColor,
  mode = INPUT_MODES.default,
  marginBottom,
  numberOfLines = 1,
  ...props
}) => {
  const color =
    mode === INPUT_MODES.disabled
      ? theme.palette.tertiary.grey
      : theme.palette.tertiary.grey;
  const highlightColor = getModeColor(mode);
  return (
    <InputBox fill={fill}>
      {!!label?.length && <Label>{label}</Label>}
      <Spacing size={MARGIN_SIZES.tiny} direction="vertical" />
      <InputWrapper
        color={color}
        borderColor={borderColor || highlightColor}
        bgColor={bgColor}
        numberOfLines={numberOfLines}>
        {leftIcon ? (
          <IconBox position="left">
            {leftIcon({textColor: highlightColor})}
          </IconBox>
        ) : null}
        {rightIcon ? (
          <IconBox position="right">
            {rightIcon({textColor: highlightColor})}
          </IconBox>
        ) : null}
        <TextInput
          hasLeftIcon={!!leftIcon}
          placeholder={placeholder}
          placeholderTextColor={color}
          underlineColorAndroid="transparent"
          numberOfLines={numberOfLines}
          {...props}
        />
      </InputWrapper>
      <Spacing size={marginBottom ?? MARGIN_SIZES.tiny} direction="vertical" />
      {!!helperText?.length && (
        <HelperText color={highlightColor}>{helperText}</HelperText>
      )}
    </InputBox>
  );
};

export default BaseTextInput;
