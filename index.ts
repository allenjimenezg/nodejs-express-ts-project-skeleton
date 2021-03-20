import { server } from './src/server'

server.on('running', () => {
  console.log('running')
})

server.on('error', (error) => {
  console.log(error.message)
})

server.start()
