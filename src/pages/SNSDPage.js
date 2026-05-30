import React, {
  useEffect,
  useState,
} from "react";

import { supabase } from "../supabase";

export default function SNSDPage({
  setCurrentPage,
}) {
  const [articles, setArticles] =
    useState([]);

  const [selectedArticle, setSelectedArticle] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    setLoading(true);

    const {
      data,
      error,
    } = await supabase
      .from("announcements")
      .select("*")
      .order(
        "is_pinned",
        {
          ascending: false,
        }
      )
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setArticles(data || []);
  }

  function formatDate(date) {
    return new Date(
      date
    ).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );
  }

  if (selectedArticle) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor:
            "#f6f2ee",
          padding: "24px",
          fontFamily:
            "Inter, sans-serif",
        }}
      >
        <button
          onClick={() =>
            setSelectedArticle(
              null
            )
          }
          style={{
            background:
              "none",
            border: "none",
            color: "#777",
            cursor: "pointer",
            padding: 0,
            marginBottom:
              "24px",
          }}
        >
          ← Back
        </button>

        <div
          style={{
            backgroundColor:
              "white",
            borderRadius:
              "30px",
            padding: "28px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <h1
            style={{
              fontFamily:
                "Playfair Display, serif",
              fontSize: "42px",
              marginTop: 0,
              color:
                "#1f1f23",
            }}
          >
            {
              selectedArticle.title
            }
          </h1>

          <p
            style={{
              color: "#777",
              marginBottom:
                "24px",
            }}
          >
            {formatDate(
              selectedArticle.created_at
            )}
          </p>

          {selectedArticle.image_url && (
            <img
              src={
                selectedArticle.image_url
              }
              alt=""
              style={{
                width: "100%",
                borderRadius:
                  "20px",
                marginBottom:
                  "24px",
              }}
            />
          )}

          <div
            dangerouslySetInnerHTML={{
              __html:
                selectedArticle.content,
            }}
            style={{
              lineHeight:
                "1.8",
              color:
                "#1f1f23",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor:
          "#f6f2ee",
        padding: "24px",
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
          padding: 0,
          marginBottom:
            "24px",
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
          marginBottom:
            "28px",
          color:
            "#1f1f23",
        }}
      >
        SNSD Updates
      </h1>

      {loading && (
        <p>
          Loading updates...
        </p>
      )}

      {!loading &&
        articles.length === 0 && (
          <div
            style={{
              backgroundColor:
                "white",
              borderRadius:
                "30px",
              padding: "30px",
              textAlign:
                "center",
            }}
          >
            No updates yet.
          </div>
        )}

      {articles.map(
        (article) => (
          <div
            key={article.id}
            onClick={() =>
              setSelectedArticle(
                article
              )
            }
            style={{
              backgroundColor:
                "white",

              borderRadius:
                "30px",

              padding: "24px",

              marginBottom:
                "20px",

              cursor:
                "pointer",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            {article.is_pinned && (
              <div
                style={{
                  color:
                    "#b8860b",

                  fontWeight:
                    "600",

                  marginBottom:
                    "12px",
                }}
              >
                📌 Pinned
              </div>
            )}

            <h2
              style={{
                marginTop: 0,

                marginBottom:
                  "12px",

                color:
                  "#1f1f23",

                fontSize:
                  "28px",

                fontFamily:
                  "Playfair Display, serif",
              }}
            >
              {article.title}
            </h2>

            <p
              style={{
                color: "#777",

                marginBottom:
                  "16px",
              }}
            >
              {formatDate(
                article.created_at
              )}
            </p>

            <div
              style={{
                color:
                  "#555",

                overflow:
                  "hidden",

                display:
                  "-webkit-box",

                WebkitLineClamp:
                  3,

                WebkitBoxOrient:
                  "vertical",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  article.content,
              }}
            />

            <div
              style={{
                marginTop:
                  "16px",

                color:
                  "#1f1f23",

                fontWeight:
                  "600",
              }}
            >
              Read More →
            </div>
          </div>
        )
      )}
    </div>
  );
}