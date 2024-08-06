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
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ProgressCard from "../../component/ProgressCard";
import data from "../../data.json";
import { TABLE_HEAD, TABLE_ROWS, tabsData } from "./data";

const { TABLE_ROW } = data;


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

const pageProgressProps = {
  data: TABLE_ROW,
  tabs: tabsData,
  colors: ["#1fc1de", "#22c55e", "#ffab00", "#ff5630", "#637381"],
  calculateCounts: (data) => ({
    number: data.length,
    nights: data.filter((row) => row.status === "nights").length,
    commissionOnIncome: data.filter(
      (row) => row.status === "commissionOnIncome"
    ).length,
    totalBilling: data.filter((row) => row.status === "totalBilling").length,
    //   draft: data.filter((row) => row.status === 'draft').length,
  }),
  calculateAmounts: (data) => {
    const amounts = {
      number: { totalAmount: 0 },
      nights: { totalAmount: 0 },
      commissionOnIncome: { totalAmount: 0 },
      totalBilling: { totalAmount: 0 },
      // draft: { totalAmount: 0 },
    };

    data.forEach((row) => {
      const status = row.status.toLowerCase();
      amounts.number.totalAmount += parseFloat(
        row.amount.replace("$", "").replace(",", "")
      );

      // Make sure amounts[status] is initialized
      if (!amounts[status]) {
        amounts[status] = { totalAmount: 0 };
      }
      amounts[status].totalAmount += parseFloat(
        row.amount.replace("$", "").replace(",", "")
      );
    });

    return amounts;
  },
};

const BookingList = ({openDrawer}) => {
  return (
    <div className="space-y-4">
      <span className="text-xl text-blue-400">Bookings</span>
      <ProgressCard {...pageProgressProps} />
      <Card className="w-full mt-4 border">
        <CardHeader floated={false} shadow={false} className="rounded-none ">
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
                Filter
              </Button>
              <Button
                variant="outlined"
                size="sm"
              className="text-blue-500 border-blue-500 bg-blue-50 rounded-3xl"
              >
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
      

            <CardBody className="p-0 hover:overflow-x-auto w-full  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-track-rounded-full scrollbar-thumb-hover:shadow-md ">
          <div className=" overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-track-rounded-full scrollbar-thumb-hover:shadow-md ">
            <table className="w-full min-w-max table-auto text-left">
             <thead> 
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={index}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 sticky top-0"
                    style={{ minWidth: "120px" }} // Set a minimum width for each column
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
                (
                  {
                    no,
                    img,
                    name,
                    company,
                    salesBy,
                    hotelName,
                    city,
                    checkIn,
                    checkOut,
                    roomNights,
                    roomNumbers,
                    totalRoomNights,
                    roomNightRate,
                    hotelBilling,
                    commissionRate,
                    commissionOnIncome,
                    gst,
                    totalBilling,
                    reservationType,
                    valueType,
                    invoiceNumber,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4 "
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={no}>
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
                          <Avatar src={img} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
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
                          {company}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {salesBy}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {hotelName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {city}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {checkIn}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {checkOut}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {roomNights}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {roomNumbers}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {totalRoomNights}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {roomNightRate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {hotelBilling}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {commissionRate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {commissionOnIncome}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {gst}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {totalBilling}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {reservationType}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {valueType}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {invoiceNumber}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          </div>
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
    </div>
  );
};

export default BookingList;
