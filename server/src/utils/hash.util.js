import { compareSync, genSaltSync, hashSync } from "bcrypt";

const createHash = (password) => password = hashSync(password, genSaltSync(10))

const verifyHash = (req, db) => compareSync(req, db) 


export  { createHash, verifyHash }