import React, { useState } from "react";

import DrawerWithForm from "./DrawerWithForm";
import { StaffList } from "./StaffList";

const Staff = () => {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <StaffList openDrawer={openDrawerRight} />
      <DrawerWithForm open={openRight} onClose={closeDrawerRight} />
    </>
  );
};

export default Staff;
