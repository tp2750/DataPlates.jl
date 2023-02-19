```@meta
CurrentModule = DataPlates
```

# Barcodes

The `barcodes` function can generate barcodes with the following properties:

* They are in practice unique
* They are confined to a given number of characters.

The basic usage just gives N unique barcodes:

``` @example 1
using DataPlates
b1 = barcodes(13,count = 5)
```

Calling it again after at least 1 secund gives a new set of barcodes.

``` @example 1
sleep(1)
b2 = barcodes(13,count = 5)
```

Further, barcodes can be given a prefix:

``` @example 1
barcodes(13,prefix = "BC")
```

The counter can be separated by a separator string:

``` @example 1
b4 = barcodes(13,prefix = "BC", count = 2, sep = "X")
```

``` @example 1
length.(b4)
```
