@testset "barcodes" begin
    @test length(barcodes(13)) == 1
    @test length(barcodes(13, count = 120)) == 120
    @test all(length.(barcodes(13, count = 120, prefix = "HEP", sep="S")) .== 13)
end
