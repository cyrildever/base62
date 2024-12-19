#!/bin/bash

# Remove former distributions
rm dist/base62-py-*
rm dist/base62_py-*

# Publish library to PyPI

python3 -m build
python3 -m twine upload dist/*
