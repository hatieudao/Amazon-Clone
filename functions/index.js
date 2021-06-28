const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51J71OdBRL40EH09Qwo5q5P9KnXplaRxLizisSRcRKBVSgcJdM6e6ZtKYHzfUPa3y1b7E2eKBJdpXM2xVEGeSZhVg00GaMzyqVe");

// API


// App config

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payments request");
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
// API routes
app.get("/", (req, res) => res.status(200).send("hello"));

// Listen command
exports.api = functions.https.onRequest(app);
