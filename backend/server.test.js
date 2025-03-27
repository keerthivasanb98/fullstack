const request = require("supertest");
const { app, server } = require("./server"); // Import both app & server

test("Sample test", () => {
    expect(1 + 1).toBe(2);
});

// Close the server after tests finish
afterAll(() => {
    server.close();
});
