module.exports = (sequelize, DataTypes) => {
    const Steps = sequelize.define("Steps", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nStep: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.STRING
        }

    });

    Steps.associate = models => {
        Steps.belongsTo(models.Todos)
    }

    return Steps;
}