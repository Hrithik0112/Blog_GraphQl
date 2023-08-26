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

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/cllkt1m1g08r101t6cdnd7w69/master",
    query
  );

  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/cllkt1m1g08r101t6cdnd7w69/master",
    query,
    { slug, categories }
  );

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/cllkt1m1g08r101t6cdnd7w69/master",
    query
  );

  return result.categories;
};

export const getPostDetails = async () => {
  const query = gql`
    query GetPostDetails{$slug : String!} {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          avatar {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/cllkt1m1g08r101t6cdnd7w69/master",
    query,
    { slug }
  );

  return result.post;
};
