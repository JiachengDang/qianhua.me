import React from 'react';
import Card from '../components/Card';
import LandingPage from '../layouts/LandingPage';

const index = () => {
  return (
    <main className="overflow-hidden scrollbar-hide">
      <LandingPage />
      <div
        id="portfolio"
        className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        <Card
          title="new in"
          image="Accessories.jpg"
          link="new-stuff"
          hoverColor="red"
          category="landing"
        />
        <Card
          title="new in"
          image="Accessories.jpg"
          link="new-stuff"
          hoverColor="red"
          category="landing"
        />
        <Card
          title="new in"
          image="Accessories.jpg"
          link="new-stuff"
          hoverColor="red"
          category="landing"
        />
        <Card
          title="new in"
          image="Accessories.jpg"
          link="new-stuff"
          hoverColor="red"
          category="landing"
        />
        <Card
          title="new in"
          image="Accessories.jpg"
          link="new-stuff"
          hoverColor="red"
          category="landing"
        />
        <Card
          title="new in"
          image="Accessories.jpg"
          link="new-stuff"
          hoverColor="red"
          category="landing"
        />
      </div>
    </main>
  );
};

export default index;
