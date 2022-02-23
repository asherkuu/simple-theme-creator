import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";
import { mongo } from "mongoose";

import IInquery from "../../interface/community/inquery";
import Inquerys from "../../model/community/inquery";

import { CatchType } from "typings";
