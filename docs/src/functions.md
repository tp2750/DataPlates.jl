```@meta
CurrentModule = DataPlates
```
# Utility Functions

The DataPlates module also defines a number of functions that are usful when working with plates and wells.

## `wells` 

Generate the the well names of an SBS / MTP plate.
Works for plates of size 6, 24, 96, 384.
Well names are generated columns wise (A01, B01, ...), as it is easy to get them row-wise by just re-sorting.

``` @example 1
using DataPlates
wells(6)
```

``` @docs
wells
```

# `wellname`

Some software write wellnames without zero-padding: "A1".
The `wellname` function converts to sortable form:

``` @example 1
wellname("B3")
```

``` @docs
wellname
```


# `row`, `col`

Returns row name and column number from a wellname:

``` @example 1
row("B03"), col("B03")
```
