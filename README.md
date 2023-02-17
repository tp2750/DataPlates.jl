# DataPlates.jl

Julia Package for working with data on SBS or microtiter (MTP) plates.

This is a rewrite of [MTP.jl](https://github.com/tp2750/MTP.jl) which was never registered.

Similar use-cases in R:  https://github.com/ropensci/plater, https://github.com/jpquast/ggplate

# Draft

Below are implementation thoughts.

Not much done yet:

* [X] struct DataPlate
* [X] function to generate wells: A01, A02, ....
* [ ]

## Structs
``` julia
struct DataPlate
    name::String
    barcode::String
    geometry::Int
	quadrant_pattern::Vector{Int}
    values::Vector{WellValues}
end
```
Assert that all value-vectors have length == geometry.

``` julia
struct WellValues{T} T
    name::String ## the "column name"
    values::Vector{T} ## Well values are always stored column-wise
end
```
Well values are always stored column-wise. Re-sort on well to get them row-wise
T can be numeric or String.
T can itself be a vector, so this can also hold time-series as reader-curves.
But we probably want to keep this use case separate.

``` julia
struct SparseWellValue{T}
  well_name::String
   value::T
end
```


## Constructors

* DataPlate("Plate1"): 96 well plate with name "Plate1", same as barcode one value: "well_96" with values "A01", "B01", ....
* DataPlate("Plate1", "UP0001234"): 96 well plate with name: "Plate1", barcode: "UP0001234" and one value with one value: "well_96" with values "A01", "B01", ....

## Methods

- Fill a plate with sparse well values.
- DataFrame: convert to tabular form
- print: print in plate form
- write: write a vector of plates as excel workbook
- read: read vector of plates from excel workbook
- format well names
- compute quadrant in different Q patterns:
  - Q pattern: list quadrant numbers in "math order"
  - Normal "Z" pattern is then: 2,1,3,4
  - "Math order" is "C" pattern
- merge 96 well plates to 384 using quadrant-pattern

## Recipes

- plot similar to ggplate https://github.com/jpquast/ggplate

# Input format

Data is read in from a "plate format" like the one used in [plater](https://cran.r-project.org/web/packages/plater/vignettes/plater-basics.html):

The "Name" is used a column name for the values in the "wells".
If read in from a spread-sheet workbook, the sheet name is used as plate name, and the file name is used as plateset name.

| Name | 1   | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10  | 11  | 12  |
|------|-----|----|----|----|----|----|----|----|----|-----|-----|-----|
| A    | V1  | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9 | V10 | V11 | V12 |
| B    | ... |    |    |    |    |    |    |    |    |     |     |     |
| ...  |     |    |    |    |    |    |    |    |    |     |     |     |

When the data is converted to DataFrame is looks like this:

| plateset_name | plate_name | geometry | well | Name |
| ---           | ---        | ---      | ---  | ---  |
| PS1           | Plate1     | 96       | A01  | V1   |
| PS1           | Plate1     | 96       | A02  | V2   |
| ...           |            |          |      |      |

If the input data is sparse (not all wells have values), the DataFrame can be sparse as well (only wells with values) or full depending on a kw parameter.

# Design considerations

## well order

* Do we want a fixed well order?

It makes everything easier, if we just decide on an order.
If we sort by column as default (A01, B01, ...) it is easy to resort to row-wise (A01, A02, ...)

## well names

* Do we want well names as "A01" or "A1"?

The "A01" is nice as it sorts in data frames and spread sheets.
However, it does not scale to 1536, where we have wells:  A01, ..., Z48, AA01, ..., AF48

We will consider 1536, when we get there.

The advantage of A01 wins for now.
