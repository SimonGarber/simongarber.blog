import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import HeroVideo from '../components/heroVideo'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [backgroundVideo] = get(
      this,
      'props.data.allContentfulBackgroundVideo.edges'
    )

    return (
      <div className={styles.homeContainer}>
        <header className={styles.header}>
          <Navigation />
          <Helmet title={siteTitle} />
        </header>

        <main className={styles.mainContainer}>
          <section className={styles.titleSection}>
            <div className={styles.titleContainer}>
              <h1>Flow State</h1>
            </div>
            <div className={styles.videoContainer}>
              <HeroVideo data={backgroundVideo.node} />
            </div>
          </section>

          <div className={styles.wrapper}>
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    allContentfulBackgroundVideo {
      edges {
        node {
          name
          videoFile {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulPageImage {
      edges {
        node {
          name
          heroImage {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: SCALE
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
