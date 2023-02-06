import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { FaEye } from 'react-icons/fa';
import { retrieveQuotes } from '../../redux/actions/quote';

const customStyles = {
  table: {
    style: {
      maxWidth: '85%',
      width: '85%',
    },
  },
  headRow: {
    style: {
      minHeight: '38px',
      height: '38px',
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
      minHeight: '28px',
      height: '28px',
    },
  },
  cells: {
    style: {
      paddingLeft: '2px', // override the cell padding for data cells
      paddingRight: '2px',
      fontSize: 'smaller',
      borderBottomWidth: '0px',
    },
  },
};

const columns = [
  {
    name: 'ID#',
    selector: (row) => row.id,
    width: '15%',
  },
  {
    name: 'NAME',
    selector: (row) => row.contactInformation,
    width: '25%',
  },
  {
    name: 'DESTINATION',
    selector: (row) => row.destinationName,
    width: '25%',
  },
  {
    name: 'PRICE',
    selector: (row) => '$1000.00',
    width: '25%',
  },
  {
    name: '',
    selector: (row) => (
      <a href={`/quotes/${row.id}`} alt="quotedetails">
        <FaEye size={20} className="text-secondary" />
      </a>
    ),
    width: '10%',
  },
];

function QuoteListWidget() {
  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveQuotes());
  }, [dispatch]);

  return (
    <div className="px-2 items-center justify-center">
      <DataTable columns={columns} data={quotes} customStyles={customStyles} />
    </div>
  );
}

export default QuoteListWidget;
