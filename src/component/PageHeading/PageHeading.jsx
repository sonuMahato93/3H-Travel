// PageHeading component

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Breadcrumbs, Button } from '@material-tailwind/react';
// import { ButtonIcon } from '../../assets/buttonIcons/button';
// import { BsDot } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const PageHeading = ({ title, breadcrumbs, newInvoiceText, showButton }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center pb-7">
      <div>
        <Typography variant="h4" className="mb-2 text-lightBlack-700">
          {title}
        </Typography>

        <Breadcrumbs separator={<BsDot />} className="bg-white px-0 py-3 ">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="text-lightBlack-700">
              {crumb.link === pathname ? (
                crumb.label
              ) : (
                <a
                  href={crumb.link}
                  className="hover:text-black hover:underline"
                >
                  {crumb.label}
                </a>
              )}
            </span>
          ))}
        </Breadcrumbs>
      </div>
      {showButton && (
        <Button
          variant="gradient"
          className="flex py-[6px] px-3 text-sm gap-3 ml-auto h-[fit-content] bg-lightBlack-700 hover:shadow-none"
        >
          <ButtonIcon />
          <span style={{ textTransform: 'capitalize' }}>{newInvoiceText}</span>
        </Button>
      )}
    </div>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  newInvoiceText: PropTypes.string.isRequired,
  showButton: PropTypes.bool, // New prop to conditionally render the button
};

export default PageHeading;
