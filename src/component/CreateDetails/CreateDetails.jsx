import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
// import { DeleteIcon } from '../../assets/deleteIcon/deleteIcon';
// import { ButtonIcon } from '../../assets/buttonIcons/button';
// import DetailsComponent from '../DetailsComponent/index';

const CreateDetails = () => {
  const [totalValues, setTotalValues] = useState({
    subtotal: '-',
    shipping: '0',
    discount: '0',
    taxes: '0',
    total: '-',
  });

  const [items, setItems] = useState([
    // Initial item
    {
      quantityValue: '1',
      priceValue: '',
      title: '',
      description: '',
      service: '',
    },
  ]);

  const [shippingInput, setShippingInput] = useState('');
  const [discountInput, setDiscountInput] = useState('');
  const [taxesInput, setTaxesInput] = useState('');

  const handleInputChange = (event, index) => {
    const newItems = [...items];
    newItems[index].priceValue = event.target.value;
    setItems(newItems);
    calculateTotal(newItems);
  };

  const calculateTotal = (newItems) => {
    let subtotal = 0;

    newItems.forEach((item) => {
      const parsedPrice = parseFloat(item.priceValue.replace('$', '')) || 0;
      const parsedQuantity = parseInt(item.quantityValue, 10) || 0;

      subtotal += parsedPrice * parsedQuantity;
    });

    const parsedShipping = parseFloat(shippingInput) || 0;
    const parsedDiscount = parseFloat(discountInput) || 0;
    const parsedTaxes = parseFloat(taxesInput) || 0;

    const discountAmount = parsedDiscount; // Subtract the discount directly
    const taxesAmount = parsedTaxes; // Add the taxes directly

    const total = subtotal - parsedShipping - discountAmount + taxesAmount;

    setTotalValues({
      ...totalValues,
      subtotal: `$ ${subtotal.toFixed(2)}`,
      shipping: `$ ${parsedShipping.toFixed(2)}`, // Ensure it's parsed as a float
      discount: `$ ${discountAmount.toFixed(2)}`,
      taxes: `$ ${taxesAmount.toFixed(2)}`,
      total: `$ ${total.toFixed(2)}`,
    });
  };

  const handleShippingChange = (event) => {
    setShippingInput(event.target.value);
    calculateTotal(items);
  };

  const handleDiscountChange = (event) => {
    setDiscountInput(event.target.value);
    calculateTotal(items);
  };

  const handleTaxesChange = (event) => {
    setTaxesInput(event.target.value);
    calculateTotal(items);
  };

  const handlePriceChange = (event, index) => {
    const newItems = [...items];
    newItems[index].priceValue = event.target.value;
    setItems(newItems);
    calculateTotal(newItems);
  };

  const handleQuantityChange = (event, index) => {
    const newItems = [...items];
    newItems[index].quantityValue = event.target.value;
    setItems(newItems);
    calculateTotal(newItems);
  };

  const handleServiceChange = (value, index) => {
    const newItems = [...items];
    newItems[index].service = value;
    setItems(newItems);
    calculateTotal(newItems);
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    calculateTotal(newItems);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        quantityValue: '1',
        priceValue: '',
        title: '',
        description: '',
        service: '',
      },
    ]);
  };

  return (
    <DetailsComponent
      items={items}
      totalValues={totalValues}
      setTotalValues={setTotalValues}
      shippingInput={shippingInput}
      discountInput={discountInput}
      taxesInput={taxesInput}
      handleAddItem={handleAddItem}
      handleShippingChange={handleShippingChange}
      handleDiscountChange={handleDiscountChange}
      handleTaxesChange={handleTaxesChange}
      handleRemove={handleRemove}
      handleQuantityChange={handleQuantityChange}
      handlePriceChange={handlePriceChange}
      handleInputChange={handleInputChange}
      handleServiceChange={handleServiceChange}
    />
  );
};

export default CreateDetails;
