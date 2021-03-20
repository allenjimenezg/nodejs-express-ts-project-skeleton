// LOCAL IMPORTS
import { Router } from './../lib/router'
import { Middleware } from './../lib/middleware'

export class MainRouter extends Router {
  constructor(prefix: string, middlewares: Middleware[]) {
    super(prefix, middlewares)
  }

  init(dependencies: Map<string, any>) {

    return this.router
  }
}
