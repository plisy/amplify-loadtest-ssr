// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  api: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  for (let i = 1; i <= 100; i++) {
    console.log(
      `route=log-a-lot\tcfRequestId=${req.headers["x-amz-cf-id"] ?? "n/a"}\ttraceId=${req.headers["x-amzn-trace-id" ?? "n/a"]} line=${i}`
    );
  }

  res.status(200).json({ api: "log-a-lot" });
}
