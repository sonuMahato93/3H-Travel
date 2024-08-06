// CreateInvoice component

import React from 'react';
import PageHeading from '../../../component/PageHeading';

import CreateDetails from '../../../component/CreateDetails';
import Form from '../../../component/Form';

const CreateInvoice = () => {
  const pageHeaderProps = {
    title: 'Create a new invoice',
    breadcrumbs: [
      { label: 'Dashboard', link: '/' },
      { label: 'Invoice', link: '/invoice' },
      { label: 'NewInvoice', link: '/invoice/new' },
    ],
    newInvoiceText: 'New Invoice',
    showButton: false,
  };

  return (
    <div className="w-full">
      <PageHeading {...pageHeaderProps} />
      <Form />
    </div>
  );
};

export default CreateInvoice;
