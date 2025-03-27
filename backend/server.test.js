const request = require("supertest");
const app = require("./server"); // Adjust the path based on your `server.js` setup

test("Sample test", () => {
    expect(1 + 1).toBe(2);
});

module.exports = app;