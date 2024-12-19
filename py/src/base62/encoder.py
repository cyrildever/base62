from pyutls import euclidean_division

from base62 import CHARSET


def encode(value: int) -> str:
    """
    Returns the Base62-encoded string representation of the passed number

    :param value: The integer to encode
    :type value: int
    :return: The base-62 representation
    :rtype: str
    """
    if value == 0:
        return "0"
    encoded = ""
    while value > 0:
        value, idx = euclidean_division(value, 62)
        encoded = CHARSET[idx] + encoded
    return encoded
