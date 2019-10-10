const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove

}

function find(){
   return  db('schemes') 
}

function findById(id){
    return (
        db('schemes')
            .where({ id })
            .first()
    )
}

function findSteps(id){
    return (
        db('schemes as sc')
            .join('steps as st', 'st.scheme_id', '=', 'sc.id')
            .where('sc.id', '=', id)
            .select('st.id','sc.scheme_name','st.step_number','st.instructions')
    )    
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, 'id')
    .then(([id]) => {
      return findById(id)
    })
}

function update(changes, id){
    return db('schemes').update(changes).where('id', id)
        .then((res) => {
            return changes
        })
}

function remove(id) {
    return db('schemes').where('id', id).del()
}