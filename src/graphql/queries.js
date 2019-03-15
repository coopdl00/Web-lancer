// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUsers = `query GetUsers($id: ID!) {
  getUsers(id: $id) {
    id
    firstName
    lastName
    email
    password
    technologies
  }
}
`;
export const listUserss = `query ListUserss(
  $filter: ModelusersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      password
      technologies
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
    }
    nextToken
  }
}
`;
