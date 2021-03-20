// GLOBAL IMPORT
import express from 'express'

export enum ServerProtocol {
  HTTPS = 'https',
  HTTP = 'http'
}

export type ServerCallback = () => unknown

export interface Server {
  listen: (port: number) => unknown
}

export interface ServerManager {
  createServer: (app: express.Express) => Server
}
