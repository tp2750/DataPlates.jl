module DataPlates
using StructEquality
using Dates
using Printf

include("structs.jl")
export DataPlate

include("wells.jl")
export wells
export row, col, wellname

include("methods.jl")
export DataFrame

include("barcodes.jl")
export barcodes

end # module DataPlates
