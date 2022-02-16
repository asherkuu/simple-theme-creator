import Link from "next/link";
import { useRecoilState } from "recoil";
import { pageNameState } from "../states";

const PostPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return <div></div>;
};

export default PostPage;
