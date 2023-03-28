import React from 'react';

//Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import Configuration from '../components/ConfigSection';
import SelectSection from '../components/SelectSection';
import CardsSection from './CardsSection';
import EmptySection from './EmptySection';
import EnvelopeSection from './EnvelopeSection';
//Styles
import '../styles/components/app.css';

function App() {
  return (
    <>
      <Header />
      <main className="distribution__sections">
        <div className="firstRow">
          <Nav />
        </div>
        <div className="secondRow">
          <Configuration />
          <SelectSection />
          <div className="section__containers">
            <CardsSection />
            <EmptySection />
          </div>
        </div>
        <div className="thirdRow">
          <EnvelopeSection />
        </div>
      </main>
    </>
  );
}

export default App;
