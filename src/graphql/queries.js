// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTech = `query GetTech($id: ID!) {
  getTech(id: $id) {
    id
    name
    users
  }
}
`;
export const listTechs = `query ListTechs(
  $filter: ModeltechFilterInput
  $limit: Int
  $nextToken: String
) {
  listTechs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      users
    }
    nextToken
  }
}
`;
export const getJobs = `query GetJobs($id: ID!) {
  getJobs(id: $id) {
    id
    title
    description
    technologies
    bidedBy
    postedDate
    postedBy
    contactInfo
  }
}
`;
export const listJobss = `query ListJobss(
  $filter: ModeljobsFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      technologies
      bidedBy
      postedDate
      postedBy
      contactInfo
    }
    nextToken
  }
}
`;
