declare module "*.svg" {
    import React from 'react';
    import styled from 'styled-components/native'
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }