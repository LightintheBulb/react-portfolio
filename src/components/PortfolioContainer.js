import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import SocialLinks from './pages/SocialLinks';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTabs = () => {
    if (currentPage === 'Home') {
      return <{Home , SocialLinks}  />;
    }
    if (currentPage === 'About Me') {
      return <About , SocialLinks  />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio , SocialLinks  />;
    }
    if (currentPage === 'Blog') {
      return <Blog , SocialLinks  />;
    }
    return <Contact , SocialLinks  />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderTabs()}
    </div>
  );
}


// export function SocialContainer() {
// const [currentPage2, setCurrentPage2] = useState('Home');

//   const renderSociallinks = () => {
//     if (currentPage2 === 'Home') {
//       return <SocialLinks />;
//     }
//     if (currentPage2 === 'About Me') {
//       return <SocialLinks />;
//     }
//     if (currentPage2 === 'Portfolio') {
//       return <SocialLinks />;
//     }
//     if (currentPage2 === 'Blog') {
//       return <SocialLinks />;
//     }
//     return <SocialLinks />;
//   };

// const handlePageChange2 = (page) => setCurrentPage2(page);

//   return (
//     <footer>
//       <div className="footer">
//       <SocialLinks currentPage2={currentPage2} handlePageChange2={handlePageChange2} />
//       {renderSociallinks()}
//       </div>
//     </footer>
//   );



// About Me, Portfolio, Contact, and Resume