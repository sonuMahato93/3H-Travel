// Form.js
import React, { useState } from 'react';
import {
  Card,
  IconButton,
  Typography,
  CardBody,
  Button,
  Input,
} from '@material-tailwind/react';
// import { PencilIcon } from '../../assets/pencil/pencilIcon';
// import { ButtonIcon } from '../../assets/buttonIcons/button';
// import DialogComponent from '../DialogComponent/index';

// import CreateFilterForm from '../CreateFilterForm';
import CreateDetails from '../CreateDetails';
import defaultAddresses from '../../address.json';

const Form = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [selectedFormAddress, setSelectedFormAddress] = useState(
    defaultAddresses[0] || null
  );
  const [selectedToAddress, setSelectedToAddress] = useState(null);

  const handleFormOpen = () => {
    setSelectedFormAddress(null);
    setFormOpen(!formOpen);
  };

  const handleToOpen = () => {
    setSelectedToAddress(null);
    setToOpen(!toOpen);
  };

  const handleFormAddressSelect = (address) => {
    console.log('Form Address Selected:', address);
    setSelectedFormAddress(address);
    setFormOpen(false);
  };

  const handleToAddressSelect = (address) => {
    console.log('To Address Selected:', address);
    setSelectedToAddress(address);
    setToOpen(false);
  };

  return (
    <>
      <Card className="w-full flex-row p-6">
        <CardBody className="w-full border-r border-gray-300 pr-4 relative">
          <Typography
            variant="h6"
            color="gray"
            className="mb-4 flex text-lg text-lightGray-600"
          >
            Form :
            <IconButton
              variant="text"
              className="rounded-full p-5 ml-auto"
              onClick={handleFormOpen}
            >
              {/* <PencilIcon color="#637381" /> */}
            </IconButton>
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 text-sm">
            {selectedFormAddress?.name || 'No address selected'}
          </Typography>
          <Typography color="gray" className="mb-2 font-normal text-sm">
            {selectedFormAddress?.address || ''}
          </Typography>
          <Typography color="gray" className="mb-2 font-normal text-sm">
            {selectedFormAddress?.phoneNumber || ''}
          </Typography>
        </CardBody>
        <CardBody className="w-full relative">
          <Typography
            variant="h6"
            color="gray"
            className="mb-4 flex ml-1 text-lg text-lightGray-600"
          >
            To :
            <IconButton
              variant="text"
              className="rounded-full p-2 ml-auto"
              onClick={handleToOpen}
            >
              {/* <ButtonIcon color="#637381" /> */}
            </IconButton>
          </Typography>
          {selectedToAddress !== null ? (
            <>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-sm"
              >
                {selectedToAddress.name}
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-xs text-[#3ca4ef]"
              >
                {selectedToAddress.location}
              </Typography>
              <Typography color="gray" className="mb-2 font-normal text-sm">
                {selectedToAddress.address}
              </Typography>
              <Typography color="gray" className="mb-2 font-normal text-sm">
                {selectedToAddress.phoneNumber}
              </Typography>
            </>
          ) : (
            <Typography
              color="gray"
              className="mb-2 font-normal text-sm"
            ></Typography>
          )}

          <DialogComponent
            open={formOpen}
            handleClose={handleFormOpen}
            addresses={defaultAddresses}
            handleAddressSelect={handleFormAddressSelect}
          />
          <DialogComponent
            open={toOpen}
            handleClose={handleToOpen}
            addresses={defaultAddresses}
            handleAddressSelect={handleToAddressSelect}
          />
        </CardBody>
      </Card>
      <CreateFilterForm />
      <CreateDetails />
    </>
  );
};

export default Form;
