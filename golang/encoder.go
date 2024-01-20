package golang

import (
	utls "github.com/cyrildever/go-utls/common/utils"
)

// Encode takes a decimal value and transforms it to its base-62 string representation
func Encode(value uint) (encoded string, err error) {
	if value == uint(0) {
		encoded = "0"
		return
	}
	for value > 0 {
		v, idx, e := utls.EuclideanDivision(int(value), 62)
		if e != nil {
			err = e
			return
		}
		encoded = string(CHARSET[idx]) + encoded
		value = uint(v)
	}
	return
}
