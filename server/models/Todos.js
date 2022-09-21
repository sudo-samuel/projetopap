module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define("Todos", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        date: {
            type: DataTypes.STRING,
            defaultValue: sequelize.fn('now'),
            allowNull: true
        }

    });

    Todos.associate = models => {
        Todos.hasMany(models.Steps, {
            onDelete: "cascade"
        })
        Todos.belongsTo(models.Roles);
        
    }

    return Todos;
}