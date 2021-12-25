import { parseCookies } from "nookies";

export const ssrAuthCheck = (req, res) => {
  const cookies = parseCookies(req);
  if (!cookies.token) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  }
};
