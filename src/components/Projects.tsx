import { projects } from '@/data/content';

export function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 4rem' }}>
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
            02
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
            Projects
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="group"
              style={{
                border: '1px solid var(--border)',
                padding: '2rem',
                background: 'var(--surface)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
            >
              <div
                className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: 'var(--accent)' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--bg)',
                  background: 'var(--accent)',
                  padding: '0.2rem 0.6rem',
                  display: 'inline-block',
                  marginBottom: '1.25rem',
                }}
              >
                {p.badge}
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: '#999',
                  marginBottom: '1.5rem',
                }}
              >
                {p.desc}
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                {p.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--muted)',
                      padding: '0.3rem 0 0.3rem 1rem',
                      position: 'relative',
                      lineHeight: 1.5,
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
                      →
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--accent2)',
                      border: '1px solid rgba(71,255,232,0.2)',
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
