"""
   wells(geometry::Int), wells(rows::Int, cols::Int)

   geometry: currently one of 6, 24, 96, 384
   rows, cols: number of rows and columns on plate
   values: vector of strings of form: "A01", "B01", ... sorted by column.
   It is easy to re-sort to get wells row-wise: sort(wells(96))
"""
function wells(geometry::Int)
    known_geometries = (6, 24, 96, 384)
    if ! (geometry ∈ known_geometries)
        error("Geometry $geometry not know. Only knows: $known_geometries")
    end
    rows = sqrt(geometry / 1.5) |> Int
    cols = sqrt(geometry * 1.5) |> Int
    wells(rows,cols)
end

function wells(rows::Int, cols::Int)
    return(vec(string.(repeat(LETTERS[1:rows],outer = cols),lpad.(repeat(1:cols, inner=rows),2,"0"))))
end

"""
    row, col: returns row-name and column number from a wellname.
    row("B03") == "B", col("B03") == 3    
"""
row(w::String) = string(w[1]) # TODO does not work for 1536
function col(w::String)
    m = match(r"\d+$", w)
    parse(Int, m.match)
end
"""
    wellname(w::string)
    Adds zero-padding to well names: wellname("B3" == "B03"
"""
wellname(w::String) = @sprintf("%s%.2d", row(w),col(w))
row(w::Missing) = missing
col(w::Missing) = missing
wellname(w::Missing) = missing
