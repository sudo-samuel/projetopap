module.exports = (sequelize, DataTypes) => {
    const Members = sequelize.define("Members", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
    });

    Members.associate = models => {
        Members.hasOne(models.Roles, {
            onDelete: "cascade"
        });

        
    }
    
    return Members;
}