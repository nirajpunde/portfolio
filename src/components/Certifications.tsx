'use client';
import { certifications } from '@/data/content';

export function Certifications() {
  return (
    <section id="certifications" style={{ padding: '6rem 4rem' }}>
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
            Licenses & Certifications
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
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem 2rem',
                border: '1px solid var(--border)',
                borderRadius: 8,
                background: 'rgba(42,42,58,0.3)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                }}
              >
                {cert.name}
              </div>
              <div
                onClick={() => window.open(cert.link, '_blank')}
                className="cursor-pointer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                }}
              >
                {cert.issuer} · {cert.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
