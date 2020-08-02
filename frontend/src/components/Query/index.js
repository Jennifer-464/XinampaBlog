import React from "react";
import { useQuery } from "@apollo/react-hooks";

// useQuery used to call Strapi server at
// http://localhost:1337/graphql

// id is being sent for individual article picking
const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;

// if request successful,
// child component with retrieved data as prop will be returned
