CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


def is_valid_base62(input: str) -> bool:
    """
    Returns `True` if all characters in the input string are Base-62, `False` in all other cases
    """
    return bool(input) and all(c in CHARSET for c in input)
