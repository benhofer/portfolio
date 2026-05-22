import React from 'react';
import { Icon } from '@iconify/react';
import check from '@iconify/icons-mdi/check';
import rightArrow from '@iconify/icons-mdi/arrow-right-drop-circle';
import { WORK } from '../content';

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h1 className="title has-text-centered">Portfolio</h1>
      {WORK.map((work, i) => (
        <div key={`work-${work.id}`}>
          <div
            className={`${i % 2 ? 'reverse' : ''} sub-section category-header`}
          >
            <h2 className="is-size-2 mb-2">{work.title} &nbsp;</h2>
            <div className="subtitle time">{work.time}</div>
            {work.technologies && (
              <ul className="technologies">
                {work.technologies.map((t) => (
                  <li key={`tech-${t}`}>
                    <Icon icon={check} width="24px" />
                    <i>{t}</i>
                  </li>
                ))}
              </ul>
            )}

            <p className="mb-2">{work.description}</p>
            {work.link && (
              <a
                href={work.link[0]}
                rel="noreferrer noopener"
                target="_blank"
                style={{ alignItems: 'center', display: 'flex' }}
              >
                {work.link[1]}
                <Icon icon={rightArrow} width="18px" className="ml-1" />
              </a>
            )}
          </div>
          {work.projects &&
            work.projects.map((project, j) => (
              <div
                className={`${j % 2 ? 'reverse' : ''} sub-section`}
                key={`work-${work.id}-project-${project.id}`}
              >
                <div className="project-header">
                  <h3 className="is-size-4">{project.title}</h3>
                  <ul className="technologies pb-5">
                    {project.technologies.map((t) => (
                      <li key={`tech-${t}`}>
                        <Icon icon={check} width="24px" />
                        <i>{t}</i>
                      </li>
                    ))}
                  </ul>
                  <div className="columns main-columns">
                    <div className="mb-4 px-4 column is-one-third">
                      <p className="mb-2">{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
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
                      {project.headerImg && (
                        <div
                          key={`img-${project.id}`}
                          className="product-img-wrapper mx-4"
                        >
                          <img
                            src={project.headerImg}
                            className={
                              project.headerImgBorder ? 'product-img' : ''
                            }
                            alt=""
                            width="100%"
                          />
                        </div>
                      )}
                      {project.headerVideo && (
                        <video
                          controls
                          muted
                          style={{ border: '1px solid silver' }}
                          poster={
                            project.headerVideoPoster
                              ? project.headerVideoPoster
                              : ''
                          }
                        >
                          Your browser does not support the &lt;video&gt; tag.
                          <source src={project.headerVideo} />
                        </video>
                      )}
                    </div>
                  </div>
                </div>
                {project.images &&
                  project.images.map((img) => (
                    <div
                      className="columns"
                      key={`work-${work.id}-project-${project.id}img-${img.id}`}
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
                {project.images && project.thumbnails && (
                  <img src={project.images[0]} alt="" />
                )}
              </div>
            ))}
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
