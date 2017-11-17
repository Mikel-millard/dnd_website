class Statistics {
    constructor(stren, dex, consti, intel, wis, cha, armorClass, hitPoints) {
        this._stren = stren;
        this._dex = dex;
        this._consti = consti;
        this._intel = intel;
        this._wis = wis;
        this._cha = cha;
        this._armorClass = armorClass;
        this._hitPoints = hitPoints;
    }
}

class Attributes {
    constructor(name, race, sex, alignment, level, size, height, weight, speed, initiative) {
        this._name = name;
        this._race = race;
        this._sex = sex;
        this._alignment = alignment;
        this._level = level;
        this._size = size;
        this._height = height;
        this._weight = weight;
        this._speed = speed;
        this._initiative = initiative;
    }

    levelUp(increase) {
        this.attributes._level += increase;
    }
}

class Weapons {
    constructor(name, prof, stren, magic, type, damage) {
        this._name = name;
        this._prof = prof;
        this._stren = stren;
        this._magic = magic;
        this._type = type;
        this._damaage = damage;
        this._atkBonus = prof + stren + magic;
    }
}

class Being {

    // Weapons is fed in as an array
    constructor(attributes, statistics) {
        this.buildGetters(attributes);
        this.buildGetters(statistics);
    }

    buildGetters(obj) {
        for (let attr in obj) {
            Object.defineProperty(Being.prototype, attr.replace("_", ""), {
                get: function() {
                    return obj[attr]
                },
                set: function(value) {
                    obj[attr] = value
                }
            })
        }
    }

}

class Character extends Being {
    constructor(attributes, statistics, player, xp, creationDate, campaign) {
        super(attributes, statistics);
        this._player = player;
        this._xp = xp;
        this._creationDate = creationDate;
        this._campaign = campaign;
    }
}
let levelUp = 1;
let attTemp = new Attributes('Mike', 'Human', 'M', 'Lawful Good', 4, 'Medium', 54, 199, 10, 10);
let statsTemp = new Statistics(10, 10, 10, 10, 10, 10, 10, 10);

const tonyCharacter = new Character(attTemp, statsTemp, 'Mike', 0, '11/16/2017', 'Nordic');

console.log("The Dex is: " + tonyCharacter.dex);
console.log("The level is: " + tonyCharacter.level);
tonyCharacter.level =  tonyCharacter.level + levelUp;
console.log("The new level is: " + tonyCharacter.level);


