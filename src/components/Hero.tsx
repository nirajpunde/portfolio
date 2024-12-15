import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="about"
      className="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 4rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 700,
          height: 700,
          background:
            'radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          background:
            'radial-gradient(circle, rgba(71,255,232,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          className="hero-tag fade-up"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span style={{ width: 32, height: 1, background: 'var(--accent)' }} />
          Full Stack Developer
        </div>
        <h1
          className="hero-name fade-up fade-up-delay-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}
        >
          Niraj
          <br />
          <span style={{ color: 'var(--accent)' }}>Punde</span>
        </h1>
        <div
          className="hero-title fade-up fade-up-delay-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: 400,
            color: 'var(--muted)',
            marginBottom: '2rem',
          }}
        >
          Spring Boot · Angular · Kafka · Cloud
        </div>
        <p
          className="hero-desc fade-up fade-up-delay-3"
          style={{
            maxWidth: 560,
            fontSize: '1rem',
            lineHeight: 1.75,
            color: '#aaa',
            marginBottom: '3rem',
          }}
        >
          Full-stack engineer with 4+ years building high-stakes financial
          systems at Credit Suisse. I turn complex data pipelines and trading
          infrastructure into tools that empower teams to make better decisions,
          faster.
        </p>
        <div
          className="hero-stats fade-up fade-up-delay-3"
          style={{
            display: 'flex',
            gap: '3rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '2.7M', label: 'Trades / Day' },
            { num: '$20B', label: 'Volume Managed' },
            { num: '40%', label: 'Fines Reduced' },
            { num: '99%', label: 'Balance Accuracy' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '0.25rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div
          className="hero-cta fade-up fade-up-delay-4"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <Link
            href="#projects"
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
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            className="hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--accent2)]"
          >
            View Projects
          </Link>
          <a
            href="mailto:nirajpunde@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              background: 'transparent',
              border: '1px solid var(--accent)',
              padding: '1rem 2rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.15s, color 0.15s',
            }}
            className="hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
