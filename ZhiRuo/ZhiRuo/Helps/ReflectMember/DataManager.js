var DataManager = {
    _globalId: "RPGMV",
    _lastAccessedId: 1,
    _errorUrl: null,
    _databaseFiles: [{
        name: "$dataActors",
        src: "Actors.json",

    }, {
        name: "$dataClasses",
        src: "Classes.json",

    }, {
        name: "$dataSkills",
        src: "Skills.json",

    }, {
        name: "$dataItems",
        src: "Items.json",

    }, {
        name: "$dataWeapons",
        src: "Weapons.json",

    }, {
        name: "$dataArmors",
        src: "Armors.json",

    }, {
        name: "$dataEnemies",
        src: "Enemies.json",

    }, {
        name: "$dataTroops",
        src: "Troops.json",

    }, {
        name: "$dataStates",
        src: "States.json",

    }, {
        name: "$dataAnimations",
        src: "Animations.json",

    }, {
        name: "$dataTilesets",
        src: "Tilesets.json",

    }, {
        name: "$dataCommonEvents",
        src: "CommonEvents.json",

    }, {
        name: "$dataSystem",
        src: "System.json",

    }, {
        name: "$dataMapInfos",
        src: "MapInfos.json",

    }],
    loadDatabase: function () {
        var test = this.isBattleTest() || this.isEventTest();
        var prefix = test ? 'Test_' : '';
        for (var i = 0; i < this._databaseFiles.length; i++) {
            var name = this._databaseFiles[i].name;
            var src = this._databaseFiles[i].src;
            this.loadDataFile(name, prefix + src);
        }
        if (this.isEventTest()) {
            this.loadDataFile('$testEvent', prefix + 'Event.json');
        }
    },
    loadDataFile: function (name, src) {
        var xhr = new XMLHttpRequest();
        if (parseInt(SessionData.opengame) == 2) {
            var url = 'data/' + src;
        } else {
            var url = SessionData.dataiiurl + src + '?' + SessionData.version;
        }
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function () {
            if (xhr.status < 400) {
                window[name] = JSON.parse(xhr.responseText);
                DataManager.onLoad(window[name]);
            }
        };
        xhr.onerror = function () {
            DataManager._errorUrl = DataManager._errorUrl || url;
        };
        window[name] = null;
        xhr.send();
    },
    isDatabaseLoaded: function () {
        if (!Yanfly.AVar.DataManager_isDatabaseLoaded.call(this)) return false;
        if (!Yanfly._loaded_YEP_X_ActorVariables) {
            DataManager.processAVarNotetags($dataActors);
            Yanfly._loaded_YEP_X_ActorVariables = true;
        }
        return true;
    },
    loadMapData: function (mapId) {
        if (mapId > 0) {
            var filename = 'Map%1.json'.format(mapId.padZero(3));
            this.loadDataFile('$dataMap', filename);
        } else {
            this.makeEmptyMap();
        }
    },
    makeEmptyMap: function () {
        $dataMap = {};
        $dataMap.data = [];
        $dataMap.events = [];
        $dataMap.width = 100;
        $dataMap.height = 100;
        $dataMap.scrollType = 3;
    },
    isMapLoaded: function () {
        this.checkError();
        return !!$dataMap;
    },
    onLoad: function (object) {
        var array;
        if (object === $dataMap) {
            this.extractMetadata(object);
            array = object.events;
        } else {
            array = object;
        }
        if (Array.isArray(array)) {
            for (var i = 0; i < array.length; i++) {
                var data = array[i];
                if (data && data.note !== undefined) {
                    this.extractMetadata(data);
                }
            }
        }
        if (object === $dataSystem) {
            Decrypter.hasEncryptedImages = !!object.hasEncryptedImages;
            Decrypter.hasEncryptedAudio = !!object.hasEncryptedAudio;
            Scene_Boot.loadSystemImages();
        }
    },
    extractMetadata: function (data) {
        var re = /<([^<>:]+)(:?)([^>]*)>/g;
        data.meta = {};
        for (; ;) {
            var match = re.exec(data.note);
            if (match) {
                if (match[2] === ':') {
                    data.meta[match[1]] = match[3];
                } else {
                    data.meta[match[1]] = true;
                }
            } else {
                break;
            }
        }
    },
    checkError: function () {
        if (DataManager._errorUrl) {
            throw new Error("请确保设备允许联网");
        }
    },
    isBattleTest: function () {
        return Utils.isOptionValid('btest');
    },
    isEventTest: function () {
        return Utils.isOptionValid('etest');
    },
    isSkill: function (item) {
        return item && $dataSkills.contains(item);
    },
    isItem: function (item) {
        return item && $dataItems.contains(item);
    },
    isWeapon: function (item) {
        return item && $dataWeapons.contains(item);
    },
    isArmor: function (item) {
        return item && $dataArmors.contains(item);
    },
    createGameObjects: function () {
        Yanfly.Item.DataManager_createGameObjects.call(this);
        this.createIndependentObjects();
    },
    setupNewGame: function () {
        this.createGameObjects();
        this.selectSavefileForNewGame();
        $gameParty.setupStartingMembers();
        $gamePlayer.reserveTransfer($dataSystem.startMapId,
            $dataSystem.startX, $dataSystem.startY);
        Graphics.frameCount = 0;
    },
    setupBattleTest: function () {
        this.createGameObjects();
        $gameParty.setupBattleTest();
        BattleManager.setup($dataSystem.testTroopId, true, false);
        BattleManager.setBattleTest(true);
        BattleManager.playBattleBgm();
    },
    setupEventTest: function () {
        this.createGameObjects();
        this.selectSavefileForNewGame();
        $gameParty.setupStartingMembers();
        $gamePlayer.reserveTransfer(-1, 8, 6);
        $gamePlayer.setTransparent(false);
    },
    loadGlobalInfo: function () {
        var json;
        try {
            json = StorageManager.load(0);
        } catch (e) {
            console.error(e);
            return [];
        }
        if (json) {
            var globalInfo = JSON.parse(json);
            for (var i = 1; i <= this.maxSavefiles(); i++) {
                if (!StorageManager.exists(i)) {
                    delete globalInfo[i];
                }
            }
            return globalInfo;
        } else {
            return [];
        }
    },
    saveGlobalInfo: function (info) {
        StorageManager.save(0, JSON.stringify(info));
    },
    isThisGameFile: function (savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (globalInfo && globalInfo[savefileId]) {
            if (StorageManager.isLocalMode()) {
                return true;
            } else {
                var savefile = globalInfo[savefileId];
                return (savefile.globalId === this._globalId &&
                    savefile.title === $dataSystem.gameTitle);
            }
        } else {
            return false;
        }
    },
    isAnySavefileExists: function () {
        var globalInfo = this.loadGlobalInfo();
        if (globalInfo) {
            for (var i = 1; i < globalInfo.length; i++) {
                if (this.isThisGameFile(i)) {
                    return true;
                }
            }
        }
        return false;
    },
    latestSavefileId: function () {
        var globalInfo = this.loadGlobalInfo();
        var savefileId = 1;
        var timestamp = 0;
        if (globalInfo) {
            for (var i = 1; i < globalInfo.length; i++) {
                if (this.isThisGameFile(i) && globalInfo[i].timestamp > timestamp) {
                    timestamp = globalInfo[i].timestamp;
                    savefileId = i;
                }
            }
        }
        return savefileId;
    },
    loadAllSavefileImages: function () {
        var globalInfo = this.loadGlobalInfo();
        if (globalInfo) {
            for (var i = 1; i < globalInfo.length; i++) {
                if (this.isThisGameFile(i)) {
                    var info = globalInfo[i];
                    this.loadSavefileImages(info);
                }
            }
        }
    },
    loadSavefileImages: function (info) {
        if (info.characters) {
            for (var i = 0; i < info.characters.length; i++) {
                ImageManager.loadCharacter(info.characters[i][0]);
            }
        }
        if (info.faces) {
            for (var j = 0; j < info.faces.length; j++) {
                ImageManager.loadFace(info.faces[j][0]);
            }
        }
    },
    maxSavefiles: function () {
        return 4;
    },
    saveGame: function (savefileId) {
        try {
            StorageManager.backup(savefileId);
            return this.saveGameWithoutRescue(savefileId);
        } catch (e) {
            console.error(e);
            try {
                StorageManager.remove(savefileId);
                StorageManager.restoreBackup(savefileId);
            } catch (e2) {
            }
            return false;
        }
    },
    loadGame: function (savefileId) {
        var flag = Yanfly.UCE.DataManager_loadGame.call(this, savefileId);
        if (flag && Yanfly.Param.UtilCommonEvents['load'] > 0) {
            $gameTemp.reserveCommonEvent(Yanfly.Param.UtilCommonEvents['load']);
        }
        return flag;
    },
    loadSavefileInfo: function (savefileId) {
        var globalInfo = this.loadGlobalInfo();
        return (globalInfo && globalInfo[savefileId]) ? globalInfo[savefileId] : null;
    },
    lastAccessedSavefileId: function () {
        return this._lastAccessedId;
    },
    saveGameWithoutRescue: function (savefileId) {
        var json = JsonEx.stringify(this.makeSaveContents());
        StorageManager.save(savefileId, json);
        this._lastAccessedId = savefileId;
        var globalInfo = this.loadGlobalInfo() || [];
        globalInfo[savefileId] = this.makeSavefileInfo();
        this.saveGlobalInfo(globalInfo);
        return true;
    },
    loadGameWithoutRescue: function (savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (this.isThisGameFile(savefileId)) {
            var json = StorageManager.load(savefileId);
            this.createGameObjects();
            this.extractSaveContents(JsonEx.parse(json));
            this._lastAccessedId = savefileId;
            return true;
        } else {
            return false;
        }
    },
    selectSavefileForNewGame: function () {
        var globalInfo = this.loadGlobalInfo();
        this._lastAccessedId = 1;
        if (globalInfo) {
            var numSavefiles = Math.max(0, globalInfo.length - 1);
            if (numSavefiles < this.maxSavefiles()) {
                this._lastAccessedId = numSavefiles + 1;
            } else {
                var timestamp = Number.MAX_VALUE;
                for (var i = 1; i < globalInfo.length; i++) {
                    if (!globalInfo[i]) {
                        this._lastAccessedId = i;
                        break;
                    }
                    if (globalInfo[i].timestamp < timestamp) {
                        timestamp = globalInfo[i].timestamp;
                        this._lastAccessedId = i;
                    }
                }
            }
        }
    },
    makeSavefileInfo: function () {
        var info = {};
        info.globalId = this._globalId;
        info.title = $dataSystem.gameTitle;
        info.members = $gameParty.members();
        if ($gameMap.displayName()) {
            info.location = $gameMap.displayName();
        } else {
            if ($dataMapInfos[$gameMap._mapId]) {
                info.location = $dataMapInfos[$gameMap._mapId].name;
            } else {
                info.location = "";
            };
        };
        var actor = info.members[0];
        info.actor = [actor.name(), actor.level, actor.mhp, actor.mmp, actor.atk, actor.def,
        actor.mat, actor.mdf, actor.agi, actor.luk, actor._actorId];
        info.gold = $gameParty.gold();
        info.characters = $gameParty.charactersForSavefile();
        info.faces = $gameParty.facesForSavefile();
        info.playtime = $gameSystem.playtimeText();
        info.timestamp = Date.now();
        return info;
    },
    makeSaveContents: function () {
        var contents = Yanfly.Item.DataManager_makeSaveContents.call(this);
        contents.items = this._independentItems;
        contents.weapons = this._independentWeapons;
        contents.armors = this._independentArmors;
        return contents;
    },
    extractSaveContents: function (contents) {
        Yanfly.Item.DataManager_extractSaveContents.call(this, contents);
        this._independentItems = contents.items || [];
        this._independentWeapons = contents.weapons || [];
        this._independentArmors = contents.armors || [];
        this.loadIndependentItems();
    },
    processCORENotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.maxItem = Yanfly.Param.MaxItem;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:PRICE):[ ](\d+)>/i)) {
                    obj.price = parseInt(RegExp.$1);
                } else if (line.match(/<(?:MAX ITEM):[ ](\d+)>/i)) {
                    obj.maxItem = Math.max(1, parseInt(RegExp.$1));
                } else if (line.match(/<(.*):[ ]([\+\-]\d+)>/i)) {
                    var stat = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    switch (stat) {
                        case 'HP':
                        case 'MAXHP':
                        case 'MAX HP':
                            obj.params[0] = value;
                            break;
                        case 'MP':
                        case 'MAXMP':
                        case 'MAX MP':
                        case 'SP':
                        case 'MAXSP':
                        case 'MAX SP':
                            obj.params[1] = value;
                            break;
                        case 'ATK':
                        case 'STR':
                            obj.params[2] = value;
                            break;
                        case 'DEF':
                            obj.params[3] = value;
                            break;
                        case 'MAT':
                        case 'INT' || 'SPI':
                            obj.params[4] = value;
                            break;
                        case 'MDF':
                        case 'RES':
                            obj.params[5] = value;
                            break;
                        case 'AGI':
                        case 'SPD':
                            obj.params[6] = value;
                            break;
                        case 'LUK':
                            obj.params[7] = value;
                            break;
                        case 'EXP':
                        case 'XP':
                            obj.exp = value;
                            break;
                    }
                }
            }
        }
    },
    processCORENotetags2: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:GOLD):[ ](\d+)>/i)) {
                    obj.gold = parseInt(RegExp.$1);
                } else if (line.match(/<(.*):[ ](\d+)>/i)) {
                    var stat = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    switch (stat) {
                        case 'HP':
                        case 'MAXHP':
                        case 'MAX HP':
                            obj.params[0] = value;
                            break;
                        case 'MP':
                        case 'MAXMP':
                        case 'MAX MP':
                        case 'SP':
                        case 'MAXSP':
                        case 'MAX SP':
                            obj.params[1] = value;
                            break;
                        case 'ATK':
                        case 'STR':
                            obj.params[2] = value;
                            break;
                        case 'DEF':
                            obj.params[3] = value;
                            break;
                        case 'MAT':
                        case 'INT':
                        case 'SPI':
                            obj.params[4] = value;
                            break;
                        case 'MDF':
                        case 'RES':
                            obj.params[5] = value;
                            break;
                        case 'AGI':
                        case 'SPD':
                            obj.params[6] = value;
                            break;
                        case 'LUK':
                            obj.params[7] = value;
                            break;
                        case 'EXP':
                        case 'XP':
                            obj.exp = value;
                            break;
                    }
                }
            }
        }
    },
    processCORENotetags3: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.maxLevel = Yanfly.Param.MaxLevel;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:MAX LEVEL):[ ](\d+)>/i)) {
                    obj.maxLevel = parseInt(RegExp.$1);
                    if (obj.maxLevel < 1) obj.maxLevel = 1;
                } else if (line.match(/<(?:INITIAL LEVEL):[ ](\d+)>/i)) {
                    obj.initialLevel = parseInt(RegExp.$1);
                    if (obj.initialLevel < 1) obj.initialLevel = 1;
                }
            }
        }
    },
    processCORENotetags4: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.learnings.forEach(function (learning) {
                if (learning.note.match(/<(?:LEARN LEVEL|LEARN AT LEVEL):[ ](\d+)>/i)) {
                    learning.level = parseInt(RegExp.$1);
                    if (learning.level < 1) obj.maxLevel = 1;
                }
            }, this);
        }
    },
    processMELODYNotetags: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.actionsMade) continue;
            obj.actionsMade = true;
            var notedata = obj.note.split(/[\r\n]+/);

            var actionType = 0;
            this.setDefaultActions(obj);

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:SETUP ACTION|setup)>/i)) {
                    actionType = 1;
                    obj.setupActions = [];
                } else if (line.match(/<\/(?:SETUP ACTION|setup)>/i)) {
                    var actionType = 0;
                } else if (line.match(/<(?:WHOLE ACTION|whole)>/i)) {
                    actionType = 2;
                    obj.wholeActions = [];
                } else if (line.match(/<\/(?:WHOLE ACTION|whole)>/i)) {
                    var actionType = 0;
                } else if (line.match(/<(?:TARGET ACTION|target)>/i)) {
                    actionType = 3;
                    obj.targetActions = [];
                } else if (line.match(/<\/(?:TARGET ACTION|target)>/i)) {
                    var actionType = 0;
                } else if (line.match(/<(?:FOLLOW ACTION|follow)>/i)) {
                    actionType = 4;
                    obj.followActions = [];
                } else if (line.match(/<\/(?:FOLLOW ACTION|follow)>/i)) {
                    var actionType = 0;
                } else if (line.match(/<(?:FINISH ACTION|finish)>/i)) {
                    actionType = 5;
                    obj.finishActions = [];
                } else if (line.match(/<\/(?:FINISH ACTION|finish)>/i)) {
                    var actionType = 0;
                } else {
                    this.convertSequenceLine(obj, line, actionType);
                }
            }
        }
    },
    setDefaultActions: function (obj) {
        obj.setupActions = Yanfly.BEC.DefaultActionSetup.slice();
        if (this.isWholeAction(obj)) {
            obj.wholeActions = Yanfly.BEC.DefaultActionWhole.slice();
            this.addActionEffects(obj, obj.wholeActions);
            obj.targetActions = [];
        } else {
            obj.wholeActions = [];
            obj.targetActions = Yanfly.BEC.DefaultActionTarget.slice();
            this.addActionEffects(obj, obj.targetActions);
        }
        obj.followActions = Yanfly.BEC.DefaultActionFollow.slice();
        obj.finishActions = Yanfly.BEC.DefaultActionFinish.slice();
    },
    isWholeAction: function (obj) {
        if (obj.animationId > 0 && $dataAnimations[obj.animationId]) {
            var animation = $dataAnimations[obj.animationId];
            if (animation.position === 3) return true;
            if (animation.position !== 3 && [2, 8, 10].contains(obj.scope)) return true;
        }
        return false;
    },
    addActionEffects: function (obj, array) {
        for (; ;) {
            array[array.length] = ['ACTION EFFECT'];
            array[array.length] = ['DEATH BREAK'];
            obj.repeats -= 1;
            if (obj.repeats <= 0) break;
            array[array.length] = ['WAIT', [8]];
        }
        obj.repeats = 1;
    },
    convertSequenceLine: function (obj, line, actionType) {
        if (actionType <= 0 || actionType > 5) return;
        Yanfly.BEC.SeqType;
        var seqArgs;
        if (line.match(Yanfly.BEC.SeqType6)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs =
                [RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6, RegExp.$7];
        } else if (line.match(Yanfly.BEC.SeqType5)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs = [RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6];
        } else if (line.match(Yanfly.BEC.SeqType4)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs = [RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5];
        } else if (line.match(Yanfly.BEC.SeqType3)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs = [RegExp.$2, RegExp.$3, RegExp.$4];
        } else if (line.match(Yanfly.BEC.SeqType2)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs = [RegExp.$2, RegExp.$3];
        } else if (line.match(Yanfly.BEC.SeqType1)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs = [RegExp.$2];
        } else if (line.match(Yanfly.BEC.SeqType0)) {
            Yanfly.BEC.SeqType = RegExp.$1;
            seqArgs = [];
        } else {
            return;
        }
        var array = [Yanfly.BEC.SeqType, seqArgs];
        if (actionType === 1) obj.setupActions[obj.setupActions.length] = array;
        if (actionType === 2) obj.wholeActions[obj.wholeActions.length] = array;
        if (actionType === 3) obj.targetActions[obj.targetActions.length] = array;
        if (actionType === 4) obj.followActions[obj.followActions.length] = array;
        if (actionType === 5) obj.finishActions[obj.finishActions.length] = array;
    },
    processBECNotetags1: function (group) {
        var note1 = /<(?:CAST ANIMATION|cast ani):[ ](\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.castAnimation = 0;
            if (obj.hitType === 0) obj.castAnimation = Yanfly.Param.CastCertHit;
            if (obj.hitType === 1) obj.castAnimation = Yanfly.Param.CastPhysical;
            if (obj.hitType === 2) obj.castAnimation = Yanfly.Param.CastMagical;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.castAnimation = parseInt(RegExp.$1);
                }
            }
        }
    },
    processBECNotetags2: function (group) {
        var note1 = /<(?:ACTION COPY):[ ](.*):[ ]*(\d+)>/i;
        var note2 = /<(?:SPEED):[ ]([\+\-]\d+)>/i;
        var note3 = /<(?:DISPLAY NAME|DISPLAY TEXT):[ ](.*)>/i;
        var note4 = /<(?:DISPLAY ICON):[ ](\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.battleDisplayText = obj.name;
            obj.battleDisplayIcon = obj.iconIndex;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    var text = String(RegExp.$1).toUpperCase();
                    var target;
                    if (['I', 'ITEM'].contains(text)) {
                        target = $dataItems[parseInt(RegExp.$2)];
                    } else if (['S', 'SKILL'].contains(text)) {
                        target = $dataSkills[parseInt(RegExp.$2)];
                    }
                    if (target) {
                        obj.setupActions = target.setupActions.slice();
                        obj.wholeActions = target.wholeActions.slice();
                        obj.targetActions = target.targetActions.slice();
                        obj.followActions = target.followActions.slice();
                        obj.finishActions = target.finishActions.slice();
                    }
                } else if (line.match(note2)) {
                    obj.speed = parseInt(RegExp.$1);
                } else if (line.match(note3)) {
                    obj.battleDisplayText = String(RegExp.$1);
                } else if (line.match(note4)) {
                    obj.battleDisplayIcon = parseInt(RegExp.$1);
                }
            }
        }
    },
    processBECNotetags3: function (group) {
        var note1 = /<(?:ATTACK ANIMATION|attack ani):[ ](\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.attackAnimationId = Yanfly.Param.EnemyAtkAni;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.attackAnimationId = parseInt(RegExp.$1);
                }
            }
        }
    },
    processBECNotetags4: function (group) {
        var note1 = /<(?:REFLECT ANIMATION|reflect ani):[ ](\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.reflectAnimationId = 0;
            obj.spriteCannotMove = false;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.reflectAnimationId = parseInt(RegExp.$1);
                } else if (line.match(/<(?:SPRITE CANNOT MOVE)>/i)) {
                    obj.spriteCannotMove = true;
                }
            }
        }
    },
    processBECNotetags5: function (group, isActor) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            if (isActor) {
                obj.anchorX = Yanfly.Param.BECAnchorX;
                obj.anchorY = Yanfly.Param.BECAnchorY;
            }

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:ANCHOR X):[ ](\d+)[.](\d+)>/i)) {
                    obj.anchorX = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
                } else if (line.match(/<(?:ANCHOR Y):[ ](\d+)[.](\d+)>/i)) {
                    obj.anchorY = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
                }
            }
        }
    },
    processBECNotetags6: function (group) {
        var note1a = /<(?:ACTION START):[ ](\d+)>/i;
        var note1b = /<(?:ACTION START):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note2a = /<(?:TURN START):[ ](\d+)>/i;
        var note2b = /<(?:TURN START):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1a)) {
                    var turns = parseInt(RegExp.$1);
                    obj.autoRemovalTiming = 3;
                    obj.maxTurns = turns;
                    obj.minTurns = turns;
                } else if (line.match(note1b)) {
                    var turns1 = parseInt(RegExp.$1);
                    var turns2 = parseInt(RegExp.$2);
                    obj.autoRemovalTiming = 3;
                    obj.maxTurns = turns1;
                    obj.minTurns = turns2;
                } else if (line.match(note2a)) {
                    var turns = parseInt(RegExp.$1);
                    obj.autoRemovalTiming = 4;
                    obj.maxTurns = turns;
                    obj.minTurns = turns;
                } else if (line.match(note2b)) {
                    var turns1 = parseInt(RegExp.$1);
                    var turns2 = parseInt(RegExp.$2);
                    obj.autoRemovalTiming = 4;
                    obj.maxTurns = turns1;
                    obj.minTurns = turns2;
                }
            }
        }
    },
    processBSCNotetagsT: function (group) {
        if (Yanfly.StateIdRef) return;
        Yanfly.StateIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.StateIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processBSCNotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.showTurns = Yanfly.Param.BSCShowTurns;
            obj.turnAlign = Yanfly.Param.BSCTurnAlign;
            obj.turnFontSize = Yanfly.Param.BSCFontSize;
            obj.turnBufferX = Yanfly.Param.BSCTurnBufferX;
            obj.turnBufferY = Yanfly.Param.BSCTurnBufferY;
            obj.turnColor = Yanfly.Param.BSCTurnColor;
            obj.reapplyRules = Yanfly.Param.BSCReapplyRules;
            this.initStateEval(obj);
            this.initStateCounter(obj);
            var evalMode = 'none';
            var evalType = 'none';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:SHOW TURNS)>/i)) {
                    obj.showTurns = true;
                } else if (line.match(/<(?:HIDE TURNS)>/i)) {
                    obj.showTurns = false;
                } else if (line.match(/<(?:TURN ALIGNMENT|turn align):[ ](.*)>/i)) {
                    obj.turnAlign = String(RegExp.$1).toLowerCase();
                } else if (line.match(/<(?:TURN FONT SIZE):[ ](\d+)>/i)) {
                    obj.turnFontSize = parseInt(RegExp.$1);
                } else if (line.match(/<(?:TURN BUFFER X):[ ]([\+\-]\d+)>/i)) {
                    obj.turnBufferX = parseInt(RegExp.$1);
                } else if (line.match(/<(?:TURN BUFFER Y):[ ]([\+\-]\d+)>/i)) {
                    obj.turnBufferY = parseInt(RegExp.$1);
                } else if (line.match(/<(?:TURN COLOR):[ ](\d+)>/i)) {
                    obj.turnColor = parseInt(RegExp.$1);
                } else if (line.match(/<(?:REAPPLY IGNORE TURNS)>/i)) {
                    obj.reapplyRules = 0;
                } else if (line.match(/<(?:REAPPLY RESET TURNS)>/i)) {
                    obj.reapplyRules = 1;
                } else if (line.match(/<(?:REAPPLY ADD TURNS)>/i)) {
                    obj.reapplyRules = 2;
                } else if (line.match(/<CUSTOM[ ](.*)[ ]EFFECT>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    evalMode = 'custom state effect';
                    if (['APPLY', 'ADD'].contains(name)) {
                        evalType = 'addState';
                    } else if (['REMOVE', 'ERASE'].contains(name)) {
                        evalType = 'removeState';
                    } else if (['LEAVE', 'DECAY'].contains(name)) {
                        evalType = 'leaveState';
                    } else if (['TURN START', 'BEGIN'].contains(name)) {
                        evalType = 'turnStartState';
                    } else if (['TURN END', 'CLOSE'].contains(name)) {
                        evalType = 'turnEndState';
                    } else if (['REGENERATE', 'REGEN', 'WHILE'].contains(name)) {
                        evalType = 'regenerateState';
                    } else if (['SELECT', 'ONTARGET'].contains(name)) {
                        evalType = 'selectState';
                    } else if (['DESELECT', 'OFFTARGET'].contains(name)) {
                        evalType = 'deselectState';
                    } else if (['REACT', 'REACTION'].contains(name)) {
                        evalType = 'reactState';
                    } else if (['RESPOND', 'RESPONSE'].contains(name)) {
                        evalType = 'respondState';
                    } else if (['INITIATE', 'ONAPPLY'].contains(name)) {
                        evalType = 'initiateState';
                    } else if (['CONFIRM', 'PREDAMAGE', 'PRE-DAMAGE'].contains(name)) {
                        evalType = 'confirmState';
                    } else if (['ESTABLISH', 'POSTDAMAGE', 'POST-DAMAGE'].contains(name)) {
                        evalType = 'establishState';
                    } else if (['CONCLUDE', 'OFFAPPLY'].contains(name)) {
                        evalType = 'concludeState';
                    } else if (['ACTION START', 'START'].contains(name)) {
                        evalType = 'actionStartState';
                    } else if (['ACTION END', 'FINISH'].contains(name)) {
                        evalType = 'actionEndState';
                    } else if (['BATTLE', 'BATTLE START'].contains(name)) {
                        evalType = 'battle';
                    } else if (['VICTORY', 'BATTLE VICTORY'].contains(name)) {
                        evalType = 'victory';
                    } else if (['DEFEAT', 'BATTLE DEFEAT'].contains(name)) {
                        evalType = 'defeat';
                    } else if (['ESCAPE', 'BATTLE ESCAPE'].contains(name)) {
                        evalType = 'escape';
                    }
                } else if (line.match(/<\/CUSTOM[ ](.*)[ ]EFFECT>/i)) {
                    evalMode = 'none';
                    evalType = 'none';
                } else if (evalMode === 'custom state effect') {
                    obj.customEffectEval[evalType] = obj.customEffectEval[evalType] +
                        line + '\n';
                } else if (line.match(/<COUNTER FONT SIZE:[ ](\d+)>/i)) {
                    obj.stateCounterSettings['size'] = parseInt(RegExp.$1);
                } else if (line.match(/<COUNTER[ ](?:ALIGNMENT|align):[ ](.*)>/i)) {
                    obj.stateCounterSettings['align'] = String(RegExp.$1).toLowerCase();
                } else if (line.match(/<COUNTER BUFFER X:[ ]([\+\-]\d+)>/i)) {
                    obj.stateCounterSettings['bufferX'] = parseInt(RegExp.$1);
                } else if (line.match(/<COUNTER BUFFER Y:[ ]([\+\-]\d+)>/i)) {
                    obj.stateCounterSettings['bufferY'] = parseInt(RegExp.$1);
                } else if (line.match(/<COUNTER TEXT COLOR:[ ](\d+)>/i)) {
                    obj.stateCounterSettings['color'] = parseInt(RegExp.$1);
                }
            }
        }
    },
    initStateEval: function (obj) {
        obj.customEffectEval = {};
        obj.customEffectEval['addState'] = '';
        obj.customEffectEval['removeState'] = '';
        obj.customEffectEval['leaveState'] = '';
        obj.customEffectEval['turnStartState'] = '';
        obj.customEffectEval['turnEndState'] = '';
        obj.customEffectEval['regenerateState'] = '';
        obj.customEffectEval['selectState'] = '';
        obj.customEffectEval['deselectState'] = '';
        obj.customEffectEval['reactState'] = '';
        obj.customEffectEval['respondState'] = '';
        obj.customEffectEval['initiateState'] = '';
        obj.customEffectEval['concludeState'] = '';
        obj.customEffectEval['confirmState'] = '';
        obj.customEffectEval['establishState'] = '';
        obj.customEffectEval['actionStartState'] = '';
        obj.customEffectEval['actionEndState'] = '';
        obj.customEffectEval['battle'] = '';
        obj.customEffectEval['victory'] = '';
        obj.customEffectEval['defeat'] = '';
        obj.customEffectEval['escape'] = '';
    },
    initStateCounter: function (obj) {
        obj.stateCounterSettings = {};
        obj.stateCounterSettings['size'] = Yanfly.Param.BSCCounterSize || 16;
        obj.stateCounterSettings['align'] = Yanfly.Param.BSCCounterAlign;
        if (obj.stateCounterSettings['align'] === 'undefined') {
            obj.stateCounterSettings['align'] = 'center';
        }
        obj.stateCounterSettings['bufferX'] = Yanfly.Param.BSCCounterBufferX || 0;
        obj.stateCounterSettings['bufferY'] = Yanfly.Param.BSCCounterBufferY || 8;
        obj.stateCounterSettings['color'] = Yanfly.Param.BSCCounterColor || 0;
    },
    processBSCNotetags2: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.maxBuff = [0, 0, 0, 0, 0, 0, 0, 0];
            obj.maxDebuff = [0, 0, 0, 0, 0, 0, 0, 0];

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:MAX)[ ](.*)[ ](?:BUFF):[ ]([\+\-]\d+)>/i)) {
                    var paramId = 8;
                    var stat = String(RegExp.$1).toUpperCase();
                    var limit = parseInt(RegExp.$2);
                    if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(stat)) {
                        paramId = 0;
                    } else if (['MAXMP', 'MAX MP', 'MMP', 'MP'].contains(stat)) {
                        paramId = 1;
                    } else if (['ATK', 'STR'].contains(stat)) {
                        paramId = 2;
                    } else if (['DEF'].contains(stat)) {
                        paramId = 3;
                    } else if (['MAT', 'INT'].contains(stat)) {
                        paramId = 4;
                    } else if (['MDF', 'RES'].contains(stat)) {
                        paramId = 5;
                    } else if (['AGI', 'SPD'].contains(stat)) {
                        paramId = 6;
                    } else if (['LUK'].contains(stat)) {
                        paramId = 7;
                    }
                    obj.maxBuff[paramId] = limit;
                } else if (line.match(/<(?:MAX)[ ](.*)[ ](?:DEBUFF):[ ]([\+\-]\d+)>/i)) {
                    var paramId = 8;
                    var stat = String(RegExp.$1).toUpperCase();
                    var limit = parseInt(RegExp.$2);
                    if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(stat)) {
                        paramId = 0;
                    } else if (['MAXMP', 'MAX MP', 'MMP', 'MP'].contains(stat)) {
                        paramId = 1;
                    } else if (['ATK', 'STR'].contains(stat)) {
                        paramId = 2;
                    } else if (['DEF'].contains(stat)) {
                        paramId = 3;
                    } else if (['MAT', 'INT'].contains(stat)) {
                        paramId = 4;
                    } else if (['MDF', 'RES'].contains(stat)) {
                        paramId = 5;
                    } else if (['AGI', 'SPD'].contains(stat)) {
                        paramId = 6;
                    } else if (['LUK'].contains(stat)) {
                        paramId = 7;
                    }
                    obj.maxDebuff[paramId] = limit;
                }
            }
        }
    },
    processBSCNotetags3: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.modifyTurnBuff = [0, 0, 0, 0, 0, 0, 0, 0];
            obj.modifyTurnDebuff = [0, 0, 0, 0, 0, 0, 0, 0];
            obj.modifyTurnBuffEval = ['', '', '', '', '', '', '', ''];
            obj.modifyTurnDebuffEval = ['', '', '', '', '', '', '', ''];
            obj.modifyTurnState = {};
            obj.modifyTurnStateEval = {};
            var evalMode = 'none';
            var evalLine = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(.*)[ ](?:BUFF TURNS):[ ]([\+\-]\d+)>/i)) {
                    var paramId = 8;
                    var stat = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(stat)) {
                        paramId = 0;
                    } else if (['MAXMP', 'MAX MP', 'MMP', 'MP'].contains(stat)) {
                        paramId = 1;
                    } else if (['ATK', 'STR'].contains(stat)) {
                        paramId = 2;
                    } else if (['DEF'].contains(stat)) {
                        paramId = 3;
                    } else if (['MAT', 'INT'].contains(stat)) {
                        paramId = 4;
                    } else if (['MDF', 'RES'].contains(stat)) {
                        paramId = 5;
                    } else if (['AGI', 'SPD'].contains(stat)) {
                        paramId = 6;
                    } else if (['LUK'].contains(stat)) {
                        paramId = 7;
                    }
                    obj.modifyTurnBuff[paramId] = value;
                } else if (line.match(/<(.*)[ ](?:DEBUFF TURNS):[ ]([\+\-]\d+)>/i)) {
                    var paramId = 8;
                    var stat = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(stat)) {
                        paramId = 0;
                    } else if (['MAXMP', 'MAX MP', 'MMP', 'MP'].contains(stat)) {
                        paramId = 1;
                    } else if (['ATK', 'STR'].contains(stat)) {
                        paramId = 2;
                    } else if (['DEF'].contains(stat)) {
                        paramId = 3;
                    } else if (['MAT', 'INT'].contains(stat)) {
                        paramId = 4;
                    } else if (['MDF', 'RES'].contains(stat)) {
                        paramId = 5;
                    } else if (['AGI', 'SPD'].contains(stat)) {
                        paramId = 6;
                    } else if (['LUK'].contains(stat)) {
                        paramId = 7;
                    }
                    obj.modifyTurnDebuff[paramId] = value;
                } else if (line.match(/<(?:CUSTOM)[ ](.*)[ ](?:BUFF TURNS)>/i)) {
                    evalMode = 'custom buff';
                    evalLine = '';
                } else if (line.match(/<\/(?:CUSTOM)[ ](.*)[ ](?:BUFF TURNS)>/i)) {
                    var paramId = 8;
                    var stat = String(RegExp.$1).toUpperCase();
                    if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(stat)) {
                        paramId = 0;
                    } else if (['MAXMP', 'MAX MP', 'MMP', 'MP'].contains(stat)) {
                        paramId = 1;
                    } else if (['ATK', 'STR'].contains(stat)) {
                        paramId = 2;
                    } else if (['DEF'].contains(stat)) {
                        paramId = 3;
                    } else if (['MAT', 'INT'].contains(stat)) {
                        paramId = 4;
                    } else if (['MDF', 'RES'].contains(stat)) {
                        paramId = 5;
                    } else if (['AGI', 'SPD'].contains(stat)) {
                        paramId = 6;
                    } else if (['LUK'].contains(stat)) {
                        paramId = 7;
                    }
                    obj.modifyTurnBuffEval[paramId] = evalLine;
                    evalMode = 'none';
                    evalLine = '';
                } else if (evalMode === 'custom buff') {
                    evalLine = evalLine + line + '\n';
                } else if (line.match(/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i)) {
                    obj.modifyTurnState[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var id = Yanfly.StateIdRef[name];
                    obj.modifyTurnState[id] = value;
                } else if (line.match(/<(?:CUSTOM STATE)[ ](.*)[ ](?:TURNS)>/i)) {
                    evalMode = 'custom state';
                    evalLine = '';
                } else if (line.match(/<\/(?:CUSTOM STATE)[ ](.*)[ ](?:TURNS)>/i)) {
                    var text = String(RegExp.$1);
                    if (text.match(/(\d+)/i)) {
                        var id = parseInt(RegExp.$1);
                    } else {
                        var id = Yanfly.StateIdRef[text.toUpperCase()];
                    }
                    obj.modifyTurnStateEval[id] = evalLine;
                    evalMode = 'none';
                    evalLine = '';
                } else if (evalMode === 'custom state') {
                    evalLine = evalLine + line + '\n';
                }
            }
        }
    },
    processBSCNotetags4: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.showStateTurns = Yanfly.Param.BSCShowEnemyTurns;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:SHOW STATE TURNS)>/i)) {
                    obj.showStateTurns = true;
                } else if (line.match(/<(?:HIDE STATE TURNS)>/i)) {
                    obj.showStateTurns = false;
                }
            }
        }
    },
    processCTBNotetagsC: function (group) {
        if (Yanfly.ClassIdRef) return;
        Yanfly.ClassIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.ClassIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processCTBNotetags1: function (group) {
        var noteA1 = /<(?:CTB SPEED):[ ](\d+)>/i;
        var noteA2 = /<(?:CTB SPEED):[ ]([\+\-]\d+)>/i;
        var noteA3 = /<(?:CTB SPEED):[ ](\d+)([%％])>/i;
        var noteA4 = /<(?:CTB SPEED):[ ]([\+\-]\d+)([%％])>/i;
        var noteB1 = /<(?:CTB ORDER):[ ]([\+\-]\d+)>/i;
        var noteS1 = /<(?:AFTER CTB):[ ](\d+)>/i;
        var noteS2 = /<(?:AFTER CTB):[ ](\d+)([%％])>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.setCTBGaugeFlat = undefined;
            obj.addCTBGaugeFlat = 0;
            obj.setCTBGaugeRate = undefined;
            obj.addCTBGaugeRate = 0.0;
            obj.ctbOrderModifier = 0;
            obj.afterCTBFlat = undefined;
            obj.afterCTBRate = undefined;
            var evalMode = 'none';
            obj.ctbEval = '';
            obj.ctbOrderEval = '';
            obj.ctbAfterEval = '';
            obj.ctbHelp = undefined;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(noteA1)) {
                    obj.setCTBGaugeFlat = parseInt(RegExp.$1);
                } else if (line.match(noteA2)) {
                    obj.addCTBGaugeFlat = parseInt(RegExp.$1);
                } else if (line.match(noteA3)) {
                    obj.setCTBGaugeRate = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(noteA4)) {
                    obj.addCTBGaugeRate = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(noteB1)) {
                    obj.ctbOrderModifier = parseInt(RegExp.$1);
                } else if (line.match(noteS1)) {
                    obj.afterCTBFlat = parseInt(RegExp.$1);
                } else if (line.match(noteS2)) {
                    obj.afterCTBRate = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(/<(?:TARGET CTB SPEED EVAL)>/i)) {
                    evalMode = 'ctb speed eval';
                } else if (line.match(/<\/(?:TARGET CTB SPEED EVAL)>/i)) {
                    evalMode = 'none';
                } else if (line.match(/<(?:TARGET CTB ORDER EVAL)>/i)) {
                    evalMode = 'ctb order eval';
                } else if (line.match(/<\/(?:TARGET CTB ORDER EVAL)>/i)) {
                    evalMode = 'none';
                } else if (line.match(/<(?:AFTER CTB EVAL)>/i)) {
                    evalMode = 'after ctb eval';
                } else if (line.match(/<\/(?:AFTER CTB EVAL)>/i)) {
                    evalMode = 'none';
                } else if (line.match(/<(?:CTB HELP)>/i)) {
                    evalMode = 'ctb help';
                    obj.ctbHelp = '';
                } else if (line.match(/<\/(?:CTB HELP)>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'ctb help') {
                    obj.ctbHelp = obj.ctbHelp + line + '\n';
                } else if (evalMode === 'ctb speed eval') {
                    obj.ctbEval = obj.ctbEval + line + '\n';
                } else if (evalMode === 'ctb order eval') {
                    obj.ctbOrderEval = obj.ctbOrderEval + line + '\n';
                } else if (evalMode === 'after ctb eval') {
                    obj.ctbAfterEval = obj.ctbAfterEval + line + '\n';
                }
            }
        }
    },
    processCTBNotetags2: function (group) {
        var noteA1 = /<(?:CTB START):[ ]([\+\-]\d+)>/i;
        var noteA2 = /<(?:CTB START):[ ]([\+\-]\d+)([%％])>/i;
        var noteB1 = /<(?:CTB TURN):[ ]([\+\-]\d+)>/i;
        var noteB2 = /<(?:CTB TURN):[ ]([\+\-]\d+)([%％])>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.ctbStartFlat = 0;
            obj.ctbStartRate = 0;
            obj.ctbTurnFlat = 0;
            obj.ctbTurnRate = 0;
            var evalMode = 'none';
            obj.ctbHelp = undefined;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(noteA1)) {
                    obj.ctbStartFlat = parseInt(RegExp.$1);
                } else if (line.match(noteA2)) {
                    obj.ctbStartRate = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(noteB1)) {
                    obj.ctbTurnFlat = parseInt(RegExp.$1);
                } else if (line.match(noteB2)) {
                    obj.ctbTurnRate = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(/<(?:CTB HELP)>/i)) {
                    evalMode = 'ctb help';
                    obj.ctbHelp = '';
                } else if (line.match(/<\/(?:CTB HELP)>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'ctb help') {
                    obj.ctbHelp = obj.ctbHelp + line + '\n';
                }
            }
        }
    },
    processCTBNotetags3: function (group, isActor) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            if (isActor) obj.ctbIcon = Yanfly.Param.CTBAllyIcon;
            if (isActor) obj.ctbBorderColor = Yanfly.Param.CTBColorAllyBr;
            if (isActor) obj.ctbBackgroundColor = Yanfly.Param.CTBColorAllyBg;
            if (isActor) obj.ctbClassIcon = {};
            if (!isActor) obj.ctbIcon = Yanfly.Param.CTBEnemyIcon;
            if (!isActor) obj.ctbBorderColor = Yanfly.Param.CTBColorEnemyBr;
            if (!isActor) obj.ctbBackgroundColor = Yanfly.Param.CTBColorEnemyBg;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:CTB ICON):[ ](\d+)>/i)) {
                    obj.ctbIcon = parseInt(RegExp.$1);
                } else if (line.match(/<(?:CTB BORDER COLOR):[ ](\d+)>/i)) {
                    obj.ctbBorderColor = parseInt(RegExp.$1);
                } else if (line.match(/<(?:CTB BACKGROUND COLOR):[ ](\d+)>/i)) {
                    obj.ctbBackgroundColor = parseInt(RegExp.$1);
                } else if (line.match(/<(?:CLASS)[ ](\d+)[ ](?:CTB ICON):[ ](\d+)>/i)) {
                    var classId = parseInt(RegExp.$1);
                    var icon = parseInt(RegExp.$2);
                    obj.ctbClassIcon[classId] = icon;
                } else if (line.match(/<(.*)[ ](?:CTB ICON):[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var icon = parseInt(RegExp.$2);
                    var classId = Yanfly.ClassIdRef[name];
                    if (classId) obj.ctbClassIcon[classId] = icon;
                }
            }
        }
    },
    processSkillNotetags: function (group) {
        var note1 = /<(?:MP COST):[ ](\d+)>/i;
        var note2 = /<(?:MP COST):[ ](\d+)([%％])>/i;
        var note3 = /<(?:TP COST):[ ](\d+)>/i;
        var note4 = /<(?:TP COST):[ ](\d+)([%％])>/i;
        var note5 = /<(?:HP COST):[ ](\d+)>/i;
        var note6 = /<(?:HP COST):[ ](\d+)([%％])>/i;
        var note7a = /<(?:HIDE IF LEARNED SKILL):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note7b = /<(?:HIDE IF LEARNED SKILL):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note8a = /<(?:HIDE IN BATTLE|hide during battle)>/i;
        var note8b = /<(?:HIDE IN FIELD|hide during field)>/i;
        var noteMpEval1 = /<(?:MP COST EVAL|custom mp cost)>/i;
        var noteMpEval2 = /<\/(?:MP COST EVAL|custom mp cost)>/i;
        var noteTpEval1 = /<(?:TP COST EVAL|custom tp cost)>/i;
        var noteTpEval2 = /<\/(?:TP COST EVAL|custom tp cost)>/i;
        var noteHpEval1 = /<(?:HP COST EVAL|custom hp cost)>/i;
        var noteHpEval2 = /<\/(?:HP COST EVAL|custom hp cost)>/i;
        var noteEvalReq1 = /<(?:EVAL REQUIREMENT|custom requirement)>/i;
        var noteEvalReq2 = /<\/(?:EVAL REQUIREMENT|custom requirement)>/i;
        var noteEvalExe1 = /<(?:EVAL EXECUTION|custom execution)>/i;
        var noteEvalExe2 = /<\/(?:EVAL EXECUTION|custom execution)>/i;
        var noteCostEval1 = /<(?:COST DISPLAY EVAL|display cost eval)>/i;
        var noteCostEval2 = /<\/(?:COST DISPLAY EVAL|display cost eval)>/i;
        var noteCostText1 = /<(?:CUSTOM COST DISPLAY|custom display cost)>/i;
        var noteCostText2 = /<\/(?:CUSTOM COST DISPLAY|custom display cost)>/i;
        var noteShowEval1 = /<(?:CUSTOM SHOW EVAL)>/i;
        var noteShowEval2 = /<\/(?:CUSTOM SHOW EVAL)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.hpCost = 0;
            obj.hpCostPer = 0.0;
            obj.mpCostPer = 0.0;
            obj.tpCostPer = 0.0;
            obj.hideInBattle = false;
            obj.hideInField = false;
            obj.hideIfLearnedSkill = [];
            var evalMode = 'none';
            obj.hpCostEval = '';
            obj.mpCostEval = '';
            obj.tpCostEval = '';
            obj.requireEval = '';
            obj.executeEval = '';
            obj.costdisplayEval = '';
            obj.costShowEval = '';
            obj.customCostText = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.mpCost = parseInt(RegExp.$1);
                } else if (line.match(note2)) {
                    obj.mpCostPer = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(note3)) {
                    obj.tpCost = parseInt(RegExp.$1);
                } else if (line.match(note4)) {
                    obj.tpCostPer = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(note5)) {
                    obj.hpCost = parseInt(RegExp.$1);
                } else if (line.match(note6)) {
                    obj.hpCostPer = parseFloat(RegExp.$1 * 0.01);
                } else if (line.match(note7a)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.hideIfLearnedSkill = obj.hideIfLearnedSkill.concat(array);
                } else if (line.match(note7b)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.hideIfLearnedSkill = obj.hideIfLearnedSkill.concat(range);
                } else if (line.match(note8a)) {
                    obj.hideInBattle = true;
                } else if (line.match(note8b)) {
                    obj.hideInField = true;
                } else if (line.match(noteMpEval1)) {
                    evalMode = 'mp';
                } else if (line.match(noteMpEval2)) {
                    evalMode = 'none';
                } else if (line.match(noteTpEval1)) {
                    evalMode = 'tp';
                } else if (line.match(noteTpEval2)) {
                    evalMode = 'none';
                } else if (line.match(noteHpEval1)) {
                    evalMode = 'hp';
                } else if (line.match(noteHpEval2)) {
                    evalMode = 'none';
                } else if (line.match(noteEvalReq1)) {
                    evalMode = 'custom requirement';
                } else if (line.match(noteEvalReq2)) {
                    evalMode = 'none';
                } else if (line.match(noteEvalExe1)) {
                    evalMode = 'custom execute';
                } else if (line.match(noteEvalExe2)) {
                    evalMode = 'none';
                } else if (line.match(noteCostEval1)) {
                    evalMode = 'display cost eval';
                } else if (line.match(noteCostEval2)) {
                    evalMode = 'none';
                } else if (line.match(noteCostText1)) {
                    evalMode = 'custom display cost';
                } else if (line.match(noteCostText2)) {
                    evalMode = 'none';
                } else if (line.match(noteShowEval1)) {
                    evalMode = 'custom show eval';
                } else if (line.match(noteShowEval2)) {
                    evalMode = 'none';
                } else if (evalMode === 'mp') {
                    obj.mpCostEval = obj.mpCostEval + line + '\n';
                } else if (evalMode === 'tp') {
                    obj.tpCostEval = obj.tpCostEval + line + '\n';
                } else if (evalMode === 'hp') {
                    obj.hpCostEval = obj.hpCostEval + line + '\n';
                } else if (evalMode === 'custom requirement') {
                    obj.requireEval = obj.requireEval + line + '\n';
                } else if (evalMode === 'custom execute') {
                    obj.executeEval = obj.executeEval + line + '\n';
                } else if (evalMode === 'display cost eval') {
                    obj.costdisplayEval = obj.costdisplayEval + line + '\n';
                } else if (evalMode === 'custom display cost') {
                    obj.customCostText = obj.customCostText + line;
                } else if (evalMode === 'custom show eval') {
                    obj.costShowEval = obj.costShowEval + line + '\n';
                }
            }
        }
    },
    processObjectNotetags: function (group) {
        var note1 = /<(?:BEFORE EVAL)>/i;
        var note2 = /<\/(?:BEFORE EVAL)>/i;
        var note3 = /<(?:PRE-DAMAGE EVAL)>/i;
        var note4 = /<\/(?:PRE-DAMAGE EVAL)>/i;
        var note5 = /<(?:POST-DAMAGE EVAL)>/i;
        var note6 = /<\/(?:POST-DAMAGE EVAL)>/i;
        var note7 = /<(?:AFTER EVAL)>/i;
        var note8 = /<\/(?:AFTER EVAL)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            var customMode = 'none';
            obj.customBeforeEval = '';
            obj.customPreDamageEval = '';
            obj.customPostDamageEval = '';
            obj.customAfterEval = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    customMode = 'before';
                } else if (line.match(note2)) {
                    customMode = 'none';
                } else if (line.match(note3)) {
                    customMode = 'pre-damage';
                } else if (line.match(note4)) {
                    customMode = 'none';
                } else if (line.match(note5)) {
                    customMode = 'post-damage';
                } else if (line.match(note6)) {
                    customMode = 'none';
                } else if (line.match(note7)) {
                    customMode = 'after';
                } else if (line.match(note8)) {
                    customMode = 'none';
                } else if (customMode === 'before') {
                    obj.customBeforeEval = obj.customBeforeEval + line + '\n';
                } else if (customMode === 'pre-damage') {
                    obj.customPreDamageEval = obj.customPreDamageEval + line + '\n';
                } else if (customMode === 'post-damage') {
                    obj.customPostDamageEval = obj.customPostDamageEval + line + '\n';
                } else if (customMode === 'after') {
                    obj.customAfterEval = obj.customAfterEval + line + '\n';
                }
            }
        }
    },
    processGSCNotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.gauge1 = 'HP';
            obj.gauge2 = 'MP';
            obj.gauge3 = 'TP';

            obj.gaugeIcon1 = 0;
            obj.gaugeIcon2 = 0;
            obj.gaugeIcon3 = 0;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:SWAP GAUGE|gauge)[ ](\d+):[ ](.*)>/i)) {
                    var gauge = parseInt(RegExp.$1);
                    var text = String(RegExp.$2).toUpperCase();
                    if (['HP', 'MP', 'TP', 'NOTHING', 'NULL'].contains(text)) {
                        if (gauge === 1) obj.gauge1 = text;
                        if (gauge === 2) obj.gauge2 = text;
                        if (gauge === 3) obj.gauge3 = text;
                    }
                }
            }
        }
    },
    processGSCNotetags2: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.gauge1 = 'UNDEFINED';
            obj.gauge2 = 'UNDEFINED';
            obj.gauge3 = 'UNDEFINED';

            obj.gaugeIcon1 = 'UNDEFINED';
            obj.gaugeIcon2 = 'UNDEFINED';
            obj.gaugeIcon3 = 'UNDEFINED';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:SWAP GAUGE|gauge)[ ](\d+):[ ](.*)>/i)) {
                    var gauge = parseInt(RegExp.$1);
                    var text = String(RegExp.$2).toUpperCase();
                    if (['HP', 'MP', 'TP', 'NOTHING', 'NULL'].contains(text)) {
                        if (gauge === 1) obj.gauge1 = text;
                        if (gauge === 2) obj.gauge2 = text;
                        if (gauge === 3) obj.gauge3 = text;
                    }
                }
            }
        }
    },
    processSCDNotetagsS: function (group) {
        if (Yanfly.SkillIdRef) return;
        Yanfly.SkillIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.SkillIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processSCDNotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.cooldown = {};
            obj.stypeCooldown = {}
            obj.globalCooldown = 0;
            obj.afterBattleCooldown = eval(Yanfly.Param.CDAfterBattle);
            obj.cooldownSteps = Math.max(1, parseInt(Yanfly.Param.CDSteps));
            obj.warmup = 0;
            obj.bypassCooldown = Yanfly.Param.CDBypass.contains(obj.id);
            obj.cooldownEval = '';
            obj.warmupEval = '';
            var evalMode = 'none';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:COOLDOWN):[ ](\d+)>/i)) {
                    obj.cooldown[obj.id] = parseInt(RegExp.$1);
                } else if (line.match(/<(?:AFTER BATTLE COOLDOWN):[ ]([\+\-]\d+)>/i)) {
                    obj.afterBattleCooldown = parseInt(RegExp.$1);
                } else if (line.match(/<(?:COOLDOWN STEPS):[ ](\d+)>/i)) {
                    obj.cooldownSteps = parseInt(RegExp.$1);
                } else if (line.match(/<(?:WARMUP):[ ](\d+)>/i)) {
                    obj.warmup = parseInt(RegExp.$1);
                } else if (line.match(/<(?:SKILL)[ ](\d+)[ ](?:COOLDOWN):[ ](\d+)>/i)) {
                    obj.cooldown[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(/<(?:SKILL)[ ](.*)[ ](?:COOLDOWN):[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    if (Yanfly.SkillIdRef[name]) {
                        var id = Yanfly.SkillIdRef[name];
                    } else {
                        continue;
                    }
                    obj.cooldown[id] = parseInt(RegExp.$2);
                } else if (line.match(/<(?:STYPE)[ ](\d+)[ ](?:COOLDOWN):[ ](\d+)>/i)) {
                    obj.stypeCooldown[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(/<(?:GLOBAL COOLDOWN):[ ](\d+)>/i)) {
                    obj.globalCooldown = parseInt(RegExp.$1);
                } else if (line.match(/<(?:BYPASS COOLDOWN)>/i)) {
                    obj.bypassCooldown = true;
                } else if (line.match(/<(?:COOLDOWN EVAL)>/i)) {
                    obj.cooldown[obj.id] = obj.cooldown[obj.id] || 0;
                    evalMode = 'cooldown';
                } else if (line.match(/<\/(?:COOLDOWN EVAL)>/i)) {
                    evalMode = 'none';
                } else if (line.match(/<(?:WARMUP EVAL)>/i)) {
                    evalMode = 'warmup';
                } else if (line.match(/<\/(?:WARMUP EVAL)>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'cooldown') {
                    obj.cooldownEval = obj.cooldownEval + line + '\n';
                } else if (evalMode === 'warmup') {
                    obj.warmupEval = obj.warmupEval + line + '\n';
                }
            }
        }
    },
    processSCDNotetags2: function (group) {
        var note1 = /<(?:SKILL)[ ](\d+)[ ](?:COOLDOWN):[ ]([\+\-]\d+)>/i;
        var note1a = /<(?:SKILL)[ ](.*)[ ](?:COOLDOWN):[ ]([\+\-]\d+)>/i;
        var note2 = /<(?:STYPE)[ ](\d+)[ ](?:COOLDOWN):[ ]([\+\-]\d+)>/i;
        var note3 = /<(?:GLOBAL COOLDOWN):[ ]([\+\-]\d+)>/i;
        var note4 = /<(?:SKILL)[ ](\d+)[ ](?:WARMUP):[ ]([\+\-]\d+)>/i;
        var note4a = /<(?:SKILL)[ ](.*)[ ](?:WARMUP):[ ]([\+\-]\d+)>/i;
        var note5 = /<(?:STYPE)[ ](\d+)[ ](?:WARMUP):[ ]([\+\-]\d+)>/i;
        var note6 = /<(?:GLOBAL WARMUP):[ ]([\+\-]\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.cooldownChange = {};
            obj.stypeCooldownChange = {};
            obj.globalCooldownChange = 0;
            obj.warmupChange = {};
            obj.stypeWarmupChange = {};
            obj.globalWarmupChange = 0;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.cooldownChange[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(note1a)) {
                    var name = String(RegExp.$1).toUpperCase();
                    if (Yanfly.SkillIdRef[name]) {
                        var id = Yanfly.SkillIdRef[name];
                    } else {
                        continue;
                    }
                    obj.cooldownChange[id] = parseInt(RegExp.$2);
                } else if (line.match(note2)) {
                    obj.stypeCooldownChange[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(note3)) {
                    obj.globalCooldownChange = parseInt(RegExp.$1);
                } else if (line.match(note4)) {
                    obj.warmupChange[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(note4a)) {
                    var name = String(RegExp.$1).toUpperCase();
                    if (Yanfly.SkillIdRef[name]) {
                        var id = Yanfly.SkillIdRef[name];
                    } else {
                        continue;
                    }
                    obj.warmupChange[id] = parseInt(RegExp.$2);
                } else if (line.match(note5)) {
                    obj.stypeWarmupChange[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
                } else if (line.match(note6)) {
                    obj.globalWarmupChange = parseInt(RegExp.$1);
                }
            }
        }
    },
    processSCDNotetags3: function (group) {
        var note1 = /<(?:SKILL)[ ](\d+)[ ](?:COOLDOWN DURATION):[ ](\d+)([%％])>/i;
        var note1a = /<(?:SKILL)[ ](.*)[ ](?:COOLDOWN DURATION):[ ](\d+)([%％])>/i;
        var note2 = /<(?:STYPE)[ ](\d+)[ ](?:COOLDOWN DURATION):[ ](\d+)([%％])>/i;
        var note3 = /<(?:GLOBAL COOLDOWN DURATION):[ ](\d+)([%％])>/i;
        var note4 = /<(?:SKILL)[ ](\d+)[ ](?:COOLDOWN RATE):[ ](\d+)([%％])>/i;
        var note4a = /<(?:SKILL)[ ](.*)[ ](?:COOLDOWN RATE):[ ](\d+)([%％])>/i;
        var note5 = /<(?:STYPE)[ ](\d+)[ ](?:COOLDOWN RATE):[ ](\d+)([%％])>/i;
        var note6 = /<(?:GLOBAL COOLDOWN RATE):[ ](\d+)([%％])>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.cooldownDuration = {};
            obj.stypeCooldownDuration = {};
            obj.globalCooldownDuration = 1.0;
            obj.cooldownRate = {};
            obj.stypeCooldownRate = {};
            obj.globalCooldownRate = 1.0;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.cooldownDuration[parseInt(RegExp.$1)] =
                        parseFloat(RegExp.$2) * 0.01;
                } else if (line.match(note1a)) {
                    var name = String(RegExp.$1).toUpperCase();
                    if (Yanfly.SkillIdRef[name]) {
                        var id = Yanfly.SkillIdRef[name];
                    } else {
                        continue;
                    }
                    obj.cooldownDuration[id] = parseFloat(RegExp.$2) * 0.01;
                } else if (line.match(note2)) {
                    obj.stypeCooldownDuration[parseInt(RegExp.$1)] =
                        parseFloat(RegExp.$2) * 0.01;
                } else if (line.match(note3)) {
                    obj.globalCooldownDuration = parseFloat(RegExp.$1) * 0.01;
                } else if (line.match(note4)) {
                    obj.cooldownRate[parseInt(RegExp.$1)] = parseFloat(RegExp.$2) * 0.01;
                } else if (line.match(note4a)) {
                    var name = String(RegExp.$1).toUpperCase();
                    if (Yanfly.SkillIdRef[name]) {
                        var id = Yanfly.SkillIdRef[name];
                    } else {
                        continue;
                    }
                    obj.cooldownRate[id] = parseFloat(RegExp.$2) * 0.01;
                } else if (line.match(note5)) {
                    obj.stypeCooldownRate[parseInt(RegExp.$1)] =
                        parseFloat(RegExp.$2) * 0.01;
                } else if (line.match(note6)) {
                    obj.globalCooldownRate = parseFloat(RegExp.$1 * 0.01);
                }
            }
        }
    },
    processLSNotetags1: function (group) {
        var noteA1 = /<(.*)[ ]LIFE STEAL[ ](.*):[ ]([\+\-]\d+)([%％])>/i;
        var noteA2 = /<(.*)[ ]LIFE STEAL[ ](.*):[ ]([\+\-]\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.lifeSteal = {
                hpPhysicalRate: 0,
                hpMagicalRate: 0,
                hpCertainRate: 0,
                hpPhysicalFlat: 0,
                hpMagicalFlat: 0,
                hpCertainFlat: 0,

                mpPhysicalRate: 0,
                mpMagicalRate: 0,
                mpCertainRate: 0,
                mpPhysicalFlat: 0,
                mpMagicalFlat: 0,
                mpCertainFlat: 0,

                allGuard: false,
                hpGuard: false,
                mpGuard: false,

                allNull: false,
                hpNull: false,
                mpNull: false
            }
            var evalMode = 'none';
            var evalKey = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(noteA1)) {
                    var type = String(RegExp.$1);
                    var hit = String(RegExp.$2);
                    var value = parseFloat(RegExp.$3) * 0.01;
                    this.makeLifeStealKey(obj, type, hit, 'Rate', value);
                } else if (line.match(noteA2)) {
                    var type = String(RegExp.$1);
                    var hit = String(RegExp.$2);
                    var value = parseInt(RegExp.$3);
                    this.makeLifeStealKey(obj, type, hit, 'Flat', value);
                } else if (line.match(/<CUSTOM[ ](.*)[ ]LIFE STEAL[ ](.*)[ ](.*)>/i)) {
                    var type = String(RegExp.$1).toLowerCase();
                    var hit = String(RegExp.$2);
                    var param = String(RegExp.$3);
                    if (hit.match(/physical/i)) {
                        hit = 'Physical';
                    } else if (hit.match(/magical/i)) {
                        hit = 'Magical';
                    } else if (hit.match(/certain/i)) {
                        hit = 'Certain';
                    } else {
                        continue;
                    }
                    if (param.match(/rate/i)) {
                        param = 'Rate';
                    } else if (param.match(/flat/i)) {
                        param = 'Flat';
                    } else {
                        continue;
                    }
                    evalMode = 'custom lifesteal';
                    evalKey = type + hit + param + 'Eval';
                    obj.lifeSteal[evalKey] = '';
                } else if (line.match(/<\/CUSTOM[ ](.*)[ ]LIFE STEAL[ ](.*)[ ](.*)>/i)) {
                    evalMode = 'none';
                    evalKey = '';
                } else if (evalMode === 'custom lifesteal') {
                    obj.lifeSteal[evalKey] = obj.lifeSteal[evalKey] + line + '\n';
                } else if (line.match(/<GUARD LIFE STEAL>/i)) {
                    obj.lifeSteal['allGuard'] = true;
                } else if (line.match(/<GUARD HP LIFE STEAL>/i)) {
                    obj.lifeSteal['hpGuard'] = true;
                } else if (line.match(/<GUARD MP LIFE STEAL>/i)) {
                    obj.lifeSteal['mpGuard'] = true;
                } else if (line.match(/<CANCEL LIFE STEAL>/i)) {
                    obj.lifeSteal['allNull'] = true;
                } else if (line.match(/<CANCEL HP LIFE STEAL>/i)) {
                    obj.lifeSteal['hpNull'] = true;
                } else if (line.match(/<CANCEL MP LIFE STEAL>/i)) {
                    obj.lifeSteal['mpNull'] = true;
                }
            }
        }
    },
    makeLifeStealKey: function (obj, type, hit, param, value) {
        type = type.toLowerCase();
        if (!['hp', 'mp'].contains(type)) return;
        if (hit.match(/physical/i)) {
            hit = 'Physical';
        } else if (hit.match(/magical/i)) {
            hit = 'Magical';
        } else if (hit.match(/certain/i)) {
            hit = 'Certain';
        } else {
            return;
        }
        var key = type + hit + param;
        obj.lifeSteal[key] = value;
    },
    processLSNotetags2: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.lifeSteal = {
                rate: 0,
                flat: 0,

                allNull: false,
                hpNull: false,
                mpNull: false
            }
            var evalMode = 'none';
            var evalKey = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(.*)[ ]LIFE STEAL:[ ](\d+)([%％])>/i)) {
                    var type = String(RegExp.$1).toLowerCase();
                    var value = parseFloat(RegExp.$2) * 0.01;
                    var key = type + 'Rate';
                    obj.lifeSteal[key] = value;
                } else if (line.match(/<(.*)[ ]LIFE STEAL:[ ](\d+)>/i)) {
                    var type = String(RegExp.$1).toLowerCase();
                    var value = parseInt(RegExp.$2);
                    var key = type + 'Flat';
                    obj.lifeSteal[key] = value;
                } else if (line.match(/<CUSTOM[ ](.*)[ ]LIFE STEAL[ ](.*)>/i)) {
                    var type = String(RegExp.$1).toLowerCase();
                    var param = String(RegExp.$2);
                    if (param.match(/rate/i)) {
                        param = 'Rate';
                    } else if (param.match(/flat/i)) {
                        param = 'Flat';
                    } else {
                        continue;
                    }
                    evalMode = 'custom lifesteal';
                    evalKey = type + param + 'Eval';
                    obj.lifeSteal[evalKey] = '';
                } else if (line.match(/<\/CUSTOM[ ](.*)[ ]LIFE STEAL[ ](.*)>/i)) {
                    evalMode = 'none';
                    evalKey = '';
                } else if (evalMode === 'custom lifesteal') {
                    obj.lifeSteal[evalKey] = obj.lifeSteal[evalKey] + line + '\n';
                } else if (line.match(/<CANCEL LIFE STEAL>/i)) {
                    obj.lifeSteal['allNull'] = true;
                } else if (line.match(/<CANCEL HP LIFE STEAL>/i)) {
                    obj.lifeSteal['hpNull'] = true;
                } else if (line.match(/<CANCEL MP LIFE STEAL>/i)) {
                    obj.lifeSteal['mpNull'] = true;
                }
            }
        }
    },
    processEDoTNotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.dotAnimation = 0;
            obj.dotElement = Yanfly.Param.EDoTDefElement;
            obj.dotVariance = Yanfly.Param.EDoTDefVariance;
            var evalMode = 'none';
            obj.dotFormula = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:REGEN|DOT) ANIMATION:[ ](\d+)>/i)) {
                    obj.dotAnimation = parseInt(RegExp.$1);
                } else if (line.match(/<(?:REGEN|REGENERATE) FORMULA:[ ](.*)>/i)) {
                    var formula = String(RegExp.$1);
                    obj.dotFormula = 'value = Math.max(0, ' + formula + ');\n';
                    obj.dotFormula += 'healing = true;'
                    if (obj.dotAnimation === 0) {
                        obj.dotAnimation = Yanfly.Param.EDoTRegenAni;
                    }
                } else if (line.match(/<(?:DOT|DAMAGE OVER TIME) FORMULA:[ ](.*)>/i)) {
                    var formula = String(RegExp.$1);
                    obj.dotFormula = 'value = Math.max(0, ' + formula + ');\n';
                    obj.dotFormula += 'healing = false;'
                    if (obj.dotAnimation === 0) {
                        obj.dotAnimation = Yanfly.Param.EDoTDamageAni;
                    }
                } else if (line.match(/<(?:REGEN|DOT) VARIANCE:[ ](\d+)([%％])>/i)) {
                    obj.dotVariance = parseInt(RegExp.$1);
                } else if (line.match(/<(?:REGEN|DOT) ELEMENT:[ ](\d+)>/i)) {
                    obj.dotElement = parseInt(RegExp.$1);
                } else if (line.match(/<(?:CUSTOM REGEN FORMULA)>/i)) {
                    evalMode = 'custom dot formula';
                } else if (line.match(/<\/(?:CUSTOM REGEN FORMULA)>/i)) {
                    obj.dotFormula += 'healing = true';
                    evalMode = 'none';
                } else if (line.match(/<(?:CUSTOM DOT FORMULA)>/i)) {
                    evalMode = 'custom dot formula';
                } else if (line.match(/<\/(?:CUSTOM DOT FORMULA)>/i)) {
                    obj.dotFormula += 'healing = false';
                    evalMode = 'none';
                } else if (evalMode === 'custom dot formula') {
                    obj.dotFormula += line + '\n';
                }
            }
        }
    },
    processShopNotetags: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.cannotSell = false;
            obj.canSell = false;
            obj.sellPrice = undefined;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:PRICE):[ ](\d+)>/i)) {
                    obj.price = parseInt(RegExp.$1);
                } else if (line.match(/<(?:SELL PRICE|SELLING PRICE):[ ](\d+)>/i)) {
                    obj.sellPrice = parseInt(RegExp.$1);
                } else if (line.match(/<(?:CANNOT SELL)>/i)) {
                    obj.cannotSell = true;
                } else if (line.match(/<(?:CAN SELL)>/i)) {
                    obj.canSell = true;
                }
            }
        }
    },
    processMCNotetagsI: function (group) {
        if (Yanfly.ItemIdRef) return;
        Yanfly.ItemIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.ItemIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processMCNotetagsW: function (group) {
        if (Yanfly.WeaponIdRef) return;
        Yanfly.WeaponIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.WeaponIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processMCNotetagsA: function (group) {
        if (Yanfly.ArmorIdRef) return;
        Yanfly.ArmorIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.ArmorIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processMCNotetags1: function (group, itemType) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.proxyBuy = 0;
            obj.variableBuyPrice = {};
            obj.variableBuyPrices = [];
            obj.variableSellPrice = {};
            obj.variableSellPrices = [];
            obj.itemBuyPrice = {};
            obj.itemBuyPrices = [];
            obj.itemSellPrice = {};
            obj.itemSellPrices = [];
            obj.weaponBuyPrice = {};
            obj.weaponBuyPrices = [];
            obj.weaponSellPrice = {};
            obj.weaponSellPrices = [];
            obj.armorBuyPrice = {};
            obj.armorBuyPrices = [];
            obj.armorSellPrice = {};
            obj.armorSellPrices = [];

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<PROXY BUY:[ ](\d+)>/i)) {
                    obj.proxyBuy = parseInt(RegExp.$1);
                    this.adjustProxyBuy(obj, itemType);
                } else if (line.match(/<PROXY BUY:[ ](.*)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    if (itemType === 0 && Yanfly.ItemIdRef[name]) {
                        obj.proxyBuy = Yanfly.ItemIdRef[name];
                    } else if (itemType === 1 && Yanfly.WeaponIdRef[name]) {
                        obj.proxyBuy = Yanfly.WeaponIdRef[name];
                    } else if (itemType === 2 && Yanfly.ArmorIdRef[name]) {
                        obj.proxyBuy = Yanfly.ArmorIdRef[name];
                    }
                    this.adjustProxyBuy(obj, itemType);
                } else if (line.match(/<VARIABLE[ ](\d+)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.variableBuyPrices.contains(varId)) continue;
                    obj.variableBuyPrices.unshift(varId);
                    obj.variableBuyPrice[varId] = value;
                } else if (line.match(/<VARIABLE[ ](\d+)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.variableSellPrices.contains(varId)) continue;
                    obj.variableSellPrices.unshift(varId);
                    obj.variableSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                } else if (line.match(/<ITEM[ ](\d+)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.itemBuyPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataItems[varId])) continue;
                    }
                    obj.itemBuyPrices.unshift(varId);
                    obj.itemBuyPrice[varId] = value;
                } else if (line.match(/<ITEM[ ](.*)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var varId = Yanfly.ItemIdRef[name];
                    if (!varId) continue;
                    if (obj.itemBuyPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataItems[varId])) continue;
                    }
                    obj.itemBuyPrices.unshift(varId);
                    obj.itemBuyPrice[varId] = value;
                } else if (line.match(/<ITEM[ ](\d+)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.itemSellPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataItems[varId])) continue;
                    }
                    obj.itemSellPrices.unshift(varId);
                    obj.itemSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                } else if (line.match(/<ITEM[ ](.*)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var varId = Yanfly.ItemIdRef[name];
                    if (!varId) continue;
                    if (obj.itemSellPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataItems[varId])) continue;
                    }
                    obj.itemSellPrices.unshift(varId);
                    obj.itemSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                } else if (line.match(/<WEAPON[ ](\d+)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.weaponBuyPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataWeapons[varId])) continue;
                    }
                    obj.weaponBuyPrices.unshift(varId);
                    obj.weaponBuyPrice[varId] = value;
                } else if (line.match(/<WEAPON[ ](.*)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var varId = Yanfly.WeaponIdRef[name];
                    if (!varId) continue;
                    if (obj.weaponBuyPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataWeapons[varId])) continue;
                    }
                    obj.weaponBuyPrices.unshift(varId);
                    obj.weaponBuyPrice[varId] = value;
                } else if (line.match(/<WEAPON[ ](\d+)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.weaponSellPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataWeapons[varId])) continue;
                    }
                    obj.weaponSellPrices.unshift(varId);
                    obj.weaponSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                } else if (line.match(/<WEAPON[ ](.*)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var varId = Yanfly.WeaponIdRef[name];
                    if (!varId) continue;
                    if (obj.weaponSellPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataWeapons[varId])) continue;
                    }
                    obj.weaponSellPrices.unshift(varId);
                    obj.weaponSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                } else if (line.match(/<ARMOR[ ](\d+)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.armorBuyPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataArmors[varId])) continue;
                    }
                    obj.armorBuyPrices.unshift(varId);
                    obj.armorBuyPrice[varId] = value;
                } else if (line.match(/<ARMOR[ ](.*)[ ]BUY PRICE:[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var varId = Yanfly.ArmorIdRef[name];
                    if (!varId) continue;
                    if (obj.armorBuyPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataArmors[varId])) continue;
                    }
                    obj.armorBuyPrices.unshift(varId);
                    obj.armorBuyPrice[varId] = value;
                } else if (line.match(/<ARMOR[ ](\d+)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var varId = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    if (obj.armorSellPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataArmors[varId])) continue;
                    }
                    obj.armorSellPrices.unshift(varId);
                    obj.armorSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                } else if (line.match(/<ARMOR[ ](.*)[ ]SELL PRICE:[ ](\d+)>/i)) {
                    var name = String(RegExp.$1).toUpperCase();
                    var value = parseInt(RegExp.$2);
                    var varId = Yanfly.ArmorIdRef[name];
                    if (!varId) continue;
                    if (obj.armorSellPrices.contains(varId)) continue;
                    if (Imported.YEP_ItemCore) {
                        if (DataManager.isIndependent($dataArmors[varId])) continue;
                    }
                    obj.armorSellPrices.unshift(varId);
                    obj.armorSellPrice[varId] = value;
                    obj.canSell = true;
                    obj.cannotSell = false;
                }
            }
        }
    },
    adjustProxyBuy: function (obj, itemType) {
        if (obj.proxyBuy <= 0) return;
        obj.nonIndependent = true;
        var id = obj.proxyBuy;
        var item = null;
        if (itemType === 0) item = $dataItems[id];
        if (itemType === 1) item = $dataWeapons[id];
        if (itemType === 2) item = $dataArmors[id];
        if (Yanfly.Param.MCCopyName) obj.name = item.name;
        if (Yanfly.Param.MCCopyIcon) obj.iconIndex = item.iconIndex;
        if (Yanfly.Param.MCCopyHelp) obj.description = item.description;
        if (Yanfly.Param.MCCopyParams && itemType === 0) {
            obj.effects = item.effects;
        }
        if (Yanfly.Param.MCCopyParams && itemType !== 0) {
            obj.params = item.params.slice();
        }
    },
    processItemCoreNotetags: function (group) {
        var note1 = /<(?:RANDOM VARIANCE):[ ](\d+)>/i;
        var note2 = /<(?:NONINDEPENDENT ITEM|not independent item)>/i;
        var note3 = /<(?:PRIORITY NAME)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.randomVariance = Yanfly.Param.ItemRandomVariance;
            obj.textColor = 0;
            if (Imported.YEP_CoreEngine) obj.textColor = Yanfly.Param.ColorNormal;
            obj.nonIndependent = false;
            obj.setPriorityName = false;
            obj.infoEval = '';
            obj.infoTextTop = '';
            obj.infoTextBottom = '';
            obj.onCreationEval = '';
            var evalMode = 'none';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    obj.randomVariance = parseInt(RegExp.$1);
                } else if (line.match(note2)) {
                    obj.nonIndependent = true;
                } else if (line.match(note3)) {
                    obj.setPriorityName = true;
                } else if (line.match(/<(?:INFO EVAL)>/i)) {
                    evalMode = 'info eval';
                } else if (line.match(/<\/(?:INFO EVAL)>/i)) {
                    evalMode = 'none';
                } else if (line.match(/<(?:INFO TEXT TOP)>/i)) {
                    evalMode = 'info text top';
                } else if (line.match(/<\/(?:INFO TEXT TOP)>/i)) {
                    evalMode = 'none';
                } else if (line.match(/<(?:INFO TEXT BOTTOM)>/i)) {
                    evalMode = 'info text bottom';
                } else if (line.match(/<\/(?:INFO TEXT BOTTOM)>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'info eval') {
                    obj.infoEval = obj.infoEval + line + '\n';
                } else if (evalMode === 'info text top') {
                    if (obj.infoTextTop !== '') obj.infoTextTop += '\n';
                    obj.infoTextTop = obj.infoTextTop + line;
                } else if (evalMode === 'info text bottom') {
                    if (obj.infoTextBottom !== '') obj.infoTextBottom += '\n';
                    obj.infoTextBottom = obj.infoTextBottom + line;
                } else if (line.match(/<(?:TEXT COLOR):[ ](\d+)>/i)) {
                    obj.textColor = parseInt(RegExp.$1);
                } else if (line.match(/<(?:ON CREATE EVAL|ON CREATION EVAL)>/i)) {
                    evalMode = 'on create eval';
                } else if (line.match(/<\/(?:ON CREATE EVAL|ON CREATION EVAL)>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'on create eval') {
                    obj.onCreationEval = obj.onCreationEval + line + '\n';
                }
            }
        }
    },
    setDatabaseLengths: function () {
        this._baseItemsLength = $dataItems.length
        this._baseWeaponsLength = $dataWeapons.length
        this._baseArmorsLength = $dataArmors.length
    },
    createIndependentObjects: function () {
        DataManager.createIndependentGroups();
        this.loadIndependentItems();
    },
    loadIndependentItems: function () {
        if (Yanfly.Param.ItemMaxItems > 0) {
            var difItems = $dataItems.length - DataManager._baseItemsLength;
            $dataItems.splice(DataManager._baseItemsLength, difItems);
            this.setIndependentLength($dataItems);
            $dataItems = $dataItems.concat(this._independentItems);
        }
        if (Yanfly.Param.ItemMaxWeapons > 0) {
            var difWeapons = $dataWeapons.length - DataManager._baseWeaponsLength;
            $dataWeapons.splice(DataManager._baseWeaponsLength, difWeapons);
            this.setIndependentLength($dataWeapons);
            $dataWeapons = $dataWeapons.concat(this._independentWeapons);
        }
        if (Yanfly.Param.ItemMaxArmors > 0) {
            var difArmors = $dataArmors.length - DataManager._baseArmorsLength;
            $dataArmors.splice(DataManager._baseArmorsLength, difArmors);
            this.setIndependentLength($dataArmors);
            $dataArmors = $dataArmors.concat(this._independentArmors);
        }
    },
    setIndependentLength: function (group) {
        for (; ;) {
            if (group.length > Yanfly.Param.ItemStartingId) break;
            group.push(null);
        }
    },
    createIndependentGroups: function () {
        this._independentItems = [];
        this._independentWeapons = [];
        this._independentArmors = [];
    },
    isIndependent: function (item) {
        if (!item) return false;
        if (DataManager.isBattleTest()) return false;
        if (item.nonIndependent) return false;
        if (DataManager.isItem(item)) return Yanfly.Param.ItemMaxItems > 0;
        if (DataManager.isWeapon(item)) return Yanfly.Param.ItemMaxWeapons > 0;
        if (DataManager.isArmor(item)) return Yanfly.Param.ItemMaxArmors > 0;
        return false;
    },
    registerNewItem: function (item) {
        if (!this.isNewItemValid(item)) return item;
        var newItem = JsonEx.makeDeepCopy(item);
        this.addNewIndependentItem(item, newItem);
        return newItem;
    },
    isNewItemValid: function (item) {
        if (!item) return false;
        if (item.baseItemId) return false;
        return item.id === this.getDatabase(item).indexOf(item);
    },
    addNewIndependentItem: function (baseItem, newItem) {
        newItem.id = this.getDatabase(baseItem).length;
        ItemManager.setNewIndependentItem(baseItem, newItem);
        ItemManager.customizeNewIndependentItem(baseItem, newItem);
        ItemManager.onCreationEval(baseItem, newItem);
        this.getDatabase(baseItem).push(newItem);
        this.getContainer(baseItem).push(newItem);
    },
    removeIndependentItem: function (item) {
        if (!item) return;
        if (this.independentItemIsUsed(item)) return;
        var container = this.getContainer(item);
        var database = this.getDatabase(item);
        var index = container.indexOf(item);
        container[index] = null;
        var index = database.indexOf(item);
        database[index] = null;
    },
    independentItemIsUsed: function (item) {
        if ($gameParty.numItems(item) > 0) return false;
        for (var i = 0; i < $dataActors.length; ++i) {
            var actor = $gameActors.actor(i);
            if (!actor) continue;
            if (actor.equips().contains(item)) return true;
        }
        return false;
    },
    getDatabase: function (item) {
        if (!item) return [];
        if (DataManager.isItem(item)) return $dataItems;
        if (DataManager.isWeapon(item)) return $dataWeapons;
        if (DataManager.isArmor(item)) return $dataArmors;
        return [];
    },
    getContainer: function (item) {
        if (!item) return [];
        if (DataManager.isItem(item)) return this._independentItems;
        if (DataManager.isWeapon(item)) return this._independentWeapons;
        if (DataManager.isArmor(item)) return this._independentArmors;
        return [];
    },
    getBaseItem: function (item) {
        if (!this.isIndependent(item)) return item;
        if (!item.baseItemId) return item;
        var baseItemId = item.baseItemId;
        var baseItem = this.getDatabase(item)[baseItemId];
        return baseItem;
    },
    processUpgradeNotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            ItemManager.initSlotUpgradeNotes(obj);
            this.processUpgradeNotetags(obj);
        }
    },
    processUpgradeNotetags2: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            this.processUpgradeNotetags(obj);
        }
    },
    processUpgradeNotetags: function (item) {
        var note1 = /<(?:TYPE|TYPES):[ ](.*)>/i;
        var notedata = item.note.split(/[\r\n]+/);

        item.types = item.types || ['ALL'];

        if (item.itypeId === 1) item.types.push('REGULAR');
        if (item.itypeId === 2) item.types.push('KEY');
        if (item.itypeId === 3) item.types.push('HIDDEN A');
        if (item.itypeId === 4) item.types.push('HIDDEN B');
        if (item.occasion === 0) item.types.push('ALWAYS');
        if (item.occasion === 1) item.types.push('BATTLE');
        if (item.occasion === 2) item.types.push('MENU');
        if (item.occasion === 3) item.types.push('NEVER');

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1)) {
                var str = String(RegExp.$1).toUpperCase();
                if (!item.types.contain(str)) item.types.push(str);
            }
        }
    },
    processAugmentNotetagsS: function (group) {
        if (Yanfly.SkillIdRef) return;
        Yanfly.SkillIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.SkillIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processAugmentNotetagsT: function (group) {
        if (Yanfly.StateIdRef) return;
        Yanfly.StateIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.StateIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processAugmentNotetagsSys: function (group) {
        Yanfly.STypeIdRef = {};
        for (var i = 1; i < group.skillTypes.length; ++i) {
            var name = group.skillTypes[i].toUpperCase();
            name = name.replace(/\\I\[(\d+)\]/gi, '');
            Yanfly.STypeIdRef[name] = i;
        }
        Yanfly.ElementIdRef = {};
        for (var i = 1; i < group.elements.length; ++i) {
            var name = group.elements[i].toUpperCase();
            name = name.replace(/\\I\[(\d+)\]/gi, '');
            Yanfly.ElementIdRef[name] = i;
        }
    },
    processAugmentNotetags1: function (group, isWeapon) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            if (isWeapon) {
                obj.augmentSlots = JsonEx.makeDeepCopy(Yanfly.Param.AugmentWeapons);
            } else {
                obj.augmentSlots = JsonEx.makeDeepCopy(Yanfly.Param.AugmentArmors);
            }

            var evalMode = 'none';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:AUGMENT SLOT|AUGMENT SLOTS)>/i)) {
                    var evalMode = 'augment slots';
                    obj.augmentSlots = [];
                } else if (line.match(/<\/(?:AUGMENT SLOT|AUGMENT SLOTS)>/i)) {
                    var evalMode = 'none';
                } else if (evalMode === 'augment slots') {
                    obj.augmentSlots.push(line.trim());
                } else if (line.match(/<(?:NO AUGMENTS|NO AUGMENT SLOTS)>/i)) {
                    obj.augmentSlots = [];
                }
            }
        }
    },
    processAugmentNotetags2: function (group, isWeapon) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.augmentTypes = [];
            obj.augmentDataAttach = {};
            obj.augmentDataDetach = {};
            var evalMode = 'none';
            var evalType = 'none';
            obj.augmentEvalAttach = {};
            obj.augmentEvalDetach = {};

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<AUGMENT:[ ](.*)>/i)) {
                    var evalMode = 'augment auto';
                    var evalType = String(RegExp.$1).toUpperCase().trim();
                    this.makeAugmentEvalType(obj, evalType);
                } else if (line.match(/<\/AUGMENT:[ ](.*)>/i)) {
                    var evalMode = 'none';
                    var evalType = 'none';
                } else if (evalMode === 'augment auto') {
                    obj.augmentDataAttach[evalType].push(line);
                    obj.augmentDataDetach[evalType].push(this.reverseAugmentAutoLine(line));
                } else if (line.match(/<AUGMENT ATTACH:[ ](.*)>/i)) {
                    var evalMode = 'augment attach';
                    var evalType = String(RegExp.$1).toUpperCase().trim();
                    this.makeAugmentEvalType(obj, evalType);
                } else if (line.match(/<\/AUGMENT ATTACH:[ ](.*)>/i)) {
                    var evalMode = 'none';
                    var evalType = 'none';
                } else if (evalMode === 'augment attach') {
                    obj.augmentDataAttach[evalType].push(line);
                } else if (line.match(/<AUGMENT DETACH:[ ](.*)>/i)) {
                    var evalMode = 'augment detach';
                    var evalType = String(RegExp.$1).toUpperCase().trim();
                    this.makeAugmentEvalType(obj, evalType);
                } else if (line.match(/<\/AUGMENT DETACH:[ ](.*)>/i)) {
                    var evalMode = 'none';
                    var evalType = 'none';
                } else if (evalMode === 'augment detach') {
                    obj.augmentDataDetach[evalType].push(line);
                } else if (line.match(/<AUGMENT ATTACH EVAL:[ ](.*)>/i)) {
                    var evalMode = 'augment eval attach';
                    var evalType = String(RegExp.$1).toUpperCase().trim();
                    this.makeAugmentEvalType(obj, evalType);
                } else if (line.match(/<\/AUGMENT ATTACH EVAL:[ ](.*)>/i)) {
                    var evalMode = 'none';
                    var evalType = 'none';
                } else if (evalMode === 'augment eval attach') {
                    obj.augmentEvalAttach[evalType] += line + '\n';
                } else if (line.match(/<AUGMENT DETACH EVAL:[ ](.*)>/i)) {
                    var evalMode = 'augment eval detach';
                    var evalType = String(RegExp.$1).toUpperCase().trim();
                    this.makeAugmentEvalType(obj, evalType);
                } else if (line.match(/<\/AUGMENT DETACH EVAL:[ ](.*)>/i)) {
                    var evalMode = 'none';
                    var evalType = 'none';
                } else if (evalMode === 'augment eval detach') {
                    obj.augmentEvalDetach[evalType] += line + '\n';
                }
            }
        }
    },
    reverseAugmentAutoLine: function (line) {
        if (line.match(/ADD[ ](.*):(.*)/i)) {
            var str1 = String(RegExp.$1);
            var str2 = String(RegExp.$2);
            return 'REMOVE ' + str1 + ':' + str2;
        } else if (line.match(/REMOVE[ ](.*):(.*)/i)) {
            var str1 = String(RegExp.$1);
            var str2 = String(RegExp.$2);
            return 'ADD ' + str1 + ':' + str2;
        } else if (line.match(/CHANGE[ ](.*):(.*)/i)) {
            var str1 = String(RegExp.$1);
            var str2 = String(RegExp.$2);
            return 'CANCEL ' + str1 + ':' + str2;
        } else if (line.match(/CANCEL[ ](.*):(.*)/i)) {
            var str1 = String(RegExp.$1);
            var str2 = String(RegExp.$2);
            return 'CHANGE ' + str1 + ':' + str2;
        } else if (line.match(/(.*):[ ]([\+\-]\d+)([%％])/i)) {
            //  var str = String(RegExp.$1);
            //  var value = parseInt(RegExp.$2) * -1;
            //  if (value > 0) value = '+' + value;
            //  return str + ': ' + value + '%';
            return line;
        } else if (line.match(/(.*):[ ]([\+\-]\d+)/i)) {
            var str = String(RegExp.$1);
            var value = parseInt(RegExp.$2) * -1;
            if (value > 0) value = '+' + value;
            return str + ': ' + value;
        }
        return line;
    },
    makeAugmentEvalType: function (obj, evalType) {
        obj.nonIndependent = true;
        obj.augmentDataAttach[evalType] = obj.augmentDataAttach[evalType] || [];
        obj.augmentDataDetach[evalType] = obj.augmentDataDetach[evalType] || [];
        obj.augmentEvalAttach[evalType] = obj.augmentEvalAttach[evalType] || '';
        obj.augmentEvalDetach[evalType] = obj.augmentEvalDetach[evalType] || '';
        obj.augmentTypes.push(evalType);
    },
    convertCommentsToText: function (obj) {
        var comment = '';
        var length = obj.list.length;
        for (var i = 0; i < length; ++i) {
            var ev = obj.list[i];
            if ([108, 408].contains(ev.code)) {
                comment += obj.list[i].parameters[0] + '\n';
            }
        }
        return comment.split(/[\r\n]+/);
    },
    processCEMNotetags1: function (group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = this.convertCommentsToText(obj);

            obj.iconIndex = Yanfly.Param.CEMIcon;
            obj.description = Yanfly.Param.CEMHelpDescription;
            obj.picture = '';
            obj.menuSettings = {
                name: obj.name,
                subtext: Yanfly.Param.CEMSubtext,
                enabled: 'enabled = true',
                show: 'visible = true'
            };
            var evalMode = 'none';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<MENU NAME:[ ](.*)>/i)) {
                    obj.menuSettings.name = String(RegExp.$1);
                } else if (line.match(/<ICON:[ ](\d+)>/i)) {
                    obj.iconIndex = parseInt(RegExp.$1);
                } else if (line.match(/<PICTURE:[ ](.*)>/i)) {
                    obj.picture = String(RegExp.$1);
                } else if (line.match(/<HELP DESCRIPTION>/i)) {
                    evalMode = 'help description';
                    obj.description = '';
                } else if (line.match(/<\/HELP DESCRIPTION>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'help description') {
                    obj.description += line + '\n';
                } else if (line.match(/<SUBTEXT>/i)) {
                    evalMode = 'subtext';
                    obj.menuSettings.subtext = '';
                } else if (line.match(/<\/SUBTEXT>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'subtext') {
                    obj.menuSettings.subtext += line + '\n';
                } else if (line.match(/<MENU ENABLE EVAL>/i)) {
                    evalMode = 'menu enable eval';
                    obj.menuSettings.enabled = '';
                } else if (line.match(/<\/MENU ENABLE EVAL>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'menu enable eval') {
                    obj.menuSettings.enabled += line + '\n';
                } else if (line.match(/<MENU VISIBLE EVAL>/i)) {
                    evalMode = 'menu visible eval';
                    obj.menuSettings.show = '';
                } else if (line.match(/<\/MENU VISIBLE EVAL>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'menu visible eval') {
                    obj.menuSettings.show += line + '\n';
                }
            }
        }
    },
    processRRNotetags: function () {
        if (!$dataMap) return;
        $dataMap.restrictPlayerRegions = Yanfly.Param.RRAllRestrict.concat(
            Yanfly.Param.RRPlayerRestrict);
        $dataMap.restrictEventRegions = Yanfly.Param.RRAllRestrict.concat(
            Yanfly.Param.RREventRestrict);
        $dataMap.allowPlayerRegions = Yanfly.Param.RRAllAllow.concat(
            Yanfly.Param.RRPlayerAllow);
        $dataMap.allowEventRegions = Yanfly.Param.RRAllAllow.concat(
            Yanfly.Param.RREventAllow);
        if (!$dataMap.note) return;

        var note1a = /<(?:PLAYER RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note1b = /<(?:PLAYER RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
        var note2a = /<(?:EVENT RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note2b = /<(?:EVENT RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
        var note3a = /<(?:ALL RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note3b = /<(?:ALL RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;

        var note4a = /<(?:PLAYER ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note4b = /<(?:PLAYER ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
        var note5a = /<(?:EVENT ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note5b = /<(?:EVENT ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
        var note6a = /<(?:ALL ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note6b = /<(?:ALL ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;

        var notedata = $dataMap.note.split(/[\r\n]+/);

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1a)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                $dataMap.restrictPlayerRegions =
                    $dataMap.restrictPlayerRegions.concat(array);
            } else if (line.match(note1b)) {
                var mainArray = $dataMap.restrictPlayerRegions;
                var range = Yanfly.Util.getRange(Number(RegExp.$1),
                    Number(RegExp.$2));
                $dataMap.restrictPlayerRegions =
                    $dataMap.restrictPlayerRegions.concat(range);
            } else if (line.match(note2a)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                $dataMap.restrictEventRegions =
                    $dataMap.restrictEventRegions.concat(array);
            } else if (line.match(note2b)) {
                var range = Yanfly.Util.getRange(Number(RegExp.$1),
                    Number(RegExp.$2));
                $dataMap.restrictEventRegions =
                    $dataMap.restrictEventRegions.concat(range);
            } else if (line.match(note3a)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                $dataMap.restrictPlayerRegions =
                    $dataMap.restrictPlayerRegions.concat(array);
                $dataMap.restrictEventRegions =
                    $dataMap.restrictEventRegions.concat(array);
            } else if (line.match(note3b)) {
                var range = Yanfly.Util.getRange(Number(RegExp.$1),
                    Number(RegExp.$2));
                $dataMap.restrictPlayerRegions =
                    $dataMap.restrictPlayerRegions.concat(array);
                $dataMap.restrictEventRegions =
                    $dataMap.restrictEventRegions.concat(array);
            } else if (line.match(note4a)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                $dataMap.allowPlayerRegions =
                    $dataMap.allowPlayerRegions.concat(array);
            } else if (line.match(note4b)) {
                var range = Yanfly.Util.getRange(Number(RegExp.$1),
                    Number(RegExp.$2));
                $dataMap.allowPlayerRegions = $dataMap.allowPlayerRegions.concat(range);
            } else if (line.match(note5a)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(array);
            } else if (line.match(note5b)) {
                var range = Yanfly.Util.getRange(Number(RegExp.$1),
                    Number(RegExp.$2));
                $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(range);
            } else if (line.match(note6a)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                $dataMap.allowPlayerRegions = $dataMap.allowPlayerRegions.concat(array);
                $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(array);
            } else if (line.match(note6b)) {
                var range = Yanfly.Util.getRange(Number(RegExp.$1),
                    Number(RegExp.$2));
                $dataMap.allowPlayerRegions = $dataMap.allowPlayerRegions.concat(array);
                $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(array);
            }
        }
    },
    processISNotetagsI: function (group) {
        if (Yanfly.ItemIdRef) return;
        Yanfly.ItemIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.ItemIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processISNotetagsW: function (group) {
        if (Yanfly.WeaponIdRef) return;
        Yanfly.WeaponIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.WeaponIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processISNotetagsA: function (group) {
        if (Yanfly.ArmorIdRef) return;
        Yanfly.ArmorIdRef = {};
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            if (obj.name.length <= 0) continue;
            Yanfly.ArmorIdRef[obj.name.toUpperCase()] = n;
        }
    },
    processISNotetags1: function (group, type) {
        var note1 = /<(?:ITEM RECIPE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note2 = /<(?:ITEM RECIPE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note3 = /<(?:WEAPON RECIPE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note4 = /<(?:WEAPON RECIPE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note5 = /<(?:ARMOR RECIPE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note6 = /<(?:ARMOR RECIPE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note7 = /<(?:SYNTHESIS INGREDIENTS)>/i;
        var note8 = /<\/(?:SYNTHESIS INGREDIENTS)>/i;
        var note9 = /<(?:MASK NAME):[ ](.*)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.groupType = type;
            obj.maskName = '';
            obj.recipeItem = [];
            obj.recipeWeapon = [];
            obj.recipeArmor = [];
            obj.synthCost = 0;
            obj.synthIngredients = [];
            var gatherIngredients = false;
            obj.synthSeName = Yanfly.Param.ISDefSEName;
            obj.synthSeVol = Yanfly.Param.ISDefVol;
            obj.synthSePitch = Yanfly.Param.ISDefPitch;
            obj.synthSePan = Yanfly.Param.ISDefPan;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.recipeItem = obj.recipeItem.concat(array);
                } else if (line.match(note2)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.recipeItem = obj.recipeItem.concat(range);
                } else if (line.match(note3)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.recipeWeapon = obj.recipeWeapon.concat(array);
                } else if (line.match(note4)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.recipeWeapon = obj.recipeWeapon.concat(range);
                } else if (line.match(note5)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.recipeArmor = obj.recipeArmor.concat(array);
                } else if (line.match(note6)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.recipeArmor = obj.recipeArmor.concat(range);
                } else if (line.match(note7)) {
                    gatherIngredients = true;
                } else if (line.match(note8)) {
                    gatherIngredients = false;
                } else if (line.match(note9)) {
                    obj.maskName = String(RegExp.$1);
                } else if (gatherIngredients) {
                    this.addSynthesisIngredient(obj, line);
                } else if (line.match(/<(?:SYNTHESIS SE):[ ](.*)>/i)) {
                    obj.synthSeName = String(RegExp.$1);
                } else if (line.match(/<(?:SYNTHESIS VOLUME):[ ](\d+)>/i)) {
                    obj.synthSeVol = parseInt(RegExp.$1);
                } else if (line.match(/<(?:SYNTHESIS PITCH):[ ](\d+)>/i)) {
                    obj.synthSePitch = parseInt(RegExp.$1);
                } else if (line.match(/<(?:SYNTHESIS PAN):[ ](\d+)>/i)) {
                    obj.synthSePan = parseInt(RegExp.$1);
                }
            }
            this.processRecipeCounts(obj);
        }
    },
    addSynthesisIngredient: function (obj, line) {
        var ingType;
        var ingId;
        var ingValue = 1;
        if (line.match(/GOLD:[ ](\d+)/i)) {
            obj.synthCost = parseInt(RegExp.$1);
            return;
        } else if (line.match(/ITEM[ ](\d+):[ ](\d+)/i)) {
            ingId = parseInt(RegExp.$1);
            ingType = 0;
            ingValue = parseInt(RegExp.$2);
        } else if (line.match(/ITEM[ ](\d+)/i)) {
            ingId = parseInt(RegExp.$1);
            ingType = 0;
            ingValue = 1;
        } else if (line.match(/WEAPON[ ](\d+):[ ](\d+)/i)) {
            ingId = parseInt(RegExp.$1);
            ingType = 1;
            ingValue = parseInt(RegExp.$2);
        } else if (line.match(/WEAPON[ ](\d+)/i)) {
            ingId = parseInt(RegExp.$1);
            ingType = 1;
            ingValue = 1;
        } else if (line.match(/ARMOR[ ](\d+):[ ](\d+)/i)) {
            ingId = parseInt(RegExp.$1);
            ingType = 2;
            ingValue = parseInt(RegExp.$2);
        } else if (line.match(/ARMOR[ ](\d+)/i)) {
            ingId = parseInt(RegExp.$1);
            ingType = 2;
            ingValue = 1;
        } else if (line.match(/(.*):[ ](\d+)/i)) {
            var name = String(RegExp.$1).toUpperCase();
            ingValue = parseInt(RegExp.$2);
            if (Yanfly.ItemIdRef[name]) {
                ingId = Yanfly.ItemIdRef[name];
                ingType = 0;
            } else if (Yanfly.WeaponIdRef[name]) {
                ingId = Yanfly.WeaponIdRef[name];
                ingType = 1;
            } else if (Yanfly.ArmorIdRef[name]) {
                ingId = Yanfly.ArmorIdRef[name];
                ingType = 2;
            }
        } else {
            var name = line.toUpperCase();
            ingValue = 1;
            if (Yanfly.ItemIdRef[name]) {
                ingId = Yanfly.ItemIdRef[name];
                ingType = 0;
            } else if (Yanfly.WeaponIdRef[name]) {
                ingId = Yanfly.WeaponIdRef[name];
                ingType = 1;
            } else if (Yanfly.ArmorIdRef[name]) {
                ingId = Yanfly.ArmorIdRef[name];
                ingType = 2;
            }
        }
        if (!this.isSynthesisIngredientOk(ingId, ingType)) return;
        var length = obj.synthIngredients.length;
        obj.synthIngredients[length] = [ingType, ingId, ingValue];
    },
    isSynthesisIngredientOk: function (ingId, ingType) {
        var item;
        if (ingType === 0) item = $dataItems[ingId];
        if (ingType === 1) item = $dataWeapons[ingId];
        if (ingType === 2) item = $dataArmors[ingId];
        if (!item) return false;
        if (Imported.YEP_ItemCore && this.isIndependent(item)) return false;
        return true;
    },
    getSynthesisIngredient: function (item, index) {
        var itemId = item.synthIngredients[index][1];
        if (item.synthIngredients[index][0] === 0) {
            return $dataItems[itemId];
        } else if (item.synthIngredients[index][0] === 1) {
            return $dataWeapons[itemId];
        } if (item.synthIngredients[index][0] === 2) {
            return $dataArmors[itemId];
        }
        return null;
    },
    getSynthesisQuantity: function (item, index) {
        return item.synthIngredients[index][2];
    },
    processRecipeCounts: function (obj) {
        if (obj.recipeItem.length > 0 || obj.recipeWeapon.length > 0 ||
            obj.recipeArmor.length > 0) {
            Yanfly.IS.SynthesisRecipeCount += obj.recipeItem.length;
            Yanfly.IS.SynthesisRecipeCount += obj.recipeWeapon.length;
            Yanfly.IS.SynthesisRecipeCount += obj.recipeArmor.length;
        }
        if (obj.name === '') return;
        if (obj.synthCost > 0 || obj.synthIngredients.length > 0) {
            if (obj.groupType === 0) Yanfly.IS.SynthesisItemTotal += 1;
            if (obj.groupType === 1) Yanfly.IS.SynthesisWeaponTotal += 1;
            if (obj.groupType === 2) Yanfly.IS.SynthesisArmorTotal += 1;
        }
    },
    processElementNotetagsSys: function (group) {
        Yanfly.ElementIdRef = {};
        for (var i = 1; i < group.elements.length; ++i) {
            var name = group.elements[i].toUpperCase();
            name = name.replace(/\\I\[(\d+)\]/gi, '');
            Yanfly.ElementIdRef[name] = i;
        }
    },
    processElementNotetags1: function (group) {
        var noteA1 = /<MULTIPLE ELEMENTS:[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var noteA2 = /<MULTIPLE ELEMENTS:[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var noteA3 = /<MULTIPLE ELEMENTS:[ ](.*)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.elementMultiRule = Yanfly.Param.EleMultiRule;
            obj.multipleElements = [];
            obj.bypassElementReflect = false;

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<MULTI-ELEMENT RULE:[ ]LOWEST>/i)) {
                    obj.elementMultiRule = 0;
                } else if (line.match(/<MULTI-ELEMENT RULE:[ ]ADD>/i)) {
                    obj.elementMultiRule = 1;
                } else if (line.match(/<MULTI-ELEMENT RULE:[ ]MULTIPLY>/i)) {
                    obj.elementMultiRule = 2;
                } else if (line.match(/<MULTI-ELEMENT RULE:[ ]HIGHEST>/i)) {
                    obj.elementMultiRule = 3;
                } else if (line.match(/<MULTI-ELEMENT RULE:[ ]AVERAGE>/i)) {
                    obj.elementMultiRule = 4;
                } else if (line.match(/<MULTI-ELEMENT RULE:[ ](.*)>/i)) {
                    obj.elementMultiRule = String(RegExp.$1);
                } else if (line.match(noteA1)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.multipleElements = obj.multipleElements.concat(array);
                } else if (line.match(noteA2)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.multipleElements = obj.multipleElements.concat(range);
                } else if (line.match(noteA3)) {
                    var text = String(RegExp.$1);
                    var array = text.split(',');
                    var length = array.length;
                    for (var j = 0; j < length; ++j) {
                        var name = array[j].toUpperCase().trim();
                        if (Yanfly.ElementIdRef[name]) {
                            var id = Yanfly.ElementIdRef[name];
                            obj.multipleElements.push(id);
                        }
                    }
                } else if (line.match(/<(?:BYPASS ELEMENT REFLECT)>/i)) {
                    obj.bypassElementReflect = true;
                }
            }
        }
    },
    processElementNotetags2: function (group) {
        var noteA1 = /<(?:ELEMENT ABSORB):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var noteB1 = /<(?:ELEMENT REFLECT)[ ](\d+):[ ]([\+\-]\d+)([%％])>/i;
        var noteB2 = /<(?:ELEMENT REFLECT)[ ](.*):[ ]([\+\-]\d+)([%％])>/i;
        var noteC1 = /<(?:ELEMENT AMPLIFY)[ ](\d+):[ ]([\+\-]\d+)([%％])>/i;
        var noteC2 = /<(?:ELEMENT AMPLIFY)[ ](.*):[ ]([\+\-]\d+)([%％])>/i;
        var noteC3 = /<(?:ELEMENT MAGNIFY)[ ](\d+):[ ]([\+\-]\d+)([%％])>/i;
        var noteC4 = /<(?:ELEMENT MAGNIFY)[ ](.*):[ ]([\+\-]\d+)([%％])>/i;
        var noteD1 = /<FORCE ELEMENT[ ](\d+)[ ]RATE:[ ](\d+)([%％])>/i;
        var noteD2 = /<FORCE ELEMENT[ ](\d+)[ ]RATE:[ ]-(\d+)([%％])>/i;
        var noteD3 = /<FORCE ELEMENT[ ](.*)[ ]RATE:[ ](\d+)([%％])>/i;
        var noteD4 = /<FORCE ELEMENT[ ](.*)[ ]RATE:[ ]-(\d+)([%％])>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.elementAbsorb = [];
            obj.elementReflect = {};
            obj.elementAmplify = {};
            obj.elementMagnify = {};
            obj.elementNull = false;
            obj.elementForcedRate = {};

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<(?:ELEMENT ABSORB):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.elementAbsorb = obj.elementAbsorb.concat(array);
                } else if (line.match(noteA1)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.elementAbsorb = obj.elementAbsorb.concat(range);
                } else if (line.match(/<(?:ELEMENT ABSORB):[ ](.*)>/i)) {
                    var text = String(RegExp.$1);
                    var array = text.split(',');
                    var length = array.length;
                    for (var j = 0; j < length; ++j) {
                        var name = array[j].toUpperCase().trim();
                        if (Yanfly.ElementIdRef[name]) {
                            var id = Yanfly.ElementIdRef[name];
                            obj.elementAbsorb.push(id);
                        }
                    }
                } else if (line.match(noteB1)) {
                    var elementId = parseInt(RegExp.$1);
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    obj.elementReflect[elementId] = rate;
                } else if (line.match(noteB2)) {
                    var name = String(RegExp.$1).toUpperCase().trim();
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    if (Yanfly.ElementIdRef[name]) {
                        var id = Yanfly.ElementIdRef[name];
                        obj.elementReflect[id] = rate;
                    }
                } else if (line.match(noteC1)) {
                    var elementId = parseInt(RegExp.$1);
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    obj.elementAmplify[elementId] = rate;
                } else if (line.match(noteC2)) {
                    var name = String(RegExp.$1).toUpperCase().trim();
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    if (Yanfly.ElementIdRef[name]) {
                        var id = Yanfly.ElementIdRef[name];
                        obj.elementAmplify[id] = rate;
                    }
                } else if (line.match(noteC3)) {
                    var elementId = parseInt(RegExp.$1);
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    obj.elementMagnify[elementId] = rate;
                } else if (line.match(noteC4)) {
                    var name = String(RegExp.$1).toUpperCase().trim();
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    if (Yanfly.ElementIdRef[name]) {
                        var id = Yanfly.ElementIdRef[name];
                        obj.elementMagnify[id] = rate;
                    }
                } else if (line.match(/<(?:ELEMENT NULL)>/i)) {
                    obj.elementNull = true;
                } else if (line.match(noteD1)) {
                    var elementId = parseInt(RegExp.$1);
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    obj.elementForcedRate[elementId] = rate;
                } else if (line.match(noteD2)) {
                    var elementId = parseInt(RegExp.$1);
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    obj.elementForcedRate[elementId] = rate * -1;
                } else if (line.match(noteD3)) {
                    var name = String(RegExp.$1).toUpperCase().trim();
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    if (Yanfly.ElementIdRef[name]) {
                        var id = Yanfly.ElementIdRef[name];
                        obj.elementForcedRate[id] = rate;
                    }
                } else if (line.match(noteD4)) {
                    var name = String(RegExp.$1).toUpperCase().trim();
                    var rate = parseFloat(RegExp.$2 * 0.01);
                    if (Yanfly.ElementIdRef[name]) {
                        var id = Yanfly.ElementIdRef[name];
                        obj.elementForcedRate[id] = rate * -1;
                    }
                }
            }
        }
    },
    processABRNotetags1: function (group) {
        var noteA1 = /<TARGET BARRIER:[ ]([\+\-]\d+)>/i;
        var noteA2 = /<TARGET BARRIER[ ](\d+)[ ](?:TURN|TURNS):[ ]([\+\-]\d+)>/i;
        var noteB1 = /<USER BARRIER:[ ]([\+\-]\d+)>/i;
        var noteB2 = /<USER BARRIER[ ](\d+)[ ](?:TURN|TURNS):[ ]([\+\-]\d+)>/i;
        var noteC1 = /<CUSTOM TARGET BARRIER[ ](\d+)[ ](?:TURN|TURNS)>/i;
        var noteC2 = /<\/CUSTOM TARGET BARRIER[ ](\d+)[ ](?:TURN|TURNS)>/i;
        var noteD1 = /<CUSTOM USER BARRIER[ ](\d+)[ ](?:TURN|TURNS)>/i;
        var noteD2 = /<\/CUSTOM USER BARRIER[ ](\d+)[ ](?:TURN|TURNS)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.targetBarrier = [];
            obj.userBarrier = [];
            obj.barrierPenetrationRate = Yanfly.Param.ABRPenRate;
            obj.barrierPenetrationFlat = Yanfly.Param.ABRPenFlat;
            var evalMode = 'none';
            var evalTurn = 0;
            obj.targetBarrierEval = [];
            obj.userBarrierEval = [];
            obj.barrierPenetrationRateEval = '';
            obj.barrierPenetrationFlatEval = '';

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(noteA1)) {
                    obj.targetBarrier[0] = parseInt(RegExp.$1);
                } else if (line.match(noteA2)) {
                    var index = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    obj.targetBarrier[index] = value;
                } else if (line.match(noteB1)) {
                    obj.userBarrier[0] = parseInt(RegExp.$1);
                } else if (line.match(noteB2)) {
                    var index = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    obj.userBarrier[index] = value;
                } else if (line.match(/<BYPASS BARRIER>/i)) {
                    obj.barrierPenetrationRate = 1;
                } else if (line.match(/<BARRIER PENETRATION:[ ](\d+)([%％])>/i)) {
                    obj.barrierPenetrationRate = parseFloat(RegExp.$1) * 0.01;
                } else if (line.match(/<BARRIER PENETRATION:[ ](\d+)>/i)) {
                    obj.barrierPenetrationFlat = parseInt(RegExp.$1);
                } else if (line.match(/<CUSTOM TARGET BARRIER>/i)) {
                    evalMode = 'custom target barrier';
                    evalTurn = 0;
                    obj.targetBarrierEval[0] = '';
                } else if (line.match(/<\/CUSTOM TARGET BARRIER>/i)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (line.match(noteC1)) {
                    evalMode = 'custom target barrier';
                    evalTurn = parseInt(RegExp.$1);
                    obj.targetBarrierEval[evalTurn] = '';
                } else if (line.match(noteC2)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (evalMode === 'custom target barrier') {
                    obj.targetBarrierEval[evalTurn] = obj.targetBarrierEval[evalTurn] +
                        line + '\n';
                } else if (line.match(/<CUSTOM USER BARRIER>/i)) {
                    evalMode = 'custom user barrier';
                    evalTurn = 0;
                    obj.userBarrierEval[0] = '';
                } else if (line.match(/<\/CUSTOM USER BARRIER>/i)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (line.match(noteD1)) {
                    evalMode = 'custom user barrier';
                    evalTurn = parseInt(RegExp.$1);
                    obj.userBarrierEval[evalTurn] = '';
                } else if (line.match(noteD2)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (evalMode === 'custom user barrier') {
                    obj.userBarrierEval[evalTurn] = obj.userBarrierEval[evalTurn] +
                        line + '\n';
                } else if (line.match(/<CUSTOM BARRIER PENETRATION RATE>/i)) {
                    evalMode = 'custom barrier penetration rate';
                } else if (line.match(/<\/CUSTOM BARRIER PENETRATION RATE>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'custom barrier penetration rate') {
                    obj.barrierPenetrationRateEval = obj.barrierPenetrationRateEval +
                        line + '\n';
                } else if (line.match(/<CUSTOM BARRIER PENETRATION FLAT>/i)) {
                    evalMode = 'custom barrier penetration flat';
                } else if (line.match(/<\/CUSTOM BARRIER PENETRATION flat>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'custom barrier penetration flat') {
                    obj.barrierPenetrationFlatEval = obj.barrierPenetrationFlatEval +
                        line + '\n';
                }
            }
        }
    },
    processABRNotetags2: function (group) {
        var noteA1 = /<BARRIER POINTS:[ ]([\+\-]\d+)>/i;
        var noteA2 = /<BARRIER POINTS[ ](\d+)[ ](?:TURN|TURNS):[ ]([\+\-]\d+)>/i;
        var noteB1 = /<CUSTOM BARRIER POINTS[ ](\d+)[ ](?:TURN|TURNS)>/i;
        var noteB2 = /<\/CUSTOM BARRIER POINTS[ ](\d+)[ ](?:TURN|TURNS)>/i;
        var noteC1 = /<BARRIER REGEN:[ ]([\+\-]\d+)>/i;
        var noteC2 = /<BARRIER REGEN[ ](\d+)[ ](?:TURN|TURNS):[ ]([\+\-]\d+)>/i;
        var noteD1 = /<CUSTOM BARRIER REGEN>/i;
        var noteD2 = /<\/CUSTOM BARRIER REGEN>/i;
        var noteE1 = /<CUSTOM BARRIER REGEN[ ](\d+)[ ](?:TURN|TURNS)>/i;
        var noteE2 = /<\/CUSTOM BARRIER REGEN[ ](\d+)[ ](?:TURN|TURNS)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.barrierPenetrationRate = 0;
            obj.barrierPenetrationFlat = 0;
            obj.battleStartBarrierPoints = [];
            obj.barrierRegen = [];
            var evalMode = 'none';
            var evalTurn = 0;
            obj.barrierPenetrationRateEval = '';
            obj.barrierPenetrationFlatEval = '';
            obj.battleStartBarrierPointsEval = [];
            obj.barrierRegenEval = [];

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(/<BARRIER PENETRATION:[ ]([\+\-]\d+)([%％])>/i)) {
                    obj.barrierPenetrationRate = parseFloat(RegExp.$1) * 0.01;
                } else if (line.match(/<BARRIER PENETRATION:[ ]([\+\-]\d+)>/i)) {
                    obj.barrierPenetrationFlat = parseInt(RegExp.$1);
                } else if (line.match(noteA1)) {
                    obj.battleStartBarrierPoints[0] = parseInt(RegExp.$1);
                } else if (line.match(noteA2)) {
                    var id = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    obj.battleStartBarrierPoints[id] = value;
                } else if (line.match(/<CUSTOM BARRIER PENETRATION RATE>/i)) {
                    evalMode = 'custom barrier penetration rate';
                } else if (line.match(/<\/CUSTOM BARRIER PENETRATION RATE>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'custom barrier penetration rate') {
                    obj.barrierPenetrationRateEval = obj.barrierPenetrationRateEval +
                        line + '\n';
                } else if (line.match(/<CUSTOM BARRIER PENETRATION FLAT>/i)) {
                    evalMode = 'custom barrier penetration flat';
                } else if (line.match(/<\/CUSTOM BARRIER PENETRATION flat>/i)) {
                    evalMode = 'none';
                } else if (evalMode === 'custom barrier penetration flat') {
                    obj.barrierPenetrationFlatEval = obj.barrierPenetrationFlatEval +
                        line + '\n';
                } else if (line.match(/<CUSTOM BARRIER POINTS>/i)) {
                    evalMode = 'custom barrier points';
                    evalTurn = 0;
                    obj.battleStartBarrierPointsEval[0] = '';
                } else if (line.match(/<\/CUSTOM BARRIER POINTS>/i)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (line.match(noteB1)) {
                    evalMode = 'custom barrier points';
                    evalTurn = parseInt(RegExp.$1);
                    obj.battleStartBarrierPointsEval[evalTurn] = '';
                } else if (line.match(noteB2)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (evalMode === 'custom barrier points') {
                    obj.battleStartBarrierPointsEval[evalTurn] =
                        obj.battleStartBarrierPointsEval[evalTurn] + line + '\n';
                } else if (line.match(noteC1)) {
                    obj.barrierRegen[0] = parseInt(RegExp.$1);
                } else if (line.match(noteC2)) {
                    var id = parseInt(RegExp.$1);
                    var value = parseInt(RegExp.$2);
                    obj.barrierRegen[id] = value;
                } else if (line.match(noteD1)) {
                    evalMode = 'custom barrier regen';
                    evalTurn = 0;
                    obj.barrierRegenEval[0] = '';
                } else if (line.match(noteD2)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (line.match(noteE1)) {
                    evalMode = 'custom barrier regen';
                    evalTurn = parseInt(RegExp.$1);
                    obj.barrierRegenEval[evalTurn] = '';
                } else if (line.match(noteE2)) {
                    evalMode = 'none';
                    evalTurn = 0;
                } else if (evalMode === 'custom barrier regen') {
                    obj.barrierRegenEval[evalTurn] = obj.barrierRegenEval[evalTurn] +
                        line + '\n';
                }
            }
        }
    },
    processAVarNotetags: function (group) {
        var note1a = /<(?:COLUMN 1 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note1b = /<(?:COLUMN 1 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note2a = /<(?:COLUMN 2 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note2b = /<(?:COLUMN 2 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note3a = /<(?:COLUMN 3 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note3b = /<(?:COLUMN 3 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        var note4a = /<(?:COLUMN 4 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
        var note4b = /<(?:COLUMN 4 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            var notedata = obj.note.split(/[\r\n]+/);

            obj.varColumn1 = JsonEx.makeDeepCopy(Yanfly.Param.AVarColumn1);
            obj.varColumn2 = JsonEx.makeDeepCopy(Yanfly.Param.AVarColumn2);
            obj.varColumn3 = JsonEx.makeDeepCopy(Yanfly.Param.AVarColumn3);
            obj.varColumn4 = JsonEx.makeDeepCopy(Yanfly.Param.AVarColumn4);

            for (var i = 0; i < notedata.length; i++) {
                var line = notedata[i];
                if (line.match(note1a)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.varColumn1 = obj.varColumn1.concat(array);
                } else if (line.match(note1b)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.varColumn1 = obj.varColumn1.concat(range);
                } else if (line.match(note2a)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.varColumn2 = obj.varColumn2.concat(array);
                } else if (line.match(note2b)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.varColumn2 = obj.varColumn2.concat(range);
                } else if (line.match(note3a)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.varColumn3 = obj.varColumn3.concat(array);
                } else if (line.match(note3b)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.varColumn3 = obj.varColumn3.concat(range);
                } else if (line.match(note4a)) {
                    var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                    obj.varColumn4 = obj.varColumn4.concat(array);
                } else if (line.match(note4b)) {
                    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
                        parseInt(RegExp.$2));
                    obj.varColumn4 = obj.varColumn4.concat(range);
                }
            }
            if (obj.varColumn1.length <= 0) obj.varColumn1 = [''];
            if (obj.varColumn2.length <= 0) obj.varColumn2 = [''];
            if (obj.varColumn3.length <= 0) obj.varColumn3 = [''];
            if (obj.varColumn4.length <= 0) obj.varColumn4 = [''];
        }
    },
    _baseItemsLength: 376,
    _baseWeaponsLength: 203,
    _baseArmorsLength: 203,
    _independentItems: "",
    _independentWeapons: [object, Object], [object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],
    _independentArmors: [object, Object], [object, Object],[object, Object],[object, Object],,,,[object, Object],[object, Object],,,,[object, Object],[object, Object],,,,,,[object, Object],[object, Object],,,,,[object, Object],[object, Object],,[object, Object],,,,,,,,,,,,,,,,,,,,,,,,,,,,,,[object, Object],,,,[object, Object],,,,,,,,[object, Object],,,,,,,,,,,,,,,,,,,,,,,,[object, Object],,,,,,,[object, Object],,,,,,,,,,,,,,,,,,,,,,,,,[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],[object, Object],,[object, Object],[object, Object],[object, Object],

}