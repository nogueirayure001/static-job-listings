import React from "react";
import "./Filterbox.component.css";

const Filterbox = ({ activeFilters, updateFilters }) => {
  const handleDelete = (filter) => {
    updateFilters(filter);
  };

  const handleClear = (filters) => {
    filters.forEach((filter) => {
      handleDelete(filter);
    });
  };

  const selectedFilters = activeFilters.map((filter, index) => {
    return (
      <div className='filterbox__filter' key={index}>
        <p>{filter}</p>
        <button onClick={() => handleDelete(filter)}></button>
      </div>
    );
  });

  return (
    <section className='filterbox'>
      <div className='filterbox__filters-wrapper'>{selectedFilters}</div>
      <div className='filterbox__clear'>
        <button onClick={() => handleClear(activeFilters)}>Clear</button>
      </div>
    </section>
  );
};

export default Filterbox;
