import * as React from "react";

import styled from "../styledComponents";
import { connect } from "react-redux";
import { RootState } from "../../store";
import chroma from "chroma-js";

const Wrapper = styled.div`
  position: relative;
`;
const SCDropdownContainer = styled.div<{ isDarkMode: boolean }>``;
const DropdownContainer = styled(SCDropdownContainer)`
  right: 0;
  margin-left: -100px;
  width: 100px;
  padding: 5px 10px;
  border-radius: 4px;
  background: ${props => props.theme.background(props.isDarkMode)};
  position: absolute;
  z-index: 9;
  box-shadow: 0px 3px 20px
    ${props =>
      props.isDarkMode
        ? chroma(props.theme.black)
            .darken(0.1)
            .alpha(0.8)
            .css()
        : chroma(props.theme.grey)
            .brighten(0.7)
            .alpha(0.8)
            .css()};
`;

export interface DropdownProps {
  isDarkMode?: boolean;
  children: React.ReactNode;
  dropdownContent: ({ onClose }: { onClose: () => void }) => React.ReactNode;
}
export interface DropdownState {
  show: boolean;
}
const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Dropdown = connect(mapStateToProps)(
  class RDropdown extends React.Component<DropdownProps, DropdownState> {
    state = {
      show: false
    };
    wrapperRef: React.RefObject<HTMLDivElement>;
    constructor(props: DropdownProps) {
      super(props);
      this.wrapperRef = React.createRef<HTMLDivElement>();
    }
    componentDidMount() {
      document.addEventListener("click", this.handleClickOutside);
    }
    handleClickOutside = event => {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({ show: false });
      }
    };
    onClose = () => {
      this.setState({ show: false });
    };
    toggleShow = event => {
      this.setState({
        show: !this.state.show
      });
    };
    public render() {
      const { children, dropdownContent, isDarkMode } = this.props;
      const { show } = this.state;
      return (
        <Wrapper ref={this.wrapperRef}>
          <span onClick={this.toggleShow}>{children}</span>
          {show && (
            <DropdownContainer isDarkMode={isDarkMode}>
              {dropdownContent({ onClose: this.onClose })}
            </DropdownContainer>
          )}
        </Wrapper>
      );
    }
  }
);
