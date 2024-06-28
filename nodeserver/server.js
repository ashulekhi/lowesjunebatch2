import Express from "express"

var server  =Express()

server.get("/", function(request,response){
    // request.sendFile(__dirname+"/build/index.html")
})

server.listen(80)