/**
 * Created by leonardli on 4/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ className, label, type, ...otherProps }) => {
  return (
    <label className={`${className} foundation`}>
      {label}
      <input type={type || 'text'} {...otherProps}/>
    </label>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default FormInput;
