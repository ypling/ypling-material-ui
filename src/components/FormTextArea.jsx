/**
 * Created by leonardli on 4/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const FormTextArea = ({ className, label, ...otherProps }) => {
  return (
    <label className={`${className} foundation`}>
      {label}
      <textarea {...otherProps}/>
    </label>
  );
};

FormTextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default FormTextArea;
