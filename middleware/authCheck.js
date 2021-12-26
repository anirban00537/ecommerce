import { parseCookies } from "nookies";

export const ssrAuthCheck = (ctx) => {
  const cookies = parseCookies(ctx);
  if (cookies.token) {
    return true;
  } else {
    ctx.res.writeHead(302, {
      Location: "/login",
    });
    ctx.res.end();
    return false;
  }
};
