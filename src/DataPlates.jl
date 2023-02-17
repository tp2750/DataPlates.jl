module DataPlates
using StructEquality

include("structs.jl")
export DataPlate

include("wells.jl")
export wells

include("methods.jl")
export DataFrame

end # module DataPlates
