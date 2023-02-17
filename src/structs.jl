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


function DataPlate(platename::String,barcode::String, geometry::Int=96) ## [:name => value]
    q_pat = geometry > 6 ? [2,1,3,4] : [1] ## 6-well plates do not have quadrants
    DataPlate(
              platename,
              barcode,
              geometry,
              q_pat,
              [WellValues("well"*lpad(geometry,3,"0"), wells(geometry))]
              )
end

DataPlate(platename::String, geometry::Int=96) = DataPlate(platename, platename, geometry)

"""
    MTP.LETTERS is just the vector ["A", "B", ..., "Z"] as in R
"""
const LETTERS = string.(collect('A':'Z'))
