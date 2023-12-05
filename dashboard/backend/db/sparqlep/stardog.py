import stardog
from rdflib import Graph
import os

from .abstract import SparqlEndpoint

DEFAULT_ENDPOINT = os.environ['STARDOG_ENDPOINT']
DEFAULT_USERNAME = 'eyecare-omop-wg-api-access-account'
DEFAULT_PASSWORD = os.environ['STARDOG_PASSWORD']

DEFAULT_DATABASE = 'EyeCareOMOPDashboard'

class StardogEndpoint(SparqlEndpoint):
    def __init__(self, endpoint=DEFAULT_ENDPOINT, username=DEFAULT_USERNAME, password=DEFAULT_PASSWORD, db_name=DEFAULT_DATABASE):
        self.conn_details = {
            'endpoint': endpoint,
            'username': username,
            'password': password
        }
        self.db_name = db_name

    def construct(self, query, bindings=None):
        with stardog.Connection(self.db_name, **(self.conn_details)) as conn:
            conn.begin()
            res = conn.graph(query, bindings=bindings)
            g = Graph()
            res_graph = g.parse(data=res)
            return res_graph

    def select(self, query, bindings=None):
        with stardog.Connection(self.db_name, **self.conn_details) as conn:
            try:
                results = conn.select(query, bindings=bindings)
                return results
            except Exception as e:
                print("Failed to query Stardog:", str(e))
                return None

    def add(self, graph: Graph):
        with stardog.Connection(self.db_name, **self.conn_details) as conn:
            try:
                conn.begin()
                conn.add(graph.serialize())
                conn.commit()
                return True
            except Exception as e:
                print("Failed to add to Stardog:", str(e))
                return False
            
    def update(self, query, bindings=None):
        with stardog.Connection(self.db_name, **self.conn_details) as conn:
            try:
                conn.update(query, bindings=bindings)
                return True
            except Exception as e:
                print("Failed to update Stardog:", str(e))
                return False