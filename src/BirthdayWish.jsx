import React, { useEffect, useState } from "react";
import "./BirthdayWish.css";

export default function BirthdayWish() {
  // =========================================================
  // GOOGLE DOC LINK
  // =========================================================

  const googleDocLink =
    "https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit";


  // =========================================================
  // GOOGLE DRIVE PHOTO LINKS
  // =========================================================

  const photoLinks = [
    "https://drive.google.com/file/d/1b7aBL4YCHvDUqVxwmcfBtdU4uvCrsyV-/view?usp=drive_link",
    "https://drive.google.com/file/d/1Jzf0PjIXm1E776arQ913wRLmnFDjQKdw/view?usp=drive_link",
    "https://drive.google.com/file/d/1udLSYIX3gGKJKCNU6g7S3cEIofEFah2w/view?usp=drive_link",
    "https://drive.google.com/file/d/1Mu6nFbN7W7_8d2EfguKAvmkqWR5SWRbb/view?usp=drive_link",
    "https://drive.google.com/file/d/1r1wogeV-95J6KQKpqjSTCKgtXdHq7C55/view?usp=drive_link",
    "https://drive.google.com/file/d/1CQVEpLSL7FwAYsrMx2hZd4a2zlRNFdsK/view?usp=drive_link",
    "https://drive.google.com/file/d/1ZIKbuGoRSszWU4VnZvaR79MdSe-e8m9a/view?usp=drive_link",
    "https://drive.google.com/file/d/1E28rawBuTjSQGHkz6d6K56nxKqzWk_Db/view?usp=drive_link",
    "https://drive.google.com/file/d/1hgmw2zwvK-Oj-2fyEeg9MAFaYu0fLhVD/view?usp=drive_link",
    "https://drive.google.com/file/d/1ogp4CpHCNhuTgKljCoAgSoP11vr33Aa1/view?usp=drive_link",

    "https://drive.google.com/file/d/1BR49FOjbAUquyNr2hriF-S3AkqWVtXpN/view?usp=drive_link",
    "https://drive.google.com/file/d/11737HzE6NQX0lgqkpWCYGXqcp4BPOoyx/view?usp=drive_link",
    "https://drive.google.com/file/d/1qKHJtX01roW4aX5dnjNApfmMDfxjmF3u/view?usp=drive_link",
    "https://drive.google.com/file/d/1zm8G96tBQQGsgpMKosqigQB6Ve3aRNbL/view?usp=drive_link",
    "https://drive.google.com/file/d/1ObCOR4Z-_CU3HI5QG08AdVdDvSDnckR3/view?usp=drive_link",
    "https://drive.google.com/file/d/1jIuV6CWG1TwcS56P4KcHDsjJf9t9L3jU/view?usp=drive_link",
    "https://drive.google.com/file/d/1CSNhw0xOoX31pwaNFJD4HJcN-XZn3l-T/view?usp=drive_link",
    "https://drive.google.com/file/d/1mtK2k7bMPuv_Igm7uVl20HJ9cnaY_pk2/view?usp=drive_link",
    "https://drive.google.com/file/d/1QnoTCWDLrWJbb074c2yPs_gbdeo-6far/view?usp=drive_link",
    "https://drive.google.com/file/d/19uS_Yb-qASS1_KHd4u9QJl6ddiKTCfy-/view?usp=drive_link",

    "https://drive.google.com/file/d/1lAy64hr286DleDpoNTSOP9iYXDGJViF1/view?usp=drive_link",
    "https://drive.google.com/file/d/1oX1IzePF0gtZeUxD8u7jQJcVRQDO8qTB/view?usp=drive_link",
    "https://drive.google.com/file/d/1fnr7YBdsYP_HuAhS6OCkyrQOXKU9ofnA/view?usp=drive_link",
    "https://drive.google.com/file/d/1EgG6R5wF7Ij39zRQI_I9v8zKO8UgdG_k/view?usp=drive_link",
    "https://drive.google.com/file/d/14fVD-LFYe8rdhQiAED3WM5luhLnpnCdb/view?usp=drive_link",
    "https://drive.google.com/file/d/11HL1pYwxjA3yh8fUqQh96bYfMK8OO8M3/view?usp=drive_link",
    "https://drive.google.com/file/d/1GBtRWD-RBMAVi6ySrV6nSVtDkD8rp8Sz/view?usp=drive_link",
    "https://drive.google.com/file/d/1qOOQ7h-lhpa5O-TwAvnbZoDcumVyeuo2/view?usp=drive_link",
    "https://drive.google.com/file/d/1p1ItNGwz8L1GlNzNwvMdWPIYJMl2gdL7/view?usp=drive_link",
    "https://drive.google.com/file/d/1ZdaKm-HPiBdyok1J1mIKjSnDpVn2_HJv/view?usp=drive_link",

    "https://drive.google.com/file/d/1kOpRY4vF9IaQiNoPAhObp3kc7YiKGpsr/view?usp=drive_link",
    "https://drive.google.com/file/d/1JN7FgcR7I6JD7nVJSaqOk3wGa5LfEvxy/view?usp=drive_link",
    "https://drive.google.com/file/d/1-FtDb29CAfu_8J-XKjSg79UOLOUFWm_H/view?usp=drive_link",
    "https://drive.google.com/file/d/138c9Cn-PT81BDy5EJ6c-fykwKBz4K427/view?usp=drive_link",
    "https://drive.google.com/file/d/1Tv66OD6YnkZ8OOMoJQHY8VSZ-d81DviK/view?usp=drive_link",
    "https://drive.google.com/file/d/1cACa1RLJ1pa4N-hIoTZOaJy0FcXzyKJM/view?usp=drive_link",
    "https://drive.google.com/file/d/1JoB2lmcDzmuAxWGg-LOB_iicVrWFZZmP/view?usp=drive_link",
    "https://drive.google.com/file/d/1iaEDb9w-f63ELDnHINzFzRRjM3Xuf43e/view?usp=drive_link",
    "https://drive.google.com/file/d/1jn2ktqhjN24ik235M9pCpwW8m6bVQfNG/view?usp=drive_link",
    "https://drive.google.com/file/d/1OAk55PlkC1etje8bOsrW3-wJF7YJ5gZQ/view?usp=drive_link",
  ];


  // =========================================================
  // GET GOOGLE DRIVE FILE ID
  // =========================================================

  const getDriveFileId = (link) => {
    if (!link) {
      return "";
    }

    const match = link.match(
      /\/file\/d\/([a-zA-Z0-9_-]+)/
    );

    return match ? match[1] : "";
  };


  // =========================================================
  // CREATE MULTIPLE IMAGE URLS
  // =========================================================

  const getDriveImageUrls = (link) => {
    const fileId = getDriveFileId(link);

    if (!fileId) {
      return [];
    }

    return [
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`,

      `https://drive.google.com/uc?export=view&id=${fileId}`,

      `https://lh3.googleusercontent.com/d/${fileId}=w1000`,
    ];
  };


  // =========================================================
  // STATE
  // =========================================================

  const [showHearts, setShowHearts] = useState(false);


  // =========================================================
  // OPEN BIRTHDAY WISH
  // =========================================================

  const openWish = () => {
    setShowHearts(true);

    setTimeout(() => {
      window.open(
        googleDocLink,
        "_blank",
        "noopener,noreferrer"
      );
    }, 1200);
  };


  // =========================================================
  // PAGE TITLE
  // =========================================================

  useEffect(() => {
    document.title =
      "Happy Birthday Chellame ❤️";
  }, []);


  // =========================================================
  // COMPONENT
  // =========================================================

  return (
    <div className="birthday-page">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
      <div className="background-glow glow-three"></div>


      {/* =====================================================
          STARS
      ===================================================== */}

      <div className="stars stars-one">
        ✦ ✧ ✦ ✧ ✦
      </div>

      <div className="stars stars-two">
        ✧ ✦ ✧ ✦ ✧
      </div>

      <div className="stars stars-three">
        ✦ ✧ ✦
      </div>


      {/* =====================================================
          FLOATING HEARTS
      ===================================================== */}

      <div className="floating-hearts">

        <span className="heart heart-1">
          ❤️
        </span>

        <span className="heart heart-2">
          💕
        </span>

        <span className="heart heart-3">
          💗
        </span>

        <span className="heart heart-4">
          💖
        </span>

        <span className="heart heart-5">
          💓
        </span>

        <span className="heart heart-6">
          💞
        </span>

        <span className="heart heart-7">
          💗
        </span>

        <span className="heart heart-8">
          ❤️
        </span>

      </div>


      {/* =====================================================
          MEMORY PHOTO GALLERY
      ===================================================== */}

      <div className="memory-gallery">

        {photoLinks.map((link, index) => {

          const imageUrls =
            getDriveImageUrls(link);

          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`memory-photo photo-${index + 1}`}
            >

              <img
                src={imageUrls[0]}
                alt={`Birthday memory ${index + 1}`}
                draggable="false"

                data-url-index="0"

                onError={(event) => {

                  const currentIndex =
                    Number(
                      event.currentTarget.dataset.urlIndex
                    );

                  const nextIndex =
                    currentIndex + 1;


                  // Try next URL
                  if (
                    nextIndex <
                    imageUrls.length
                  ) {

                    event.currentTarget.dataset.urlIndex =
                      nextIndex;

                    event.currentTarget.src =
                      imageUrls[nextIndex];

                    return;
                  }


                  // All URLs failed
                  console.error(
                    `Birthday photo ${
                      index + 1
                    } failed:`,
                    link
                  );

                  event.currentTarget.style.display =
                    "none";

                  event.currentTarget.parentElement.classList.add(
                    "photo-failed"
                  );
                }}
              />

              <div className="photo-heart">
                ♥
              </div>

            </a>
          );
        })}

      </div>


      {/* =====================================================
          BIRTHDAY CARD
      ===================================================== */}

      <main className="birthday-card">

        <div className="card-shine"></div>


        {/* TOP HEART */}

        <div className="top-heart">
          ♥
        </div>


        {/* BALLOONS */}

        <div className="balloons">

          <span>🎈</span>
          <span>🎈</span>
          <span>🎈</span>

        </div>


        {/* DATE */}

        <p className="date">
          08 • OCTOBER • 2026
        </p>


        {/* SMALL TEXT */}

        <p className="small-title">
          A little message from my heart...
        </p>


        {/* TITLE */}

        <h1>
          Happy
          <span>
            Birthday Chellame
          </span>
        </h1>


        {/* HEART LINE */}

        <div className="heart-line">

          <span>────────</span>

          <b>♥</b>

          <span>────────</span>

        </div>


        {/* MESSAGE */}

        <p className="subtitle">
          Today is not just another day...
          <br />
          It's the day someone very special
          <br />
          came into this beautiful world. ❤️
        </p>


        {/* ROMANTIC TEXT */}

        <p className="romantic-line">
          You deserve all the happiness
          in the world. 🌹
        </p>


        {/* BUTTON */}

        <button
          className="wish-button"
          onClick={openWish}
        >

          <span>💌</span>

          <span>
            Open Your Surprise
          </span>

          <span>❤️</span>

        </button>


        {/* CAKE */}

        <div className="cake">
          🎂
        </div>


        {/* FOOTER */}

        <p className="footer-text">
          Made with infinite love ❤️
        </p>

        <p className="signature">
          — Someone who cares for you 💕
        </p>

      </main>


      {/* =====================================================
          HEART EXPLOSION
      ===================================================== */}

      {showHearts && (

        <div className="heart-explosion">

          <span>❤️</span>
          <span>💕</span>
          <span>💖</span>
          <span>💗</span>
          <span>💓</span>
          <span>💞</span>
          <span>❤️</span>
          <span>💗</span>
          <span>💕</span>
          <span>💖</span>

        </div>

      )}

    </div>
  );
}
