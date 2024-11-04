import { FC } from "react";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";
import { Input } from "./ui/input";

const Stopwatch: FC = () => {
  const isTimerInitialized = false;
  return (
    <div className="flex justify-center w-full h-[75%] flex-col  border-2 rounded-2xl  space-y-4 ">
      <p
        className="
    text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
    font-mono bg-gradient-to-r from-neutral-900 via-neutral-400 to-neutral-100
    text-transparent bg-clip-text"
      >
        {/* {formattedTime(timeLeft)} */} 00 : 00.0
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
              // onClick={() => setIsTimerRunning(!isTimerRunning)}
            >
              {/* {isTimerRunning ? (
              <Pause strokeWidth={1} />
            ) : (
              <Play strokeWidth={1} />
            )} */}
            </Button>

            <Button
              variant={"outline"}
              // onClick={handleReset}
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
              // onChange={(e) => handleMinuteInput(e)}
              className="w-[30%]"
            />
            <Button
              // onClick={handleStart}
              // disabled={!minuteInput}
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

export default Stopwatch;
