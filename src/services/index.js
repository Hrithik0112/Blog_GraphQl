import { gql, request } from "graphql-request";

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

  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/cllkt1m1g08r101t6cdnd7w69/master",
    query
  );

  return result;
};
