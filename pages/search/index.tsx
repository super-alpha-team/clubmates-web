import React, { useEffect } from "react";

type AppProps = {
  query: string;
};
// // https://nextjs.org/docs/routing/shallow-routing
const LoginSuccess = ({ query }: AppProps) => {
  return <div>Đây là phần search</div>;
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
