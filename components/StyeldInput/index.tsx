import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode";
  editable?: boolean;
  secureTextEntry?: boolean;
};

const StyledInput = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    textContentType,
    editable,
    secureTextEntry,
  } = props;

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      editable={editable}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fffaf2",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    flex: 1,
    // marginHorizontal: 5,
  },
});

export default StyledInput;
