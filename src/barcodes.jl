"""
    barcodes(prefix::String, width::Int; count = 1, sep="")
    Generate barcodes.
    Generate `count` barcodes each with maximal number of characters `width`

"""
function barcodes(prefix::String, width::Int; count = 1, sep="")
    now_epoch = string(now().instant.periods.value)[1:end-3] ## value is ms
    count_digits = length(digits(count))
    N = length(prefix) + length(sep) + count_digits
    if N > width
        error("characters in prefix + sep + counter exceeds width: $N > $width")
    end
    epoch_part = string(last(now_epoch, width - N))
    pre = "$(prefix)$(epoch_part)$(sep)"
    suf = lpad.(string.(1:count), count_digits,"0")
    pre .* suf
end
