## mvp: find 96 well plate
function data_plates(plate_file)
    ## plate_file = "test/plateset_1.xlsx"
    ## Open the excel-file
    xl = XLSX.readxlsx(plate_file)
    ## List sheet names
    sheet_names = XLSX.sheetnames(xl)
    ## Look for plate data
    ### TODO: base this on Tables interface. For now use DataFrame
    plate_list = DataPlate[]
    for sheet in sheet_names    
        geometry = 0
        consumed = 0
        df = DataFrame(XLSX.eachtablerow(xl[sheet]; header=false, stop_in_empty_row = false) )
        if df[2:9,1] == string.('A':'H') && collect(df[1,2:13]) == 1:12 ## MVT: read 96-well plate in top of file.
            geometry = 96
            push!(plate_list, DataPlate(sheet, sheet, geometry, [0], [WellValues(df[1,1], vec(Matrix(df[2:9,2:13])))]))
        end    
    end
    plate_list
end


