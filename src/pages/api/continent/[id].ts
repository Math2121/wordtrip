import { NextApiRequest, NextApiResponse } from "next";
import Countrys from "../../../../server.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { continents } = Countrys;
  const id = req.query["id"] as string;

  const idInfo = parseInt(id);
  const continentInfo = continents.filter((item) => {
    return item.id === idInfo;
  });

  if (!continentInfo[0]) {
    return res.status(404).json({ error: "nenhum continente" });
  } 
  return res.json(continentInfo);
};
