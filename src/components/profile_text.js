import React, { Component } from "react";
import {hot} from "react-hot-loader";

class ProfileText extends Component {
  constructor(props) {
    super(props); // populates this.props (fixed for lifetime of component)
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = { // data that will change using setState
      isHovering: false,
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>poeewpooirepwo</div>
        {this.state.isHovering && <p>hover</p>}
      </div>
    );
  }
}

export default hot(module)(ProfileText);
