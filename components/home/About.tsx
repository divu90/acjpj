export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--color-ink)",
        color: "var(--color-paper)",
        padding: "72px 24px",
      }}
    >
      <div
        className="about-inner grid items-center"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }}
      >
        <div>
          <div
            className="font-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "var(--color-accent)",
              marginBottom: "12px",
            }}
          >
            Editorial · No. 001
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              color: "var(--color-paper)",
            }}
          >
            Every Swarm
            <br />
            Has Its{" "}
            <em className="italic" style={{ color: "var(--color-accent)" }}>
              Slipper.
            </em>
          </h2>
          <p
            className="dropcap font-display"
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(244,235,215,.75)",
              marginBottom: "14px",
            }}
          >
            They came calling themselves the voice of the lazy and unemployed — a swarm with five demands and zero shame. We respectfully disagree. The kitchen belongs to those who clean it.
          </p>
          <p className="font-display" style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(244,235,215,.75)", marginBottom: "14px" }}>
            This is the Opposition. The doers. The disinfectors. The DIY democrats. The people who{" "}
            <strong style={{ color: "var(--color-paper)", fontWeight: 700 }}>notice things and then do something about them.</strong>
          </p>
          <p className="font-display" style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(244,235,215,.75)", marginBottom: "14px" }}>
            We are not funded by corporations. We are not driven by outrage. We are not here to cancel — we are here to{" "}
            <strong style={{ color: "var(--color-paper)", fontWeight: 700 }}>govern responsibly, live civically, and hold the floor.</strong>
          </p>
          <a
            href="#pledge"
            className="btn"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "13px 26px",
              background: "var(--color-paper)",
              color: "var(--color-ink)",
              boxShadow: "4px 4px 0 var(--color-accent)",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            Join the Movement →
          </a>
        </div>
        <div className="about-graphic flex items-center justify-center relative">
          <div
            className="roach-float select-none"
            style={{ fontSize: "140px", opacity: 0.15 }}
          >
            🪳
          </div>
        </div>
      </div>
    </section>
  );
}
