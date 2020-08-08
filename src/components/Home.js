import React, { useState } from 'react';
import withScreenSize from '../designPatterns/withScreenSize';
import useScreenSize from '../designPatterns/useScreenSize';
import ScreenSizeRP from '../designPatterns/ScreenSizeRP';

// HOC!

const Home = props => {
  console.log(props);
  return (
    <>
      <h1>Width: {props.width}</h1>
      <h1>Height: {props.height}</h1>
    </>
  );
};

export default withScreenSize(Home);

// HOOKS!

// const Home = () => {
//   const [size, setSize] = useScreenSize();
//
//   return (
//     <>
//       <h1>Width: {size.width}</h1>
//       <h1>Height: {size.height}</h1>
//     </>
//   );
// };
//
// export default Home;


// RENDER PROPS!

// const Home = props => {
//   return (
//     <ScreenSizeRP render={(width, height) => (
//       <>
//         <h1>Width: {width}</h1>
//         <h1>Height: {height}</h1>
//       </>
//     )} />
//   );
// };
//
// export default withScreenSize(Home);
