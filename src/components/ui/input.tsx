"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type InputProps = {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
};
export const Input = ({
  placeholder,
  password,
  value,
  icon,
  onChange,
  onEnter,
  filled,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleKeyUp = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.code.toLowerCase() === "enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="ml-4 size-6 text-gray-500"
        />
      )}
      <input
        type={
          password && !showPassword ? "password" : "text"
        }
        className="flex-1 bg-transparent outline-none h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && (
        <FontAwesomeIcon
          // Passamos uma função que inverte o valor de showPassword ao clicar, alternando a visibilidade da senha.
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className="mr-4 size-6 text-gray-500 cursor-pointer"
        />
      )}
    </div>
  );
};
