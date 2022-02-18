import { Box } from "components/common/Core";
import React from "react";
import { VsCodeBody, VsCodeBox, VsCodeFooter, VsCodeHeader } from "./styled";
import {
  VscRemote,
  VscSettingsGear,
  VscFiles,
  VscSourceControl,
  VscDebugAltSmall,
  VscSearch,
  VscExtensions,
  VscAccount,
  VscEllipsis,
  VscChevronDown,
  VscChevronRight,
  VscError,
  VscWarning,
  VscGitCompare,
  VscSplitHorizontal,
} from "react-icons/vsc";

const VsCode = () => {
  const CodeNum = () => {
    const code = [];
    for (var i = 1; i < 100; i++) {
      code.push(
        <text x={i < 10 ? 31 : 24} y={17 + (i - 1) * 19} key={i}>
          <tspan>{i}</tspan>
        </text>
      );
    }
    return code;
  };

  return (
    <Box dp="flex" fx="1">
      <VsCodeBox dp="flex" fd="column" fx="1" fw="wrap">
        {/* Vscode header */}
        <VsCodeHeader dp="flex" fd="row" fw="wrap" ai="center">
          <Box dp="flex" ai="center" jc="center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIWSURBVHgBjVM9aFNRFD73JpH+UE2l1SgoyeAPYm10KLoYAl3iJggODlZnhxZBF/U9jbUBlcRBnCSbk4N0KNrBl4A4OLQoLc2Wp3UQxBKKoX0v957jfbe+5iUtbQ58wz3vnu987zvnMugwUk9KF/gemhk4OfLOWXfy01f2f/PyrJPi81OzY4zx16zh8NjwRZ1DIguBj/PdikcmZ+8isqKUxAUSCAQNJJYGorImSL5aim9XnMx+MIWknJAIPiRBEFF++sWiiS5Wh/KLU8HiIeN9DiUZG1038dFX4IOdKixUgUArIAZVgTgaXvnxgHF+PUhIwO4sPco8HX27SsF8GKmRJopYROSRJBjKBckj3SAcRR/y7tics7FKNlP2Dl7XYPDKxFmbOY20kmdrmRDqFn2HQER6QbpuSQiZqmQvlf0CZUMLwl5yvWZ7rgLsO6wyXRs3ewaBegb7QyhbJiWoTcHBe9MJF7klkMXFn2UQa6ubpkmkYRe4FZucyzQVUAs4raElBMXVuJR8/gl/LSeUkS8DzsfVwswcyM6bvoIgwihZUU1XfWSFlfzlif+Nbg08/vobEc2AWqP//ueUbDNRr3J0vBitFW7UoC32mvOGGmCTpFGHI8fPbCXYKXofzt0mCc/0wf0LR080CdTof+76FurGueeC8Jrypa49af5/SY38akevUYfxJdkl6E0sfuw7hCI5+2af3o1/V+hARIlaA00AAAAASUVORK5CYII=" />
          </Box>
          <p>File</p>
          <p>Edit</p>
          <p>Selection</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Untitled - Visual Studio Code</p>
        </VsCodeHeader>

        {/* Vscode body */}
        <VsCodeBody dp="flex" fd="row" fx="1" fw="wrap">
          {/* left body */}
          <Box dp="flex" fd="column" jc="space-between">
            <Box dp="flex" fd="column" ai="center" w="100%">
              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscFiles />
              </Box>
              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscSearch />
              </Box>
              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscSourceControl />
              </Box>
              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscDebugAltSmall />
              </Box>

              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscExtensions />
              </Box>
            </Box>

            <Box dp="flex" fd="column" ai="center" w="100%">
              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscAccount />
              </Box>
              <Box dp="flex" ai="center" jc="center" w="100%">
                <VscSettingsGear />
              </Box>
            </Box>
          </Box>

          {/* center body */}
          <Box dp="flex" fd="column">
            <Box
              dp="flex"
              fd="row"
              jc="space-between"
              ai="center"
              p="0 20px"
              h="35px"
            >
              <p>EXPLORER</p>
              <VscEllipsis />
            </Box>
            <Box dp="flex" fd="row" ai="center" h="22px">
              <VscChevronDown />
              <p>AWESOMEPROJECT</p>
            </Box>
            <Box dp="flex" fd="column" fx="1">
              <Box dp="flex" fd="row" ai="center" h="22px">
                <VscChevronRight />
                <p>node_modules</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <VscChevronRight />
                <p>public</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <VscChevronDown />
                <p>src</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <VscChevronDown />
                <p>assets</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0ibTUgM2wtLjY1IDMuMzRoMTMuNTlsLS40NCAyLjE2aC0xMy41OGwtLjY2IDMuMzNoMTMuNTlsLS43NiAzLjgxLTUuNDggMS44MS00Ljc1LTEuODEuMzMtMS42NGgtMy4zNGwtLjc5IDQgNy44NSAzIDkuMDUtMyAxLjItNi4wMy4yNC0xLjIxIDEuNTQtNy43NmgtMTYuOTR6IiBmaWxsPSIjNDJhNWY1Ii8+Cjwvc3ZnPgo=" />
                <p>styles.css</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS4xMyAxMC43MWgzLjc0bC0yLjY1LTIuNjVjLTEuMDEgMC0xLjgzLS44Mi0xLjgzLTEuODRhMS44MyAxLjgzIDAgMCAxIDEuODMtMS44M2MxLjAyIDAgMS44NC44MiAxLjg0IDEuODNsMi42NSAyLjY1di0zLjc0Yy0uNzEtLjcyLS43MS0xLjg4IDAtMi41OS43MS0uNzIgMS44Ny0uNzIgMi41OCAwIC43MS43MS43MSAxLjg3IDAgMi41OXYzLjc0bDIuNjYtMi42NWMwLTEuMDEuODEtMS44MyAxLjgzLTEuODMgMS4wMSAwIDEuODMuODIgMS44MyAxLjgzIDAgMS4wMi0uODIgMS44NC0xLjgzIDEuODRsLTIuNjUgMi42NWgzLjc0Yy43Mi0uNzEgMS44OC0uNzEgMi41OSAwIC43Mi43MS43MiAxLjg3IDAgMi41OC0uNzEuNzEtMS44Ny43MS0yLjU5IDBoLTMuNzRsMi42NSAyLjY2YzEuMDEgMCAxLjgzLjgxIDEuODMgMS44M2ExLjgzIDEuODMgMCAwIDEtMS44MyAxLjgzYy0xLjAyIDAtMS44My0uODItMS44My0xLjgzbC0yLjY2LTIuNjV2My43NGMuNzEuNzIuNzEgMS44OCAwIDIuNTktLjcxLjcyLTEuODcuNzItMi41OCAwLS43MS0uNzEtLjcxLTEuODcgMC0yLjU5di0zLjc0bC0yLjY1IDIuNjVjMCAxLjAxLS44MiAxLjgzLTEuODQgMS44My0xLjAxIDAtMS44My0uODItMS44My0xLjgzIDAtMS4wMi44Mi0xLjgzIDEuODMtMS44M2wyLjY1LTIuNjZoLTMuNzRjLS43Mi43MS0xLjg4LjcxLTIuNTkgMC0uNzItLjcxLS43Mi0xLjg3IDAtMi41OC43MS0uNzEgMS44Ny0uNzEgMi41OSAweiIgc3R5bGU9ImZpbGw6I2ZmYjMwMCIvPjwvc3ZnPgo=" />
                <p>logo.svg</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <VscChevronRight />
                <p>components</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyZS03IC4xNjAwNCkiPjxwYXRoIGQ9Im0xLjc5MSAzLjY5MTQgMTAuMjA5IDE3LjYxOSAxMC4yMDktMTcuNTMzdi0uMDg1OTM4aC0zLjk2ODhsLTYuMTgxNiAxMC42MTUtNi4xNTIzLTEwLjYxNXoiIHN0eWxlPSJmaWxsOiM0MWI4ODMiLz48cGF0aCBkPSJtNS45MDcyIDMuNjkxNCA2LjE1MjEgMTAuNjE3IDYuMTgwOS0xMC42MTdoLTMuNzIyOGwtMi40MzM3IDQuMTc4My0yLjQyMjYtNC4xNzgzeiIgc3R5bGU9ImZpbGw6IzM1NDk1ZSIvPjwvZz48L3N2Zz4=" />
                <p>App.vue</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0ibTMgM2gxOHYxOGgtMTh2LTE4bTQuNzMgMTUuMDRjLjQuODUgMS4xOSAxLjU1IDIuNTQgMS41NSAxLjUgMCAyLjUzLS44IDIuNTMtMi41NXYtNS43OGgtMS43djUuNzRjMCAuODYtLjM1IDEuMDgtLjkgMS4wOC0uNTggMC0uODItLjQtMS4wOS0uODdsLTEuMzguODNtNS45OC0uMThjLjUuOTggMS41MSAxLjczIDMuMDkgMS43MyAxLjYgMCAyLjgtLjgzIDIuOC0yLjM2IDAtMS40MS0uODEtMi4wNC0yLjI1LTIuNjZsLS40Mi0uMThjLS43My0uMzEtMS4wNC0uNTItMS4wNC0xLjAyIDAtLjQxLjMxLS43My44MS0uNzMuNDggMCAuOC4yMSAxLjA5LjczbDEuMzEtLjg3Yy0uNTUtLjk2LTEuMzMtMS4zMy0yLjQtMS4zMy0xLjUxIDAtMi40OC45Ni0yLjQ4IDIuMjMgMCAxLjM4LjgxIDIuMDMgMi4wMyAyLjU1bC40Mi4xOGMuNzguMzQgMS4yNC41NSAxLjI0IDEuMTMgMCAuNDgtLjQ1LjgzLTEuMTUuODMtLjgzIDAtMS4zMS0uNDMtMS42Ny0xLjAzbC0xLjM4Ljh6IiBmaWxsPSIjZmZjYTI4Ii8+Cjwvc3ZnPg==" />
                <p>main.js</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PCEtLSA8P3htbCB2ZXJzaW9uPSIxLjAiIGVuY29kaW5nPSJVVEYtOCI/PiAtLT4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0ibTIuNiAxMC41OWw1Ljc4LTUuNzkgMS42OSAxLjdjLTAuMjQgMC44NSAwLjE1IDEuNzggMC45MyAyLjIzdjUuNTRjLTAuNiAwLjM0LTEgMC45OS0xIDEuNzNhMiAyIDAgMCAwIDIgMiAyIDIgMCAwIDAgMiAtMmMwLTAuNzQtMC40LTEuMzktMS0xLjczdi00Ljg2bDIuMDcgMi4wOWMtMC4wNyAwLjE1LTAuMDcgMC4zMi0wLjA3IDAuNWEyIDIgMCAwIDAgMiAyIDIgMiAwIDAgMCAyIC0yIDIgMiAwIDAgMCAtMiAtMmMtMC4xOCAwLTAuMzUgMC0wLjUgMC4wN2wtMi41Ny0yLjU3YzAuMjYtMC45My0wLjIyLTEuOTUtMS4xNS0yLjM0LTAuNDMtMC4xNi0wLjg4LTAuMi0xLjI4LTAuMDlsLTEuNy0xLjY5IDAuNzktMC43OGMwLjc4LTAuNzkgMi4wNC0wLjc5IDIuODIgMGw3Ljk5IDcuOTljMC43OSAwLjc4IDAuNzkgMi4wNCAwIDIuODJsLTcuOTkgNy45OWMtMC43OCAwLjc5LTIuMDQgMC43OS0yLjgyIDBsLTcuOTktNy45OWMtMC43OS0wLjc4LTAuNzktMi4wNCAwLTIuODJ6IiBmaWxsPSIjZTY0YTE5Ii8+Cjwvc3ZnPg==" />
                <p>.gitignore</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0ibTMgM2gxOHYxOGgtMTh2LTE4bTQuNzMgMTUuMDRjLjQuODUgMS4xOSAxLjU1IDIuNTQgMS41NSAxLjUgMCAyLjUzLS44IDIuNTMtMi41NXYtNS43OGgtMS43djUuNzRjMCAuODYtLjM1IDEuMDgtLjkgMS4wOC0uNTggMC0uODItLjQtMS4wOS0uODdsLTEuMzguODNtNS45OC0uMThjLjUuOTggMS41MSAxLjczIDMuMDkgMS43MyAxLjYgMCAyLjgtLjgzIDIuOC0yLjM2IDAtMS40MS0uODEtMi4wNC0yLjI1LTIuNjZsLS40Mi0uMThjLS43My0uMzEtMS4wNC0uNTItMS4wNC0xLjAyIDAtLjQxLjMxLS43My44MS0uNzMuNDggMCAuOC4yMSAxLjA5LjczbDEuMzEtLjg3Yy0uNTUtLjk2LTEuMzMtMS4zMy0yLjQtMS4zMy0xLjUxIDAtMi40OC45Ni0yLjQ4IDIuMjMgMCAxLjM4LjgxIDIuMDMgMi4wMyAyLjU1bC40Mi4xOGMuNzguMzQgMS4yNC41NSAxLjI0IDEuMTMgMCAuNDgtLjQ1LjgzLTEuMTUuODMtLjgzIDAtMS4zMS0uNDMtMS42Ny0xLjAzbC0xLjM4Ljh6IiBmaWxsPSIjZmZjYTI4Ii8+Cjwvc3ZnPg==" />
                <p>bable.config.js</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJtNSAzaDJ2MmgtMnY1YTIgMiAwIDAgMSAtMiAyIDIgMiAwIDAgMSAyIDJ2NWgydjJoLTJjLTEuMDctLjI3LTItLjktMi0ydi00YTIgMiAwIDAgMCAtMiAtMmgtMXYtMmgxYTIgMiAwIDAgMCAyIC0ydi00YTIgMiAwIDAgMSAyIC0ybTE0IDBhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMCAyIDJoMXYyaC0xYTIgMiAwIDAgMCAtMiAydjRhMiAyIDAgMCAxIC0yIDJoLTJ2LTJoMnYtNWEyIDIgMCAwIDEgMiAtMiAyIDIgMCAwIDEgLTIgLTJ2LTVoLTJ2LTJoMm0tNyAxMmExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAtMSAxIDEgMSAwIDAgMSAtMSAtMSAxIDEgMCAwIDEgMSAtMW0tNCAwYTEgMSAwIDAgMSAxIDEgMSAxIDAgMCAxIC0xIDEgMSAxIDAgMCAxIC0xIC0xIDEgMSAwIDAgMSAxIC0xbTggMGExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAtMSAxIDEgMSAwIDAgMSAtMSAtMSAxIDEgMCAwIDEgMSAtMXoiIHN0eWxlPSJmaWxsOiNmYmMwMmQiLz48L3N2Zz4=" />
                <p>package.lock.json</p>
              </Box>
              <Box dp="flex" fd="row" ai="center" h="22px">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJtNSAzaDJ2MmgtMnY1YTIgMiAwIDAgMSAtMiAyIDIgMiAwIDAgMSAyIDJ2NWgydjJoLTJjLTEuMDctLjI3LTItLjktMi0ydi00YTIgMiAwIDAgMCAtMiAtMmgtMXYtMmgxYTIgMiAwIDAgMCAyIC0ydi00YTIgMiAwIDAgMSAyIC0ybTE0IDBhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMCAyIDJoMXYyaC0xYTIgMiAwIDAgMCAtMiAydjRhMiAyIDAgMCAxIC0yIDJoLTJ2LTJoMnYtNWEyIDIgMCAwIDEgMiAtMiAyIDIgMCAwIDEgLTIgLTJ2LTVoLTJ2LTJoMm0tNyAxMmExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAtMSAxIDEgMSAwIDAgMSAtMSAtMSAxIDEgMCAwIDEgMSAtMW0tNCAwYTEgMSAwIDAgMSAxIDEgMSAxIDAgMCAxIC0xIDEgMSAxIDAgMCAxIC0xIC0xIDEgMSAwIDAgMSAxIC0xbTggMGExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAtMSAxIDEgMSAwIDAgMSAtMSAtMSAxIDEgMCAwIDEgMSAtMXoiIHN0eWxlPSJmaWxsOiNmYmMwMmQiLz48L3N2Zz4=" />
                <p>pakage.json</p>
              </Box>
            </Box>
            <Box dp="flex" fd="row" ai="center" h="22px">
              <VscChevronRight /> <p>OUTLINE</p>
            </Box>
            <Box dp="flex" fd="row" ai="center" h="22px">
              <VscChevronRight /> <p>NPM SCRIPTS</p>
            </Box>
          </Box>

          {/* right body */}
          <Box dp="flex" fd="column" fx="1">
            <Box dp="flex" fd="row" jc="space-between" w="100%" h="35px">
              {/* open file name */}
              <Box dp="flex" fd="row">
                <Box dp="flex" fd="row" ai="center" h="100%">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyZS03IC4xNjAwNCkiPjxwYXRoIGQ9Im0xLjc5MSAzLjY5MTQgMTAuMjA5IDE3LjYxOSAxMC4yMDktMTcuNTMzdi0uMDg1OTM4aC0zLjk2ODhsLTYuMTgxNiAxMC42MTUtNi4xNTIzLTEwLjYxNXoiIHN0eWxlPSJmaWxsOiM0MWI4ODMiLz48cGF0aCBkPSJtNS45MDcyIDMuNjkxNCA2LjE1MjEgMTAuNjE3IDYuMTgwOS0xMC42MTdoLTMuNzIyOGwtMi40MzM3IDQuMTc4My0yLjQyMjYtNC4xNzgzeiIgc3R5bGU9ImZpbGw6IzM1NDk1ZSIvPjwvZz48L3N2Zz4=" />
                  <p>App.vue</p>
                </Box>
                <Box dp="flex" fd="row" ai="center" h="100%">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJtNSAzaDJ2MmgtMnY1YTIgMiAwIDAgMSAtMiAyIDIgMiAwIDAgMSAyIDJ2NWgydjJoLTJjLTEuMDctLjI3LTItLjktMi0ydi00YTIgMiAwIDAgMCAtMiAtMmgtMXYtMmgxYTIgMiAwIDAgMCAyIC0ydi00YTIgMiAwIDAgMSAyIC0ybTE0IDBhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMCAyIDJoMXYyaC0xYTIgMiAwIDAgMCAtMiAydjRhMiAyIDAgMCAxIC0yIDJoLTJ2LTJoMnYtNWEyIDIgMCAwIDEgMiAtMiAyIDIgMCAwIDEgLTIgLTJ2LTVoLTJ2LTJoMm0tNyAxMmExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAtMSAxIDEgMSAwIDAgMSAtMSAtMSAxIDEgMCAwIDEgMSAtMW0tNCAwYTEgMSAwIDAgMSAxIDEgMSAxIDAgMCAxIC0xIDEgMSAxIDAgMCAxIC0xIC0xIDEgMSAwIDAgMSAxIC0xbTggMGExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAtMSAxIDEgMSAwIDAgMSAtMSAtMSAxIDEgMCAwIDEgMSAtMXoiIHN0eWxlPSJmaWxsOiNmYmMwMmQiLz48L3N2Zz4=" />
                  <p>pakage.json</p>
                </Box>
                <Box
                  className="selectFile"
                  dp="flex"
                  fd="row"
                  ai="center"
                  h="100%"
                >
                  <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0ibTMgM2gxOHYxOGgtMTh2LTE4bTQuNzMgMTUuMDRjLjQuODUgMS4xOSAxLjU1IDIuNTQgMS41NSAxLjUgMCAyLjUzLS44IDIuNTMtMi41NXYtNS43OGgtMS43djUuNzRjMCAuODYtLjM1IDEuMDgtLjkgMS4wOC0uNTggMC0uODItLjQtMS4wOS0uODdsLTEuMzguODNtNS45OC0uMThjLjUuOTggMS41MSAxLjczIDMuMDkgMS43MyAxLjYgMCAyLjgtLjgzIDIuOC0yLjM2IDAtMS40MS0uODEtMi4wNC0yLjI1LTIuNjZsLS40Mi0uMThjLS43My0uMzEtMS4wNC0uNTItMS4wNC0xLjAyIDAtLjQxLjMxLS43My44MS0uNzMuNDggMCAuOC4yMSAxLjA5LjczbDEuMzEtLjg3Yy0uNTUtLjk2LTEuMzMtMS4zMy0yLjQtMS4zMy0xLjUxIDAtMi40OC45Ni0yLjQ4IDIuMjMgMCAxLjM4LjgxIDIuMDMgMi4wMyAyLjU1bC40Mi4xOGMuNzguMzQgMS4yNC41NSAxLjI0IDEuMTMgMCAuNDgtLjQ1LjgzLTEuMTUuODMtLjgzIDAtMS4zMS0uNDMtMS42Ny0xLjAzbC0xLjM4Ljh6IiBmaWxsPSIjZmZjYTI4Ii8+Cjwvc3ZnPg==" />
                  <p>main.js</p>
                  <div></div>
                </Box>
              </Box>

              {/* file division */}
              <Box dp="flex" fd="row" ai="center" g="16">
                <VscGitCompare />
                <VscSplitHorizontal />
                <VscEllipsis />
              </Box>
            </Box>

            {/* file directory */}
            <Box dp="flex" fd="row" ai="center">
              <Box dp="flex" fd="row" ai="center" h="100%">
                <p>src</p>
                <VscChevronRight />
              </Box>
              <Box dp="flex" fd="row" ai="center" h="100%">
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0ibTMgM2gxOHYxOGgtMTh2LTE4bTQuNzMgMTUuMDRjLjQuODUgMS4xOSAxLjU1IDIuNTQgMS41NSAxLjUgMCAyLjUzLS44IDIuNTMtMi41NXYtNS43OGgtMS43djUuNzRjMCAuODYtLjM1IDEuMDgtLjkgMS4wOC0uNTggMC0uODItLjQtMS4wOS0uODdsLTEuMzguODNtNS45OC0uMThjLjUuOTggMS41MSAxLjczIDMuMDkgMS43MyAxLjYgMCAyLjgtLjgzIDIuOC0yLjM2IDAtMS40MS0uODEtMi4wNC0yLjI1LTIuNjZsLS40Mi0uMThjLS43My0uMzEtMS4wNC0uNTItMS4wNC0xLjAyIDAtLjQxLjMxLS43My44MS0uNzMuNDggMCAuOC4yMSAxLjA5LjczbDEuMzEtLjg3Yy0uNTUtLjk2LTEuMzMtMS4zMy0yLjQtMS4zMy0xLjUxIDAtMi40OC45Ni0yLjQ4IDIuMjMgMCAxLjM4LjgxIDIuMDMgMi4wMyAyLjU1bC40Mi4xOGMuNzguMzQgMS4yNC41NSAxLjI0IDEuMTMgMCAuNDgtLjQ1LjgzLTEuMTUuODMtLjgzIDAtMS4zMS0uNDMtMS42Ny0xLjAzbC0xLjM4Ljh6IiBmaWxsPSIjZmZjYTI4Ii8+Cjwvc3ZnPg==" />
                <p>main.js</p>
              </Box>
            </Box>

            {/* code */}
            <Box dp="flex" fd="row">
              {/* number */}
              <Box dp="flex" fd="column">
                <svg width="64">
                  {CodeNum()}
                  {Array(35).map((index, num) => (
                    <text key={index}>
                      <tspan>{num}</tspan>
                    </text>
                  ))}
                </svg>
              </Box>
              {/* code */}
              <Box dp="flex" fd="column" fx="1">
                <svg width={"100%"}>
                  <text x={0} y={18}>
                    <tspan className="color12">
                      {`// Example borrowed from:
                      https://github.com/PacktPublishing/JavaScript-by-Example/blob/master/Chapter07/CompletedCode/src/services/api/apiCall.js`}
                    </tspan>
                  </text>
                  <text x={0} y={18 * 2}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">foo</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color3">200</tspan>
                    <tspan>;</tspan>
                  </text>
                  <text x={0} y={18 * 4}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">FOOD CHALANGE</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color3">200</tspan>
                    <tspan>;</tspan>
                  </text>
                  <text x={0} y={18 * 6}>
                    <tspan className="color2">export</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">function</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">apiCall</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">route</tspan>
                    <tspan>,</tspan>
                    <tspan className="color1">body</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>{},</tspan>
                    <tspan className="color1">method</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan className="color7">{`'post'`}</tspan>
                    <tspan>{`) {`}</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 7}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">request</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">new</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">Promise</tspan>
                    <tspan>((</tspan>
                    <tspan className="color6">resolve</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">reject</tspan>
                    <tspan>)</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">{`=>`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 9}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">headers</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">new</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">Headers</tspan>
                    <tspan>{`({`}</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 10}>
                    <tspan className="color7">{`'Content-Type'`}</tspan>
                    <tspan>:</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color7">{`'application/json'`}</tspan>
                    <tspan>,</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 11}>
                    <tspan>{`});`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 13}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">requestDetails</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 14}>
                    <tspan className="color1">method</tspan>
                    <tspan>,</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 15}>
                    <tspan className="color1">mode</tspan>
                    <tspan>:</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color7">{`'cors'`}</tspan>
                    <tspan>,</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 16}>
                    <tspan className="color1">headers</tspan>
                    <tspan>,</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 17}>
                    <tspan>{`};`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 19}>
                    <tspan className="color2">if</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">method</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">!==</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color7">{`'GET'`}</tspan>
                    <tspan>)</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">requestDetails</tspan>
                    <tspan>.</tspan>
                    <tspan className="color1">body</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">JSON</tspan>
                    <tspan>.</tspan>
                    <tspan className="color6">stringify</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">body</tspan>
                    <tspan>);</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 21}>
                    <tspan className="color2">function</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">handleErrors</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">response</tspan>
                    <tspan>)</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 22}>
                    <tspan className="color2">if</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">response</tspan>
                    <tspan>.</tspan>
                    <tspan className="color1">ok</tspan>
                    <tspan>)</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 4} y={18 * 23}>
                    <tspan className="color2">return</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color1">response</tspan>
                    <tspan>.</tspan>
                    <tspan className="color6">json</tspan>
                    <tspan>();</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 24}>
                    <tspan>{`}`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">else</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 4} y={18 * 25}>
                    <tspan className="color2">throw</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">Error</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">response</tspan>
                    <tspan>.</tspan>
                    <tspan className="color1">statusText</tspan>
                    <tspan>);</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 26}>
                    <tspan>{`}`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 27}>
                    <tspan>{`}`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 29}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">serverURL</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color1">process</tspan>
                    <tspan>.</tspan>
                    <tspan className="color1">env</tspan>
                    <tspan>.</tspan>
                    <tspan className="color5">REACT_APP_SERVER_URL</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">||</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color7">{`http://localhost:3000`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 31}>
                    <tspan className="color12">
                      {`// Make the web request w/ fetch API`}
                    </tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 32}>
                    <tspan className="color9">fetch</tspan>
                    <tspan>(</tspan>
                    <tspan className="color7">`</tspan>
                    <tspan className="color2">${`{`}</tspan>
                    <tspan className="color5">serverURL</tspan>
                    <tspan className="color2">{`}`}</tspan>
                    <tspan className="color7">/</tspan>
                    <tspan className="color2">${`{`}</tspan>
                    <tspan className="color1">route</tspan>
                    <tspan className="color2">{`}`}</tspan>
                    <tspan className="color7">`</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">requestDetails</tspan>
                    <tspan>)</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 33}>
                    <tspan>.</tspan>
                    <tspan className="color6">then</tspan>
                    <tspan>(</tspan>
                    <tspan className="color6">handleErrors</tspan>
                    <tspan>)</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 34}>
                    <tspan>.</tspan>
                    <tspan className="color6">then</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">data</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">{`=>`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">resolve</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">data</tspan>
                    <tspan>))</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 35}>
                    <tspan>.</tspan>
                    <tspan className="color6">catch</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">err</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">{`=>`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">reject</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">err</tspan>
                    <tspan>));</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 37}>
                    <tspan>{`});`}</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 39}>
                    <tspan className="color12">
                      {"// Define a timeout so the request cannot hang forever"}
                    </tspan>
                  </text>
                  <text x={7 * 4} y={18 * 40}>
                    <tspan className="color2">const</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">timeout</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color9">=</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">new</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">Promise</tspan>
                    <tspan>((</tspan>
                    <tspan className="color6">request</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">reject</tspan>
                    <tspan>)</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 41}>
                    <tspan className="color9">setTimeout</tspan>
                    <tspan>(</tspan>
                    <tspan className="color6">reject</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">timeoutDuration</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color7">{"`Request timed out !`"}</tspan>
                    <tspan>);</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 42}>
                    <tspan>{`});`}</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 44}>
                    <tspan className="color12">{"// Return a promise"}</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 45}>
                    <tspan className="color2">return</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">new</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">Promise</tspan>
                    <tspan>((</tspan>
                    <tspan className="color6">resolve</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">reject</tspan>
                    <tspan>)</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">{`=>`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan>{`{`}</tspan>
                  </text>
                  <text x={7 * 4 * 2} y={18 * 46}>
                    <tspan className="color5">Promise</tspan>
                    <tspan>.</tspan>
                    <tspan className="color6">race</tspan>
                    <tspan>{`([`}</tspan>
                    <tspan className="color5">request</tspan>
                    <tspan>,</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color5">timeout</tspan>
                    <tspan>{`])`}</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 47}>
                    <tspan>.</tspan>
                    <tspan className="color6">then</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">result</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">{`=>`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">resolve</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">result</tspan>
                    <tspan>))</tspan>
                  </text>
                  <text x={7 * 4 * 3} y={18 * 48}>
                    <tspan>.</tspan>
                    <tspan className="color6">catch</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">error</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color2">{`=>`}</tspan>
                    <tspan>&nbsp;</tspan>
                    <tspan className="color6">reject</tspan>
                    <tspan>(</tspan>
                    <tspan className="color1">error</tspan>
                    <tspan>));</tspan>
                  </text>
                  <text x={7 * 4} y={18 * 49}>
                    <tspan>{`});`}</tspan>
                  </text>
                  <text x={7} y={18 * 50}>
                    <tspan>{`}`}</tspan>
                  </text>
                </svg>
              </Box>
            </Box>
          </Box>
        </VsCodeBody>

        {/* Vscode footer */}
        <VsCodeFooter ai="center" dp="flex" fd="row" fw="wrap">
          <Box dp="flex" ai="center" jc="center" w="34px" h="100%">
            <VscRemote />
          </Box>
          <Box dp="flex" ai="center" jc="center" h="100%">
            <VscSourceControl />
            <p>master*</p>
          </Box>
          <Box dp="flex" ai="center" jc="center" h="100%">
            <VscError />
            <p>0</p>
          </Box>
          <Box dp="flex" ai="center" jc="center" h="100%">
            <VscWarning />
            <p>1</p>
          </Box>
        </VsCodeFooter>
      </VsCodeBox>
    </Box>
  );
};

export default VsCode;
