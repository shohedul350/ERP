import React from 'react';
import Image from '../../image/rob.png';

import FourZeroFourStyleWrapper from './404.style';



class FourZeroFour extends React.Component {


  render() {
  
    return (
      <div className="conatiner">
      <FourZeroFourStyleWrapper className="iso404Page">
        <div className="iso404Content">
          <h1>Hey! Thank you for checking out our app.</h1>
          <h3>
            It’s not quite ready yet, but we are working hard and it will be
            ready in approximately:
          </h3>
         
       
        </div>

        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
      </div>
    );
  }
}

export default FourZeroFour;
