"use client";

import Image from "next/image";
import React from "react";

export default function CommingSoon() {
    return (
        <>
            <style>{`
        /* ─── Reset & Base ─────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ─── Root: full viewport, no separate header ───────────── */
        .cs-root {
          height: 100vh;
          width: 100%;
          background-color: #ffffff;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          display: flex;
          overflow: hidden;
        }

        /* ─── Left Panel ───────────────────────────────────────── */
        .cs-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: clamp(24px, 4vw, 56px) clamp(20px, 5vw, 64px);
        }

        /* Logo lives inside the left panel, top-left */
        .cs-logo-wrap {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          margin-bottom: auto;   /* pushes content to vertical center */
        }

        .cs-logo-wrap img {
          width: clamp(150px, 20vw, 280px);
          height: auto;
        }

        /* Text block sits in the vertical middle */
        .cs-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-bottom: clamp(24px, 4vw, 56px);
        }

        .cs-label {
          display: inline-block;
          font-size: clamp(9px, 0.9vw, 12px);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5029F3;
          margin-bottom: clamp(10px, 1.4vw, 18px);
        }

        .cs-heading {
          font-size: clamp(26px, 2.6vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          color: #5029F3;
          margin-bottom: clamp(12px, 2.6vw, 22px);
          letter-spacing: -0.01em;
        }

        .cs-description {
          font-size: clamp(13px, 1.15vw, 18px);
          font-weight: 400;
          line-height: 1.7;
          color: #333333;
          max-width: 580px;
        }

        /* ─── Right Panel: full viewport height ─────────────────── */
        .cs-right {
          flex: 1;
          position: relative;
        }

        .cs-people-image {
          object-fit: contain;
          object-position: bottom right;
        }

        /* ─── Responsive: Tablet (≤ 900px) ──────────────────────── */
        @media (max-width: 900px) {
          .cs-root {
            height: auto;
            min-height: 100dvh;
            flex-direction: column;
          }

          /* Image on top, text below */
          .cs-right {
            order: 1;
            flex: none;
            height: 65vw;
            min-height: 260px;
            max-height: 460px;
            width: 100%;
          }

          .cs-people-image {
            object-position: bottom center !important;
          }

          .cs-left {
            order: 2;
            flex: none;
            padding: 28px 24px 40px;
          }

          .cs-logo-wrap {
            margin-bottom: 0;
          }

          .cs-content {
            flex: none;
            padding-top: 24px;
            padding-bottom: 0;
          }

          .cs-heading {
            font-size: clamp(24px, 6vw, 40px);
          }

          .cs-description {
            max-width: 100%;
            font-size: clamp(13px, 3.5vw, 17px);
          }
        }

        /* ─── Responsive: Mobile (≤ 480px) ──────────────────────── */
        @media (max-width: 480px) {
          .cs-right {
            height: 72vw;
            min-height: 220px;
            max-height: 360px;
            display: none;
          }

          

          .cs-left {
            padding: 20px 18px 36px;
            justify-content: center;
            display: flex;
            height: 100vh;
            width: 100vw;
          }

          .cs-logo-wrap img {
            width: 150px;
          }

          .cs-label {
            font-size: 9px;
            letter-spacing: 0.14em;
          }

          .cs-heading {
            font-size: clamp(22px, 3.5vw, 32px);
          }

          .cs-description {
            font-size: 13px;
          }
        }
      `}</style>

            <div className="cs-root">

                {/* ── Left Panel ──────────────────────────────────────── */}
                <section className="cs-left" aria-label="Coming soon announcement">

                    {/* Logo — top of the left panel */}
                    <div className="cs-logo-wrap">
                        <Image
                            src="/logo/trulybag-logo.svg"
                            alt="Trulybag — Fashion & Beauty Marketplace"
                            width={280}
                            height={73}
                            priority
                        />
                    </div>

                    {/* Vertically centred text block */}
                    <div className="cs-content">
                        <span className="cs-label">Fashion and Beauty Marketplace</span>

                        <h1 className="cs-heading">
                            Trulybag will be&nbsp;live&nbsp;soon!
                        </h1>

                        <p className="cs-description">
                            Get ready to discover the latest in fashion, beauty, kids&apos;
                            essentials, and much more—all in one place.
                        </p>
                    </div>

                </section>

                {/* ── Right Panel: full-height image ──────────────────── */}
                <div className="cs-right " aria-hidden="true">
                    <Image
                        src="/images/people.png"
                        alt="People shopping with colourful bags"
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        priority
                        className="cs-people-image"
                    />
                </div>

            </div>
        </>
    );
}