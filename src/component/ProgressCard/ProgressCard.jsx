// ProgressCard.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Typography } from '@material-tailwind/react';

import { TotalIcon } from './../../assets/listIcons/totalIcon';
import { PaidIcon } from './../../assets/listIcons/paidIcon';
import { PendingIcon } from './../../assets/listIcons/pendingIcon';
import { OverdueIcon } from '../../assets/listIcons/overdueIcon';
import { DraftIcon } from './../../assets/listIcons/draftIcon';
import { CircularProgressBar } from '../../assets/circularProgressBar/progessBar';

const ProgressCard = ({
  data,
  tabs,
  colors,
  calculateCounts,
  calculateAmounts,
}) => {
  const [tabCounts, setTabCounts] = useState(calculateCounts(data));
  const [tabAmounts, setTabAmounts] = useState(calculateAmounts(data));

  useEffect(() => {
    // Update tabCounts whenever data changes
    setTabCounts(calculateCounts(data));
    setTabAmounts(calculateAmounts(data));
  }, [data, calculateCounts, calculateAmounts]);

  const IconComponent = (index) => {
    switch (index) {
      case 0:
        return <TotalIcon color={colors[index]} />;
      case 1:
        return <PaidIcon color={colors[index]} />;
      case 2:
        return <PendingIcon color={colors[index]} />;
      case 3:
        return <OverdueIcon color={colors[index]} />;
      
      default:
        return null;
    }
  };

  const gradientBackground = (color) => {
    return {
      background: `linear-gradient(to left, ${color} -40%, white 60%)`,
    };
  };

  return (
    <div className="flex gap-2 space-x-14 ">
      {tabs.map((tab, index) => (
        <Card
          key={index}
          className="flex-shrink-0 w-64 border border-gray-300"
          style={gradientBackground(colors[index])}
        >
          <CardBody className="flex flex-row items-center p-2">
            <div className="flex flex-col">
              <Typography className="font-bold">{tab.label}</Typography>
              <Typography variant="small" className="font-bold mb-2">
                {`₹${tabAmounts[tab.value].totalAmount.toFixed(2)}`}
              </Typography>
            </div>
            <CircularProgressBar
              progress={(tabCounts[tab.value] / tabCounts.all) * 100}
              color={colors[index]}
            >
              {IconComponent(index)}
            </CircularProgressBar>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

ProgressCard.propTypes = {
  data: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  calculateCounts: PropTypes.func.isRequired,
  calculateAmounts: PropTypes.func.isRequired,
};

export default ProgressCard;
