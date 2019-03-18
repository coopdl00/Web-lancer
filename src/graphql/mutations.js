// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTech = `mutation CreateTech($input: CreateTechInput!) {
  createTech(input: $input) {
    id
    name
    users
  }
}
`;
export const updateTech = `mutation UpdateTech($input: UpdateTechInput!) {
  updateTech(input: $input) {
    id
    name
    users
  }
}
`;
export const deleteTech = `mutation DeleteTech($input: DeleteTechInput!) {
  deleteTech(input: $input) {
    id
    name
    users
  }
}
`;
export const createJobs = `mutation CreateJobs($input: CreateJobsInput!) {
  createJobs(input: $input) {
    id
    title
    description
    technologies
    bidedBy
    postedDate
  }
}
`;
export const updateJobs = `mutation UpdateJobs($input: UpdateJobsInput!) {
  updateJobs(input: $input) {
    id
    title
    description
    technologies
    bidedBy
    postedDate
  }
}
`;
export const deleteJobs = `mutation DeleteJobs($input: DeleteJobsInput!) {
  deleteJobs(input: $input) {
    id
    title
    description
    technologies
    bidedBy
    postedDate
  }
}
`;
