import { ChangeEvent, FC, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Pause, Play, RefreshCw } from "lucide-react";

const Timer: FC = () => {
  const [minuteInput, setMinuteInput] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isTimerInitialized, setisTimerInitailized] = useState<boolean>(false);

  // console.log("🚀 ~ timeLeft:", timeLeft);÷

  const handleMinuteInput = (e: ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(e.target.value);
    setMinuteInput(minutes);
  };

  useEffect(() => {
    if (isTimerRunning) {
      console.log("inside timer running ");
      const intervalId = setInterval(() => {
        console.log("called setinterval");
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsTimerRunning(false);
            setisTimerInitailized(false);
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning, timeLeft]);

  const handleStart = () => {
    setIsTimerRunning(true);
    setTimeLeft(minuteInput * 60);
    setisTimerInitailized(true);
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setMinuteInput(0);
    setisTimerInitailized(false);
    setTimeLeft(0);
  };

  const formattedTime = (seconds: number) => {
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
      text-transparent bg-clip-text"
      >
        {formattedTime(timeLeft)}
      </p>
      <div
        className="flex items-center justify-center md:text-lg text-muted-foreground
      text-sm  space-x-12"
      >
        {isTimerInitialized ? (
          <div className=" flex gap-12">
            <Button
              variant={"outline"}
              className="h-12 w-12 rounded-full "
              onClick={() => setIsTimerRunning(!isTimerRunning)}
            >
              {isTimerRunning ? (
                <Pause strokeWidth={1} />
              ) : (
                <Play strokeWidth={1} />
              )}
            </Button>

            <Button
              variant={"outline"}
              onClick={handleReset}
              className="h-12 w-12 rounded-full "
            >
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
              disabled={!minuteInput}
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
