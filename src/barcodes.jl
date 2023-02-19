function barcode(prefix::String, width::Int; count = 1, sep="", start=missing)
    start = ismissing(start) ? string(now().instant.periods.value)[1:end-3] : start ## epoch seconds
    
end
