import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

type ButtonPopUpProps = {
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  icon: number;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean | undefined;
  onPress?: () => void;
  style?: any;
};

const ButtonPopUp: React.FC<ButtonPopUpProps> = ({
  children,
  backgroundColor,
  textColor,
  icon,
  type,
  disabled,
  onPress,
  style,
}) => {
  const buttonStyle = {
    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    backgroundColor: backgroundColor,
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: 15,
    fontWeight: 'bold',
    ...style,
  };

  const textStyle = {
    color: textColor,
    marginRight: 10,
    fontSize: 20,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      disabled={disabled}
    >
      <Image source={icon} style={{ tintColor: textColor, marginRight: 10, width: 20, height: 20,resizeMode : 'contain' }} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPopUp;