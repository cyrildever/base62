package golang_test

import (
	"testing"

	base62 "github.com/cyrildever/base62/golang"
	"gotest.tools/assert"
)

// TestEncode ....
func TestEncode(t *testing.T) {
	ref := "4VX"
	value := uint(18969)
	found, err := base62.Encode(value)
	if err != nil {
		t.Fatal(err)
	}
	assert.Equal(t, found, ref)

	found, err = base62.Encode(uint(0))
	assert.NilError(t, err)
	assert.Equal(t, found, "0")

	found, _ = base62.Encode(uint(238_328))
	assert.Equal(t, found, "1000")

	found, _ = base62.Encode(uint(14_776_335))
	assert.Equal(t, found, "ZZZZ")
}
