/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurvivorResult = /* GraphQL */ `
  mutation CreateSurvivorResult(
    $input: CreateSurvivorResultInput!
    $condition: ModelSurvivorResultConditionInput
  ) {
    createSurvivorResult(input: $input, condition: $condition) {
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
export const updateSurvivorResult = /* GraphQL */ `
  mutation UpdateSurvivorResult(
    $input: UpdateSurvivorResultInput!
    $condition: ModelSurvivorResultConditionInput
  ) {
    updateSurvivorResult(input: $input, condition: $condition) {
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
export const deleteSurvivorResult = /* GraphQL */ `
  mutation DeleteSurvivorResult(
    $input: DeleteSurvivorResultInput!
    $condition: ModelSurvivorResultConditionInput
  ) {
    deleteSurvivorResult(input: $input, condition: $condition) {
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
export const createKillerResult = /* GraphQL */ `
  mutation CreateKillerResult(
    $input: CreateKillerResultInput!
    $condition: ModelKillerResultConditionInput
  ) {
    createKillerResult(input: $input, condition: $condition) {
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
export const updateKillerResult = /* GraphQL */ `
  mutation UpdateKillerResult(
    $input: UpdateKillerResultInput!
    $condition: ModelKillerResultConditionInput
  ) {
    updateKillerResult(input: $input, condition: $condition) {
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
export const deleteKillerResult = /* GraphQL */ `
  mutation DeleteKillerResult(
    $input: DeleteKillerResultInput!
    $condition: ModelKillerResultConditionInput
  ) {
    deleteKillerResult(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      uid
      name
      img
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      uid
      name
      img
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      uid
      name
      img
      createdAt
      updatedAt
    }
  }
`;
