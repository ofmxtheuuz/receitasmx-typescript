let user = process.env.DB_USER
let password = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${user}:${password}@cluster0.dqcfam1.mongodb.net/ReceitasMx?retryWrites=true&w=majority`
}