export default function TerminalReading({
  value,
  label,
}: {
  value: number | 'loading' | 'unavailable';
  label: string;
}) {
  return (
    <span className="terminal-reading" role="status" aria-atomic="true">
      <span className="sr-only">{label}: </span>
      {value === 'loading' ? (
        <>
          <span className="terminal-loading">
            <span className="terminal-scan" aria-hidden="true" />
            SYNCING
          </span>
          <noscript><span className="terminal-offline">OFFLINE</span></noscript>
        </>
      ) : value === 'unavailable' ? (
        <span className="terminal-offline">UNAVAILABLE</span>
      ) : value}
    </span>
  );
}
