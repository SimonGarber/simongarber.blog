import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'

import heroStyles from '../components/hero.module.css'

const Article = ({ article }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.3,
  })

  return (
    <div style={{ height: '100vh' }} ref={ref}>
      {inView ? (
        <React.Fragment>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt=""
              fluid={article.heroImage.fluid}
            />
          </div>

          <div>
            <h1 className="section-headline">{article.title}</h1>
            <p>{article.publishDate}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: article.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default Article
