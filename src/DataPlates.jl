module DataPlates
using StructEquality
using Dates
using XLSX

include("structs.jl")
export DataPlate

include("wells.jl")
export wells
export row, col, wellname
export reorder_wells

include("methods.jl")
export DataFrame
export print, show, pp

include("barcodes.jl")
export barcodes

include("excel.jl")
export data_plates

end # module DataPlates
