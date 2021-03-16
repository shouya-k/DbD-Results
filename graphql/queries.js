/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurvivorResult = /* GraphQL */ `
  query GetSurvivorResult($id: ID!) {
    getSurvivorResult(id: $id) {
      id
      uid
      killerId
      killerImage
      killerName
      score
      parkId01
      parkId02
      parkId03
      parkId04
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      status
      survival
      createdAt
      updatedAt
    }
  }
`;
export const listSurvivorResults = /* GraphQL */ `
  query ListSurvivorResults(
    $filter: ModelSurvivorResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurvivorResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        killerId
        killerImage
        killerName
        score
        parkId01
        parkId02
        parkId03
        parkId04
        parkImage01
        parkImage02
        parkImage03
        parkImage04
        status
        survival
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKillerResult = /* GraphQL */ `
  query GetKillerResult($id: ID!) {
    getKillerResult(id: $id) {
      id
      uid
      killerId
      killerImage
      killerName
      score
      parkId01
      parkId02
      parkId03
      parkId04
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      killed
      perfect
      createdAt
      updatedAt
    }
  }
`;
export const listKillerResults = /* GraphQL */ `
  query ListKillerResults(
    $filter: ModelKillerResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKillerResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        killerId
        killerImage
        killerName
        score
        parkId01
        parkId02
        parkId03
        parkId04
        parkImage01
        parkImage02
        parkImage03
        parkImage04
        killed
        perfect
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      uid
      name
      img
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        name
        img
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchSurvivorResults = /* GraphQL */ `
  query SearchSurvivorResults(
    $filter: SearchableSurvivorResultFilterInput
    $sort: SearchableSurvivorResultSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchSurvivorResults(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        uid
        killerId
        killerImage
        killerName
        score
        parkId01
        parkId02
        parkId03
        parkId04
        parkImage01
        parkImage02
        parkImage03
        parkImage04
        status
        survival
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchKillerResults = /* GraphQL */ `
  query SearchKillerResults(
    $filter: SearchableKillerResultFilterInput
    $sort: SearchableKillerResultSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchKillerResults(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        uid
        killerId
        killerImage
        killerName
        score
        parkId01
        parkId02
        parkId03
        parkId04
        parkImage01
        parkImage02
        parkImage03
        parkImage04
        killed
        perfect
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        uid
        name
        img
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
