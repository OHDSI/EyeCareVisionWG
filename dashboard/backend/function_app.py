import azure.functions as func
import logging
import json
from db import sendRowsToSheet, readRowsFromSheet

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="get_sheets_data")
def get_sheets_data(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        data = readRowsFromSheet()
        return func.HttpResponse(json.dumps(data), mimetype="application/json")
    
    except:
        # Return nothing
        return func.HttpResponse(json.dumps([]), mimetype="application/json")

@app.route(route="submit_vote", methods=["POST"])
def submit_vote(req: func.HttpRequest) -> func.HttpResponse:
    # Get the request body
    try:
        req_body = req.get_json()
        sendRowsToSheet([req_body])
        logging.info(json.dumps(req_body))
        return func.HttpResponse(json.dumps({
            "status": "success"
        }), mimetype="application/json")
    
    except:
        return func.HttpResponse(json.dumps({
            "status": "error",
            "message": "Invalid JSON"
        }), mimetype="application/json")