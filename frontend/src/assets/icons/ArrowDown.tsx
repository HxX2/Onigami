import React from "react";

import IconProps from "./IconProps";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

interface Props extends IconProps {
  color?: string;
}


const ArrowDown: React.FC<IconProps> = ({ size, className,color="white" }) => {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={color}
    //   className={className}
    >
      <Path d="M11.9998 16.7501C11.8008 16.751 11.6097 16.6717 11.4698 16.5301L3.46985 8.53009C3.19449 8.23458 3.20261 7.77408 3.48823 7.48847C3.77384 7.20286 4.23434 7.19473 4.52985 7.47009L11.9998 14.9401L19.4698 7.47009C19.7654 7.19473 20.2259 7.20286 20.5115 7.48847C20.7971 7.77408 20.8052 8.23458 20.5298 8.53009L12.5298 16.5301C12.39 16.6717 12.1989 16.751 11.9998 16.7501Z" fill={color}/>
    </Svg>
  );
};

export default ArrowDown;
