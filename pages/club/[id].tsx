import { GetServerSideProps } from "next";
import React from "react";

type AppProps = {
  param: string;
};

function Club(props: AppProps) {
  return <div>{props.param}</div>;
}
export default Club;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // gọi lên server
  // lấy data
  // xử lý
  // trả về props
  return {
    props: {
      param: params.id,
    },
  };
};
