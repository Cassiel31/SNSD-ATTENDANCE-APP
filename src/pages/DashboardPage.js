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
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          marginBottom: "36px",
        }}
      >
        <p
          style={{
            color: "#8b8b8b",
            marginBottom: "8px",
            fontSize: "16px",
          }}
        >
          Hello,
        </p>

        <h1
          style={{
            fontFamily:
              "Playfair Display, serif",
            fontSize: "52px",
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
            fontSize: "16px",
          }}
        >
          @{currentUser?.username}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          width: "100%",
        }}
      >
        <DashboardCard
          icon={
            <CalendarCheck
              size={42}
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
              size={42}
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
              size={42}
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
              size={42}
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

        height: "140px",

        border: "none",

        borderRadius:
          "30px",

        backgroundColor:
          "white",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05)",

        cursor: "pointer",

        display: "flex",

        alignItems:
          "center",

        gap: "22px",

        padding: "24px",

        boxSizing:
          "border-box",

        textAlign: "left",
      }}
    >
      <div
        style={{
          width: "60px",

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color:
            "#1f1f23",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontSize: "24px",

          fontWeight:
            "600",

          color:
            "#1f1f23",

          fontFamily:
            "Playfair Display, serif",
        }}
      >
        {title}
      </div>
    </button>
  );
}
