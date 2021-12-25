//login
// https://galactic-escape-356951.postman.co/workspace/My-Workspace~e1dff801-3bf1-4e67-86fc-e4c665489247/request/12582813-ebca030a-13e7-46d5-8f2f-4d84a5f801f4
import request from "../utils/request";

export const login = (credential) => {
  return request.post(
    "/12582813-ebca030a-13e7-46d5-8f2f-4d84a5f801f4",
    credential
  );
};
