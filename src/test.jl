function test1(;kwargs...)
    @info "Length of kwargs: $(length(kwargs))"
    for k in keys(kwargs)
        @info "Key: $k, val: $(kwargs[k])"
    end
end

    
struct Foo
    bar
    baz
end

struct OrderedPair1
    x::Real
    y::Real
    OrderedPair1(x,y) = x > y ? error("out of order") : new(x,y)
end

struct OrderedPair2{T}
    x::T
    y::T
    OrderedPair2{T}(x,y) where T = x > y ? error("out of order") : new(x,y)
end
OrderedPair2(x::T,y::T) where T = OrderedPair2{T}(x,y)

struct OrderedPair3{T}
    x::T
    y::T
    function OrderedPair3{T}(x,y) where T
        if x > y
            error("out of order")
        end
        new(x,y)        
    end
end
OrderedPair3(x::T,y::T) where T = OrderedPair3{T}(x,y)

struct DP1
    name::String
    barcode::String
    geometry::Int
    quadrant_pattern::Vector{Int}
    values::Vector{DataPlates.WellValues}
    function DP1(name, barcode, geometry, quadrant_pattern, values)
        @assert all(geometry .== [length(x.values) for x in values])
        @assert all([x.name for x in values] .!= "well") ## well as reserved column name
        new(name, barcode, geometry, quadrant_pattern, values)
    end
end
