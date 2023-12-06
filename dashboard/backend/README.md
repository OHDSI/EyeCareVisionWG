# Backend for Eye Care and Vision WG dashboard

## SPARQL snippets

### Add a question proforma

PREFIX wgm: <tag:stardog:designer:EyeCareOMOPDashboard:model:>


INSERT DATA {
    EyeCareOMOPDashboard:ProformaExample1 a wgm:JustificationProforma ;
        rdfs:label "[{\"type\":\"TextField\",\"label\":{\"text\":\"Why this concept?\",\"subtext\":\"Please indicate how it would be used for observational research.\"}},{\"type\":\"TextField\",\"label\":{\"text\":\"Additional Specificity\",\"subtext\":\"For example: 'laterality', for eye-specific data.\"}}]" .
    EyeCareOMOPDashboard:4216457 wgm:hasJustificationProforma EyeCareOMOPDashboard:ProformaExample1 .
}

