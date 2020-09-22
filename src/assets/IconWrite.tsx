import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {}
const WriteIcon = (props: Props) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M20.4878 2.72656L21.21 1.98779C21.5669 1.63086 21.5669 1.16602 21.2266 0.825684L21.0273 0.618164C20.7119 0.311035 20.2388 0.344238 19.9067 0.67627L19.168 1.39844L20.4878 2.72656ZM8.37695 13.7666L10.3027 12.9116L19.7407 3.47363L18.4209 2.16211L8.99121 11.6001L8.08643 13.4595C8.00342 13.6255 8.19434 13.8413 8.37695 13.7666ZM3.74512 21.7271H16.2544C18.1553 21.7271 19.2344 20.6396 19.2344 18.5312V6.71924L17.7651 8.18848V18.4482C17.7651 19.6436 17.1094 20.2578 16.2295 20.2578H3.77002C2.61621 20.2578 1.98535 19.6436 1.98535 18.4482V6.2793C1.98535 5.08398 2.61621 4.46973 3.77002 4.46973H13.374L14.8433 3.00049H3.74512C1.60352 3.00049 0.507812 4.07959 0.507812 6.20459V18.5312C0.507812 20.6562 1.60352 21.7271 3.74512 21.7271Z"
        fill="#007AFF"
      />
    </Svg>
  );
};
export default WriteIcon;