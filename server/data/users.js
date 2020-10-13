import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Safdar',
    email: 'safdar@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'aghdas',
    email: 'aghdas@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
