module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define("Notes", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false 
        }
        

    
    });

    Notes.associate = models => {
        Notes.belongsTo(models.Users);
    }
    
    
    
    return Notes;
}