import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Avatar,
  CardFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon, PencilIcon } from "@heroicons/react/24/solid";
import { FaStar } from "react-icons/fa";
import { TABLE_HEAD, TABLE_ROWS } from "./data";
import Popover from "@mui/material/Popover"; // Correct import for MUI v5

const HotelList = ({ openDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "action-popup" : undefined;
  return (
    <>
      <span className="text-xl text-blue-400">Hotel List</span>
      <Card className="w-full mt-4 border">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-2 flex items-center justify-between gap-8">
            <div>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                variant="outlined"
                size="sm"
                className="text-blue-500 border-blue-500 bg-blue-50 rounded-3xl"
              >
                UPLOAD
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="text-blue-500 border-blue-500 bg-blue-50 rounded-3xl"
                onClick={openDrawer}
              >
                ADD HOTEL
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-track-rounded-full scrollbar-thumb-hover:shadow-md ">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({
                  no,
                  img,
                  hotelName,
                  contactNo,
                  email,
                  category,
                  gstin,
                  address,
                }) => {
                  const isLast = no === TABLE_ROWS.length;
                  const classes = isLast
                    ? "p-4 "
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={hotelName}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {no}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={hotelName} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {hotelName}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {contactNo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center">
                          {[...Array(category)].map((_, index) => (
                            <FaStar
                              key={index}
                              className="text-yellow-500 h-4 w-4"
                            />
                          ))}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {gstin}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text" onClick={handleClick}>
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          {/* Popup */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div
              style={{
                width: "186px",
                height: "140px",
                // position: "absolute", // Assuming you want to place it with `top` and `left`
                // top: "238px",
                // left: "16027px",
                padding: "16px",
                gap: "16px",
                borderRadius: "8px",
                opacity: 1, // opacity should be a number in React
                color: "#FFFFFF",
                boxShadow: "0px 4px 12px -3px rgba(0, 0, 0, 0.08)",
                cursor:"pointer",
              }}
            >
              <div style={{ display: "flex", gap: "18px", color: "black" }}>
                <img
                  src="/src/assets/actionPopup/edit.png"
                  alt="edit"
                  width={20}
                  height={20}
                />
                <Typography onClick={() => console.log("Edit Details clicked")}>
                  Edit Details
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  marginTop: "16px",
                  color: "black",
                  cursor:"pointer"
                }}
              >
                <img
                  src="/src/assets/actionPopup/card.png"
                  alt="edit"
                  width={20}
                  height={20}
                />
                <Typography onClick={() => console.log("Edit Payment clicked")}>
                  Edit Payment
                </Typography>
              </div>
              <div
                style={{
                  marginTop:"16px",
                  width: '154px',
                  height: '0px',
                  gap: '0px',
                   border: '0.2px solid rgba(0, 0, 0, 1)',
                  
                  opacity: 1,  // Opacity uses a numeric value, not '0px'
                }}
              >
                <img src="/src/assets/actionPopup/vectorline.png" alt="line" />
              </div>
              <div style={{ display: "flex", gap: "18px", marginTop: "10px",}}>
                <img
                  src="/src/assets/actionPopup/trash.png"
                  alt="edit"
                  width={20}
                  height={20}
                />
                <Typography
                  onClick={() => console.log("Delete clicked")}
                  style={{ color: "red" }}
                >
                  Delete
                </Typography>
              </div>
            </div>
          </Popover>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 ">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default HotelList;
