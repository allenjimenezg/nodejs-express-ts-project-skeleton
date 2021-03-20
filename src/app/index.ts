// GLOBAL IMPORTS
import express, { RequestHandler } from 'express'

// LOCAL IMPORTS
import { App } from './../lib/app'
import { Middleware } from './../lib/middleware'

import { MainRouter } from './router'

export class MainApp extends App {
  constructor(globalMiddlewares: Middleware[]) {
    super(globalMiddlewares, new MainRouter())
  }
}


