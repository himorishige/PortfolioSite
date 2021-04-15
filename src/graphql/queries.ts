/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
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
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getWork = /* GraphQL */ `
  query GetWork($id: ID!) {
    getWork(id: $id) {
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
export const listWorks = /* GraphQL */ `
  query ListWorks(
    $filter: ModelWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchWorks = /* GraphQL */ `
  query SearchWorks(
    $filter: SearchableWorkFilterInput
    $sort: SearchableWorkSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchWorks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
