import Link from 'next/link';

export function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 4rem',
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}
      >
        NP.
      </div>
      <ul
        className="nav-links-desktop"
        style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
        }}
      >
        {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((label) => (
          <li key={label}>
            <Link
              href={`#${label.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
              className="nav-link"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
