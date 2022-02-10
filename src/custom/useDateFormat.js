import { useState } from "react";

function useDateFormat() {
  const [date, setDate] = useState();

  const formatDate = (rawDate) => {
    const newDate = new Date(rawDate);
    const ampm = newDate.getHours() >= 12 ? "PM" : "AM";
    let hour = newDate.getHours();
    let hourFormat = "";

    if (hour > 12) {
      hourFormat = newDate.getHours() - 12;
      hour = "0" + hourFormat.toString();
    }

    const format = `${newDate.getFullYear()}-${
      newDate.getMonth() + 1
    }-${newDate.getDate()} ${hour}:${newDate.getMinutes()}:${newDate.getSeconds()} ${ampm}`;

    setDate(format);
  };

  return { date, formatDate };
}

export default useDateFormat;
