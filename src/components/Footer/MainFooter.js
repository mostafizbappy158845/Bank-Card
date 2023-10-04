import React from 'react';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';
import { Icons } from './Menus';

const MainFooter = () => {
    return (
        <div className=' bg-black text-white'>
            

            <ItemsContainer></ItemsContainer>

            <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Apply. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
        </div>
    );
};

export default MainFooter;