import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStaff } from "./api/api.js";
import { MdDeleteOutline } from "react-icons/md";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  CardFooter,
} from "@material-tailwind/react";
import {
  EyeIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { IoEyeOff } from "react-icons/io5";
import { TABLE_HEAD, TABLE_ROWS } from "./data";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

export function StaffList({ openDrawer }) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({});

  const togglePasswordVisibility = (_id) => {
     console.log(_id);
     
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [_id]: !prevState[_id],
    }));
  };

  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff.staff); // Updated to access staff state
  const loading = useSelector((state) => state.staff.loading); // Updated to access staff state
  const error = useSelector((state) => state.staff.error); // Updated to access staff state

  useEffect(() => {
    dispatch(fetchStaff()); // Dispatching fetchStaff instead of fetchUsers
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(staff);
  return (
    <>
      <span className="text-xl text-blue-400">Staff Details</span>
      <Card className=" w-full mt-4 border">
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
                onClick={openDrawer}
              >
                ADD STAFF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
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
              {staff.map(
                ({ _id, firstname, lastname, email, password }, index) => {
                  const classes =
                    index === staff.length - 1
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src=""
                            alt={`${firstname} ${lastname}`}
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {firstname} {lastname}
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
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal items-center justify-center"
                      >
                        {showPassword ? password : "*".repeat(10)}
                        <IconButton
                          variant="text"
                          onClick={() => togglePasswordVisibility(_id)}
                          className="ml-2"
                        >
                          {showPassword ? (
                            <IoEyeOff className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </IconButton>
                      </Typography>
                    </td>

                      <td className={classes}>
                        <div className="flex space-x-2 items-center">
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                        <IconButton variant="text">
                        <MdDeleteOutline className="h-4 w-4"/>
                        </IconButton>
                        </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
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
}
