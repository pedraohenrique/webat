import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { FaEye } from 'react-icons/fa';
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import { retrieveQuotes } from '../../redux/actions/quote';

const customStyles = {
  table: {
    style: {
      maxWidth: '100%',
      width: '100%',
    },
  },
  headRow: {
    style: {
      minHeight: '32px',
      height: '32px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '2px',
      paddingRight: '2px',
      fontWeight: 'bold',
      fontSize: 'smaller',
    },
  },
  rows: {
    style: {
      minHeight: '32px',
      height: '32px',
    },
  },
  cells: {
    style: {
      paddingLeft: '2px', // override the cell padding for data cells
      paddingRight: '2px',
      fontSize: 'smaller',
    },
  },
};

const columns = [
  {
    name: 'ID#',
    selector: (row) => row.id,
    width: '80px',
  },
  {
    name: 'DEPARTURE',
    selector: (row) => row.departureName,
    width: '200px',
  },
  {
    name: 'DESTINATION',
    selector: (row) => row.destinationName,
    width: '200px',
  },
  {
    name: 'DEPARTURE DATE',
    selector: (row) => moment(row.departureDate).format('LLL'),
    width: '200px',
  },
  {
    name: 'RETURN DATE',
    selector: (row) => moment(row.returnDate).format('LLL'),
    width: '200px',
  },
  {
    name: 'TRAVELLERS',
    selector: (row) => row.travellers,
    width: '100px',
  },
  {
    name: '',
    selector: (row) => (
      <a href={`/quotes/${row.id}`} alt="quotedetails">
        <FaEye size={24} className="text-secondary" />
      </a>
    ),
    width: '80px',
  },
];

function QuoteList() {
  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveQuotes());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-white px-4 py-4 rounded space-y-4">
        <div className="text-xl font-bold text-primary">
          <h2>Quotes</h2>
        </div>
        <div className="flex grid grid-cols-5 gap-2">
          <FormField label="FROM" name="from" />
          <FormField label="DESTINATION" name="from" />
          <FormField label="DEPART DATE" name="from" />
          <FormField label="RETURN DATE" name="from" />
          <Button label="Search" />
          {/* TODO: set the search parameters and trigger useEffect */}
        </div>
        <div>
          <DataTable
            columns={columns}
            data={quotes}
            pagination
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default QuoteList;
