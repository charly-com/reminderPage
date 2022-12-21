import React from "react";
import { Route, Routes } from "react-router-dom";
import Calender from "./calender/calender";
import ReminderPage from "./reminder/reminder"
import SavedReminder from "./savedReminder/savedReminder"



function routes() {
  return (
   <Routes>
        <Route path="/calender" element={<Calender/>}></Route>
        <Route path="/index" element={<ReminderPage/>}></Route>
        <Route path="/savedReminder" element={<SavedReminder />}></Route>
    </Routes>
  )
}

export default routes