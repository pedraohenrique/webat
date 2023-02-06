import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { getQuote } from '../../redux/actions/quote';

export async function loader({ params }) {
  return params.id;
}

function QuoteDetail() {
  const id = useLoaderData();
  const quote = useSelector((state) => state.quotes.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote(id));
  }, [id, dispatch]);

  return (
    <div className="h-[80vh]">
      <div className="bg-white px-4 py-4 rounded space-y-4">
        <div className="text-xl font-bold text-primary">
          <h2>Quote Detail</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 items-start justify-start">
          <div>
            <div className="font-bold text-primary">Departure</div>
            <div className="font-light">{quote.departureName}</div>
          </div>
          <div>
            <div className="font-bold text-primary">Destination</div>
            <div className="font-light">{quote.destinationName}</div>
          </div>
          <div>
            <div className="font-bold text-primary">Departure date:</div>
            <div className="font-light">
              {moment(quote.departureDate).format('LLL')}
            </div>
          </div>
          <div>
            <div className="font-bold text-primary">Return date:</div>
            <div className="font-light">
              {moment(quote.returnDate).format('LLL')}
            </div>
          </div>
          <div>
            <div className="font-bold text-primary">Travelers:</div>
            <div className="font-light">{quote.travellers}</div>
          </div>
          <div>
            <div className="font-bold text-primary">Transportation:</div>
            <div className="font-light">{quote.transportation || ''}</div>
          </div>
          <div>
            <div className="font-bold text-primary">Contact information:</div>
            <div className="font-light">{quote.contactInformation}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteDetail;
