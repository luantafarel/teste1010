
Here is an example of what i expect as entry for the creation of the query with witch field explained.
```json
{
    "tableName": "name", Name of the main table for the select
    "attributes": [
        "column1, column2"
    ], Attributes that will be returned, optional if not sended * will be inserted
    "columns": [
        {
            "operator": "IN",
            "fieldName": "column1",
            "fieldValue": "value"
        },
        {
            "operator": "Equal",
            "fieldName": "column2",
            "fieldValue": "value"
        }
    ], columns ando operations bein made
    "join": [
        {
            "joinType": "LEFT OUTER", Type of the join
            "table": "tableName", Table to be joined
            "field1": "field1", witch field is present in table 1 and will be compared
            "field2": "field2"  witch field is present in table 2 and will be compared
        }
    ] Joined tables
}
```
I made it as simple as i could withoult using any packages, it simple goes trough the JSON of the entry and appends into a string each of the values inserted.
