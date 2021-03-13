package base62

import (
	b62 "github.com/cyrildever/base62/golang"
)

// This file serves as an alias to the actual module code that resides in the `golang/` subdirectory.
// We had to do that to circumvent golang inability to use subfolder in Github to make a repo polyglottal.

// Decode ...
func Decode(value string) (uint, error) {
	return b62.Decode(value)
}

// Encode ...
func Encode(value uint) (string, error) {
	return b62.Encode(value)
}
