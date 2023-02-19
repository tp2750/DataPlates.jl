module DataPlates
using StructEquality
using Dates

include("structs.jl")
export DataPlate

include("wells.jl")
export wells

include("methods.jl")
export DataFrame

include("barcodes.jl")
export barcodes

end # module DataPlates
