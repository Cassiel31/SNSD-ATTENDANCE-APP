import React from "react";

import {
  CalendarCheck,
  User,
  Crown,
  Building2,
} from "lucide-react";

export default function DashboardPage({
  currentUser,
  setCurrentPage,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f2ee",
        fontFamily: "Inter, sans-serif",
        padding: "28px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          marginBottom: "42px",
        }}
      >
        <p
          style={{
            color: "#8b8b8b",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          Hello,
        </p>

        <h1
          style={{
            fontFamily:
              "Playfair Display, serif",
            fontSize: "56px",
            lineHeight: "1",
            margin: 0,
            color: "#1f1f23",
            wordBreak: "break-word",
          }}
        >
          {currentUser?.full_name}
        </h1>

        <p
          style={{
            marginTop: "12px",
            color: "#777",
            fontSize: "18px",
          }}
        >
          @{currentUser?.username}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "20px",
        }}
      >
        <DashboardCard
          icon={
            <CalendarCheck
              size={64}
            />
          }
          title="Attendance"
          onClick={() =>
            setCurrentPage(
              "attendance"
            )
          }
        />

        <DashboardCard
          icon={
            <User
              size={64}
            />
          }
          title="Personal Details"
          onClick={() =>
            setCurrentPage(
              "personal"
            )
          }
        />

        <DashboardCard
          icon={
            <Crown
              size={64}
            />
          }
          title="Hierarchy"
          onClick={() =>
            setCurrentPage(
              "hierarchy"
            )
          }
        />

        <DashboardCard
          icon={
            <Building2
              size={64}
            />
          }
          title="SNSD Updates"
          onClick={() =>
            setCurrentPage(
              "snsd"
            )
          }
        />
      </div>
    </div>
  );
}

function DashboardCard({
  icon,
  title,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",

        height: "250px",

        border: "none",

        borderRadius:
          "36px",

        backgroundColor:
          "white",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05)",

        cursor: "pointer",

        display: "flex",

        flexDirection:
          "column",

        justifyContent:
          "center",

        alignItems:
          "center",

        gap: "26px",

        padding: "24px",

        boxSizing:
          "border-box",

        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          color:
            "#1f1f23",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontSize: "28px",

          fontWeight:
            "600",

          color:
            "#1f1f23",

          lineHeight:
            "1.2",

          textAlign:
            "center",
        }}
      >
        {title}
      </div>
    </button>
  );
}
