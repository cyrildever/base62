import math

from base62 import CHARSET


def decode(value: str) -> int:
    """
    Takes an encoded base-62 string and returns its integer value

    :param value: The Base-62 encoded string
    :type value: str
    :return: The decoded number
    :rtype: int
    """
    decoded = 0
    for i in range(len(value)):
        idx = len(value) - i - 1
        n = CHARSET.index(value[idx])
        if n == -1:
            raise Exception("not a base-62 input")
        decoded += int(n * math.pow(62, i))
    return decoded
