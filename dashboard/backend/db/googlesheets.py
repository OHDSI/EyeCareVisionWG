from googleapiclient.discovery import build
from google.oauth2.service_account import Credentials
from typing import List

# Load credentials from JSON file
creds = Credentials.from_service_account_file(r"db\eyecarevisionwg-be4533cec9fa.json")

# Build the service
service = build('sheets', 'v4', credentials=creds)

# The ID of the spreadsheet
spreadsheet_id = '11AMsJmJ_BEtSxbMwJXngFQQXF06d4noavfdoPOjC3QU'

# The A1 notation of the range to update
range_ = 'Sheet1'  # Example range

# # The values to update
# values = [
#     ["Name", "Email", "Date", "Feedback"],  # Example header row
#     ["John Doe", "john@example.com", "2021-01-01", "Loved it!"]
#     # More rows can be added here
# ]

def send_rows_to_googlesheet(rows: List[List[str]]):

    body = {
        'values': rows
    }

    # Call the Sheets API
    result = service.spreadsheets().values().append(
        spreadsheetId=spreadsheet_id, range=range_,
        valueInputOption='RAW', body=body, 
        insertDataOption='INSERT_ROWS').execute()

    print(f"{result.get('updates').get('updatedRows')} rows appended.")
