import { experience } from '@/data/content';

export function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 4rem' }}>
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
            04
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
            Experience
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
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              background: 'var(--border)',
            }}
          />
          {experience.map((exp, i) => (
            <div
              key={i}
              style={{
                paddingLeft: '2.5rem',
                paddingBottom: '3rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: -4,
                  top: 6,
                  width: 9,
                  height: 9,
                  background: 'var(--accent)',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}
              >
                {exp.period}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                }}
              >
                {exp.role}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                  marginBottom: '1.25rem',
                }}
              >
                {exp.company}
              </div>
              <ul style={{ listStyle: 'none' }}>
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      color: '#999',
                      padding: '0.4rem 0 0.4rem 1.25rem',
                      position: 'relative',
                      borderBottom: '1px solid rgba(42,42,58,0.5)',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent)',
                        fontSize: '0.7rem',
                      }}
                    >
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
