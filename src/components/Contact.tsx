'use client';
export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '6rem 4rem',
        background: 'var(--surface)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--accent)',
              letterSpacing: '0.1em',
            }}
          >
            05
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Contact
          </h2>
          <div
            style={{
              flex: 1,
              height: 1,
              background: 'var(--border)',
              maxWidth: 200,
            }}
          />
        </div>
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              Let&apos;s work together.
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#888',
                marginBottom: '2rem',
              }}
            >
              Open to full-time roles in full-stack engineering, fintech
              infrastructure, or data-intensive systems. Based in Sunnyvale, CA —
              available immediately.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <a
                href="mailto:nirajpunde@gmail.com"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ opacity: 0.6 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                nirajpunde@gmail.com
              </a>
              <a
                href="tel:+19455275790"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ opacity: 0.6 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (945) 527-5790
              </a>
              <a
                href="https://linkedin.com/in/nirajpunde"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ opacity: 0.6 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                style={{
                  width: '100%',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  padding: '0.875rem 1rem',
                  outline: 'none',
                }}
                className="focus:border-[var(--accent)]"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  padding: '0.875rem 1rem',
                  outline: 'none',
                }}
                className="focus:border-[var(--accent)]"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Tell me about the role or project..."
                rows={4}
                style={{
                  width: '100%',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  padding: '0.875rem 1rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
                className="focus:border-[var(--accent)]"
              />
            </div>
            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--accent)',
                border: 'none',
                padding: '1rem 2rem',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
