import express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prismaClient = new PrismaClient();

app.post("/create-user", async (req, res) => {
  await prismaClient.user.create({
    data: {
      name: Math.random().toString(36).substring(7),
      email: Math.random().toString(36).substring(7) + "@gmail.com",
    },
  });
  res.json({
    message: "User created successfully",
  });   
});

app.get("/get-user", (req, res) => {
    const data = prismaClient.user.findMany();
  res.json({
    data
  });
});

app.listen(3000);
