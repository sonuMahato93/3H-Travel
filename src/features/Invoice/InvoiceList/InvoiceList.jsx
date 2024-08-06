import React from 'react';

import data from '../../../data.json';
// import FilterCard from '../../../component/FilterCard';
// import TransactionsTable from '../../../component/common/TransactionTable/TransactionsTable';
// import PageHeading from '../../../component/PageHeading';
// import ProgressCard from '../../../component/ProgressCard';

const { TABLE_ROWS } = data;

const TABLE_HEAD = [
  'Customer',
  'Create',
  'Due',
  'Amount',
  'Sent',
  'Status',
  '',
];

const InvoiceList = () => {
  const tabsData = [
    { label: 'All', value: 'all', darkenColor: '#212b36', color: '#212b36' },
    { label: 'Paid', value: 'paid', darkenColor: '#22c55e', color: '#dbf6e5' },
    {
      label: 'Pending',
      value: 'pending',
      darkenColor: '#ffab00',
      color: '#fff1d6',
    },
    {
      label: 'Overdue',
      value: 'overdue',
      darkenColor: '#ff5630',
      color: '#ffe4de',
    },
    {
      label: 'Draft',
      value: 'draft',
      darkenColor: '#212b36',
      color: '#edeff1',
    },
  ];

  const pageHeaderProps = {
    title: 'List',
    breadcrumbs: [
      { label: 'Dashboard', link: '/' },
      { label: 'Invoice', link: '/home' },
      { label: 'List', link: '/invoice' },
    ],
    newInvoiceText: 'New Invoice',
    showButton: true,
  };

  const pageProgressProps = {
    data: TABLE_ROWS,
    tabs: tabsData,
    colors: ['#1fc1de', '#22c55e', '#ffab00', '#ff5630', '#637381'],
    calculateCounts: (data) => ({
      all: data.length,
      paid: data.filter((row) => row.status === 'paid').length,
      pending: data.filter((row) => row.status === 'pending').length,
      overdue: data.filter((row) => row.status === 'overdue').length,
      draft: data.filter((row) => row.status === 'draft').length,
    }),
    calculateAmounts: (data) => {
      const amounts = {
        all: { totalAmount: 0 },
        paid: { totalAmount: 0 },
        pending: { totalAmount: 0 },
        overdue: { totalAmount: 0 },
        draft: { totalAmount: 0 },
      };

      data.forEach((row) => {
        const status = row.status.toLowerCase();
        amounts.all.totalAmount += parseFloat(
          row.amount.replace('$', '').replace(',', '')
        );

        // Make sure amounts[status] is initialized
        if (!amounts[status]) {
          amounts[status] = { totalAmount: 0 };
        }
        amounts[status].totalAmount += parseFloat(
          row.amount.replace('$', '').replace(',', '')
        );
      });

      return amounts;
    },
  };

  const pageFilterCardProps = {
    tabsData: tabsData,
    tableRows: data.TABLE_ROWS,
    tableHead: data.TABLE_HEAD,
    // renderTable: (data, tableHead) => (
    //   <TransactionsTable data={data} tableHead={tableHead} />
    // ),
    calculateCounts: (data) => ({
      all: data.length,
      paid: data.filter((row) => row.status === 'paid').length,
      pending: data.filter((row) => row.status === 'pending').length,
      overdue: data.filter((row) => row.status === 'overdue').length,
      draft: data.filter((row) => row.status === 'draft').length,
    }),
  };
  return (
    <div className="w-full">
      {/* <PageHeading {...pageHeaderProps} />
      <ProgressCard {...pageProgressProps} /> */}
      {/* <FilterCard {...pageFilterCardProps} /> */}
    </div>
  );
};

export default InvoiceList;
