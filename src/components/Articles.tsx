'use client';

import { useState } from 'react';
import { articles } from '@/data/content';
import type { Article } from '@/data/content';

function ArticleModal({
  article,
  onClose,
}: {
  article: Article | null;
  onClose: () => void;
}) {
  if (!article) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          maxWidth: 700,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            padding: '2rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent2)',
                  border: '1px solid rgba(71,255,232,0.3)',
                  padding: '0.2rem 0.6rem',
                }}
              >
                {article.tag}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                }}
              >
                {article.date} · {article.readTime}
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
              }}
            >
              {article.title}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              color: 'var(--muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover:text-[var(--accent)]"
          >
            ✕
          </button>
        </div>
        <div style={{ padding: '2rem' }}>
          {article.fullContent.split('\n\n').map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#aaa',
                marginBottom: '1rem',
              }}
            >
              {p}
            </p>
          ))}
          <pre
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              lineHeight: 1.75,
              color: '#ccc',
              background: 'var(--surface2)',
              padding: '1.5rem',
              overflowX: 'auto',
              border: '1px solid var(--border)',
              marginTop: '1.5rem',
            }}
          >
            <code>{article.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export function Articles() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <>
      <section
        id="articles"
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
              03
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
              Articles
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
            className="articles-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}
          >
            {articles.map((a, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                  cursor: 'pointer',
                }}
                className="hover:border-[var(--accent2)]"
              >
                <div style={{ padding: '1.75rem 1.75rem 0' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--accent2)',
                        border: '1px solid rgba(71,255,232,0.3)',
                        padding: '0.2rem 0.6rem',
                      }}
                    >
                      {a.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--muted)',
                      }}
                    >
                      {a.date}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {a.title}
                  </div>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#888',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {a.excerpt}
                  </p>
                </div>
                <div
                  style={{
                    background: 'var(--surface2)',
                    borderTop: '1px solid var(--border)',
                    padding: '1.25rem 1.75rem',
                    overflowX: 'auto',
                  }}
                >
                  <pre
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      lineHeight: 1.7,
                      color: '#ccc',
                      whiteSpace: 'pre',
                    }}
                  >
                    <code>{a.codeSnippet}</code>
                  </pre>
                </div>
                <div
                  style={{
                    padding: '1rem 1.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <button
                    onClick={() => setActiveArticle(a)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--accent2)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    Read article →
                  </button>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                    }}
                  >
                    {a.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </>
  );
}
