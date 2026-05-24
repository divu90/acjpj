export default function Ticker() {
  const items = [
    "The Opposition Awakens",
    "Filed under: Civic Hygiene",
    "Sponsored by no one · Funded by nothing",
    "Anti-CockroachJantaParty · Est. 2026",
    "Now accepting brooms, slippers, and reform",
    "Nation Before Narrative · Justice With Accountability",
    "Merit Before Identity · Policy Over Popularity",
  ];
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden font-mono uppercase"
      style={{
        zIndex: 2,
        background: "var(--color-accent)",
        color: "var(--color-paper)",
        fontSize: "10px",
        letterSpacing: "0.2em",
        padding: "6px 0",
      }}
      aria-hidden="true"
    >
      <div className="ticker-track inline-block whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="after:content-['✦'] after:ml-6 after:opacity-60" style={{ padding: "0 24px" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
