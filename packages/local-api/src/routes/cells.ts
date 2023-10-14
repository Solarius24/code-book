import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

interface LocalApiError {
  code: string;
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get("/cells", async (req, res) => {
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };

    try {
      // Read the file
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });

      res.send(JSON.parse(result));
    } catch (err) {
      if (isLocalApiError(err)) {
        if (err.code === "ENOENT") {
          //add code to create a file and add default cells
          await fs.writeFile(
            fullPath,
            '[]',
            "utf-8"
          );
          res.send([{"content":"import { useState } from \"react\";\r\nconst Counter = () => {\r\n    const [count, setCount] = useState(0)\r\n    return (\r\n        <div>\r\n            <button onClick={()=> setCount(count +1)}>Click</button>\r\n            <h3>Count: {count}</h3>\r\n        </div>\r\n    )\r\n}\r\nshow(Counter)","type":"code","id":"qm32s"},{"content":"const App = () => {\r\n    return (\r\n        <div>\r\n            <h3>App Says Hi</h3>\r\n            <i>Counter componenet will be rendered below...</i>\r\n            <hr></hr>\r\n            <Counter/>\r\n        </div>\r\n    )\r\n}\r\n\r\nshow(App)","type":"code","id":"lq8a2"}]);
        }
      } else {
        throw err;
      }
    }
  });

  router.post("/cells", async (req, res) => {
    // Take the list of cells from the request obj
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // Write the cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

    res.send({ status: "ok" });
  });

  return router;
};
