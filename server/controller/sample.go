package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Piyo(c *gin.Context) {
	c.String(http.StatusOK, "piyo")
}
