import React from "react";
import "./Listing.component.css";

const Listing = ({ data, tags, updateFilters }) => {
  const listingTags = tags.map((tag, index) => (
    <button onClick={() => updateFilters(null, tag)} key={index}>
      {tag}
    </button>
  ));

  return (
    <article className='listing'>
      <div className='listing__img' data-img={`../.${data.logo}`}></div>

      <div className='listing__info-wrapper'>
        <div className='listing__info'>
          <h3 className='listing__title'>{data.position}</h3>

          <div className='listing__info-company'>
            <span className='listing__comp-name'>{data.company}</span>
            {data.new ? <span className='listing__new-tag'>new!</span> : null}
            {data.featured ? (
              <span className='listing__featured-tag'>featured</span>
            ) : null}
          </div>

          <p className='listing__info-others'>{`${data.postedAt} · ${data.contract} · ${data.location}`}</p>
        </div>

        <div className='listing__tags'>{listingTags}</div>
      </div>
    </article>
  );
};

export default Listing;
