import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Container } from "./styles";

import { Input } from "@components/Input";

export type AndroidMode = "date" | "time";

type Props = {
  mode: AndroidMode;
};

export function DateTimeInput({ mode }: Props) {
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [formattedDate, setFormattedDate] = useState("")

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShowPicker(false)
    setDate(currentDate)
    setFormattedDate(formatDate(currentDate))
  }

  const formatDate = (date: Date) => {
    if (mode === "date") {
      return date.toLocaleDateString()
    } else {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }

  return (
    <Container>
      <Input
        onFocus={() => setShowPicker(true)}
        value={formattedDate}
        showSoftInputOnFocus={false}
        label={mode === 'date' ? "Date" : "Time"}
      />    
      { showPicker && (
        <DateTimePicker
          mode={mode}
          display="spinner"
          value={date}
          onChange={onChange}
        />
      )}
    </Container>
  )
}
