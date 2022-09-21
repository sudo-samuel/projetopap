module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define("Projects", {
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

    Projects.associate = models => {
        Projects.hasOne(models.Teams, {
            onDelete: "cascade"
        });
        Projects.belongsTo(models.Users);
        Projects.hasMany(models.Roles, {
            onDelete: "cascade"
        });
        Projects.hasMany(models.Invites, {
            onDelete: "cascade"
        });
    }



    return Projects;
}