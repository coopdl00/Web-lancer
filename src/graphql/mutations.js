// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUsers = `mutation CreateUsers($input: CreateUsersInput!) {
  createUsers(input: $input) {
    id
    firstName
    lastName
    email
    password
    technologies
  }
}
`;
export const updateUsers = `mutation UpdateUsers($input: UpdateUsersInput!) {
  updateUsers(input: $input) {
    id
    firstName
    lastName
    email
    password
    technologies
  }
}
`;
export const deleteUsers = `mutation DeleteUsers($input: DeleteUsersInput!) {
  deleteUsers(input: $input) {
    id
    firstName
    lastName
    email
    password
    technologies
  }
}
`;
export const createJobs = `mutation CreateJobs($input: CreateJobsInput!) {
  createJobs(input: $input) {
    id
    title
    description
    technologies
  }
}
`;
export const updateJobs = `mutation UpdateJobs($input: UpdateJobsInput!) {
  updateJobs(input: $input) {
    id
    title
    description
    technologies
  }
}
`;
export const deleteJobs = `mutation DeleteJobs($input: DeleteJobsInput!) {
  deleteJobs(input: $input) {
    id
    title
    description
    technologies
  }
}
`;
