import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const DrawerWithForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    hotelName: "",
    gstinNumber: "",
    email: "",
    contactNumber: "",
    hotelCategory: "",
    state: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const hotelCategories = [
    { value: "luxury", label: "Luxury" },
    { value: "budget", label: "Budget" },
    { value: "boutique", label: "Boutique" },
  ];

  const states = [
    { value: "california", label: "California" },
    { value: "texas", label: "Texas" },
    { value: "florida", label: "Florida" },
  ];

  return (
    <Drawer placement="right" open={open} onClose={onClose} className="p-4 w-128  overflow-auto">
      <div className="flex items-center justify-between px-4 pb-2">
        <Typography variant="h5" color="blue-gray">
         Add Hotel
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
     
      <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
        <Typography variant="h6" color="blue-gray" className="mt-2">
          Start Date
        </Typography>
        <DatePicker
          selected={formData.startDate}
          onChange={(date) => handleDateChange(date, "startDate")}
          className="w-full border px-2 py-1 rounded"
        />
        <Typography variant="h6" color="blue-gray" className="mt-3">
          End Date
        </Typography>
        <DatePicker
          selected={formData.endDate}
          onChange={(date) => handleDateChange(date, "endDate")}
          className="w-full border px-2 py-1 rounded"
        />
        </div>
        <Input
          type="text"
          label="Hotel Name"
          name="hotelName"
          value={formData.hotelName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="GSTIN Number"
          name="gstinNumber"
          value={formData.gstinNumber}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Hotel Category
        </Typography>
        <Select
          options={hotelCategories}
          onChange={(selectedOption) => handleSelectChange(selectedOption, "hotelCategory")}
          className="w-full"
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          State
        </Typography>
        <Select
          options={states}
          onChange={(selectedOption) => handleSelectChange(selectedOption, "state")}
          className="w-full"
        />
        <Textarea
          rows={4}
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <Button type="submit">Save</Button>
      </form>
    </Drawer>
  );
};

export default DrawerWithForm;
