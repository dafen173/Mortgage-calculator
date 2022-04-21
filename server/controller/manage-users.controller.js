const db = require('../manage-users-db')


class UserController {
    // async createUser(req, res) {
    //     const {username, groupname, created, group_id} = req.body
    //     const newPerson = await db.query(
    //             `INSERT INTO users (username, groupname, created, group_id) values ($1, $2, $3, $4) RETURNING *`, 
    //             [username, groupname, created, group_id]
    //         )
    //     res.json(newPerson.rows[0])
    //     // const users = await db.query(`SELECT * FROM users ORDER BY id ASC`)
    //     // res.json(users.rows)
    // }

    async createUser(req, res) {
            const {bankname, interest_rate, max_loan, down_payment, loan_term} = req.body
            const newPerson = await db.query(
                    `INSERT INTO banks (bankname, interest_rate, max_loan, down_payment, loan_term) values ($1, $2, $3, $4, $5) RETURNING *`, 
                    [bankname, interest_rate, max_loan, down_payment, loan_term]
                )
            res.json(newPerson.rows[0])
            // const users = await db.query(`SELECT * FROM users ORDER BY id ASC`)
            // res.json(users.rows)
        }


    // async getUsers(req, res) {
    //     const users = await db.query(`SELECT * FROM users ORDER BY id ASC`)
    //     res.json(users.rows)
    // }
    async getUsers(req, res) {
            const users = await db.query(`SELECT * FROM banks ORDER BY id ASC`)
            res.json(users.rows)
        }


    async getUser(req, res) {
        
    }
    async updateUser(req, res) {
        const {username, groupname, id} = req.body
        const user = await db.query(
            'UPDATE users set username = $1, groupname = $2 where id = $3 RETURNING *',
            [username, groupname, id]
        )
        //res.json(user.rows)
        const users = await db.query(`SELECT * FROM users ORDER BY id ASC`)
        res.json(users.rows)
    }

    async updateUserGroupname(req, res) {
        const {groupname, group_id} = req.body
        const user = await db.query(
            'UPDATE users set groupname = $1 where group_id = $2 RETURNING *',
            [groupname, group_id]
        )
        //res.json(user.rows)
        const users = await db.query(`SELECT * FROM users ORDER BY id ASC`)
        res.json(users.rows)
    }


    // async deleteUser(req, res) {
    //     const id = req.params.id
    //     await db.query(`DELETE FROM users where id = $1`, [id])
    //     //res.json(user.rows)
    //     //res.json({ message: `id #${id} был удален` })
    //     const users = await db.query(`SELECT * FROM users`)
    //     res.json(users.rows)
    // }
    async deleteUser(req, res) {
        const id = req.params.id
        await db.query(`DELETE FROM banks where id = $1`, [id])
        //res.json(user.rows)
        //res.json({ message: `id #${id} был удален` })
        const users = await db.query(`SELECT * FROM banks`)
        res.json(users.rows)
    }

}

module.exports = new UserController()

