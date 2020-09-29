import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {}
const IconArrowLeft = (props: Props) => {
  return (
    <Svg width="13" height="21" viewBox="0 0 13 21" fill="none">
      <Path
        d="M10.5977 20.5352C10.8555 20.793 11.1836 20.9336 11.5703 20.9336C12.3438 20.9336 12.9648 20.3242 12.9648 19.5508C12.9648 19.1641 12.8008 18.8125 12.5312 18.543L4.32812 10.5273L12.5312 2.53516C12.8008 2.26562 12.9648 1.90234 12.9648 1.52734C12.9648 0.753906 12.3438 0.144531 11.5703 0.144531C11.1836 0.144531 10.8555 0.285156 10.5977 0.542969L1.48047 9.44922C1.15234 9.75391 1 10.1289 0.988281 10.5391C0.988281 10.9492 1.15234 11.3008 1.48047 11.6172L10.5977 20.5352Z"
        fill="#0A84FF"
      />
    </Svg>
  );
};
export default IconArrowLeft;
