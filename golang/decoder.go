package golang

import (
	"errors"
	"math"
	"strings"
)

// Decode takes an encoded base-62 string and returns its integer value
func Decode(value string) (decoded uint, err error) {
	for i := 0; i < len(value); i++ {
		idx := len(value) - i - 1
		n := strings.Index(string(CHARSET), value[idx:idx+1])
		if n == -1 {
			err = errors.New("not a base-62 input")
			return
		}
		decoded += uint(n) * uint(math.Pow(62, float64(i)))
	}
	return
}
