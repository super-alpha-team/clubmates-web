import Activity from "components/layout/Activity";
import RelevantResults from "components/layout/RelevantResults";
import SearchResults from "components/layout/SearchResults";
import React, { useEffect } from "react";

type AppProps = {
  query: string;
};

// // https://nextjs.org/docs/routing/shallow-routing
const LoginSuccess = ({ query }: AppProps) => {
  const DATA = [
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },
    {
      data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
      }
    },

  ]

  return (
    <div className="p-4">
      <SearchResults searchKeyword="Chiến dịch mùa hè xanh lá" results={DATA} />
      <RelevantResults relevantResults={DATA}/>
    </div>
  );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}
