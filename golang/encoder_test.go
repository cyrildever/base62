package base62_test

import (
	"testing"

	base62 "github.com/cyrildever/base62"
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
}
