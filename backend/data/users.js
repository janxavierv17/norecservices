import bcryptjs from "bcryptjs";
const users = [
    {
        name: "janxavierv17",
        email: "janv@norec.com.au",
        password: bcryptjs.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "aaronv",
        email: "aaronv@norec.com.au",
        password: bcryptjs.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "cherryg",
        email: "cherryg@norec.com.au",
        password: bcryptjs.hashSync("123456", 10),
        isAdmin: false,
    },
]

export default users;