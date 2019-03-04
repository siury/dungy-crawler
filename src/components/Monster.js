import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Progress from "./Progress";

const Wrapper = styled.div`
  width: ${props => props.size}rem;
`;
class Monster extends Component {
  render() {
    return (
      <Wrapper size={this.props.size}>
        <Image {...this.props}>{this.props.children}</Image>
        <Progress {...this.props} />
      </Wrapper>
    );
  }
}
export default Monster;
