import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useRecoilState } from "recoil";
import { pageNameState } from "../states";
import Link from "next/link";

const Home: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div>
        <span>pageName 상태: {pageName}</span>
      </div>

      <div>
        <button
          onClick={() => {
            setPageName("IndexPage");
          }}
        >
          현재 페이지 이름으로 상태 변경
        </button>
      </div>

      <Link href="/post">
        <button>Post Pages 이동</button>
      </Link>
    </div>
  );
};

export default Home;
