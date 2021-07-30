import { NextApiRequest, NextApiResponse } from "next";
import Countrys from "../../../server.json";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const country = Countrys;
  return res.json(country);
};
