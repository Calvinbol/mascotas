const Hostel = require ('../api/models/hostel.model')
const Pet = require  ('../api/models/pet.models.js')
const Adoption = require ('../api/models/adoption.model.js')



const initRelationships = () => {
 Hostel.hasMany(Pet, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
 Pet.belongsTo(Hostel) 

 Hostel.hasMany(Adoption, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Adoption.belongsTo(Hostel)

Pet.hasOne(Adoption, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Adoption.belongsTo(Pet)
}

module.exports = {
  initRelationships,
}