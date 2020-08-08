import React from 'react';

class ScreenSizeRP extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentDidMount() {
    window.addEventListener("resize", () => this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    return this.props.render(this.state.width, this.state.height);
  }
}

export default ScreenSizeRP;