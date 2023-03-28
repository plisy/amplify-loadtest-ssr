// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  api: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(
    `route=time-5\tcfRequestId=${req.headers["x-amz-cf-id"] ?? "n/a"}\ttraceId=${req.headers["x-amzn-trace-id" ?? "n/a"]}`
  );

  setTimeout(() => {
    res.status(200).json({ api: "time-5" });
  }, 5000);
}
