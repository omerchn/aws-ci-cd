const supertest = require('supertest')
const express = require('express')
const router = require('../routes/hello')

const testServer = express()
testServer.use('/', router)
const request = supertest(testServer)

describe('`hello` router', () => {

  it('should return `Hello World!`', async () => {
    const res = await request.get('/')
    expect(res.status).toEqual(200)
    expect(res.text).toEqual('Hello World!')
  })

})