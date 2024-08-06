import React from 'react';
import {
  Navbar,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Typography,
} from '@material-tailwind/react';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { HiMiniUsers } from 'react-icons/hi2';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';

import profileMenuItemsData from './constant';
import { FlagIcon } from '../../assets/flags/usaFlag';
import { OverdueIcon } from '../../assets/listIcons/overdueIcon';

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsMenuOpen(false)
    );
  }, []);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <Navbar
       variant="filled"
        className="sticky top-0 z-10  w-full   rounded-none border-none bg-transparent  py-5 px-10"
      >
        <div className="flex items-center justify-between">
          <IconButton variant="text" className="rounded-full p-2">
            <CiSearch className="w-7 h-8 text-lightGray-600" />
          </IconButton>
          <IconButton
            variant="text"
            className="rounded-full p-2 text-lightGray-600"
          >
            <span className="w-6 h-6">⌘K</span>
          </IconButton>
          <div className="ml-auto flex items-center gap-2 md:mr-2">
            <IconButton variant="text" className="rounded-full p-2">
              <FlagIcon />
            </IconButton>
            <IconButton variant="text" className="rounded-full p-2">
              <OverdueIcon className="w-8 h-8 text-lightGray-600" />
            </IconButton>
            <IconButton variant="text" className="rounded-full p-2">
              <HiMiniUsers className="w-8 h-8 text-lightGray-600" />
            </IconButton>
            <IconButton variant="text" className="rounded-full p-2">
              <Cog6ToothIcon className="w-8 h-8 text-lightGray-600" />
            </IconButton>
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="rounded-full p-2"
              >
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  withBorder={true}
                  className="w-8 h-8"
                />
              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              {profileMenuItemsData.map(({ label }, key) => (
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
                >
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal text-sm"
                    color="inherit"
                  >
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </div>
        </div>
      </Navbar>
    </Menu>
  );
}

export default NavbarComponent;
