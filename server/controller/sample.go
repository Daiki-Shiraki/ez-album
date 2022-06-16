package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Piyo(c *gin.Context) {
	c.String(http.StatusOK, "piyo")
}
func Pong(c *gin.Context) {
	c.String(http.StatusOK, "Pong!!")
}
