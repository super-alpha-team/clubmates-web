import axios from "axios";
import { apiV1, config, getNoAuth } from "api/generic";

const clubApi = {
  getTop10: function () {
    const url = `${apiV1}/club/top-10-clubs`;
    return getNoAuth(url);
  },
};
export default clubApi;
