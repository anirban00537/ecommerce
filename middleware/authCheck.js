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

export const authPageRequireCheck = (ctx) => {
  const cookies = parseCookies(ctx);
  if (cookies.token) {
    ctx.res.writeHead(302, {
      Location: "/",
    });
    ctx.res.end();
  }
};
