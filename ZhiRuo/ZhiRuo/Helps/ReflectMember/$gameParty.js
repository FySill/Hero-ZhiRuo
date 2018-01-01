var $gameParty = {
    _inBattle: false,
    _gold: 8500000,
    _steps: 7221, //阅历
    _lastItem: {
        _dataClass: "item",
        _itemId: 126,
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
    _menuActorId: 1,
    _targetActorId: 1,
    _actors: [1, 17, 29, 31],
    _items: {
        7: 1,
        9: 9,
        10: 9,
        15: 1,
        17: 1,
        19: 9,
        20: 1,
        28: 1,
        29: 3,
        60: 3,
        98: 1,
        99: 500,
        100: 500,
        101: 120,
        103: 3,
        105: 5,
        106: 205,
        126: 5,
        164: 9,
        171: 1,
        172: 1,
        173: 1,
        174: 1,
        175: 1,
        176: 1,
        177: 1,
        178: 1,
        179: 1,
        181: 1,
        186: 9,
        189: 1,
        193: 3,
        200: 9,
        201: 9,
        202: 1,
        211: 1,
        212: 1,
        214: 1,
        218: 1,
        229: 9,
        241: 1,
        292: 7,
        293: 5,
        294: 5,
        295: 7,
        296: 5,
        297: 3,
        298: 3,
        299: 4,
        300: 5,
        307: 1,
        321: 1,
        372: 1,

    },
    _weapons: {
        3001: 1,
        3003: 1,
        3006: 1,
        3008: 1,
        3009: 1,
        3010: 1,
        3011: 1,
        3013: 1,
        3014: 1,
        3015: 1,
        3016: 1,
        3017: 1,
        3018: 1,
        3019: 1,
        3020: 1,
        3021: 1,
        3022: 1,
        3023: 1,
        3024: 1,
        3025: 1,
        3026: 1,
        3027: 1,
        3028: 1,
        3030: 1,
        3031: 1,
        3032: 1,
        3033: 1,
        3034: 1,
        3035: 1,
        3036: 1,
        3037: 1,
        3038: 1,
        3039: 1,
        3040: 1,
        3041: 1,
        3042: 1,
        3043: 1,
        3044: 1,
        3045: 1,
        3046: 1,
        3047: 1,
        3048: 1,
        3049: 1,
        3050: 1,
        3051: 1,
        3052: 1,
        3053: 1,
        3054: 1,
        3055: 1,
        3056: 1,
        3057: 1,
        3058: 1,
        3059: 1,
        3060: 1,
        3061: 1,
        3062: 1,
        3063: 1,
        3064: 1,
        3065: 1,
        3066: 1,
        3067: 1,
        3068: 1,
        3069: 1,
        3070: 1,
        3071: 1,
        3072: 1,
        3073: 1,
        3074: 1,
        3075: 1,
        3076: 1,
        3077: 1,
        3078: 1,
        3079: 1,
        3081: 1,
        3082: 1,
        3083: 1,
        3084: 1,
        3085: 1,
        3086: 1,
        3087: 1,
        3088: 1,
        3089: 1,
        3091: 1,
        3092: 1,
        3093: 1,
        3094: 1,
        3095: 1,
        3096: 1,
        3097: 1,
        3100: 1,
        3101: 1,
        3102: 1,
        3103: 1,
        3105: 1,
        3106: 1,
        3107: 1,
        3109: 1,
        3110: 1,
        3111: 1,
        3113: 1,
        3114: 1,
        3115: 1,
        3116: 1,
        3117: 1,
        3118: 1,
        3120: 1,
        3121: 1,
        3122: 1,
        3123: 1,
        3124: 1,
        3125: 1,
        3126: 1,
        3127: 1,
        3128: 1,
        3129: 1,
        3130: 1,
        3131: 1,
        3132: 1,
        3133: 1,
        3134: 1,
        3135: 1,

    },
    _armors: {
        3004: 1,
        3127: 1,
        3128: 1,
        3129: 1,
        3130: 1,
        3131: 1,
        3132: 1,
        3133: 1,
        3134: 1,
        3135: 1,
        3136: 1,
        3137: 1,
        3138: 1,
        3141: 1,
        3142: 1,
        3143: 1,

    },
    '@': "Game_Party",
    constructor: function Game_Party() {
        this.initialize.apply(this, arguments);
    },
    initialize: function () {
        Game_Unit.prototype.initialize.call(this);
        this._gold = 0;
        this._steps = 0;
        this._lastItem = new Game_Item();
        this._menuActorId = 0;
        this._targetActorId = 0;
        this._actors = [];
        this.initAllItems();
    },
    initAllItems: function () {
        this._items = {};
        this._weapons = {};
        this._armors = {};
    },
    exists: function () {
        return this._actors.length > 0;
    },
    size: function () {
        return this.members().length;
    },
    isEmpty: function () {
        return this.size() === 0;
    },
    members: function () {
        return this.inBattle() ? this.battleMembers() : this.allMembers();
    },
    allMembers: function () {
        return this._actors.map(function (id) {
            return $gameActors.actor(id);
        });
    },
    battleMembers: function () {
        return this.allMembers().slice(0, this.maxBattleMembers()).filter(function (actor) {
            return actor.isAppeared();
        });
    },
    maxBattleMembers: function () {
        return Math.max(Moghunter.bhud_max_battle_members, 1);
    },
    leader: function () {
        return this.battleMembers()[0];
    },
    reviveBattleMembers: function () {
        this.battleMembers().forEach(function (actor) {
            if (actor.isDead()) {
                actor.setHp(1);
            }
        });
    },
    items: function () {
        var results = Yanfly.Item.Game_Party_items.call(this);
        results.sort(this.independentItemSort);
        return results;
    },
    weapons: function () {
        var results = Yanfly.Item.Game_Party_weapons.call(this);
        results.sort(this.independentItemSort);
        return results;
    },
    armors: function () {
        var results = Yanfly.Item.Game_Party_armors.call(this);
        results.sort(this.independentItemSort);
        return results;
    },
    equipItems: function () {
        return this.weapons().concat(this.armors());
    },
    allItems: function () {
        return this.items().concat(this.equipItems());
    },
    itemContainer: function (item) {
        if (!item) {
            return null;
        } else if (DataManager.isItem(item)) {
            return this._items;
        } else if (DataManager.isWeapon(item)) {
            return this._weapons;
        } else if (DataManager.isArmor(item)) {
            return this._armors;
        } else {
            return null;
        }
    },
    setupStartingMembers: function () {
        Yanfly.Item.Game_Party_setupStartingMembers.call(this);
        $gameTemp.enableVarianceStock();
        this.initActorEquips();
        $gameTemp.disableVarianceStock();
    },
    name: function () {
        var numBattleMembers = this.battleMembers().length;
        if (numBattleMembers === 0) {
            return '';
        } else if (numBattleMembers === 1) {
            return this.leader().name();
        } else {
            return TextManager.partyName.format(this.leader().name());
        }
    },
    setupBattleTest: function () {
        this.setupBattleTestMembers();
        this.setupBattleTestItems();
    },
    setupBattleTestMembers: function () {
        $dataSystem.testBattlers.forEach(function (battler) {
            var actor = $gameActors.actor(battler.actorId);
            if (actor) {
                actor.changeLevel(battler.level, false);
                actor.initEquips(battler.equips);
                actor.recoverAll();
                this.addActor(battler.actorId);
            }
        }, this);
    },
    setupBattleTestItems: function () {
        $dataItems.forEach(function (item) {
            if (item && item.name.length > 0) {
                this.gainItem(item, this.maxItems(item));
            }
        }, this);
    },
    highestLevel: function () {
        return Math.max.apply(null, this.members().map(function (actor) {
            return actor.level;
        }));
    },
    addActor: function (actorId) {
        if (!this._actors.contains(actorId)) {
            this._actors.push(actorId);
            $gamePlayer.refresh();
            $gameMap.requestRefresh();
        }
    },
    removeActor: function (actorId) {
        if (this._actors.contains(actorId)) {
            this._actors.splice(this._actors.indexOf(actorId), 1);
            $gamePlayer.refresh();
            $gameMap.requestRefresh();
        }
    },
    gold: function () {
        return this._gold;
    },
    gainGold: function (amount) {
        _alias_mog_thud_gainGold.call(this, amount);
        if ($gameSystem._thud_visible && !this.inBattle() && amount > 0) { $gameTemp._thud_data = [true, "gold", amount] };
        $gameTemp._thud_int = false;
    },
    loseGold: function (amount) {
        this.gainGold(-amount);
    },
    maxGold: function () {
        return eval(Yanfly.Param.MaxGold);
    },
    steps: function () {
        return this._steps;
    },
    increaseSteps: function () {
        Yanfly.SCD.Game_Party_increaseSteps.call(this);
        this.updateCooldownSteps();
    },
    numItems: function (item) {
        var container = this.itemContainer(item);
        return container ? container[item.id] || 0 : 0;
    },
    maxItems: function (item) {
        if (DataManager.isIndependent(item)) return 1;
        return Yanfly.Item.Game_Party_maxItems.call(this, item);
    },
    hasMaxItems: function (item) {
        return this.numItems(item) >= this.maxItems(item);
    },
    hasItem: function (item, includeEquip) {
        if (DataManager.isIndependent(item)) {
            if (this.numIndependentItems(item) > 0) return true;
        }
        return Yanfly.Item.Game_Party_hasItem.call(this, item, includeEquip);
    },
    isAnyMemberEquipped: function (item) {
        if (DataManager.isIndependent(item)) {
            for (var i = 0; i < this.members().length; ++i) {
                var actor = this.members()[i];
                if (!actor) continue;
                if (actor.hasBaseItem(item)) return true;
            }
        }
        return Yanfly.Item.Game_Party_isAnyMemberEquipped.call(this, item);
    },
    gainItem: function (item, amount, includeEquip) {
        _alias_mog_thud_gparty_gainItem.call(this, item, amount, includeEquip);
        if ($gameSystem._thud_visible && !this.inBattle() && $gameTemp._thud_int && amount > 0) { $gameTemp._thud_data = [true, item, amount] };
        $gameTemp._thud_int = false;
    },
    discardMembersEquip: function (item, amount) {
        var n = amount;
        this.members().forEach(function (actor) {
            while (n > 0 && actor.isEquipped(item)) {
                actor.discardEquip(item);
                n--;
            }
        });
    },
    loseItem: function (item, amount, includeEquip) {
        this.gainItem(item, -amount, includeEquip);
    },
    consumeItem: function (item) {
        if (DataManager.isItem(item) && item.consumable) {
            this.loseItem(item, 1);
        }
    },
    canUse: function (item) {
        return this.members().some(function (actor) {
            return actor.canUse(item);
        });
    },
    canInput: function () {
        return this.members().some(function (actor) {
            return actor.canInput();
        });
    },
    isAllDead: function () {
        if (Game_Unit.prototype.isAllDead.call(this)) {
            return this.inBattle() || !this.isEmpty();
        } else {
            return false;
        }
    },
    onPlayerWalk: function () {
        var group = this.members();
        var length = group.length;
        for (var i = 0; i < length; ++i) {
            var actor = group[i];
            if (actor) actor.onPlayerWalk();
        }
    },
    menuActor: function () {
        var actor = $gameActors.actor(this._menuActorId);
        if (!this.members().contains(actor)) {
            actor = this.members()[0];
        }
        return actor;
    },
    setMenuActor: function (actor) {
        this._menuActorId = actor.actorId();
    },
    makeMenuActorNext: function () {
        var index = this.members().indexOf(this.menuActor());
        if (index >= 0) {
            index = (index + 1) % this.members().length;
            this.setMenuActor(this.members()[index]);
        } else {
            this.setMenuActor(this.members()[0]);
        }
    },
    makeMenuActorPrevious: function () {
        var index = this.members().indexOf(this.menuActor());
        if (index >= 0) {
            index = (index + this.members().length - 1) % this.members().length;
            this.setMenuActor(this.members()[index]);
        } else {
            this.setMenuActor(this.members()[0]);
        }
    },
    targetActor: function () {
        var actor = $gameActors.actor(this._targetActorId);
        if (!this.members().contains(actor)) {
            actor = this.members()[0];
        }
        return actor;
    },
    setTargetActor: function (actor) {
        this._targetActorId = actor.actorId();
    },
    lastItem: function () {
        return this._lastItem.object();
    },
    setLastItem: function (item) {
        this._lastItem.setObject(item);
    },
    swapOrder: function (index1, index2) {
        var temp = this._actors[index1];
        this._actors[index1] = this._actors[index2];
        this._actors[index2] = temp;
        $gamePlayer.refresh();
    },
    charactersForSavefile: function () {
        return this.battleMembers().map(function (actor) {
            return [actor.characterName(), actor.characterIndex()];
        });
    },
    facesForSavefile: function () {
        return this.battleMembers().map(function (actor) {
            return [actor.faceName(), actor.faceIndex()];
        });
    },
    partyAbility: function (abilityId) {
        return this.battleMembers().some(function (actor) {
            return actor.partyAbility(abilityId);
        });
    },
    hasEncounterHalf: function () {
        return this.partyAbility(Game_Party.ABILITY_ENCOUNTER_HALF);
    },
    hasEncounterNone: function () {
        return this.partyAbility(Game_Party.ABILITY_ENCOUNTER_NONE);
    },
    hasCancelSurprise: function () {
        return this.partyAbility(Game_Party.ABILITY_CANCEL_SURPRISE);
    },
    hasRaisePreemptive: function () {
        return this.partyAbility(Game_Party.ABILITY_RAISE_PREEMPTIVE);
    },
    hasGoldDouble: function () {
        return this.partyAbility(Game_Party.ABILITY_GOLD_DOUBLE);
    },
    hasDropItemDouble: function () {
        return this.partyAbility(Game_Party.ABILITY_DROP_ITEM_DOUBLE);
    },
    ratePreemptive: function (troopAgi) {
        var rate = this.agility() >= troopAgi ? 0.05 : 0.03;
        if (this.hasRaisePreemptive()) {
            rate *= 4;
        }
        return rate;
    },
    rateSurprise: function (troopAgi) {
        var rate = this.agility() >= troopAgi ? 0.03 : 0.05;
        if (this.hasCancelSurprise()) {
            rate = 0;
        }
        return rate;
    },
    performVictory: function () {
        this.members().forEach(function (actor) {
            actor.performVictory();
        });
    },
    performEscape: function () {
        if (BattleManager.isCTB()) return;
        Yanfly.CTB.Game_Party_performEscape.call(this);
    },
    removeBattleStates: function () {
        this.members().forEach(function (actor) {
            actor.removeBattleStates();
        });
    },
    requestMotionRefresh: function () {
        this.members().forEach(function (actor) {
            actor.requestMotionRefresh();
        });
    },
    performEscapeSuccess: function () {
        for (var i = 0; i < this.members().length; ++i) {
            var member = this.members()[i];
            if (member) member.performEscapeSuccess();
        }
    },
    updateCooldownSteps: function () {
        return this.members().forEach(function (member) {
            return member.updateCooldownSteps();
        });
    },
    initActorEquips: function () {
        $gameTemp._initializeStartingMemberEquipment = true;
        for (var i = 0; i < $dataActors.length; ++i) {
            var actor = $gameActors.actor(i);
            if (actor) {
                var baseActor = $dataActors[i];
                actor.initIndependentEquips(baseActor.equips);
            }
        }
        $gameTemp._initializeStartingMemberEquipment = undefined;
    },
    gainIndependentItem: function (item, amount, includeEquip) {
        var arr = [];
        if (amount > 0) {
            for (var i = 0; i < amount; ++i) {
                var newItem = DataManager.registerNewItem(item);
                this.registerNewItem(item, newItem);
                arr.push(newItem);
            }
        } else if (amount < 0) {
            amount = Math.abs(amount);
            for (var i = 0; i < amount; ++i) {
                if (item.baseItemId) {
                    this.removeIndependentItem(item, includeEquip);
                } else if (DataManager.isIndependent(item)) {
                    var target = $gameParty.getMatchingBaseItem(item, includeEquip);
                    if (target !== null) this.removeIndependentItem(target, includeEquip);
                } else {
                    this.removeBaseItem(item, includeEquip);
                }
            }
        }
        return arr;
    },
    getIndependentItemTypeMax: function (item) {
        if (!item) return 0;
        if (DataManager.isItem(item)) return Yanfly.Param.ItemMaxItems;
        if (DataManager.isWeapon(item)) return Yanfly.Param.ItemMaxWeapons;
        if (DataManager.isArmor(item)) return Yanfly.Param.ItemMaxArmors;
    },
    getIndependentItemTypeCur: function (item) {
        if (!item) return 0;
        if (DataManager.isItem(item)) return this.items().length;
        if (DataManager.isWeapon(item)) return this.weapons().length;
        if (DataManager.isArmor(item)) return this.armors().length;
    },
    registerNewItem: function (baseItem, newItem) {
        var container = this.itemContainer(baseItem);
        if (container) {
            var lastNumber = this.numItems(newItem);
            container[newItem.id] = 1;
        }
    },
    removeIndependentItem: function (item, includeEquip) {
        if (includeEquip && this.checkItemIsEquipped(item)) {
            for (var i = 1; i < $gameActors._data.length; ++i) {
                var actor = $gameActors.actor(i);
                if (!actor) continue;
                if (!actor.equips().contains(item)) continue;
                actor.unequipItem(item);
            }
        }
        var container = this.itemContainer(item);
        container[item.id] = 0;
        if (container[item.id] <= 0) delete container[item.id];

    },
    removeBaseItem: function (item, includeEquip) {
        var container = this.itemContainer(item);
        container[item.id]--;
        if (container[item.id] <= 0) delete container[item.id];
        if (includeEquip) this.discardMembersEquip(item, -1);
    },
    getMatchingBaseItem: function (baseItem, equipped) {
        if (!baseItem) return null;
        if (DataManager.isItem(baseItem)) var group = this.items();
        if (DataManager.isWeapon(baseItem)) var group = this.weapons();
        if (DataManager.isArmor(baseItem)) var group = this.armors();
        if (equipped) {
            for (var a = 0; a < this.members().length; ++a) {
                var actor = this.members()[a];
                if (!actor) continue;
                if (DataManager.isWeapon(baseItem)) {
                    group = group.concat(actor.weapons());
                } else if (DataManager.isArmor(baseItem)) {
                    group = group.concat(actor.armors());
                }
            }
        }
        var baseItemId = baseItem.id;
        for (var i = 0; i < group.length; ++i) {
            var item = group[i];
            if (!item) continue;
            if (!item.baseItemId) continue;
            if (item.baseItemId !== baseItemId) continue;
            return item;
        }
        return null;
    },
    checkItemIsEquipped: function (item) {
        for (var i = 1; i < $gameActors._data.length; ++i) {
            var actor = $gameActors.actor(i);
            if (!actor) continue;
            if (actor.equips().contains(item)) return true;
        }
        return false;
    },
    independentItemSort: function (a, b) {
        var aa = (a.baseItemId) ? a.baseItemId : a.id;
        var bb = (b.baseItemId) ? b.baseItemId : b.id;
        if (aa < bb) return -1;
        if (aa >= bb) return 1;
        return 0;
    },
    numIndependentItems: function (baseItem) {
        var value = 0;
        if (!DataManager.isIndependent(baseItem)) return this.numItems(baseItem);
        var id = baseItem.id;
        if (DataManager.isItem(baseItem)) var group = this.items();
        if (DataManager.isWeapon(baseItem)) var group = this.weapons();
        if (DataManager.isArmor(baseItem)) var group = this.armors();
        for (var i = 0; i < group.length; ++i) {
            var item = group[i];
            if (!item) continue;
            if (item.baseItemId && item.baseItemId === id) value += 1;
        }
        return value;
    },
    select: function (activeMember) {
        if ($gameTemp._arrowAllTargets[1]) {
            this.members().forEach(function (member) {
                member.select();
            });
            return;
        };
        _mog_bat_cursor_gparty_select.call(this, activeMember);
    },
    inBattle: function () {
        return this._inBattle;
    },
    aliveMembers: function () {
        return this.members().filter(function (member) {
            return member.isAlive();
        });
    },
    deadMembers: function () {
        return this.members().filter(function (member) {
            return member.isDead();
        });
    },
    movableMembers: function () {
        return this.members().filter(function (member) {
            return member.canMove();
        });
    },
    clearActions: function () {
        return this.members().forEach(function (member) {
            return member.clearActions();
        });
    },
    agility: function () {
        var members = this.members();
        if (members.length === 0) {
            return 1;
        }
        var sum = members.reduce(function (r, member) {
            return r + member.agi;
        }, 0);
        return sum / members.length;
    },
    tgrSum: function () {
        return this.aliveMembers().reduce(function (r, member) {
            return r + member.tgr;
        }, 0);
    },
    randomTarget: function () {
        var tgrRand = Math.random() * this.tgrSum();
        var target = null;
        this.aliveMembers().forEach(function (member) {
            tgrRand -= member.tgr;
            if (tgrRand <= 0 && !target) {
                target = member;
            }
        });
        return target;
    },
    randomDeadTarget: function () {
        var members = this.deadMembers();
        if (members.length === 0) {
            return null;
        }
        return members[Math.floor(Math.random() * members.length)];
    },
    smoothTarget: function (index) {
        if (index < 0) {
            index = 0;
        }
        var member = this.members()[index];
        return (member && member.isAlive()) ? member : this.aliveMembers()[0];
    },
    smoothDeadTarget: function (index) {
        if (index < 0) {
            index = 0;
        }
        var member = this.members()[index];
        return (member && member.isDead()) ? member : this.deadMembers()[0];
    },
    clearResults: function () {
        this.members().forEach(function (member) {
            member.clearResult();
        });
    },
    onBattleStart: function () {
        Yanfly.BSC.Game_Unit_onBattleStart.call(this);
        this.processStateEval('battle');
    },
    onBattleEnd: function () {
        this._inBattle = false;
        this.members().forEach(function (member) {
            member.onBattleEnd();
        });
    },
    makeActions: function () {
        this.members().forEach(function (member) {
            member.makeActions();
        });
    },
    substituteBattler: function () {
        var members = this.members();
        for (var i = 0; i < members.length; i++) {
            if (members[i].isSubstitute()) {
                return members[i];
            }
        }
    },
    createActions: function () {
        var max = this.members().length;
        for (var i = 0; i < max; ++i) {
            var member = this.members()[i];
            if (member) member.createActions();
        }
    },
    onTurnStart: function () {
        var max = this.members().length;
        for (var i = 0; i < max; ++i) {
            var member = this.members()[i];
            if (member) member.onTurnStart();
        }
    },
    updateTick: function () {
        var max = this.members().length;
        for (var i = 0; i < max; ++i) {
            var member = this.members()[i];
            if (member) member.updateTick();
        }
    },
    processStateEval: function (type) {
        var length1 = this.allMembers().length;
        for (var i = 0; i < length1; ++i) {
            var member = this.allMembers()[i];
            if (!member) return;
            member.refresh();
            var states = member.states();
            var length2 = states.length;
            for (var j = 0; j < length2; ++j) {
                var state = states[j];
                if (state) member.customEffectEval(state.id, type);
            }
        }
    },
    onCTBStart: function () {
        if (!BattleManager.isCTB()) return;
        for (var i = 0; i < this.members().length; ++i) {
            var member = this.members()[i];
            if (member) member.onCTBStart();
        }
    },
    increaseTurnTimeBasedCTB: function () {
        for (var i = 0; i < this.members().length; ++i) {
            var member = this.members()[i];
            if (!member) continue;
            if (member.isDead()) continue;
            if (member.isHidden()) continue;
            if (member.canMove()) continue;
            member.onTurnEnd();
        }
    },
    updateCooldowns: function () {
        if (BattleManager.timeBasedCooldowns()) return;
        return this.members().forEach(function (member) {
            member.updateCooldowns();
            member.updateWarmups();
        });
    },
    endBattleCooldowns: function () {
        return this.members().forEach(function (member) {
            member.endBattleCooldowns();
            member.clearWarmups();
        });
    },

}