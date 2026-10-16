import React from 'react';
import { Icon } from '@iconify/react';
import check from '@iconify/icons-mdi/check';
import rightArrow from '@iconify/icons-mdi/arrow-right-drop-circle';
import { UXWORK } from '../content';

function UXPortfolio() {
  return (
    <section className="section" id="portfolio">
      <h1 className="title has-text-centered">Case Studies</h1>
      {UXWORK.map((work, i) => (
        <div key={`work-${work.id}`}>
             <div
                className={`${i % 2 ? 'reverse' : ''} sub-section`}
                key={`work-${work.id}-project-${work.id}`}
              >
                <h3 className="is-size-2">{work.title}</h3>
                <div className="subtitle">{work.subtitle}</div>
                <ul className="technologies pb-5">
                  {work?.skills?.map((t) => (
                    <li key={`tech-${t}`}>
                      <Icon icon={check} width="24px" />
                      <i>{t}</i>
                    </li>
                  ))}
                </ul>
                  <div className="columns main-columns">
                    <div className="mb-4 px-4 column is-one-third">
                      <p className="mb-2">{work.description}</p>
                      {work.link && (
                        <a
                          href={work.link}
                          rel="noreferrer noopener"
                          target="_blank"
                          style={{
                            alignItems: 'center',
                            display: 'flex',
                          }}
                        >
                          View Site
                          <Icon
                            icon={rightArrow}
                            width="18px"
                            className="ml-1"
                          />
                        </a>
                      )}
                    </div>
                    <div className="column is-two-thirds">
                      {work.headerImg && (
                        <div
                          key={`img-${work.id}`}
                          className="product-img-wrapper mx-4"
                        >
                          <img
                            src={work.headerImg}
                            className={
                              work.headerImgBorder ? 'product-img' : ''
                            }
                            alt=""
                            width="100%"
                          />
                        </div>
                      )}
                      {work.headerVideo && (
                        <video
                          controls
                          muted
                          style={{ border: '1px solid silver' }}
                          poster={
                            work.headerVideoPoster
                              ? work.headerVideoPoster
                              : ''
                          }
                        >
                          Your browser does not support the &lt;video&gt; tag.
                          <source src={work.headerVideo} />
                        </video>
                      )}
                    </div>
                  </div>
                {work.images &&
                  work.images.map((img) => (
                    <div
                      className="columns"
                      key={`work-${work.id}-project-${work.id}img-${img.id}`}
                    >
                      <div className={`column ${img[1]}`}>
                        <img src={img[0]} alt="" />
                      </div>
                      {img[2] && (
                        <div className={`column ${img[3]}`}>
                          <p>{img[2]}</p>
                        </div>
                      )}
                    </div>
                  ))}
                {work.images && work.thumbnails && (
                  <img src={work.images[0]} alt="" />
                )}
              </div>
        </div>
      ))}
    </section>
  );
}

export default UXPortfolio;
