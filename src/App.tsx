import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Clock from "./components/ui/Clock";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex justify-center items-center">
      <div className="  w-[80%] h-[75vh]  border-border rounded-2xl bg-background/50 shadow-xl md:p-4 ">
        <Tabs defaultValue="account" className="w-full h-full p-2">
          <TabsList className="w-full  grid grid-cols-3 ">
            <TabsTrigger  className=" font-bold" value="clock">
              Clock
            </TabsTrigger>
            <TabsTrigger className="font-bold" value="timer">
              Timer
            </TabsTrigger>
            <TabsTrigger className="font-bold" value="stopwatch">
              Stopwatch
            </TabsTrigger>
          </TabsList>
          <TabsContent value="clock" className="w-full h-full flex items-center py-2 md:py-6 ">
            <Clock />
          </TabsContent>
          <TabsContent value="timer" className="w-full  flex items-center py-2 md:py-6">
            <Timer />
          </TabsContent>
          <TabsContent
            value="stopwatch"
            className="w-full h-full flex flex-grow flex-col overflow-y-auto py-2 md:py-6 "
          >
            <Stopwatch />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
