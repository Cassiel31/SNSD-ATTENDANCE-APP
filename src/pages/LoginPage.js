import React, { useState } from "react";
import { supabase } from "../supabase";

export default function LoginPage({
  setCurrentPage,
  setCurrentUser,
}) {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {
    if (!username.trim()) {
      alert(
        "Please enter your username."
      );
      return;
    }

    if (!password) {
      alert(
        "Please enter your password."
      );
      return;
    }

    const cleanUsername =
      username
        .trim()
        .toLowerCase();

    const {
      data: users,
      error: profileError,
    } = await supabase
      .from("users")
      .select("*");

    if (profileError) {
      alert(
        "Unable to connect."
      );
      return;
    }

    const profile =
      users?.find(
        (user) =>
          user.username
            ?.toLowerCase()
            === cleanUsername
      );

    if (!profile) {
      alert(
        "Username not found."
      );
      return;
    }

    const { error } =
      await supabase.auth.signInWithPassword(
        {
          email: profile.email,
          password,
        }
      );

    if (error) {
      alert(
        "Incorrect password."
      );
      return;
    }

    setCurrentUser(profile);

    setCurrentPage(
      "dashboard"
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f2ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "340px",
          backgroundColor:
            "white",
          padding: "32px",
          borderRadius: "28px",
          display: "flex",
          flexDirection:
            "column",
          gap: "22px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily:
                "Playfair Display, serif",
              fontSize: "48px",
              margin: 0,
              color:
                "#1f1f23",
            }}
          >
            Welcome
          </h1>

          <p
            style={{
              color: "#777",
              marginTop: "8px",
            }}
          >
            Sign in to continue.
          </p>
        </div>

        <div>
          <label>
            Username
          </label>

          <input
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            style={inputStyle}
          />
        </div>

        <div>
          <label>
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={inputStyle}
          />
        </div>

        <button
          onClick={
            handleLogin
          }
          style={buttonStyle}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing:
    "border-box",
  padding: "16px",
  marginTop: "8px",
  borderRadius: "16px",
  border:
    "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  backgroundColor:
    "#1f1f23",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};