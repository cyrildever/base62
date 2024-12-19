import argparse


def main(args):
    """
    Encode/Decode an integer back-and-forth its Base-62 string representation

    Arguments
    ---------
    value: string
        the value to encode or decode
    -o --operation: string
        the operation to process: decode|encode

    Usage
    -----
    $ python -m base62 -o decode 4VX
    """
    print(args)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("value", help="the value to encode or decode", required=True)
    parser.add_argument(
        "-o",
        "--operation",
        help="the operation to process: decode|encode",
        required=True,
    )
    args = parser.parse_args()

    main(args)
