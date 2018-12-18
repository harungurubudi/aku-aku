import * as React from "react";
import styled from "../styledComponents";

interface AvatarProps {
  username?: string;
  isBottom?: boolean;
  isLast?: boolean;
  size?: number;
  src?: string;
}

const SCAvatar = styled.img<AvatarProps>``;
const Wrapper = styled(SCAvatar)`
  position: relative;
  object-fit: cover;
  width: 36px;
  height: 36px;
  background: ${props => props.theme.bgGrey};
  /* box-shadow: 3px 3px 0 ${props => props.theme.fontColor}; */
  margin-right: ${props => (props.isLast ? 0 : 12)}px;
  margin-bottom: ${props => (props.isBottom ? 0 : 12)}px;
  border: solid 2px ${props => props.theme.fontColor};
  border-radius: 18px;
`;

export const Avatar = (props: AvatarProps) => {
  const imageProvider = `https://api.adorable.io/avatars/${
    props.size ? props.size : 30
  }/${props.username}.png`;
  return (
    <Wrapper
      src={props.src ? props.src : imageProvider}
      isBottom={props.isBottom}
      isLast={props.isLast}
    />
  );
};
