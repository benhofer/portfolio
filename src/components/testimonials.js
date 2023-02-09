import React from 'react';
import { Icon } from '@iconify/react';
import quote from '@iconify/icons-bx/bxs-quote-alt-left';
import { TESTIMONIALS } from '../content';

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <h1 className="title has-text-centered">Testimonials</h1>
      <p>
        Here are some kind words from my colleagues. Find more on my{' '}
        <a
          href="https://www.linkedin.com/in/benhofer/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn profile
        </a>
        .
      </p>
      <div className="columns" style={{ flexWrap: 'wrap' }}>
        {TESTIMONIALS.map((t) => (
          <div
            key={`testimonial-${t.id}`}
            style={{ minWidth: '45%' }}
            className="column mx-5 sub-section mb-6"
          >
            <Icon icon={quote} width="62px" style={{ color: 'gray' }} />
            <h2 className="is-size-5">{t.text}</h2>
            <p>
              <strong>
                {t.colleague},{t.title},{t.organization}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
