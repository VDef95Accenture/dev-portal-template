import React from 'react';

import { useColorMode } from '@docusaurus/theme-common';




const ThemeDependentImage = ({ image1, image2, style }) => {

  const { colorMode } = useColorMode();




  return (

    <img src={colorMode === 'light' ? image1 : image2} alt="Themed image" style={style} />

  );

}




export default ThemeDependentImage;