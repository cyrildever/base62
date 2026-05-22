package golang

import (
	"slices"
)

var CHARSET = []rune("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

// IsValidBase62 returns true if all characters in input are Base-62, false in all other cases
func IsValidBase62(input string) bool {
	if len(input) == 0 {
		return false
	}
	for _, c := range input {
		found := slices.Contains(CHARSET, c)
		if !found {
			return false
		}
	}
	return true
}
