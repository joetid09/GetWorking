import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage"
import NewApplication from "./Applications/NewApplication";
import ApplicationList from "./Applications/ApplicationList"

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <Switch>
            <Route path="/" exact>
                {isLoggedIn ? <HomePage /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/newApplication">
                {<NewApplication />}
            </Route>
            <Route path="/applications">
                <ApplicationList />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;