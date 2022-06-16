package main

import (
	"github.com/Daiki-Shiraki/ez-album/server/controller"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/piyo", controller.Piyo)
	router.GET("/ping", controller.Pong)

	// router.GET("/tasks", controller.TaskList)
	// router.POST("/tasks", controller.CreateTask)
	// router.GET("/tasks/:id", controller.ReadTask)
	// router.PUT("/tasks/:id", controller.UpdateTask)
	// router.DELETE("/tasks/:id", controller.DeleteTask)

	router.Run(":3000")
}
