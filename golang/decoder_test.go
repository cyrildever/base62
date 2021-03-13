package base62_test

import (
	"testing"

	base62 "github.com/cyrildever/base62"
	"gotest.tools/assert"
)

// TestDecode ...
func TestDecode(t *testing.T) {
	ref := 18969
	value := "4VX"
	found, err := base62.Decode(value)
	if err != nil {
		t.Fatal(err)
	}
	assert.Equal(t, found, ref)

	_, err = base62.Decode("not-a-base-62%")
	assert.Error(t, err, "not a base-62 input")
}
