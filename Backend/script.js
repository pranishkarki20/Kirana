const http = require("http");
const url = require("url");

let users = []; // Store users in memory (use database in production)

const server = http.createServer((req, res) => {
    // CORS Headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Helper to parse request body
    function parseBody(callback) {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                callback(JSON.parse(body));
            } catch (e) {
                callback(null);
            }
        });
    }

    // SIGNUP endpoint
    if (pathname === "/api/v1/users/signup" && req.method === "POST") {
        parseBody((data) => {
            if (!data || !data.email || !data.password || !data.name) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Missing required fields" }));
                return;
            }

            // Check if user already exists (case-insensitive email)
            const exists = users.find((u) => u.email.toLowerCase() === data.email.toLowerCase());
            if (exists) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "User already exists" }));
                return;
            }

            const newUser = {
                id: Date.now(),
                name: data.name,
                email: data.email.toLowerCase().trim(),
                password: data.password,
            };

            users.push(newUser);
            console.log("User created:", newUser.email);
            console.log("All users:", users);

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ 
                message: "Account created successfully",
                user: { id: newUser.id, name: newUser.name, email: newUser.email }
            }));
        });
        return;
    }

    // LOGIN endpoint
    if (pathname === "/api/v1/users/login" && req.method === "POST") {
        parseBody((data) => {
            if (!data || !data.email || !data.password) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Email and password required" }));
                return;
            }

            const user = users.find((u) => u.email === data.email.toLowerCase().trim() && u.password === data.password);
            if (!user) {
                res.writeHead(401, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Invalid email or password" }));
                return;
            }

            console.log("User logged in:", user.email);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ 
                message: "Login successful",
                user: { id: user.id, name: user.name, email: user.email }
            }));
        });
        return;
    }

    // Home route
    if (pathname === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("E-commerce server is running");
        return;
    }

    // Products route
    if (pathname === "/products" && req.method === "GET") {
        const products = [
            { id: 1, name: "T-shirt", price: 499 }
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
        return;
    }

    // 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
});

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});