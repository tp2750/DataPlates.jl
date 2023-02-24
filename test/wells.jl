@testset "wells" begin
    @test wells(96) == ["A01", "B01", "C01", "D01", "E01", "F01", "G01", "H01", "A02", "B02", "C02", "D02", "E02", "F02", "G02", "H02", "A03", "B03", "C03", "D03", "E03", "F03", "G03", "H03", "A04", "B04", "C04", "D04", "E04", "F04", "G04", "H04", "A05", "B05", "C05", "D05", "E05", "F05", "G05", "H05", "A06", "B06", "C06", "D06", "E06", "F06", "G06", "H06", "A07", "B07", "C07", "D07", "E07", "F07", "G07", "H07", "A08", "B08", "C08", "D08", "E08", "F08", "G08", "H08", "A09", "B09", "C09", "D09", "E09", "F09", "G09", "H09", "A10", "B10", "C10", "D10", "E10", "F10", "G10", "H10", "A11", "B11", "C11", "D11", "E11", "F11", "G11", "H11", "A12", "B12", "C12", "D12", "E12", "F12", "G12", "H12"]
    @test_throws ErrorException wells(7)
    @test wellname("B3") == "B03"
    @test row("B03") == "B"
    @test col("B03") == 3
    @test all([ismissing(row(missing)), ismissing(col(missing)), ismissing(wellname(missing))])
end
