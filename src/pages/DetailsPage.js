import React, { useState } from "react";

import { supabase } from "../supabase";

export default function DetailsPage({
  setCurrentPage,
  signupData,
  setCurrentUser,
}) {
  const [dateOfBirth, setDateOfBirth] =
    useState("");

  const [anniversaryDate, setAnniversaryDate] =
    useState("");

  const [enrollmentDate, setEnrollmentDate] =
    useState("");

  const [enrollmentId, setEnrollmentId] =
    useState("");

  function formatDate(value) {
    value = value.replace(/\D/g, "");

    if (value.length > 2) {
      value =
        value.slice(0, 2) +
        "/" +
        value.slice(2);
    }

    if (value.length > 5) {
      value =
        value.slice(0, 5) +
        "/" +
        value.slice(5, 9);
    }

    return value;
  }

  function convertToSQLDate(date) {
    const parts = date.split("/");

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  async function handleCreateAccount() {
    const {
      data: authData,
      error: authError,
    } = await supabase.auth.signUp({
      email: signupData.email,
      password: signupData.password,
    });

    if (authError) {
      alert(authError.message);
      return;
    }

    const profile = {
      id: authData.user.id,

      username:
        signupData.username,

      full_name:
        signupData.fullName,

      email:
        signupData.email,

      date_of_birth:
        convertToSQLDate(
          dateOfBirth
        ),

      anniversary_date:
        anniversaryDate
          ? convertToSQLDate(
              anniversaryDate
            )
          : null,

      enrollment_date:
        convertToSQLDate(
          enrollmentDate
        ),

      enrollment_id:
        enrollmentId,
    };

    const { error } =
      await supabase
        .from("users")
        .insert([profile]);

    if (error) {
      alert(error.message);
      return;
    }

    setCurrentUser(profile);

    setCurrentPage("dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f2ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "340px",
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h1
          style={{
            fontFamily:
              "Playfair Display, serif",
            fontSize: "48px",
            margin: 0,
          }}
        >
          Welcome
        </h1>

        <input
          placeholder="Date of Birth"
          value={dateOfBirth}
          maxLength={10}
          onChange={(e) =>
            setDateOfBirth(
              formatDate(
                e.target.value
              )
            )
          }
          style={inputStyle}
        />

        <input
          placeholder="Anniversary Date"
          value={anniversaryDate}
          maxLength={10}
          onChange={(e) =>
            setAnniversaryDate(
              formatDate(
                e.target.value
              )
            )
          }
          style={inputStyle}
        />

        <input
          placeholder="Enrollment Date"
          value={enrollmentDate}
          maxLength={10}
          onChange={(e) =>
            setEnrollmentDate(
              formatDate(
                e.target.value
              )
            )
          }
          style={inputStyle}
        />

        <input
          placeholder="Enrollment ID"
          value={enrollmentId}
          onChange={(e) =>
            setEnrollmentId(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          onClick={
            handleCreateAccount
          }
          style={buttonStyle}
        >
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "#1f1f23",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};