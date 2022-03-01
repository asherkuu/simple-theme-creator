import Link from "next/link";
import React, { useState } from "react";
import { Box } from "../Core";
import { Category } from "./styled";
import StarSvg from "/assets/ic-star.svg";
import RocketSvg from "/assets/ic-rocket.svg";
import HeartSvg from "/assets/ic-heart.svg";
import dynamic from "next/dynamic";

const ColorPicker = dynamic(import("components/theme/new/ColorPicker"));

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
      {/* <DefaultNavBar /> */}
      {/* new-theme */}
      <ColorPicker />
    </Box>
  );
};

export default Index;

const DefaultNavBar = () => {
  const [category, setCategory] = useState<"new" | "popular" | "favorite">(
    "new"
  );

  const handleCategory = (type: "new" | "popular" | "favorite") => {
    setCategory(type);
  };
  return (
    <>
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
    </>
  );
};
