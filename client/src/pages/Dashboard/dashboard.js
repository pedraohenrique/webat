import React from 'react';
import { FiFastForward } from 'react-icons/fi';
import { GiBackwardTime } from 'react-icons/gi';
import Card from '../../components/Card';
import headerImage from '../../assets/header.webp';
import QuoteQuickAdd from './QuoteQuickAdd';
import QuoteListWidget from './QuoteListWidget';

function Dashboard() {
  return (
    <div>
      <div className="pb-4">
        <img src={headerImage} alt="headerimage" className="rounded" />
      </div>
      <div className="grid grid-cols-11 gap-4">
        <div className="col-span-4">
          <Card icon={<FiFastForward />} title="Quick quote">
            <QuoteQuickAdd />
          </Card>
        </div>
        <div className="col-span-4">
          <Card
            icon={<GiBackwardTime />}
            title="Pending quotes"
            refresh
            onRefresh={
              () => console.log('Refresh')
              // TODO Refresh the quotes list
            }
          >
            <QuoteListWidget />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
