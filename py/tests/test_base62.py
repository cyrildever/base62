from unittest import TestCase

from base62 import decode, encode


class TestEncoder(TestCase):
    def test_decode(self):
        ref = 18969
        value = "4VX"
        found = decode(value)
        self.assertEqual(found, ref)

        with self.assertRaises(Exception):
            decode("not-a-base-62%")

        found = decode("0")
        self.assertEqual(found, 0)

    def test_encode(self):
        value = 18969
        expected = "4VX"
        found = encode(value)
        self.assertEqual(found, expected)

        found = encode(0)
        self.assertEqual(found, "0")
