/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      workId
      name
      color
      bgColor
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      workId
      name
      color
      bgColor
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      workId
      name
      color
      bgColor
      createdAt
      updatedAt
    }
  }
`;
export const createTable = /* GraphQL */ `
  mutation CreateTable(
    $input: CreateTableInput!
    $condition: ModelTableConditionInput
  ) {
    createTable(input: $input, condition: $condition) {
      id
      workId
      name
      body
      sort
      createdAt
      updatedAt
    }
  }
`;
export const updateTable = /* GraphQL */ `
  mutation UpdateTable(
    $input: UpdateTableInput!
    $condition: ModelTableConditionInput
  ) {
    updateTable(input: $input, condition: $condition) {
      id
      workId
      name
      body
      sort
      createdAt
      updatedAt
    }
  }
`;
export const deleteTable = /* GraphQL */ `
  mutation DeleteTable(
    $input: DeleteTableInput!
    $condition: ModelTableConditionInput
  ) {
    deleteTable(input: $input, condition: $condition) {
      id
      workId
      name
      body
      sort
      createdAt
      updatedAt
    }
  }
`;
export const createWork = /* GraphQL */ `
  mutation CreateWork(
    $input: CreateWorkInput!
    $condition: ModelWorkConditionInput
  ) {
    createWork(input: $input, condition: $condition) {
      id
      title
      image
      body
      sort
      tag {
        items {
          id
          workId
          name
          color
          bgColor
          createdAt
          updatedAt
        }
        nextToken
      }
      table {
        items {
          id
          workId
          name
          body
          sort
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWork = /* GraphQL */ `
  mutation UpdateWork(
    $input: UpdateWorkInput!
    $condition: ModelWorkConditionInput
  ) {
    updateWork(input: $input, condition: $condition) {
      id
      title
      image
      body
      sort
      tag {
        items {
          id
          workId
          name
          color
          bgColor
          createdAt
          updatedAt
        }
        nextToken
      }
      table {
        items {
          id
          workId
          name
          body
          sort
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWork = /* GraphQL */ `
  mutation DeleteWork(
    $input: DeleteWorkInput!
    $condition: ModelWorkConditionInput
  ) {
    deleteWork(input: $input, condition: $condition) {
      id
      title
      image
      body
      sort
      tag {
        items {
          id
          workId
          name
          color
          bgColor
          createdAt
          updatedAt
        }
        nextToken
      }
      table {
        items {
          id
          workId
          name
          body
          sort
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
