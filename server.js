import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'

const setupRoutes = app => {
  const APP_DIR = `${__dirname}/app`
  const features = fs
    .readdirSync(APP_DIR)
    .filter(file => fs.statSync(`${APP_DIR}/${file}`).isDirectory())

  features.forEach(frature => {
    const router = express.Router()
    const routes = require(`${APP_DIR}/${frature}/routes.js`)

    routes.setup(router)
    app.use(`${frature}`, router)
  })
}

export const setup = () => {
  const app = express()
  const PORT = 3000

  //แปลงค่าจากที่ playload เข้ามาเป็น json
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  setupRoutes(app)

  app.listen(PORT, () => {
    console.log('App listening on http://localhost:' + PORT)
  })
}

