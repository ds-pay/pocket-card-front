import React, { useState } from "react";
import { DateTimePicker, KeyboardDateTimePicker  } from "@material-ui/pickers";
import { ContinerDate } from "./StylesInputDate";

const InputDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2019-01-01T18:54"));

  return (
    <ContinerDate>

      <KeyboardDateTimePicker
        value={selectedDate}
        onChange={setSelectedDate}
        label="Keyboard with error handler"
        onError={console.log}
        minDate={new Date("2018-01-01T00:00")}
        format="yyyy/MM/dd hh:mm a"
      />

      <DateTimePicker
        clearable
        value={selectedDate}
        onChange={setSelectedDate}
        helperText="Clear Initial State"
      />
    </ContinerDate>
  );
};

export default InputDate;
