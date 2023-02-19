import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.DATOCMS_API_ENDPOINT as string;
const API_TOKEN = process.env.DATOCMS_API_TOKEN as string;

export function request(query: string, variables?: unknown) {
  const headers = {
    authorization: `Bearer ${API_TOKEN}`,
    'X-Include-Drafts': 'true',
    'X-Exclude-Invalid': 'true',
  };

  const client = new GraphQLClient(API_URL, { headers });
  return client.request(query, variables);
}
