/**
 * Created by leonardli on 4/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const FormSelect = ({ className, label, children, ...otherProps }) => {
  return (
    <label className={`${className} foundation`}>
      {label}
      <select {...otherProps}>
        {children}
      </select>
    </label>
  );
};

FormSelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.array,
};

export default FormSelect;
