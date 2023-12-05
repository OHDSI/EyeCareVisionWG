from abc import ABC, abstractmethod

class SparqlEndpoint(ABC):
    
    def __init__(self, endpoint):
        self.endpoint = endpoint