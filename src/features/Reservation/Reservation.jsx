import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Select,
  Typography,
  Card,
  Option,
  Checkbox,
  PopoverContent,
  Popover,
  PopoverHandler,
} from "@material-tailwind/react"; // Import components from your UI library
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const Reservation = ({ openDrawer }) => {
  const [checkInDateOpen, setCheckInDateOpen] = useState(false);
  const [checkOutDateOpen, setCheckOutDateOpen] = useState(false);
  const [formData, setFormData] = useState({
    existingUserName: "",
    guestName: "",
    email: "",
    numberOfRooms: "",
    roomCategory: "",
    roomOccupancy: {
      single: false,
      double: false,
      triple: false,
      child: false,
    },
    inclusions: "",
    roomRatePerNight: "",
    enterCommission: "",
    state: "",
    city: "",
    gst: "",
  });

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      gst: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedOccupancy = {
        ...formData.roomOccupancy,
        [name]: checked,
      };

      setFormData({
        ...formData,
        roomOccupancy: updatedOccupancy,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can add further processing or submit the data to your backend here
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Typography variant="h5" color="blue-gray" className="text-blue-300">
          Reservation Form
        </Typography>
        <div className="flex space-x-4">
          <Select
            label="Choose Reservation Type"
            name="reservationType"
            value={formData.reservationType}
            onChange={handleSelectChange}
          >
            <Option value="individual">Individual</Option>
            <Option value="group">Group</Option>
            <Option value="corporate">Corporate</Option>
            {/* Add more reservation types as needed */}
          </Select>

          <Select
            label="Choose Value"
            name="chooseValue"
            value={formData.chooseValue}
            onChange={handleSelectChange}
          >
            <Option value="standard">Standard</Option>
            <Option value="deluxe">Deluxe</Option>
            <Option value="suite">Suite</Option>
            {/* Add more value options as needed */}
          </Select>
        </div>
      </div>
      <div className="px-16 py-8">
        <Card className=" border ">
          <div className=" p-8">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Guest Details
              </Typography>

              <Button
                variant="outlined"
                size="sm"
                className="text-blue-500 border-blue-500 bg-blue-50 rounded-3xl"
                onClick={openDrawer}
              >
                Add Guest
              </Button>
            </div>
            <hr className="my-4 border-t-1 border-gray-300" />
            <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Existing User Name"
                  name="existingUserName"
                  value={formData.existingUserName}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  label="Guest Name"
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-8">
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  label="Number of Rooms"
                  name="numberOfRooms"
                  value={formData.numberOfRooms}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex space-x-8">
                <div className="w-full">
                  <Popover
                    placement="bottom"
                    isOpen={checkInDateOpen}
                    onClickOutside={() => setCheckInDateOpen(false)}
                  >
                    <PopoverHandler>
                      <Input
                        type="text"
                        label="Check-in Date"
                        name="checkInDate"
                        value={
                          formData.checkInDate
                            ? format(formData.checkInDate, "EEEE, d MMMM, yyyy")
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
                          selected={formData.checkInDate}
                          onSelect={(date) => {
                            handleDateChange("checkInDate", date);
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
                        label="Check-out Date"
                        name="checkOutDate"
                        value={
                          formData.checkOutDate
                            ? format(formData.checkInDate, "EEEE, d MMMM, yyyy")
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
                          selected={formData.checkOutDate}
                          onSelect={(date) => {
                            handleDateChange("checkOutDate", date);
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

              <div className="space-y-2">
                <span>Room Occupancy</span>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <Checkbox color="blue" name="roomOccupancy.single" />
                    Single
                  </label>
                  <label className="flex items-center">
                    <Checkbox color="blue" name="roomOccupancy.double" />
                    Double
                  </label>
                  <label className="flex items-center">
                    <Checkbox color="blue" name="roomOccupancy.triple" />
                    Triple
                  </label>
                  <label className="flex items-center">
                    <Checkbox color="blue" name="roomOccupancy.child" />
                    Child
                  </label>
                </div>
              </div>
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Room Category"
                  name="roomCategory"
                  value={formData.roomCategory}
                  onChange={handleInputChange}
                />
                <Input
                  rows={4}
                  label="Inclusions"
                  name="inclusions"
                  value={formData.inclusions}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <span>Airport Pickup</span>
                <div className="flex gap-1">
                  <label className="flex items-center">
                    <Checkbox color="blue" name="roomOccupancy.single" />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <Checkbox color="blue" name="roomOccupancy.double" />
                    No
                  </label>
                </div>
              </div>
              <Input
                type="number"
                label="Room Rate Per Night"
                name="roomRatePerNight"
                value={formData.roomRatePerNight}
                onChange={handleInputChange}
              />
              <div className="flex space-x-[400px]">
                <div className="space-y-2">
                  <span>Income Tax</span>
                  <div className="flex gap-1">
                    <label className="flex items-center">
                      <Checkbox color="blue" name="roomOccupancy.single" />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <Checkbox color="blue" name="roomOccupancy.double" />
                      No
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <span>Commission Rate Type</span>
                  <div className="flex gap-1">
                    <label className="flex items-center">
                      <Checkbox color="blue" name="roomOccupancy.single" />
                      Percentage
                    </label>
                    <label className="flex items-center">
                      <Checkbox color="blue" name="roomOccupancy.double" />
                      Value
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Enter Commission"
                  name="enterCommission"
                  value={formData.enterCommission}
                  onChange={handleInputChange}
                />
                <Select
                  label="GST Value"
                  name="gst"
                  value={formData.gst}
                  onChange={handleSelectChange}
                >
                  <Option value="5%">5%</Option>
                  <Option value="12%">12%</Option>
                  <Option value="18%">18%</Option>
                  <Option value="28%">28%</Option>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Company Details
                </Typography>

                <label className="flex items-center">
                  <Checkbox color="blue" name="roomOccupancy.single" />
                  Send to Hotel
                </label>
              </div>
              <hr className="my-2 border-t-1 border-gray-300" />
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <Input
                  rows={4}
                  label="Company GSTIN"
                  name="companyGSTIN"
                  value={formData.companyGSTIN}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-8">
                <Select
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleSelectChange}
                >
                  <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                  <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
                  <Option value="Assam">Assam</Option>
                  <Option value="Bihar">Bihar</Option>
                  <Option value="Chhattisgarh">Chhattisgarh</Option>
                  {/* Add more states as needed */}
                </Select>
                <Input
                  type="text"
                  label="Contact Person Name"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                />
              </div>
              <Input
                type="text"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Hotel Details
              </Typography>
              <hr className="my-2 border-t-1 border-gray-300" />
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Existing Hotel Name"
                  name="existingHotelName"
                  value={formData.existingHotelName}
                  onChange={handleInputChange}
                />
                <Input
                  label="Hotel Name"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Hotel GSTIN"
                  name="hotelGSTIN"
                  value={formData.hotelGSTIN}
                  onChange={handleInputChange}
                />
                <Input
                  type="email"
                  label="Contact Email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-8">
                <Input
                  type="number"
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                <Select
                  label="Hotel Category"
                  name="hotelCategory"
                  value={formData.hotelCategory}
                  onChange={handleSelectChange}
                >
                  <Option value="Budget">Budget</Option>
                  <Option value="Standard">Standard</Option>
                  <Option value="Deluxe">Deluxe</Option>
                  <Option value="Luxury">Luxury</Option>
                </Select>
              </div>
              <div className="flex space-x-8">
                <Select
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleSelectChange}
                >
                  <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                  <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
                  <Option value="Assam">Assam</Option>
                  <Option value="Bihar">Bihar</Option>
                  <Option value="Chhattisgarh">Chhattisgarh</Option>
                  {/* Add more states as needed */}
                </Select>
                <Input
                  type="text"
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <Input
                type="text"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <Textarea
                rows={4}
                label="Comment Section"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Booker Details
              </Typography>
              <hr className="my-2 border-t-1 border-gray-300" />
              <div className="flex space-x-8">
                <Input
                  type="text"
                  label="Sales By"
                  name="salesBy"
                  value={formData.salesBy}
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
              </div>

              <Select
                label="Mode of Payment"
                name="modeOfPayment"
                value={formData.modeOfPayment}
                onChange={handleSelectChange}
              >
                <Option value="Credit Card">Credit Card</Option>
                <Option value="Debit Card">Debit Card</Option>
                <Option value="Net Banking">Net Banking</Option>
                <Option value="UPI">UPI</Option>
                <Option value="Cash">Cash</Option>
              </Select>
              <Button type="submit"  className="text-blue-500 border-blue-500 bg-blue-50 rounded-3xl self-end">Submit</Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reservation;
