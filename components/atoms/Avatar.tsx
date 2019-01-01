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
  width: ${props => (props.size ? props.size : 36)}px;
  height: ${props => (props.size ? props.size : 36)}px;
  background: ${props => props.theme.grey};
  margin-right: ${props => (props.isLast ? 0 : 12)}px;
  margin-bottom: ${props => (props.isBottom ? 0 : 12)}px;
  border-radius: 100px;
`;

export const Avatar = (props: AvatarProps) => {
  const imageProvider = `https://api.adorable.io/avatars/${
    props.size ? props.size : 36
  }/${props.username}.png`;

  return (
    <Wrapper
      src={props.src ? props.src : imageProvider}
      isBottom={props.isBottom}
      isLast={props.isLast}
      size={props.size}
    />
  );
};
