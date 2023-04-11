import { Request, Response } from "express";
import connection from "../../models/connections";
import ResComparation from "../../configs/types";

connection.select('*').from('userdates').then((users) => {
    console.log(users);
}).catch((err) => {
    console.log(err);
});

class usersController {
    
    public async index(req: Request, res: Response) {
        try {
            const users = await connection.select('*').from('userdates');
            return res.json(users);

        } catch (error) {
            console.error(error);
            return res.status(500).send('Erro ao buscar usuários');

        }
    }

    public async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const users = await connection.select('*').from('userdates').where('id', id)

            return res.json(users)
        } catch (error) {
            console.log(error)
            return res.status(500).send('erro ao buscar usario')
        }
    }


    public async updateAll(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            await connection('userdates')
              .where('id', id)
              .update({
                name,
                email,
                password,
              }, [name, email, password]);
            res.sendStatus(200); 

          } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao atualizar usuário');
          }
    };
    
    public async updateEmail(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { email } = req.body;
            connection('userdates')
                .where('id', id)
                .update({
                    email,
                }, [email])
            res.sendStatus(200).send('Erro ao atualizar email'); 

        } catch (error){
            console.log(error)
            res.status(500).send('Erro ao atualizar email');
        }
    };


    public async updateName(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            connection('userdates')
                .where('id', id)
                .update({
                    name,
                }, [name])

            return res.status(200).send('nome atualizado com sucesso')

        } catch (error) {
            return res.status(500).send('erro ao atualizar nome')

        }
    }

    public async updatePass(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { password } = req.body;

            connection('userdates')
                .where('id', id)
                .update({
                    password,
                }, [password])

            return res.status(200).send('senha atualizada com sucesso')
        } catch (error) {
            console.log(error)
            return res.status(500).send('erro ao atualizar senha')
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            connection('userdates')
                .insert({
                    name,
                    email,
                    password,
                })  .then(() => {
                    res.send('Usuário criado com sucesso');
                  })
                 

        } catch(error) {
                console.error(error);
                res.status(500).send('Erro ao criar usuário');

        }
    }

    public async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params;

            connection('userdates')
                .where('id', id)
                .delete();

                return res.status(200).send('usario deletado com sucesso')

        } catch(error) {
            console.log(error)
            res.status(500).send('falha ao deletar o usario')
            
        }
    }

}

export default new usersController;