import express from 'express'
import { api } from './api'
import { fetchHotelData } from './fetchHotelData'
import { fetchHotelReviews } from './fetchHotelReviews'

const app = express()
app.use(api)
app.get("/api/hotelData/:id", (req, res) => {fetchHotelData(req, res)})
app.get("/api/hotelReviews/:id", (req, res) => {fetchHotelReviews(req, res)})

app.listen(3002, () => console.log("started"))