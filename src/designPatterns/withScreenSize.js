import React from 'react';

const withScreenSize = Component => {
  return class EnhancedComponent extends React.Component {
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
      return (
        <Component width={this.state.width} height={this.state.height} />
      );
    }
  };
};

export default withScreenSize;