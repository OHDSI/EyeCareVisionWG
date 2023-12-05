import azure.functions as func
import logging
import json
from db import getAllConcepts

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="http_trigger")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    data = getAllConcepts()

    return func.HttpResponse(json.dumps(data), mimetype="application/json")