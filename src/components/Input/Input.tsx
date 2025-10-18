import React from "react";
import "./Input.scss";

type InputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-group__label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-group__input ${
          error ? "input-group__input--error" : ""
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="input-group__error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
