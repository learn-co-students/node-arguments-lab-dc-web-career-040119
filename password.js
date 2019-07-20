// code solution here
module.exports = generatePassword = (arg) => {
    let password = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < arg; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }

    return password

}

console.log(generatePassword(process.argv[2]))

process.exit(0)