struct WellValues{T}
    name::String ## the "column name"
    values::Vector{T} ## Well values are always stored row-wise,
    # well_direction::String ## always "|".
    ## To do this See src/test.jl and https://docs.julialang.org/en/v1/manual/constructors/#Parametric-Constructors
    # function WellValues(name::String, values::Vector{T}, well_direction::String)
    #     if any(startswith.(well_direction, ["|",r"A0?1,? ?B0?1","col"]))
    #         return(new(name, values, "|"))
    #     end
    #     return(new(name, reorder_wells(values), "|"))
    # end
end
StructEquality.@struct_hash_equal WellValues


struct DataPlate
    name::String
    barcode::String
    geometry::Int
    quadrant_pattern::Vector{Int}
    values::Vector{WellValues}
    function DataPlate(name, barcode, geometry, quadrant_pattern, values)
        @assert all(geometry .== [length(x.values) for x in values])
        @assert all([x.name for x in values] .!= "well") ## well as reserved column name
        new(name, barcode, geometry, quadrant_pattern, values)
    end
end
StructEquality.@struct_hash_equal DataPlate

"""
    DataPlate(platename::String,barcode::String, geometry::Int=96; kwargs)
    generate a DataPlate with given name, barcode and geometry.
    If always have a value-vector called "wellxxx" where xxx is the zero-padded geometry, eg well096.

    platename: name of plate. To make more plates: broadcast over a vector of plate names.
    barcode: barcode on plate. Defaults to platename. 
    geometry: number of wells on plate
    kwargs: if given they define extra columns of values.

    Examples:
    julia> DataPlate("P1",6)
    [ Info: dispcol: well006
    2×6 DataFrame
     Row │ platename  barcode  row     1        2        3       
         │ String     String   String  String?  String?  String? 
    ─────┼───────────────────────────────────────────────────────
       1 │ P1         P1       A       A01      A02      A03
       2 │ P1         P1       B       B01      B02      B03
    
    julia> DataPlate("P1",6, activity=collect(1:6))
    [ Info: dispcol: activity
    2×6 DataFrame
     Row │ platename  barcode  row     1       2       3      
         │ String     String   String  Int64?  Int64?  Int64? 
    ─────┼────────────────────────────────────────────────────
       1 │ P1         P1       A            1       3       5
       2 │ P1         P1       B            2       4       6

"""
function DataPlate(platename::String,barcode::String, geometry::Int=96; kwargs...)
    q_pat = geometry > 6 ? [2,1,3,4] : [1] ## 6-well plates do not have quadrants
    well_values = WellValues[]
    push!(well_values, WellValues("well"*lpad(geometry,3,"0"), wells(geometry))) ## always add wellxxx
    for k in keys(kwargs)
        push!(well_values, WellValues(string(k), kwargs[k]))
    end
    DataPlate(
              platename,
              barcode,
              geometry,
              q_pat,
              well_values
              )
end

DataPlate(platename::String, geometry::Int=96;kwargs...) = DataPlate(platename, platename, geometry; kwargs...)



"""
    DataPlates.LETTERS is just the vector ["A", "B", ..., "Z"] as in R
"""
const LETTERS = string.(collect('A':'Z'))
