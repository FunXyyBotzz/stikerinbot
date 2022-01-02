const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Warrior V': 0,
    'Warrior IV': 5,
    'Warrior III': 7,
    'Warrior II': 10,
    'Warrior I': 13,
    'Elite V': 15,
    'Elite IV': 17,
    'Elite III': 22,
    'Elite II': 25,
    'Elite I': 27,
    'Master V': 30,
    'Master IV': 35,
    'Master III': 37,
    'Master II': 40,
    'Master I': 45,
    'Grand Master V': 50,
    'Grand Master IV': 55,
    'Grand Master III': 60,
    'Grand Master II': 65,
    'Grand Master I': 70,
    'Epic V': 75,
    'Epic IV': 80,
    'Epic III': 85,
    'Epic II': 90,
    'Epic I': 100,
    'Legend V': 125,
    'Legend IV': 130,
    'Legend III': 135,
    'Legend II': 140,
    'Legend I': 145,
    'Mythic V': 150,
    'Mythic IV': 155,
    'Mythic III': 160,
    'Mythic II': 165,
    'Mythic I': 170,
    'Mythic Glory': 175
}

module.exports = {
    before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    }
}
