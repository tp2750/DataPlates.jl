@testset "methods" begin
    @testset "DataFrames" begin
        @test size(DataFrame(DataPlate("Plate1"))) == (96,4)
    end
    @testset "print" begin
        @test print(DataPlate("P1", 6))[:,[1,2,3]] == DataFrame(platename = "P1", barcode="P1", row = ["A", "B"])
    end
end
