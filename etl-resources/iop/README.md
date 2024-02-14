# IOP

This folder will contain resources related to extraction and validation of IOP data.

## Mapping files

* EPIC Kaleidoscope → OMOP concept mappings: [https://userweb.epic.com/Thread/128570/Kaleidoscope-to-OMOP-mappings/](https://userweb.epic.com/Thread/128570/Kaleidoscope-to-OMOP-mappings/)

## ETL implementation

Example code for a Kaleidoscope → OMOP ETL, written in SQL, has been shared by the Stanford ETL team. It is available to Epic users here:  [https://userweb.epic.com/Thread/129255/Demonstration-of-an-IOP-ETL-Implementation-Stanford/](https://userweb.epic.com/Thread/129255/Demonstration-of-an-IOP-ETL-Implementation-Stanford/).

### Description of approach

In Epic, IOP values are recorded in text fields. OMOP transformation therefore requires casting to a numeric type so it can be placed in the value_as_number field of the Measurement table. If the source value is non-numeric (e.g. "soft") then the value_as_number field will be set to null.

In the UC implementation, all non-numeric records were retained with NULL entries in value_as_number, and no entries into the value_source_value field. 

In the Stanford implementation, certain strings (e.g. 'err') caused a record to be dropped entirely. For other strings, value_as_number was set to NULL and value_source_value recorded the original string. Deidentification was done using Stanford's custom PHI removal tool. For further details, see the link above to the SQL example code.
