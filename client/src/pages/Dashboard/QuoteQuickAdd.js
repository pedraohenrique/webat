import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AutoCompleteFormField from '../../components/AutoCompleteFormField';
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import FormSelectField from '../../components/FormSelectField';
import { createQuote } from '../../redux/actions/quote';

function QuoteQuickAdd() {
  const initialQuoteState = {
    id: null,
    departureName: '',
    destinationName: '',
    departureDate: '',
    returnDate: '',
    travellers: 0,
    transportation: '',
    contactInformation: '',
  };
  const [quote, setQuote] = useState(initialQuoteState);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuote({ ...quote, [name]: value });
  };

  const handleInputSelect = ({ name, value }) => {
    setQuote({ ...quote, [name]: value });
  };

  const saveQuote = () => {
    const {
      departureName,
      destinationName,
      departureDate,
      returnDate,
      travellers,
      transportation,
      contactInformation,
    } = quote;

    dispatch(
      createQuote(
        departureName,
        destinationName,
        departureDate,
        returnDate,
        travellers,
        transportation,
        contactInformation
      )
    )
      .then((data) => {
        setQuote(initialQuoteState);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="grid grid-cols-2 pt-4 px-4 gap-4 justify-between">
      <AutoCompleteFormField
        label="FROM"
        name="departureName"
        required
        value={quote.departureName}
        onSelect={handleInputSelect}
      />
      <AutoCompleteFormField
        label="DESTINATION"
        name="destinationName"
        value={quote.destinationName}
        onSelect={handleInputSelect}
      />
      <FormField
        label="DEPART DATE"
        name="departureDate"
        value={quote.departureDate}
        onChange={handleInputChange}
        type="datetime-local"
      />
      <FormField
        label="RETURN DATE"
        name="returnDate"
        value={quote.returnDate}
        onChange={handleInputChange}
        type="datetime-local"
      />
      <FormField
        label="PEOPLE"
        name="travellers"
        type="number"
        min={0}
        value={quote.travellers}
        onChange={handleInputChange}
      />
      <FormSelectField
        label="TRANSPORTATION"
        name="transportation"
        value={quote.transportation}
        onChange={handleInputChange}
        options={['TAXI', 'TRAIN', 'UBER', 'REANTAL CAR', 'SUBWAY']}
      />
      <FormField
        label="NAME"
        name="contactInformation"
        value={quote.contactInformation}
        onChange={handleInputChange}
      />
      <Button label="Create a quote" onClick={saveQuote}></Button>
    </div>
  );
}

export default QuoteQuickAdd;
