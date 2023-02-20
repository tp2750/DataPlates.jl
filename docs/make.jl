using DataPlates
using Documenter

DocMeta.setdocmeta!(DataPlates, :DocTestSetup, :(using DataPlates); recursive=true)

makedocs(;
    modules=[DataPlates],
    authors="Thomas Poulsen <thomas@lha66.dk> and contributors",
    repo="https://github.com/tp2750/DataPlates.jl/blob/{commit}{path}#{line}",
    sitename="DataPlates.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://tp2750.github.io/DataPlates.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "Barcodes" => "barcodes.md",
        "Functions" => "functions.md", 
        "API" => "api.md",
    ],
)

deploydocs(;
    repo="github.com/tp2750/DataPlates.jl",
    devbranch="main",
)
