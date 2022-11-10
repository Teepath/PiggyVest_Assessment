import React from 'react';
import {SvgProps} from 'react-native-svg';
import Family from './ChillingMan';
import Social from './Social';
import Community from './Community';
import PiggyDollar from './PiggyDollar';

import Arrow, {ArrowProps} from './Arrow';


export enum ICON_NAME {
    family = 'family',
    social = 'social',
    piggyDollar='piggyDollar',
    community='community'

}

export interface BaseIconProps extends SvgProps {
  size?: number;
  color?: string;
  invert?: boolean;
}

interface IconProps
  extends BaseIconProps,
    Partial<ArrowProps> {
  name: ICON_NAME;
}

type IconSelectionObject = {[key in ICON_NAME]: React.ReactNode};

const Icons: IconSelectionObject = {
    family:Family,
    social: Social,
    community:Community,
    piggyDollar:PiggyDollar

};

const Icon: React.FC<IconProps> = ({name, ...iconProps}) => {
  const SelectedIcon = Icons[name] as React.ElementType;
  return SelectedIcon ? <SelectedIcon {...iconProps} /> : null;
};

export default Icon;
