module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("Roles", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Roles.associate = models => {
        Roles.hasMany(models.Todos, {
            onDelete: "cascade"
        })
    }

    return Roles;
}