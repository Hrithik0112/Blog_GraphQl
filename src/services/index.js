import { GraphQLClient, request } from "graphql-request";

const url = `${process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT}`;

const graphConnect = new GraphQLClient(url);

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const { postsConnection } = await request(graphqlAPI, query);

  return postsConnection.edges;
};
