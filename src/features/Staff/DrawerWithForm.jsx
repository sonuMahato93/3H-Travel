import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";

import "react-datepicker/dist/react-datepicker.css";

const DrawerWithForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      className={`p-4 overflow-auto ${open ? "!max-w-[400px]" : "max-w-0"}`}
      transition={{
        duration: 0.5, // Adjust duration as needed
      }}
    >
      <div className="flex items-center justify-between px-4 pb-2">
        <Typography variant="h5" color="blue-gray">
          Add Staff
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
        <Input
          type="text"
          label="Name"
          name="Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <Input
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Button type="submit">Save</Button>
      </form>
    </Drawer>
  );
};

export default DrawerWithForm;
