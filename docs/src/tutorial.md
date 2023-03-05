# Tutorial

## Plate skeleton

### Singel plate
Generate a DataFrame corresponding to a 96 well plate:

``` julia
julia> DataFrame(DataPlate("Plate1"))
96×4 DataFrame
 Row │ platename  barcode  well    well096 
     │ String     String   String  String  
─────┼─────────────────────────────────────
   1 │ Plate1     Plate1   A01     A01
   2 │ Plate1     Plate1   B01     B01
   3 │ Plate1     Plate1   C01     C01
   4 │ Plate1     Plate1   D01     D01
   5 │ Plate1     Plate1   E01     E01
  ⋮  │     ⋮         ⋮       ⋮        ⋮
  93 │ Plate1     Plate1   E12     E12
  94 │ Plate1     Plate1   F12     F12
  95 │ Plate1     Plate1   G12     G12
  96 │ Plate1     Plate1   H12     H12
                            87 rows omitted

```

### Sorting

The plate is sorted "by column". It is easy to sort it by row;

``` julia
julia> sort(DataFrame(DataPlate("Plate1")))
96×4 DataFrame
 Row │ platename  barcode  well    well096 
     │ String     String   String  String  
─────┼─────────────────────────────────────
   1 │ Plate1     Plate1   A01     A01
   2 │ Plate1     Plate1   A02     A02
   3 │ Plate1     Plate1   A03     A03
   4 │ Plate1     Plate1   A04     A04
   5 │ Plate1     Plate1   A05     A05
  ⋮  │     ⋮         ⋮       ⋮        ⋮
  93 │ Plate1     Plate1   H09     H09
  94 │ Plate1     Plate1   H10     H10
  95 │ Plate1     Plate1   H11     H11
  96 │ Plate1     Plate1   H12     H12
                            87 rows omitted

```

### Supported formats

Other known plate formats are 6, 24, 96, 384 well plates.
Support for 1536 may come if needed.

### Multiple plates

To make multiple plates, broadcast over the plate name (as possibly the barcode).
Example:

``` julia
julia> DataFrame(DataPlate.(["P1", "P2"], ["A", "B"],6))
12×4 DataFrame
 Row │ platename  barcode  well    well006 
     │ String     String   String  String  
─────┼─────────────────────────────────────
   1 │ P1         A        A01     A01
   2 │ P1         A        B01     B01
   3 │ P1         A        A02     A02
   4 │ P1         A        B02     B02
   5 │ P1         A        A03     A03
   6 │ P1         A        B03     B03
   7 │ P2         B        A01     A01
   8 │ P2         B        B01     B01
   9 │ P2         B        A02     A02
  10 │ P2         B        B02     B02
  11 │ P2         B        A03     A03
  12 │ P2         B        B03     B03
```

## Printing in plate format

The `Base.print` and `Base.show` methods is overloaded to show the last column.

```
julia> DataPlate("P1")
8×15 DataFrame
 Row │ platename  barcode  row     1        2        3        4        5        6        7        8        9        10       11       12      
     │ String     String   String  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String? 
─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1 │ P1         P1       A       A01      A02      A03      A04      A05      A06      A07      A08      A09      A10      A11      A12
   2 │ P1         P1       B       B01      B02      B03      B04      B05      B06      B07      B08      B09      B10      B11      B12
   3 │ P1         P1       C       C01      C02      C03      C04      C05      C06      C07      C08      C09      C10      C11      C12
   4 │ P1         P1       D       D01      D02      D03      D04      D05      D06      D07      D08      D09      D10      D11      D12
   5 │ P1         P1       E       E01      E02      E03      E04      E05      E06      E07      E08      E09      E10      E11      E12
   6 │ P1         P1       F       F01      F02      F03      F04      F05      F06      F07      F08      F09      F10      F11      F12
   7 │ P1         P1       G       G01      G02      G03      G04      G05      G06      G07      G08      G09      G10      G11      G12
   8 │ P1         P1       H       H01      H02      H03      H04      H05      H06      H07      H08      H09      H10      H11      H12
```

The `print` method is needed to select an other column to use as values. 
It currently does this using DataFrames.unstack on generated "row" and "col" variables.
So these can be used as values to `print` :

```
julia> print(DataPlate("P1"), :row)
8×15 DataFrame
 Row │ platename  barcode  row     1        2        3        4        5        6        7        8        9        10       11       12      
     │ String     String   String  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String? 
─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1 │ P1         P1       A       A        A        A        A        A        A        A        A        A        A        A        A
   2 │ P1         P1       B       B        B        B        B        B        B        B        B        B        B        B        B
   3 │ P1         P1       C       C        C        C        C        C        C        C        C        C        C        C        C
   4 │ P1         P1       D       D        D        D        D        D        D        D        D        D        D        D        D
   5 │ P1         P1       E       E        E        E        E        E        E        E        E        E        E        E        E
   6 │ P1         P1       F       F        F        F        F        F        F        F        F        F        F        F        F
   7 │ P1         P1       G       G        G        G        G        G        G        G        G        G        G        G        G
   8 │ P1         P1       H       H        H        H        H        H        H        H        H        H        H        H        H
```


The `print` method actually returns a DataFrame object.
This could be a bad idea, so there is the alias `pp` which should be used in stead.

This makes it easy to print vectors of plates:

```
julia> pp.([DataPlate("P1",6), DataPlate("P2",24)])
2-element Vector{DataFrame}:
 2×6 DataFrame
 Row │ platename  barcode  row     1        2        3       
     │ String     String   String  String?  String?  String? 
─────┼───────────────────────────────────────────────────────
   1 │ P1         P1       A       A01      A02      A03
   2 │ P1         P1       B       B01      B02      B03
 4×9 DataFrame
 Row │ platename  barcode  row     1        2        3        4        5       ⋯
     │ String     String   String  String?  String?  String?  String?  String? ⋯
─────┼──────────────────────────────────────────────────────────────────────────
   1 │ P2         P2       A       A01      A02      A03      A04      A05     ⋯
   2 │ P2         P2       B       B01      B02      B03      B04      B05
   3 │ P2         P2       C       C01      C02      C03      C04      C05
   4 │ P2         P2       D       D01      D02      D03      D04      D05
                                                                1 column omitted
```

To see the actual data structure, use `dump` or `Base.show_default`:


``` julia
julia> Base.show_default(stdout,DataPlate("P1", 6))
DataPlate("P1", "P1", 6, [1], DataPlates.WellValues[DataPlates.WellValues{String}("well006", ["A01", "B01", "A02", "B02", "A03", "B03"])])

```

## Adding Values

Values are added as extra keyword arguments.
The length must match the geometry.

``` julia
julia> DataPlate("P1",6, activity=collect(1:6))
[ Info: dispcol: activity
2×6 DataFrame
 Row │ platename  barcode  row     1       2       3      
     │ String     String   String  Int64?  Int64?  Int64? 
─────┼────────────────────────────────────────────────────
   1 │ P1         P1       A            1       3       5
   2 │ P1         P1       B            2       4       6
```

## Reordering wells

Well values are stored column-major as julia does with matrices.
The function `reorder_wells` is used to re-sort a vector of values from column-major to row-major:

```
julia> reshape(1:24,(4,6))
4×6 reshape(::UnitRange{Int64}, 4, 6) with eltype Int64:
 1  5   9  13  17  21
 2  6  10  14  18  22
 3  7  11  15  19  23
 4  8  12  16  20  24

julia> reshape(reorder_wells(1:24),(4,6))
4×6 reshape(transpose(reshape(::UnitRange{Int64}, 6, 4)), 4, 6) with eltype Int64:
  1   2   3   4   5   6
  7   8   9  10  11  12
 13  14  15  16  17  18
 19  20  21  22  23  24

```
