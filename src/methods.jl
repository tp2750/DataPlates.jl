import DataFrames.DataFrame

## TODO: We should only need Tables for this. But for now, we depend on DataFrames
function DataFrame(p::DataPlate)
    _well = wells(p.geometry)
    df = DataFrame(platename = p.name, barcode = p.barcode, well = _well)
    for col in p.values
        df[!,col.name] = col.values
    end
    df
end
DataFrame(ps::Vector{DataPlate}) = reduce(vcat, [DataFrame(p) for p in ps])

import Base.print
import Base.show
import DataFrames.unstack

function print(p::DataPlate, dispcol=:well)
    p1 = DataFrame(p)
    p1.row = row.(p1.well)
    p1.col = col.(p1.well)
    unstack(p1, [:platename, :barcode, :row], :col, dispcol)
end

show(io::IO, p::DataPlate, dispcol=:well) = show(io, print(p, dispcol))
pp=print
