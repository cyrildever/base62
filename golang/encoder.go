package base62

import (
	utls "github.com/cyrildever/go-utls/common/utils"
)

// Encode takes a decimal value and transforms it to its base-62 string representation
func Encode(value int) (encoded string, err error) {
	for value > 0 {
		v, idx, e := utls.EuclideanDivision(value, 62)
		if e != nil {
			err = e
			return
		}
		encoded = string(CHARSET[idx]) + encoded
		value = v
	}
	return
}
