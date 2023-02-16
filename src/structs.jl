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

function well_names(geometry)
    known_geometries = (6, 24, 96, 384)
    if ! (geometry ∈ known_geometries)
        throw("Geometry $geometry not know. Only knows: $known_geometries")
    end
    rows = sqrt(geometry / 1.5)
    cols = sqrt(geometry * 1.5)
    
end
