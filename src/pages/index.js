import React from 'react'
import { graphql } from 'gatsby'
import '../components/base.css'
import Helmet from 'react-helmet'
import HeroVideo from '../components/heroVideo'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Header from '../components/header'
import styles from './index.module.css'
import Article from '../components/Article'

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges
  const [backgroundVideo] = data.allContentfulBackgroundVideo.edges

  return (
    <div className={styles.homeContainer}>
      <Header>
        <Navigation />
        <Helmet title={siteTitle} />
      </Header>

      <main className={styles.mainContainer}>
        <section className={styles.titleSection}>
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
        {/*<div>
          {posts.map(({ node }) => {
            return <Article key={node.slug} article={node} />
          })}
        </div>*/}
      </main>
    </div>
  )
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
            fluid(
              maxWidth: 400
              maxHeight: 280
              resizingBehavior: SCALE
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          body {
            childMarkdownRemark {
              html
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
