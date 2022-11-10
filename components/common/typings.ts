import {
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
  } from 'react-native';
  
  export enum MARGIN_SIZES {
    tiny = 'tiny',
    small = 'small',
    small2 = 'small2',
    medium = 'medium',
    big = 'big',
    large = 'large',
  }
  export enum MODAL_ANIMATION_STYLES {
    none = 'none',
    slide = 'slide',
    fade = 'fade',
  }
  

  
  /**google place search response */

  
  export type TimeoutType = ReturnType<typeof setTimeout>;
  
  export interface TouchableProps
    extends TouchableNativeFeedbackProps,
      TouchableOpacityProps {}
  
  /** common style modes  */
 