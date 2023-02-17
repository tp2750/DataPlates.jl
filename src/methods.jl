import DataFrames.DataFrame

## TODO: We should only need Tables for this. But for now, we depend on DataFrames
function DataFrame(p::DataPlate)
    _well = wells(p.geometry)
    df = DataFrame(platename = p.name, barcode = p.barcode, well = _well)
    for col in p.values
        df[!,col.name] = col.values
    end
    df
end
