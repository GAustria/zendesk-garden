import React from "react";
import PropTypes from "prop-types";
import { Menu as MenuM } from "@zendeskgarden/react-menus";
import Button from "../../Button/Button";
import "@zendeskgarden/react-menus/dist/styles.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        }
      }

      openMenu() {
        if (this.state.isOpen === false) {
          this.setState({isOpen: true});
        }
        else {
          this.setState({isOpen: false});
        }
      }
 
      render() {
        return (
          <MenuM
            {...this.props}
            isOpen={this.state.isOpen}
            onStateChange={() => this.openMenu()}
            trigger={({ ref, isOpen }) => (
                <Button innerRef={ref} active={isOpen}>{this.props.buttonLabel}</Button>
            )}>
            {this.props.children}
          </MenuM>
        );
      } 
}

Menu.propTypes = {
  children: PropTypes.node,
  buttonLabel: PropTypes.string,
  animate: PropTypes.bool,
  appendToNode: PropTypes.any,
  arrow: PropTypes.bool,
  eventsEnabled: PropTypes.bool,
  focusedKey: PropTypes.string,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  maxHeight: PropTypes.string,
  onChange: PropTypes.func,
  onStateChange: PropTypes.func,
  placement: PropTypes.oneOf([
    "auto",
    "top",
    "top-start",
    "top-end",
    "end",
    "end-top,",
    "end-bottom",
    "bottom",
    "bottom-start",
    "bottom-end",
    "start",
    "start-top",
    "start-bottom"
  ])
};