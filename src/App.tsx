import { useEffect, useState } from "react";
import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Clock from "./components/ui/Clock";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex justify-center items-center">
      <div className="h-[60%] w-[80%]  border-border rounded-2xl bg-background/50 shadow-xl md:p-4 ">
        <Tabs defaultValue="account" className="w-full h-full p-2">
          <TabsList className="w-full grid grid-cols-3 ">
            <TabsTrigger  value="clock">Clock</TabsTrigger>
            <TabsTrigger value="timer">Timer</TabsTrigger>
            <TabsTrigger value="stopwatch">Stopwatch</TabsTrigger>
          </TabsList>
          <TabsContent value="clock" className="w-full h-full ">
            <Clock />
          </TabsContent>
          <TabsContent value="timer">Change your password here.</TabsContent>
          <TabsContent value="stopwatch">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
