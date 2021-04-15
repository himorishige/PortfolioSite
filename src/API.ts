/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTagInput = {
  id?: string | null,
  workId: string,
  name: string,
  color?: string | null,
  bgColor?: string | null,
};

export type ModelTagConditionInput = {
  workId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  bgColor?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Tag = {
  __typename: "Tag",
  id?: string,
  workId?: string,
  name?: string,
  color?: string | null,
  bgColor?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTagInput = {
  id: string,
  workId?: string | null,
  name?: string | null,
  color?: string | null,
  bgColor?: string | null,
};

export type DeleteTagInput = {
  id?: string | null,
};

export type CreateTableInput = {
  id?: string | null,
  workId: string,
  name: string,
  body: string,
  sort: number,
};

export type ModelTableConditionInput = {
  workId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  body?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  and?: Array< ModelTableConditionInput | null > | null,
  or?: Array< ModelTableConditionInput | null > | null,
  not?: ModelTableConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Table = {
  __typename: "Table",
  id?: string,
  workId?: string,
  name?: string,
  body?: string,
  sort?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTableInput = {
  id: string,
  workId?: string | null,
  name?: string | null,
  body?: string | null,
  sort?: number | null,
};

export type DeleteTableInput = {
  id?: string | null,
};

export type CreateWorkInput = {
  id?: string | null,
  title: string,
  image: string,
  body: string,
  sort?: number | null,
  createdAt?: string | null,
};

export type ModelWorkConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  body?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelWorkConditionInput | null > | null,
  or?: Array< ModelWorkConditionInput | null > | null,
  not?: ModelWorkConditionInput | null,
};

export type Work = {
  __typename: "Work",
  id?: string,
  title?: string,
  image?: string,
  body?: string,
  sort?: number | null,
  tag?: ModelTagConnection,
  table?: ModelTableConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items?:  Array<Tag | null > | null,
  nextToken?: string | null,
};

export type ModelTableConnection = {
  __typename: "ModelTableConnection",
  items?:  Array<Table | null > | null,
  nextToken?: string | null,
};

export type UpdateWorkInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  body?: string | null,
  sort?: number | null,
  createdAt?: string | null,
};

export type DeleteWorkInput = {
  id?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  workId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  bgColor?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTableFilterInput = {
  id?: ModelIDInput | null,
  workId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  body?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  and?: Array< ModelTableFilterInput | null > | null,
  or?: Array< ModelTableFilterInput | null > | null,
  not?: ModelTableFilterInput | null,
};

export type ModelWorkFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  body?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelWorkFilterInput | null > | null,
  or?: Array< ModelWorkFilterInput | null > | null,
  not?: ModelWorkFilterInput | null,
};

export type ModelWorkConnection = {
  __typename: "ModelWorkConnection",
  items?:  Array<Work | null > | null,
  nextToken?: string | null,
};

export type SearchableWorkFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  image?: SearchableStringFilterInput | null,
  body?: SearchableStringFilterInput | null,
  sort?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableWorkFilterInput | null > | null,
  or?: Array< SearchableWorkFilterInput | null > | null,
  not?: SearchableWorkFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableWorkSortInput = {
  field?: SearchableWorkSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableWorkSortableFields {
  id = "id",
  title = "title",
  image = "image",
  body = "body",
  sort = "sort",
  createdAt = "createdAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableWorkConnection = {
  __typename: "SearchableWorkConnection",
  items?:  Array<Work | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type CreateTagMutationVariables = {
  input?: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input?: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input?: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTableMutationVariables = {
  input?: CreateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type CreateTableMutation = {
  createTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTableMutationVariables = {
  input?: UpdateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type UpdateTableMutation = {
  updateTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTableMutationVariables = {
  input?: DeleteTableInput,
  condition?: ModelTableConditionInput | null,
};

export type DeleteTableMutation = {
  deleteTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkMutationVariables = {
  input?: CreateWorkInput,
  condition?: ModelWorkConditionInput | null,
};

export type CreateWorkMutation = {
  createWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkMutationVariables = {
  input?: UpdateWorkInput,
  condition?: ModelWorkConditionInput | null,
};

export type UpdateWorkMutation = {
  updateWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkMutationVariables = {
  input?: DeleteWorkInput,
  condition?: ModelWorkConditionInput | null,
};

export type DeleteWorkMutation = {
  deleteWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTagQueryVariables = {
  id?: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items?:  Array< {
      __typename: "Tag",
      id: string,
      workId: string,
      name: string,
      color?: string | null,
      bgColor?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTableQueryVariables = {
  id?: string,
};

export type GetTableQuery = {
  getTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTablesQueryVariables = {
  filter?: ModelTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTablesQuery = {
  listTables?:  {
    __typename: "ModelTableConnection",
    items?:  Array< {
      __typename: "Table",
      id: string,
      workId: string,
      name: string,
      body: string,
      sort: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWorkQueryVariables = {
  id?: string,
};

export type GetWorkQuery = {
  getWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorksQueryVariables = {
  filter?: ModelWorkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorksQuery = {
  listWorks?:  {
    __typename: "ModelWorkConnection",
    items?:  Array< {
      __typename: "Work",
      id: string,
      title: string,
      image: string,
      body: string,
      sort?: number | null,
      tag?:  {
        __typename: "ModelTagConnection",
        items?:  Array< {
          __typename: "Tag",
          id: string,
          workId: string,
          name: string,
          color?: string | null,
          bgColor?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      table?:  {
        __typename: "ModelTableConnection",
        items?:  Array< {
          __typename: "Table",
          id: string,
          workId: string,
          name: string,
          body: string,
          sort: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchWorksQueryVariables = {
  filter?: SearchableWorkFilterInput | null,
  sort?: SearchableWorkSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchWorksQuery = {
  searchWorks?:  {
    __typename: "SearchableWorkConnection",
    items?:  Array< {
      __typename: "Work",
      id: string,
      title: string,
      image: string,
      body: string,
      sort?: number | null,
      tag?:  {
        __typename: "ModelTagConnection",
        items?:  Array< {
          __typename: "Tag",
          id: string,
          workId: string,
          name: string,
          color?: string | null,
          bgColor?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      table?:  {
        __typename: "ModelTableConnection",
        items?:  Array< {
          __typename: "Table",
          id: string,
          workId: string,
          name: string,
          body: string,
          sort: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    workId: string,
    name: string,
    color?: string | null,
    bgColor?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTableSubscription = {
  onCreateTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTableSubscription = {
  onUpdateTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTableSubscription = {
  onDeleteTable?:  {
    __typename: "Table",
    id: string,
    workId: string,
    name: string,
    body: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkSubscription = {
  onCreateWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkSubscription = {
  onUpdateWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkSubscription = {
  onDeleteWork?:  {
    __typename: "Work",
    id: string,
    title: string,
    image: string,
    body: string,
    sort?: number | null,
    tag?:  {
      __typename: "ModelTagConnection",
      items?:  Array< {
        __typename: "Tag",
        id: string,
        workId: string,
        name: string,
        color?: string | null,
        bgColor?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    table?:  {
      __typename: "ModelTableConnection",
      items?:  Array< {
        __typename: "Table",
        id: string,
        workId: string,
        name: string,
        body: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
