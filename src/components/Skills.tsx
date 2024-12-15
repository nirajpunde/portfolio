import { skillCategories } from '@/data/content';

export function Skills() {
  return (
    <section
      id="skills"
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
            01
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
            Skills
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                padding: '2rem',
                transition: 'background 0.2s',
              }}
              className="hover:bg-[var(--surface2)]"
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {cat.title}
                <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((s, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      padding: '0.35rem 0.75rem',
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {s}
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
