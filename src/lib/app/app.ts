// GLOBAL IMPORTS
import express, { RequestHandler } from 'express'

// LOCAL IMPORTS
import { Router } from '../router/router'
import { ExpressApp } from './app.types'
export class App {
  private _app: ExpressApp
  private router: Router
  
  get app(): ExpressApp {
    return this._app
  }

  constructor(globalMiddlewares: RequestHandler[], router: Router) {
    this._app = express()
    this.router = router
    
    this.initMiddlewares(globalMiddlewares)
  }

  initMiddlewares(middlewares: RequestHandler[]): void {
    // Set global middlewares injected from server
    middlewares.forEach((middleware: RequestHandler) => {
      this.app.use(middleware)
    })
  }

  initRoutes(): void {
    // Initialize Routes
    const appRoutes = this.router.init()

    // Security Router
    this.app.use('/', appRoutes)
  }
}
