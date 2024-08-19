function respons(status,message,data =null)
{
    return{
        status,
        message,
        data,
        timestamo: new Date().getTime()
    }
}

module.exports = {
    respons
}