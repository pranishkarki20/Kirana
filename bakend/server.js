const http = require("http");

const products = [
  {
    id: 1,
    name: "iPhone",
    price: 50000,
    category: "mobile",
    image: "/public/images/mac.jpg",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 999,
    category: "clothes",
    image: "https://example.com/image2.jpg",
  },
];

const sendResponse = (res, statusCode, contentType, body) => {
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(body);
};

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    sendResponse(res, 204, "text/plain", "");
    return;
  }

  if (req.url === "/" && req.method === "GET") {
    sendResponse(res, 200, "text/plain", "Server is running");
  }

  else if (req.url === "/products" && req.method === "GET") {
    sendResponse(res, 200, "application/json", JSON.stringify(products));
  }

  else {
    sendResponse(res, 404, "text/plain", "Route not found");
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
