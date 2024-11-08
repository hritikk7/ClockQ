import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Flag, Pause, Play, RefreshCw } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card } from "./ui/card";

const Stopwatch: FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    if (isRunning) {
      let intervalId = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const handleLapClick = () => {
    setLaps([time, ...laps]);
  };
    console.log("🚀 ~ handleLapClick ~ laps:", laps)

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const formatTime = (time: number) => {
    const minutes = String(Math.floor(time / 60000));
    const seconds = String(Math.floor((time % 60000) / 1000));
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.padStart(2, "0")}:${seconds.padStart(
      2,
      "0"
    )}.${milliseconds.toString().padStart(2, "0")} `;
  };

  return (
    <>
      <div className="flex justify-center w-full  flex-col    space-y-4 ">
        <p
          className="
          text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
          font-mono bg-gradient-to-r from-neutral-900 via-neutral-400 to-neutral-100
          text-transparent bg-clip-text"
        >
          {/* {formattedTime(timeLeft)} 00:00.0 */}
          {formatTime(time)}
        </p>
        <div
          className="flex items-center justify-center md:text-lg text-muted-foreground
        text-sm  space-x-12"
        >
          <div className=" flex gap-12">
            <Button
              variant={"outline"}
              className="h-12 w-12 rounded-full "
              onClick={handleStart}
            >
              {isRunning ? <Pause strokeWidth={1} /> : <Play strokeWidth={1} />}
            </Button>

            <Button
              variant={"outline"}
              className="h-12 w-12 rounded-full "
              onClick={handleLapClick}
              disabled={!isRunning}
            >
              <Flag />
            </Button>
            <Button
              variant={"outline"}
              onClick={handleReset}
              className="h-12 w-12 rounded-full "
            >
              <RefreshCw strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
      {laps && laps.length != 0 && (
        <Card className="w-full h-[200px] overflow-hidden overflow-y-auto mt-3">
          <ScrollArea className="justify-center items-center">
            <div className="p-4 px-8">
              {laps.map((lap, index) => (
                <div key={index}>
                  <div key={index} className="text-sm flex justify-between ">
                    <span>Lap {laps.length - index}</span>
                    <span>{formatTime(lap)}</span>
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      )}
    </>
  );
};
export default Stopwatch;
