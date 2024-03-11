/**
 *
 * SearchResultMeta
 *
 */

import React from 'react';

const SearchResultMeta = props => {
  const { count, label } = props;

  return (
    <p className='fw-normal' style={{color: "red"}}>
      {count} {label}
    </p>
  );
};

export default SearchResultMeta;
