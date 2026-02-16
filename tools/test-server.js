const { createServer } = require("http")
const { Server } = require("socket.io")

const httpServer = createServer()
const PORT = process.env.PORT || 3000

const io = new Server(httpServer)

io.on("connection", socket => {
  console.log("Connected customer:", socket.id)

  socket.on("message", data => {
    console.log("Message to the customer", data)

    socket.emit("message", "Message from the server")
  })

  socket.on("disconnect", () => {
    console.log("The client disconnected.", socket.id)
  })
})

httpServer.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`)
})
