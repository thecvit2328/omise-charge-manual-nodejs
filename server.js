import express from 'express'
import bodyParser from 'body-parser'
import routes from './app/routes'
import cors from 'cors'

const app = express()
const PORT = 3000

//แปลงค่าจากที่ playload เข้ามาเป็น json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.listen(PORT, () => {
  console.log('App listening on http://localhost:' + PORT)
})
