import React, { useRef, useEffect, useState } from "react";

const textareaStyle = {
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid #888",
  padding: "8px 4px",
  fontSize: "16px",
  outline: "none",
  color: "white",
  width: "100%",
  transition: "border-color 0.3s, color 0.3s",
  resize: "none" as const,
  lineHeight: 1.5,
  paddingBottom: "6px",
  maxHeight: `${1.5 * 16 * 4}px`, // 1.5 line-height * 16px font-size * 4 líneas
  fontFamily: "inherit",
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

export const Textarea = React.forwardRef(({ placeholder, ...props }: TextareaProps, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset
      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = 1.5 * 16 * 4; // 4 líneas máximo
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  };

  useEffect(() => {
    handleInput(); // inicial
  }, []);

  return (
    <textarea
      ref={(el) => {
        textareaRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      placeholder={placeholder}
      style={{
        ...textareaStyle,
        borderBottomColor: isHovered ? "white" : "#888",
      }}
      onInput={handleInput}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="underline-input"
      {...props}
    />
  );
});
