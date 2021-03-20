// GLOBAL IMPORTS
import { Router as ExpressRouter } from 'express'
import { Router as ExpressRouterType } from 'express-serve-static-core'
// LOCAL IMPORTS
import { Middleware } from '../middleware/middleware.types'

export abstract class Router {
  public router: ExpressRouterType

  constructor(public prefix: string, midlewares: Middleware[]) {
    this.router = ExpressRouter()
    this.setMiddlewares(midlewares)
  }

  setMiddlewares(middlewares: Middleware[]) {
    middlewares.forEach((middleware) => {
      this.router.use(middleware)
    })
  }

  abstract init(dependencies: Map<string, any>): ExpressRouterType
}
