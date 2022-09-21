module.exports = (sequelize, DataTypes) => {
    const Teams = sequelize.define("Teams", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        objetivo: {
            type: DataTypes.STRING,
            allowNull: false
        }  
    });
    
    Teams.associate = models => {
        Teams.hasMany(models.Members, {
            onDelete: "cascade"
        });
        
        Teams.belongsTo(models.Projects);
    }

    


    return Teams;
}