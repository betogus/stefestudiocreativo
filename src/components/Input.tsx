import React from "react";

const inputBaseStyle = {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "2px solid #888", // línea inferior gris
    padding: "8px 4px",
    fontSize: "16px",
    outline: "none",
    color: "white", // texto que escribe el usuario
    width: "100%",
    transition: "border-color 0.3s, color 0.3s",
    fontFamily: "inherit",
  };
  
  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
  }
  
  export const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
    const [isHovered, setIsHovered] = React.useState(false);
  
    return (
      <input
        {...props}
        placeholder={placeholder}
        style={{
          ...inputBaseStyle,
          borderBottomColor: isHovered ? "white" : "#888", // línea inferior cambia con hover
          color: "white",
          // los placeholders se estilizan con CSS, no JS
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="underline-input"
      />
    );
  };