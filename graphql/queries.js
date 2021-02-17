/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurvivorResult = /* GraphQL */ `
  query GetSurvivorResult($id: ID!) {
    getSurvivorResult(id: $id) {
      id
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
