import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./HomeBookDate.css";

const HomeBookDate = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <DatePicker
      selectsRange={true}
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      withPortal
      isClearable={true}
      placeholderText="Select Range "
      onChangeRaw={handleInputChange} //disable typing after selection date
    />
  );
};
export default HomeBookDate;
