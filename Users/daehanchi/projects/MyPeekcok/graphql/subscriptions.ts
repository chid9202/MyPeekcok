/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToNewMessage = /* GraphQL */ `
  subscription SubscribeToNewMessage($conversationId: ID!) {
    subscribeToNewMessage(conversationId: $conversationId) {
      author {
        cognitoId
        id
        username
        registered
      }
      content
      conversationId
      createdAt
      id
      isSent
      recipient {
        cognitoId
        id
        username
        registered
      }
      sender
    }
  }
`;
export const subscribeToNewUCs = /* GraphQL */ `
  subscription SubscribeToNewUCs($userId: ID!) {
    subscribeToNewUCs(userId: $userId) {
      associated {
        conversationId
        userId
      }
      conversation {
        createdAt
        id
        name
      }
      conversationId
      user {
        cognitoId
        id
        username
        registered
      }
      userId
    }
  }
`;
export const subscribeToNewUsers = /* GraphQL */ `
  subscription SubscribeToNewUsers {
    subscribeToNewUsers {
      cognitoId
      conversations {
        nextToken
      }
      id
      messages {
        nextToken
      }
      username
      registered
    }
  }
`;
