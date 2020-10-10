module.exports = basicConstructor = (query) => {
    if (typeof query === 'object' && query !== null) {
        try {
            let resultingQuery = 'SELECT ';
            resultingQuery += queryConstructor(query, resultingQuery);
            console.log(resultingQuery);
        } catch (e) {
            console.log(e)
        }
    }
}
const queryConstructor = (query, resultingQuery) => {
    if (query.attributes) {
        resultingQuery = resultingQuery + query.attributes.join() + ' ';
    } else {
        resultingQuery = resultingQuery + '* ';
    }
    resultingQuery = columnQueryConstructor(query.columns, resultingQuery);
    if (query.join) {
        resultingQuery += joinConstructor(query.join, resultingQuery);
    }
    return resultingQuery;
}

columnQueryConstructor = (columns, resultingQuery) => {
    columns.forEach((column, index) => {
        if (index !== 0) {
            resultingQuery += 'AND'
        }
        resultingQuery = resultingQuery + ' ' + column.fieldName + ' ' + column.operator + ' ' + column.fieldValue + ' ';
    })
    return resultingQuery
}

const joinConstructor = (join, resultingQuery) => {
    join.forEach(column => {
        resultingQuery = column.joinType + ' ' + column.table + ' ON ' + column.field1 + ' = ' + column.field2;
    })
    return resultingQuery
}
