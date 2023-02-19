@testset "barcodes" begin
    @test length(barcodes("HEP",13)) == 1
    @test length(barcodes("HEP",13, count = 120)) == 120
    @test all(length.(barcodes("HEP",13, count = 120)) .== 13)
end
