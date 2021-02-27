import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: false,
    }
]

export default users