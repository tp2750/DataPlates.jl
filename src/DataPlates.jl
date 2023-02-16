module DataPlates

struct WellValues{T} T
    name::String ## the "column name"
    values::Vector{T} ## Well values are always stored row-wise,
end

struct DataPlate
    name::String
    barcode::String
    geometry::Int
    quadrant_pattern::Vector{Int}
    values::Vector{WellValues}
end



end # module DataPlates
