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

