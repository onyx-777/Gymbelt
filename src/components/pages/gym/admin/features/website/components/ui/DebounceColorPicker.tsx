"use client";

import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";

type DebouncedColorPickerProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export const DebouncedColorPicker = ({
  label,
  name,
  value,
  onChange,
}: DebouncedColorPickerProps) => {
  const [localColor, setLocalColor] = useState(value);

  const debouncedOnChange = useCallback(
    debounce((color: string) => {
      onChange(color);
    }, 200),
    [onChange]
  );

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setLocalColor(newColor);
    debouncedOnChange(newColor);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: "block", marginBottom: 4 }}>{label}</label>
      <input
        type="color"
        name={name}
        value={localColor}
        onChange={handleColorChange}
        style={{ width: "100%", height: 40, border: "1px solid #ccc" }}
      />
    </div>
  );
};
