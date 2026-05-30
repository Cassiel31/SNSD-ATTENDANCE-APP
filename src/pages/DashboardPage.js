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
          marginBottom: "40px",
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
            fontSize: "58px",
            lineHeight: "1",
            margin: 0,
            color: "#1f1f23",
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
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        <DashboardCard
          icon={
            <CalendarCheck
              size={70}
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
              size={70}
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
              size={70}
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
              size={70}
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

        aspectRatio: "1 / 1",

        border: "none",

        borderRadius: "36px",

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

        gap: "24px",

        padding: "24px",

        boxSizing:
          "border-box",

        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "center",
          alignItems:
            "center",
          color: "#1f1f23",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontSize: "30px",

          fontWeight:
            "600",

          color:
            "#1f1f23",

          lineHeight:
            "1.2",

          textAlign:
            "center",

          maxWidth: "85%",
        }}
      >
        {title}
      </div>
    </button>
  );
}
