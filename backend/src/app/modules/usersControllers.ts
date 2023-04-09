import { Request, Response } from "express";
import connection from "../../models/connections";
import { request } from "http";
import ResComparation from "../../configs/types";

connection.connect((err: Error, res: Response) => {
    if(err){
        console.log('conexão mal sucedida pois ' + err.stack)
        return;
    }

    console.log("conexão com banco de dados bem sucedida")
})

class usersController {
    index(req: Request, res: Response){
        connection.query("SELECT * FROM userdates", (err: Error, results: ResComparation[]) => {
            if (err) {
                throw err;
              }
        

              return res.json(results);
            });
    }

    show(req: Request, res: Response){
        const { id } = req.params;
        connection.query('SELECT * FROM userdates WHERE id = ?', [id] , (err, results) => {
            if (err) {
              throw err;
            }
          
            return res.json(results);
          });
    }

    updateAll(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        connection.query("UPDATE userdates SET name = ? ,email = ?, password = ? WHERE id = ?", [name, email, password, id], (err, results) => {
            if (err) {
                throw err;
            }

            return res.json(results);
        })
    };

    updateEmail(req: Request, res: Response) {
        const { id } = req.params;
        const { email } = req.body;
        connection.query("UPDATE userdates SET email = ? WHERE id = ?", [email, id], (err, results) => {
            if (err) {
                throw err;
            }

            return res.json(results);
        })
    };

    updateName(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        connection.query("UPDATE userdates SET name = ? WHERE id = ?", [name, id], (err, results) => {
            if (err) {
                throw err;
            }

            return res.json(results);
        })
    };

    updatePass(req: Request, res: Response) {
        const { id } = req.params;
        const { password } = req.body;
        connection.query("UPDATE userdates SET password = ? WHERE id = ?", [password, id], (err, results) => {
            if (err) {
                throw err;
            }

            return res.json(results);
        })
    };

    create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        connection.query("INSERT INTO userdates(name, email, password) VALUES (?, ?, ?)", [name, email, password], (err, results) => {
            if (err) {
                throw err
            }

            return res.json(results)
        })
    }

    destroy(req: Request, res: Response) {
        const { id } = req.params;
        connection.query("DELETE FROM userdates WHERE id = ?", [id], (err, results) => {
            if(err) {
                throw err
            }

            return res.json(results)
        })
    }
}

export default new usersController;