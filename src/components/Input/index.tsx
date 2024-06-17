import { TextInputProps } from "react-native";

import { Container } from "./styles";

import { Label } from "@components/Label";

type Props = TextInputProps & {
  label?: string,
  higher?: boolean,
  halfWidth?: boolean
}

export function Input({ label = "", higher = false, halfWidth = false, ...rest }: Props) {
  return (
    <>
      <Label 
        label={label}
      />

      <Container
        higher={higher}
        halfWidth={halfWidth}
        textAlignVertical="top"
        {...rest}
      />
    </>
  )
}