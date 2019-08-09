import React from 'react';

const Header = ({ titulo }) => {
   return (
      <header>
         <nav>
            <div className="nav-wrapper light-blue darken-2">
               <a href="#!" className="brand-logo center">{titulo}</a>
            </div>
         </nav>
      </header>
   );
};

export default Header;