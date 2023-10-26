import { graphql } from '$houdini'
import { error } from '@sveltejs/kit'

export const _houdini_load = graphql(`
query ProductData( $path: String! ){
    product:catalogue(language: "en", path: $path) {
      id
      name
      url: path
      topics{
        name
      }
      ... on Product {
        defaultVariant {
          price
          stock
          firstImage {
            url
          }
        }
      }
      brief:component(id: "brief") {
        content {
          ... on RichTextContent {
            html
          }
        }
      }
      nutrition:component(id: "nutrition") {
        content {
          ... on PropertiesTableContent{
            sections{
              title
              properties{
                key
                value
              }
            }
          }
        }
      }
      body:component(id: "body") {
        content {
          ... on ParagraphCollectionContent {
              paragraphs{
              title{
                text
              }
              body{
                html
              }
              images{
                url
                height
                height
              }
            }
          }
        }
      }
    }
  }
  
`)


/* @type { import('./$houdini').ProductDataVariables } */
export const _ProductDataVariables = (event) => {

    console.log( event )
    return {
        path: event.url.pathname,
    }
}