const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Game extends Model { }

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        game_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_id: {
            type: DataTypes.INTEGER,
            references:{ model:'player',
            key:   'id'    }  }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;