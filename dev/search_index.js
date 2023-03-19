var documenterSearchIndex = {"docs":
[{"location":"functions/","page":"Functions","title":"Functions","text":"CurrentModule = DataPlates","category":"page"},{"location":"functions/#Utility-Functions","page":"Functions","title":"Utility Functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"The DataPlates module also defines a number of functions that are usful when working with plates and wells.","category":"page"},{"location":"functions/#wells","page":"Functions","title":"wells","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Generate the the well names of an SBS / MTP plate. Works for plates of size 6, 24, 96, 384. Well names are generated columns wise (A01, B01, ...), as it is easy to get them row-wise by just re-sorting.","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"using DataPlates\nwells(6)","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"wells","category":"page"},{"location":"functions/#DataPlates.wells","page":"Functions","title":"DataPlates.wells","text":"wells(geometry::Int), wells(rows::Int, cols::Int)\n\ngeometry: currently one of 6, 24, 96, 384    rows, cols: number of rows and columns on plate    values: vector of strings of form: \"A01\", \"B01\", ... sorted by column.    It is easy to re-sort to get wells row-wise: sort(wells(96))\n\n\n\n\n\n","category":"function"},{"location":"functions/#wellname","page":"Functions","title":"wellname","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Some software write wellnames without zero-padding: \"A1\". The wellname function converts to sortable form:","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"wellname(\"B3\")","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"wellname","category":"page"},{"location":"functions/#DataPlates.wellname","page":"Functions","title":"DataPlates.wellname","text":"wellname(w::string)\nAdds zero-padding to well names: wellname(\"B3\" == \"B03\"\n\n\n\n\n\n","category":"function"},{"location":"functions/#row,-col","page":"Functions","title":"row, col","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Returns row name and column number from a wellname:","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"row(\"B03\"), col(\"B03\")","category":"page"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = DataPlates","category":"page"},{"location":"api/#DataPlates","page":"API","title":"DataPlates","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Documented functions DataPlates.","category":"page"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [DataPlates]","category":"page"},{"location":"api/#DataPlates.LETTERS","page":"API","title":"DataPlates.LETTERS","text":"DataPlates.LETTERS is just the vector [\"A\", \"B\", ..., \"Z\"] as in R\n\n\n\n\n\n","category":"constant"},{"location":"api/#DataPlates.DataPlate","page":"API","title":"DataPlates.DataPlate","text":"DataPlate(platename::String,barcode::String, geometry::Int=96; kwargs)\ngenerate a DataPlate with given name, barcode and geometry.\nIf always have a value-vector called \"wellxxx\" where xxx is the zero-padded geometry, eg well096.\n\nplatename: name of plate. To make more plates: broadcast over a vector of plate names.\nbarcode: barcode on plate. Defaults to platename. \ngeometry: number of wells on plate\nkwargs: if given they define extra columns of values.\n\nExamples:\njulia> DataPlate(\"P1\",6)\n[ Info: dispcol: well006\n2×6 DataFrame\n Row │ platename  barcode  row     1        2        3       \n     │ String     String   String  String?  String?  String? \n─────┼───────────────────────────────────────────────────────\n   1 │ P1         P1       A       A01      A02      A03\n   2 │ P1         P1       B       B01      B02      B03\n\njulia> DataPlate(\"P1\",6, activity=collect(1:6))\n[ Info: dispcol: activity\n2×6 DataFrame\n Row │ platename  barcode  row     1       2       3      \n     │ String     String   String  Int64?  Int64?  Int64? \n─────┼────────────────────────────────────────────────────\n   1 │ P1         P1       A            1       3       5\n   2 │ P1         P1       B            2       4       6\n\n\n\n\n\n","category":"type"},{"location":"api/#DataPlates.barcodes-Tuple{Int64}","page":"API","title":"DataPlates.barcodes","text":"barcodes(prefix::String, width::Int; count = 1, sep=\"\")\nGenerate barcodes.\nGenerate `count` barcodes each with maximal number of characters `width`\n\n\n\n\n\n","category":"method"},{"location":"api/#DataPlates.reorder_wells-Tuple{Any}","page":"API","title":"DataPlates.reorder_wells","text":"reorder_wells(w)\nReorder wells from column major to row major\nw vector: reorder vector\nw Int: generate vector of length w which will reorder a vector\n\n\n\n\n\n","category":"method"},{"location":"api/#DataPlates.row-Tuple{String}","page":"API","title":"DataPlates.row","text":"row, col: returns row-name and column number from a wellname.\nrow(\"B03\") == \"B\", col(\"B03\") == 3\n\n\n\n\n\n","category":"method"},{"location":"api/#DataPlates.wellname-Tuple{String}","page":"API","title":"DataPlates.wellname","text":"wellname(w::string)\nAdds zero-padding to well names: wellname(\"B3\" == \"B03\"\n\n\n\n\n\n","category":"method"},{"location":"api/#DataPlates.wells-Tuple{Int64}","page":"API","title":"DataPlates.wells","text":"wells(geometry::Int), wells(rows::Int, cols::Int)\n\ngeometry: currently one of 6, 24, 96, 384    rows, cols: number of rows and columns on plate    values: vector of strings of form: \"A01\", \"B01\", ... sorted by column.    It is easy to re-sort to get wells row-wise: sort(wells(96))\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DataPlates","category":"page"},{"location":"#DataPlates","page":"Home","title":"DataPlates","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DataPlates.","category":"page"},{"location":"","page":"Home","title":"Home","text":"DataPlates is a Julia package for working with data on SBS or microtiter (MTP) plates. This is a rewrite of MTP.jl which was never registered.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Packages for similar use-cases exist in R: https://github.com/ropensci/plater, https://github.com/jpquast/ggplate","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/#Plate-skeleton","page":"Tutorial","title":"Plate skeleton","text":"","category":"section"},{"location":"tutorial/#Singel-plate","page":"Tutorial","title":"Singel plate","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Generate a DataFrame corresponding to a 96 well plate:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> DataFrame(DataPlate(\"Plate1\"))\n96×4 DataFrame\n Row │ platename  barcode  well    well096 \n     │ String     String   String  String  \n─────┼─────────────────────────────────────\n   1 │ Plate1     Plate1   A01     A01\n   2 │ Plate1     Plate1   B01     B01\n   3 │ Plate1     Plate1   C01     C01\n   4 │ Plate1     Plate1   D01     D01\n   5 │ Plate1     Plate1   E01     E01\n  ⋮  │     ⋮         ⋮       ⋮        ⋮\n  93 │ Plate1     Plate1   E12     E12\n  94 │ Plate1     Plate1   F12     F12\n  95 │ Plate1     Plate1   G12     G12\n  96 │ Plate1     Plate1   H12     H12\n                            87 rows omitted\n","category":"page"},{"location":"tutorial/#Sorting","page":"Tutorial","title":"Sorting","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The plate is sorted \"by column\". It is easy to sort it by row;","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> sort(DataFrame(DataPlate(\"Plate1\")))\n96×4 DataFrame\n Row │ platename  barcode  well    well096 \n     │ String     String   String  String  \n─────┼─────────────────────────────────────\n   1 │ Plate1     Plate1   A01     A01\n   2 │ Plate1     Plate1   A02     A02\n   3 │ Plate1     Plate1   A03     A03\n   4 │ Plate1     Plate1   A04     A04\n   5 │ Plate1     Plate1   A05     A05\n  ⋮  │     ⋮         ⋮       ⋮        ⋮\n  93 │ Plate1     Plate1   H09     H09\n  94 │ Plate1     Plate1   H10     H10\n  95 │ Plate1     Plate1   H11     H11\n  96 │ Plate1     Plate1   H12     H12\n                            87 rows omitted\n","category":"page"},{"location":"tutorial/#Supported-formats","page":"Tutorial","title":"Supported formats","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Other known plate formats are 6, 24, 96, 384 well plates. Support for 1536 may come if needed.","category":"page"},{"location":"tutorial/#Multiple-plates","page":"Tutorial","title":"Multiple plates","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"To make multiple plates, broadcast over the plate name (as possibly the barcode). Example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> DataFrame(DataPlate.([\"P1\", \"P2\"], [\"A\", \"B\"],6))\n12×4 DataFrame\n Row │ platename  barcode  well    well006 \n     │ String     String   String  String  \n─────┼─────────────────────────────────────\n   1 │ P1         A        A01     A01\n   2 │ P1         A        B01     B01\n   3 │ P1         A        A02     A02\n   4 │ P1         A        B02     B02\n   5 │ P1         A        A03     A03\n   6 │ P1         A        B03     B03\n   7 │ P2         B        A01     A01\n   8 │ P2         B        B01     B01\n   9 │ P2         B        A02     A02\n  10 │ P2         B        B02     B02\n  11 │ P2         B        A03     A03\n  12 │ P2         B        B03     B03","category":"page"},{"location":"tutorial/#Printing-in-plate-format","page":"Tutorial","title":"Printing in plate format","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The Base.print and Base.show methods is overloaded to show the last column.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> DataPlate(\"P1\")\n8×15 DataFrame\n Row │ platename  barcode  row     1        2        3        4        5        6        7        8        9        10       11       12      \n     │ String     String   String  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String? \n─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n   1 │ P1         P1       A       A01      A02      A03      A04      A05      A06      A07      A08      A09      A10      A11      A12\n   2 │ P1         P1       B       B01      B02      B03      B04      B05      B06      B07      B08      B09      B10      B11      B12\n   3 │ P1         P1       C       C01      C02      C03      C04      C05      C06      C07      C08      C09      C10      C11      C12\n   4 │ P1         P1       D       D01      D02      D03      D04      D05      D06      D07      D08      D09      D10      D11      D12\n   5 │ P1         P1       E       E01      E02      E03      E04      E05      E06      E07      E08      E09      E10      E11      E12\n   6 │ P1         P1       F       F01      F02      F03      F04      F05      F06      F07      F08      F09      F10      F11      F12\n   7 │ P1         P1       G       G01      G02      G03      G04      G05      G06      G07      G08      G09      G10      G11      G12\n   8 │ P1         P1       H       H01      H02      H03      H04      H05      H06      H07      H08      H09      H10      H11      H12","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The print method is needed to select an other column to use as values.  It currently does this using DataFrames.unstack on generated \"row\" and \"col\" variables. So these can be used as values to print :","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> print(DataPlate(\"P1\"), :row)\n8×15 DataFrame\n Row │ platename  barcode  row     1        2        3        4        5        6        7        8        9        10       11       12      \n     │ String     String   String  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String?  String? \n─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n   1 │ P1         P1       A       A        A        A        A        A        A        A        A        A        A        A        A\n   2 │ P1         P1       B       B        B        B        B        B        B        B        B        B        B        B        B\n   3 │ P1         P1       C       C        C        C        C        C        C        C        C        C        C        C        C\n   4 │ P1         P1       D       D        D        D        D        D        D        D        D        D        D        D        D\n   5 │ P1         P1       E       E        E        E        E        E        E        E        E        E        E        E        E\n   6 │ P1         P1       F       F        F        F        F        F        F        F        F        F        F        F        F\n   7 │ P1         P1       G       G        G        G        G        G        G        G        G        G        G        G        G\n   8 │ P1         P1       H       H        H        H        H        H        H        H        H        H        H        H        H","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The print method actually returns a DataFrame object. This could be a bad idea, so there is the alias pp which should be used in stead.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This makes it easy to print vectors of plates:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> pp.([DataPlate(\"P1\",6), DataPlate(\"P2\",24)])\n2-element Vector{DataFrame}:\n 2×6 DataFrame\n Row │ platename  barcode  row     1        2        3       \n     │ String     String   String  String?  String?  String? \n─────┼───────────────────────────────────────────────────────\n   1 │ P1         P1       A       A01      A02      A03\n   2 │ P1         P1       B       B01      B02      B03\n 4×9 DataFrame\n Row │ platename  barcode  row     1        2        3        4        5       ⋯\n     │ String     String   String  String?  String?  String?  String?  String? ⋯\n─────┼──────────────────────────────────────────────────────────────────────────\n   1 │ P2         P2       A       A01      A02      A03      A04      A05     ⋯\n   2 │ P2         P2       B       B01      B02      B03      B04      B05\n   3 │ P2         P2       C       C01      C02      C03      C04      C05\n   4 │ P2         P2       D       D01      D02      D03      D04      D05\n                                                                1 column omitted","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"To see the actual data structure, use dump or Base.show_default:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> Base.show_default(stdout,DataPlate(\"P1\", 6))\nDataPlate(\"P1\", \"P1\", 6, [1], DataPlates.WellValues[DataPlates.WellValues{String}(\"well006\", [\"A01\", \"B01\", \"A02\", \"B02\", \"A03\", \"B03\"])])\n","category":"page"},{"location":"tutorial/#Adding-Values","page":"Tutorial","title":"Adding Values","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Values are added as extra keyword arguments. The length must match the geometry.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> DataPlate(\"P1\",6, activity=collect(1:6))\n[ Info: dispcol: activity\n2×6 DataFrame\n Row │ platename  barcode  row     1       2       3      \n     │ String     String   String  Int64?  Int64?  Int64? \n─────┼────────────────────────────────────────────────────\n   1 │ P1         P1       A            1       3       5\n   2 │ P1         P1       B            2       4       6","category":"page"},{"location":"tutorial/#Reordering-wells","page":"Tutorial","title":"Reordering wells","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Well values are stored column-major as julia does with matrices. The function reorder_wells is used to re-sort a vector of values from column-major to row-major:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"julia> reshape(1:24,(4,6))\n4×6 reshape(::UnitRange{Int64}, 4, 6) with eltype Int64:\n 1  5   9  13  17  21\n 2  6  10  14  18  22\n 3  7  11  15  19  23\n 4  8  12  16  20  24\n\njulia> reshape(reorder_wells(1:24),(4,6))\n4×6 reshape(transpose(reshape(::UnitRange{Int64}, 6, 4)), 4, 6) with eltype Int64:\n  1   2   3   4   5   6\n  7   8   9  10  11  12\n 13  14  15  16  17  18\n 19  20  21  22  23  24\n","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"CurrentModule = DataPlates","category":"page"},{"location":"barcodes/#Barcodes","page":"Barcodes","title":"Barcodes","text":"","category":"section"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"The barcodes function can generate barcodes with the following properties:","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"They are in practice unique\nThey are confined to a given number of characters.","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"The basic usage just gives N unique barcodes:","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"using DataPlates\nb1 = barcodes(13,count = 5)","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"Calling it again after at least 1 secund gives a new set of barcodes.","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"sleep(1)\nb2 = barcodes(13,count = 5)","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"Further, barcodes can be given a prefix:","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"barcodes(13,prefix = \"BC\")","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"The counter can be separated by a separator string:","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"b4 = barcodes(13,prefix = \"BC\", count = 2, sep = \"X\")","category":"page"},{"location":"barcodes/","page":"Barcodes","title":"Barcodes","text":"length.(b4)","category":"page"}]
}