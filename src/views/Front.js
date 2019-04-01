import React from 'react';
import Table from '../components/table';
import PropTypes from 'prop-types';

const Front = (props) => {
  const {picArray} = props;
  return (
      <React.Fragment>
        <Table picArray={picArray}/>
      </React.Fragment>
  );
};

Front.propTypes = {
  picArray: PropTypes.array,
};

export default Front;