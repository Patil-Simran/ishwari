/**
 * OS "📅" emoji often shows a fixed date (e.g. July 17 on Apple). Use a neutral SVG with the real day.
 */
const InviteCalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 56 56"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="6" y="12" width="44" height="38" rx="5" stroke="currentColor" strokeWidth="2.4" />
    <path d="M6 24h44" stroke="currentColor" strokeWidth="2.4" />
    <rect x="17" y="6" width="7" height="12" rx="2" fill="currentColor" />
    <rect x="32" y="6" width="7" height="12" rx="2" fill="currentColor" />
    <text
      x="28"
      y="44"
      textAnchor="middle"
      fill="currentColor"
      style={{
        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
        fontSize: "18px",
        fontWeight: 600,
        fontStyle: "italic",
      }}
    >
      28
    </text>
  </svg>
);

export default InviteCalendarIcon;
