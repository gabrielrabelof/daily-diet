import { ReactNode } from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

import { Label } from "@components/Label";

type Props = TextInputProps & {
  label?: string,
  higher?: boolean,
  children?: ReactNode
  value?: string
}

export function Input({ label = "", higher = false, children, value = "", ...rest }: Props) {
  return (
    <>
      <Label 
        label={label}
      />

      <Container
        higher={higher}
        textAlignVertical="top"
        value={value}
        {...rest}
      >
        {children}
      </Container>
    </>
  )
}