import { GetServerSideProps } from "next";
import React from "react";

type AppProps = {
  param: string;
};

function Activity(props: AppProps) {
  return <div>{props.param}</div>;
}
export default Activity;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      param: params.id,
    },
  };
};
