import { check } from "express-validator";

// // 회원가입시 유효성 검사
// exports.validSignUp = [
//   check("authorId", "Id is required.")
//     .notEmpty()
//     .isLength({ min: 4, max: 32 })
//     .withMessage("Id must be between 3 to 32 characters."),
//   check("password", "Password is required.").notEmpty(),
//   check("password")
//     .isLength({ min: 6 })
//     .withMessage("Password must contain at least 6 characters.")
//     .matches(/\d/)
//     .withMessage("Password must contain a number."),
// ];

// // 로그인시 유효성 검사
// exports.validLogin = [
//   check("password", "Password is required.").notEmpty(),
//   check("password")
//     .isLength({
//       min: 6,
//     })
//     .withMessage("Password must contain at least 6 characters.")
//     .matches(/\d/)
//     .withMessage("Password must contain a number."),
// ];
