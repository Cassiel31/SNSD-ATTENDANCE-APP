import React from "react";

export default function HomePage({ setCurrentPage }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f6f2ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
      
    >
      
      <div
        style={{
          width: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
      <h2
        style={{
          fontFamily: "Playfair Display, serif",
            fontSize: "15px",
            color: "#1e1e1e",
            margin: 0,
            textAlign: "center",
            lineHeight: "0.95",
            fontWeight: "550"
          }}
        >
           Welcome To
        </h2>

        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "64px",
            color: "#1e1e1e",
            margin: 0,
            textAlign: "center",
            lineHeight: "0.95",
          }}
        >
          SNSD
        </h1>

<h2
        style={{
          fontFamily: "Playfair Display, serif",
            fontSize: "20px",
            color: "#1e1e1e",
            margin: 0,
            textAlign: "center",
            lineHeight: "0.95",
            fontWeight: "500"
          }}
        >

        Goa Khetra
        </h2>


        <button
          onClick={() => setCurrentPage("login")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#1f1f23",
            color: "white",
            fontSize: "18px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          LOG IN
        </button>

        <button
          onClick={() => setCurrentPage("signup")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "999px",
            border: "1px solid #d8cec3",
            backgroundColor: "transparent",
            color: "#1f1f23",
            fontSize: "18px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}