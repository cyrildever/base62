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

//--- TYPES

// Base62 is a base62 string representation of a byte array.
// NB: if the passed string is not a valid base62 representation, it will not throw an error but rather returns empty or nil items when methods are called.
type Base62 string

//--- METHODS

// Bytes ...
func (b Base62) Bytes() []byte {
	str := b.String()
	if str == "" || str == "%" {
		return nil
	}
	return []byte(str)
}

// String ...
func (b Base62) String() string {
	str := string(b)
	if _, err := Decode(str); err != nil {
		return ""
	}
	return str
}

// Value returns `-1` if the string is invalid, the actual integer value otherwise
func (b Base62) Value() int {
	dec, err := Decode(string(b))
	if err != nil {
		return -1
	}
	return int(dec)
}

// IsEmpty ...
func (b Base62) IsEmpty() bool {
	return b.Bytes() == nil
}

// NonEmpty ...
func (b Base62) NonEmpty() bool {
	return b.String() != ""
}

//--- FUNCTIONS

// ToBase62 ...
func ToBase62(value int) Base62 {
	if value < 0 {
		return ERROR
	}
	enc, err := Encode(uint(value))
	if err != nil {
		return ERROR
	}
	return Base62(enc)
}

const ERROR Base62 = Base62("%") // TODO Make more robust
