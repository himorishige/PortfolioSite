/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateTable = /* GraphQL */ `
  subscription OnCreateTable {
    onCreateTable {
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
export const onUpdateTable = /* GraphQL */ `
  subscription OnUpdateTable {
    onUpdateTable {
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
export const onDeleteTable = /* GraphQL */ `
  subscription OnDeleteTable {
    onDeleteTable {
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
export const onCreateWork = /* GraphQL */ `
  subscription OnCreateWork {
    onCreateWork {
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
export const onUpdateWork = /* GraphQL */ `
  subscription OnUpdateWork {
    onUpdateWork {
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
export const onDeleteWork = /* GraphQL */ `
  subscription OnDeleteWork {
    onDeleteWork {
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
