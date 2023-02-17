struct WellValues{T}
    name::String ## the "column name"
    values::Vector{T} ## Well values are always stored row-wise,
end
StructEquality.@struct_hash_equal WellValues

struct DataPlate
    name::String
    barcode::String
    geometry::Int
    quadrant_pattern::Vector{Int}
    values::Vector{WellValues}
    # function DataPlate(name, barcode, quadrant_pattern, values)
    #     @assert all(geometry .== length.(values))
    #     @assert all([x.name for x in values] .!= "well") ## well as reserved column name
    #     new(name, barcode, quadrant_pattern, values)
    # end
end
StructEquality.@struct_hash_equal DataPlate


function DataPlate(platename::String,barcode::String) ## [:name => value]
    DataPlate(
              platename,
              barcode,
              96,
              [2,1,3,4],
              [WellValues("well096", wells(96))]
              )
end

DataPlate(platename::String) = DataPlate(platename, platename)

"""
    MTP.LETTERS is just the vector ["A", "B", ..., "Z"] as in R
"""
const LETTERS = string.(collect('A':'Z'))
