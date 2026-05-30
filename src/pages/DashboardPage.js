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
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              color: "#8b8b8b",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            Hello,
          </p>

          <h1
            style={{
              fontFamily:
                "Playfair Display, serif",
              fontSize: "40px",
              lineHeight: "1",
              margin: 0,
              color: "#1f1f23",
            }}
          >
            {currentUser?.full_name}
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#777",
              fontSize: "15px",
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
            gap: "16px",
          }}
        >
          <DashboardCard
            icon={<CalendarCheck size={42} />}
            title="Attendance"
            onClick={() =>
              setCurrentPage(
                "attendance"
              )
            }
          />

          <DashboardCard
            icon={<User size={42} />}
            title="Personal Details"
            onClick={() =>
              setCurrentPage(
                "personal"
              )
            }
          />

          <DashboardCard
            icon={<Crown size={42} />}
            title="Hierarchy"
            onClick={() =>
              setCurrentPage(
                "hierarchy"
              )
            }
          />

          <DashboardCard
            icon={<Building2 size={42} />}
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
        borderRadius: "30px",
        backgroundColor: "white",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05)",
        cursor: "pointer",

        height: "180px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: "18px",

        boxSizing:
          "border-box",
      }}
    >
      <div
        style={{
          height: "50px",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          marginBottom: "18px",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontSize: "18px",

          fontWeight: "600",

          color: "#1f1f23",

          textAlign:
            "center",

          lineHeight: "1.25",

          minHeight: "46px",

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
