import Link from "next/link";
import React, { useState } from "react";
import { Box } from "../Core";
import { Category, Filter } from "./styled";
import StarSvg from "/assets/ic-star.svg";
import RocketSvg from "/assets/ic-rocket.svg";
import HeartSvg from "/assets/ic-heart.svg";
import dynamic from "next/dynamic";
import { BsPlusLg } from "react-icons/bs";
import { GrRefresh } from "react-icons/gr";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Index = () => {
  return (
    <Box
      w="270px"
      dp="flex"
      fd="column"
      ai="center"
      h="100%"
      bdc="rgba(13, 17, 23, 0.95)"
    >
      {/* main */}
      <DefaultNavBar />
      {/* new-theme */}
      {/* <ColorPicker /> */}
    </Box>
  );
};

export default Index;

const DefaultNavBar = () => {
  const [category, setCategory] = useState<"new" | "popular" | "favorite">(
    "new"
  );
  const [mode, setMode] = useState<{ light: boolean; dark: boolean }>({
    light: false,
    dark: false,
  });
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const handleCategory = (type: "new" | "popular" | "favorite") => {
    setCategory(type);
  };

  const handleAddFilter = () => {
    setIsFilter((prev) => !prev);
  };

  const handleMode = (type: "light" | "dark") => {
    setMode({ ...mode, [type]: !mode[type] });
  };

  return (
    <>
      {/* category */}
      <Category dp="flex" fd="column" g="10px" w="100%">
        <Box
          p="16px"
          ai="center"
          dp="flex"
          fd="row"
          g="11px"
          w="100%"
          className={category === "new" && "action"}
          onClick={() => handleCategory("new")}
        >
          <Box dp="flex" ai="center" jc="center" w="32px" h="32px">
            <StarSvg />
          </Box>
          <p>New</p>
        </Box>
        <Box
          p="16px"
          ai="center"
          dp="flex"
          fd="row"
          g="11px"
          w="100%"
          className={category === "popular" && "action"}
          onClick={() => handleCategory("popular")}
        >
          <Box dp="flex" ai="center" jc="center" w="32px" h="32px">
            <RocketSvg />
          </Box>
          <p>Popular</p>
        </Box>
        <Box
          p="16px"
          ai="center"
          dp="flex"
          fd="row"
          g="11px"
          w="100%"
          className={category === "favorite" && "action"}
          onClick={() => handleCategory("favorite")}
        >
          <Box dp="flex" ai="center" jc="center" w="32px" h="32px">
            <HeartSvg />
          </Box>
          <p>Favorite</p>
        </Box>
      </Category>

      {/* filter */}
      <Filter w="100%">
        {/* Add filter */}
        <Box dp="flex" fd="row" p="16px" ai="center" g="10px" w="100%">
          <p>Filter</p>
          <Box
            dp="flex"
            ai="center"
            jc="center"
            w="32px"
            h="32px"
            className={isFilter && "action"}
            onClick={handleAddFilter}
          >
            <BsPlusLg />
          </Box>
          <Box dp="flex" ai="center" jc="center" w="32px" h="32px">
            <GrRefresh />
          </Box>
        </Box>

        {/* Mode (dark / light) */}
        <Box dp="flex" fd="row" p="16px" g="10px">
          <Box
            dp="flex"
            ai="center"
            jc="center"
            w="32px"
            h="32px"
            className={mode.light && "action"}
            onClick={() => handleMode("light")}
          >
            <MdOutlineWbSunny />
          </Box>
          <Box
            dp="flex"
            ai="center"
            jc="center"
            w="32px"
            h="32px"
            className={mode.dark && "action"}
            onClick={() => handleMode("dark")}
          >
            <IoMoonOutline />
          </Box>
        </Box>

        {/* Select filter color */}
        <Box dp="flex" fd="row" fw="wrap" p="16px" g="8px">
          <Box dp="flex" fd="row" p="3px" ai="center" g="3px">
            <div></div>
            <p>Pink</p>
          </Box>
          <Box dp="flex" fd="row" p="3px" ai="center" g="3px">
            <div></div>
            <p>Pink</p>
          </Box>
          <Box dp="flex" fd="row" p="3px" ai="center" g="3px">
            <div></div>
            <p>Pink</p>
          </Box>
          <Box dp="flex" fd="row" p="3px" ai="center" g="3px">
            <div></div>
            <p>Pink</p>
          </Box>
          <Box dp="flex" fd="row" p="3px" ai="center" g="3px">
            <div></div>
            <p>Pink</p>
          </Box>
        </Box>
      </Filter>
    </>
  );
};
