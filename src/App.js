import React, { useState } from "react";

import HomePage from "./pages/HomePage";

import LoginPage from "./pages/LoginPage";

import SignupPage from "./pages/SignupPage";

import DetailsPage from "./pages/DetailsPage";

import DashboardPage from "./pages/DashboardPage";

import AttendancePage from "./pages/AttendancePage";

import ArrivalScannerPage from "./pages/ArrivalScannerPage";

import LeaveScannerPage from "./pages/LeaveScannerPage";

import PersonalPage from "./pages/PersonalPage";

import HierarchyPage from "./pages/HierarchyPage";

import SNSDPage from "./pages/SNSDPage";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState("home");

  const [currentUser, setCurrentUser] =
    useState(null);

  const [signupData, setSignupData] =
    useState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });

  switch (currentPage) {
    case "home":
      return (
        <HomePage
          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "login":
      return (
        <LoginPage
          setCurrentPage={
            setCurrentPage
          }

          setCurrentUser={
            setCurrentUser
          }
        />
      );

    case "signup":
      return (
        <SignupPage
          setCurrentPage={
            setCurrentPage
          }

          signupData={signupData}

          setSignupData={
            setSignupData
          }
        />
      );

    case "details":
      return (
        <DetailsPage
          setCurrentPage={
            setCurrentPage
          }

          signupData={signupData}

          setCurrentUser={
            setCurrentUser
          }
        />
      );

    case "dashboard":
      return (
        <DashboardPage
          currentUser={
            currentUser
          }

          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "attendance":
      return (
        <AttendancePage
          currentUser={
            currentUser
          }

          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "arrivalScanner":
      return (
        <ArrivalScannerPage
          currentUser={
            currentUser
          }

          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "leaveScanner":
      return (
        <LeaveScannerPage
          currentUser={
            currentUser
          }

          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "personal":
      return (
        <PersonalPage
          currentUser={
            currentUser
          }

          setCurrentUser={
            setCurrentUser
          }

          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "hierarchy":
      return (
        <HierarchyPage
          setCurrentPage={
            setCurrentPage
          }
        />
      );

    case "snsd":
      return (
        <SNSDPage
          setCurrentPage={
            setCurrentPage
          }
        />
      );

    default:
      return (
        <HomePage
          setCurrentPage={
            setCurrentPage
          }
        />
      );
  }
}