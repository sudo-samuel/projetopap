module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validade: {
                isEmail: true,
            }
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isOwner : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });


    Users.associate = models => {
        Users.hasMany(models.Notes, { 
            onDelete: "cascade" 
        });
            
        Users.hasOne(models.Projects, {
            onDelete: "cascade"
        });

        Users.hasMany(models.Invites, {
            onDelete: "cascade"
        });
    }




    return Users;
}
