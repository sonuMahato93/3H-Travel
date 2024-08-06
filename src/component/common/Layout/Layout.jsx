import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../Sidebar/index';
import NavbarComponent from '../../NavBar/index';

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto h-full">
        {/* Navbar */}
        <NavbarComponent isOpen={isSidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 w-full mx-auto p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
