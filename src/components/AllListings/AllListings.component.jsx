import React from "react";
import Listing from "../Listing/Listing.component";
import "./AllListings.component.css";

const AllListings = ({ listings, activeFilters, updateFilters }) => {
  const activeListings = listings.map((listing) => {
    const tags = [
      listing.role,
      listing.level,
      ...listing.languages,
      ...listing.tools,
    ];

    const isActiveListing = activeFilters.every((filter) =>
      tags.includes(filter)
    );

    return isActiveListing ? (
      <Listing
        data={listing}
        tags={tags}
        updateFilters={updateFilters}
        key={listing.id}
      />
    ) : null;
  });

  return <section className='listings'>{activeListings}</section>;
};

export default AllListings;
