@testset "methods" begin
    @testset "DataFrames" begin
        @test size(DataFrame(DataPlate("Plate1"))) == (96,4)
    end
end
