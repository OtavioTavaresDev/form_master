import React from 'react';

const FormInput = ({ label, type, register, name, error }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        {label}:<br />
        <input type={type} {...register(name)} style={{ width: '100%', padding: '8px' }} />
      </label>
      {error && <p style={{ color: 'red', marginTop: '4px' }}>{error.message}</p>}
    </div>
  );
};

export default FormInput;
