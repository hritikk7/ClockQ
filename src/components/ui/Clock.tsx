import { Calendar } from "lucide-react";
import { FC, useEffect, useState } from "react";

const Clock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [is24Hour, setIs24Hour] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options24: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const options12: Intl.DateTimeFormatOptions = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formatTime = () => {
    if (is24Hour) {
      return date.toLocaleTimeString("en-US", options24);
    } else {
      return date.toLocaleTimeString("en-US", options12);
    }
  };

  const formatDate = () => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex justify-center w-full h-[30vh] flex-col  border-2 rounded-2xl  space-y-4 ">
      <p
        className="
        text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
        font-mono bg-gradient-to-r from-neutral-900 via-neutral-400 to-neutral-100
        text-transparent bg-clip-text
      "
      >
        {formatTime()}
      </p>
      <div className="flex items-center justify-center md:text-lg text-muted-foreground
        text-sm
      ">
        {" "}
        <Calendar className="h-5 w-5 mr-2" /> {formatDate()}
      </div>
    </div>
  );
};

export default Clock;
