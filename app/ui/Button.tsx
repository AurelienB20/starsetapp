import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const adjust = (color: string, amount: number) => {
  return '#' + color.replace(/^#/, '').replace(/../g, (color) => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
};

type ButtonProps = {
  children: React.ReactNode;
  variant: 'contained' | 'outlined' | 'text';
  backgroundColor: string;
  textColor: string;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean | undefined;
  onPress?: () => void;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ children, variant = "contained", backgroundColor, textColor, type, disabled, onPress, style }) => {
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>(() => ({}));

  useEffect(() => {
    let buttonStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 110,
      height: 35,
      color: textColor,
      borderRadius: 20,
      borderWidth: 0,
      cursor: 'pointer'
    };
    let containedStyle: React.CSSProperties = { backgroundColor: backgroundColor };
    let outlinedStyle: React.CSSProperties = { backgroundColor: 'transparent', borderColor: backgroundColor, borderWidth: 1.5 };
    let textStyle: React.CSSProperties = { backgroundColor: 'transparent' };
    if (variant === "contained")
      buttonStyle = { ...buttonStyle, ...containedStyle };
    else if (variant === "outlined")
      buttonStyle = { ...buttonStyle, ...outlinedStyle };
    else if (variant === "text")
      buttonStyle = { ...buttonStyle, ...textStyle };
    buttonStyle = { ...buttonStyle, ...style };
    setButtonStyle(buttonStyle);
  }, [variant, backgroundColor, textColor, style]);

  const handlePressIn = () => {
    setButtonStyle(prev => {
      let newStyle = { ...prev };
      newStyle.transition = 'background-color 0.2s ease-in-out';
      if (variant === 'contained') {
        newStyle.backgroundColor = adjust(backgroundColor, -50);
      } else if (variant === 'outlined') {
        newStyle.backgroundColor = backgroundColor;
      } else if (variant === 'text') {
        newStyle.backgroundColor = adjust(backgroundColor, 60);
      }
      return newStyle;
    });
  };

  const handlePressOut = () => {
    setButtonStyle(prev => {
      let newStyle = { ...prev };
      if (variant === 'contained')
        newStyle.backgroundColor = backgroundColor;
      else if (variant === 'outlined')
        newStyle.backgroundColor = 'transparent';
      else if (variant === 'text') {
        newStyle.backgroundColor = 'transparent';
      }
      return newStyle;
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      //style={buttonStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;