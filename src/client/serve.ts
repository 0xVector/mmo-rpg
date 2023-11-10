Bun.serve({
  port: 8080,
//   hostname: "mydomain.com",
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(Bun.file("./src/client/index.html"));
    return new Response(Bun.file(`./src/client${url.pathname}`));
    return new Response("404!");
  },
});
console.log("Running!")