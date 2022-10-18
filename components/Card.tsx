import React from 'react';

import { Image } from '@nextui-org/react';
interface ICard {
  title: string;
  image: string;
  link: string;
  hoverColor: string;

  category: string;
}

const Card = (props: ICard) => {
  return (
    <div className="relative h-[50vh] w-full hover:opacity-100 cursor-pointer">
      <img
        className="h-full w-full block object-cover  "
        src={props.category + '/' + props.image}
        alt={props.category}
      />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-in-out duration-300 delay-150 bg-yellow-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          KindaCode.com
        </div>
      </div>
    </div>
  );
};

export default Card;
