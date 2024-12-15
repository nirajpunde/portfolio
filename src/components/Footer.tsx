export function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 4rem',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className="max-md:flex-col max-md:gap-2 max-md:text-center max-md:px-6"
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--muted)',
          letterSpacing: '0.08em',
        }}
      >
        © 2025 Niraj Punde — Built with Next.js
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--accent)',
        }}
      >
        Sunnyvale, CA
      </span>
    </footer>
  );
}
