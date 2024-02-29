import express from 'express'
import bodyParser from 'body-parser'
import docs from './routes/docs.js'

const app = express()

app.use(bodyParser.json())

app.get('/health', (req, res) => {
  res.send('OK')
})

app.post('/api/chat', (req, res) => {
  const session = req.headers.authorization.replace('Bearer ', '')
  const body = req.body

  console.log(session, body);

  res.status(201).json(body)
})

app.use('/docs', docs)

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
