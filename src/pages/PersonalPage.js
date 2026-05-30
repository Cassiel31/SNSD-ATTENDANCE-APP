import React, {
  useState,
} from "react";

import { supabase } from "../supabase";

export default function PersonalPage({
  currentUser,
  setCurrentUser,
  setCurrentPage,
}) {
  const [formData, setFormData] =
    useState({
      full_name:
        currentUser
          ?.full_name || "",

      username:
        currentUser
          ?.username || "",

      email:
        currentUser
          ?.email || "",

      date_of_birth:
        currentUser
          ?.date_of_birth || "",

      phone:
        currentUser
          ?.phone || "",
    });

  const [loading, setLoading] =
    useState(false);

  async function handleSave() {
    setLoading(true);

    const cleanUsername =
      formData.username
        .trim()
        .toLowerCase();

    const {
      data: existingUser,
    } = await supabase

      .from("users")

      .select("*")

      .eq(
        "username",
        cleanUsername
      )

      .neq(
        "id",
        currentUser.id
      )

      .maybeSingle();

    if (existingUser) {
      alert(
        "Username already exists"
      );

      setLoading(false);

      return;
    }

    const updates = {
      full_name:
        formData.full_name,

      username:
        cleanUsername,

      email:
        formData.email,

      date_of_birth:
        formData.date_of_birth,

      phone:
        formData.phone,
    };

    const {
      error,
    } = await supabase

      .from("users")

      .update(updates)

      .eq(
        "id",
        currentUser.id
      );

    setLoading(false);

    if (error) {
      alert(error.message);

      return;
    }

    setCurrentUser({
      ...currentUser,

      ...updates,
    });

    alert(
      "Details Updated"
    );

    setCurrentPage(
      "dashboard"
    );
  }

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  }

  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundColor:
          "#f6f2ee",

        padding: "28px",

        fontFamily:
          "Inter, sans-serif",

        boxSizing:
          "border-box",
      }}
    >
      <button
        onClick={() =>
          setCurrentPage(
            "dashboard"
          )
        }
        style={{
          background: "none",

          border: "none",

          color: "#777",

          cursor: "pointer",

          marginBottom: "28px",

          padding: 0,

          fontSize: "15px",
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          fontFamily:
            "Playfair Display, serif",

          fontSize: "48px",

          marginTop: 0,

          marginBottom: "28px",

          color:
            "#1f1f23",
        }}
      >
        Personal Details
      </h1>

      <div
        style={{
          backgroundColor:
            "white",

          borderRadius: "30px",

          padding: "24px",

          boxShadow:
            "0 10px 30px rgba(0,0,0,0.05)",

          display: "flex",

          flexDirection:
            "column",

          gap: "18px",
        }}
      >
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={
            formData.full_name
          }
          onChange={
            handleChange
          }
          style={inputStyle}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={
            formData.username
          }
          onChange={
            handleChange
          }
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
          style={inputStyle}
        />

        <input
          type="date"
          name="date_of_birth"
          value={
            formData.date_of_birth ||
            ""
          }
          onChange={
            handleChange
          }
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={
            formData.phone
          }
          onChange={
            handleChange
          }
          style={inputStyle}
        />

        <button
          onClick={handleSave}
          disabled={loading}
          style={{
            width: "100%",

            padding: "18px",

            borderRadius:
              "999px",

            border: "none",

            backgroundColor:
              "#1f1f23",

            color: "white",

            fontSize: "16px",

            fontWeight: "600",

            cursor: "pointer",

            marginTop: "10px",
          }}
        >
          {loading
            ? "SAVING..."
            : "SAVE CHANGES"}
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",

  padding: "16px",

  borderRadius: "18px",

  border:
    "1px solid #ddd",

  fontSize: "15px",

  boxSizing:
    "border-box",

  outline: "none",
};