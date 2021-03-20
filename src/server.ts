// GLOBAL IMPORTS
import http from 'http'
import https from 'https'

// LOCAL IMPORTS
import { SERVER_PORT, SERVER_PROTOCOL } from '../env' 
import { MainApp } from './app'
import { Server } from './lib/server'

const app = new MainApp([])

let server = new Server(app, SERVER_PORT, SERVER_PROTOCOL)

export { server }

