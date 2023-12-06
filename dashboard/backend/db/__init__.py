from .sparqlep import StardogEndpoint
from .googlesheets import send_rows_to_googlesheet

ep = StardogEndpoint()

SPARQL_GETALLCONCEPTS = """
SELECT ?concept_name ?concept_id ?formSpecification
WHERE {
    ?concept a EyeCareOMOPDashboard:Concept ;
        EyeCareOMOPDashboard:hasConceptName ?concept_name ;
        EyeCareOMOPDashboard:hasConceptID ?concept_id .
    OPTIONAL {
        ?concept EyeCareOMOPDashboard:hasJustificationProforma ?justificationProforma .
        ?justificationProforma rdfs:label ?formSpecification .
    }
}
"""

def parseBindings(bindings):
    concept_mapper = lambda x: {k: v["value"] for k, v in x.items()}
    data = [concept_mapper(data) for data in bindings]
    return data

def getAllConcepts():
    data = ep.select(SPARQL_GETALLCONCEPTS)
    bindings = data['results']['bindings']
    data = parseBindings(bindings)
    return data