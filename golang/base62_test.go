package golang_test

import (
	"testing"

	model "github.com/cyrildever/base62"
	"gotest.tools/assert"
)

// TestBase62 ...
func TestBase62(t *testing.T) {
	ref := "4VX"
	b62 := model.Base62(ref)

	assert.Equal(t, b62.Value(), 18969)

	rebuilt := model.ToBase62(18969)
	assert.Equal(t, rebuilt.String(), ref)

	bytes := []byte{52, 86, 88}
	assert.DeepEqual(t, bytes, b62.Bytes())

	assert.Assert(t, b62.NonEmpty())

	assert.Assert(t, model.Base62("").IsEmpty() == true)

	wrong := model.ToBase62(-52)
	assert.Equal(t, wrong.Value(), -1)
	assert.Equal(t, wrong.String(), "")
	assert.Assert(t, wrong.IsEmpty())
	assert.Assert(t, wrong.Bytes() == nil)
}
