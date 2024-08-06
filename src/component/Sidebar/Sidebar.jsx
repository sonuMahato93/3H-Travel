// Sidebar.js
import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  Accordion,
  AccordionHeader,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import { EcommerceIcon } from './../../assets/sidebarIcons/Ecommerce';
import { AnalyticsIcon } from './../../assets/sidebarIcons/Analytics';
import { BankingIcon } from './../../assets/sidebarIcons/Banking';
import { AppIcon } from './../../assets/sidebarIcons/App';
import { BookingIcon } from './../../assets/sidebarIcons/Booking';
import { IoMdLogOut } from "react-icons/io";
import sections from './constant';

const icons = {
  ecommerceIcon: <EcommerceIcon />,
  analyticsIcon: <AnalyticsIcon />,
  bankingIcon: <BankingIcon />,
  appIcon: <AppIcon />,
  bookingIcon: <BookingIcon />,
  logOutIcon: <IoMdLogOut />
};

function Sidebar() {
  const [selectedSection, setSelectedSection] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (sectionId) => {
    setSelectedSection(sectionId);
    handleTabClick(sectionId);
  };

  const handleTabClick = (sectionId) => {
    const section = sections.find((sec) => sec.id === sectionId);
    navigate(section.link);
  };

  return (
    <Card className="max-w-[7rem] w-full h-screen relative top-0 left-0 pt-8 duration-300">
      <List>
        {sections.map((section) => (
          <Accordion
            key={section.id}
            open={false} // Since there are no subchildren, no need for open state
            className={`border-b-0 max-w-[6.4rem] rounded-lg items-center cursor-pointer ${
              selectedSection === section.id ? 'bg-blue-100' : ''
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(section.id)}
              className="border-b-0 flex flex-col items-center cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`${
                    selectedSection === section.id ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  {icons[section.icon]}
                </div>
                <Typography
                  variant="small"
                  className={`mt-2 text-center ${
                    selectedSection === section.id ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  {section.title}
                </Typography>
              </div>
            </AccordionHeader>
          </Accordion>
        ))}
      </List>
    </Card>
  );
}

export default Sidebar;
