import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import PrivateRoutes from "./privateRoutes";
import Navbar from "../component/navbar/navbar";
import NewUser from "../Pages/CreateTask/NewUser";
import CreateTask from "../modal/CreateTask";

function Router() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState("");
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
  });
  const onSaveNote = () => {
    console.log(noteData);
  };
  const [noteColor, setNoteColor] = useState("#f1f4fa");
  const onSaveColor = () => {
    console.log(noteColor);
  };
  return (
    <>
      {isLogin ? <Navbar setStep={setStep} /> : null}
      <Switch>
        <Route exact path="/">
          <NewUser setStep={setStep} step={step} noteData={noteData} setNoteData={setNoteData} onSaveNote={onSaveNote} noteColor={noteColor} setNoteColor={setNoteColor} onSaveColor={onSaveColor} />
        </Route>
        <PrivateRoutes exact component={ProfilePage} path="/Profile" />

        <PrivateRoutes exact component={CreateTask} path="/TaskPage" />

        <PrivateRoutes exact component={AllGoals} path="/AllGoals" />

        <PrivateRoutes exact component={Edit} path="/editprofile" />

        {/* <Route path="*">
          <div>
            <h1>PAGE NOT FOUND</h1>
          </div>
        </Route> */}
      </Switch>
    </>
  );
}

export default Router;
