import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { Box } from "../Core";
import { CreateThemeButton, Logo, PageNavigation, SearchBar } from "./styled";

const Index = () => {
  return (
    <Box
      dp="flex"
      ai="flex-end"
      jc="space-between"
      w="100%"
      bdc="rgba(13, 17, 23, 0.95)"
    >
      <Logo>
        <Link href="/">
          <a>VS-Theme Creator</a>
        </Link>
      </Logo>
      <Box dp="flex" fd="row" g="10px" fx="1">
        {/* page navigation */}
        <PageNavigation dp="flex" fd="column" g="7px" fx="1">
          <Box dp="flex" fd="row" g="8px">
            <p>
              <Link href="/">
                <a>Pages</a>
              </Link>
            </p>
            <p>/</p>
            <p>
              <Link href="/">
                <a>Theme</a>
              </Link>
            </p>
          </Box>
          <p>Theme</p>
        </PageNavigation>
        <DefaultHeader />
      </Box>
    </Box>
  );
};

export default Index;

const DefaultHeader = () => {
  const router = useRouter();
  return (
    <>
      {/* search bar */}
      <SearchBar dp="flex" ai="center" jc="space-between" w="300px">
        <AiOutlineSearch />
        <input type="text" placeholder="Search Themes" />
      </SearchBar>

      {/* create theme button */}
      <CreateThemeButton
        type="button"
        onClick={() => router.push("/new-theme")}
      >
        <BsPlusLg />
        <p>Create Theme</p>
      </CreateThemeButton>
    </>
  );
};
