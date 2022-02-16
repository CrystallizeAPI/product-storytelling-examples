import { GraphQLClient } from "graphql-request";

const CATALOGUE_API_URL = `https://api.crystallize.com/dounot/catalogue`;

export const catalogueClient = new GraphQLClient(CATALOGUE_API_URL);

// Service API
// https://crystallize.com/learn/open-source/boilerplates/service-api
export const serviceAPIClient = new GraphQLClient(
    `http://localhost:3001/api/graphql`,
    {
      credentials: "include",
      mode: "cors",
    }
  );