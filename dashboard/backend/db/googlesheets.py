from googleapiclient.discovery import build
from google.oauth2.service_account import Credentials
from typing import List
from .googleauthkeys import mcreds

creds = Credentials.from_service_account_info(mcreds)

# Build the service
service = build('sheets', 'v4', credentials=creds)

# The ID of the spreadsheet
spreadsheet_id = '11AMsJmJ_BEtSxbMwJXngFQQXF06d4noavfdoPOjC3QU'

# The A1 notation of the range to update
range_ = 'Sheet1'  # Example range

def sendRowsToSheet(rows: List[List[str]]):

    body = {
        'values': rows
    }

    # Call the Sheets API
    result = service.spreadsheets().values().append(
        spreadsheetId=spreadsheet_id, range=range_,
        valueInputOption='RAW', body=body, 
        insertDataOption='INSERT_ROWS').execute()

    print(f"{result.get('updates').get('updatedRows')} rows appended.")


def readRowsFromSheet():
    result = service.spreadsheets().values().get(
        spreadsheetId="1S5vKjLasVvseqxh2vHTGJbmbNLhotSDsubqjWmkdRck", range=range_).execute()
    return result.get('values', [])
