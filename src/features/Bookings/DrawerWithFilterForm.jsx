import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
  PopoverContent,
  PopoverHandler,
  Popover,
} from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const DrawerWithFilterForm = ({ open, onClose }) => {
  const [checkInDateOpen, setCheckInDateOpen] = useState(false);
  const [checkOutDateOpen, setCheckOutDateOpen] = useState(false);
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    hotelName: "",
    userName: "",
    roomCategory: "",
    saleBy: "",
    numberOfRooms: "",
    company: "",
    reservationType: "",
    state: "",
    city: "",
    modeOfPayment: "",
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
    // Add logic to apply filter using form data
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

  const cities = [
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
  ];

  const modesOfPayment = [
    { value: "credit-card", label: "Credit Card" },
    { value: "debit-card", label: "Debit Card" },
    { value: "paypal", label: "PayPal" },
  ];

  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      className={`p-4 overflow-y-auto ${open ? "!max-w-[450px]" : "max-w-0"}`}
      transition={{
        duration: 0.5, // Adjust duration as needed
      }}
    >
      <div className="flex items-center justify-between px-4 pb-2">
        <Typography variant="h5" color="blue-gray">
          Apply Filter
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
        <div className="flex flex-col  gap-4 ">
          <div className="w-full">
            <Popover
              placement="bottom"
              isOpen={checkInDateOpen}
              onClickOutside={() => setCheckInDateOpen(false)}
            >
              <PopoverHandler>
                <Input
                  type="text"
                  label=" Start Date"
                  name="startDate"
                  value={
                    formData.checkInDate
                      ? format(formData.startDate, "EEEE, d MMMM, yyyy")
                      : ""
                  }
                  onFocus={() => setCheckInDateOpen(true)}
                  onChange={() => null}
                />
              </PopoverHandler>
              {checkInDateOpen && (
                <PopoverContent>
                  <DayPicker
                    mode="single"
                    selected={formData.startDate}
                    onSelect={(date) => {
                      handleDateChange("startDate", date);
                      setCheckInDateOpen(false);
                    }}
                    showOutsideDays
                    className="border-0"
                    classNames={{
                      caption:
                        "flex justify-center py-2 mb-4 relative items-center",
                      caption_label: "text-sm font-medium text-gray-900",
                      nav: "flex items-center",
                      nav_button:
                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                      nav_button_previous: "absolute left-1.5",
                      nav_button_next: "absolute right-1.5",
                      table: "w-full border-collapse",
                      head_row: "flex font-medium text-gray-900",
                      head_cell: "m-0.5 w-9 font-normal text-sm",
                      row: "flex w-full mt-2",
                      cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal",
                      day_range_end: "day-range-end",
                      day_selected:
                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                      day_today: "rounded-md bg-gray-200 text-gray-900",
                      day_outside:
                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                      day_disabled: "text-gray-500 opacity-50",
                      day_hidden: "invisible",
                    }}
                    components={{
                      IconLeft: ({ ...props }) => (
                        <ChevronLeftIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                      IconRight: ({ ...props }) => (
                        <ChevronRightIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                    }}
                  />
                </PopoverContent>
              )}
            </Popover>
          </div>
          <div className="w-full">
            <Popover
              placement="bottom"
              isOpen={checkOutDateOpen}
              onClickOutside={() => setCheckOutDateOpen(false)}
            >
              <PopoverHandler>
                <Input
                  type="text"
                  label="End Date"
                  name="endDate"
                  value={
                    formData.endDate
                      ? format(formData.endDate, "EEEE, d MMMM, yyyy")
                      : ""
                  }
                  onFocus={() => setCheckOutDateOpen(true)}
                  onChange={() => null}
                />
              </PopoverHandler>
              {checkOutDateOpen && (
                <PopoverContent>
                  <DayPicker
                    mode="single"
                    selected={formData.endDate}
                    onSelect={(date) => {
                      handleDateChange("endDate", date);
                      setCheckOutDateOpen(false);
                    }}
                    showOutsideDays
                    className="border-0"
                    classNames={{
                      caption:
                        "flex justify-center py-2 mb-4 relative items-center",
                      caption_label: "text-sm font-medium text-gray-900",
                      nav: "flex items-center",
                      nav_button:
                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                      nav_button_previous: "absolute left-1.5",
                      nav_button_next: "absolute right-1.5",
                      table: "w-full border-collapse",
                      head_row: "flex font-medium text-gray-900",
                      head_cell: "m-0.5 w-9 font-normal text-sm",
                      row: "flex w-full mt-2",
                      cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal",
                      day_range_end: "day-range-end",
                      day_selected:
                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                      day_today: "rounded-md bg-gray-200 text-gray-900",
                      day_outside:
                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                      day_disabled: "text-gray-500 opacity-50",
                      day_hidden: "invisible",
                    }}
                    components={{
                      IconLeft: ({ ...props }) => (
                        <ChevronLeftIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                      IconRight: ({ ...props }) => (
                        <ChevronRightIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                    }}
                  />
                </PopoverContent>
              )}
            </Popover>
          </div>
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
          label="User Name"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Room Category"
          name="roomCategory"
          value={formData.roomCategory}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Sale By"
          name="saleBy"
          value={formData.saleBy}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          label="Number of Rooms"
          name="numberOfRooms"
          value={formData.numberOfRooms}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Reservation Type"
          name="reservationType"
          value={formData.reservationType}
          onChange={handleInputChange}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          State
        </Typography>
        <Select
          options={states}
          onChange={(selectedOption) =>
            handleSelectChange(selectedOption, "state")
          }
          className="w-full"
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          City
        </Typography>
        <Select
          options={cities}
          onChange={(selectedOption) =>
            handleSelectChange(selectedOption, "city")
          }
          className="w-full"
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Mode of Payment
        </Typography>
        <Select
          options={modesOfPayment}
          onChange={(selectedOption) =>
            handleSelectChange(selectedOption, "modeOfPayment")
          }
          className="w-full"
        />

        <Button type="submit">Apply Filter</Button>
      </form>
    </Drawer>
  );
};

export default DrawerWithFilterForm;
