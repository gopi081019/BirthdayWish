import React, { useEffect, useState } from "react";
import "./BirthdayWish.css";

export default function BirthdayWish() {
  const googleDocLink =
    "https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit";

  const [showHearts, setShowHearts] = useState(false);

  const openWish = () => {
    setShowHearts(true);

    setTimeout(() => {
      window.open(googleDocLink, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  useEffect(() => {
    document.title = "A Special Birthday Surprise ❤️";
  }, []);

  return (
    <div className="birthday-page">

      {/* Stars */}
      <div className="stars stars-1">✦ ✧ ✦ ✧ ✦</div>
      <div className="stars stars-2">✧ ✦ ✧ ✦ ✧</div>

      {/* Floating hearts */}
      <div className="floating-hearts">
        <span>❤️</span>
        <span>💗</span>
        <span>💕</span>
        <span>💖</span>
        <span>💓</span>
        <span>💞</span>
      </div>

      {/* Romantic glow */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* Main card */}
      <div className="birthday-card">

        <div className="top-heart">
          ♥
        </div>

        <div className="balloons">
          🎈 🎈 🎈
        </div>

        <p className="date">
          08 • OCTOBER • 2026
        </p>

        <p className="small-title">
          A little message from my heart...
        </p>

        <h1>
          Happy
          <span>Birthday Revathi</span>
        </h1>

        <div className="heart-line">
          ───── ♥ ─────
        </div>

        <p className="subtitle">
          Today is not just another day...
          <br />
          It's the day someone very special
          <br />
          came into this beautiful world. ❤️
        </p>

        <p className="romantic-line">
          You deserve all the happiness in the world. 🌹
        </p>

        <button
          className="wish-button"
          onClick={openWish}
        >
          <a style={{textDecoration: "none"}} href="https://drive.google.com/drive/folders/1aTsWxeis9O8N81frc3eCtAZDXyrlaPrz">
            <span>💌</span>
          Open Your Surprise
          <span>❤️</span>
          </a>
        </button>

        <div className="cake">
          🎂
        </div>

        <p className="footer-text">
          Made with infinite love ❤️
        </p>

        <p className="signature">
          — Someone who cares for you 💕
        </p>

      </div>

      {/* Heart explosion */}
      {showHearts && (
        <div className="heart-explosion">
          ❤️ 💕 💖 💗 💓 💞 ❤️
        </div>
      )}

    </div>
  );
}
