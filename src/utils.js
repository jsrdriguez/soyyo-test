exports.orderAsc = (entities) => {
    return entities.sort((a, b)=> (a.name > b.name ? 1 : -1))
}