import { ChangeEvent, FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Pause, RefreshCw } from "lucide-react";

const Timer: FC = () => {
  const [minuteiInput, setMinuteInput] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  console.log("🚀 ~ isTimerRunning:", isTimerRunning);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // console.log("🚀 ~ timeLeft:", timeLeft);÷

  const handleMinuteInput = (e: ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(e.target.value);
    setMinuteInput(minutes);
  };

  const handleStart = () => {

    setIsTimerRunning(true);
    setTimeLeft(minuteiInput * 60);
    if (isTimerRunning) {
      console.log("inside timer running ");
      const intervalId = setInterval(() => {
        console.log("called setinterval");
        setTimeLeft((prevTime) => {
          console.log("🚀 ~ setTimeLeft ~ prevTime:", prevTime);
          if (prevTime <= 1) {
            setIsTimerRunning(false);
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setMinuteInput(0);
    setTimeLeft(0);
  };

  const formattedTime = (seconds: number) => {
    console.log(seconds);
    const minutes = String(Math.floor(seconds / 60));
    console.log("🚀 ~ formattedTime ~ minutes:", minutes);
    const remainingSeconds = String(Math.floor(seconds % 60));
    return `${minutes.padStart(2, "0")} : ${remainingSeconds.padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-center w-full h-[75%] flex-col  border-2 rounded-2xl  space-y-4 ">
      <p
        className="
      text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
      font-mono bg-gradient-to-r from-neutral-900 via-neutral-400 to-neutral-100
      text-transparent bg-clip-text
    "
      >
        {formattedTime(timeLeft)}
      </p>
      <div
        className="flex items-center justify-center md:text-lg text-muted-foreground
      text-sm  space-x-12"
      >
        {isTimerRunning ? (
          <div className=" flex gap-12">
            <Button variant={"outline"} className="h-12 w-12 rounded-full ">
              <Pause strokeWidth={1} />
            </Button>
            <Button variant={"outline"} onClick={handleReset} className="h-12 w-12 rounded-full ">
              <RefreshCw strokeWidth={1} />
            </Button>
          </div>
        ) : (
          <>
            {" "}
            <Input
              type="number"
              placeholder="Minutes "
              onChange={(e) => handleMinuteInput(e)}
              className="w-[30%]"
            />
            <Button
              onClick={handleStart}
              disabled={!minuteiInput}
              variant={"outline"}
            >
              {" "}
              Start
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
