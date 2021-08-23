import { Router } from 'express';
import AuthController from '@src/controllers/auth.controller';
import { CreateUserDto } from '@src/dtos/users.dto';
import { Routes } from '@src/interfaces/routes.interface';
import authMiddleware from '@src/middlewares/auth.middleware';
import validationMiddleware from '@src/middlewares/validation.middleware';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post(`${this.path}login`, validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
    this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
  }
}

export default AuthRoute;
