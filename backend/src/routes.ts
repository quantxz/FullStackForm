import { Request, Response, Router } from 'express';
import usersControllers from './app/modules/usersControllers';
const routes: Router = Router();

routes.get("/", usersControllers.index)
routes.get("/:id", usersControllers.show)

routes.put("/:id", usersControllers.updateAll)
routes.put("/:id", usersControllers.updateName)
routes.put("/:id", usersControllers.updateEmail)
routes.put("/:id", usersControllers.updatePass)

routes.post("/", usersControllers.create)
routes.delete("/:id", usersControllers.destroy)

export default routes