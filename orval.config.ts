import { BASE_URL } from "./src/api/config/axiosConfig";
module.exports = {
  "ensaf-app": {
    output: {
      client: "react-query",
      mode: "tags-split",
      target: "./src/api/endpoints",
      schemas: "./src/api/model",
      baseUrl: "https://exam.pishgamanasia.com/",
    },
    input: {
      target: `./src/api/swagger.json`,
    },
  },
};
