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
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
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
              marginBottom: "10px",
              fontSize: "18px",
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
            width: "100%",
          }}
        >
          <DashboardCard
            icon={<CalendarCheck size={52} />}
            title="Attendance"
            onClick={() =>
              setCurrentPage(
                "attendance"
              )
            }
          />

          <DashboardCard
            icon={<User size={52} />}
            title="Personal Details"
            onClick={() =>
              setCurrentPage(
                "personal"
              )
            }
          />

          <DashboardCard
            icon={<Crown size={52} />}
            title="Hierarchy"
            onClick={() =>
              setCurrentPage(
                "hierarchy"
              )
            }
          />

          <DashboardCard
            icon={<Building2 size={52} />}
            title="SNSD Updates"
            onClick={() =>
              setCurrentPage(
                "snsd"
              )
            }
          />
        </div>
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
        border: "none",
        borderRadius: "32px",
        backgroundColor: "white",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05)",
        cursor: "pointer",

        height: "220px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: "20px",

        boxSizing:
          "border-box",

        width: "100%",
      }}
    >
      <div
        style={{
          height: "60px",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          marginBottom: "20px",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontSize: "22px",

          fontWeight: "600",

          color: "#1f1f23",

          textAlign:
            "center",

          lineHeight: "1.25",

          minHeight: "60px",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",
        }}
      >
        {title}
      </div>
    </button>
  );
}
