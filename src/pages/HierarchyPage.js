import React, {
  useEffect,
  useState,
} from "react";

import { supabase } from "../supabase";

export default function HierarchyPage({
  setCurrentPage,
}) {
  const [hierarchy, setHierarchy] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  async function fetchHierarchy() {
    setLoading(true);

    const {
      data,
      error,
    } = await supabase
      .from("hierarchy")
      .select("*");

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    const order = [
      "Member Incharge",
      "Mukhya Sanchalak",
      "Up Mukhya Sanchalak (Field & HQ)",
      "Up Mukhya Sanchalak (Administration)",
      "Up Mukhya Sanchalak (Field & Training)",
    ];

    const sorted =
      (data || []).sort(
        (a, b) =>
          order.indexOf(
            a.position_title
          ) -
          order.indexOf(
            b.position_title
          )
      );

    setHierarchy(sorted);
  }

  useEffect(() => {
    fetchHierarchy();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundColor:
          "#f6f2ee",

        padding: "24px",

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

          padding: 0,

          marginBottom:
            "24px",

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

          color:
            "#1f1f23",

          marginTop: 0,

          marginBottom:
            "28px",
        }}
      >
        Hierarchy
      </h1>

      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
          {hierarchy[0] && (
            <div
              style={{
                backgroundColor:
                  "white",

                borderRadius:
                  "30px",

                padding:
                  "24px",

                textAlign:
                  "center",

                marginBottom:
                  "24px",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={
                  hierarchy[0]
                    .image_url
                }
                alt=""
                style={{
                  width:
                    "180px",

                  height:
                    "180px",

                  objectFit:
                    "cover",

                  borderRadius:
                    "24px",

                  marginBottom:
                    "18px",
                }}
              />

              <h2
                style={{
                  margin:
                    "0 0 10px 0",

                  color:
                    "#1f1f23",
                }}
              >
                {
                  hierarchy[0]
                    .member_name
                }
              </h2>

              <p
                style={{
                  color:
                    "#777",

                  margin: 0,

                  fontWeight:
                    "600",
                }}
              >
                {
                  hierarchy[0]
                    .position_title
                }
              </p>
            </div>
          )}

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "1fr 1fr",

              gap: "18px",
            }}
          >
            {hierarchy
              .slice(1)
              .map(
                (
                  person
                ) => (
                  <div
                    key={
                      person.position_title
                    }
                    style={{
                      backgroundColor:
                        "white",

                      borderRadius:
                        "24px",

                      padding:
                        "18px",

                      textAlign:
                        "center",

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src={
                        person.image_url
                      }
                      alt=""
                      style={{
                        width:
                          "120px",

                        height:
                          "120px",

                        objectFit:
                          "cover",

                        borderRadius:
                          "20px",

                        marginBottom:
                          "14px",
                      }}
                    />

                    <h3
                      style={{
                        margin:
                          "0 0 8px 0",

                        fontSize:
                          "18px",

                        color:
                          "#1f1f23",
                      }}
                    >
                      {
                        person.member_name
                      }
                    </h3>

                    <p
                      style={{
                        margin: 0,

                        color:
                          "#777",

                        fontSize:
                          "14px",

                        fontWeight:
                          "600",
                      }}
                    >
                      {
                        person.position_title
                      }
                    </p>
                  </div>
                )
              )}
          </div>
        </>
      )}
    </div>
  );
}