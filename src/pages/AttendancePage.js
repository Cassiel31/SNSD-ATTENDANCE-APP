import React from "react";

export default function AttendancePage({
  setCurrentPage,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f2ee",
        padding: "28px",
        fontFamily:
          "Inter, sans-serif",
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
          marginBottom: "32px",
          color: "#1f1f23",
        }}
      >
        Attendance
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <button
          onClick={() =>
            setCurrentPage(
              "arrivalScanner"
            )
          }
          style={cardStyle}
        >
          ARRIVE
        </button>

        <button
          onClick={() =>
            setCurrentPage(
              "leaveScanner"
            )
          }
          style={cardStyle}
        >
          LEAVE
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "100%",
  height: "150px",
  border: "none",
  borderRadius: "30px",
  backgroundColor: "white",
  fontSize: "28px",
  fontWeight: "600",
  color: "#1f1f23",
  cursor: "pointer",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.05)",
};