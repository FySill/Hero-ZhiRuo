var hero = {
    _hp: 15812,
    _mp: 13630,
    _tp: 0,
    _hidden: false,
    _paramPlus: [20400, 19681, 1, 1, 1, 1, 1, 1],
    _states: "",
    _stateTurns: {},
    _stateSteps: {},
    _buffs: [0, 0, 0, 0, 0, 0, 0, 0],
    _buffTurns: [0, 0, 0, 0, 0, 0, 0, 0],
    _stateCounter: { 1: undefined },
    _cooldownTurns: {
        1: -843,
        2: -107,
        3: -93,
        4: -104,
        16: -107,
        19: -107,
        20: -107,
        21: -107,
        23: -107,
        27: -107,
        240: -105,
        296: -104,
        297: -106,
    },
    _warmupTurns: {},
    _turnBarrier: "",
    _permBarrier: 0,
    need_refresh_bhud_states: true,
    _bhud_face_data: [0, 0, 0, 0],
    _face_pos: [316.75, 445],
    _ahud_face_data: [0, 0, 0, 0],
    _actions: "",
    _speed: 0,
    _result: {
        used: false,
        missed: false,
        evaded: false,
        physical: false,
        drain: false,
        critical: false,
        success: false,
        hpAffected: false,
        hpDamage: 0,
        mpDamage: 0,
        tpDamage: 0,
        addedStates: "",
        removedStates: "",
        addedBuffs: "",
        addedDebuffs: "",
        removedBuffs: "",
        '@': "Game_ActionResult",
        initialize: function () {
            this.clear();
        },
        clear: function () {
            this.used = false;
            this.missed = false;
            this.evaded = false;
            this.physical = false;
            this.drain = false;
            this.critical = false;
            this.success = false;
            this.hpAffected = false;
            this.hpDamage = 0;
            this.mpDamage = 0;
            this.tpDamage = 0;
            this.addedStates = [];
            this.removedStates = [];
            this.addedBuffs = [];
            this.addedDebuffs = [];
            this.removedBuffs = [];
        },
        addedStateObjects: function () {
            return this.addedStates.map(function (id) {
                return $dataStates[id];
            });
        },
        removedStateObjects: function () {
            return this.removedStates.map(function (id) {
                return $dataStates[id];
            });
        },
        isStatusAffected: function () {
            return (this.addedStates.length > 0 || this.removedStates.length > 0 ||
                this.addedBuffs.length > 0 || this.addedDebuffs.length > 0 ||
                this.removedBuffs.length > 0);
        },
        isHit: function () {
            return this.used && !this.missed && !this.evaded;
        },
        isStateAdded: function (stateId) {
            return this.addedStates.contains(stateId);
        },
        pushAddedState: function (stateId) {
            if (!this.isStateAdded(stateId)) {
                this.addedStates.push(stateId);
            }
        },
        isStateRemoved: function (stateId) {
            return this.removedStates.contains(stateId);
        },
        pushRemovedState: function (stateId) {
            if (!this.isStateRemoved(stateId)) {
                this.removedStates.push(stateId);
            }
        },
        isBuffAdded: function (paramId) {
            return this.addedBuffs.contains(paramId);
        },
        pushAddedBuff: function (paramId) {
            if (!this.isBuffAdded(paramId)) {
                this.addedBuffs.push(paramId);
            }
        },
        isDebuffAdded: function (paramId) {
            return this.addedDebuffs.contains(paramId);
        },
        pushAddedDebuff: function (paramId) {
            if (!this.isDebuffAdded(paramId)) {
                this.addedDebuffs.push(paramId);
            }
        },
        isBuffRemoved: function (paramId) {
            return this.removedBuffs.contains(paramId);
        },
        pushRemovedBuff: function (paramId) {
            if (!this.isBuffRemoved(paramId)) {
                this.removedBuffs.push(paramId);
            }
        },

    },
    _actionState: "undecided",
    _lastTargetIndex: 1,
    _animations: "",
    _damagePopup: "",
    _effectType: "null",
    _motionType: "victory",
    _weaponImageId: 0,
    _motionRefresh: false,
    _selected: false,
    _arrowVisible: false,
    _arrowX: 0,
    _arrowY: 0,
    _refCursor: false,
    _bhfaceSize: [100, 133],
    _ehpgauge: [false, 0, 0, false, false],
    _motion_action_data: [0, 0, 0, 0],
    _motion_action_xy: [0, 0],
    _motion_action_scale: [0, 0],
    _motion_action_rotation: 0,
    _motion_damage_duration: 0,
    _motion_damage_xy: [0, 0],
    _motion_idle_xy: [0, 0],
    _motion_idle_scale: [1, 1],
    _motion_idle_rotation: 0,
    _motion_collapse_scale: [0, 0],
    _motion_collapse_rotation: 0,
    _motion_breath: [0, 0, 0, 1.03, 0, false],
    _motion_fly: [0, 0, 0, 60, 0.35, false],
    _motion_swing: [0, 0.003, 0.1, 60, 0.35, false],
    _actorId: 17,
    _name: "",
    _nickname: "[江湖小虾米]",
    _classId: 1,
    _level: 1,
    _characterName: "$Ac_45%(8 6)",
    _characterIndex: 0,
    _faceName: "Actor4",
    _faceIndex: 0,
    _battlerName: "Ac_45",
    _exp: { 1: 0 },
    _skills: [1, 2, 3, 4, 16, 19, 20, 21, 23, 27, 240, 296, 297],
    _equips: [{
        _dataClass: "weapon",
        _itemId: 3007,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    }, {
        _dataClass: "armor",
        _itemId: 3027,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    }, {
        _dataClass: "armor",
        _itemId: 3020,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    }, {
        _dataClass: "armor",
        _itemId: 3014,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    }, {
        _dataClass: "armor",
        _itemId: 3009,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    }],
    _actionInputIndex: 0,
    _lastMenuSkill: {
        _dataClass: "",
        _itemId: 0,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    },
    _lastBattleSkill: {
        _dataClass: "",
        _itemId: 0,
        '@': "Game_Item",
        initialize: function (item) {
            this._dataClass = '';
            this._itemId = 0;
            if (item) {
                this.setObject(item);
            }
        },
        isSkill: function () {
            return this._dataClass === 'skill';
        },
        isItem: function () {
            return this._dataClass === 'item';
        },
        isUsableItem: function () {
            return this.isSkill() || this.isItem();
        },
        isWeapon: function () {
            return this._dataClass === 'weapon';
        },
        isArmor: function () {
            return this._dataClass === 'armor';
        },
        isEquipItem: function () {
            return this.isWeapon() || this.isArmor();
        },
        isNull: function () {
            return this._dataClass === '';
        },
        itemId: function () {
            return this._itemId;
        },
        object: function () {
            if (this.isSkill()) {
                return $dataSkills[this._itemId];
            } else if (this.isItem()) {
                return $dataItems[this._itemId];
            } else if (this.isWeapon()) {
                return $dataWeapons[this._itemId];
            } else if (this.isArmor()) {
                return $dataArmors[this._itemId];
            } else {
                return null;
            }
        },
        setObject: function (item) {
            if (DataManager.isSkill(item)) {
                this._dataClass = 'skill';
            } else if (DataManager.isItem(item)) {
                this._dataClass = 'item';
            } else if (DataManager.isWeapon(item)) {
                this._dataClass = 'weapon';
            } else if (DataManager.isArmor(item)) {
                this._dataClass = 'armor';
            } else {
                this._dataClass = '';
            }
            this._itemId = item ? item.id : 0;
        },
        setEquip: function (isWeapon, itemId) {
            this._dataClass = isWeapon ? 'weapon' : 'armor';
            this._itemId = itemId;
        },

    },
    _lastCommandSymbol: "",
    _profile: "年龄：14 岁",
    _cacheParamBuffRate: { 0: 1, 1: 1 },
    _cooldownTickRate: {},
    '@': "Game_Actor",
    _stateOrigin: {},
    _freeStateTurn: "",
    _immortalState: false,
    _selfTurnCount: 6,
    _statusRefreshRequested: true,
    _ctbSpeed: 0,
    _ctbCharge: 0,
    _ctbCharging: false,
    _ctbChargeMod: 0,
    _flinched: false,
    _anchorX: undefined,
    _anchorY: undefined,
    constructor: function Game_Actor() {
        this.initialize.apply(this, arguments);
    },
    initialize: function (actorId) {
        Game_Battler.prototype.initialize.call(this);
        this.setup(actorId);
    },
    initMembers: function () {
        Game_Battler.prototype.initMembers.call(this);
        this._actorId = 0;
        this._name = '';
        this._nickname = '';
        this._classId = 0;
        this._level = 0;
        this._characterName = '';
        this._characterIndex = 0;
        this._faceName = '';
        this._faceIndex = 0;
        this._battlerName = '';
        this._exp = {};
        this._skills = [];
        this._equips = [];
        this._actionInputIndex = 0;
        this._lastMenuSkill = new Game_Item();
        this._lastBattleSkill = new Game_Item();
        this._lastCommandSymbol = '';
    },
    setup: function (actorId) {
        _mog_hp_gauge_gactor_setup.call(this, actorId);
        if (String(Moghunter.hpgauge_actors) === "true") { this._ehpgauge[0] = true };
        this.checkHPGaugeNotes();
    },
    actorId: function () {
        return this._actorId;
    },
    actor: function () {
        return $dataActors[this._actorId];
    },
    name: function () {
        return this._name;
    },
    setName: function (name) {
        this._name = name;
    },
    nickname: function () {
        return this._nickname;
    },
    setNickname: function (nickname) {
        this._nickname = nickname;
    },
    profile: function () {
        return this._profile;
    },
    setProfile: function (profile) {
        this._profile = profile;
    },
    characterName: function () {
        return this._characterName;
    },
    characterIndex: function () {
        return this._characterIndex;
    },
    faceName: function () {
        return this._faceName;
    },
    faceIndex: function () {
        return this._faceIndex;
    },
    battlerName: function () {
        return this._battlerName;
    },
    clearStates: function () {
        Game_Battler.prototype.clearStates.call(this);
        this._stateSteps = {};
    },
    eraseState: function (stateId) {
        Game_Battler.prototype.eraseState.call(this, stateId);
        delete this._stateSteps[stateId];
    },
    resetStateCounts: function (stateId) {
        Game_Battler.prototype.resetStateCounts.call(this, stateId);
        this._stateSteps[stateId] = $dataStates[stateId].stepsToRemove;
    },
    initImages: function () {
        var actor = this.actor();
        this._characterName = actor.characterName;
        this._characterIndex = actor.characterIndex;
        this._faceName = actor.faceName;
        this._faceIndex = actor.faceIndex;
        this._battlerName = actor.battlerName;
    },
    expForLevel: function (level) {
        var c = this.currentClass();
        var basis = c.expParams[0];
        var extra = c.expParams[1];
        var acc_a = c.expParams[2];
        var acc_b = c.expParams[3];
        return Math.round(basis * (Math.pow(level - 1, 0.9 + acc_a / 250)) * level *
            (level + 1) / (6 + Math.pow(level, 2) / 50 / acc_b) + (level - 1) * extra);
    },
    initExp: function () {
        this._exp[this._classId] = this.currentLevelExp();
    },
    currentExp: function () {
        return this._exp[this._classId];
    },
    currentLevelExp: function () {
        return this.expForLevel(this._level);
    },
    nextLevelExp: function () {
        return this.expForLevel(this._level + 1);
    },
    nextRequiredExp: function () {
        return this.nextLevelExp() - this.currentExp();
    },
    maxLevel: function () {
        return this.actor().maxLevel;
    },
    isMaxLevel: function () {
        if (this.maxLevel() === 0) return false;
        return Yanfly.Core.Game_Actor_isMaxLevel.call(this);
    },
    initSkills: function () {
        this._skills = [];
        this.currentClass().learnings.forEach(function (learning) {
            if (learning.level <= this._level) {
                this.learnSkill(learning.skillId);
            }
        }, this);
    },
    initEquips: function (equips) {
        var slots = this.equipSlots();
        var maxSlots = slots.length;
        this._equips = [];
        for (var i = 0; i < maxSlots; i++) {
            this._equips[i] = new Game_Item();
        }
        for (var j = 0; j < equips.length; j++) {
            if (j < maxSlots) {
                this._equips[j].setEquip(slots[j] === 1, equips[j]);
            }
        }
        this.releaseUnequippableItems(true);
        this.refresh();
    },
    equipSlots: function () {
        var slots = [];
        for (var i = 1; i < $dataSystem.equipTypes.length; i++) {
            slots.push(i);
        }
        if (slots.length >= 2 && this.isDualWield()) {
            slots[1] = 1;
        }
        return slots;
    },
    equips: function () {
        return this._equips.map(function (item) {
            return item.object();
        });
    },
    weapons: function () {
        return this.equips().filter(function (item) {
            return item && DataManager.isWeapon(item);
        });
    },
    armors: function () {
        return this.equips().filter(function (item) {
            return item && DataManager.isArmor(item);
        });
    },
    hasWeapon: function (weapon) {
        if (this.hasBaseItem(weapon)) return true;
        return Yanfly.Item.Game_Actor_hasWeapon.call(this, weapon);
    },
    hasArmor: function (armor) {
        if (this.hasBaseItem(armor)) return true;
        return Yanfly.Item.Game_Actor_hasArmor.call(this, armor);
    },
    isEquipChangeOk: function (slotId) {
        return (!this.isEquipTypeLocked(this.equipSlots()[slotId]) &&
            !this.isEquipTypeSealed(this.equipSlots()[slotId]));
    },
    changeEquip: function (slotId, item) {
        if (this.tradeItemWithParty(item, this.equips()[slotId]) &&
            (!item || this.equipSlots()[slotId] === item.etypeId)) {
            this._equips[slotId].setObject(item);
            this.refresh();
        }
    },
    forceChangeEquip: function (slotId, item) {
        this._equips[slotId].setObject(item);
        this.releaseUnequippableItems(true);
        this.refresh();
    },
    tradeItemWithParty: function (newItem, oldItem) {
        if (newItem && !$gameParty.hasItem(newItem)) {
            return false;
        } else {
            $gameParty.gainItem(oldItem, 1);
            $gameParty.loseItem(newItem, 1);
            return true;
        }
    },
    changeEquipById: function (etypeId, itemId) {
        if (itemId > 0) {
            var slotId = etypeId - 1;
            if (this.equipSlots()[slotId] === 1) {
                var baseItem = $dataWeapons[itemId];
            } else {
                var baseItem = $dataArmors[itemId];
            }
            if (!$gameParty.hasItem(baseItem)) {
                $gameParty.gainItem(baseItem, 1);
            }
            if (DataManager.isIndependent(baseItem)) {
                if (this.hasBaseItem(baseItem)) return;
                var item = $gameParty.getMatchingBaseItem(baseItem, false);
                if (item === null) {
                    $gameTemp.enableVarianceStock();
                    $gameParty.gainItem(baseItem, 1);
                    $gameTemp.disableVarianceStock();
                    item = $gameParty.getMatchingBaseItem(baseItem, false);
                }
                this.changeEquip(slotId, item);
                return;
            }
        }
        Yanfly.Item.Game_Actor_changeEquipById.call(this, etypeId, itemId)
    },
    isEquipped: function (item) {
        return this.equips().contains(item);
    },
    discardEquip: function (item) {
        var slotId = this.equips().indexOf(item);
        if (slotId >= 0) {
            this._equips[slotId].setObject(null);
        }
    },
    releaseUnequippableItems: function (forcing) {
        for (; ;) {
            var slots = this.equipSlots();
            var equips = this.equips();
            var changed = false;
            for (var i = 0; i < equips.length; i++) {
                var item = equips[i];
                if (item && (!this.canEquip(item) || item.etypeId !== slots[i])) {
                    if (!forcing) {
                        this.tradeItemWithParty(null, item);
                    }
                    this._equips[i].setObject(null);
                    changed = true;
                }
            }
            if (!changed) {
                break;
            }
        }
    },
    clearEquipments: function () {
        var maxSlots = this.equipSlots().length;
        for (var i = 0; i < maxSlots; i++) {
            if (this.isEquipChangeOk(i)) {
                this.changeEquip(i, null);
            }
        }
    },
    optimizeEquipments: function () {
        var maxSlots = this.equipSlots().length;
        this.clearEquipments();
        for (var i = 0; i < maxSlots; i++) {
            if (this.isEquipChangeOk(i)) {
                this.changeEquip(i, this.bestEquipItem(i));
            }
        }
    },
    bestEquipItem: function (slotId) {
        var etypeId = this.equipSlots()[slotId];
        var items = $gameParty.equipItems().filter(function (item) {
            return item.etypeId === etypeId && this.canEquip(item);
        }, this);
        var bestItem = null;
        var bestPerformance = -1000;
        for (var i = 0; i < items.length; i++) {
            var performance = this.calcEquipItemPerformance(items[i]);
            if (performance > bestPerformance) {
                bestPerformance = performance;
                bestItem = items[i];
            }
        }
        return bestItem;
    },
    calcEquipItemPerformance: function (item) {
        return item.params.reduce(function (a, b) {
            return a + b;
        });
    },
    isSkillWtypeOk: function (skill) {
        var wtypeId1 = skill.requiredWtypeId1;
        var wtypeId2 = skill.requiredWtypeId2;
        if ((wtypeId1 === 0 && wtypeId2 === 0) ||
            (wtypeId1 > 0 && this.isWtypeEquipped(wtypeId1)) ||
            (wtypeId2 > 0 && this.isWtypeEquipped(wtypeId2))) {
            return true;
        } else {
            return false;
        }
    },
    isWtypeEquipped: function (wtypeId) {
        return this.weapons().some(function (weapon) {
            return weapon.wtypeId === wtypeId;
        });
    },
    refresh: function () {
        this._anchorX = undefined;
        this._anchorY = undefined;
        Yanfly.BEC.Game_Actor_refresh.call(this);
        if ($gameParty.inBattle()) this.requestStatusRefresh();
    },
    isActor: function () {
        return true;
    },
    friendsUnit: function () {
        return $gameParty;
    },
    opponentsUnit: function () {
        return $gameTroop;
    },
    index: function () {
        return $gameParty.members().indexOf(this);
    },
    isBattleMember: function () {
        return $gameParty.battleMembers().contains(this);
    },
    isFormationChangeOk: function () {
        return true;
    },
    currentClass: function () {
        return $dataClasses[this._classId];
    },
    isClass: function (gameClass) {
        return gameClass && this._classId === gameClass.id;
    },
    skills: function () {
        var list = [];
        this._skills.concat(this.addedSkills()).forEach(function (id) {
            if (!list.contains($dataSkills[id])) {
                list.push($dataSkills[id]);
            }
        });
        return list;
    },
    usableSkills: function () {
        return this.skills().filter(function (skill) {
            return this.canUse(skill);
        }, this);
    },
    traitObjects: function () {
        var objects = Game_Battler.prototype.traitObjects.call(this);
        objects = objects.concat([this.actor(), this.currentClass()]);
        var equips = this.equips();
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item) {
                objects.push(item);
            }
        }
        return objects;
    },
    attackElements: function () {
        var set = Game_Battler.prototype.attackElements.call(this);
        if (this.hasNoWeapons() && !set.contains(this.bareHandsElementId())) {
            set.push(this.bareHandsElementId());
        }
        return set;
    },
    hasNoWeapons: function () {
        return this.weapons().length === 0;
    },
    bareHandsElementId: function () {
        return 1;
    },
    paramMax: function (paramId) {
        if (paramId === 0) {
            return Yanfly.Param.ActorMaxHp;
        } else if (paramId === 1) {
            return Yanfly.Param.ActorMaxMp;
        } else {
            return Yanfly.Param.ActorParam;
        }
    },
    paramBase: function (paramId) {
        if (this.level > 99) {
            var i = this.currentClass().params[paramId][99];
            var j = this.currentClass().params[paramId][98];
            i += (i - j) * (this.level - 99);
            return i;
        }
        return Yanfly.Core.Game_Actor_paramBase.call(this, paramId);
    },
    paramPlus: function (paramId) {
        var value = Game_Battler.prototype.paramPlus.call(this, paramId);
        var equips = this.equips();
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item) {
                value += item.params[paramId];
            }
        }
        return value;
    },
    attackAnimationId1: function () {
        if (this.hasNoWeapons()) {
            return this.bareHandsAnimationId();
        } else {
            var weapons = this.weapons();
            return weapons[0] ? weapons[0].animationId : 0;
        }
    },
    attackAnimationId2: function () {
        var weapons = this.weapons();
        return weapons[1] ? weapons[1].animationId : 0;
    },
    bareHandsAnimationId: function () {
        return 1;
    },
    changeExp: function (exp, show) {
        this._exp[this._classId] = Math.max(exp, 0);
        var lastLevel = this._level;
        var lastSkills = this.skills();
        while (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
            this.levelUp();
        }
        while (this.currentExp() < this.currentLevelExp()) {
            this.levelDown();
        }
        if (show && this._level > lastLevel) {
            this.displayLevelUp(this.findNewSkills(lastSkills));
        }
        this.refresh();
    },
    levelUp: function () {
        this._level++;
        this.currentClass().learnings.forEach(function (learning) {
            if (learning.level === this._level) {
                this.learnSkill(learning.skillId);
            }
        }, this);
    },
    levelDown: function () {
        this._level--;
    },
    findNewSkills: function (lastSkills) {
        var newSkills = this.skills();
        for (var i = 0; i < lastSkills.length; i++) {
            var index = newSkills.indexOf(lastSkills[i]);
            if (index >= 0) {
                newSkills.splice(index, 1);
            }
        }
        return newSkills;
    },
    displayLevelUp: function (newSkills) {
        var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
        $gameMessage.newPage();
        $gameMessage.add(text);
        newSkills.forEach(function (skill) {
            $gameMessage.add(TextManager.obtainSkill.format(skill.name));
        });
    },
    gainExp: function (exp) {
        var newExp = this.currentExp() + Math.round(exp * this.finalExpRate());
        this.changeExp(newExp, this.shouldDisplayLevelUp());
    },
    finalExpRate: function () {
        return this.exr * (this.isBattleMember() ? 1 : this.benchMembersExpRate());
    },
    benchMembersExpRate: function () {
        return $dataSystem.optExtraExp ? 1 : 0;
    },
    shouldDisplayLevelUp: function () {
        return true;
    },
    changeLevel: function (level, show) {
        level = level.clamp(1, this.maxLevel());
        this.changeExp(this.expForLevel(level), show);
    },
    learnSkill: function (skillId) {
        if (!this.isLearnedSkill(skillId)) {
            this._skills.push(skillId);
            this._skills.sort(function (a, b) {
                return a - b;
            });
        }
    },
    forgetSkill: function (skillId) {
        var index = this._skills.indexOf(skillId);
        if (index >= 0) {
            this._skills.splice(index, 1);
        }
    },
    isLearnedSkill: function (skillId) {
        return this._skills.contains(skillId);
    },
    changeClass: function (classId, keepExp) {
        Yanfly.CTB.Game_Actor_changeClass.call(this, classId, keepExp);
        this.ctbTransform();
    },
    setCharacterImage: function (name, index) {
        Yanfly.CTB.Game_Actor_setCharacterImage.call(this, name, index)
        this.ctbTransform();
    },
    setFaceImage: function (faceName, faceIndex) {
        Yanfly.CTB.Game_Actor_setFaceImage.call(this, faceName, faceIndex);
        this.ctbTransform();
    },
    setBattlerImage: function (battlerName) {
        Yanfly.CTB.Game_Actor_setBattlerImage.call(this, battlerName);
        this.ctbTransform();
    },
    isSpriteVisible: function () {
        if ($gameSystem.isSideView()) return true;
        return eval(Yanfly.Param.BECFrontSprite);
    },
    startAnimation: function (animationId, mirror, delay) {
        mirror = !mirror;
        Game_Battler.prototype.startAnimation.call(this, animationId, mirror, delay);
    },
    performActionStart: function (action) {
        Game_Battler.prototype.performActionStart.call(this, action);
    },
    performAction: function (action) {
        Game_Battler.prototype.performAction.call(this, action);
        if (action.isAttack()) {
            this.performAttack();
        } else if (action.isGuard()) {
            this.requestMotion('guard');
        } else if (action.isMagicSkill()) {
            this.requestMotion('spell');
        } else if (action.isSkill()) {
            this.requestMotion('skill');
        } else if (action.isItem()) {
            this.requestMotion('item');
        }
    },
    performActionEnd: function () {
        Game_Battler.prototype.performActionEnd.call(this);
    },
    performAttack: function () {
        var weapons = this.weapons();
        var wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
        var attackMotion = $dataSystem.attackMotions[wtypeId];
        if (attackMotion) {
            if (attackMotion.type === 0) {
                this.forceMotion('thrust');
            } else if (attackMotion.type === 1) {
                this.forceMotion('swing');
            } else if (attackMotion.type === 2) {
                this.forceMotion('missile');
            }
            this.startWeaponAnimation(attackMotion.weaponImageId);
        }
    },
    performDamage: function () {
        Game_Battler.prototype.performDamage.call(this);
        if (this.isSpriteVisible()) {
            this.requestMotion('damage');//damage
        } else {
            $gameScreen.startShake(5, 5, 10);
        }
        SoundManager.playActorDamage();
    },
    performEvasion: function () {
        Game_Battler.prototype.performEvasion.call(this);
        this.requestMotion('evade');
    },
    performMagicEvasion: function () {
        Game_Battler.prototype.performMagicEvasion.call(this);
        this.requestMotion('evade');
    },
    performCounter: function () {
        Game_Battler.prototype.performCounter.call(this);
        this.performAttack();
    },
    performCollapse: function () {
        Game_Battler.prototype.performCollapse.call(this);
        if ($gameParty.inBattle()) {
            SoundManager.playActorCollapse();
        }
    },
    performVictory: function () {
        if (this.canMove()) {
            this.requestMotion('victory');
        }
    },
    performEscape: function () {
        if (this.canMove()) {
            this.requestMotion('escape');
        }
    },
    makeActionList: function () {
        var list = [];
        var action = new Game_Action(this);
        action.setAttack();
        list.push(action);
        this.usableSkills().forEach(function (skill) {
            action = new Game_Action(this);
            action.setSkill(skill.id);
            list.push(action);
        }, this);
        return list;
    },
    makeAutoBattleActions: function () {
        for (var i = 0; i < this.numActions(); i++) {
            var list = this.makeActionList();
            var maxValue = Number.MIN_VALUE;
            for (var j = 0; j < list.length; j++) {
                var value = list[j].evaluate();
                if (value > maxValue) {
                    maxValue = value;
                    this.setAction(i, list[j]);
                }
            }
        }
        this.setActionState('waiting');
    },
    makeConfusionActions: function () {
        for (var i = 0; i < this.numActions(); i++) {
            this.action(i).setConfusion();
        }
        this.setActionState('waiting');
    },
    makeActions: function () {
        Game_Battler.prototype.makeActions.call(this);
        if (this.numActions() > 0) {
            this.setActionState('undecided');
        } else {
            this.setActionState('waiting');
        }
        if (this.isAutoBattle()) {
            this.makeAutoBattleActions();
        } else if (this.isConfused()) {
            this.makeConfusionActions();
        }
    },
    onPlayerWalk: function () {
        this.clearResult();
        this.checkFloorEffect();
        if ($gamePlayer.isNormal()) {
            this.turnEndOnMap();
            this.states().forEach(function (state) {
                this.updateStateSteps(state);
            }, this);
            this.showAddedStates();
            this.showRemovedStates();
        }
    },
    updateStateSteps: function (state) {
        if (state.removeByWalking) {
            if (this._stateSteps[state.id] > 0) {
                if (--this._stateSteps[state.id] === 0) {
                    this.removeState(state.id);
                }
            }
        }
    },
    showAddedStates: function () {
        this.result().addedStateObjects().forEach(function (state) {
            if (state.message1) {
                $gameMessage.add(this._name + state.message1);
            }
        }, this);
    },
    showRemovedStates: function () {
        this.result().removedStateObjects().forEach(function (state) {
            if (state.message4) {
                $gameMessage.add(this._name + state.message4);
            }
        }, this);
    },
    stepsForTurn: function () {
        return 20;
    },
    turnEndOnMap: function () {
        if ($gameParty.steps() % this.stepsForTurn() === 0) {
            this.onTurnEnd();
            if (this.result().hpDamage > 0) {
                this.performMapDamage();
            }
        }
    },
    checkFloorEffect: function () {
        if ($gamePlayer.isOnDamageFloor()) {
            this.executeFloorDamage();
        }
    },
    executeFloorDamage: function () {
        var damage = Math.floor(this.basicFloorDamage() * this.fdr);
        damage = Math.min(damage, this.maxFloorDamage());
        this.gainHp(-damage);
        if (damage > 0) {
            this.performMapDamage();
        }
    },
    basicFloorDamage: function () {
        return 10;
    },
    maxFloorDamage: function () {
        return $dataSystem.optFloorDeath ? this.hp : Math.max(this.hp - 1, 0);
    },
    performMapDamage: function () {
        if (!$gameParty.inBattle()) {
            $gameScreen.startFlashForDamage();
        }
    },
    clearActions: function () {
        Game_Battler.prototype.clearActions.call(this);
        this._actionInputIndex = 0;
    },
    inputtingAction: function () {
        return this.action(this._actionInputIndex);
    },
    selectNextCommand: function () {
        if (this._actionInputIndex < this.numActions() - 1) {
            this._actionInputIndex++;
            return true;
        } else {
            return false;
        }
    },
    selectPreviousCommand: function () {
        if (this._actionInputIndex > 0) {
            this._actionInputIndex--;
            return true;
        } else {
            return false;
        }
    },
    lastMenuSkill: function () {
        return this._lastMenuSkill.object();
    },
    setLastMenuSkill: function (skill) {
        this._lastMenuSkill.setObject(skill);
    },
    lastBattleSkill: function () {
        return this._lastBattleSkill.object();
    },
    setLastBattleSkill: function (skill) {
        this._lastBattleSkill.setObject(skill);
    },
    lastCommandSymbol: function () {
        return this._lastCommandSymbol;
    },
    setLastCommandSymbol: function (symbol) {
        this._lastCommandSymbol = symbol;
    },
    reflectAnimationId: function () {
        if (this.actor().reflectAnimationId > 0) {
            return this.actor().reflectAnimationId;
        }
        if (this.currentClass().reflectAnimationId > 0) {
            return this.currentClass().reflectAnimationId;
        }
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.reflectAnimationId > 0) {
                return equip.reflectAnimationId;
            }
        }
        return Game_Battler.prototype.reflectAnimationId.call(this);
    },
    spriteCanMove: function () {
        if (this.actor().spriteCannotMove) return false;
        if (this.currentClass().spriteCannotMove) return false;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.spriteCannotMove) return false;
        }
        return Game_Battler.prototype.spriteCanMove.call(this);
    },
    spriteWidth: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            return this.battler()._mainSprite.width;
        } else {
            return 1;
        }
    },
    spriteHeight: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            return this.battler()._mainSprite.height;
        } else {
            return 1;
        }
    },
    anchorX: function () {
        if (this._anchorX !== undefined) return this._anchorX;
        var length = this.states().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.states()[i];
            if (obj && obj.anchorX !== undefined) {
                this._anchorX = obj.anchorX;
                return this._anchorX;
            }
        }
        length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.anchorX !== undefined) {
                this._anchorX = obj.anchorX;
                return this._anchorX;
            }
        }
        if (this.currentClass().anchorX !== undefined) {
            this._anchorX = this.currentClass().anchorX;
            return this._anchorX;
        }
        this._anchorX = this.actor().anchorX;
        return this._anchorX;
    },
    anchorY: function () {
        if (this._anchorY !== undefined) return this._anchorY;
        var length = this.states().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.states()[i];
            if (obj && obj.anchorY !== undefined) {
                this._anchorY = obj.anchorY;
                return this._anchorY;
            }
        }
        length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.anchorY !== undefined) {
                this._anchorY = obj.anchorY;
                return this._anchorY;
            }
        }
        if (this.currentClass().anchorY !== undefined) {
            this._anchorY = this.currentClass().anchorY;
            return this._anchorY;
        }
        this._anchorY = this.actor().anchorY;
        return this._anchorY;
    },
    spriteFacePoint: function (pointX, pointY) {
        if (this.spritePosX() > pointX) {
            this.spriteFaceForward();
        } else {
            this.spriteFaceBackward();
        }
    },
    spriteFaceAwayPoint: function (pointX, pointY) {
        if (this.spritePosX() > pointX) {
            this.spriteFaceBackward();
        } else {
            this.spriteFaceForward();
        }
    },
    attackMotion: function () {
        var weapons = this.weapons();
        var wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
        var attackMotion = $dataSystem.attackMotions[wtypeId];
        if (attackMotion) {
            if (attackMotion.type === 0) {
                return 'thrust';
            } else if (attackMotion.type === 1) {
                return 'swing';
            } else if (attackMotion.type === 2) {
                return 'missile';
            }
        };
        return 'thrust';
    },
    performEscapeSuccess: function () {
        if (this.battler()) {
            this.performEscape();
            this.battler().startMove(300, 0, 60);
        }
    },
    maxBuffLimit: function (paramId) {
        var value = Game_Battler.prototype.maxBuffLimit.call(this, paramId);
        value += this.actor().maxBuff[paramId];
        value += this.currentClass().maxBuff[paramId];
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.maxBuff) value += equip.maxBuff[paramId];
        }
        return value;
    },
    maxDebuffLimit: function (paramId) {
        var value = Game_Battler.prototype.maxDebuffLimit.call(this, paramId);
        value -= this.actor().maxDebuff[paramId];
        value -= this.currentClass().maxDebuff[paramId];
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.maxDebuff) value -= equip.maxDebuff[paramId];
        }
        return value;
    },
    ctbIcon: function () {
        if (this.actor().ctbClassIcon) {
            if (this.actor().ctbClassIcon[this._classId]) {
                return this.actor().ctbClassIcon[this._classId];
            }
        }
        return this.actor().ctbIcon;
    },
    ctbBorderColor: function () {
        return this.actor().ctbBorderColor;
    },
    ctbBackgroundColor: function () {
        return this.actor().ctbBackgroundColor;
    },
    ctbStartFlat: function () {
        var value = Game_Battler.prototype.ctbStartFlat.call(this);
        value += this.actor().ctbStartFlat;
        value += this.currentClass().ctbStartFlat;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.ctbStartFlat) value += equip.ctbStartFlat;
        }
        return value;
    },
    ctbStartRate: function () {
        var value = Game_Battler.prototype.ctbStartRate.call(this);
        value += this.actor().ctbStartRate;
        value += this.currentClass().ctbStartRate;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.ctbStartRate) value += equip.ctbStartRate;
        }
        return value;
    },
    ctbTurnFlat: function () {
        var value = Game_Battler.prototype.ctbTurnFlat.call(this);
        value += this.actor().ctbTurnFlat;
        value += this.currentClass().ctbTurnFlat;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.ctbTurnFlat) value += equip.ctbTurnFlat;
        }
        return value;
    },
    ctbTurnRate: function () {
        var value = Game_Battler.prototype.ctbTurnRate.call(this);
        value += this.actor().ctbTurnRate;
        value += this.currentClass().ctbTurnRate;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.ctbTurnRate) value += equip.ctbTurnRate;
        }
        return value;
    },
    ctbTransform: function () {
        if (!$gameParty.inBattle()) return;
        if (!BattleManager.isCTB()) return;
        this._ctbTransformed = true;
    },
    gauge1: function () {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.gauge1 === 'UNDEFINED') continue;
            return equip.gauge1;
        }
        for (var i = 0; i < this.states().length; ++i) {
            var state = this.states()[i];
            if (!state) continue;
            if (state.gauge1 === 'UNDEFINED') continue;
            return state.gauge1;
        }
        return this.currentClass().gauge1;
    },
    gauge2: function () {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.gauge2 === 'UNDEFINED') continue;
            return equip.gauge2;
        }
        for (var i = 0; i < this.states().length; ++i) {
            var state = this.states()[i];
            if (!state) continue;
            if (state.gauge2 === 'UNDEFINED') continue;
            return state.gauge2;
        }
        return this.currentClass().gauge2;
    },
    gauge3: function () {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.gauge3 === 'UNDEFINED') continue;
            return equip.gauge3;
        }
        for (var i = 0; i < this.states().length; ++i) {
            var state = this.states()[i];
            if (!state) continue;
            if (state.gauge3 === 'UNDEFINED') continue;
            return state.gauge3;
        }
        return this.currentClass().gauge3;
    },
    gaugeIcon1: function () {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.gaugeIcon1 === 'UNDEFINED') continue;
            return equip.gaugeIcon1;
        }
        for (var i = 0; i < this.states().length; ++i) {
            var state = this.states()[i];
            if (!state) continue;
            if (state.gaugeIcon1 === 'UNDEFINED') continue;
            return state.gaugeIcon1;
        }
        return this.currentClass().gaugeIcon1;
    },
    gaugeIcon2: function () {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.gaugeIcon2 === 'UNDEFINED') continue;
            return equip.gaugeIcon2;
        }
        for (var i = 0; i < this.states().length; ++i) {
            var state = this.states()[i];
            if (!state) continue;
            if (state.gaugeIcon2 === 'UNDEFINED') continue;
            return state.gaugeIcon2;
        }
        return this.currentClass().gaugeIcon2;
    },
    gaugeIcon3: function () {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.gaugeIcon3 === 'UNDEFINED') continue;
            return equip.gaugeIcon3;
        }
        for (var i = 0; i < this.states().length; ++i) {
            var state = this.states()[i];
            if (!state) continue;
            if (state.gaugeIcon3 === 'UNDEFINED') continue;
            return state.gaugeIcon3;
        }
        return this.currentClass().gaugeIcon3;
    },
    cooldownDuration: function (skill) {
        var value = Game_Battler.prototype.cooldownDuration.call(this, skill);
        var skillId = skill.id;
        var stypeId = skill.stypeId;
        if (this.actor().cooldownDuration[skillId] !== undefined) {
            value *= this.actor().cooldownDuration[skillId];
        }
        if (this.currentClass().cooldownDuration[skillId] !== undefined) {
            value *= this.currentClass().cooldownDuration[skillId];
        }
        if (this.actor().stypeCooldownDuration[stypeId] !== undefined) {
            value *= this.actor().stypeCooldownDuration[stypeId];
        }
        if (this.currentClass().stypeCooldownDuration[stypeId] !== undefined) {
            value *= this.currentClass().stypeCooldownDuration[stypeId];
        }
        value *= this.actor().globalCooldownDuration;
        value *= this.currentClass().globalCooldownDuration;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.cooldownDuration !== undefined) {
                if (equip.cooldownDuration[skillId] !== undefined) {
                    value *= equip.cooldownDuration[skillId];
                }
            }
            if (equip.stypeCooldownDuration !== undefined) {
                if (equip.stypeCooldownDuration[stypeId] !== undefined) {
                    value *= equip.stypeCooldownDuration[stypeId];
                }
            }
            if (equip.globalCooldownDuration !== undefined) {
                value *= equip.globalCooldownDuration;
            }
        }
        return value;
    },
    cooldownRate: function (skill) {
        var value = Game_Battler.prototype.cooldownRate.call(this, skill);
        var skillId = skill.id;
        var stypeId = skill.stypeId;
        if (this.actor().cooldownRate[skillId] !== undefined) {
            value *= this.actor().cooldownRate[skillId];
        }
        if (this.currentClass().cooldownRate[skillId] !== undefined) {
            value *= this.currentClass().cooldownRate[skillId];
        }
        if (this.actor().stypeCooldownRate[stypeId] !== undefined) {
            value *= this.actor().stypeCooldownRate[stypeId];
        }
        if (this.currentClass().stypeCooldownRate[stypeId] !== undefined) {
            value *= this.currentClass().stypeCooldownRate[stypeId];
        }
        value *= this.actor().globalCooldownRate;
        value *= this.currentClass().globalCooldownRate;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.cooldownRate !== undefined) {
                if (equip.cooldownRate[skillId] !== undefined) {
                    value *= equip.cooldownRate[skillId];
                }
            }
            if (equip.stypeCooldownRate !== undefined) {
                if (equip.stypeCooldownRate[stypeId] !== undefined) {
                    value *= equip.stypeCooldownRate[stypeId];
                }
            }
            if (equip.globalCooldownRate !== undefined) {
                value *= equip.globalCooldownRate;
            }
        }
        return value;
    },
    flatCooldownChange: function (skill) {
        var skillId = skill.id;
        var stypeId = skill.stypeId;
        var value = Game_Battler.prototype.flatCooldownChange.call(this, skill);
        if (this.actor().cooldownChange[skillId] !== undefined) {
            value += this.actor().cooldownChange[skillId];
        }
        if (this.currentClass().cooldownChange[skillId] !== undefined) {
            value += this.currentClass().cooldownChange[skillId];
        }
        if (this.actor().stypeCooldownChange[stypeId] !== undefined) {
            value += this.actor().stypeCooldownChange[stypeId];
        }
        if (this.currentClass().stypeCooldownChange[stypeId] !== undefined) {
            value += this.currentClass().stypeCooldownChange[stypeId];
        }
        value += this.actor().globalCooldownChange;
        value += this.currentClass().globalCooldownChange;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.cooldownChange === undefined) continue;
            if (equip.cooldownChange[skillId] !== undefined) {
                value += equip.cooldownChange[skillId];
            }
            if (equip.stypeCooldownChange[stypeId] !== undefined) {
                value += equip.stypeCooldownChange[stypeId];
            }
            value += equip.globalCooldownChange;
        }
        return value;
    },
    flatWarmupChange: function (skill) {
        var skillId = skill.id;
        var stypeId = skill.stypeId;
        var value = Game_Battler.prototype.flatWarmupChange.call(this, skill);
        if (this.actor().warmupChange[skillId] !== undefined) {
            value += this.actor().warmupChange[skillId];
        }
        if (this.currentClass().warmupChange[skillId] !== undefined) {
            value += this.currentClass().warmupChange[skillId];
        }
        if (this.actor().stypeWarmupChange[stypeId] !== undefined) {
            value += this.actor().stypeWarmupChange[stypeId];
        }
        if (this.currentClass().stypeWarmupChange[stypeId] !== undefined) {
            value += this.currentClass().stypeWarmupChange[stypeId];
        }
        value += this.actor().globalWarmupChange;
        value += this.currentClass().globalWarmupChange;
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip.warmupChange === undefined) continue;
            if (equip.warmupChange[skillId] !== undefined) {
                value += equip.warmupChange[skillId];
            }
            if (equip.stypeWarmupChange[stypeId] !== undefined) {
                value += equip.stypeWarmupChange[stypeId];
            }
            value += equip.globalWarmupChange;
        }
        return value;
    },
    getLifeStealRate: function (type, target) {
        rate = 1 - Game_Battler.prototype.getLifeStealRate.call(this, type, target);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.lifeSteal && obj.lifeSteal[type]) {
                rate *= (1 - obj.lifeSteal[type]);
            }
            if (obj && obj.lifeSteal && obj.lifeSteal[type + 'Eval']) {
                var formula = obj.lifeSteal[type + 'Eval'];
                rate *= (1 - this.getLifeStealRateEval(formula, target));
            }
        }
        rate *= (1 - this.actor().lifeSteal[type]);
        if (this.actor().lifeSteal[type + 'Eval']) {
            var formula = this.actor().lifeSteal[type + 'Eval'];
            rate *= (1 - this.getLifeStealRateEval(formula, target));
        }
        rate *= (1 - this.currentClass().lifeSteal[type]);
        if (this.currentClass().lifeSteal[type + 'Eval']) {
            var formula = this.currentClass().lifeSteal[type + 'Eval'];
            rate *= (1 - this.getLifeStealRateEval(formula, target));
        }
        return 1 - rate;
    },
    getLifeStealFlat: function (type, target) {
        value = Game_Battler.prototype.getLifeStealFlat.call(this, type, target);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.lifeSteal && obj.lifeSteal[type]) {
                value += obj.lifeSteal[type];
            }
            if (obj && obj.lifeSteal && obj.lifeSteal[type + 'Eval']) {
                var formula = obj.lifeSteal[type + 'Eval'];
                value += this.getLifeStealFlatEval(formula, target);
            }
        }
        value += this.actor().lifeSteal[type];
        if (this.actor().lifeSteal[type + 'Eval']) {
            var formula = this.actor().lifeSteal[type + 'Eval'];
            value += this.getLifeStealFlatEval(formula, target);
        }
        value += this.currentClass().lifeSteal[type];
        if (this.currentClass().lifeSteal[type + 'Eval']) {
            var formula = this.currentClass().lifeSteal[type + 'Eval'];
            value += this.getLifeStealFlatEval(formula, target);
        }
        return value;
    },
    isLifeStealState: function (type) {
        if (Game_Battler.prototype.isLifeStealState.call(this, type)) return true;
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.lifeSteal && obj.lifeSteal[type]) return true;
        }
        if (this.actor().lifeSteal[type]) return true;
        if (this.currentClass().lifeSteal[type]) return true;
        return false;
    },
    initIndependentEquips: function (equips) {
        var equips = this.convertInitEquips(equips);
        this.equipInitIndependentEquips(equips);
        this.releaseUnequippableItems(true);
        this.recoverAll();
        this.refresh();
    },
    convertInitEquips: function (equips) {
        var items = [];
        for (var i = 0; i < equips.length; ++i) {
            var equipId = equips[i];
            if (equipId <= 0) continue;
            var equipType = $dataSystem.equipTypes[i + 1];
            if (equipType === $dataSystem.equipTypes[1] ||
                (i === 1 && this.isDualWield())) {
                var equip = $dataWeapons[equipId];
            } else {
                var equip = $dataArmors[equipId];
            }
            items.push(equip);
        }
        return items;
    },
    equipInitIndependentEquips: function (equips) {
        var slots = this.equipSlots();
        var maxSlots = slots.length;
        this._equips = [];
        for (var i = 0; i < maxSlots; ++i) {
            this._equips[i] = new Game_Item();
        }
        for (var i = 0; i < maxSlots; ++i) {
            var slotType = slots[i];
            var equip = this.grabInitEquips(equips, slotType);
            if (DataManager.isIndependent(equip) && this.canEquip(equip)) {
                var array = $gameParty.gainIndependentItem(equip, 1)
                if (array instanceof Array) {
                    newItem = array[0];
                    this.changeEquip(i, newItem);
                }
            } else if (this.canEquip(equip)) {
                this._equips[i].setObject(equip);
            }
        }
    },
    grabInitEquips: function (equips, slotType) {
        var item = null;
        for (var i = 0; i < equips.length; ++i) {
            var equip = equips[i];
            if (!equip) continue;
            if (slotType === 1 && DataManager.isWeapon(equip)) {
                item = equip;
                break;
            } else if (equip.etypeId === slotType) {
                item = equip;
                break;
            }
        }
        if (item) equips[i] = null;
        return item;
    },
    hasBaseItem: function (baseItem) {
        if (!DataManager.isIndependent(baseItem)) return false;
        var type = (DataManager.isWeapon(baseItem)) ? 'weapon' : 'armor';
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (!equip.baseItemId) continue;
            if (DataManager.isWeapon(equip) && type === 'weapon') {
                if (equip.baseItemId === baseItem.id) return true;
            } else if (DataManager.isArmor(equip) && type === 'armor') {
                if (equip.baseItemId === baseItem.id) return true;
            }
        }
        return false;
    },
    unequipItem: function (item) {
        for (var i = 0; i < this.equips().length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (equip !== item) continue;
            this.changeEquip(i, null);
        }
    },
    isAbsorbElement: function (elementId) {
        if (this.actor().elementAbsorb.contains(elementId)) return true;
        if (this.currentClass().elementAbsorb.contains(elementId)) return true;
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var equip = this.equips()[i];
            if (!equip) continue;
            if (!equip.elementAbsorb) continue;
            if (equip.elementAbsorb.contains(elementId)) return true;
        }
        return Game_Battler.prototype.isAbsorbElement.call(this, elementId);
    },
    elementReflectRate: function (elementId) {
        var rate = Game_Battler.prototype.elementReflectRate.call(this, elementId);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            rate += this.getObjElementReflectRate(obj, elementId);
        }
        rate += this.getObjElementReflectRate(this.actor(), elementId);
        rate += this.getObjElementReflectRate(this.currentClass(), elementId);
        return rate;
    },
    elementAmplifyRate: function (elementId) {
        var rate = Game_Battler.prototype.elementAmplifyRate.call(this, elementId);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            rate += this.getObjElementAmplifyRate(obj, elementId);
        }
        rate += this.getObjElementAmplifyRate(this.actor(), elementId);
        rate += this.getObjElementAmplifyRate(this.currentClass(), elementId);
        return rate;
    },
    elementMagnifyRate: function (elementId) {
        var rate = Game_Battler.prototype.elementMagnifyRate.call(this, elementId);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            rate += this.getObjElementMagnifyRate(obj, elementId);
        }
        rate += this.getObjElementMagnifyRate(this.actor(), elementId);
        rate += this.getObjElementMagnifyRate(this.currentClass(), elementId);
        return rate;
    },
    isNullElement: function () {
        if (this.actor().elementNull) return true;
        if (this.currentClass().elementNull) return true;
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var equip = this.equips()[i];
            if (equip && equip.elementNull) return true;
        }
        return Game_Battler.prototype.isNullElement.call(this);
    },
    forcedElementRate: function (elementId) {
        var rate = Game_Battler.prototype.forcedElementRate.call(this, elementId);
        if (rate !== undefined) return rate;
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var equip = this.equips()[i];
            rate = this.getObjElementForcedRate(equip, elementId);
            if (rate !== undefined) return rate;
        }
        rate = this.getObjElementForcedRate(this.currentClass(), elementId);
        if (rate !== undefined) return rate;
        rate = this.getObjElementForcedRate(this.actor(), elementId);
        if (rate !== undefined) return rate;
        return undefined;
    },
    barrierPenetrationRate: function () {
        var rate = 1 - Game_Battler.prototype.barrierPenetrationRate.call(this);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.barrierPenetrationRate !== undefined) {
                rate *= (1 - obj.barrierPenetrationRate);
            }
        }
        rate *= (1 - this.actor().barrierPenetrationRate);
        rate *= (1 - this.currentClass().barrierPenetrationRate);
        return 1 - rate;
    },
    barrierPenetrationRateEval: function (c1, c2, c3, c4) {
        var rate = 1 - Game_Battler.prototype.barrierPenetrationRateEval.call(this,
            c1, c2, c3, c4);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.barrierPenetrationRateEval !== undefined) {
                var formula = obj.barrierPenetrationRateEval;
                rate *= (1 - this.getbarrierPenRateEval(formula, c1, c2, c3, c4));
            }
        }
        var formula = this.actor().barrierPenetrationRateEval;
        rate *= (1 - this.getbarrierPenRateEval(formula, c1, c2, c3, c4));
        var formula = this.currentClass().barrierPenetrationRateEval;
        rate *= (1 - this.getbarrierPenRateEval(formula, c1, c2, c3, c4));
        return 1 - rate;
    },
    barrierPenetrationFlat: function () {
        var value = Game_Battler.prototype.barrierPenetrationFlat.call(this);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.barrierPenetrationFlat !== undefined) {
                value += obj.barrierPenetrationFlat;
            }
        }
        value += this.actor().barrierPenetrationFlat;
        value += this.currentClass().barrierPenetrationFlat;
        return value;
    },
    barrierPenetrationFlatEval: function (c1, c2, c3, c4) {
        var value = Game_Battler.prototype.barrierPenetrationFlatEval.call(this,
            c1, c2, c3, c4);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj && obj.barrierPenetrationFlatEval !== undefined) {
                var formula = obj.barrierPenetrationFlatEval;
                value += this.getbarrierPenFlatEval(formula, c1, c2, c3, c4);
            }
        }
        var formula = this.actor().barrierPenetrationFlatEval;
        value += this.getbarrierPenFlatEval(formula, c1, c2, c3, c4);
        var formula = this.currentClass().barrierPenetrationFlatEval;
        value += this.getbarrierPenFlatEval(formula, c1, c2, c3, c4);
        return value;
    },
    battleStartBarrierPoints: function () {
        var array = Game_Battler.prototype.battleStartBarrierPoints.call(this);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj) this.makeBattleStartBarrierPoints(array, obj);
        }
        this.makeBattleStartBarrierPoints(array, this.actor());
        this.makeBattleStartBarrierPoints(array, this.currentClass());
        return array;
    },
    getRegenBarriers: function () {
        var array = Game_Battler.prototype.getRegenBarriers.call(this);
        var length = this.equips().length;
        for (var i = 0; i < length; ++i) {
            var obj = this.equips()[i];
            if (obj) this.makeRegenBarrierPoints(array, obj);
        }
        this.makeRegenBarrierPoints(array, this.actor());
        this.makeRegenBarrierPoints(array, this.currentClass());
        return array;
    },
    gainHp: function (value) {
        _alias_mog_bhud_gainHp.call(this, value);
        this._bhud_face_data[3] += 1;
    },
    recoverAll: function () {
        _alias_mog_bhud_recoverAll.call(this);
        this._bhud_face_data[3] += 1;
    },
    current_exp_r: function () {
        return this.nextLevelExp() - this.nextRequiredExp() - this.expForLevel(this._level);
    },
    nextLevelExp_r: function () {
        return this.expForLevel(this._level + 1) - this.expForLevel(this._level);
    },
    param: function (paramId) {
        var value = this.paramBase(paramId) + this.paramPlus(paramId) + this.paramSuit(paramId);
        value *= this.paramRate(paramId) * this.paramBuffRate(paramId);
        var maxValue = this.paramMax(paramId);
        var minValue = this.paramMin(paramId);
        return Math.round(value.clamp(minValue, maxValue));
    },
    paramSuit: function (paramId) {
        var value = 0;
        var suits = new Array();
        var equips = this.equips();
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item && item.meta.Suit) {
                var tempSuit = item.meta.Suit.split(",");
                var suitIndex = Number(tempSuit[0]);
                if (suits[suitIndex]) {
                    suits[suitIndex][1] += 1;
                } else {
                    suits[suitIndex] = tempSuit;
                    var suitNum = Number(suits[suitIndex][1]);
                    suits[suitIndex][1] = suitNum;
                }
            }
        }
        var currentSuits = suits;
        for (var j = 0; j < currentSuits.length; j++) {
            if (currentSuits[j] && Number(currentSuits[j][1]) > 1) {
                var indexSuit = Number(currentSuits[j][1]);
                var indexParam = Number(currentSuits[j][indexSuit]);
                value += $dataWeapons[indexParam].params[paramId];
            }
        }
        return value;
    },
    varColumn1: function () {
        return this.actor().varColumn1;
    },
    varColumn2: function () {
        return this.actor().varColumn2;
    },
    varColumn3: function () {
        return this.actor().varColumn3;
    },
    varColumn4: function () {
        return this.actor().varColumn4;
    },
    clearAnimations: function () {
        this._animations = [];
    },
    clearDamagePopup: function () {
        this._damagePopup = [];
    },
    clearWeaponAnimation: function () {
        this._weaponImageId = 0;
    },
    clearEffect: function () {
        this._effectType = null;
    },
    clearMotion: function () {
        this._motionType = null;
        this._motionRefresh = false;
    },
    requestEffect: function (effectType) {
        this._effectType = effectType;
    },
    requestMotion: function (motionType) {
        this._motionType = motionType;
        if (this.battler()) {
            this.battler().startMotion(motionType);
        }
    },
    requestMotionRefresh: function () {
        var deadMotion = this.deadMotion();
        if (this.isDead() && this._motionType !== deadMotion) {
            this.requestMotion(deadMotion);
        }
        if (this.isDead() && this._motionType === deadMotion) return;
        if (this._motionType === 'victory') return;
        if (this._motionType === 'escape' && !BattleManager.isInputting()) return;
        if (this._motionType === 'guard' && !BattleManager.isInputting()) return;
        this.clearMotion();
        if (this.battler() && BattleManager.isInputting()) {
            this.battler().refreshMotion();
        }
    },
    select: function () {
        this._selected = true;
    },
    deselect: function () {
        this._selected = false;
    },
    isAnimationRequested: function () {
        return this._animations.length > 0;
    },
    isDamagePopupRequested: function () {
        if (!this._damagePopup) this.clearDamagePopup();
        return this._damagePopup.length > 0;
    },
    isEffectRequested: function () {
        return !!this._effectType;
    },
    isMotionRequested: function () {
        return !!this._motionType;
    },
    isWeaponAnimationRequested: function () {
        return this._weaponImageId > 0;
    },
    isMotionRefreshRequested: function () {
        return this._motionRefresh;
    },
    isSelected: function () {
        if ($gameParty.inBattle() && BattleManager.isAllSelection()) {
            if (!this.isAppeared()) return false;
            var action = BattleManager.inputtingAction();
            if (action && action.item()) {
                if (this.isDead() && this.isEnemy()) return false;
                if (this.isDead() && this.isActor()) return action.isForDeadFriend();
                if (action.isForFriend() && this.isActor()) return true;
                if (action.isForOpponent() && this.isEnemy()) return true;
            }
        }
        return Yanfly.BEC.Game_Battler_isSelected.call(this);
    },
    effectType: function () {
        return this._effectType;
    },
    motionType: function () {
        return this._motionType;
    },
    weaponImageId: function () {
        return this._weaponImageId;
    },
    shiftAnimation: function () {
        return this._animations.shift();
    },
    startDamagePopup: function () {
        var result = this.result();
        if (result.missed || result.evaded) {
            var copyResult = JsonEx.makeDeepCopy(result);
            copyResult.hpAffected = false;
            copyResult.mpDamage = 0;
            this._damagePopup.push(copyResult);
        }
        if (result.hpAffected) {
            var copyResult = JsonEx.makeDeepCopy(result);
            copyResult.mpDamage = 0;
            this._damagePopup.push(copyResult);
        }
        if (result.mpDamage !== 0) {
            var copyResult = JsonEx.makeDeepCopy(result);
            copyResult.hpAffected = false;
            this._damagePopup.push(copyResult);
        }
    },
    startWeaponAnimation: function (weaponImageId) {
        this._weaponImageId = weaponImageId;
        if (this.battler()) {
            this.battler().setupWeaponAnimation();
        }
    },
    action: function (index) {
        return this._actions[index];
    },
    setAction: function (index, action) {
        this._actions[index] = action;
    },
    numActions: function () {
        return this._actions.length;
    },
    result: function () {
        return this._result;
    },
    clearResult: function () {
        this._result.clear();
    },
    addState: function (stateId) {
        var deathState = (stateId === this.deathStateId());
        var lifeState = this.isAlive();
        Yanfly.ABR.Game_Battler_addState.call(this, stateId);
        if (deathState && lifeState !== this.isAlive()) this.clearAbsorptionBarrier();
    },
    isStateAddable: function (stateId) {
        return (this.isAlive() && $dataStates[stateId] &&
            !this.isStateResist(stateId) &&
            !this._result.isStateRemoved(stateId) &&
            !this.isStateRestrict(stateId));
    },
    isStateRestrict: function (stateId) {
        return $dataStates[stateId].removeByRestriction && this.isRestricted();
    },
    onRestrict: function () {
        Game_BattlerBase.prototype.onRestrict.call(this);
        this.clearActions();
        this.states().forEach(function (state) {
            if (state.removeByRestriction) {
                this.removeState(state.id);
            }
        }, this);
    },
    removeState: function (stateId) {
        if (BattleManager.isCTB()) {
            var confuseCondition = this.isConfused();
        }
        Yanfly.CTB.Game_Battler_removeState.call(this, stateId);
        if (BattleManager.isCTB()) {
            if (confuseCondition !== this.isConfused()) this.resetAllCTB();
        }
    },
    escape: function () {
        if ($gameParty.inBattle()) {
            this.hide();
        }
        this.clearActions();
        this.clearStates();
        SoundManager.playEscape();
    },
    addBuff: function (paramId, turns) {
        if (this.isAlive()) {
            this.increaseBuff(paramId);
            if (this.isBuffAffected(paramId)) {
                this.overwriteBuffTurns(paramId, turns);
            }
            this._result.pushAddedBuff(paramId);
            this.refresh();
        }
    },
    addDebuff: function (paramId, turns) {
        if (this.isAlive()) {
            this.decreaseBuff(paramId);
            if (this.isDebuffAffected(paramId)) {
                this.overwriteBuffTurns(paramId, turns);
            }
            this._result.pushAddedDebuff(paramId);
            this.refresh();
        }
    },
    removeBuff: function (paramId) {
        if (this.isAlive() && this.isBuffOrDebuffAffected(paramId)) {
            this.eraseBuff(paramId);
            this._result.pushRemovedBuff(paramId);
            this.refresh();
        }
    },
    removeBattleStates: function () {
        this.states().forEach(function (state) {
            if (state.removeAtBattleEnd) {
                this.removeState(state.id);
            }
        }, this);
    },
    removeAllBuffs: function () {
        for (var i = 0; i < this.buffLength(); i++) {
            this.removeBuff(i);
        }
    },
    removeStatesAuto: function (timing) {
        $gameTemp._customLeaveEffectEval = true;
        Yanfly.BSC.Game_Battler_removeStatesAuto.call(this, timing);
        $gameTemp._customLeaveEffectEval = undefined;
    },
    removeBuffsAuto: function () {
        for (var i = 0; i < this.buffLength(); i++) {
            if (this.isBuffExpired(i)) {
                this.removeBuff(i);
            }
        }
    },
    removeStatesByDamage: function () {
        this.states().forEach(function (state) {
            if (state.removeByDamage && Math.randomInt(100) < state.chanceByDamage) {
                this.removeState(state.id);
            }
        }, this);
    },
    makeActionTimes: function () {
        return this.actionPlusSet().reduce(function (r, p) {
            return Math.random() < p ? r + 1 : r;
        }, 1);
    },
    speed: function () {
        return this._speed;
    },
    makeSpeed: function () {
        this._speed = Math.min.apply(null, this._actions.map(function (action) {
            return action.speed();
        })) || 0;
    },
    currentAction: function () {
        return this._actions[0];
    },
    removeCurrentAction: function () {
        this._actions.shift();
    },
    setLastTarget: function (target) {
        if (target) {
            this._lastTargetIndex = target.index();
        } else {
            this._lastTargetIndex = 0;
        }
    },
    forceAction: function (skillId, targetIndex) {
        _mog_batmotion_forceAction.call(this, skillId, targetIndex);
        if (this._actions[0]) { this.set_bmotion_action(this._actions[0]._item) };
    },
    useItem: function (item) {
        Yanfly.BEC.Game_Battler_useItem.call(this, item);
        this.refresh();
        if (!$gameParty.inBattle()) return;
        this.increaseSelfTurnCount();
        this.updateStateActionStart();
    },
    consumeItem: function (item) {
        $gameParty.consumeItem(item);
    },
    gainMp: function (value) {
        this._result.mpDamage = -value;
        this.setMp(this.mp + value);
    },
    gainTp: function (value) {
        this._result.tpDamage = -value;
        this.setTp(this.tp + value);
    },
    gainSilentTp: function (value) {
        this.setTp(this.tp + value);
    },
    initTp: function () {
        this.setTp(Math.randomInt(25));
    },
    clearTp: function () {
        this.setTp(0);
    },
    chargeTpByDamage: function (damageRate) {
        var value = Math.floor(50 * damageRate * this.tcr);
        this.gainSilentTp(value);
    },
    regenerateHp: function () {
        var value = Math.floor(this.mhp * this.hrg);
        value = Math.max(value, -this.maxSlipDamage());
        if (value !== 0) {
            this.gainHp(value);
        }
    },
    maxSlipDamage: function () {
        return $dataSystem.optSlipDeath ? this.hp : Math.max(this.hp - 1, 0);
    },
    regenerateMp: function () {
        var value = Math.floor(this.mmp * this.mrg);
        if (value !== 0) {
            this.gainMp(value);
        }
    },
    regenerateTp: function () {
        var value = Math.floor(100 * this.trg);
        this.gainSilentTp(value);
    },
    regenerateAll: function () {
        Yanfly.ABR.Game_Battler_regenerateAll.call(this);
        if (!$gameParty.inBattle()) return;
        if (this.isAlive()) {
            this.updateBarrierTurns();
            this.regenBarriers();
        }
    },
    onBattleStart: function () {
        _alias_mog_bmotion_gbattler_onBattleStart.call(this);
        this.set_motion_data();
    },
    onAllActionsEnd: function () {
        Yanfly.BEC.Game_Battler_onAllActionsEnd.call(this);
        if (!BattleManager._processTurn) this.updateStateActionEnd();
    },
    onTurnEnd: function () {
        Yanfly.BSC.Game_Battler_onTurnEnd.call(this);
        if (this.meetTurnEndStateEffectsConditions()) this.onTurnEndStateEffects();
    },
    onBattleEnd: function () {
        if (Yanfly.Param.ABRClear) this.clearAbsorptionBarrier();
        Yanfly.ABR.Game_Battler_onBattleEnd.call(this);
    },
    onDamage: function (value) {
        this.removeStatesByDamage();
        this.chargeTpByDamage(value / this.mhp);
    },
    setActionState: function (actionState) {
        this._actionState = actionState;
        this.requestMotionRefresh();
    },
    isUndecided: function () {
        return this._actionState === 'undecided';
    },
    isInputting: function () {
        return this._actionState === 'inputting';
    },
    isWaiting: function () {
        return this._actionState === 'waiting';
    },
    isActing: function () {
        return this._actionState === 'acting';
    },
    isChanting: function () {
        if (this.isWaiting()) {
            return this._actions.some(function (action) {
                return action.isMagicSkill();
            });
        }
        return false;
    },
    isGuardWaiting: function () {
        if (this.isWaiting()) {
            return this._actions.some(function (action) {
                return action.isGuard();
            });
        }
        return false;
    },
    performMiss: function () {
        Yanfly.BEC.Game_Battler_performMiss.call(this);
        this.performFlinch();
    },
    performRecovery: function () {
        SoundManager.playRecovery();
    },
    performReflection: function () {
        Yanfly.BEC.Game_Battler_performReflection.call(this);
        if (!$gameSystem.isSideView() && this.isActor()) return;
        var animationId = this.reflectAnimationId();
        var mirror = this.isActor();
        this.startAnimation(animationId, mirror, 0);
    },
    performSubstitute: function (target) {
        Yanfly.BEC.Game_Battler_performSubstitute.call(this, target);
        if (!$gameSystem.isSideView()) return;
        this._flinched = true;
        if (BattleManager._action.isForAll()) {
            this.spriteStepForward();
            target.spriteStepSubBack();
        } else {
            this.spriteStepToSubstitute(target);
            target.spriteStepSubBack();
        }
    },
    addImmortal: function () {
        this._immortalState = true;
    },
    removeImmortal: function () {
        var alreadyDead = this.isDead();
        this._immortalState = false;
        this.refresh();
        if (this.isDead() && !alreadyDead) this.performCollapse();
    },
    shiftDamagePopup: function () {
        if (!this._damagePopup) this.clearDamagePopup();
        return this._damagePopup.shift();
    },
    performResultEffects: function () {
        var result = this.result();
        if (result.missed && result.physical) this.performMiss();
        if (result.evaded) {
            if (result.physical) {
                this.performEvasion();
            } else {
                this.performMagicEvasion();
            }
        }
        if (result.hpAffected) {
            if (result.hpDamage > 0 && !result.drain) {
                this.performDamage();
            }
            if (result.hpDamage < 0) {
                this.performRecovery();
            }
        }
        if (this.isAlive() && result.mpDamage !== 0 && result.mpDamage < 0) {
            this.performRecovery();
        }
        if (this.isAlive() && result.tpDamage !== 0 && result.tpDamage < 0) {
            this.performRecovery();
        }
    },
    performFlinch: function () {
        if (this._flinched || !$gameSystem.isSideView()) return;
        this._flinched = true;
        this.spriteStepFlinch();
    },
    setBattler: function (sprite) {
        BattleManager.registerSprite(this, sprite);
    },
    battler: function () {
        return BattleManager.getSprite(this);
    },
    forceMotion: function (motionType) {
        this._motionType = motionType;
        if (this.battler()) {
            this.battler().forceMotion(motionType);
        }
    },
    spriteStepForward: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            this.battler().stepForward();
        }
    },
    spriteStepBack: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            this.battler().stepBack();
        }
    },
    spriteStepSubBack: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            this.battler().stepSubBack();
        }
    },
    spriteStepToSubstitute: function (target) {
        if ($gameSystem.isSideView() && this.battler()) {
            this.battler().stepToSubstitute(target);
        }
    },
    spriteStepFlinch: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            this.battler().stepFlinch();
        }
    },
    spriteReturnHome: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            this._flinched = false;
            this.spriteFaceForward();
            this.battler().stepBack();
            if (this.numActions() <= 0) {
                this.setActionState('undecided');
            }
            this.battler().refreshMotion();
        }
    },
    spritePosX: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            return this.battler().x;
        } else if (this.battler()) {
            return this.battler().x;
        } else {
            return 0;
        }
    },
    spritePosY: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            return this.battler().y;
        } else if (this.battler()) {
            return this.battler().y;
        } else {
            return 0;
        }
    },
    spriteHomeX: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            return this.battler()._homeX;
        } else {
            return 0;
        }
    },
    spriteHomeY: function () {
        if ($gameSystem.isSideView() && this.battler()) {
            return this.battler()._homeY;
        } else {
            return 0;
        }
    },
    setMirror: function (value) {
        if ($gameSystem.isSideView() && this.battler() && this.spriteCanMove()) {
            this.battler().setMirror(value);
        }
    },
    spriteFaceForward: function () {
        this.setMirror(false);
    },
    spriteFaceBackward: function () {
        this.setMirror(true);
    },
    spriteFaceTarget: function (target) {
        if (!target) return;
        var pointX = target.spritePosX();
        var pointY = target.spritePosY();
        this.spriteFacePoint(pointX, pointY);
    },
    spriteFaceAwayTarget: function (target) {
        if (!target) return;
        var pointX = target.spritePosX();
        var pointY = target.spritePosY();
        this.spriteFaceAwayPoint(pointX, pointY);
    },
    spriteFaceHome: function () {
        var pointX = this.spriteHomeX();
        var pointY = this.spriteHomeY();
        this.spriteFacePoint(pointX, pointY);
    },
    spriteFaceAwayHome: function () {
        var pointX = target.spriteHomeX();
        var pointY = target.spriteHomeY();
        this.spriteFaceAwayPoint(pointX, pointY);
    },
    forceMotionRefresh: function () {
        if (!$gameParty.inBattle()) return;
        if (this.battler()) this.battler().refreshMotion();
    },
    onTurnStart: function () {
        Yanfly.SCD.Game_Battler_onTurnStart.call(this);
        if (BattleManager.isTickBased() && !BattleManager.timeBasedCooldowns()) {
            this.updateCooldowns();
            this.updateWarmups();
        }
    },
    updateTick: function () {
        Yanfly.SCD.Game_Battler_updateTick.call(this);
        if (BattleManager.isTickBased() && BattleManager.timeBasedCooldowns()) {
            this.updateCooldownTicks();
            this.updateWarmupTicks();
        };
    },
    increaseSelfTurnCount: function () {
        if (this._selfTurnCount === undefined) this._selfTurnCount = 0;
        this._selfTurnCount += 1;
    },
    turnCount: function () {
        if (BattleManager.isTurnBased()) return $gameTroop.turnCount();
        if (BattleManager.isTickBased() && Yanfly.Param.BECAISelfTurn) {
            return this._selfTurnCount;
        }
        return $gameTroop.turnCount();
    },
    createActions: function () {
        if (this.currentAction()) return;
        this.makeActions();
    },
    canAddStateFreeTurn: function (stateId) {
        if (!$gameParty.inBattle()) return false;
        if (BattleManager._subject !== this) return false;
        if ($dataStates[stateId].autoRemovalTiming !== 1) return false;
        if (Imported.YEP_BuffsStatesCore) {
            if ($dataStates[stateId].reapplyRules === 0) return false;
        }
        return true;
    },
    setStateFreeTurn: function (stateId) {
        this._freeStateTurn = this._freeStateTurn || [];
        this._freeStateTurn.push(stateId);
    },
    idleMotion: function () {
        return 'walk';
    },
    deadMotion: function () {
        return 'dead';
    },
    sleepMotion: function () {
        return 'sleep';
    },
    chantMotion: function () {
        return 'chant';
    },
    guardMotion: function () {
        return 'guard';
    },
    abnormalMotion: function () {
        return 'abnormal';
    },
    dyingMotion: function () {
        return 'dying';
    },
    waitMotion: function () {
        return 'wait';
    },
    hasState: function (stateId) {
        return this.states().contains($dataStates[stateId]);
    },
    customEffectEval: function (stateId, type) {
        var state = $dataStates[stateId];
        if (!state) return;
        if (state.customEffectEval[type] === '') return;
        var a = this;
        var user = this;
        var target = this;
        var origin = this.stateOrigin(stateId);
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        var code = state.customEffectEval[type];
        try {
            eval(code);
        } catch (e) {
            Yanfly.Util.displayError(e, code,
                'CUSTOM STATE ' + stateId + ' CODE ERROR');
        }
    },
    addStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'addState');
    },
    removeStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'removeState');
        if ($gameTemp._customLeaveEffectEval) this.leaveStateEffects(stateId);
    },
    leaveStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'leaveState');
    },
    onTurnStartStateEffects: function () {
        var states = this.states();
        var length = states.length;
        for (var i = 0; i < length; ++i) {
            var state = states[i];
            if (state) this.turnStartStateEffects(state.id);
        }
    },
    turnStartStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'turnStartState');
    },
    onTurnEndStateEffects: function () {
        var states = this.states();
        var length = states.length;
        for (var i = 0; i < length; ++i) {
            var state = states[i];
            if (state) this.turnEndStateEffects(state.id);
        }
    },
    turnEndStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'turnEndState');
    },
    meetTurnEndStateEffectsConditions: function () {
        if (!$gameParty.inBattle()) return false;
        if (Imported.YEP_BattleEngineCore) {
            if (BattleManager.isTurnBased()) {
                return true;
            } else if (BattleManager.isTickBased() && !BattleManager.isTurnEnd()) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    },
    onRegenerateStateEffects: function () {
        var states = this.states();
        var length = states.length;
        for (var i = 0; i < length; ++i) {
            var state = states[i];
            if (state) this.regenerateStateEffects(state.id);
        }
    },
    regenerateStateEffects: function (stateId) {
        if ($gameParty.inBattle()) this.clearResult();
        var lifeState = this.isAlive();
        this.customEffectEval(stateId, 'regenerateState');
        if ($gameParty.inBattle() && this.isDead() && lifeState === true) {
            this.performCollapse();
        }
        if (!Imported.YEP_BattleEngineCore) return;
        if ($gameParty.inBattle()) this.startDamagePopup();
    },
    meetTurnStartStateEffectsConditions: function () {
        return true;
    },
    onActionStartStateEffects: function () {
        var states = this.states();
        var length = states.length;
        for (var i = 0; i < length; ++i) {
            var state = states[i];
            if (state) this.actionStartStateEffects(state.id);
        }
    },
    actionStartStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'actionStartState');
    },
    onActionEndStateEffects: function () {
        var states = this.states();
        var length = states.length;
        for (var i = 0; i < length; ++i) {
            var state = states[i];
            if (state) this.actionEndStateEffects(state.id);
        }
    },
    actionEndStateEffects: function (stateId) {
        this.customEffectEval(stateId, 'actionEndState');
    },
    spriteFloat: function (floatHeight, floatDuration) {
        if (!this.battler()) return;
        if (!this.spriteCanMove()) return;
        if (!$gameSystem.isSideView()) return;
        this.battler().setupFloat(floatHeight, floatDuration);
    },
    spriteJump: function (jumpHeight, jumpDuration) {
        if (!this.battler()) return;
        if (!this.spriteCanMove()) return;
        if (!$gameSystem.isSideView()) return;
        this.battler().setupJump(jumpHeight, jumpDuration);
    },
    spriteOpacity: function (opacity, duration) {
        if (!this.battler()) return;
        this.battler().setupOpacityChange(opacity, duration);
    },
    cameraPosX: function () {
        var value = this.spritePosX();
        return value;
    },
    cameraPosY: function () {
        var value = this.spritePosY();
        if (Imported.YEP_X_ActSeqPack2) {
            value -= this.battler().getFloatHeight() * this.spriteHeight();
            value -= this.battler().getJumpHeight() * this.spriteHeight();
        }
        return value;
    },
    onCTBStart: function () {
        this._ctbSpeed = eval(Yanfly.Param.CTBInitSpeed);
        this._ctbSpeed += BattleManager.ctbTarget() * this.ctbStartRate();
        this._ctbSpeed += this.ctbStartFlat();
        this._ctbCharge = 0;
        this._ctbCharging = false;
        this._ctbChargeMod = 0;
        this.applyPreemptiveBonusCTB();
        this.applySurpriseBonusCTB();
        this.refresh();
    },
    applyPreemptiveBonusCTB: function () {
        if (!BattleManager._preemptive) return;
        if (!this.isActor()) return;
        var rate = Yanfly.Param.CTBPreEmptive;
        this._ctbSpeed += rate * BattleManager.ctbTarget();
    },
    applySurpriseBonusCTB: function () {
        if (!BattleManager._surprise) return;
        if (!this.isEnemy()) return;
        var rate = Yanfly.Param.CTBSurprise;
        this._ctbSpeed += rate * BattleManager.ctbTarget();
    },
    ctbTicksToReady: function () {
        if (this._ctbTicksToReady !== undefined) return this._ctbTicksToReady;
        var goal = BattleManager.ctbTarget();
        if (this.isCTBCharging()) goal += this.ctbChargeDestination();
        goal -= this.ctbSpeed();
        goal -= (this.isCTBCharging()) ? this.ctbCharge() : 0;
        var rate = this.ctbSpeedTick();
        if (this.ctbTicksToReadyActionCheck()) {
            var item = this.ctbTicksToReadyActionCheck();
            if (item.speed < 0) goal -= item.speed;
        }
        this._ctbTicksToReady = goal / Math.max(1, rate);
        return this._ctbTicksToReady;
    },
    ctbTicksToReadyActionCheck: function () {
        if (!BattleManager.isInputting()) return false;
        if (BattleManager.actor() !== this) return false;
        var scene = SceneManager._scene;
        if (scene._skillWindow.active) {
            if (this._skillWindowIndex === scene._skillWindow.index()) {
                return this._skillWindowItem;
            }
            this._skillWindowIndex = scene._skillWindow.index();
            this._skillWindowItem = scene._skillWindow.item();
            return this._skillWindowItem;
        } else if (scene._itemWindow.active) {
            if (this._itemWindowIndex === scene._itemWindow.index()) {
                return this._itemWindowItem;
            }
            this._itemWindowIndex = scene._itemWindow.index();
            this._itemWindowItem = scene._itemWindow.item();
            return this._itemWindowItem;
        } else if (scene._actorCommandWindow.active) {
            if (this._commandWindowIndex === scene._actorCommandWindow.index()) {
                return this._commandWindowItem;
            }
            var win = scene._actorCommandWindow;
            var symbol = win.currentSymbol();
            this._commandWindowIndex = win.index();
            if (symbol === 'attack') {
                this._commandWindowItem = $dataSkills[this.attackSkillId()];
                return this._commandWindowItem;
            } else if (symbol === 'guard') {
                this._commandWindowItem = $dataSkills[this.guardSkillId()];
                return this._commandWindowItem;
            } else {
                this._commandWindowItem = undefined;
                return false;
            }
        }
        if (!this.currentAction()) return false;
        return this.currentAction().item();
    },
    ctbSpeed: function () {
        if (this.isDead()) return -1 * BattleManager.ctbTarget();
        if (this.isHidden()) return -1 * BattleManager.ctbTarget();
        if (this._ctbSpeed === undefined) this.onCTBStart();
        return this._ctbSpeed;
    },
    ctbRate: function () {
        if (this._ctbSpeed === undefined) this.onCTBStart();
        var rate = this._ctbSpeed / BattleManager.ctbTarget();
        return rate.clamp(0, 1);
    },
    isCTBCharging: function () {
        return this._ctbCharging;
    },
    setCTBCharging: function (value) {
        this._ctbCharging = value;
    },
    ctbCharge: function () {
        if (this._ctbCharge === undefined) this.onCTBStart();
        return this._ctbCharge;
    },
    ctbChargeDestination: function () {
        var denom = Math.max(1, -1 * this._ctbChargeMod);
        return denom;
    },
    ctbChargeRate: function () {
        if (this._ctbCharge === undefined) this.onCTBStart();
        if (!this.isCTBCharging()) return 0;
        var rate = this._ctbCharge / this.ctbChargeDestination();
        return rate.clamp(0, 1);
    },
    setCTBSpeed: function (value) {
        this._ctbSpeed = value;
    },
    setCTBCharge: function (value) {
        if (this.isCTBCharging()) this._ctbCharge = value;
    },
    setupCTBCharge: function () {
        if (BattleManager._subject !== this) return;
        if (BattleManager._bypassCtbEndTurn) return;
        if (!this.currentAction()) this.makeActions();
        if (this.currentAction()) {
            var item = this.currentAction().item();
            if (item && item.speed < 0) {
                this.setCTBCharging(true);
                this._ctbChargeMod = item.speed;
                this.setCTBCharge(0);
            } else if (!item) {
                this._ctbChargeMod = 0;
            } else {
                this._ctbChargeMod = 0;
            }
        } else {
            this._ctbChargeMod = 0;
        }
        this.setActionState('waiting');
    },
    updateCTB: function () {
        if (this.isDead()) return this.resetAllCTB();
        if (!this.canMove()) {
            this.updateCTBStates();
            return;
        }
        if (this.isCTBCharging()) {
            if (!this.currentAction()) this.resetAllCTB();
            if (this.currentAction() && this.currentAction().item() === null) {
                this.resetAllCTB();
            }
        }
        if (this.isCTBCharging()) {
            var value = this.ctbCharge() + this.ctbSpeedTick();
            this.setCTBCharge(value);
        } else if (this.ctbRate() < 1) {
            var value = this.ctbSpeed() + this.ctbSpeedTick();
            this.setCTBSpeed(value);
        }
    },
    updateCTBStates: function () {
        if (BattleManager.timeBasedBuffs()) return;
        for (var i = 0; i < this._states.length; ++i) {
            var stateId = this._states[i];
            var state = $dataStates[stateId];
            if (!state) continue;
            if (!this._stateTurns[stateId]) continue;
            if (state.restriction >= 4 && state.autoRemovalTiming !== 0) {
                var value = BattleManager.tickRate() / Yanfly.Param.BECTurnTime;
                this._stateTurns[stateId] -= value;
                if (this._stateTurns[stateId] <= 0) this.removeState(stateId);
            }
        }
    },
    resetAllCTB: function () {
        this._ctbCharge = 0;
        this._ctbChargeMod = 0;
        this._ctbCharging = false;
        this._ctbSpeed = 0;
        this.clearActions();
    },
    endTurnAllCTB: function () {
        this._ctbCharge = 0;
        this._ctbChargeMod = 0;
        this._ctbCharging = false;
        if (this.checkCTBEndInstantCast()) return;
        this.setEndActionCTBSpeed();
        this.clearActions();
        this.setActionState('undecided');
        if (this.battler()) this.battler().refreshMotion();
        if (BattleManager.isTickBased()) this.onTurnEnd();
    },
    checkCTBEndInstantCast: function () {
        if (!Imported.YEP_InstantCast) return false;
        var action = this.currentAction();
        if (!action) return false;
        var item = action.item();
        if (!item) return false;
        if (!this.isInstantCast(item)) return false;
        var length = BattleManager.allBattleMembers().length;
        for (var i = 0; i < length; ++i) {
            var member = BattleManager.allBattleMembers()[i];
            if (!member) continue;
            var max = member.ctbSpeed() + member.ctbCharge();
            this._ctbSpeed = Math.max(this._ctbSpeed, max);
        }
        this._ctbSpeed = Math.max(this._ctbSpeed, BattleManager.ctbTarget());
        this._ctbSpeed += 0.00000000001;
        return true;
    },
    ctbSpeedRate: function () {
        if (!this.canMove()) return 0;
        var base = this.paramBase(6) + this.paramPlus(6);
        if (base >= this.paramMax(6) && this.agi >= this.paramMax(6)) return 1;
        var rate = this.agi / base;
        return rate;
    },
    ctbSpeedTick: function () {
        var value = this.ctbTickValue();
        if (BattleManager.ctbRubberband()) {
            var min = BattleManager.ctbMinimumSpeed();
            var max = BattleManager.ctbMaximumSpeed();
            value = value.clamp(min, max);
            value += this.minorCTBOffset();
        }
        return value * BattleManager.tickRate();
    },
    ctbTickValue: function () {
        if (this._ctbTickValue !== undefined) return this._ctbTickValue;
        var a = this;
        var user = this;
        var subject = this;
        this._ctbTickValue = eval(Yanfly.Param.CTBPerTick);
        return this._ctbTickValue;
    },
    setEndActionCTBSpeed: function () {
        this._ctbSpeed = 0;
        var action = this.currentAction();
        if (!action) return;
        var item = action.item();;
        if (item) {
            if (item.afterCTBFlat !== undefined) this.setCTBSpeed(item.afterCTBFlat);
            if (item.afterCTBRate !== undefined) {
                this.setCTBSpeed(item.afterCTBRate * BattleManager.ctbTarget());
            }
            if (item.speed > 0) this._ctbSpeed += item.speed;
        }
        this._ctbSpeed += BattleManager.ctbTarget() * this.ctbTurnRate();
        this._ctbSpeed += this.ctbTurnFlat();
        if (item) this.afterCTBEval(item);
    },
    afterCTBEval: function (item) {
        if (!item) return;
        var a = this;
        var user = this;
        var skill = item;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        var speed = this._ctbSpeed;
        var max = BattleManager.ctbTarget();
        eval(item.ctbAfterEval);
        this.setCTBSpeed(speed);
    },
    minorCTBOffset: function () {
        var value = 0.00000000001;
        if (this.isActor()) value *= $gameParty.members().length - this.index();
        if (this.isEnemy()) value *= -1 * this.index();
        return value;
    },
    ctbTurnOrder: function () {
        var index = BattleManager.ctbTurnOrder().indexOf(this);
        return index;
    },
    ctbAlterTurnOrder: function (value) {
        var sign = (value > 0) ? 1 : -1;
        var max = BattleManager.ctbTurnOrder().length - 1;
        var index = this.ctbTurnOrder();
        index += value;
        index = index.clamp(0, max);
        var battler = BattleManager.ctbTurnOrder()[index];
        if (!battler) battler = this;
        var ticksTarget = battler.ctbTicksToReady();
        var ticksCurrent = this.ctbTicksToReady();
        var ticksChange = ticksTarget - ticksCurrent;
        ticksChange += sign * Math.abs(this.minorCTBOffset());
        this._ctbSpeed -= this.ctbSpeedTick() * ticksChange;
    },
    lifeSteal: function (damage, type, target, rate, flat) {
        if (!type) return;
        rate = 1 - (rate || 0);
        flat = flat || 0;
        rate *= 1 - this.getLifeStealRate(type + 'Rate', target);
        flat += this.getLifeStealFlat(type + 'Flat', target);
        if (Yanfly.Param.LSHPNeg) {
            var lifeSteal = Math.floor(damage * (1 - rate) + flat);
        } else {
            var lifeSteal = Math.max(0, Math.floor(damage * (1 - rate) + flat));
        }
        if (Yanfly.Param.LSHPOver) lifeSteal = Math.min(lifeSteal, damage);
        if (lifeSteal <= 0) return;
        this.gainHp(lifeSteal);
    },
    magicSteal: function (damage, type, target, rate, flat) {
        if (!type) return;
        rate = 1 - (rate || 0);
        flat = flat || 0;
        rate *= 1 - this.getLifeStealRate(type + 'Rate', target);
        flat += this.getLifeStealFlat(type + 'Flat', target);
        if (Yanfly.Param.LSMPNeg) {
            var lifeSteal = Math.floor(damage * (1 - rate) + flat);
        } else {
            var lifeSteal = Math.max(0, Math.floor(damage * (1 - rate) + flat));
        }
        if (Yanfly.Param.LSMPOver) lifeSteal = Math.min(lifeSteal, damage);
        if (lifeSteal <= 0) return;
        this.gainMp(lifeSteal);
    },
    getLifeStealRateEval: function (formula, target) {
        target = target || this;
        var rate = 0;
        var a = this;
        var user = this;
        var subject = this;
        var b = target;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        eval(formula);
        return rate;
    },
    getLifeStealFlatEval: function (formula, target) {
        target = target || this;
        var flat = 0;
        var a = this;
        var user = this;
        var subject = this;
        var b = target;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        eval(formula);
        return flat;
    },
    processDamageOverTimeStates: function () {
        if (!$gameParty.inBattle()) return;
        var result = JsonEx.makeDeepCopy(this._result);
        var states = this.states();
        while (states.length > 0) {
            var state = states.shift();
            if (state) {
                this.processDamageOverTimeStateEffect(state);
            }
        }
        this._result = result;
    },
    processDamageOverTimeStateEffect: function (state) {
        var stateId = state.id;
        var state = $dataStates[stateId];
        if (!state) return;
        if (state.dotFormula === '') return;
        var a = this.stateOrigin(stateId);
        var b = this;
        var user = this;
        var target = this;
        var origin = this.stateOrigin(stateId);
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        var healing = false;
        var variance = state.dotVariance;
        var element = state.dotElement;
        var code = state.dotFormula;
        try {
            eval(code);
            if (healing) {
                value = Math.abs(Math.max(0, value));
            } else {
                value = Math.abs(Math.max(0, value)) * -1;
            }
            value = this.applyDamageOverTimeVariance(value, variance);
            value = this.applyDamageOverTimeElement(value, element);
            value = Math.round(value);
            if (value !== 0) {
                this.clearResult();
                this.gainHp(value);
                this.startDamagePopup();
                if (state.dotAnimation > 0) {
                    this.startAnimation(state.dotAnimation);
                }
                if (this.isDead()) {
                    this.performCollapse();
                }
                this.clearResult();
            }
        } catch (e) {
            Yanfly.Util.displayError(e, code, 'CUSTOM DOT ' + stateId + ' CODE ERROR');
        }
    },
    applyDamageOverTimeVariance: function (damage, vari) {
        if (vari === 0) return damage;
        var variance = vari;
        var amp = Math.floor(Math.max(Math.abs(damage) * variance / 100, 0));
        var v = Math.randomInt(amp + 1) + Math.randomInt(amp + 1) - amp;
        return damage >= 0 ? damage + v : damage - v;
    },
    applyDamageOverTimeElement: function (damage, element) {
        if (element === 0) return damage;
        return damage * this.elementRate(element);
    },
    barrierPoints: function (turn) {
        this.initAbsorptionBarrier();
        if (turn < 0) {
            return this._permBarrier;
        } else if (turn >= 0) {
            this._turnBarrier[turn] = this._turnBarrier[turn] || 0;
            return this._turnBarrier[turn];
        }
        var value = this._permBarrier;
        var length = this._turnBarrier.length;
        for (var i = 0; i < length; ++i) {
            this._turnBarrier[i] = this._turnBarrier[i] || 0;
            value += this._turnBarrier[i];
        }
        return value;
    },
    barrierPointsTotal: function (turn) {
        this.initAbsorptionBarrier();
        var total = this._permBarrier || 0;
        var length = turn;
        for (var i = 0; i < length; ++i) {
            total += this._turnBarrier[i] || 0;
        }
        return total;
    },
    gainBarrier: function (value, turn) {
        this.initAbsorptionBarrier();
        value = Math.floor(value);
        if (turn > 0) {
            turn -= 1;
            this._turnBarrier[turn] = this._turnBarrier[turn] || 0;
            this._turnBarrier[turn] += value;
            this._turnBarrier[turn] = Math.max(0, this._turnBarrier[turn]);
        } else {
            this._permBarrier = this._permBarrier || 0;
            this._permBarrier += value;
            this._permBarrier = Math.max(0, this._permBarrier);
        }
        this._barrierAltered = true;
        this.refresh();
    },
    gainBarrierEval: function (formula, turn, user, target) {
        if (formula === '') return 0;
        this.initAbsorptionBarrier();
        value = 0;
        var a = user;
        var b = target;
        var subject = user;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        try {
            eval(formula);
        } catch (e) {
            Yanfly.Util.displayError(e, formula, 'GAIN BARRIER CUSTOM CODE ERROR');
        }
        value = Math.floor(value);
        return value;
    },
    loseBarrier: function (value, penRate, penFlat) {
        if (penRate === undefined) penRate = 1;
        if (penFlat === undefined) penFlat = 0;
        value = Math.ceil(value);
        if (value <= 0) return 0;
        this.initAbsorptionBarrier();
        var initValue = value;
        var result = JsonEx.makeDeepCopy(this._result);
        var calcValue = Math.ceil(value * penRate - penFlat);
        this._result = new Game_ActionResult();
        var length = this._turnBarrier.length;
        for (var i = 0; i < length; ++i) {
            this._turnBarrier[i] = this._turnBarrier[i] || 0;
            var reduction = Math.min(this._turnBarrier[i], calcValue);
            if (reduction > 0) {
                this._turnBarrier[i] -= reduction;
                this._result.hpDamage += reduction;
                value -= reduction;
                calcValue -= reduction;
            }
            if (value <= 0) break;
        }
        var reduction = Math.min(this._permBarrier, calcValue);
        if (reduction > 0) {
            this._permBarrier -= reduction;
            this._result.hpDamage += reduction;
            value -= reduction;
            calcValue -= reduction;
        }
        if (initValue !== value) {
            this._barrierAltered = true;
            this.startBarrierAnimation();
            if (Imported.YEP_BattleEngineCore) {
                this._result._barrierAffected = true;
                this._result.hpAffected = true;
                this.startDamagePopup();
            }
        }
        this._result = result;
        return value;
    },
    loseBarrierTurn: function (value, turn) {
        value = Math.abs(value);
        var barrierPoints = this.barrierPointsTotal(turn);
        var dmg = Math.min(value, barrierPoints);
        this.loseBarrier(dmg);
    },
    startBarrierAnimation: function () {
        if (this.barrierPoints() > 0) {
            if (Yanfly.Param.ABRAni1 > 0) this.startAnimation(Yanfly.Param.ABRAni1);
        } else {
            if (Yanfly.Param.ABRAni2 > 0) this.startAnimation(Yanfly.Param.ABRAni2);
        }
    },
    updateBarrierTurns: function () {
        this.initAbsorptionBarrier();
        if (this.barrierPoints() <= 0) return;
        this._turnBarrier.shift();
        this.initAbsorptionBarrier();
        this._barrierAltered = true;
        this.refresh();
    },
    getbarrierPenRateEval: function (f1, c1, c2, c3, c4) {
        if (f1 === '') return 0;
        var rate = 0;
        var item = c1;
        var skill = c1;
        var a = c2;
        var user = c2;
        var subject = c2;
        var b = c3;
        var target = c3;
        var value = c4;
        var damage = c4;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        try {
            eval(f1);
        } catch (e) {
            Yanfly.Util.displayError(e, f1, 'BARRIER PEN RATE CUSTOM CODE ERROR');
        }
        return rate;
    },
    getbarrierPenFlatEval: function (f1, c1, c2, c3, c4) {
        if (f1 === '') return 0;
        var flat = 0;
        var item = c1;
        var skill = c1;
        var a = c2;
        var user = c2;
        var subject = c2;
        var b = c3;
        var target = c3;
        var value = c4;
        var damage = c4;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        try {
            eval(f1);
        } catch (e) {
            Yanfly.Util.displayError(e, f1, 'BARRIER PEN FLAT CUSTOM CODE ERROR');
        }
        return flat;
    },
    makeOnBattleStartBarrierPoints: function () {
        var barriers = this.battleStartBarrierPoints();
        var length = barriers.length;
        for (var i = 0; i < length; ++i) {
            var value = barriers[i] || 0;
            this.gainBarrier(value, i);
        }
    },
    makeBattleStartBarrierPoints: function (array, obj) {
        if (obj.battleStartBarrierPoints !== undefined) {
            var length = obj.battleStartBarrierPoints.length;
            for (var i = 0; i < length; ++i) {
                var iteration = obj.battleStartBarrierPoints[i] || 0;
                array[i] = array[i] || 0;
                array[i] += iteration;
            }
        }
        if (obj.battleStartBarrierPointsEval !== undefined) {
            var length = obj.battleStartBarrierPointsEval.length;
            for (var i = 0; i < length; ++i) {
                var formula = obj.battleStartBarrierPointsEval[i] || '';
                array[i] = array[i] || 0;
                array[i] += this.makeBattleStartBarrierPointsEval(formula);
            }
        }
        return array;
    },
    makeBattleStartBarrierPointsEval: function (formula) {
        var value = 0;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        try {
            eval(formula);
        } catch (e) {
            Yanfly.Util.displayError(e, formula, 'BARRIER START CUSTOM CODE ERROR');
        }
        return value;
    },
    regenBarriers: function () {
        var barriers = this.getRegenBarriers();
        var length = barriers.length;
        for (var i = 0; i < length; ++i) {
            var value = barriers[i] || 0;
            this.gainBarrier(value, i);
        }
    },
    makeRegenBarrierPoints: function (array, obj) {
        if (obj.barrierRegen !== undefined) {
            var length = obj.barrierRegen.length;
            for (var i = 0; i < length; ++i) {
                var iteration = obj.barrierRegen[i] || 0;
                array[i] = array[i] || 0;
                array[i] += iteration;
            }
        }
        if (obj.barrierRegenEval !== undefined) {
            var length = obj.barrierRegenEval.length;
            for (var i = 0; i < length; ++i) {
                var formula = obj.barrierRegenEval[i] || '';
                array[i] = array[i] || 0;
                array[i] += this.makeBattleStartBarrierPointsEval(formula);
            }
        }
    },
    makeRegenBarrierPointsEval: function (formula) {
        var value = 0;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        try {
            eval(formula);
        } catch (e) {
            Yanfly.Util.displayError(e, formula, 'BARRIER REGEN CUSTOM CODE ERROR');
        }
        return value;
    },
    notetags: function () {
        if (this.isEnemy()) { return this.enemy().note.split(/[\r\n]+/) };
        if (this.isActor()) { return this.actor().note.split(/[\r\n]+/) };
    },
    checkHPGaugeNotes: function () {
        this.notetags().forEach(function (note) {
            if (note == "Hide HP") { this._ehpgauge[0] = false };
            var note_data = note.split(': ')
            if (note_data[0].toLowerCase() == "hp gauge offset") {
                var par = note_data[1].split(':');
                this._ehpgauge[1] = Number(par[0]);
                this._ehpgauge[2] = Number(par[1]);
            };
        }, this);
    },
    set_motion_data: function () {
        this.clear_action_data();
        this._motion_damage_duration = 0;
        this._motion_damage_xy = [0, 0];
        this._motion_idle_xy = [0, 0];
        this._motion_idle_scale = [1.00, 1.00];
        this._motion_idle_rotation = 0;
        this._motion_collapse_scale = [0, 0];
        this._motion_collapse_rotation = 0;
        this._motion_breath = [0, 0, 0, 1.03, 0, false];
        this._motion_fly = [0, 0, 0, 60, 0.35, false];
        this._motion_swing = [0, 0.003, 0.10, 60, 0.35, false];
    },
    clear_action_data: function () {
        this._motion_action_data = [0, 0, 0, 0];
        this._motion_action_xy = [0, 0];
        this._motion_action_scale = [0, 0];
        this._motion_action_rotation = 0;
        if (Imported.MOG_EnemyPoses && this._batPoses) { this._batPoses[2] = 1 };
    },
    is_motionActing: function () {
        return this._motion_action_data[0] != 0;
    },
    set_battler_motion_data: function () {
        for (var i = 0; i < this.notetags().length; i++) {
            if (this.notetags()[i] == "Breath Effect") { this._motion_breath[5] = true };
            if (this.notetags()[i] == "Float Effect") { this._motion_fly[5] = true };
            if (this.notetags()[i] == "Swing Effect") { this._motion_swing[5] = true };
        };
    },
    motion_Xaxis: function () {
        return this._motion_idle_xy[0] + this._motion_action_xy[0] + this._motion_damage_xy[0]
    },
    motion_Yaxis: function () {
        return this._motion_idle_xy[1] + this._motion_action_xy[1] + this._motion_damage_xy[1]
    },
    motion_ScaleX: function () {
        return this._motion_idle_scale[0] + this._motion_action_scale[0] + this._motion_collapse_scale[0];
    },
    motion_ScaleY: function () {
        return this._motion_idle_scale[1] + this._motion_action_scale[1] + this._motion_collapse_scale[1];
    },
    motion_rotation: function () {
        return this._motion_idle_rotation + this._motion_action_rotation + this._motion_collapse_rotation;
    },
    is_breath_mode: function () {
        return this._motion_breath[5];
    },
    is_fly_mode: function () {
        return this._motion_fly[5] == true;
    },
    is_swing_mode: function () {
        return this._motion_swing[5];
    },
    motion_shake: function () {
        this._motion_damage_duration = 30;
    },
    set_bmotion_action: function (item) {
        if (!item || !item.object()) { return };
        var item_notes = item.object().note.split(/[\r\n]+/);
        item_notes.forEach(function (note) {
            var note_data = note.split(': ')
            if (note_data[0].toLowerCase() == "motion action") {
                var par = note_data[1].split(':');
                this.clear_action_data();
                this._motion_action_data[0] = Number(par[0]);
            }
        }, this);
    },
    clearParamPlus: function () {
        this._paramPlus = [0, 0, 0, 0, 0, 0, 0, 0];
    },
    isStateAffected: function (stateId) {
        return this._states.contains(stateId);
    },
    isDeathStateAffected: function () {
        return this.isStateAffected(this.deathStateId());
    },
    deathStateId: function () {
        return 1;
    },
    isStateExpired: function (stateId) {
        return this._stateTurns[stateId] === 0;
    },
    updateStateTurns: function () {
        this.updateStateTurnEnd();
    },
    clearBuffs: function () {
        this._buffs = [0, 0, 0, 0, 0, 0, 0, 0];
        this._buffTurns = [0, 0, 0, 0, 0, 0, 0, 0];
    },
    eraseBuff: function (paramId) {
        this._buffs[paramId] = 0;
        this._buffTurns[paramId] = 0;
    },
    buffLength: function () {
        return this._buffs.length;
    },
    buff: function (paramId) {
        return this._buffs[paramId];
    },
    isBuffAffected: function (paramId) {
        return this._buffs[paramId] > 0;
    },
    isDebuffAffected: function (paramId) {
        return this._buffs[paramId] < 0;
    },
    isBuffOrDebuffAffected: function (paramId) {
        return this._buffs[paramId] !== 0;
    },
    isMaxBuffAffected: function (paramId) {
        var limit = Math.max(1, this.maxBuffLimit(paramId));
        var max = Yanfly.Param.BSCMaximumLimit;
        return this._buffs[paramId] === Math.min(limit, max);
    },
    isMaxDebuffAffected: function (paramId) {
        var limit = Math.min(-1, this.maxDebuffLimit(paramId));
        var max = Yanfly.Param.BSCMaximumLimit * -1;
        return this._buffs[paramId] === Math.max(limit, max);
    },
    increaseBuff: function (paramId) {
        if (!this.isMaxBuffAffected(paramId)) {
            this._buffs[paramId]++;
        }
    },
    decreaseBuff: function (paramId) {
        if (!this.isMaxDebuffAffected(paramId)) {
            this._buffs[paramId]--;
        }
    },
    overwriteBuffTurns: function (paramId, turns) {
        if (this._buffTurns[paramId] < turns) {
            this._buffTurns[paramId] = turns;
        }
    },
    isBuffExpired: function (paramId) {
        return this._buffTurns[paramId] === 0;
    },
    updateBuffTurns: function () {
        for (var i = 0; i < this._buffTurns.length; i++) {
            if (this._buffTurns[i] > 0) {
                this._buffTurns[i]--;
            }
        }
    },
    die: function () {
        Yanfly.CTB.Game_BattlerBase_die.call(this);
        if (BattleManager.isCTB() && $gameParty.inBattle()) this.resetAllCTB();
    },
    revive: function () {
        if (this._hp === 0) {
            this._hp = 1;
        }
    },
    states: function () {
        return this._states.map(function (id) {
            return $dataStates[id];
        });
    },
    stateIcons: function () {
        return this.states().map(function (state) {
            return state.iconIndex;
        }).filter(function (iconIndex) {
            return iconIndex > 0;
        });
    },
    buffIcons: function () {
        var icons = [];
        for (var i = 0; i < this._buffs.length; i++) {
            if (this._buffs[i] !== 0) {
                icons.push(this.buffIconIndex(this._buffs[i], i));
            }
        }
        return icons;
    },
    buffIconIndex: function (buffLevel, paramId) {
        if (buffLevel > 0) {
            var level = Math.min(buffLevel - 1, 1);
            return Game_BattlerBase.ICON_BUFF_START + (level) * 8 + paramId;
        } else if (buffLevel < 0) {
            var level = Math.min(-buffLevel - 1, 1);
            return Game_BattlerBase.ICON_DEBUFF_START + (level) * 8 + paramId;
        } else {
            return 0;
        }
    },
    allIcons: function () {
        return this.stateIcons().concat(this.buffIcons());
    },
    allTraits: function () {
        return this.traitObjects().reduce(function (r, obj) {
            return r.concat(obj.traits);
        }, []);
    },
    traits: function (code) {
        return this.allTraits().filter(function (trait) {
            return trait.code === code;
        });
    },
    traitsWithId: function (code, id) {
        return this.allTraits().filter(function (trait) {
            return trait.code === code && trait.dataId === id;
        });
    },
    traitsPi: function (code, id) {
        return this.traitsWithId(code, id).reduce(function (r, trait) {
            return r * trait.value;
        }, 1);
    },
    traitsSum: function (code, id) {
        return this.traitsWithId(code, id).reduce(function (r, trait) {
            return r + trait.value;
        }, 0);
    },
    traitsSumAll: function (code) {
        return this.traits(code).reduce(function (r, trait) {
            return r + trait.value;
        }, 0);
    },
    traitsSet: function (code) {
        return this.traits(code).reduce(function (r, trait) {
            return r.concat(trait.dataId);
        }, []);
    },
    paramMin: function (paramId) {
        if (paramId === 1) {
            return 0;   // MMP
        } else {
            return 1;
        }
    },
    paramRate: function (paramId) {
        return this.traitsPi(Game_BattlerBase.TRAIT_PARAM, paramId);
    },
    paramBuffRate: function (paramId) {
        if (this._cacheParamBuffRate === undefined) this._cacheParamBuffRate = {};
        if (this._cacheParamBuffRate[paramId] !== undefined) {
            return this._cacheParamBuffRate[paramId];
        }
        var code = Yanfly.Param.BSCBuffFormula;
        try {
            var rate = eval(code);
        } catch (e) {
            var rate = 1;
            Yanfly.Util.displayError(e, code, 'PARAM BUFF RATE FORMULA ERROR');
        }
        this._cacheParamBuffRate[paramId] = rate;
        return this._cacheParamBuffRate[paramId];
    },
    xparam: function (xparamId) {
        return this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);
    },
    sparam: function (sparamId) {
        return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
    },
    elementRate: function (elementId) {
        var rate = this.forcedElementRate(elementId);
        if (rate !== undefined) return rate;
        var result = Yanfly.Ele.Game_BtlrBase_elementRate.call(this, elementId);
        if (this.isAbsorbElement(elementId) && result > 0) {
            result = Math.min(result - 2.0, -0.01);
        }
        return result;
    },
    debuffRate: function (paramId) {
        return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId);
    },
    stateRate: function (stateId) {
        return this.traitsPi(Game_BattlerBase.TRAIT_STATE_RATE, stateId);
    },
    stateResistSet: function () {
        return this.traitsSet(Game_BattlerBase.TRAIT_STATE_RESIST);
    },
    isStateResist: function (stateId) {
        if (stateId === this.deathStateId() && this.isImmortal()) return true;
        return Yanfly.BEC.Game_BattlerBase_isStateResist.call(this, stateId);
    },
    attackStates: function () {
        return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_STATE);
    },
    attackStatesRate: function (stateId) {
        return this.traitsSum(Game_BattlerBase.TRAIT_ATTACK_STATE, stateId);
    },
    attackSpeed: function () {
        return this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_SPEED);
    },
    attackTimesAdd: function () {
        return Math.max(this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_TIMES), 0);
    },
    addedSkillTypes: function () {
        return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_ADD);
    },
    isSkillTypeSealed: function (stypeId) {
        return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_SEAL).contains(stypeId);
    },
    addedSkills: function () {
        return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_ADD);
    },
    isSkillSealed: function (skillId) {
        return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_SEAL).contains(skillId);
    },
    isEquipWtypeOk: function (wtypeId) {
        return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_WTYPE).contains(wtypeId);
    },
    isEquipAtypeOk: function (atypeId) {
        return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_ATYPE).contains(atypeId);
    },
    isEquipTypeLocked: function (etypeId) {
        return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_LOCK).contains(etypeId);
    },
    isEquipTypeSealed: function (etypeId) {
        return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_SEAL).contains(etypeId);
    },
    slotType: function () {
        var set = this.traitsSet(Game_BattlerBase.TRAIT_SLOT_TYPE);
        return set.length > 0 ? Math.max.apply(null, set) : 0;
    },
    isDualWield: function () {
        return this.slotType() === 1;
    },
    actionPlusSet: function () {
        return this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map(function (trait) {
            return trait.value;
        });
    },
    specialFlag: function (flagId) {
        return this.traits(Game_BattlerBase.TRAIT_SPECIAL_FLAG).some(function (trait) {
            return trait.dataId === flagId;
        });
    },
    collapseType: function () {
        var set = this.traitsSet(Game_BattlerBase.TRAIT_COLLAPSE_TYPE);
        return set.length > 0 ? Math.max.apply(null, set) : 0;
    },
    partyAbility: function (abilityId) {
        return this.traits(Game_BattlerBase.TRAIT_PARTY_ABILITY).some(function (trait) {
            return trait.dataId === abilityId;
        });
    },
    isAutoBattle: function () {
        return this.specialFlag(Game_BattlerBase.FLAG_ID_AUTO_BATTLE);
    },
    isGuard: function () {
        return this.specialFlag(Game_BattlerBase.FLAG_ID_GUARD) && this.canMove();
    },
    isSubstitute: function () {
        return this.specialFlag(Game_BattlerBase.FLAG_ID_SUBSTITUTE) && this.canMove();
    },
    isPreserveTp: function () {
        return this.specialFlag(Game_BattlerBase.FLAG_ID_PRESERVE_TP);
    },
    addParam: function (paramId, value) {
        this._paramPlus[paramId] += value;
        this.refresh();
    },
    setHp: function (hp) {
        this._hp = hp;
        this.refresh();
    },
    setMp: function (mp) {
        this._mp = mp;
        this.refresh();
    },
    setTp: function (tp) {
        this._tp = tp;
        this.refresh();
    },
    maxTp: function () {
        return 100;
    },
    hpRate: function () {
        return this.hp / this.mhp;
    },
    mpRate: function () {
        return this.mmp > 0 ? this.mp / this.mmp : 0;
    },
    tpRate: function () {
        return this.tp / this.maxTp();
    },
    hide: function () {
        this._hidden = true;
    },
    appear: function () {
        Yanfly.CTB.Game_BattlerBase_appear.call(this);
        if (BattleManager.isCTB() && this.isEnemy()) {
            BattleManager.redrawCTBIcons();
        }
    },
    isHidden: function () {
        return this._hidden;
    },
    isAppeared: function () {
        return !this.isHidden();
    },
    isDead: function () {
        return this.isAppeared() && this.isDeathStateAffected();
    },
    isAlive: function () {
        return this.isAppeared() && !this.isDeathStateAffected();
    },
    isDying: function () {
        return this.isAlive() && this._hp < this.mhp / 4;
    },
    isRestricted: function () {
        return this.isAppeared() && this.restriction() > 0;
    },
    canInput: function () {
        return this.isAppeared() && !this.isRestricted() && !this.isAutoBattle();
    },
    canMove: function () {
        return this.isAppeared() && this.restriction() < 4;
    },
    isConfused: function () {
        return this.isAppeared() && this.restriction() >= 1 && this.restriction() <= 3;
    },
    confusionLevel: function () {
        return this.isConfused() ? this.restriction() : 0;
    },
    isEnemy: function () {
        return false;
    },
    sortStates: function () {
        this._states.sort(function (a, b) {
            var p1 = $dataStates[a].priority;
            var p2 = $dataStates[b].priority;
            if (p1 !== p2) {
                return p2 - p1;
            }
            return a - b;
        });
    },
    restriction: function () {
        return Math.max.apply(null, this.states().map(function (state) {
            return state.restriction;
        }).concat(0));
    },
    addNewState: function (stateId) {
        _alias_mog_bhud_addNewState.call(this, stateId);
        this.need_refresh_bhud_states = true;
    },
    mostImportantStateText: function () {
        var states = this.states();
        for (var i = 0; i < states.length; i++) {
            if (states[i].message3) {
                return states[i].message3;
            }
        }
        return '';
    },
    stateMotionIndex: function () {
        var states = this.states();
        if (states.length > 0) {
            return states[0].motion;
        } else {
            return 0;
        }
    },
    stateOverlayIndex: function () {
        var states = this.states();
        if (states.length > 0) {
            return states[0].overlay;
        } else {
            return 0;
        }
    },
    skillMpCost: function (skill) {
        var cost = skill.mpCost;
        var item = skill;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        cost += this.mmp * skill.mpCostPer;
        eval(skill.mpCostEval);
        return Math.max(0, Math.floor(cost * this.mcr));
    },
    skillTpCost: function (skill) {
        var cost = skill.tpCost;
        var item = skill;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        cost += this.maxTp() * skill.tpCostPer;
        eval(skill.tpCostEval);
        return Math.max(0, Math.floor(cost));
    },
    canPaySkillCost: function (skill) {
        if (!this.canPaySkillHpCost(skill)) return false;
        return Yanfly.Skill.Game_BattlerBase_canPaySkillCost.call(this, skill);
    },
    paySkillCost: function (skill) {
        Yanfly.SCD.Game_BattlerBase_paySkillCost.call(this, skill);
        this.payGlobalCooldown(skill);
        this.payStypeCooldownCost(skill);
        this.payCooldownCost(skill);
        this.applyCooldownMods(skill);
    },
    isOccasionOk: function (item) {
        if ($gameParty.inBattle()) {
            return item.occasion === 0 || item.occasion === 1;
        } else {
            return item.occasion === 0 || item.occasion === 2;
        }
    },
    meetsUsableItemConditions: function (item) {
        return this.canMove() && this.isOccasionOk(item);
    },
    meetsSkillConditions: function (skill) {
        if (this.cooldown(skill.id) > 0) return false;
        if (this.warmup(skill.id) > 0) return false;
        return Yanfly.SCD.Game_BattlerBase_meetsSkillConditions.call(this, skill);
    },
    meetsItemConditions: function (item) {
        return this.meetsUsableItemConditions(item) && $gameParty.hasItem(item);
    },
    canUse: function (item) {
        if (!item) {
            return false;
        } else if (DataManager.isSkill(item)) {
            return this.meetsSkillConditions(item);
        } else if (DataManager.isItem(item)) {
            return this.meetsItemConditions(item);
        } else {
            return false;
        }
    },
    canEquip: function (item) {
        if (!item) {
            return false;
        } else if (DataManager.isWeapon(item)) {
            return this.canEquipWeapon(item);
        } else if (DataManager.isArmor(item)) {
            return this.canEquipArmor(item);
        } else {
            return false;
        }
    },
    canEquipWeapon: function (item) {
        return this.isEquipWtypeOk(item.wtypeId) && !this.isEquipTypeSealed(item.etypeId);
    },
    canEquipArmor: function (item) {
        return this.isEquipAtypeOk(item.atypeId) && !this.isEquipTypeSealed(item.etypeId);
    },
    attackSkillId: function () {
        return 1;
    },
    guardSkillId: function () {
        return 2;
    },
    canAttack: function () {
        return this.canUse($dataSkills[this.attackSkillId()]);
    },
    canGuard: function () {
        return this.canUse($dataSkills[this.guardSkillId()]);
    },
    requestStatusRefresh: function () {
        this._statusRefreshRequested = true;
    },
    isStatusRefreshRequested: function () {
        return this._statusRefreshRequested;
    },
    completetStatusRefreshRequest: function () {
        this._statusRefreshRequested = false;
    },
    updateStateTicks: function () {
        $gameTemp._customLeaveEffectEval = true;
        Yanfly.BSC.Game_BattlerBase_updateStateTicks.call(this);
        $gameTemp._customLeaveEffectEval = undefined;
    },
    isBypassUpdateTurns: function () {
        if ($gameTroop.isEventRunning()) return true;
        return false;
    },
    updateStateTurnTiming: function (timing) {
        $gameTemp._customLeaveEffectEval = true;
        Yanfly.BSC.Game_BattlerBase_updateStateTurnTiming.call(this, timing);
        $gameTemp._customLeaveEffectEval = undefined;
    },
    updateStateActionStart: function () {
        this.updateStateTurnTiming(3);
    },
    updateStateActionEnd: function () {
        this.updateStateTurnTiming(1);
    },
    updateStateTurnStart: function () {
        this.updateStateTurnTiming(4);
    },
    updateStateTurnEnd: function () {
        this.updateStateTurnTiming(2);
    },
    updateBuffTicks: function () {
        var needRefresh = false;
        for (var i = 0; i < this._buffTurns.length; i++) {
            if (this._buffTurns[i] <= 0) continue;
            var value = BattleManager.tickRate() / Yanfly.Param.BECTurnTime;
            var shown1 = Math.ceil(this._buffTurns[i]);
            this._buffTurns[i] -= value;
            var shown2 = Math.ceil(this._buffTurns[i]);
            if (shown1 !== shown2) needRefresh = true;
            if (this._buffTurns[i] <= 0) this.removeBuff(i);
        }
        if (needRefresh) this.refresh();
    },
    timedTick: function () {
        return 1 * BattleManager.tickRate();
    },
    isImmortal: function () {
        return this._immortalState;
    },
    stateOrigin: function (stateId) {
        if (this._stateOrigin === undefined) this._stateOrigin = {};
        if (!this._stateOrigin[stateId]) return this;
        var arr = this._stateOrigin[stateId];
        if (arr[0] === 0) return $gameActors.actor(arr[1]);
        if (arr[0] === 1) return $gameTroop.members()[arr[1]];
        return this;
    },
    setStateOrigin: function (stateId, battler) {
        if (this._stateOrigin === undefined) this._stateOrigin = {};
        if (!$gameParty.inBattle()) return;
        if (!battler) {
            var battler = BattleManager._subject;
            if (!battler) return;
        }
        if (battler.isActor()) {
            var arr = [0, battler._actorId];
        } else {
            var arr = [1, battler.index()];
        }
        this._stateOrigin[stateId] = arr;
    },
    clearStateOrigin: function (stateId) {
        if (this._stateOrigin === undefined) this._stateOrigin = {};
        this._stateOrigin[stateId] = undefined;
    },
    clearEnemyStateOrigins: function () {
        var length = $dataStates.length;
        for (var i = 0; i < length; ++i) {
            if (this._stateOrigin === undefined) this._stateOrigin = {};
            if (this._stateOrigin[i] === undefined) continue;
            var data = this._stateOrigin[i];
            if (data[0] === 1) this.clearStateOrigin(i);
        }
    },
    stateTurns: function (stateId) {
        return this._stateTurns[stateId];
    },
    setStateTurns: function (stateId, turns) {
        if (Imported.YEP_BattleEngineCore && !Yanfly.Param.BECTimeStates) {
            turns = Math.floor(turns);
        }
        this._stateTurns[stateId] = turns;
    },
    buffTurns: function (paramId) {
        return this._buffTurns[paramId];
    },
    setBuffTurns: function (paramId, turns) {
        if (Imported.YEP_BattleEngineCore && !Yanfly.Param.BECTimeBuffs) {
            turns = Math.floor(turns);
        }
        this._buffTurns[paramId] = turns;
    },
    initStateCounter: function () {
        this._stateCounter = {};
    },
    clearStateCounters: function () {
        this._stateCounter = {};
    },
    setStateCounter: function (stateId, value) {
        if (this._stateCounter === undefined) this.initStateCounter();
        this._stateCounter[stateId] = value;
        this.refresh();
    },
    addStateCounter: function (stateId, value) {
        if (this._stateCounter === undefined) this.initStateCounter();
        this.setStateCounter(stateId, value + (this.getStateCounter(stateId) || 0));
    },
    clampStateCounter: function (stateId, min, max) {
        var value = this.getStateCounter(stateId).clamp(min, max);
        this.setStateCounter(stateId, value);
    },
    removeStateCounter: function (stateId) {
        if (this._stateCounter === undefined) this.initStateCounter();
        this._stateCounter[stateId] = undefined;
    },
    getStateCounter: function (stateId) {
        if (this._stateCounter === undefined) this.initStateCounter();
        return this._stateCounter[stateId];
    },
    statesAndBuffs: function () {
        var group = this.states();
        var length = group.length;
        var array = [];
        for (var i = 0; i < length; ++i) {
            var state = group[i];
            if (state && state.iconIndex > 0) array.push(state);
        }
        for (var i = 0; i < 8; ++i) {
            if (this._buffs[i]) array.push(i);
        }
        return array;
    },
    clearCTBCommandWindowCache: function () {
        this._commandWindowIndex = undefined;
        this._commandWindowItem = undefined;
        this._skillWindowIndex = undefined;
        this._skillWindowItem = undefined;
        this._itemWindowIndex = undefined;
        this._itemWindowItem = undefined;
    },
    noHiddenSkillConditionsMet: function (skill) {
        if (!skill) return false;
        if (this.isEnemy()) return true;
        if (skill.hideIfLearnedSkill) {
            for (var i = 0; i < skill.hideIfLearnedSkill.length; ++i) {
                var skillId = skill.hideIfLearnedSkill[i];
                if (this.isLearnedSkill(skillId)) return false;
            }
        }
        if (skill.hideInBattle && $gameParty.inBattle()) return false;
        if (skill.hideInField && !$gameParty.inBattle()) return false;
        if (!this.meetsCustomShowEval(skill)) return false;
        return true;
    },
    meetsCustomShowEval: function (skill) {
        if (skill.costShowEval === '') return true;
        var visible = true;
        var item = skill;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        eval(skill.costShowEval);
        return visible;
    },
    meetsSkillConditionsEval: function (skill) {
        if (skill.requireEval === '') return true;
        var value = true;
        var item = skill;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        eval(skill.requireEval);
        return value;
    },
    skillHpCost: function (skill) {
        var cost = skill.hpCost;
        var item = skill;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        cost += this.mhp * skill.hpCostPer;
        eval(skill.hpCostEval);
        return Math.max(0, Math.floor(cost));
    },
    canPaySkillHpCost: function (skill) {
        var cost = this.skillHpCost(skill);
        if (cost <= 0) return true;
        return this._hp > cost;
    },
    paySkillHpCost: function (skill) {
        this._hp -= this.skillHpCost(skill);
    },
    paySkillEvalCost: function (skill) {
        if (skill.executeEval === '') return;
        var item = skill;
        var a = this;
        var user = this;
        var subject = this;
        var s = $gameSwitches._data;
        var v = $gameVariables._data;
        eval(skill.executeEval);
    },
    clearCooldowns: function () {
        this._cooldownTurns = {};
    },
    clearWarmups: function () {
        this._warmupTurns = {};
    },
    cooldown: function (skillId) {
        if (this._cooldownTurns === undefined) this.clearCooldowns();
        if (this._cooldownTurns[skillId] === undefined) {
            this._cooldownTurns[skillId] = 0;
        }
        return this._cooldownTurns[skillId];
    },
    warmup: function (skillId) {
        if (this._warmupTurns === undefined) this.clearWarmups();
        if (this._warmupTurns[skillId] === undefined) {
            this._warmupTurns[skillId] = 0;
        }
        return this._warmupTurns[skillId];
    },
    setCooldown: function (skillId, value) {
        if (!$dataSkills[skillId]) return;
        if ($dataSkills[skillId].bypassCooldown) return;
        if (this._cooldownTurns === undefined) this.clearCooldowns();
        this._cooldownTurns[skillId] = value;
    },
    addCooldown: function (skillId, value) {
        if (!$dataSkills[skillId]) return;
        if ($dataSkills[skillId].bypassCooldown) return;
        if (this._cooldownTurns === undefined) this.clearCooldowns();
        if (!this._cooldownTurns[skillId]) this._cooldownTurns[skillId] = 0;
        this._cooldownTurns[skillId] += value;
    },
    setWarmup: function (skillId, value) {
        if (!$dataSkills[skillId]) return;
        if ($dataSkills[skillId].bypassCooldown) return;
        if (this._warmupTurns === undefined) this.clearWarmups();
        this._warmupTurns[skillId] = value;
    },
    startWarmups: function () {
        if (this._warmupTurns === undefined) this.clearWarmups();
        for (var i = 0; i < this.skills().length; ++i) {
            var skill = this.skills()[i];
            if (!skill) continue;
            var warmup = skill.warmup;
            if (skill.warmupEval.length > 0) {
                var item = skill;
                var a = this;
                var user = this;
                var subject = this;
                var s = $gameSwitches._data;
                var v = $gameVariables._data;
                eval(skill.warmupEval);
            }
            warmup *= this.cooldownDuration(skill);
            warmup += this.getWarmupMods(skill);
            this.setWarmup(skill.id, warmup);
        }
    },
    updateCooldowns: function () {
        if (this._cooldownTurns === undefined) this.clearCooldowns();
        for (var skillId in this._cooldownTurns) {
            var skill = $dataSkills[skillId];
            if (!skill) continue;
            this._cooldownTurns[skillId] -= this.cooldownRate(skill);
        }
    },
    updateWarmups: function () {
        if (this._warmupTurns === undefined) this.clearWarmups();
        for (var skillId in this._warmupTurns) {
            var skill = $dataSkills[skillId];
            if (!skill) continue;
            this._warmupTurns[skillId] -= this.cooldownRate(skill);
        }
    },
    cooldownRateTick: function (skill) {
        this._cooldownTickRate = this._cooldownTickRate || {};
        if (!this._cooldownTickRate[skill.id]) {
            this._cooldownTickRate[skill.id] = this.cooldownRate(skill);
        }
        var rate = this._cooldownTickRate[skill.id];
        rate *= BattleManager.tickRate() / Yanfly.Param.CDTurnTime;
        return rate;
    },
    updateCooldownTicks: function () {
        if (this._cooldownTurns === undefined) this.clearCooldowns();
        for (var skillId in this._cooldownTurns) {
            var skill = $dataSkills[skillId];
            if (!skill) continue;
            if (this._cooldownTurns[skillId] <= 0) continue;
            this._cooldownTurns[skillId] -= this.cooldownRateTick(skill);
            this._cooldownTurns[skillId] = Math.max(0, this._cooldownTurns[skillId]);
        }
    },
    updateWarmupTicks: function () {
        if (this._warmupTurns === undefined) this.clearWarmups();
        for (var skillId in this._warmupTurns) {
            var skill = $dataSkills[skillId];
            if (!skill) continue;
            if (this._warmupTurns[skillId] <= 0) continue;
            this._warmupTurns[skillId] -= this.cooldownRateTick(skill);
            this._warmupTurns[skillId] = Math.max(0, this._warmupTurns[skillId]);
        }
    },
    payGlobalCooldown: function (mainSkill) {
        for (var i = 0; i < this.skills().length; ++i) {
            var skill = this.skills()[i];
            if (!skill) continue;
            var value = mainSkill.globalCooldown;
            value *= this.cooldownDuration(mainSkill);
            value = Math.max(value, this.cooldown(skill.id));
            this.setCooldown(skill.id, value);
        }
    },
    payStypeCooldownCost: function (mainSkill) {
        for (var stypeId in mainSkill.stypeCooldown) {
            stypeId = parseInt(stypeId);
            for (var i = 0; i < this.skills().length; ++i) {
                var skill = this.skills()[i];
                if (!skill) continue;
                if (skill.stypeId !== stypeId) continue;
                var value = mainSkill.stypeCooldown[stypeId];
                value *= this.cooldownDuration(mainSkill);
                value = Math.max(value, this.cooldown(skill.id));
                this.setCooldown(skill.id, value);
            }
        }
    },
    payCooldownCost: function (skill) {
        for (var skillId in skill.cooldown) {
            skillId = parseInt(skillId);
            if (!$dataSkills[skillId]) continue;
            var cooldown = skill.cooldown[skillId];
            if (skill.id === skillId) {
                if (skill.cooldownEval.length > 0) {
                    var item = skill;
                    var a = this;
                    var user = this;
                    var subject = this;
                    var s = $gameSwitches._data;
                    var v = $gameVariables._data;
                    eval(skill.cooldownEval);
                }
            }
            cooldown *= this.cooldownDuration(skill);
            cooldown = Math.max(cooldown, this.cooldown(skillId));
            this.setCooldown(skillId, cooldown);
        }
    },
    endBattleCooldowns: function () {
        this.resetCooldownTickRates();
        for (var skillId in this._cooldownTurns) {
            this._cooldownTurns[skillId] += $dataSkills[skillId].afterBattleCooldown;
        }
    },
    resetCooldownTickRates: function () {
        this._cooldownTickRate = {};
    },
    updateCooldownSteps: function () {
        for (var skillId in this._cooldownTurns) {
            var skill = $dataSkills[skillId];
            if (skill) {
                if ($gameParty.steps() % skill.cooldownSteps === 0) {
                    this._cooldownTurns[skillId] -= this.cooldownRate(skill);
                }
            }
        }
    },
    applyCooldownEffect: function (skill) {
        this.applyGlobalCooldownChange(skill);
        this.applyStypeCooldownChange(skill);
        this.applyCooldownChange(skill);
    },
    applyCooldownChange: function (skill) {
        for (var skillId in skill.cooldownChange) {
            skillId = parseInt(skillId);
            if (!$dataSkills[skillId]) continue;
            if (!skill.cooldownChange[skillId]) continue;
            var value = skill.cooldownChange[skillId];
            this.addCooldown(skillId, value);
        }
    },
    applyStypeCooldownChange: function (mainSkill) {
        for (var stypeId in mainSkill.stypeCooldownChange) {
            stypeId = parseInt(stypeId);
            for (var i = 0; i < this.skills().length; ++i) {
                var skill = this.skills()[i];
                if (!skill) continue;
                if (skill.stypeId !== stypeId) continue;
                if (!mainSkill.stypeCooldownChange[stypeId]) continue;
                var value = mainSkill.stypeCooldownChange[stypeId];
                this.addCooldown(skill.id, value);
            }
        }
    },
    applyGlobalCooldownChange: function (mainSkill) {
        for (var i = 0; i < this.skills().length; ++i) {
            var skill = this.skills()[i];
            if (!skill) continue;
            var value = mainSkill.globalCooldownChange;
            this.addCooldown(skill.id, value);
        }
    },
    getWarmupMods: function (skill) {
        var value = 0;
        value += this.flatWarmupChange(skill);
        return value;
    },
    applyCooldownMods: function (skill) {
        var value = this.cooldown(skill.id);
        value += this.flatCooldownChange(skill);
        this.setCooldown(skill.id, Math.max(0, value));
    },
    getObjElementReflectRate: function (obj, elementId) {
        if (!obj) return 0;
        if (!obj.elementReflect) return 0;
        return obj.elementReflect[elementId] || 0;
    },
    getObjElementAmplifyRate: function (obj, elementId) {
        if (!obj) return 0;
        if (!obj.elementAmplify) return 0;
        return obj.elementAmplify[elementId] || 0;
    },
    getObjElementMagnifyRate: function (obj, elementId) {
        if (!obj) return 0;
        if (!obj.elementMagnify) return 0;
        return obj.elementMagnify[elementId] || 0;
    },
    getObjElementForcedRate: function (obj, elementId) {
        if (!obj) return undefined;
        if (!obj.elementForcedRate) return undefined;
        return obj.elementForcedRate[elementId] || undefined;
    },
    clearAbsorptionBarrier: function () {
        this._turnBarrier = [];
        this._permBarrier = 0;
    },
    initAbsorptionBarrier: function () {
        this._turnBarrier = this._turnBarrier || [];
        this._permBarrier = this._permBarrier || 0;
    }

}