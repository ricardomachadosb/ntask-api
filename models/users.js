import hash from "node_hash";

module.exports = (sequelize, DataType) => {

	const secret = "secret";

	const Users = sequelize.define("Users", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		email: {
			type: DataType.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	},{
		hooks: {
			beforeCreate: user => {
				const salt = cfg.hashSalt;
				var md5 = hash.md5(user.password, salt);
				user.password = md5;
			}
		},
		classMethods: {
			associate: (models) => {
				Users.hasMany(models.Tasks);
			},
			isPassword: (encodedPassword, password) => {
				const salt = secret;
				var md5 = hash.md5(user.password, salt);
				return encodedPassword === md5;
			}
		}
	});
	return Users;
};