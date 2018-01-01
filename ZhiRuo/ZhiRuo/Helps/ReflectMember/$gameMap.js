var $gameMap = {
    _interpreter: {
        _depth: 0,
        _mapId: 12,
        _eventId: 5,
        _list: [{
            code: 108,
            indent: 0,
            parameters: ['<Name:钱庄,1 >'],

        }, {
            code: 201,
            indent: 0,
            parameters: [0, 22, 18, 11, 4, 0],

        }, {
            code: 117,
            indent: 0,
            parameters: 30,

        }, {
            code: 117,
            indent: 0,
            parameters: 41,

        }, {
            code: 0,
            indent: 0,
            parameters: "",

        }],
        _index: 3,
        _waitCount: 0,
        _waitMode: "",
        _comments: '<Name:钱庄,1 >',
        _character: null,
        _childInterpreter: {
            _depth: 1,
            _mapId: 22,
            _eventId: 0,
            _list: [[object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object], [object, Object]],
            _index: 19,
            _waitCount: 0,
            _waitMode: "",
            _comments: "<及时通知>",
            _character: null,
            _childInterpreter: [object, Object],
            _branch: {
                0: true,
                1: true,
                2: true,
                3: 0,
                4: true,

            },
            _params: 26,
            _indent: 5,
            _frameCount: 6280012,
            _freezeChecker: 6,
            initialize: function (depth) {
                this._depth = depth || 0;
                this.checkOverflow();
                this.clear();
                this._branch = {};
                this._params = [];
                this._indent = 0;
                this._frameCount = 0;
                this._freezeChecker = 0;
            },
            checkOverflow: function () {
                if (this._depth >= 100) {
                    throw new Error('Common event calls exceeded the limit');
                }
            },
            clear: function () {
                this._mapId = 0;
                this._eventId = 0;
                this._list = null;
                this._index = 0;
                this._waitCount = 0;
                this._waitMode = '';
                this._comments = '';
                this._character = null;
                this._childInterpreter = null;
            },
            setup: function (list, eventId) {
                this.clear();
                this._mapId = $gameMap.mapId();
                this._eventId = eventId || 0;
                this._list = list;
            },
            eventId: function () {
                return this._eventId;
            },
            isOnCurrentMap: function () {
                return this._mapId === $gameMap.mapId();
            },
            setupReservedCommonEvent: function () {
                if ($gameTemp.isCommonEventReserved()) {
                    this.setup($gameTemp.reservedCommonEvent().list);
                    $gameTemp.clearCommonEvent();
                    return true;
                } else {
                    return false;
                }
            },
            isRunning: function () {
                return !!this._list;
            },
            update: function () {
                while (this.isRunning()) {
                    if (this.updateChild() || this.updateWait()) {
                        break;
                    }
                    if (SceneManager.isSceneChanging()) {
                        break;
                    }
                    if (!this.executeCommand()) {
                        break;
                    }
                    if (this.checkFreeze()) {
                        break;
                    }
                }
            },
            updateChild: function () {
                if (this._childInterpreter) {
                    this._childInterpreter.update();
                    if (this._childInterpreter.isRunning()) {
                        return true;
                    } else {
                        this._childInterpreter = null;
                    }
                }
                return false;
            },
            updateWait: function () {
                return this.updateWaitCount() || this.updateWaitMode();
            },
            updateWaitCount: function () {
                if (this._waitCount > 0) {
                    this._waitCount--;
                    return true;
                }
                return false;
            },
            updateWaitMode: function () {
                var waiting = false;
                switch (this._waitMode) {
                    case 'message':
                        waiting = $gameMessage.isBusy();
                        break;
                    case 'transfer':
                        waiting = $gamePlayer.isTransferring();
                        break;
                    case 'scroll':
                        waiting = $gameMap.isScrolling();
                        break;
                    case 'route':
                        waiting = this._character.isMoveRouteForcing();
                        break;
                    case 'animation':
                        waiting = this._character.isAnimationPlaying();
                        break;
                    case 'balloon':
                        waiting = this._character.isBalloonPlaying();
                        break;
                    case 'gather':
                        waiting = $gamePlayer.areFollowersGathering();
                        break;
                    case 'action':
                        waiting = BattleManager.isActionForced();
                        break;
                    case 'video':
                        waiting = Graphics.isVideoPlaying();
                        break;
                    case 'image':
                        waiting = !ImageManager.isReady();
                        break;
                }
                if (!waiting) {
                    this._waitMode = '';
                }
                return waiting;
            },
            setWaitMode: function (waitMode) {
                this._waitMode = waitMode;
            },
            wait: function (duration) {
                this._waitCount = duration;
            },
            fadeSpeed: function () {
                return 24;
            },
            executeCommand: function () {
                var command = this.currentCommand();
                if (command) {
                    this._params = command.parameters;
                    this._indent = command.indent;
                    var methodName = 'command' + command.code;
                    if (typeof this[methodName] === 'function') {
                        if (!this[methodName]()) {
                            return false;
                        }
                    }
                    this._index++;
                } else {
                    this.terminate();
                }
                return true;
            },
            checkFreeze: function () {
                if (this._frameCount !== Graphics.frameCount) {
                    this._frameCount = Graphics.frameCount;
                    this._freezeChecker = 0;
                }
                if (this._freezeChecker++ >= 100000) {
                    return true;
                } else {
                    return false;
                }
            },
            terminate: function () {
                this._list = null;
                this._comments = '';
            },
            skipBranch: function () {
                while (this._list[this._index + 1].indent > this._indent) {
                    this._index++;
                }
            },
            currentCommand: function () {
                return this._list[this._index];
            },
            nextEventCode: function () {
                var command = this._list[this._index + 1];
                if (command) {
                    return command.code;
                } else {
                    return 0;
                }
            },
            iterateActorId: function (param, callback) {
                if (param === 0) {
                    $gameParty.members().forEach(callback);
                } else {
                    var actor = $gameActors.actor(param);
                    if (actor) {
                        callback(actor);
                    }
                }
            },
            iterateActorEx: function (param1, param2, callback) {
                if (param1 === 0) {
                    this.iterateActorId(param2, callback);
                } else {
                    this.iterateActorId($gameVariables.value(param2), callback);
                }
            },
            iterateActorIndex: function (param, callback) {
                if (param < 0) {
                    $gameParty.members().forEach(callback);
                } else {
                    var actor = $gameParty.members()[param];
                    if (actor) {
                        callback(actor);
                    }
                }
            },
            iterateEnemyIndex: function (param, callback) {
                if (param < 0) {
                    $gameTroop.members().forEach(callback);
                } else {
                    var enemy = $gameTroop.members()[param];
                    if (enemy) {
                        callback(enemy);
                    }
                }
            },
            iterateBattler: function (param1, param2, callback) {
                if ($gameParty.inBattle()) {
                    if (param1 === 0) {
                        this.iterateEnemyIndex(param2, callback);
                    } else {
                        this.iterateActorId(param2, callback);
                    }
                }
            },
            character: function (param) {
                if ($gameParty.inBattle()) {
                    return null;
                } else if (param < 0) {
                    return $gamePlayer;
                } else if (this.isOnCurrentMap()) {
                    return $gameMap.event(param > 0 ? param : this._eventId);
                } else {
                    return null;
                }
            },
            operateValue: function (operation, operandType, operand) {
                var value = operandType === 0 ? operand : $gameVariables.value(operand);
                return operation === 0 ? value : -value;
            },
            changeHp: function (target, value, allowDeath) {
                if (target.isAlive()) {
                    if (!allowDeath && target.hp <= -value) {
                        value = 1 - target.hp;
                    }
                    target.gainHp(value);
                    if (target.isDead()) {
                        target.performCollapse();
                    }
                }
            },
            command101: function () {
                if (!$gameMessage.isBusy()) {
                    $gameMessage.setFaceImage(this._params[0], this._params[1]);
                    $gameMessage.setBackground(this._params[2]);
                    $gameMessage.setPositionType(this._params[3]);
                    while (this.isContinueMessageString()) {
                        this._index++;
                        if (this._list[this._index].code === 401) {
                            $gameMessage.addText(this.currentCommand().parameters[0]);
                        }
                        if ($gameMessage._texts.length >= $gameSystem.messageRows()) break;
                    }
                    switch (this.nextEventCode()) {
                        case 102:
                            this._index++;
                            this.setupChoices(this.currentCommand().parameters);
                            break;
                        case 103:
                            this._index++;
                            this.setupNumInput(this.currentCommand().parameters);
                            break;
                        case 104:
                            this._index++;
                            this.setupItemChoice(this.currentCommand().parameters);
                            break;
                    }
                    this._index++;
                    this.setWaitMode('message');
                }
                return false;
            },
            command102: function () {
                if (!$gameMessage.isBusy()) {
                    this.setupChoices(this._params);
                    this._index++;
                    this.setWaitMode('message');
                }
                return false;
            },
            setupChoices: function (params) {
                var choices = params[0].clone();
                var cancelType = params[1];
                var defaultType = params.length > 2 ? params[2] : 0;
                var positionType = params.length > 3 ? params[3] : 2;
                var background = params.length > 4 ? params[4] : 0;
                if (cancelType >= choices.length) {
                    cancelType = -2;
                }
                $gameMessage.setChoices(choices, defaultType, cancelType);
                $gameMessage.setChoiceBackground(background);
                $gameMessage.setChoicePositionType(positionType);
                $gameMessage.setChoiceCallback(function (n) {
                    this._branch[this._indent] = n;
                }.bind(this));
            },
            command402: function () {
                if (this._branch[this._indent] !== this._params[0]) {
                    this.skipBranch();
                }
                return true;
            },
            command403: function () {
                if (this._branch[this._indent] >= 0) {
                    this.skipBranch();
                }
                return true;
            },
            command103: function () {
                if (!$gameMessage.isBusy()) {
                    this.setupNumInput(this._params);
                    this._index++;
                    this.setWaitMode('message');
                }
                return false;
            },
            setupNumInput: function (params) {
                $gameMessage.setNumberInput(params[0], params[1]);
            },
            command104: function () {
                if (!$gameMessage.isBusy()) {
                    this.setupItemChoice(this._params);
                    this._index++;
                    this.setWaitMode('message');
                }
                return false;
            },
            setupItemChoice: function (params) {
                $gameMessage.setItemChoice(params[0], params[1] || 2);
            },
            command105: function () {
                if (!$gameMessage.isBusy()) {
                    $gameMessage.setScroll(this._params[0], this._params[1]);
                    while (this.nextEventCode() === 405) {
                        this._index++;
                        $gameMessage.add(this.currentCommand().parameters[0]);
                    }
                    this._index++;
                    this.setWaitMode('message');
                }
                return false;
            },
            command108: function () {
                this._comments = [this._params[0]];
                while (this.nextEventCode() === 408) {
                    this._index++;
                    this._comments.push(this.currentCommand().parameters[0]);
                }
                return true;
            },
            command111: function () {
                var result = false;
                switch (this._params[0]) {
                    case 0:  // Switch
                        result = ($gameSwitches.value(this._params[1]) === (this._params[2] === 0));
                        break;
                    case 1:  // Variable
                        var value1 = $gameVariables.value(this._params[1]);
                        var value2;
                        if (this._params[2] === 0) {
                            value2 = this._params[3];
                        } else {
                            value2 = $gameVariables.value(this._params[3]);
                        }
                        switch (this._params[4]) {
                            case 0:  // Equal to
                                result = (value1 === value2);
                                break;
                            case 1:  // Greater than or Equal to
                                result = (value1 >= value2);
                                break;
                            case 2:  // Less than or Equal to
                                result = (value1 <= value2);
                                break;
                            case 3:  // Greater than
                                result = (value1 > value2);
                                break;
                            case 4:  // Less than
                                result = (value1 < value2);
                                break;
                            case 5:  // Not Equal to
                                result = (value1 !== value2);
                                break;
                        }
                        break;
                    case 2:  // Self Switch
                        if (this._eventId > 0) {
                            var key = [this._mapId, this._eventId, this._params[1]];
                            result = ($gameSelfSwitches.value(key) === (this._params[2] === 0));
                        }
                        break;
                    case 3:  // Timer
                        if ($gameTimer.isWorking()) {
                            if (this._params[2] === 0) {
                                result = ($gameTimer.seconds() >= this._params[1]);
                            } else {
                                result = ($gameTimer.seconds() <= this._params[1]);
                            }
                        }
                        break;
                    case 4:  // Actor
                        var actor = $gameActors.actor(this._params[1]);
                        if (actor) {
                            var n = this._params[3];
                            switch (this._params[2]) {
                                case 0:  // In the Party
                                    result = $gameParty.members().contains(actor);
                                    break;
                                case 1:  // Name
                                    result = (actor.name() === n);
                                    break;
                                case 2:  // Class
                                    result = actor.isClass($dataClasses[n]);
                                    break;
                                case 3:  // Skill
                                    result = actor.isLearnedSkill(n);
                                    break;
                                case 4:  // Weapon
                                    result = actor.hasWeapon($dataWeapons[n]);
                                    break;
                                case 5:  // Armor
                                    result = actor.hasArmor($dataArmors[n]);
                                    break;
                                case 6:  // State
                                    result = actor.isStateAffected(n);
                                    break;
                            }
                        }
                        break;
                    case 5:  // Enemy
                        var enemy = $gameTroop.members()[this._params[1]];
                        if (enemy) {
                            switch (this._params[2]) {
                                case 0:  // Appeared
                                    result = enemy.isAlive();
                                    break;
                                case 1:  // State
                                    result = enemy.isStateAffected(this._params[3]);
                                    break;
                            }
                        }
                        break;
                    case 6:  // Character
                        var character = this.character(this._params[1]);
                        if (character) {
                            result = (character.direction() === this._params[2]);
                        }
                        break;
                    case 7:  // Gold
                        switch (this._params[2]) {
                            case 0:  // Greater than or equal to
                                result = ($gameParty.gold() >= this._params[1]);
                                break;
                            case 1:  // Less than or equal to
                                result = ($gameParty.gold() <= this._params[1]);
                                break;
                            case 2:  // Less than
                                result = ($gameParty.gold() < this._params[1]);
                                break;
                        }
                        break;
                    case 8:  // Item
                        result = $gameParty.hasItem($dataItems[this._params[1]]);
                        break;
                    case 9:  // Weapon
                        result = $gameParty.hasItem($dataWeapons[this._params[1]], this._params[2]);
                        break;
                    case 10:  // Armor
                        result = $gameParty.hasItem($dataArmors[this._params[1]], this._params[2]);
                        break;
                    case 11:  // Button
                        result = Input.isPressed(this._params[1]);
                        break;
                    case 12:  // Script
                        result = !!eval(this._params[1]);
                        break;
                    case 13:  // Vehicle
                        result = ($gamePlayer.vehicle() === $gameMap.vehicle(this._params[1]));
                        break;
                }
                this._branch[this._indent] = result;
                if (this._branch[this._indent] === false) {
                    this.skipBranch();
                }
                return true;
            },
            command411: function () {
                if (this._branch[this._indent] !== false) {
                    this.skipBranch();
                }
                return true;
            },
            command112: function () {
                return true;
            },
            command413: function () {
                do {
                    this._index--;
                } while (this.currentCommand().indent !== this._indent);
                return true;
            },
            command113: function () {
                while (this._index < this._list.length - 1) {
                    this._index++;
                    var command = this.currentCommand();
                    if (command.code === 413 && command.indent < this._indent) {
                        break;
                    }
                }
                return true;
            },
            command115: function () {
                this._index = this._list.length;
                return true;
            },
            command117: function () {
                var commonEvent = $dataCommonEvents[this._params[0]];
                if (commonEvent) {
                    var eventId = this.isOnCurrentMap() ? this._eventId : 0;
                    this.setupChild(commonEvent.list, eventId);
                }
                return true;
            },
            setupChild: function (list, eventId) {
                this._childInterpreter = new Game_Interpreter(this._depth + 1);
                this._childInterpreter.setup(list, eventId);
            },
            command118: function () {
                return true;
            },
            command119: function () {
                var labelName = this._params[0];
                for (var i = 0; i < this._list.length; i++) {
                    var command = this._list[i];
                    if (command.code === 118 && command.parameters[0] === labelName) {
                        this.jumpTo(i);
                        return;
                    }
                }
                return true;
            },
            jumpTo: function (index) {
                var lastIndex = this._index;
                var startIndex = Math.min(index, lastIndex);
                var endIndex = Math.max(index, lastIndex);
                var indent = this._indent;
                for (var i = startIndex; i <= endIndex; i++) {
                    var newIndent = this._list[i].indent;
                    if (newIndent !== indent) {
                        this._branch[indent] = null;
                        indent = newIndent;
                    }
                }
                this._index = index;
            },
            command121: function () {
                for (var i = this._params[0]; i <= this._params[1]; i++) {
                    $gameSwitches.setValue(i, this._params[2] === 0);
                }
                return true;
            },
            command122: function () {
                var value = 0;
                switch (this._params[3]) {  // Operand
                    case 0:  // Constant
                        value = this._params[4];
                        break;
                    case 1:  // Variable
                        value = $gameVariables.value(this._params[4]);
                        break;
                    case 2:  // Random
                        value = this._params[4] + Math.randomInt(this._params[5] - this._params[4] + 1);
                        break;
                    case 3:  // Game Data
                        value = this.gameDataOperand(this._params[4], this._params[5], this._params[6]);
                        break;
                    case 4:  // Script
                        value = eval(this._params[4]);
                        break;
                }
                for (var i = this._params[0]; i <= this._params[1]; i++) {
                    this.operateVariable(i, this._params[2], value);
                }
                return true;
            },
            gameDataOperand: function (type, param1, param2) {
                switch (type) {
                    case 0:
                        return $gameParty.numIndependentItems($dataItems[param1]);
                        break;
                    case 1:
                        return $gameParty.numIndependentItems($dataWeapons[param1]);
                        break;
                    case 2:
                        return $gameParty.numIndependentItems($dataArmors[param1]);
                        break;
                    default:
                        return Yanfly.Item.Game_Interpreter_gDO.call(this, type, param1, param2);
                        break;
                }
            },
            operateVariable: function (variableId, operationType, value) {
                try {
                    var oldValue = $gameVariables.value(variableId);
                    switch (operationType) {
                        case 0:  // Set
                            $gameVariables.setValue(variableId, oldValue = value);
                            break;
                        case 1:  // Add
                            $gameVariables.setValue(variableId, oldValue + value);
                            break;
                        case 2:  // Sub
                            $gameVariables.setValue(variableId, oldValue - value);
                            break;
                        case 3:  // Mul
                            $gameVariables.setValue(variableId, oldValue * value);
                            break;
                        case 4:  // Div
                            $gameVariables.setValue(variableId, oldValue / value);
                            break;
                        case 5:  // Mod
                            $gameVariables.setValue(variableId, oldValue % value);
                            break;
                    }
                } catch (e) {
                    $gameVariables.setValue(variableId, 0);
                }
            },
            command123: function () {
                if (this._eventId > 0) {
                    var key = [this._mapId, this._eventId, this._params[0]];
                    $gameSelfSwitches.setValue(key, this._params[1] === 0);
                }
                return true;
            },
            command124: function () {
                if (this._params[0] === 0) {  // Start
                    $gameTimer.start(this._params[1] * 60);
                } else {  // Stop
                    $gameTimer.stop();
                }
                return true;
            },
            command125: function () {
                _mog_treaPopUP_gint_command125.call(this);
                if ((Moghunter.trpopup_GoldVisible) === "true") {
                    this.checkTreasurePopup(3);
                };
                return true;
            },
            command126: function () {
                _mog_treaPopUP_gint_command126.call(this);
                this.checkTreasurePopup(0);
                return true;
            },
            command127: function () {
                _mog_treaPopUP_gint_command127.call(this);
                this.checkTreasurePopup(1);
                return true;
            },
            command128: function () {
                _mog_treaPopUP_gint_command128.call(this);
                this.checkTreasurePopup(2);
                return true;
            },
            command129: function () {
                _alias_mog_battlecursor_command129.call(this);
                $gameTemp._arrow_need_refresh = true;
                return true;
            },
            command132: function () {
                $gameSystem.setBattleBgm(this._params[0]);
                return true;
            },
            command133: function () {
                $gameSystem.setVictoryMe(this._params[0]);
                return true;
            },
            command134: function () {
                if (this._params[0] === 0) {
                    $gameSystem.disableSave();
                } else {
                    $gameSystem.enableSave();
                }
                return true;
            },
            command135: function () {
                if (this._params[0] === 0) {
                    $gameSystem.disableMenu();
                } else {
                    $gameSystem.enableMenu();
                }
                return true;
            },
            command136: function () {
                if (this._params[0] === 0) {
                    $gameSystem.disableEncounter();
                } else {
                    $gameSystem.enableEncounter();
                }
                $gamePlayer.makeEncounterCount();
                return true;
            },
            command137: function () {
                if (this._params[0] === 0) {
                    $gameSystem.disableFormation();
                } else {
                    $gameSystem.enableFormation();
                }
                return true;
            },
            command138: function () {
                $gameSystem.setWindowTone(this._params[0]);
                return true;
            },
            command139: function () {
                $gameSystem.setDefeatMe(this._params[0]);
                return true;
            },
            command140: function () {
                var vehicle = $gameMap.vehicle(this._params[0]);
                if (vehicle) {
                    vehicle.setBgm(this._params[1]);
                }
                return true;
            },
            command201: function () {
                if (!$gameParty.inBattle() && !$gameMessage.isBusy()) {
                    var mapId, x, y;
                    if (this._params[0] === 0) {  // Direct designation
                        mapId = this._params[1];
                        x = this._params[2];
                        y = this._params[3];
                    } else {  // Designation with variables
                        mapId = $gameVariables.value(this._params[1]);
                        x = $gameVariables.value(this._params[2]);
                        y = $gameVariables.value(this._params[3]);
                    }
                    $gamePlayer.reserveTransfer(mapId, x, y, this._params[4], this._params[5]);
                    this.setWaitMode('transfer');
                    this._index++;
                }
                return false;
            },
            command202: function () {
                var mapId, x, y;
                if (this._params[1] === 0) {  // Direct designation
                    mapId = this._params[2];
                    x = this._params[3];
                    y = this._params[4];
                } else {  // Designation with variables
                    mapId = $gameVariables.value(this._params[2]);
                    x = $gameVariables.value(this._params[3]);
                    y = $gameVariables.value(this._params[4]);
                }
                var vehicle = $gameMap.vehicle(this._params[0]);
                if (vehicle) {
                    vehicle.setLocation(mapId, x, y);
                }
                return true;
            },
            command203: function () {
                var character = this.character(this._params[0]);
                if (character) {
                    if (this._params[1] === 0) {  // Direct designation
                        character.locate(this._params[2], this._params[3]);
                    } else if (this._params[1] === 1) {  // Designation with variables
                        var x = $gameVariables.value(this._params[2]);
                        var y = $gameVariables.value(this._params[3]);
                        character.locate(x, y);
                    } else {  // Exchange with another event
                        var character2 = this.character(this._params[2]);
                        if (character2) {
                            character.swap(character2);
                        }
                    }
                    if (this._params[4] > 0) {
                        character.setDirection(this._params[4]);
                    }
                }
                return true;
            },
            command204: function () {
                if (!$gameParty.inBattle()) {
                    if ($gameMap.isScrolling()) {
                        this.setWaitMode('scroll');
                        return false;
                    }
                    $gameMap.startScroll(this._params[0], this._params[1], this._params[2]);
                }
                return true;
            },
            command205: function () {
                $gameMap.refreshIfNeeded();
                this._character = this.character(this._params[0]);
                if (this._character) {
                    this._character.forceMoveRoute(this._params[1]);
                    if (this._params[1].wait) {
                        this.setWaitMode('route');
                    }
                }
                return true;
            },
            command206: function () {
                $gamePlayer.getOnOffVehicle();
                return true;
            },
            command211: function () {
                $gamePlayer.setTransparent(this._params[0] === 0);
                return true;
            },
            command212: function () {
                this._character = this.character(this._params[0]);
                if (this._character) {
                    this._character.requestAnimation(this._params[1]);
                    if (this._params[2]) {
                        this.setWaitMode('animation');
                    }
                }
                return true;
            },
            command213: function () {
                this._character = this.character(this._params[0]);
                if (this._character) {
                    this._character.requestBalloon(this._params[1]);
                    if (this._params[2]) {
                        this.setWaitMode('balloon');
                    }
                }
                return true;
            },
            command214: function () {
                if (this.isOnCurrentMap() && this._eventId > 0) {
                    $gameMap.eraseEvent(this._eventId);
                }
                return true;
            },
            command216: function () {
                if (this._params[0] === 0) {
                    $gamePlayer.showFollowers();
                } else {
                    $gamePlayer.hideFollowers();
                }
                $gamePlayer.refresh();
                return true;
            },
            command217: function () {
                if (!$gameParty.inBattle()) {
                    $gamePlayer.gatherFollowers();
                    this.setWaitMode('gather');
                }
                return true;
            },
            command221: function () {
                if (!$gameMessage.isBusy()) {
                    $gameScreen.startFadeOut(this.fadeSpeed());
                    this.wait(this.fadeSpeed());
                    this._index++;
                }
                return false;
            },
            command222: function () {
                if (!$gameMessage.isBusy()) {
                    $gameScreen.startFadeIn(this.fadeSpeed());
                    this.wait(this.fadeSpeed());
                    this._index++;
                }
                return false;
            },
            command223: function () {
                $gameScreen.startTint(this._params[0], this._params[1]);
                if (this._params[2]) {
                    this.wait(this._params[1]);
                }
                return true;
            },
            command224: function () {
                $gameScreen.startFlash(this._params[0], this._params[1]);
                if (this._params[2]) {
                    this.wait(this._params[1]);
                }
                return true;
            },
            command225: function () {
                $gameScreen.startShake(this._params[0], this._params[1], this._params[2]);
                if (this._params[3]) {
                    this.wait(this._params[2]);
                }
                return true;
            },
            command230: function () {
                this.wait(this._params[0]);
                return true;
            },
            command231: function () {
                var x, y;
                if (this._params[3] === 0) {  // Direct designation
                    x = this._params[4];
                    y = this._params[5];
                } else {  // Designation with variables
                    x = $gameVariables.value(this._params[4]);
                    y = $gameVariables.value(this._params[5]);
                }
                $gameScreen.showPicture(this._params[0], this._params[1], this._params[2],
                    x, y, this._params[6], this._params[7], this._params[8], this._params[9]);
                return true;
            },
            command232: function () {
                var x, y;
                if (this._params[3] === 0) {  // Direct designation
                    x = this._params[4];
                    y = this._params[5];
                } else {  // Designation with variables
                    x = $gameVariables.value(this._params[4]);
                    y = $gameVariables.value(this._params[5]);
                }
                $gameScreen.movePicture(this._params[0], this._params[2], x, y, this._params[6],
                    this._params[7], this._params[8], this._params[9], this._params[10]);
                if (this._params[11]) {
                    this.wait(this._params[10]);
                }
                return true;
            },
            command233: function () {
                $gameScreen.rotatePicture(this._params[0], this._params[1]);
                return true;
            },
            command234: function () {
                $gameScreen.tintPicture(this._params[0], this._params[1], this._params[2]);
                if (this._params[3]) {
                    this.wait(this._params[2]);
                }
                return true;
            },
            command235: function () {
                $gameScreen.erasePicture(this._params[0]);
                return true;
            },
            command236: function () {
                if (!$gameParty.inBattle()) {
                    $gameScreen.changeWeather(this._params[0], this._params[1], this._params[2]);
                    if (this._params[3]) {
                        this.wait(this._params[2]);
                    }
                }
                return true;
            },
            command241: function () {
                AudioManager.playBgm(this._params[0]);
                return true;
            },
            command242: function () {
                AudioManager.fadeOutBgm(this._params[0]);
                return true;
            },
            command243: function () {
                $gameSystem.saveBgm();
                return true;
            },
            command244: function () {
                $gameSystem.replayBgm();
                return true;
            },
            command245: function () {
                AudioManager.playBgs(this._params[0]);
                return true;
            },
            command246: function () {
                AudioManager.fadeOutBgs(this._params[0]);
                return true;
            },
            command249: function () {
                AudioManager.playMe(this._params[0]);
                return true;
            },
            command250: function () {
                AudioManager.playSe(this._params[0]);
                return true;
            },
            command251: function () {
                AudioManager.stopSe();
                return true;
            },
            command261: function () {
                if (!$gameMessage.isBusy()) {
                    var name = this._params[0];
                    if (name.length > 0) {
                        var ext = this.videoFileExt();
                        Graphics.playVideo('movies/' + name + ext);
                        this.setWaitMode('video');
                    }
                    this._index++;
                }
                return false;
            },
            videoFileExt: function () {
                if (Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()) {
                    return '.webm';
                } else {
                    return '.mp4';
                }
            },
            command281: function () {
                if (this._params[0] === 0) {
                    $gameMap.enableNameDisplay();
                } else {
                    $gameMap.disableNameDisplay();
                }
                return true;
            },
            command282: function () {
                var tileset = $dataTilesets[this._params[0]];
                for (var i = 0; i < tileset.tilesetNames.length; i++) {
                    ImageManager.loadTileset(tileset.tilesetNames[i]);
                }
                if (ImageManager.isReady()) {
                    $gameMap.changeTileset(this._params[0]);
                    return true;
                } else {
                    return false;
                }
            },
            command283: function () {
                $gameMap.changeBattleback(this._params[0], this._params[1]);
                return true;
            },
            command284: function () {
                $gameMap.changeParallax(this._params[0], this._params[1],
                    this._params[2], this._params[3], this._params[4]);
                return true;
            },
            command285: function () {
                var x, y, value;
                if (this._params[2] === 0) {  // Direct designation
                    x = this._params[3];
                    y = this._params[4];
                } else {  // Designation with variables
                    x = $gameVariables.value(this._params[3]);
                    y = $gameVariables.value(this._params[4]);
                }
                switch (this._params[1]) {
                    case 0:     // Terrain Tag
                        value = $gameMap.terrainTag(x, y);
                        break;
                    case 1:     // Event ID
                        value = $gameMap.eventIdXy(x, y);
                        break;
                    case 2:     // Tile ID (Layer 1)
                    case 3:     // Tile ID (Layer 2)
                    case 4:     // Tile ID (Layer 3)
                    case 5:     // Tile ID (Layer 4)
                        value = $gameMap.tileId(x, y, this._params[1] - 2);
                        break;
                    default:    // Region ID
                        value = $gameMap.regionId(x, y);
                        break;
                }
                $gameVariables.setValue(this._params[0], value);
                return true;
            },
            command301: function () {
                if (!$gameParty.inBattle()) {
                    var troopId;
                    if (this._params[0] === 0) {  // Direct designation
                        troopId = this._params[1];
                    } else if (this._params[0] === 1) {  // Designation with a variable
                        troopId = $gameVariables.value(this._params[1]);
                    } else {  // Same as Random Encounter
                        troopId = $gamePlayer.makeEncounterTroopId();
                    }
                    if ($dataTroops[troopId]) {
                        BattleManager.setup(troopId, this._params[2], this._params[3]);
                        BattleManager.setEventCallback(function (n) {
                            this._branch[this._indent] = n;
                        }.bind(this));
                        $gamePlayer.makeEncounterCount();
                        SceneManager.push(Scene_Battle);
                    }
                }
                return true;
            },
            command601: function () {
                if (this._branch[this._indent] !== 0) {
                    this.skipBranch();
                }
                return true;
            },
            command602: function () {
                if (this._branch[this._indent] !== 1) {
                    this.skipBranch();
                }
                return true;
            },
            command603: function () {
                if (this._branch[this._indent] !== 2) {
                    this.skipBranch();
                }
                return true;
            },
            command302: function () {
                if (!$gameParty.inBattle()) {
                    var goods = [this._params];
                    while (this.nextEventCode() === 605) {
                        this._index++;
                        goods.push(this.currentCommand().parameters);
                    }
                    SceneManager.push(Scene_Shop);
                    SceneManager.prepareNextScene(goods, this._params[4]);
                }
                return true;
            },
            command303: function () {
                if (!$gameParty.inBattle()) {
                    if ($dataActors[this._params[0]]) {
                        SceneManager.push(Scene_KorName);
                        SceneManager.prepareNextScene(this._params[0], this._params[1]);
                    }
                }
                return true;
            },
            command311: function () {
                var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    this.changeHp(actor, value, this._params[5]);
                }.bind(this));
                return true;
            },
            command312: function () {
                var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    actor.gainMp(value);
                }.bind(this));
                return true;
            },
            command326: function () {
                var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    actor.gainTp(value);
                }.bind(this));
                return true;
            },
            command313: function () {
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    var alreadyDead = actor.isDead();
                    if (this._params[2] === 0) {
                        actor.addState(this._params[3]);
                    } else {
                        actor.removeState(this._params[3]);
                    }
                    if (actor.isDead() && !alreadyDead) {
                        actor.performCollapse();
                    }
                    actor.clearResult();
                }.bind(this));
                return true;
            },
            command314: function () {
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    actor.recoverAll();
                }.bind(this));
                return true;
            },
            command315: function () {
                var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    actor.changeExp(actor.currentExp() + value, this._params[5]);
                }.bind(this));
                return true;
            },
            command316: function () {
                var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    actor.changeLevel(actor.level + value, this._params[5]);
                }.bind(this));
                return true;
            },
            command317: function () {
                var value = this.operateValue(this._params[3], this._params[4], this._params[5]);
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    actor.addParam(this._params[2], value);
                }.bind(this));
                return true;
            },
            command318: function () {
                this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                    if (this._params[2] === 0) {
                        actor.learnSkill(this._params[3]);
                    } else {
                        actor.forgetSkill(this._params[3]);
                    }
                }.bind(this));
                return true;
            },
            command319: function () {
                var actor = $gameActors.actor(this._params[0]);
                if (actor) {
                    actor.changeEquipById(this._params[1], this._params[2]);
                }
                return true;
            },
            command320: function () {
                var actor = $gameActors.actor(this._params[0]);
                if (actor) {
                    actor.setName(this._params[1]);
                }
                return true;
            },
            command321: function () {
                var actor = $gameActors.actor(this._params[0]);
                if (actor && $dataClasses[this._params[1]]) {
                    actor.changeClass(this._params[1], this._params[2]);
                }
                return true;
            },
            command322: function () {
                var actor = $gameActors.actor(this._params[0]);
                if (actor) {
                    actor.setCharacterImage(this._params[1], this._params[2]);
                    actor.setFaceImage(this._params[3], this._params[4]);
                    actor.setBattlerImage(this._params[5]);
                }
                $gamePlayer.refresh();
                return true;
            },
            command323: function () {
                var vehicle = $gameMap.vehicle(this._params[0]);
                if (vehicle) {
                    vehicle.setImage(this._params[1], this._params[2]);
                }
                return true;
            },
            command324: function () {
                var actor = $gameActors.actor(this._params[0]);
                if (actor) {
                    actor.setNickname(this._params[1]);
                }
                return true;
            },
            command325: function () {
                var actor = $gameActors.actor(this._params[0]);
                if (actor) {
                    actor.setProfile(this._params[1]);
                }
                return true;
            },
            command331: function () {
                var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    this.changeHp(enemy, value, this._params[4]);
                }.bind(this));
                return true;
            },
            command332: function () {
                var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    enemy.gainMp(value);
                }.bind(this));
                return true;
            },
            command342: function () {
                var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    enemy.gainTp(value);
                }.bind(this));
                return true;
            },
            command333: function () {
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    var alreadyDead = enemy.isDead();
                    if (this._params[1] === 0) {
                        enemy.addState(this._params[2]);
                    } else {
                        enemy.removeState(this._params[2]);
                    }
                    if (enemy.isDead() && !alreadyDead) {
                        enemy.performCollapse();
                    }
                    enemy.clearResult();
                }.bind(this));
                return true;
            },
            command334: function () {
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    enemy.recoverAll();
                }.bind(this));
                return true;
            },
            command335: function () {
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    enemy.appear();
                    $gameTroop.makeUniqueNames();
                }.bind(this));
                return true;
            },
            command336: function () {
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    enemy.transform(this._params[1]);
                    $gameTroop.makeUniqueNames();
                }.bind(this));
                return true;
            },
            command337: function () {
                this.iterateEnemyIndex(this._params[0], function (enemy) {
                    if (enemy.isAlive()) {
                        enemy.startAnimation(this._params[1], false, 0);
                    }
                }.bind(this));
                return true;
            },
            command339: function () {
                this.iterateBattler(this._params[0], this._params[1], function (battler) {
                    if (!battler.isDeathStateAffected()) {
                        battler.forceAction(this._params[2], this._params[3]);
                        BattleManager.forceAction(battler);
                        this.setWaitMode('action');
                    }
                }.bind(this));
                return true;
            },
            command340: function () {
                BattleManager.abort();
                return true;
            },
            command351: function () {
                if (!$gameParty.inBattle()) {
                    SceneManager.push(Scene_Menu);
                    Window_MenuCommand.initCommandPosition();
                }
                return true;
            },
            command352: function () {
                if (!$gameParty.inBattle()) {
                    SceneManager.push(Scene_Save);
                }
                return true;
            },
            command353: function () {
                SceneManager.goto(Scene_Gameover);
                return true;
            },
            command354: function () {
                SceneManager.goto(Scene_Title);
                return true;
            },
            command355: function () {
                var script = this.currentCommand().parameters[0] + '\n';
                while (this.nextEventCode() === 655) {
                    this._index++;
                    script += this.currentCommand().parameters[0] + '\n';
                }
                eval(script);
                return true;
            },
            command356: function () {
                var args = this._params[0].split(" ");
                var command = args.shift();
                this.pluginCommand(command, args);
                return true;
            },
            pluginCommand: function (command, args) {
                KJ.Puzzle.Game_Interpreter_pluginCommand.call(this, command, args);
                if (command === 'Puzzle') {
                    KJ.Puzzle.Param.PicName = args[0];
                    KJ.Puzzle.Param.SwitchId = parseInt(args[1]);
                    KJ.Puzzle.Param.ColNumber = parseInt(args[2]);
                    KJ.Puzzle.Param.TotalNumber = parseInt(args[3]);
                    KJ.Puzzle.Param.CancelEnable = args[4].toLowerCase() === 'true';
                    SceneManager.push(Scene_Puzzle);
                }
            },
            isContinueMessageString: function () {
                if (this.nextEventCode() === 101 && $gameSystem.messageRows() > 4) {
                    return true;
                } else {
                    return this.nextEventCode() === 401;
                }
            },
            setBattleSystem: function (value) {
                $gameSystem.setBattleSystem(value);
            },
            pictureCommonEventsMove: function (args) {
                var dir = args[0];
                if (dir.match(/down/i)) {
                    $gamePlayer.moveByPictureCommonEvent(2);
                } else if (dir.match(/left/i)) {
                    $gamePlayer.moveByPictureCommonEvent(4);
                } else if (dir.match(/right/i)) {
                    $gamePlayer.moveByPictureCommonEvent(6);
                } else if (dir.match(/up/i)) {
                    $gamePlayer.moveByPictureCommonEvent(8);
                }
            },
            triggerButton: function (args) {
                if (!args) return;
                var button = args[0].toLowerCase();
                if (button === 'cancel') button = 'escape';
                if (button === 'dash') button = 'shift';
                Input._latestButton = button;
                Input._pressedTime = 0;
            },
            argsToString: function (args) {
                var str = '';
                var length = args.length;
                for (var i = 0; i < length; ++i) {
                    str += args[i] + ' ';
                }
                return str.trim();
            },
            addCommonEventMenu: function (args) {
                var str = this.argsToString(args);
                var array = [];
                if (str.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
                    array = Yanfly.Util.getRange(parseInt(RegExp.$1), parseInt(RegExp.$2));
                } else if (str.match(/(\d+(?:\s*,\s*\d+)*)/i)) {
                    array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
                }
                $gameSystem.addCommonEventMenu(array);
            },
            openCommonEventMenu: function () {
                if ($gameParty.inBattle() && !Imported.YEP_BattleEngineCore) return;
                SceneManager._scene.openCommonEventMenu(this._mapId, this._eventId);
                this.wait(10);
            },
            setCommonEventMenuSettings: function (name) {
                var settings;
                if (name.match(/DEFAULT SETUP/i)) {
                    settings = {
                        mainX: Yanfly.Param.CEMWindowX,
                        mainY: Yanfly.Param.CEMWindowY,
                        mainW: Yanfly.Param.CEMWindowWidth,
                        mainH: Yanfly.Param.CEMWindowHeight,
                        mainC: Yanfly.Param.CEMWindowColumns,
                        mainO: Yanfly.Param.CEMWindowOpacity,

                        helpS: Yanfly.Param.CEMShowHelp,
                        helpX: Yanfly.Param.CEMHelpX,
                        helpY: Yanfly.Param.CEMHelpY,
                        helpW: Yanfly.Param.CEMHelpWidth,
                        helpH: Yanfly.Param.CEMHelpHeight,
                        helpO: Yanfly.Param.CEMHelpOpacity,

                        picS: Yanfly.Param.CEMShowPic,
                        picX: Yanfly.Param.CEMPicX,
                        picY: Yanfly.Param.CEMPicY,
                        picW: Yanfly.Param.CEMPicWidth,
                        picH: Yanfly.Param.CEMPicHeight,
                        picO: Yanfly.Param.CEMPicOpacity,

                        subS: Yanfly.Param.CEMShowSub,
                        subX: Yanfly.Param.CEMSubX,
                        subY: Yanfly.Param.CEMSubY,
                        subW: Yanfly.Param.CEMSubWidth,
                        subH: Yanfly.Param.CEMSubHeight,
                        subO: Yanfly.Param.CEMSubOpacity
                    }
                } else if (name.match(/BASIC SETUP/i)) {
                    settings = {
                        mainX: 0,
                        mainY: 'this.fittingHeight(2)',
                        mainW: 'Graphics.boxWidth',
                        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
                        mainC: 1,
                        mainO: 255,

                        helpS: true,
                        helpX: 0,
                        helpY: 0,
                        helpW: 'Graphics.boxWidth',
                        helpH: 'this.fittingHeight(2)',
                        helpO: 255,

                        picS: false,
                        picX: 0,
                        picY: 0,
                        picW: 1,
                        picH: 1,
                        picO: 255,

                        subS: false,
                        subX: 0,
                        subY: 0,
                        subW: 1,
                        subH: 1,
                        subO: 255
                    }
                }
                if (settings) $gameSystem.setCommonEventMenuSettings(settings);
            },
            gotoSceneSynthesis: function (args) {
                if ($gameParty.inBattle()) return;
                if (args && args.length >= 2) {
                    var text = args[0].toUpperCase();
                    var id = parseInt(args[1]);
                    if (text === 'ITEM') {
                        $gameTemp._synthRecipe = $dataItems[id];
                    } else if (text === 'WEAPON') {
                        $gameTemp._synthRecipe = $dataWeapons[id];
                    } else if (text === 'ARMOR') {
                        $gameTemp._synthRecipe = $dataArmors[id];
                    }
                }
                SceneManager.push(Scene_Synthesis);
            },
            checkTreasurePopup: function (type) {
                if ($gameSystem._trspupVisible) {
                    if (type > 2) {
                        var amount = this.operateValue(this._params[0], this._params[1], this._params[2]);
                    } else {
                        var amount = this.operateValue(this._params[1], this._params[2], this._params[3]);
                    };
                    if (amount > 0 && SceneManager._scene.constructor.name === "Scene_Map") {
                        for (i = 0; i < $gameMap.events().length; i++) {
                            var eve = $gameMap.events()[i];
                            if (eve && (this._eventId === eve._eventId)) {
                                var x = eve.screenX();
                                var y = eve.screenY();
                                $gameSystem._trspupData.push([this.trPopupType(type), amount, x, y]);
                            };
                        };
                    };
                };
            },
            trPopupType: function (type) {
                if (type === 0) { return $dataItems[this._params[0]] };
                if (type === 1) { return $dataWeapons[this._params[0]] };
                if (type === 2) { return $dataArmors[this._params[0]] };
                return null;
            },

        },
        _branch: {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: 0,
            6: 0,
            7: null,
            8: null,
        },
        _params: 30,
        _indent: 0,
        _frameCount: 6236216,
        _freezeChecker: 1,
        '@': "Game_Interpreter",
        initialize: function (depth) {
            this._depth = depth || 0;
            this.checkOverflow();
            this.clear();
            this._branch = {};
            this._params = [];
            this._indent = 0;
            this._frameCount = 0;
            this._freezeChecker = 0;
        },
        checkOverflow: function () {
            if (this._depth >= 100) {
                throw new Error('Common event calls exceeded the limit');
            }
        },
        clear: function () {
            this._mapId = 0;
            this._eventId = 0;
            this._list = null;
            this._index = 0;
            this._waitCount = 0;
            this._waitMode = '';
            this._comments = '';
            this._character = null;
            this._childInterpreter = null;
        },
        setup: function (list, eventId) {
            this.clear();
            this._mapId = $gameMap.mapId();
            this._eventId = eventId || 0;
            this._list = list;
        },
        eventId: function () {
            return this._eventId;
        },
        isOnCurrentMap: function () {
            return this._mapId === $gameMap.mapId();
        },
        setupReservedCommonEvent: function () {
            if ($gameTemp.isCommonEventReserved()) {
                this.setup($gameTemp.reservedCommonEvent().list);
                $gameTemp.clearCommonEvent();
                return true;
            } else {
                return false;
            }
        },
        isRunning: function () {
            return !!this._list;
        },
        update: function () {
            while (this.isRunning()) {
                if (this.updateChild() || this.updateWait()) {
                    break;
                }
                if (SceneManager.isSceneChanging()) {
                    break;
                }
                if (!this.executeCommand()) {
                    break;
                }
                if (this.checkFreeze()) {
                    break;
                }
            }
        },
        updateChild: function () {
            if (this._childInterpreter) {
                this._childInterpreter.update();
                if (this._childInterpreter.isRunning()) {
                    return true;
                } else {
                    this._childInterpreter = null;
                }
            }
            return false;
        },
        updateWait: function () {
            return this.updateWaitCount() || this.updateWaitMode();
        },
        updateWaitCount: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
                return true;
            }
            return false;
        },
        updateWaitMode: function () {
            var waiting = false;
            switch (this._waitMode) {
                case 'message':
                    waiting = $gameMessage.isBusy();
                    break;
                case 'transfer':
                    waiting = $gamePlayer.isTransferring();
                    break;
                case 'scroll':
                    waiting = $gameMap.isScrolling();
                    break;
                case 'route':
                    waiting = this._character.isMoveRouteForcing();
                    break;
                case 'animation':
                    waiting = this._character.isAnimationPlaying();
                    break;
                case 'balloon':
                    waiting = this._character.isBalloonPlaying();
                    break;
                case 'gather':
                    waiting = $gamePlayer.areFollowersGathering();
                    break;
                case 'action':
                    waiting = BattleManager.isActionForced();
                    break;
                case 'video':
                    waiting = Graphics.isVideoPlaying();
                    break;
                case 'image':
                    waiting = !ImageManager.isReady();
                    break;
            }
            if (!waiting) {
                this._waitMode = '';
            }
            return waiting;
        },
        setWaitMode: function (waitMode) {
            this._waitMode = waitMode;
        },
        wait: function (duration) {
            this._waitCount = duration;
        },
        fadeSpeed: function () {
            return 24;
        },
        executeCommand: function () {
            var command = this.currentCommand();
            if (command) {
                this._params = command.parameters;
                this._indent = command.indent;
                var methodName = 'command' + command.code;
                if (typeof this[methodName] === 'function') {
                    if (!this[methodName]()) {
                        return false;
                    }
                }
                this._index++;
            } else {
                this.terminate();
            }
            return true;
        },
        checkFreeze: function () {
            if (this._frameCount !== Graphics.frameCount) {
                this._frameCount = Graphics.frameCount;
                this._freezeChecker = 0;
            }
            if (this._freezeChecker++ >= 100000) {
                return true;
            } else {
                return false;
            }
        },
        terminate: function () {
            this._list = null;
            this._comments = '';
        },
        skipBranch: function () {
            while (this._list[this._index + 1].indent > this._indent) {
                this._index++;
            }
        },
        currentCommand: function () {
            return this._list[this._index];
        },
        nextEventCode: function () {
            var command = this._list[this._index + 1];
            if (command) {
                return command.code;
            } else {
                return 0;
            }
        },
        iterateActorId: function (param, callback) {
            if (param === 0) {
                $gameParty.members().forEach(callback);
            } else {
                var actor = $gameActors.actor(param);
                if (actor) {
                    callback(actor);
                }
            }
        },
        iterateActorEx: function (param1, param2, callback) {
            if (param1 === 0) {
                this.iterateActorId(param2, callback);
            } else {
                this.iterateActorId($gameVariables.value(param2), callback);
            }
        },
        iterateActorIndex: function (param, callback) {
            if (param < 0) {
                $gameParty.members().forEach(callback);
            } else {
                var actor = $gameParty.members()[param];
                if (actor) {
                    callback(actor);
                }
            }
        },
        iterateEnemyIndex: function (param, callback) {
            if (param < 0) {
                $gameTroop.members().forEach(callback);
            } else {
                var enemy = $gameTroop.members()[param];
                if (enemy) {
                    callback(enemy);
                }
            }
        },
        iterateBattler: function (param1, param2, callback) {
            if ($gameParty.inBattle()) {
                if (param1 === 0) {
                    this.iterateEnemyIndex(param2, callback);
                } else {
                    this.iterateActorId(param2, callback);
                }
            }
        },
        character: function (param) {
            if ($gameParty.inBattle()) {
                return null;
            } else if (param < 0) {
                return $gamePlayer;
            } else if (this.isOnCurrentMap()) {
                return $gameMap.event(param > 0 ? param : this._eventId);
            } else {
                return null;
            }
        },
        operateValue: function (operation, operandType, operand) {
            var value = operandType === 0 ? operand : $gameVariables.value(operand);
            return operation === 0 ? value : -value;
        },
        changeHp: function (target, value, allowDeath) {
            if (target.isAlive()) {
                if (!allowDeath && target.hp <= -value) {
                    value = 1 - target.hp;
                }
                target.gainHp(value);
                if (target.isDead()) {
                    target.performCollapse();
                }
            }
        },
        command101: function () {
            if (!$gameMessage.isBusy()) {
                $gameMessage.setFaceImage(this._params[0], this._params[1]);
                $gameMessage.setBackground(this._params[2]);
                $gameMessage.setPositionType(this._params[3]);
                while (this.isContinueMessageString()) {
                    this._index++;
                    if (this._list[this._index].code === 401) {
                        $gameMessage.addText(this.currentCommand().parameters[0]);
                    }
                    if ($gameMessage._texts.length >= $gameSystem.messageRows()) break;
                }
                switch (this.nextEventCode()) {
                    case 102:
                        this._index++;
                        this.setupChoices(this.currentCommand().parameters);
                        break;
                    case 103:
                        this._index++;
                        this.setupNumInput(this.currentCommand().parameters);
                        break;
                    case 104:
                        this._index++;
                        this.setupItemChoice(this.currentCommand().parameters);
                        break;
                }
                this._index++;
                this.setWaitMode('message');
            }
            return false;
        },
        command102: function () {
            if (!$gameMessage.isBusy()) {
                this.setupChoices(this._params);
                this._index++;
                this.setWaitMode('message');
            }
            return false;
        },
        setupChoices: function (params) {
            var choices = params[0].clone();
            var cancelType = params[1];
            var defaultType = params.length > 2 ? params[2] : 0;
            var positionType = params.length > 3 ? params[3] : 2;
            var background = params.length > 4 ? params[4] : 0;
            if (cancelType >= choices.length) {
                cancelType = -2;
            }
            $gameMessage.setChoices(choices, defaultType, cancelType);
            $gameMessage.setChoiceBackground(background);
            $gameMessage.setChoicePositionType(positionType);
            $gameMessage.setChoiceCallback(function (n) {
                this._branch[this._indent] = n;
            }.bind(this));
        },
        command402: function () {
            if (this._branch[this._indent] !== this._params[0]) {
                this.skipBranch();
            }
            return true;
        },
        command403: function () {
            if (this._branch[this._indent] >= 0) {
                this.skipBranch();
            }
            return true;
        },
        command103: function () {
            if (!$gameMessage.isBusy()) {
                this.setupNumInput(this._params);
                this._index++;
                this.setWaitMode('message');
            }
            return false;
        },
        setupNumInput: function (params) {
            $gameMessage.setNumberInput(params[0], params[1]);
        },
        command104: function () {
            if (!$gameMessage.isBusy()) {
                this.setupItemChoice(this._params);
                this._index++;
                this.setWaitMode('message');
            }
            return false;
        },
        setupItemChoice: function (params) {
            $gameMessage.setItemChoice(params[0], params[1] || 2);
        },
        command105: function () {
            if (!$gameMessage.isBusy()) {
                $gameMessage.setScroll(this._params[0], this._params[1]);
                while (this.nextEventCode() === 405) {
                    this._index++;
                    $gameMessage.add(this.currentCommand().parameters[0]);
                }
                this._index++;
                this.setWaitMode('message');
            }
            return false;
        },
        command108: function () {
            this._comments = [this._params[0]];
            while (this.nextEventCode() === 408) {
                this._index++;
                this._comments.push(this.currentCommand().parameters[0]);
            }
            return true;
        },
        command111: function () {
            var result = false;
            switch (this._params[0]) {
                case 0:  // Switch
                    result = ($gameSwitches.value(this._params[1]) === (this._params[2] === 0));
                    break;
                case 1:  // Variable
                    var value1 = $gameVariables.value(this._params[1]);
                    var value2;
                    if (this._params[2] === 0) {
                        value2 = this._params[3];
                    } else {
                        value2 = $gameVariables.value(this._params[3]);
                    }
                    switch (this._params[4]) {
                        case 0:  // Equal to
                            result = (value1 === value2);
                            break;
                        case 1:  // Greater than or Equal to
                            result = (value1 >= value2);
                            break;
                        case 2:  // Less than or Equal to
                            result = (value1 <= value2);
                            break;
                        case 3:  // Greater than
                            result = (value1 > value2);
                            break;
                        case 4:  // Less than
                            result = (value1 < value2);
                            break;
                        case 5:  // Not Equal to
                            result = (value1 !== value2);
                            break;
                    }
                    break;
                case 2:  // Self Switch
                    if (this._eventId > 0) {
                        var key = [this._mapId, this._eventId, this._params[1]];
                        result = ($gameSelfSwitches.value(key) === (this._params[2] === 0));
                    }
                    break;
                case 3:  // Timer
                    if ($gameTimer.isWorking()) {
                        if (this._params[2] === 0) {
                            result = ($gameTimer.seconds() >= this._params[1]);
                        } else {
                            result = ($gameTimer.seconds() <= this._params[1]);
                        }
                    }
                    break;
                case 4:  // Actor
                    var actor = $gameActors.actor(this._params[1]);
                    if (actor) {
                        var n = this._params[3];
                        switch (this._params[2]) {
                            case 0:  // In the Party
                                result = $gameParty.members().contains(actor);
                                break;
                            case 1:  // Name
                                result = (actor.name() === n);
                                break;
                            case 2:  // Class
                                result = actor.isClass($dataClasses[n]);
                                break;
                            case 3:  // Skill
                                result = actor.isLearnedSkill(n);
                                break;
                            case 4:  // Weapon
                                result = actor.hasWeapon($dataWeapons[n]);
                                break;
                            case 5:  // Armor
                                result = actor.hasArmor($dataArmors[n]);
                                break;
                            case 6:  // State
                                result = actor.isStateAffected(n);
                                break;
                        }
                    }
                    break;
                case 5:  // Enemy
                    var enemy = $gameTroop.members()[this._params[1]];
                    if (enemy) {
                        switch (this._params[2]) {
                            case 0:  // Appeared
                                result = enemy.isAlive();
                                break;
                            case 1:  // State
                                result = enemy.isStateAffected(this._params[3]);
                                break;
                        }
                    }
                    break;
                case 6:  // Character
                    var character = this.character(this._params[1]);
                    if (character) {
                        result = (character.direction() === this._params[2]);
                    }
                    break;
                case 7:  // Gold
                    switch (this._params[2]) {
                        case 0:  // Greater than or equal to
                            result = ($gameParty.gold() >= this._params[1]);
                            break;
                        case 1:  // Less than or equal to
                            result = ($gameParty.gold() <= this._params[1]);
                            break;
                        case 2:  // Less than
                            result = ($gameParty.gold() < this._params[1]);
                            break;
                    }
                    break;
                case 8:  // Item
                    result = $gameParty.hasItem($dataItems[this._params[1]]);
                    break;
                case 9:  // Weapon
                    result = $gameParty.hasItem($dataWeapons[this._params[1]], this._params[2]);
                    break;
                case 10:  // Armor
                    result = $gameParty.hasItem($dataArmors[this._params[1]], this._params[2]);
                    break;
                case 11:  // Button
                    result = Input.isPressed(this._params[1]);
                    break;
                case 12:  // Script
                    result = !!eval(this._params[1]);
                    break;
                case 13:  // Vehicle
                    result = ($gamePlayer.vehicle() === $gameMap.vehicle(this._params[1]));
                    break;
            }
            this._branch[this._indent] = result;
            if (this._branch[this._indent] === false) {
                this.skipBranch();
            }
            return true;
        },
        command411: function () {
            if (this._branch[this._indent] !== false) {
                this.skipBranch();
            }
            return true;
        },
        command112: function () {
            return true;
        },
        command413: function () {
            do {
                this._index--;
            } while (this.currentCommand().indent !== this._indent);
            return true;
        },
        command113: function () {
            while (this._index < this._list.length - 1) {
                this._index++;
                var command = this.currentCommand();
                if (command.code === 413 && command.indent < this._indent) {
                    break;
                }
            }
            return true;
        },
        command115: function () {
            this._index = this._list.length;
            return true;
        },
        command117: function () {
            var commonEvent = $dataCommonEvents[this._params[0]];
            if (commonEvent) {
                var eventId = this.isOnCurrentMap() ? this._eventId : 0;
                this.setupChild(commonEvent.list, eventId);
            }
            return true;
        },
        setupChild: function (list, eventId) {
            this._childInterpreter = new Game_Interpreter(this._depth + 1);
            this._childInterpreter.setup(list, eventId);
        },
        command118: function () {
            return true;
        },
        command119: function () {
            var labelName = this._params[0];
            for (var i = 0; i < this._list.length; i++) {
                var command = this._list[i];
                if (command.code === 118 && command.parameters[0] === labelName) {
                    this.jumpTo(i);
                    return;
                }
            }
            return true;
        },
        jumpTo: function (index) {
            var lastIndex = this._index;
            var startIndex = Math.min(index, lastIndex);
            var endIndex = Math.max(index, lastIndex);
            var indent = this._indent;
            for (var i = startIndex; i <= endIndex; i++) {
                var newIndent = this._list[i].indent;
                if (newIndent !== indent) {
                    this._branch[indent] = null;
                    indent = newIndent;
                }
            }
            this._index = index;
        },
        command121: function () {
            for (var i = this._params[0]; i <= this._params[1]; i++) {
                $gameSwitches.setValue(i, this._params[2] === 0);
            }
            return true;
        },
        command122: function () {
            var value = 0;
            switch (this._params[3]) {  // Operand
                case 0:  // Constant
                    value = this._params[4];
                    break;
                case 1:  // Variable
                    value = $gameVariables.value(this._params[4]);
                    break;
                case 2:  // Random
                    value = this._params[4] + Math.randomInt(this._params[5] - this._params[4] + 1);
                    break;
                case 3:  // Game Data
                    value = this.gameDataOperand(this._params[4], this._params[5], this._params[6]);
                    break;
                case 4:  // Script
                    value = eval(this._params[4]);
                    break;
            }
            for (var i = this._params[0]; i <= this._params[1]; i++) {
                this.operateVariable(i, this._params[2], value);
            }
            return true;
        },
        gameDataOperand: function (type, param1, param2) {
            switch (type) {
                case 0:
                    return $gameParty.numIndependentItems($dataItems[param1]);
                    break;
                case 1:
                    return $gameParty.numIndependentItems($dataWeapons[param1]);
                    break;
                case 2:
                    return $gameParty.numIndependentItems($dataArmors[param1]);
                    break;
                default:
                    return Yanfly.Item.Game_Interpreter_gDO.call(this, type, param1, param2);
                    break;
            }
        },
        operateVariable: function (variableId, operationType, value) {
            try {
                var oldValue = $gameVariables.value(variableId);
                switch (operationType) {
                    case 0:  // Set
                        $gameVariables.setValue(variableId, oldValue = value);
                        break;
                    case 1:  // Add
                        $gameVariables.setValue(variableId, oldValue + value);
                        break;
                    case 2:  // Sub
                        $gameVariables.setValue(variableId, oldValue - value);
                        break;
                    case 3:  // Mul
                        $gameVariables.setValue(variableId, oldValue * value);
                        break;
                    case 4:  // Div
                        $gameVariables.setValue(variableId, oldValue / value);
                        break;
                    case 5:  // Mod
                        $gameVariables.setValue(variableId, oldValue % value);
                        break;
                }
            } catch (e) {
                $gameVariables.setValue(variableId, 0);
            }
        },
        command123: function () {
            if (this._eventId > 0) {
                var key = [this._mapId, this._eventId, this._params[0]];
                $gameSelfSwitches.setValue(key, this._params[1] === 0);
            }
            return true;
        },
        command124: function () {
            if (this._params[0] === 0) {  // Start
                $gameTimer.start(this._params[1] * 60);
            } else {  // Stop
                $gameTimer.stop();
            }
            return true;
        },
        command125: function () {
            _mog_treaPopUP_gint_command125.call(this);
            if ((Moghunter.trpopup_GoldVisible) === "true") {
                this.checkTreasurePopup(3);
            };
            return true;
        },
        command126: function () {
            _mog_treaPopUP_gint_command126.call(this);
            this.checkTreasurePopup(0);
            return true;
        },
        command127: function () {
            _mog_treaPopUP_gint_command127.call(this);
            this.checkTreasurePopup(1);
            return true;
        },
        command128: function () {
            _mog_treaPopUP_gint_command128.call(this);
            this.checkTreasurePopup(2);
            return true;
        },
        command129: function () {
            _alias_mog_battlecursor_command129.call(this);
            $gameTemp._arrow_need_refresh = true;
            return true;
        },
        command132: function () {
            $gameSystem.setBattleBgm(this._params[0]);
            return true;
        },
        command133: function () {
            $gameSystem.setVictoryMe(this._params[0]);
            return true;
        },
        command134: function () {
            if (this._params[0] === 0) {
                $gameSystem.disableSave();
            } else {
                $gameSystem.enableSave();
            }
            return true;
        },
        command135: function () {
            if (this._params[0] === 0) {
                $gameSystem.disableMenu();
            } else {
                $gameSystem.enableMenu();
            }
            return true;
        },
        command136: function () {
            if (this._params[0] === 0) {
                $gameSystem.disableEncounter();
            } else {
                $gameSystem.enableEncounter();
            }
            $gamePlayer.makeEncounterCount();
            return true;
        },
        command137: function () {
            if (this._params[0] === 0) {
                $gameSystem.disableFormation();
            } else {
                $gameSystem.enableFormation();
            }
            return true;
        },
        command138: function () {
            $gameSystem.setWindowTone(this._params[0]);
            return true;
        },
        command139: function () {
            $gameSystem.setDefeatMe(this._params[0]);
            return true;
        },
        command140: function () {
            var vehicle = $gameMap.vehicle(this._params[0]);
            if (vehicle) {
                vehicle.setBgm(this._params[1]);
            }
            return true;
        },
        command201: function () {
            if (!$gameParty.inBattle() && !$gameMessage.isBusy()) {
                var mapId, x, y;
                if (this._params[0] === 0) {  // Direct designation
                    mapId = this._params[1];
                    x = this._params[2];
                    y = this._params[3];
                } else {  // Designation with variables
                    mapId = $gameVariables.value(this._params[1]);
                    x = $gameVariables.value(this._params[2]);
                    y = $gameVariables.value(this._params[3]);
                }
                $gamePlayer.reserveTransfer(mapId, x, y, this._params[4], this._params[5]);
                this.setWaitMode('transfer');
                this._index++;
            }
            return false;
        },
        command202: function () {
            var mapId, x, y;
            if (this._params[1] === 0) {  // Direct designation
                mapId = this._params[2];
                x = this._params[3];
                y = this._params[4];
            } else {  // Designation with variables
                mapId = $gameVariables.value(this._params[2]);
                x = $gameVariables.value(this._params[3]);
                y = $gameVariables.value(this._params[4]);
            }
            var vehicle = $gameMap.vehicle(this._params[0]);
            if (vehicle) {
                vehicle.setLocation(mapId, x, y);
            }
            return true;
        },
        command203: function () {
            var character = this.character(this._params[0]);
            if (character) {
                if (this._params[1] === 0) {  // Direct designation
                    character.locate(this._params[2], this._params[3]);
                } else if (this._params[1] === 1) {  // Designation with variables
                    var x = $gameVariables.value(this._params[2]);
                    var y = $gameVariables.value(this._params[3]);
                    character.locate(x, y);
                } else {  // Exchange with another event
                    var character2 = this.character(this._params[2]);
                    if (character2) {
                        character.swap(character2);
                    }
                }
                if (this._params[4] > 0) {
                    character.setDirection(this._params[4]);
                }
            }
            return true;
        },
        command204: function () {
            if (!$gameParty.inBattle()) {
                if ($gameMap.isScrolling()) {
                    this.setWaitMode('scroll');
                    return false;
                }
                $gameMap.startScroll(this._params[0], this._params[1], this._params[2]);
            }
            return true;
        },
        command205: function () {
            $gameMap.refreshIfNeeded();
            this._character = this.character(this._params[0]);
            if (this._character) {
                this._character.forceMoveRoute(this._params[1]);
                if (this._params[1].wait) {
                    this.setWaitMode('route');
                }
            }
            return true;
        },
        command206: function () {
            $gamePlayer.getOnOffVehicle();
            return true;
        },
        command211: function () {
            $gamePlayer.setTransparent(this._params[0] === 0);
            return true;
        },
        command212: function () {
            this._character = this.character(this._params[0]);
            if (this._character) {
                this._character.requestAnimation(this._params[1]);
                if (this._params[2]) {
                    this.setWaitMode('animation');
                }
            }
            return true;
        },
        command213: function () {
            this._character = this.character(this._params[0]);
            if (this._character) {
                this._character.requestBalloon(this._params[1]);
                if (this._params[2]) {
                    this.setWaitMode('balloon');
                }
            }
            return true;
        },
        command214: function () {
            if (this.isOnCurrentMap() && this._eventId > 0) {
                $gameMap.eraseEvent(this._eventId);
            }
            return true;
        },
        command216: function () {
            if (this._params[0] === 0) {
                $gamePlayer.showFollowers();
            } else {
                $gamePlayer.hideFollowers();
            }
            $gamePlayer.refresh();
            return true;
        },
        command217: function () {
            if (!$gameParty.inBattle()) {
                $gamePlayer.gatherFollowers();
                this.setWaitMode('gather');
            }
            return true;
        },
        command221: function () {
            if (!$gameMessage.isBusy()) {
                $gameScreen.startFadeOut(this.fadeSpeed());
                this.wait(this.fadeSpeed());
                this._index++;
            }
            return false;
        },
        command222: function () {
            if (!$gameMessage.isBusy()) {
                $gameScreen.startFadeIn(this.fadeSpeed());
                this.wait(this.fadeSpeed());
                this._index++;
            }
            return false;
        },
        command223: function () {
            $gameScreen.startTint(this._params[0], this._params[1]);
            if (this._params[2]) {
                this.wait(this._params[1]);
            }
            return true;
        },
        command224: function () {
            $gameScreen.startFlash(this._params[0], this._params[1]);
            if (this._params[2]) {
                this.wait(this._params[1]);
            }
            return true;
        },
        command225: function () {
            $gameScreen.startShake(this._params[0], this._params[1], this._params[2]);
            if (this._params[3]) {
                this.wait(this._params[2]);
            }
            return true;
        },
        command230: function () {
            this.wait(this._params[0]);
            return true;
        },
        command231: function () {
            var x, y;
            if (this._params[3] === 0) {  // Direct designation
                x = this._params[4];
                y = this._params[5];
            } else {  // Designation with variables
                x = $gameVariables.value(this._params[4]);
                y = $gameVariables.value(this._params[5]);
            }
            $gameScreen.showPicture(this._params[0], this._params[1], this._params[2],
                x, y, this._params[6], this._params[7], this._params[8], this._params[9]);
            return true;
        },
        command232: function () {
            var x, y;
            if (this._params[3] === 0) {  // Direct designation
                x = this._params[4];
                y = this._params[5];
            } else {  // Designation with variables
                x = $gameVariables.value(this._params[4]);
                y = $gameVariables.value(this._params[5]);
            }
            $gameScreen.movePicture(this._params[0], this._params[2], x, y, this._params[6],
                this._params[7], this._params[8], this._params[9], this._params[10]);
            if (this._params[11]) {
                this.wait(this._params[10]);
            }
            return true;
        },
        command233: function () {
            $gameScreen.rotatePicture(this._params[0], this._params[1]);
            return true;
        },
        command234: function () {
            $gameScreen.tintPicture(this._params[0], this._params[1], this._params[2]);
            if (this._params[3]) {
                this.wait(this._params[2]);
            }
            return true;
        },
        command235: function () {
            $gameScreen.erasePicture(this._params[0]);
            return true;
        },
        command236: function () {
            if (!$gameParty.inBattle()) {
                $gameScreen.changeWeather(this._params[0], this._params[1], this._params[2]);
                if (this._params[3]) {
                    this.wait(this._params[2]);
                }
            }
            return true;
        },
        command241: function () {
            AudioManager.playBgm(this._params[0]);
            return true;
        },
        command242: function () {
            AudioManager.fadeOutBgm(this._params[0]);
            return true;
        },
        command243: function () {
            $gameSystem.saveBgm();
            return true;
        },
        command244: function () {
            $gameSystem.replayBgm();
            return true;
        },
        command245: function () {
            AudioManager.playBgs(this._params[0]);
            return true;
        },
        command246: function () {
            AudioManager.fadeOutBgs(this._params[0]);
            return true;
        },
        command249: function () {
            AudioManager.playMe(this._params[0]);
            return true;
        },
        command250: function () {
            AudioManager.playSe(this._params[0]);
            return true;
        },
        command251: function () {
            AudioManager.stopSe();
            return true;
        },
        command261: function () {
            if (!$gameMessage.isBusy()) {
                var name = this._params[0];
                if (name.length > 0) {
                    var ext = this.videoFileExt();
                    Graphics.playVideo('movies/' + name + ext);
                    this.setWaitMode('video');
                }
                this._index++;
            }
            return false;
        },
        videoFileExt: function () {
            if (Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()) {
                return '.webm';
            } else {
                return '.mp4';
            }
        },
        command281: function () {
            if (this._params[0] === 0) {
                $gameMap.enableNameDisplay();
            } else {
                $gameMap.disableNameDisplay();
            }
            return true;
        },
        command282: function () {
            var tileset = $dataTilesets[this._params[0]];
            for (var i = 0; i < tileset.tilesetNames.length; i++) {
                ImageManager.loadTileset(tileset.tilesetNames[i]);
            }
            if (ImageManager.isReady()) {
                $gameMap.changeTileset(this._params[0]);
                return true;
            } else {
                return false;
            }
        },
        command283: function () {
            $gameMap.changeBattleback(this._params[0], this._params[1]);
            return true;
        },
        command284: function () {
            $gameMap.changeParallax(this._params[0], this._params[1],
                this._params[2], this._params[3], this._params[4]);
            return true;
        },
        command285: function () {
            var x, y, value;
            if (this._params[2] === 0) {  // Direct designation
                x = this._params[3];
                y = this._params[4];
            } else {  // Designation with variables
                x = $gameVariables.value(this._params[3]);
                y = $gameVariables.value(this._params[4]);
            }
            switch (this._params[1]) {
                case 0:     // Terrain Tag
                    value = $gameMap.terrainTag(x, y);
                    break;
                case 1:     // Event ID
                    value = $gameMap.eventIdXy(x, y);
                    break;
                case 2:     // Tile ID (Layer 1)
                case 3:     // Tile ID (Layer 2)
                case 4:     // Tile ID (Layer 3)
                case 5:     // Tile ID (Layer 4)
                    value = $gameMap.tileId(x, y, this._params[1] - 2);
                    break;
                default:    // Region ID
                    value = $gameMap.regionId(x, y);
                    break;
            }
            $gameVariables.setValue(this._params[0], value);
            return true;
        },
        command301: function () {
            if (!$gameParty.inBattle()) {
                var troopId;
                if (this._params[0] === 0) {  // Direct designation
                    troopId = this._params[1];
                } else if (this._params[0] === 1) {  // Designation with a variable
                    troopId = $gameVariables.value(this._params[1]);
                } else {  // Same as Random Encounter
                    troopId = $gamePlayer.makeEncounterTroopId();
                }
                if ($dataTroops[troopId]) {
                    BattleManager.setup(troopId, this._params[2], this._params[3]);
                    BattleManager.setEventCallback(function (n) {
                        this._branch[this._indent] = n;
                    }.bind(this));
                    $gamePlayer.makeEncounterCount();
                    SceneManager.push(Scene_Battle);
                }
            }
            return true;
        },
        command601: function () {
            if (this._branch[this._indent] !== 0) {
                this.skipBranch();
            }
            return true;
        },
        command602: function () {
            if (this._branch[this._indent] !== 1) {
                this.skipBranch();
            }
            return true;
        },
        command603: function () {
            if (this._branch[this._indent] !== 2) {
                this.skipBranch();
            }
            return true;
        },
        command302: function () {
            if (!$gameParty.inBattle()) {
                var goods = [this._params];
                while (this.nextEventCode() === 605) {
                    this._index++;
                    goods.push(this.currentCommand().parameters);
                }
                SceneManager.push(Scene_Shop);
                SceneManager.prepareNextScene(goods, this._params[4]);
            }
            return true;
        },
        command303: function () {
            if (!$gameParty.inBattle()) {
                if ($dataActors[this._params[0]]) {
                    SceneManager.push(Scene_KorName);
                    SceneManager.prepareNextScene(this._params[0], this._params[1]);
                }
            }
            return true;
        },
        command311: function () {
            var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                this.changeHp(actor, value, this._params[5]);
            }.bind(this));
            return true;
        },
        command312: function () {
            var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                actor.gainMp(value);
            }.bind(this));
            return true;
        },
        command326: function () {
            var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                actor.gainTp(value);
            }.bind(this));
            return true;
        },
        command313: function () {
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                var alreadyDead = actor.isDead();
                if (this._params[2] === 0) {
                    actor.addState(this._params[3]);
                } else {
                    actor.removeState(this._params[3]);
                }
                if (actor.isDead() && !alreadyDead) {
                    actor.performCollapse();
                }
                actor.clearResult();
            }.bind(this));
            return true;
        },
        command314: function () {
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                actor.recoverAll();
            }.bind(this));
            return true;
        },
        command315: function () {
            var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                actor.changeExp(actor.currentExp() + value, this._params[5]);
            }.bind(this));
            return true;
        },
        command316: function () {
            var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                actor.changeLevel(actor.level + value, this._params[5]);
            }.bind(this));
            return true;
        },
        command317: function () {
            var value = this.operateValue(this._params[3], this._params[4], this._params[5]);
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                actor.addParam(this._params[2], value);
            }.bind(this));
            return true;
        },
        command318: function () {
            this.iterateActorEx(this._params[0], this._params[1], function (actor) {
                if (this._params[2] === 0) {
                    actor.learnSkill(this._params[3]);
                } else {
                    actor.forgetSkill(this._params[3]);
                }
            }.bind(this));
            return true;
        },
        command319: function () {
            var actor = $gameActors.actor(this._params[0]);
            if (actor) {
                actor.changeEquipById(this._params[1], this._params[2]);
            }
            return true;
        },
        command320: function () {
            var actor = $gameActors.actor(this._params[0]);
            if (actor) {
                actor.setName(this._params[1]);
            }
            return true;
        },
        command321: function () {
            var actor = $gameActors.actor(this._params[0]);
            if (actor && $dataClasses[this._params[1]]) {
                actor.changeClass(this._params[1], this._params[2]);
            }
            return true;
        },
        command322: function () {
            var actor = $gameActors.actor(this._params[0]);
            if (actor) {
                actor.setCharacterImage(this._params[1], this._params[2]);
                actor.setFaceImage(this._params[3], this._params[4]);
                actor.setBattlerImage(this._params[5]);
            }
            $gamePlayer.refresh();
            return true;
        },
        command323: function () {
            var vehicle = $gameMap.vehicle(this._params[0]);
            if (vehicle) {
                vehicle.setImage(this._params[1], this._params[2]);
            }
            return true;
        },
        command324: function () {
            var actor = $gameActors.actor(this._params[0]);
            if (actor) {
                actor.setNickname(this._params[1]);
            }
            return true;
        },
        command325: function () {
            var actor = $gameActors.actor(this._params[0]);
            if (actor) {
                actor.setProfile(this._params[1]);
            }
            return true;
        },
        command331: function () {
            var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                this.changeHp(enemy, value, this._params[4]);
            }.bind(this));
            return true;
        },
        command332: function () {
            var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                enemy.gainMp(value);
            }.bind(this));
            return true;
        },
        command342: function () {
            var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                enemy.gainTp(value);
            }.bind(this));
            return true;
        },
        command333: function () {
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                var alreadyDead = enemy.isDead();
                if (this._params[1] === 0) {
                    enemy.addState(this._params[2]);
                } else {
                    enemy.removeState(this._params[2]);
                }
                if (enemy.isDead() && !alreadyDead) {
                    enemy.performCollapse();
                }
                enemy.clearResult();
            }.bind(this));
            return true;
        },
        command334: function () {
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                enemy.recoverAll();
            }.bind(this));
            return true;
        },
        command335: function () {
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                enemy.appear();
                $gameTroop.makeUniqueNames();
            }.bind(this));
            return true;
        },
        command336: function () {
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                enemy.transform(this._params[1]);
                $gameTroop.makeUniqueNames();
            }.bind(this));
            return true;
        },
        command337: function () {
            this.iterateEnemyIndex(this._params[0], function (enemy) {
                if (enemy.isAlive()) {
                    enemy.startAnimation(this._params[1], false, 0);
                }
            }.bind(this));
            return true;
        },
        command339: function () {
            this.iterateBattler(this._params[0], this._params[1], function (battler) {
                if (!battler.isDeathStateAffected()) {
                    battler.forceAction(this._params[2], this._params[3]);
                    BattleManager.forceAction(battler);
                    this.setWaitMode('action');
                }
            }.bind(this));
            return true;
        },
        command340: function () {
            BattleManager.abort();
            return true;
        },
        command351: function () {
            if (!$gameParty.inBattle()) {
                SceneManager.push(Scene_Menu);
                Window_MenuCommand.initCommandPosition();
            }
            return true;
        },
        command352: function () {
            if (!$gameParty.inBattle()) {
                SceneManager.push(Scene_Save);
            }
            return true;
        },
        command353: function () {
            SceneManager.goto(Scene_Gameover);
            return true;
        },
        command354: function () {
            SceneManager.goto(Scene_Title);
            return true;
        },
        command355: function () {
            var script = this.currentCommand().parameters[0] + '\n';
            while (this.nextEventCode() === 655) {
                this._index++;
                script += this.currentCommand().parameters[0] + '\n';
            }
            eval(script);
            return true;
        },
        command356: function () {
            var args = this._params[0].split(" ");
            var command = args.shift();
            this.pluginCommand(command, args);
            return true;
        },
        pluginCommand: function (command, args) {
            KJ.Puzzle.Game_Interpreter_pluginCommand.call(this, command, args);
            if (command === 'Puzzle') {
                KJ.Puzzle.Param.PicName = args[0];
                KJ.Puzzle.Param.SwitchId = parseInt(args[1]);
                KJ.Puzzle.Param.ColNumber = parseInt(args[2]);
                KJ.Puzzle.Param.TotalNumber = parseInt(args[3]);
                KJ.Puzzle.Param.CancelEnable = args[4].toLowerCase() === 'true';
                SceneManager.push(Scene_Puzzle);
            }
        },
        isContinueMessageString: function () {
            if (this.nextEventCode() === 101 && $gameSystem.messageRows() > 4) {
                return true;
            } else {
                return this.nextEventCode() === 401;
            }
        },
        setBattleSystem: function (value) {
            $gameSystem.setBattleSystem(value);
        },
        pictureCommonEventsMove: function (args) {
            var dir = args[0];
            if (dir.match(/down/i)) {
                $gamePlayer.moveByPictureCommonEvent(2);
            } else if (dir.match(/left/i)) {
                $gamePlayer.moveByPictureCommonEvent(4);
            } else if (dir.match(/right/i)) {
                $gamePlayer.moveByPictureCommonEvent(6);
            } else if (dir.match(/up/i)) {
                $gamePlayer.moveByPictureCommonEvent(8);
            }
        },
        triggerButton: function (args) {
            if (!args) return;
            var button = args[0].toLowerCase();
            if (button === 'cancel') button = 'escape';
            if (button === 'dash') button = 'shift';
            Input._latestButton = button;
            Input._pressedTime = 0;
        },
        argsToString: function (args) {
            var str = '';
            var length = args.length;
            for (var i = 0; i < length; ++i) {
                str += args[i] + ' ';
            }
            return str.trim();
        },
        addCommonEventMenu: function (args) {
            var str = this.argsToString(args);
            var array = [];
            if (str.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
                array = Yanfly.Util.getRange(parseInt(RegExp.$1), parseInt(RegExp.$2));
            } else if (str.match(/(\d+(?:\s*,\s*\d+)*)/i)) {
                array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
            }
            $gameSystem.addCommonEventMenu(array);
        },
        openCommonEventMenu: function () {
            if ($gameParty.inBattle() && !Imported.YEP_BattleEngineCore) return;
            SceneManager._scene.openCommonEventMenu(this._mapId, this._eventId);
            this.wait(10);
        },
        setCommonEventMenuSettings: function (name) {
            var settings;
            if (name.match(/DEFAULT SETUP/i)) {
                settings = {
                    mainX: Yanfly.Param.CEMWindowX,
                    mainY: Yanfly.Param.CEMWindowY,
                    mainW: Yanfly.Param.CEMWindowWidth,
                    mainH: Yanfly.Param.CEMWindowHeight,
                    mainC: Yanfly.Param.CEMWindowColumns,
                    mainO: Yanfly.Param.CEMWindowOpacity,

                    helpS: Yanfly.Param.CEMShowHelp,
                    helpX: Yanfly.Param.CEMHelpX,
                    helpY: Yanfly.Param.CEMHelpY,
                    helpW: Yanfly.Param.CEMHelpWidth,
                    helpH: Yanfly.Param.CEMHelpHeight,
                    helpO: Yanfly.Param.CEMHelpOpacity,

                    picS: Yanfly.Param.CEMShowPic,
                    picX: Yanfly.Param.CEMPicX,
                    picY: Yanfly.Param.CEMPicY,
                    picW: Yanfly.Param.CEMPicWidth,
                    picH: Yanfly.Param.CEMPicHeight,
                    picO: Yanfly.Param.CEMPicOpacity,

                    subS: Yanfly.Param.CEMShowSub,
                    subX: Yanfly.Param.CEMSubX,
                    subY: Yanfly.Param.CEMSubY,
                    subW: Yanfly.Param.CEMSubWidth,
                    subH: Yanfly.Param.CEMSubHeight,
                    subO: Yanfly.Param.CEMSubOpacity
                }
            } else if (name.match(/BASIC SETUP/i)) {
                settings = {
                    mainX: 0,
                    mainY: 'this.fittingHeight(2)',
                    mainW: 'Graphics.boxWidth',
                    mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
                    mainC: 1,
                    mainO: 255,

                    helpS: true,
                    helpX: 0,
                    helpY: 0,
                    helpW: 'Graphics.boxWidth',
                    helpH: 'this.fittingHeight(2)',
                    helpO: 255,

                    picS: false,
                    picX: 0,
                    picY: 0,
                    picW: 1,
                    picH: 1,
                    picO: 255,

                    subS: false,
                    subX: 0,
                    subY: 0,
                    subW: 1,
                    subH: 1,
                    subO: 255
                }
            }
            if (settings) $gameSystem.setCommonEventMenuSettings(settings);
        },
        gotoSceneSynthesis: function (args) {
            if ($gameParty.inBattle()) return;
            if (args && args.length >= 2) {
                var text = args[0].toUpperCase();
                var id = parseInt(args[1]);
                if (text === 'ITEM') {
                    $gameTemp._synthRecipe = $dataItems[id];
                } else if (text === 'WEAPON') {
                    $gameTemp._synthRecipe = $dataWeapons[id];
                } else if (text === 'ARMOR') {
                    $gameTemp._synthRecipe = $dataArmors[id];
                }
            }
            SceneManager.push(Scene_Synthesis);
        },
        checkTreasurePopup: function (type) {
            if ($gameSystem._trspupVisible) {
                if (type > 2) {
                    var amount = this.operateValue(this._params[0], this._params[1], this._params[2]);
                } else {
                    var amount = this.operateValue(this._params[1], this._params[2], this._params[3]);
                };
                if (amount > 0 && SceneManager._scene.constructor.name === "Scene_Map") {
                    for (i = 0; i < $gameMap.events().length; i++) {
                        var eve = $gameMap.events()[i];
                        if (eve && (this._eventId === eve._eventId)) {
                            var x = eve.screenX();
                            var y = eve.screenY();
                            $gameSystem._trspupData.push([this.trPopupType(type), amount, x, y]);
                        };
                    };
                };
            };
        },
        trPopupType: function (type) {
            if (type === 0) { return $dataItems[this._params[0]] };
            if (type === 1) { return $dataWeapons[this._params[0]] };
            if (type === 2) { return $dataArmors[this._params[0]] };
            return null;
        },

    },
    _mapId: 22,
    _tilesetId: 1,
    _events: [{}, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 19,
        _y: 11,
        _realX: 19,
        _realY: 11,
        _moveSpeed: 3,
        _moveFrequency: 3,
        _opacity: 255,
        _blendMode: 0,
        _direction: 2,
        _pattern: 0,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "!DJ_1_xiao",
        _characterIndex: 4,
        _isObjectCharacter: true,
        _walkAnime: false,
        _stepAnime: true,
        _directionFix: true,
        _through: false,
        _transparent: false,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 15,
        _stopCount: 87,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: {
            list: [ {
                    code: 0,
                    parameters: "",
            }],
            repeat: true,
            skippable: false,
            wait: false,

        },
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _moveType: 0,
        _trigger: 1,
        _starting: false,
        _erased: false,
        _pageIndex: 0,
        _originalPattern: 0,
        _originalDirection: 2,
        _prelockDirection: 0,
        _locked: false,
        _mapId: 22,
        _eventId: 1,
        _interpreter: null,
        _displayOverheadType: "name",
        _overheadPageIndex: 0,
        _displayOverheadName: "平安镇北",
        _displayOverheadRange: 1,
        constructor: function Game_Event() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (mapId, eventId) {
            _GameEvent_initialize.call(this, mapId, eventId);
            var meta = this.event().meta;
            this._displayOverheadType = null;
            var nameMeta = null;
            if (meta.Icon) {
                this._displayOverheadType = "icon"
                nameMeta = meta.Icon.split(",");
            }
            else if (meta.Picture) {
                this._displayOverheadType = "picture"
                nameMeta = meta.Picture.split(",");
            }
            else if (meta.Name) {
                this._displayOverheadType = "name"
                nameMeta = meta.Name.split(",");
            }
            if (nameMeta) {
                if (nameMeta[0][0] == " ") nameMeta[0] = nameMeta[0].substring(1);
                this._displayOverheadName = nameMeta[0];
                this._displayOverheadRange = Number(nameMeta[1]) === 0 ? paramDefaultRange : Number(nameMeta[1]);
            }
            this.updateOverheadData();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._moveType = 0;
            this._trigger = 0;
            this._starting = false;
            this._erased = false;
            this._pageIndex = -2;
            this._originalPattern = 1;
            this._originalDirection = 2;
            this._prelockDirection = 0;
            this._locked = false;
        },
        eventId: function () {
            return this._eventId;
        },
        event: function () {
            return $dataMap.events[this._eventId];
        },
        page: function () {
            return this.event().pages[this._pageIndex];
        },
        list: function () {
            return this.page().list;
        },
        isCollidedWithCharacters: function (x, y) {
            return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
                this.isCollidedWithPlayerCharacters(x, y));
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y).filter(function (ev) {
                return ev.isNormalPriority();
            });
            if (events.length <= 0) return false;
            return this.isNormalPriority();
        },
        isCollidedWithPlayerCharacters: function (x, y) {
            return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
        },
        lock: function () {
            if (!this._locked) {
                this._prelockDirection = this.direction();
                this.turnTowardPlayer();
                this._locked = true;
            }
        },
        unlock: function () {
            if (this._locked) {
                this._locked = false;
                this.setDirection(this._prelockDirection);
            }
        },
        updateStop: function () {
            if (this._locked) {
                this.resetStopCount();
            }
            Game_Character.prototype.updateStop.call(this);
            if (!this.isMoveRouteForcing()) {
                this.updateSelfMovement();
            }
        },
        updateSelfMovement: function () {
            if (!this._locked && this.isNearTheScreen() &&
                this.checkStop(this.stopCountThreshold())) {
                switch (this._moveType) {
                    case 1:
                        this.moveTypeRandom();
                        break;
                    case 2:
                        this.moveTypeTowardPlayer();
                        break;
                    case 3:
                        this.moveTypeCustom();
                        break;
                }
            }
        },
        stopCountThreshold: function () {
            return 30 * (5 - this.moveFrequency());
        },
        moveTypeRandom: function () {
            switch (Math.randomInt(6)) {
                case 0: case 1:
                    this.moveRandom();
                    break;
                case 2: case 3: case 4:
                    this.moveForward();
                    break;
                case 5:
                    this.resetStopCount();
                    break;
            }
        },
        moveTypeTowardPlayer: function () {
            if (this.isNearThePlayer()) {
                switch (Math.randomInt(6)) {
                    case 0: case 1: case 2: case 3:
                        this.moveTowardPlayer();
                        break;
                    case 4:
                        this.moveRandom();
                        break;
                    case 5:
                        this.moveForward();
                        break;
                }
            } else {
                this.moveRandom();
            }
        },
        isNearThePlayer: function () {
            var sx = Math.abs(this.deltaXFrom($gamePlayer.x));
            var sy = Math.abs(this.deltaYFrom($gamePlayer.y));
            return sx + sy < 20;
        },
        moveTypeCustom: function () {
            this.updateRoutineMove();
        },
        isStarting: function () {
            return this._starting;
        },
        clearStartingFlag: function () {
            this._starting = false;
        },
        isTriggerIn: function (triggers) {
            return triggers.contains(this._trigger);
        },
        start: function () {
            var list = this.list();
            if (list && list.length > 1) {
                this._starting = true;
                if (this.isTriggerIn([0, 1, 2])) {
                    this.lock();
                }
            }
        },
        erase: function () {
            this._erased = true;
            this.refresh();
        },
        refresh: function () {
            var newPageIndex = this._erased ? -1 : this.findProperPageIndex();
            if (this._pageIndex !== newPageIndex) {
                this._pageIndex = newPageIndex;
                this.setupPage();
            }
        },
        findProperPageIndex: function () {
            var pages = this.event().pages;
            for (var i = pages.length - 1; i >= 0; i--) {
                var page = pages[i];
                if (this.meetsConditions(page)) {
                    return i;
                }
            }
            return -1;
        },
        meetsConditions: function (page) {
            var c = page.conditions;
            if (c.switch1Valid) {
                if (!$gameSwitches.value(c.switch1Id)) {
                    return false;
                }
            }
            if (c.switch2Valid) {
                if (!$gameSwitches.value(c.switch2Id)) {
                    return false;
                }
            }
            if (c.variableValid) {
                if ($gameVariables.value(c.variableId) < c.variableValue) {
                    return false;
                }
            }
            if (c.selfSwitchValid) {
                var key = [this._mapId, this._eventId, c.selfSwitchCh];
                if ($gameSelfSwitches.value(key) !== true) {
                    return false;
                }
            }
            if (c.itemValid) {
                var item = $dataItems[c.itemId];
                if (!$gameParty.hasItem(item)) {
                    return false;
                }
            }
            if (c.actorValid) {
                var actor = $gameActors.actor(c.actorId);
                if (!$gameParty.members().contains(actor)) {
                    return false;
                }
            }
            return true;
        },
        setupPage: function () {
            if (this._pageIndex >= 0) {
                this.setupPageSettings();
            } else {
                this.clearPageSettings();
            }
            this.refreshBushDepth();
            this.clearStartingFlag();
            this.checkEventTriggerAuto();
        },
        clearPageSettings: function () {
            this.setImage('', 0);
            this._moveType = 0;
            this._trigger = null;
            this._interpreter = null;
            this.setThrough(true);
        },
        setupPageSettings: function () {
            ModernAlgebra.EMF.GameEvent_setupPageSettings.apply(this, arguments);
            // Original pattern is always idle for custom sprites
            if (this.isEmfCharacter()) { this._originalPattern = -1; }
            this.resetPattern();
        },
        isOriginalPattern: function () {
            return this.pattern() === this._originalPattern;
        },
        resetPattern: function () {
            this.setPattern(this._originalPattern);
        },
        checkEventTriggerTouch: function (x, y) {
            if (!$gameMap.isEventRunning()) {
                if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
                    if (!this.isJumping() && this.isNormalPriority()) {
                        this.start();
                    }
                }
            }
        },
        checkEventTriggerAuto: function () {
            if (this._trigger === 3) {
                this.start();
            }
        },
        update: function () {
            _GameEvent_update.call(this);
            if (this._pageIndex != this._overheadPageIndex)
                this.updateOverheadData();
        },
        updateParallel: function () {
            if (this._interpreter) {
                if (!this._interpreter.isRunning()) {
                    this._interpreter.setup(this.list(), this._eventId);
                }
                this._interpreter.update();
            }
        },
        locate: function (x, y) {
            Game_Character.prototype.locate.call(this, x, y);
            this._prelockDirection = 0;
        },
        forceMoveRoute: function (moveRoute) {
            Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
            this._prelockDirection = 0;
        },
        isEvent: function () {
            return true;
        },
        updateOverheadData: function () {
            this._overheadPageIndex = this._pageIndex;
            if (!this.page() || this.event().meta.Name || this.event().meta.Picture || this.event().meta.Icon) return;

            var overheadType = null;
            var overheadName = "";
            var overheadRange = 0;

            if (this.list()) {
                for (action of this.list()) {
                    if (action.code == "108") {
                        var a = action.parameters[0];
                        var match = regexEventName.exec(a);
                        if (!match) match = regexPictureName.exec(a);
                        if (!match) match = regexIconName.exec(a);
                        if (match) {
                            overheadType = match[1].toLowerCase();
                            overheadName = match[2];
                            overheadRange = Number(match[3]);
                        }
                    }
                }
            }
            this._displayOverheadType = overheadType;
            this._displayOverheadName = overheadName;
            this._displayOverheadRange = overheadRange;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        pos: function (x, y) {
            return this._x === x && this._y === y;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isMapPassable: function (x, y, d) {
            if (this.isEventRegionForbid(x, y, d)) return false;
            if (this.isPlayerRegionForbid(x, y, d)) return false;
            if (this.isEventRegionAllow(x, y, d)) return true;
            if (this.isPlayerRegionAllow(x, y, d)) return true;
            return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenY: function () {
            var th = $gameMap.tileHeight();
            return Math.round(this.scrolledY() * th + th -
                this.shiftY() - this.jumpHeight());
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }, {}, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 13,
        _y: 9,
        _realX: 13,
        _realY: 9,
        _moveSpeed: 1,
        _moveFrequency: 1,
        _opacity: 255,
        _blendMode: 0,
        _direction: 2,
        _pattern: 1,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "$NPC_B19_Xiao",
        _characterIndex: 0,
        _isObjectCharacter: false,
        _walkAnime: false,
        _stepAnime: false,
        _directionFix: true,
        _through: false,
        _transparent: false,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 84,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: {
            list: [{
                code: 0,
                parameters: "",

            }],
            repeat: true,
            skippable: false,
            wait: false,

        },
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _moveType: 0,
        _trigger: 0,
        _starting: false,
        _erased: false,
        _pageIndex: 1,
        _originalPattern: 1,
        _originalDirection: 2,
        _prelockDirection: 0,
        _locked: false,
        _mapId: 22,
        _eventId: 3,
        _interpreter: null,
        _displayOverheadType: "name",
        _overheadPageIndex: 1,
        _displayOverheadName: "沈万三",
        _displayOverheadRange: 1,
        constructor: function Game_Event() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (mapId, eventId) {
            _GameEvent_initialize.call(this, mapId, eventId);
            var meta = this.event().meta;
            this._displayOverheadType = null;
            var nameMeta = null;
            if (meta.Icon) {
                this._displayOverheadType = "icon"
                nameMeta = meta.Icon.split(",");
            }
            else if (meta.Picture) {
                this._displayOverheadType = "picture"
                nameMeta = meta.Picture.split(",");
            }
            else if (meta.Name) {
                this._displayOverheadType = "name"
                nameMeta = meta.Name.split(",");
            }
            if (nameMeta) {
                if (nameMeta[0][0] == " ") nameMeta[0] = nameMeta[0].substring(1);
                this._displayOverheadName = nameMeta[0];
                this._displayOverheadRange = Number(nameMeta[1]) === 0 ? paramDefaultRange : Number(nameMeta[1]);
            }
            this.updateOverheadData();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._moveType = 0;
            this._trigger = 0;
            this._starting = false;
            this._erased = false;
            this._pageIndex = -2;
            this._originalPattern = 1;
            this._originalDirection = 2;
            this._prelockDirection = 0;
            this._locked = false;
        },
        eventId: function () {
            return this._eventId;
        },
        event: function () {
            return $dataMap.events[this._eventId];
        },
        page: function () {
            return this.event().pages[this._pageIndex];
        },
        list: function () {
            return this.page().list;
        },
        isCollidedWithCharacters: function (x, y) {
            return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
                this.isCollidedWithPlayerCharacters(x, y));
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y).filter(function (ev) {
                return ev.isNormalPriority();
            });
            if (events.length <= 0) return false;
            return this.isNormalPriority();
        },
        isCollidedWithPlayerCharacters: function (x, y) {
            return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
        },
        lock: function () {
            if (!this._locked) {
                this._prelockDirection = this.direction();
                this.turnTowardPlayer();
                this._locked = true;
            }
        },
        unlock: function () {
            if (this._locked) {
                this._locked = false;
                this.setDirection(this._prelockDirection);
            }
        },
        updateStop: function () {
            if (this._locked) {
                this.resetStopCount();
            }
            Game_Character.prototype.updateStop.call(this);
            if (!this.isMoveRouteForcing()) {
                this.updateSelfMovement();
            }
        },
        updateSelfMovement: function () {
            if (!this._locked && this.isNearTheScreen() &&
                this.checkStop(this.stopCountThreshold())) {
                switch (this._moveType) {
                    case 1:
                        this.moveTypeRandom();
                        break;
                    case 2:
                        this.moveTypeTowardPlayer();
                        break;
                    case 3:
                        this.moveTypeCustom();
                        break;
                }
            }
        },
        stopCountThreshold: function () {
            return 30 * (5 - this.moveFrequency());
        },
        moveTypeRandom: function () {
            switch (Math.randomInt(6)) {
                case 0: case 1:
                    this.moveRandom();
                    break;
                case 2: case 3: case 4:
                    this.moveForward();
                    break;
                case 5:
                    this.resetStopCount();
                    break;
            }
        },
        moveTypeTowardPlayer: function () {
            if (this.isNearThePlayer()) {
                switch (Math.randomInt(6)) {
                    case 0: case 1: case 2: case 3:
                        this.moveTowardPlayer();
                        break;
                    case 4:
                        this.moveRandom();
                        break;
                    case 5:
                        this.moveForward();
                        break;
                }
            } else {
                this.moveRandom();
            }
        },
        isNearThePlayer: function () {
            var sx = Math.abs(this.deltaXFrom($gamePlayer.x));
            var sy = Math.abs(this.deltaYFrom($gamePlayer.y));
            return sx + sy < 20;
        },
        moveTypeCustom: function () {
            this.updateRoutineMove();
        },
        isStarting: function () {
            return this._starting;
        },
        clearStartingFlag: function () {
            this._starting = false;
        },
        isTriggerIn: function (triggers) {
            return triggers.contains(this._trigger);
        },
        start: function () {
            var list = this.list();
            if (list && list.length > 1) {
                this._starting = true;
                if (this.isTriggerIn([0, 1, 2])) {
                    this.lock();
                }
            }
        },
        erase: function () {
            this._erased = true;
            this.refresh();
        },
        refresh: function () {
            var newPageIndex = this._erased ? -1 : this.findProperPageIndex();
            if (this._pageIndex !== newPageIndex) {
                this._pageIndex = newPageIndex;
                this.setupPage();
            }
        },
        findProperPageIndex: function () {
            var pages = this.event().pages;
            for (var i = pages.length - 1; i >= 0; i--) {
                var page = pages[i];
                if (this.meetsConditions(page)) {
                    return i;
                }
            }
            return -1;
        },
        meetsConditions: function (page) {
            var c = page.conditions;
            if (c.switch1Valid) {
                if (!$gameSwitches.value(c.switch1Id)) {
                    return false;
                }
            }
            if (c.switch2Valid) {
                if (!$gameSwitches.value(c.switch2Id)) {
                    return false;
                }
            }
            if (c.variableValid) {
                if ($gameVariables.value(c.variableId) < c.variableValue) {
                    return false;
                }
            }
            if (c.selfSwitchValid) {
                var key = [this._mapId, this._eventId, c.selfSwitchCh];
                if ($gameSelfSwitches.value(key) !== true) {
                    return false;
                }
            }
            if (c.itemValid) {
                var item = $dataItems[c.itemId];
                if (!$gameParty.hasItem(item)) {
                    return false;
                }
            }
            if (c.actorValid) {
                var actor = $gameActors.actor(c.actorId);
                if (!$gameParty.members().contains(actor)) {
                    return false;
                }
            }
            return true;
        },
        setupPage: function () {
            if (this._pageIndex >= 0) {
                this.setupPageSettings();
            } else {
                this.clearPageSettings();
            }
            this.refreshBushDepth();
            this.clearStartingFlag();
            this.checkEventTriggerAuto();
        },
        clearPageSettings: function () {
            this.setImage('', 0);
            this._moveType = 0;
            this._trigger = null;
            this._interpreter = null;
            this.setThrough(true);
        },
        setupPageSettings: function () {
            ModernAlgebra.EMF.GameEvent_setupPageSettings.apply(this, arguments);
            // Original pattern is always idle for custom sprites
            if (this.isEmfCharacter()) { this._originalPattern = -1; }
            this.resetPattern();
        },
        isOriginalPattern: function () {
            return this.pattern() === this._originalPattern;
        },
        resetPattern: function () {
            this.setPattern(this._originalPattern);
        },
        checkEventTriggerTouch: function (x, y) {
            if (!$gameMap.isEventRunning()) {
                if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
                    if (!this.isJumping() && this.isNormalPriority()) {
                        this.start();
                    }
                }
            }
        },
        checkEventTriggerAuto: function () {
            if (this._trigger === 3) {
                this.start();
            }
        },
        update: function () {
            _GameEvent_update.call(this);
            if (this._pageIndex != this._overheadPageIndex)
                this.updateOverheadData();
        },
        updateParallel: function () {
            if (this._interpreter) {
                if (!this._interpreter.isRunning()) {
                    this._interpreter.setup(this.list(), this._eventId);
                }
                this._interpreter.update();
            }
        },
        locate: function (x, y) {
            Game_Character.prototype.locate.call(this, x, y);
            this._prelockDirection = 0;
        },
        forceMoveRoute: function (moveRoute) {
            Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
            this._prelockDirection = 0;
        },
        isEvent: function () {
            return true;
        },
        updateOverheadData: function () {
            this._overheadPageIndex = this._pageIndex;
            if (!this.page() || this.event().meta.Name || this.event().meta.Picture || this.event().meta.Icon) return;

            var overheadType = null;
            var overheadName = "";
            var overheadRange = 0;

            if (this.list()) {
                for (action of this.list()) {
                    if (action.code == "108") {
                        var a = action.parameters[0];
                        var match = regexEventName.exec(a);
                        if (!match) match = regexPictureName.exec(a);
                        if (!match) match = regexIconName.exec(a);
                        if (match) {
                            overheadType = match[1].toLowerCase();
                            overheadName = match[2];
                            overheadRange = Number(match[3]);
                        }
                    }
                }
            }
            this._displayOverheadType = overheadType;
            this._displayOverheadName = overheadName;
            this._displayOverheadRange = overheadRange;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        pos: function (x, y) {
            return this._x === x && this._y === y;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isMapPassable: function (x, y, d) {
            if (this.isEventRegionForbid(x, y, d)) return false;
            if (this.isPlayerRegionForbid(x, y, d)) return false;
            if (this.isEventRegionAllow(x, y, d)) return true;
            if (this.isPlayerRegionAllow(x, y, d)) return true;
            return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenY: function () {
            var th = $gameMap.tileHeight();
            return Math.round(this.scrolledY() * th + th -
                this.shiftY() - this.jumpHeight());
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 15,
        _y: 10,
        _realX: 15,
        _realY: 10,
        _moveSpeed: 4,
        _moveFrequency: 6,
        _opacity: 255,
        _blendMode: 0,
        _direction: 2,
        _pattern: 1,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "",
        _characterIndex: 0,
        _isObjectCharacter: null,
        _walkAnime: true,
        _stepAnime: false,
        _directionFix: false,
        _through: true,
        _transparent: false,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 82,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: null,
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _moveType: 0,
        _trigger: null,
        _starting: false,
        _erased: false,
        _pageIndex: -1,
        _originalPattern: 1,
        _originalDirection: 2,
        _prelockDirection: 0,
        _locked: false,
        _mapId: 22,
        _eventId: 4,
        _interpreter: null,
        _displayOverheadType: null,
        _overheadPageIndex: -1,
        constructor: function Game_Event() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (mapId, eventId) {
            _GameEvent_initialize.call(this, mapId, eventId);
            var meta = this.event().meta;
            this._displayOverheadType = null;
            var nameMeta = null;
            if (meta.Icon) {
                this._displayOverheadType = "icon"
                nameMeta = meta.Icon.split(",");
            }
            else if (meta.Picture) {
                this._displayOverheadType = "picture"
                nameMeta = meta.Picture.split(",");
            }
            else if (meta.Name) {
                this._displayOverheadType = "name"
                nameMeta = meta.Name.split(",");
            }
            if (nameMeta) {
                if (nameMeta[0][0] == " ") nameMeta[0] = nameMeta[0].substring(1);
                this._displayOverheadName = nameMeta[0];
                this._displayOverheadRange = Number(nameMeta[1]) === 0 ? paramDefaultRange : Number(nameMeta[1]);
            }
            this.updateOverheadData();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._moveType = 0;
            this._trigger = 0;
            this._starting = false;
            this._erased = false;
            this._pageIndex = -2;
            this._originalPattern = 1;
            this._originalDirection = 2;
            this._prelockDirection = 0;
            this._locked = false;
        },
        eventId: function () {
            return this._eventId;
        },
        event: function () {
            return $dataMap.events[this._eventId];
        },
        page: function () {
            return this.event().pages[this._pageIndex];
        },
        list: function () {
            return this.page().list;
        },
        isCollidedWithCharacters: function (x, y) {
            return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
                this.isCollidedWithPlayerCharacters(x, y));
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y).filter(function (ev) {
                return ev.isNormalPriority();
            });
            if (events.length <= 0) return false;
            return this.isNormalPriority();
        },
        isCollidedWithPlayerCharacters: function (x, y) {
            return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
        },
        lock: function () {
            if (!this._locked) {
                this._prelockDirection = this.direction();
                this.turnTowardPlayer();
                this._locked = true;
            }
        },
        unlock: function () {
            if (this._locked) {
                this._locked = false;
                this.setDirection(this._prelockDirection);
            }
        },
        updateStop: function () {
            if (this._locked) {
                this.resetStopCount();
            }
            Game_Character.prototype.updateStop.call(this);
            if (!this.isMoveRouteForcing()) {
                this.updateSelfMovement();
            }
        },
        updateSelfMovement: function () {
            if (!this._locked && this.isNearTheScreen() &&
                this.checkStop(this.stopCountThreshold())) {
                switch (this._moveType) {
                    case 1:
                        this.moveTypeRandom();
                        break;
                    case 2:
                        this.moveTypeTowardPlayer();
                        break;
                    case 3:
                        this.moveTypeCustom();
                        break;
                }
            }
        },
        stopCountThreshold: function () {
            return 30 * (5 - this.moveFrequency());
        },
        moveTypeRandom: function () {
            switch (Math.randomInt(6)) {
                case 0: case 1:
                    this.moveRandom();
                    break;
                case 2: case 3: case 4:
                    this.moveForward();
                    break;
                case 5:
                    this.resetStopCount();
                    break;
            }
        },
        moveTypeTowardPlayer: function () {
            if (this.isNearThePlayer()) {
                switch (Math.randomInt(6)) {
                    case 0: case 1: case 2: case 3:
                        this.moveTowardPlayer();
                        break;
                    case 4:
                        this.moveRandom();
                        break;
                    case 5:
                        this.moveForward();
                        break;
                }
            } else {
                this.moveRandom();
            }
        },
        isNearThePlayer: function () {
            var sx = Math.abs(this.deltaXFrom($gamePlayer.x));
            var sy = Math.abs(this.deltaYFrom($gamePlayer.y));
            return sx + sy < 20;
        },
        moveTypeCustom: function () {
            this.updateRoutineMove();
        },
        isStarting: function () {
            return this._starting;
        },
        clearStartingFlag: function () {
            this._starting = false;
        },
        isTriggerIn: function (triggers) {
            return triggers.contains(this._trigger);
        },
        start: function () {
            var list = this.list();
            if (list && list.length > 1) {
                this._starting = true;
                if (this.isTriggerIn([0, 1, 2])) {
                    this.lock();
                }
            }
        },
        erase: function () {
            this._erased = true;
            this.refresh();
        },
        refresh: function () {
            var newPageIndex = this._erased ? -1 : this.findProperPageIndex();
            if (this._pageIndex !== newPageIndex) {
                this._pageIndex = newPageIndex;
                this.setupPage();
            }
        },
        findProperPageIndex: function () {
            var pages = this.event().pages;
            for (var i = pages.length - 1; i >= 0; i--) {
                var page = pages[i];
                if (this.meetsConditions(page)) {
                    return i;
                }
            }
            return -1;
        },
        meetsConditions: function (page) {
            var c = page.conditions;
            if (c.switch1Valid) {
                if (!$gameSwitches.value(c.switch1Id)) {
                    return false;
                }
            }
            if (c.switch2Valid) {
                if (!$gameSwitches.value(c.switch2Id)) {
                    return false;
                }
            }
            if (c.variableValid) {
                if ($gameVariables.value(c.variableId) < c.variableValue) {
                    return false;
                }
            }
            if (c.selfSwitchValid) {
                var key = [this._mapId, this._eventId, c.selfSwitchCh];
                if ($gameSelfSwitches.value(key) !== true) {
                    return false;
                }
            }
            if (c.itemValid) {
                var item = $dataItems[c.itemId];
                if (!$gameParty.hasItem(item)) {
                    return false;
                }
            }
            if (c.actorValid) {
                var actor = $gameActors.actor(c.actorId);
                if (!$gameParty.members().contains(actor)) {
                    return false;
                }
            }
            return true;
        },
        setupPage: function () {
            if (this._pageIndex >= 0) {
                this.setupPageSettings();
            } else {
                this.clearPageSettings();
            }
            this.refreshBushDepth();
            this.clearStartingFlag();
            this.checkEventTriggerAuto();
        },
        clearPageSettings: function () {
            this.setImage('', 0);
            this._moveType = 0;
            this._trigger = null;
            this._interpreter = null;
            this.setThrough(true);
        },
        setupPageSettings: function () {
            ModernAlgebra.EMF.GameEvent_setupPageSettings.apply(this, arguments);
            // Original pattern is always idle for custom sprites
            if (this.isEmfCharacter()) { this._originalPattern = -1; }
            this.resetPattern();
        },
        isOriginalPattern: function () {
            return this.pattern() === this._originalPattern;
        },
        resetPattern: function () {
            this.setPattern(this._originalPattern);
        },
        checkEventTriggerTouch: function (x, y) {
            if (!$gameMap.isEventRunning()) {
                if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
                    if (!this.isJumping() && this.isNormalPriority()) {
                        this.start();
                    }
                }
            }
        },
        checkEventTriggerAuto: function () {
            if (this._trigger === 3) {
                this.start();
            }
        },
        update: function () {
            _GameEvent_update.call(this);
            if (this._pageIndex != this._overheadPageIndex)
                this.updateOverheadData();
        },
        updateParallel: function () {
            if (this._interpreter) {
                if (!this._interpreter.isRunning()) {
                    this._interpreter.setup(this.list(), this._eventId);
                }
                this._interpreter.update();
            }
        },
        locate: function (x, y) {
            Game_Character.prototype.locate.call(this, x, y);
            this._prelockDirection = 0;
        },
        forceMoveRoute: function (moveRoute) {
            Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
            this._prelockDirection = 0;
        },
        isEvent: function () {
            return true;
        },
        updateOverheadData: function () {
            this._overheadPageIndex = this._pageIndex;
            if (!this.page() || this.event().meta.Name || this.event().meta.Picture || this.event().meta.Icon) return;

            var overheadType = null;
            var overheadName = "";
            var overheadRange = 0;

            if (this.list()) {
                for (action of this.list()) {
                    if (action.code == "108") {
                        var a = action.parameters[0];
                        var match = regexEventName.exec(a);
                        if (!match) match = regexPictureName.exec(a);
                        if (!match) match = regexIconName.exec(a);
                        if (match) {
                            overheadType = match[1].toLowerCase();
                            overheadName = match[2];
                            overheadRange = Number(match[3]);
                        }
                    }
                }
            }
            this._displayOverheadType = overheadType;
            this._displayOverheadName = overheadName;
            this._displayOverheadRange = overheadRange;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        pos: function (x, y) {
            return this._x === x && this._y === y;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isMapPassable: function (x, y, d) {
            if (this.isEventRegionForbid(x, y, d)) return false;
            if (this.isPlayerRegionForbid(x, y, d)) return false;
            if (this.isEventRegionAllow(x, y, d)) return true;
            if (this.isPlayerRegionAllow(x, y, d)) return true;
            return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenY: function () {
            var th = $gameMap.tileHeight();
            return Math.round(this.scrolledY() * th + th -
                this.shiftY() - this.jumpHeight());
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 18,
        _y: 9,
        _realX: 18,
        _realY: 9,
        _moveSpeed: 4,
        _moveFrequency: 6,
        _opacity: 255,
        _blendMode: 0,
        _direction: 2,
        _pattern: 1,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "",
        _characterIndex: 0,
        _isObjectCharacter: null,
        _walkAnime: true,
        _stepAnime: false,
        _directionFix: false,
        _through: true,
        _transparent: false,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 91,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: null,
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _moveType: 0,
        _trigger: null,
        _starting: false,
        _erased: false,
        _pageIndex: -1,
        _originalPattern: 1,
        _originalDirection: 2,
        _prelockDirection: 0,
        _locked: false,
        _mapId: 22,
        _eventId: 5,
        _interpreter: null,
        _displayOverheadType: null,
        _overheadPageIndex: -1,
        constructor: function Game_Event() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (mapId, eventId) {
            _GameEvent_initialize.call(this, mapId, eventId);
            var meta = this.event().meta;
            this._displayOverheadType = null;
            var nameMeta = null;
            if (meta.Icon) {
                this._displayOverheadType = "icon"
                nameMeta = meta.Icon.split(",");
            }
            else if (meta.Picture) {
                this._displayOverheadType = "picture"
                nameMeta = meta.Picture.split(",");
            }
            else if (meta.Name) {
                this._displayOverheadType = "name"
                nameMeta = meta.Name.split(",");
            }
            if (nameMeta) {
                if (nameMeta[0][0] == " ") nameMeta[0] = nameMeta[0].substring(1);
                this._displayOverheadName = nameMeta[0];
                this._displayOverheadRange = Number(nameMeta[1]) === 0 ? paramDefaultRange : Number(nameMeta[1]);
            }
            this.updateOverheadData();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._moveType = 0;
            this._trigger = 0;
            this._starting = false;
            this._erased = false;
            this._pageIndex = -2;
            this._originalPattern = 1;
            this._originalDirection = 2;
            this._prelockDirection = 0;
            this._locked = false;
        },
        eventId: function () {
            return this._eventId;
        },
        event: function () {
            return $dataMap.events[this._eventId];
        },
        page: function () {
            return this.event().pages[this._pageIndex];
        },
        list: function () {
            return this.page().list;
        },
        isCollidedWithCharacters: function (x, y) {
            return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
                this.isCollidedWithPlayerCharacters(x, y));
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y).filter(function (ev) {
                return ev.isNormalPriority();
            });
            if (events.length <= 0) return false;
            return this.isNormalPriority();
        },
        isCollidedWithPlayerCharacters: function (x, y) {
            return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
        },
        lock: function () {
            if (!this._locked) {
                this._prelockDirection = this.direction();
                this.turnTowardPlayer();
                this._locked = true;
            }
        },
        unlock: function () {
            if (this._locked) {
                this._locked = false;
                this.setDirection(this._prelockDirection);
            }
        },
        updateStop: function () {
            if (this._locked) {
                this.resetStopCount();
            }
            Game_Character.prototype.updateStop.call(this);
            if (!this.isMoveRouteForcing()) {
                this.updateSelfMovement();
            }
        },
        updateSelfMovement: function () {
            if (!this._locked && this.isNearTheScreen() &&
                this.checkStop(this.stopCountThreshold())) {
                switch (this._moveType) {
                    case 1:
                        this.moveTypeRandom();
                        break;
                    case 2:
                        this.moveTypeTowardPlayer();
                        break;
                    case 3:
                        this.moveTypeCustom();
                        break;
                }
            }
        },
        stopCountThreshold: function () {
            return 30 * (5 - this.moveFrequency());
        },
        moveTypeRandom: function () {
            switch (Math.randomInt(6)) {
                case 0: case 1:
                    this.moveRandom();
                    break;
                case 2: case 3: case 4:
                    this.moveForward();
                    break;
                case 5:
                    this.resetStopCount();
                    break;
            }
        },
        moveTypeTowardPlayer: function () {
            if (this.isNearThePlayer()) {
                switch (Math.randomInt(6)) {
                    case 0: case 1: case 2: case 3:
                        this.moveTowardPlayer();
                        break;
                    case 4:
                        this.moveRandom();
                        break;
                    case 5:
                        this.moveForward();
                        break;
                }
            } else {
                this.moveRandom();
            }
        },
        isNearThePlayer: function () {
            var sx = Math.abs(this.deltaXFrom($gamePlayer.x));
            var sy = Math.abs(this.deltaYFrom($gamePlayer.y));
            return sx + sy < 20;
        },
        moveTypeCustom: function () {
            this.updateRoutineMove();
        },
        isStarting: function () {
            return this._starting;
        },
        clearStartingFlag: function () {
            this._starting = false;
        },
        isTriggerIn: function (triggers) {
            return triggers.contains(this._trigger);
        },
        start: function () {
            var list = this.list();
            if (list && list.length > 1) {
                this._starting = true;
                if (this.isTriggerIn([0, 1, 2])) {
                    this.lock();
                }
            }
        },
        erase: function () {
            this._erased = true;
            this.refresh();
        },
        refresh: function () {
            var newPageIndex = this._erased ? -1 : this.findProperPageIndex();
            if (this._pageIndex !== newPageIndex) {
                this._pageIndex = newPageIndex;
                this.setupPage();
            }
        },
        findProperPageIndex: function () {
            var pages = this.event().pages;
            for (var i = pages.length - 1; i >= 0; i--) {
                var page = pages[i];
                if (this.meetsConditions(page)) {
                    return i;
                }
            }
            return -1;
        },
        meetsConditions: function (page) {
            var c = page.conditions;
            if (c.switch1Valid) {
                if (!$gameSwitches.value(c.switch1Id)) {
                    return false;
                }
            }
            if (c.switch2Valid) {
                if (!$gameSwitches.value(c.switch2Id)) {
                    return false;
                }
            }
            if (c.variableValid) {
                if ($gameVariables.value(c.variableId) < c.variableValue) {
                    return false;
                }
            }
            if (c.selfSwitchValid) {
                var key = [this._mapId, this._eventId, c.selfSwitchCh];
                if ($gameSelfSwitches.value(key) !== true) {
                    return false;
                }
            }
            if (c.itemValid) {
                var item = $dataItems[c.itemId];
                if (!$gameParty.hasItem(item)) {
                    return false;
                }
            }
            if (c.actorValid) {
                var actor = $gameActors.actor(c.actorId);
                if (!$gameParty.members().contains(actor)) {
                    return false;
                }
            }
            return true;
        },
        setupPage: function () {
            if (this._pageIndex >= 0) {
                this.setupPageSettings();
            } else {
                this.clearPageSettings();
            }
            this.refreshBushDepth();
            this.clearStartingFlag();
            this.checkEventTriggerAuto();
        },
        clearPageSettings: function () {
            this.setImage('', 0);
            this._moveType = 0;
            this._trigger = null;
            this._interpreter = null;
            this.setThrough(true);
        },
        setupPageSettings: function () {
            ModernAlgebra.EMF.GameEvent_setupPageSettings.apply(this, arguments);
            // Original pattern is always idle for custom sprites
            if (this.isEmfCharacter()) { this._originalPattern = -1; }
            this.resetPattern();
        },
        isOriginalPattern: function () {
            return this.pattern() === this._originalPattern;
        },
        resetPattern: function () {
            this.setPattern(this._originalPattern);
        },
        checkEventTriggerTouch: function (x, y) {
            if (!$gameMap.isEventRunning()) {
                if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
                    if (!this.isJumping() && this.isNormalPriority()) {
                        this.start();
                    }
                }
            }
        },
        checkEventTriggerAuto: function () {
            if (this._trigger === 3) {
                this.start();
            }
        },
        update: function () {
            _GameEvent_update.call(this);
            if (this._pageIndex != this._overheadPageIndex)
                this.updateOverheadData();
        },
        updateParallel: function () {
            if (this._interpreter) {
                if (!this._interpreter.isRunning()) {
                    this._interpreter.setup(this.list(), this._eventId);
                }
                this._interpreter.update();
            }
        },
        locate: function (x, y) {
            Game_Character.prototype.locate.call(this, x, y);
            this._prelockDirection = 0;
        },
        forceMoveRoute: function (moveRoute) {
            Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
            this._prelockDirection = 0;
        },
        isEvent: function () {
            return true;
        },
        updateOverheadData: function () {
            this._overheadPageIndex = this._pageIndex;
            if (!this.page() || this.event().meta.Name || this.event().meta.Picture || this.event().meta.Icon) return;

            var overheadType = null;
            var overheadName = "";
            var overheadRange = 0;

            if (this.list()) {
                for (action of this.list()) {
                    if (action.code == "108") {
                        var a = action.parameters[0];
                        var match = regexEventName.exec(a);
                        if (!match) match = regexPictureName.exec(a);
                        if (!match) match = regexIconName.exec(a);
                        if (match) {
                            overheadType = match[1].toLowerCase();
                            overheadName = match[2];
                            overheadRange = Number(match[3]);
                        }
                    }
                }
            }
            this._displayOverheadType = overheadType;
            this._displayOverheadName = overheadName;
            this._displayOverheadRange = overheadRange;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        pos: function (x, y) {
            return this._x === x && this._y === y;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isMapPassable: function (x, y, d) {
            if (this.isEventRegionForbid(x, y, d)) return false;
            if (this.isPlayerRegionForbid(x, y, d)) return false;
            if (this.isEventRegionAllow(x, y, d)) return true;
            if (this.isPlayerRegionAllow(x, y, d)) return true;
            return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenY: function () {
            var th = $gameMap.tileHeight();
            return Math.round(this.scrolledY() * th + th -
                this.shiftY() - this.jumpHeight());
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 0,
        _y: 0,
        _realX: 0,
        _realY: 0,
        _moveSpeed: 4,
        _moveFrequency: 6,
        _opacity: 255,
        _blendMode: 0,
        _direction: 2,
        _pattern: 1,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "",
        _characterIndex: 0,
        _isObjectCharacter: null,
        _walkAnime: true,
        _stepAnime: false,
        _directionFix: false,
        _through: true,
        _transparent: false,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 86,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: null,
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _moveType: 0,
        _trigger: null,
        _starting: false,
        _erased: false,
        _pageIndex: -1,
        _originalPattern: 1,
        _originalDirection: 2,
        _prelockDirection: 0,
        _locked: false,
        _mapId: 22,
        _eventId: 6,
        _interpreter: null,
        _displayOverheadType: null,
        _overheadPageIndex: -1,
        constructor: function Game_Event() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (mapId, eventId) {
            _GameEvent_initialize.call(this, mapId, eventId);
            var meta = this.event().meta;
            this._displayOverheadType = null;
            var nameMeta = null;
            if (meta.Icon) {
                this._displayOverheadType = "icon"
                nameMeta = meta.Icon.split(",");
            }
            else if (meta.Picture) {
                this._displayOverheadType = "picture"
                nameMeta = meta.Picture.split(",");
            }
            else if (meta.Name) {
                this._displayOverheadType = "name"
                nameMeta = meta.Name.split(",");
            }
            if (nameMeta) {
                if (nameMeta[0][0] == " ") nameMeta[0] = nameMeta[0].substring(1);
                this._displayOverheadName = nameMeta[0];
                this._displayOverheadRange = Number(nameMeta[1]) === 0 ? paramDefaultRange : Number(nameMeta[1]);
            }
            this.updateOverheadData();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._moveType = 0;
            this._trigger = 0;
            this._starting = false;
            this._erased = false;
            this._pageIndex = -2;
            this._originalPattern = 1;
            this._originalDirection = 2;
            this._prelockDirection = 0;
            this._locked = false;
        },
        eventId: function () {
            return this._eventId;
        },
        event: function () {
            return $dataMap.events[this._eventId];
        },
        page: function () {
            return this.event().pages[this._pageIndex];
        },
        list: function () {
            return this.page().list;
        },
        isCollidedWithCharacters: function (x, y) {
            return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
                this.isCollidedWithPlayerCharacters(x, y));
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y).filter(function (ev) {
                return ev.isNormalPriority();
            });
            if (events.length <= 0) return false;
            return this.isNormalPriority();
        },
        isCollidedWithPlayerCharacters: function (x, y) {
            return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
        },
        lock: function () {
            if (!this._locked) {
                this._prelockDirection = this.direction();
                this.turnTowardPlayer();
                this._locked = true;
            }
        },
        unlock: function () {
            if (this._locked) {
                this._locked = false;
                this.setDirection(this._prelockDirection);
            }
        },
        updateStop: function () {
            if (this._locked) {
                this.resetStopCount();
            }
            Game_Character.prototype.updateStop.call(this);
            if (!this.isMoveRouteForcing()) {
                this.updateSelfMovement();
            }
        },
        updateSelfMovement: function () {
            if (!this._locked && this.isNearTheScreen() &&
                this.checkStop(this.stopCountThreshold())) {
                switch (this._moveType) {
                    case 1:
                        this.moveTypeRandom();
                        break;
                    case 2:
                        this.moveTypeTowardPlayer();
                        break;
                    case 3:
                        this.moveTypeCustom();
                        break;
                }
            }
        },
        stopCountThreshold: function () {
            return 30 * (5 - this.moveFrequency());
        },
        moveTypeRandom: function () {
            switch (Math.randomInt(6)) {
                case 0: case 1:
                    this.moveRandom();
                    break;
                case 2: case 3: case 4:
                    this.moveForward();
                    break;
                case 5:
                    this.resetStopCount();
                    break;
            }
        },
        moveTypeTowardPlayer: function () {
            if (this.isNearThePlayer()) {
                switch (Math.randomInt(6)) {
                    case 0: case 1: case 2: case 3:
                        this.moveTowardPlayer();
                        break;
                    case 4:
                        this.moveRandom();
                        break;
                    case 5:
                        this.moveForward();
                        break;
                }
            } else {
                this.moveRandom();
            }
        },
        isNearThePlayer: function () {
            var sx = Math.abs(this.deltaXFrom($gamePlayer.x));
            var sy = Math.abs(this.deltaYFrom($gamePlayer.y));
            return sx + sy < 20;
        },
        moveTypeCustom: function () {
            this.updateRoutineMove();
        },
        isStarting: function () {
            return this._starting;
        },
        clearStartingFlag: function () {
            this._starting = false;
        },
        isTriggerIn: function (triggers) {
            return triggers.contains(this._trigger);
        },
        start: function () {
            var list = this.list();
            if (list && list.length > 1) {
                this._starting = true;
                if (this.isTriggerIn([0, 1, 2])) {
                    this.lock();
                }
            }
        },
        erase: function () {
            this._erased = true;
            this.refresh();
        },
        refresh: function () {
            var newPageIndex = this._erased ? -1 : this.findProperPageIndex();
            if (this._pageIndex !== newPageIndex) {
                this._pageIndex = newPageIndex;
                this.setupPage();
            }
        },
        findProperPageIndex: function () {
            var pages = this.event().pages;
            for (var i = pages.length - 1; i >= 0; i--) {
                var page = pages[i];
                if (this.meetsConditions(page)) {
                    return i;
                }
            }
            return -1;
        },
        meetsConditions: function (page) {
            var c = page.conditions;
            if (c.switch1Valid) {
                if (!$gameSwitches.value(c.switch1Id)) {
                    return false;
                }
            }
            if (c.switch2Valid) {
                if (!$gameSwitches.value(c.switch2Id)) {
                    return false;
                }
            }
            if (c.variableValid) {
                if ($gameVariables.value(c.variableId) < c.variableValue) {
                    return false;
                }
            }
            if (c.selfSwitchValid) {
                var key = [this._mapId, this._eventId, c.selfSwitchCh];
                if ($gameSelfSwitches.value(key) !== true) {
                    return false;
                }
            }
            if (c.itemValid) {
                var item = $dataItems[c.itemId];
                if (!$gameParty.hasItem(item)) {
                    return false;
                }
            }
            if (c.actorValid) {
                var actor = $gameActors.actor(c.actorId);
                if (!$gameParty.members().contains(actor)) {
                    return false;
                }
            }
            return true;
        },
        setupPage: function () {
            if (this._pageIndex >= 0) {
                this.setupPageSettings();
            } else {
                this.clearPageSettings();
            }
            this.refreshBushDepth();
            this.clearStartingFlag();
            this.checkEventTriggerAuto();
        },
        clearPageSettings: function () {
            this.setImage('', 0);
            this._moveType = 0;
            this._trigger = null;
            this._interpreter = null;
            this.setThrough(true);
        },
        setupPageSettings: function () {
            ModernAlgebra.EMF.GameEvent_setupPageSettings.apply(this, arguments);
            // Original pattern is always idle for custom sprites
            if (this.isEmfCharacter()) { this._originalPattern = -1; }
            this.resetPattern();
        },
        isOriginalPattern: function () {
            return this.pattern() === this._originalPattern;
        },
        resetPattern: function () {
            this.setPattern(this._originalPattern);
        },
        checkEventTriggerTouch: function (x, y) {
            if (!$gameMap.isEventRunning()) {
                if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
                    if (!this.isJumping() && this.isNormalPriority()) {
                        this.start();
                    }
                }
            }
        },
        checkEventTriggerAuto: function () {
            if (this._trigger === 3) {
                this.start();
            }
        },
        update: function () {
            _GameEvent_update.call(this);
            if (this._pageIndex != this._overheadPageIndex)
                this.updateOverheadData();
        },
        updateParallel: function () {
            if (this._interpreter) {
                if (!this._interpreter.isRunning()) {
                    this._interpreter.setup(this.list(), this._eventId);
                }
                this._interpreter.update();
            }
        },
        locate: function (x, y) {
            Game_Character.prototype.locate.call(this, x, y);
            this._prelockDirection = 0;
        },
        forceMoveRoute: function (moveRoute) {
            Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
            this._prelockDirection = 0;
        },
        isEvent: function () {
            return true;
        },
        updateOverheadData: function () {
            this._overheadPageIndex = this._pageIndex;
            if (!this.page() || this.event().meta.Name || this.event().meta.Picture || this.event().meta.Icon) return;

            var overheadType = null;
            var overheadName = "";
            var overheadRange = 0;

            if (this.list()) {
                for (action of this.list()) {
                    if (action.code == "108") {
                        var a = action.parameters[0];
                        var match = regexEventName.exec(a);
                        if (!match) match = regexPictureName.exec(a);
                        if (!match) match = regexIconName.exec(a);
                        if (match) {
                            overheadType = match[1].toLowerCase();
                            overheadName = match[2];
                            overheadRange = Number(match[3]);
                        }
                    }
                }
            }
            this._displayOverheadType = overheadType;
            this._displayOverheadName = overheadName;
            this._displayOverheadRange = overheadRange;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        pos: function (x, y) {
            return this._x === x && this._y === y;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isMapPassable: function (x, y, d) {
            if (this.isEventRegionForbid(x, y, d)) return false;
            if (this.isPlayerRegionForbid(x, y, d)) return false;
            if (this.isEventRegionAllow(x, y, d)) return true;
            if (this.isPlayerRegionAllow(x, y, d)) return true;
            return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenY: function () {
            var th = $gameMap.tileHeight();
            return Math.round(this.scrolledY() * th + th -
                this.shiftY() - this.jumpHeight());
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }],
    _commonEvents: "",
    _vehicles: [{
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 0,
        _y: 0,
        _realX: 0,
        _realY: 0,
        _moveSpeed: 4,
        _moveFrequency: 6,
        _opacity: 255,
        _blendMode: 0,
        _direction: 4,
        _pattern: 1,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "",
        _characterIndex: 0,
        _isObjectCharacter: null,
        _walkAnime: false,
        _stepAnime: false,
        _directionFix: false,
        _through: false,
        _transparent: true,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 6321907,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: null,
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _type: "boat",
        _mapId: 0,
        _altitude: 0,
        _driving: false,
        _bgm: null,
        '@': "Game_Vehicle",
        constructor: function Game_Vehicle() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (type) {
            Game_Character.prototype.initialize.call(this);
            this._type = type;
            this.resetDirection();
            this.initMoveSpeed();
            this.loadSystemSettings();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._type = '';
            this._mapId = 0;
            this._altitude = 0;
            this._driving = false;
            this._bgm = null;
        },
        isBoat: function () {
            return this._type === 'boat';
        },
        isShip: function () {
            return this._type === 'ship';
        },
        isAirship: function () {
            return this._type === 'airship';
        },
        resetDirection: function () {
            this.setDirection(4);
        },
        initMoveSpeed: function () {
            if (this.isBoat()) {
                this.setMoveSpeed(4);
            } else if (this.isShip()) {
                this.setMoveSpeed(5);
            } else if (this.isAirship()) {
                this.setMoveSpeed(6);
            }
        },
        vehicle: function () {
            if (this.isBoat()) {
                return $dataSystem.boat;
            } else if (this.isShip()) {
                return $dataSystem.ship;
            } else if (this.isAirship()) {
                return $dataSystem.airship;
            } else {
                return null;
            }
        },
        loadSystemSettings: function () {
            var vehicle = this.vehicle();
            this._mapId = vehicle.startMapId;
            this.setPosition(vehicle.startX, vehicle.startY);
            this.setImage(vehicle.characterName, vehicle.characterIndex);
        },
        refresh: function () {
            if (this._driving) {
                this._mapId = $gameMap.mapId();
                this.syncWithPlayer();
            } else if (this._mapId === $gameMap.mapId()) {
                this.locate(this.x, this.y);
            }
            if (this.isAirship()) {
                this.setPriorityType(this._driving ? 2 : 0);
            } else {
                this.setPriorityType(1);
            }
            this.setWalkAnime(this._driving);
            this.setStepAnime(this._driving);
            this.setTransparent(this._mapId !== $gameMap.mapId());
        },
        setLocation: function (mapId, x, y) {
            this._mapId = mapId;
            this.setPosition(x, y);
            this.refresh();
        },
        pos: function (x, y) {
            if (this._mapId === $gameMap.mapId()) {
                return Game_Character.prototype.pos.call(this, x, y);
            } else {
                return false;
            }
        },
        isMapPassable: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (this.isBoat()) {
                return $gameMap.isBoatPassable(x2, y2);
            } else if (this.isShip()) {
                return $gameMap.isShipPassable(x2, y2);
            } else if (this.isAirship()) {
                return true;
            } else {
                return false;
            }
        },
        getOn: function () {
            this._driving = true;
            this.setWalkAnime(true);
            this.setStepAnime(true);
            $gameSystem.saveWalkingBgm();
            this.playBgm();
        },
        getOff: function () {
            this._driving = false;
            this.setWalkAnime(false);
            this.setStepAnime(false);
            this.resetDirection();
            $gameSystem.replayWalkingBgm();
        },
        setBgm: function (bgm) {
            this._bgm = bgm;
        },
        playBgm: function () {
            AudioManager.playBgm(this._bgm || this.vehicle().bgm);
        },
        syncWithPlayer: function () {
            this.copyPosition($gamePlayer);
            this.refreshBushDepth();
        },
        screenY: function () {
            return Game_Character.prototype.screenY.call(this) - this._altitude;
        },
        shadowX: function () {
            return this.screenX();
        },
        shadowY: function () {
            return this.screenY() + this._altitude;
        },
        shadowOpacity: function () {
            return 255 * this._altitude / this.maxAltitude();
        },
        canMove: function () {
            if (this.isAirship()) {
                return this.isHighest();
            } else {
                return true;
            }
        },
        update: function () {
            Game_Character.prototype.update.call(this);
            if (this.isAirship()) {
                this.updateAirship();
            }
        },
        updateAirship: function () {
            this.updateAirshipAltitude();
            this.setStepAnime(this.isHighest());
            this.setPriorityType(this.isLowest() ? 0 : 2);
        },
        updateAirshipAltitude: function () {
            if (this._driving && !this.isHighest()) {
                this._altitude++;
            }
            if (!this._driving && !this.isLowest()) {
                this._altitude--;
            }
        },
        maxAltitude: function () {
            return 48;
        },
        isLowest: function () {
            return this._altitude <= 0;
        },
        isHighest: function () {
            return this._altitude >= this.maxAltitude();
        },
        isTakeoffOk: function () {
            return $gamePlayer.areFollowersGathered();
        },
        isLandOk: function (x, y, d) {
            var value = Yanfly.RR.Game_Vehicle_isLandOk.call(this, x, y, d);
            if (!value) return false;
            if (this.isAirship()) {
                d = 5;
                $gamePlayer._through = false;
            }
            if ($gamePlayer.isPlayerRegionForbid(x, y, d)) {
                if (this.isAirship()) $gamePlayer._through = true;
                return false;
            }
            if ($gamePlayer.isPlayerRegionAllow(x, y, d)) {
                if (this.isAirship()) $gamePlayer._through = true;
                return true;
            }
            return true;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        forceMoveRoute: function (moveRoute) {
            if (!this._originalMoveRoute) {
                this.memorizeMoveRoute();
            }
            this._moveRoute = moveRoute;
            this._moveRouteIndex = 0;
            this._moveRouteForcing = true;
            this._waitCount = 0;
        },
        updateStop: function () {
            Game_CharacterBase.prototype.updateStop.call(this);
            if (this._moveRouteForcing) {
                this.updateRoutineMove();
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isCollidedWithCharacters: function (x, y) {
            return this.isCollidedWithEvents(x, y) || this.isCollidedWithVehicles(x, y);
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y);
            return events.some(function (event) {
                return event.isNormalPriority();
            });
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        locate: function (x, y) {
            this.setPosition(x, y);
            this.straighten();
            this.refreshBushDepth();
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        isOriginalPattern: function () {
            if (this.isEmfCharacter()) {
                return this.pattern() === -1;
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_isOriginalpattern.apply(this, arguments); // original method
            }
        },
        resetPattern: function () {
            if (this.isEmfCharacter()) {
                this.setPattern(-1);
            } else {
                ModernAlgebra.EMF.GameCharacterBase_resetPattern.apply(this, arguments); // original method
            }
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        checkEventTriggerTouch: function (x, y) {
            return false;
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isEvent: function () {
            return false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 0,
        _y: 0,
        _realX: 0,
        _realY: 0,
        _moveSpeed: 5,
        _moveFrequency: 6,
        _opacity: 255,
        _blendMode: 0,
        _direction: 4,
        _pattern: 1,
        _priorityType: 1,
        _tileId: 0,
        _characterName: "",
        _characterIndex: 1,
        _isObjectCharacter: null,
        _walkAnime: false,
        _stepAnime: false,
        _directionFix: false,
        _through: false,
        _transparent: true,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 6338346,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: null,
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _type: "ship",
        _mapId: 0,
        _altitude: 0,
        _driving: false,
        _bgm: null,
        '@': "Game_Vehicle",
        constructor: function Game_Vehicle() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (type) {
            Game_Character.prototype.initialize.call(this);
            this._type = type;
            this.resetDirection();
            this.initMoveSpeed();
            this.loadSystemSettings();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._type = '';
            this._mapId = 0;
            this._altitude = 0;
            this._driving = false;
            this._bgm = null;
        },
        isBoat: function () {
            return this._type === 'boat';
        },
        isShip: function () {
            return this._type === 'ship';
        },
        isAirship: function () {
            return this._type === 'airship';
        },
        resetDirection: function () {
            this.setDirection(4);
        },
        initMoveSpeed: function () {
            if (this.isBoat()) {
                this.setMoveSpeed(4);
            } else if (this.isShip()) {
                this.setMoveSpeed(5);
            } else if (this.isAirship()) {
                this.setMoveSpeed(6);
            }
        },
        vehicle: function () {
            if (this.isBoat()) {
                return $dataSystem.boat;
            } else if (this.isShip()) {
                return $dataSystem.ship;
            } else if (this.isAirship()) {
                return $dataSystem.airship;
            } else {
                return null;
            }
        },
        loadSystemSettings: function () {
            var vehicle = this.vehicle();
            this._mapId = vehicle.startMapId;
            this.setPosition(vehicle.startX, vehicle.startY);
            this.setImage(vehicle.characterName, vehicle.characterIndex);
        },
        refresh: function () {
            if (this._driving) {
                this._mapId = $gameMap.mapId();
                this.syncWithPlayer();
            } else if (this._mapId === $gameMap.mapId()) {
                this.locate(this.x, this.y);
            }
            if (this.isAirship()) {
                this.setPriorityType(this._driving ? 2 : 0);
            } else {
                this.setPriorityType(1);
            }
            this.setWalkAnime(this._driving);
            this.setStepAnime(this._driving);
            this.setTransparent(this._mapId !== $gameMap.mapId());
        },
        setLocation: function (mapId, x, y) {
            this._mapId = mapId;
            this.setPosition(x, y);
            this.refresh();
        },
        pos: function (x, y) {
            if (this._mapId === $gameMap.mapId()) {
                return Game_Character.prototype.pos.call(this, x, y);
            } else {
                return false;
            }
        },
        isMapPassable: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (this.isBoat()) {
                return $gameMap.isBoatPassable(x2, y2);
            } else if (this.isShip()) {
                return $gameMap.isShipPassable(x2, y2);
            } else if (this.isAirship()) {
                return true;
            } else {
                return false;
            }
        },
        getOn: function () {
            this._driving = true;
            this.setWalkAnime(true);
            this.setStepAnime(true);
            $gameSystem.saveWalkingBgm();
            this.playBgm();
        },
        getOff: function () {
            this._driving = false;
            this.setWalkAnime(false);
            this.setStepAnime(false);
            this.resetDirection();
            $gameSystem.replayWalkingBgm();
        },
        setBgm: function (bgm) {
            this._bgm = bgm;
        },
        playBgm: function () {
            AudioManager.playBgm(this._bgm || this.vehicle().bgm);
        },
        syncWithPlayer: function () {
            this.copyPosition($gamePlayer);
            this.refreshBushDepth();
        },
        screenY: function () {
            return Game_Character.prototype.screenY.call(this) - this._altitude;
        },
        shadowX: function () {
            return this.screenX();
        },
        shadowY: function () {
            return this.screenY() + this._altitude;
        },
        shadowOpacity: function () {
            return 255 * this._altitude / this.maxAltitude();
        },
        canMove: function () {
            if (this.isAirship()) {
                return this.isHighest();
            } else {
                return true;
            }
        },
        update: function () {
            Game_Character.prototype.update.call(this);
            if (this.isAirship()) {
                this.updateAirship();
            }
        },
        updateAirship: function () {
            this.updateAirshipAltitude();
            this.setStepAnime(this.isHighest());
            this.setPriorityType(this.isLowest() ? 0 : 2);
        },
        updateAirshipAltitude: function () {
            if (this._driving && !this.isHighest()) {
                this._altitude++;
            }
            if (!this._driving && !this.isLowest()) {
                this._altitude--;
            }
        },
        maxAltitude: function () {
            return 48;
        },
        isLowest: function () {
            return this._altitude <= 0;
        },
        isHighest: function () {
            return this._altitude >= this.maxAltitude();
        },
        isTakeoffOk: function () {
            return $gamePlayer.areFollowersGathered();
        },
        isLandOk: function (x, y, d) {
            var value = Yanfly.RR.Game_Vehicle_isLandOk.call(this, x, y, d);
            if (!value) return false;
            if (this.isAirship()) {
                d = 5;
                $gamePlayer._through = false;
            }
            if ($gamePlayer.isPlayerRegionForbid(x, y, d)) {
                if (this.isAirship()) $gamePlayer._through = true;
                return false;
            }
            if ($gamePlayer.isPlayerRegionAllow(x, y, d)) {
                if (this.isAirship()) $gamePlayer._through = true;
                return true;
            }
            return true;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        forceMoveRoute: function (moveRoute) {
            if (!this._originalMoveRoute) {
                this.memorizeMoveRoute();
            }
            this._moveRoute = moveRoute;
            this._moveRouteIndex = 0;
            this._moveRouteForcing = true;
            this._waitCount = 0;
        },
        updateStop: function () {
            Game_CharacterBase.prototype.updateStop.call(this);
            if (this._moveRouteForcing) {
                this.updateRoutineMove();
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isCollidedWithCharacters: function (x, y) {
            return this.isCollidedWithEvents(x, y) || this.isCollidedWithVehicles(x, y);
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y);
            return events.some(function (event) {
                return event.isNormalPriority();
            });
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        locate: function (x, y) {
            this.setPosition(x, y);
            this.straighten();
            this.refreshBushDepth();
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        isOriginalPattern: function () {
            if (this.isEmfCharacter()) {
                return this.pattern() === -1;
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_isOriginalpattern.apply(this, arguments); // original method
            }
        },
        resetPattern: function () {
            if (this.isEmfCharacter()) {
                this.setPattern(-1);
            } else {
                ModernAlgebra.EMF.GameCharacterBase_resetPattern.apply(this, arguments); // original method
            }
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        checkEventTriggerTouch: function (x, y) {
            return false;
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isEvent: function () {
            return false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }, {
        _isEmfCharacter: false,
        _emfCharacterState: {
            frameNum: 3,
            idleFrame: 0,
            pattern: [2, 1, 0, 1],

        },
        _x: 0,
        _y: 0,
        _realX: 0,
        _realY: 0,
        _moveSpeed: 6,
        _moveFrequency: 6,
        _opacity: 255,
        _blendMode: 0,
        _direction: 4,
        _pattern: 1,
        _priorityType: 0,
        _tileId: 0,
        _characterName: "",
        _characterIndex: 3,
        _isObjectCharacter: null,
        _walkAnime: false,
        _stepAnime: false,
        _directionFix: false,
        _through: false,
        _transparent: true,
        _bushDepth: 0,
        _animationId: 0,
        _balloonId: 0,
        _animationPlaying: false,
        _balloonPlaying: false,
        _animationCount: 0,
        _stopCount: 6350445,
        _jumpCount: 0,
        _jumpPeak: 0,
        _movementSuccess: true,
        _moveRouteForcing: false,
        _moveRoute: null,
        _moveRouteIndex: 0,
        _originalMoveRoute: null,
        _originalMoveRouteIndex: 0,
        _waitCount: 0,
        _type: "airship",
        _mapId: 0,
        _altitude: 0,
        _driving: false,
        _bgm: null,
        '@': "Game_Vehicle",
        constructor: function Game_Vehicle() {
            this.initialize.apply(this, arguments);
        },
        initialize: function (type) {
            Game_Character.prototype.initialize.call(this);
            this._type = type;
            this.resetDirection();
            this.initMoveSpeed();
            this.loadSystemSettings();
        },
        initMembers: function () {
            Game_Character.prototype.initMembers.call(this);
            this._type = '';
            this._mapId = 0;
            this._altitude = 0;
            this._driving = false;
            this._bgm = null;
        },
        isBoat: function () {
            return this._type === 'boat';
        },
        isShip: function () {
            return this._type === 'ship';
        },
        isAirship: function () {
            return this._type === 'airship';
        },
        resetDirection: function () {
            this.setDirection(4);
        },
        initMoveSpeed: function () {
            if (this.isBoat()) {
                this.setMoveSpeed(4);
            } else if (this.isShip()) {
                this.setMoveSpeed(5);
            } else if (this.isAirship()) {
                this.setMoveSpeed(6);
            }
        },
        vehicle: function () {
            if (this.isBoat()) {
                return $dataSystem.boat;
            } else if (this.isShip()) {
                return $dataSystem.ship;
            } else if (this.isAirship()) {
                return $dataSystem.airship;
            } else {
                return null;
            }
        },
        loadSystemSettings: function () {
            var vehicle = this.vehicle();
            this._mapId = vehicle.startMapId;
            this.setPosition(vehicle.startX, vehicle.startY);
            this.setImage(vehicle.characterName, vehicle.characterIndex);
        },
        refresh: function () {
            if (this._driving) {
                this._mapId = $gameMap.mapId();
                this.syncWithPlayer();
            } else if (this._mapId === $gameMap.mapId()) {
                this.locate(this.x, this.y);
            }
            if (this.isAirship()) {
                this.setPriorityType(this._driving ? 2 : 0);
            } else {
                this.setPriorityType(1);
            }
            this.setWalkAnime(this._driving);
            this.setStepAnime(this._driving);
            this.setTransparent(this._mapId !== $gameMap.mapId());
        },
        setLocation: function (mapId, x, y) {
            this._mapId = mapId;
            this.setPosition(x, y);
            this.refresh();
        },
        pos: function (x, y) {
            if (this._mapId === $gameMap.mapId()) {
                return Game_Character.prototype.pos.call(this, x, y);
            } else {
                return false;
            }
        },
        isMapPassable: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (this.isBoat()) {
                return $gameMap.isBoatPassable(x2, y2);
            } else if (this.isShip()) {
                return $gameMap.isShipPassable(x2, y2);
            } else if (this.isAirship()) {
                return true;
            } else {
                return false;
            }
        },
        getOn: function () {
            this._driving = true;
            this.setWalkAnime(true);
            this.setStepAnime(true);
            $gameSystem.saveWalkingBgm();
            this.playBgm();
        },
        getOff: function () {
            this._driving = false;
            this.setWalkAnime(false);
            this.setStepAnime(false);
            this.resetDirection();
            $gameSystem.replayWalkingBgm();
        },
        setBgm: function (bgm) {
            this._bgm = bgm;
        },
        playBgm: function () {
            AudioManager.playBgm(this._bgm || this.vehicle().bgm);
        },
        syncWithPlayer: function () {
            this.copyPosition($gamePlayer);
            this.refreshBushDepth();
        },
        screenY: function () {
            return Game_Character.prototype.screenY.call(this) - this._altitude;
        },
        shadowX: function () {
            return this.screenX();
        },
        shadowY: function () {
            return this.screenY() + this._altitude;
        },
        shadowOpacity: function () {
            return 255 * this._altitude / this.maxAltitude();
        },
        canMove: function () {
            if (this.isAirship()) {
                return this.isHighest();
            } else {
                return true;
            }
        },
        update: function () {
            Game_Character.prototype.update.call(this);
            if (this.isAirship()) {
                this.updateAirship();
            }
        },
        updateAirship: function () {
            this.updateAirshipAltitude();
            this.setStepAnime(this.isHighest());
            this.setPriorityType(this.isLowest() ? 0 : 2);
        },
        updateAirshipAltitude: function () {
            if (this._driving && !this.isHighest()) {
                this._altitude++;
            }
            if (!this._driving && !this.isLowest()) {
                this._altitude--;
            }
        },
        maxAltitude: function () {
            return 48;
        },
        isLowest: function () {
            return this._altitude <= 0;
        },
        isHighest: function () {
            return this._altitude >= this.maxAltitude();
        },
        isTakeoffOk: function () {
            return $gamePlayer.areFollowersGathered();
        },
        isLandOk: function (x, y, d) {
            var value = Yanfly.RR.Game_Vehicle_isLandOk.call(this, x, y, d);
            if (!value) return false;
            if (this.isAirship()) {
                d = 5;
                $gamePlayer._through = false;
            }
            if ($gamePlayer.isPlayerRegionForbid(x, y, d)) {
                if (this.isAirship()) $gamePlayer._through = true;
                return false;
            }
            if ($gamePlayer.isPlayerRegionAllow(x, y, d)) {
                if (this.isAirship()) $gamePlayer._through = true;
                return true;
            }
            return true;
        },
        memorizeMoveRoute: function () {
            this._originalMoveRoute = this._moveRoute;
            this._originalMoveRouteIndex = this._moveRouteIndex;
        },
        restoreMoveRoute: function () {
            this._moveRoute = this._originalMoveRoute;
            this._moveRouteIndex = this._originalMoveRouteIndex;
            this._originalMoveRoute = null;
        },
        isMoveRouteForcing: function () {
            return this._moveRouteForcing;
        },
        setMoveRoute: function (moveRoute) {
            if (!this._moveRouteForcing) {
                Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
            } else {
                this.queueMoveRoute(moveRoute);
            }
        },
        forceMoveRoute: function (moveRoute) {
            if (!this._originalMoveRoute) {
                this.memorizeMoveRoute();
            }
            this._moveRoute = moveRoute;
            this._moveRouteIndex = 0;
            this._moveRouteForcing = true;
            this._waitCount = 0;
        },
        updateStop: function () {
            Game_CharacterBase.prototype.updateStop.call(this);
            if (this._moveRouteForcing) {
                this.updateRoutineMove();
            }
        },
        updateRoutineMove: function () {
            if (this._waitCount > 0) {
                this._waitCount--;
            } else {
                this.setMovementSuccess(true);
                var command = this._moveRoute.list[this._moveRouteIndex];
                if (command) {
                    this.processMoveCommand(command);
                    this.advanceMoveRouteIndex();
                }
            }
        },
        processMoveCommand: function (command) {
            var gc = Game_Character;
            var params = command.parameters;
            switch (command.code) {
                case gc.ROUTE_END:
                    this.processRouteEnd();
                    break;
                case gc.ROUTE_MOVE_DOWN:
                    this.moveStraight(2);
                    break;
                case gc.ROUTE_MOVE_LEFT:
                    this.moveStraight(4);
                    break;
                case gc.ROUTE_MOVE_RIGHT:
                    this.moveStraight(6);
                    break;
                case gc.ROUTE_MOVE_UP:
                    this.moveStraight(8);
                    break;
                case gc.ROUTE_MOVE_LOWER_L:
                    this.moveDiagonally(4, 2);
                    break;
                case gc.ROUTE_MOVE_LOWER_R:
                    this.moveDiagonally(6, 2);
                    break;
                case gc.ROUTE_MOVE_UPPER_L:
                    this.moveDiagonally(4, 8);
                    break;
                case gc.ROUTE_MOVE_UPPER_R:
                    this.moveDiagonally(6, 8);
                    break;
                case gc.ROUTE_MOVE_RANDOM:
                    this.moveRandom();
                    break;
                case gc.ROUTE_MOVE_TOWARD:
                    this.moveTowardPlayer();
                    break;
                case gc.ROUTE_MOVE_AWAY:
                    this.moveAwayFromPlayer();
                    break;
                case gc.ROUTE_MOVE_FORWARD:
                    this.moveForward();
                    break;
                case gc.ROUTE_MOVE_BACKWARD:
                    this.moveBackward();
                    break;
                case gc.ROUTE_JUMP:
                    this.jump(params[0], params[1]);
                    break;
                case gc.ROUTE_WAIT:
                    this._waitCount = params[0] - 1;
                    break;
                case gc.ROUTE_TURN_DOWN:
                    this.setDirection(2);
                    break;
                case gc.ROUTE_TURN_LEFT:
                    this.setDirection(4);
                    break;
                case gc.ROUTE_TURN_RIGHT:
                    this.setDirection(6);
                    break;
                case gc.ROUTE_TURN_UP:
                    this.setDirection(8);
                    break;
                case gc.ROUTE_TURN_90D_R:
                    this.turnRight90();
                    break;
                case gc.ROUTE_TURN_90D_L:
                    this.turnLeft90();
                    break;
                case gc.ROUTE_TURN_180D:
                    this.turn180();
                    break;
                case gc.ROUTE_TURN_90D_R_L:
                    this.turnRightOrLeft90();
                    break;
                case gc.ROUTE_TURN_RANDOM:
                    this.turnRandom();
                    break;
                case gc.ROUTE_TURN_TOWARD:
                    this.turnTowardPlayer();
                    break;
                case gc.ROUTE_TURN_AWAY:
                    this.turnAwayFromPlayer();
                    break;
                case gc.ROUTE_SWITCH_ON:
                    $gameSwitches.setValue(params[0], true);
                    break;
                case gc.ROUTE_SWITCH_OFF:
                    $gameSwitches.setValue(params[0], false);
                    break;
                case gc.ROUTE_CHANGE_SPEED:
                    this.setMoveSpeed(params[0]);
                    break;
                case gc.ROUTE_CHANGE_FREQ:
                    this.setMoveFrequency(params[0]);
                    break;
                case gc.ROUTE_WALK_ANIME_ON:
                    this.setWalkAnime(true);
                    break;
                case gc.ROUTE_WALK_ANIME_OFF:
                    this.setWalkAnime(false);
                    break;
                case gc.ROUTE_STEP_ANIME_ON:
                    this.setStepAnime(true);
                    break;
                case gc.ROUTE_STEP_ANIME_OFF:
                    this.setStepAnime(false);
                    break;
                case gc.ROUTE_DIR_FIX_ON:
                    this.setDirectionFix(true);
                    break;
                case gc.ROUTE_DIR_FIX_OFF:
                    this.setDirectionFix(false);
                    break;
                case gc.ROUTE_THROUGH_ON:
                    this.setThrough(true);
                    break;
                case gc.ROUTE_THROUGH_OFF:
                    this.setThrough(false);
                    break;
                case gc.ROUTE_TRANSPARENT_ON:
                    this.setTransparent(true);
                    break;
                case gc.ROUTE_TRANSPARENT_OFF:
                    this.setTransparent(false);
                    break;
                case gc.ROUTE_CHANGE_IMAGE:
                    this.setImage(params[0], params[1]);
                    break;
                case gc.ROUTE_CHANGE_OPACITY:
                    this.setOpacity(params[0]);
                    break;
                case gc.ROUTE_CHANGE_BLEND_MODE:
                    this.setBlendMode(params[0]);
                    break;
                case gc.ROUTE_PLAY_SE:
                    AudioManager.playSe(params[0]);
                    break;
                case gc.ROUTE_SCRIPT:
                    eval(params[0]);
                    break;
            }
        },
        deltaXFrom: function (x) {
            return $gameMap.deltaX(this.x, x);
        },
        deltaYFrom: function (y) {
            return $gameMap.deltaY(this.y, y);
        },
        moveRandom: function () {
            var d = 2 + Math.randomInt(4) * 2;
            if (this.canPass(this.x, this.y, d)) {
                this.moveStraight(d);
            }
        },
        moveTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 4 : 6);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 8 : 2);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 4 : 6);
                }
            }
        },
        moveAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.moveStraight(sx > 0 ? 6 : 4);
                if (!this.isMovementSucceeded() && sy !== 0) {
                    this.moveStraight(sy > 0 ? 2 : 8);
                }
            } else if (sy !== 0) {
                this.moveStraight(sy > 0 ? 2 : 8);
                if (!this.isMovementSucceeded() && sx !== 0) {
                    this.moveStraight(sx > 0 ? 6 : 4);
                }
            }
        },
        turnTowardCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 4 : 6);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 8 : 2);
            }
        },
        turnAwayFromCharacter: function (character) {
            var sx = this.deltaXFrom(character.x);
            var sy = this.deltaYFrom(character.y);
            if (Math.abs(sx) > Math.abs(sy)) {
                this.setDirection(sx > 0 ? 6 : 4);
            } else if (sy !== 0) {
                this.setDirection(sy > 0 ? 2 : 8);
            }
        },
        turnTowardPlayer: function () {
            this.turnTowardCharacter($gamePlayer);
        },
        turnAwayFromPlayer: function () {
            this.turnAwayFromCharacter($gamePlayer);
        },
        moveTowardPlayer: function () {
            this.moveTowardCharacter($gamePlayer);
        },
        moveAwayFromPlayer: function () {
            this.moveAwayFromCharacter($gamePlayer);
        },
        moveForward: function () {
            this.moveStraight(this.direction());
        },
        moveBackward: function () {
            var lastDirectionFix = this.isDirectionFixed();
            this.setDirectionFix(true);
            this.moveStraight(this.reverseDir(this.direction()));
            this.setDirectionFix(lastDirectionFix);
        },
        processRouteEnd: function () {
            if (this._moveRoute.repeat) {
                this._moveRouteIndex = -1;
            } else if (this._moveRouteForcing) {
                this._moveRouteForcing = false;
                this.restoreMoveRoute();
            }
        },
        advanceMoveRouteIndex: function () {
            var moveRoute = this._moveRoute;
            if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
                var numCommands = moveRoute.list.length - 1;
                this._moveRouteIndex++;
                if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
                    this._moveRouteIndex = 0;
                }
            }
        },
        turnRight90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(4);
                    break;
                case 4:
                    this.setDirection(8);
                    break;
                case 6:
                    this.setDirection(2);
                    break;
                case 8:
                    this.setDirection(6);
                    break;
            }
        },
        turnLeft90: function () {
            switch (this.direction()) {
                case 2:
                    this.setDirection(6);
                    break;
                case 4:
                    this.setDirection(2);
                    break;
                case 6:
                    this.setDirection(8);
                    break;
                case 8:
                    this.setDirection(4);
                    break;
            }
        },
        turn180: function () {
            this.setDirection(this.reverseDir(this.direction()));
        },
        turnRightOrLeft90: function () {
            switch (Math.randomInt(2)) {
                case 0:
                    this.turnRight90();
                    break;
                case 1:
                    this.turnLeft90();
                    break;
            }
        },
        turnRandom: function () {
            this.setDirection(2 + Math.randomInt(4) * 2);
        },
        swap: function (character) {
            var newX = character.x;
            var newY = character.y;
            character.locate(this.x, this.y);
            this.locate(newX, newY);
        },
        findDirectionTo: function (goalX, goalY) {
            var searchLimit = this.searchLimit();
            var mapWidth = $gameMap.width();
            var nodeList = [];
            var openList = [];
            var closedList = [];
            var start = {};
            var best = start;

            if (this.x === goalX && this.y === goalY) {
                return 0;
            }

            start.parent = null;
            start.x = this.x;
            start.y = this.y;
            start.g = 0;
            start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
            nodeList.push(start);
            openList.push(start.y * mapWidth + start.x);

            while (nodeList.length > 0) {
                var bestIndex = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].f < nodeList[bestIndex].f) {
                        bestIndex = i;
                    }
                }

                var current = nodeList[bestIndex];
                var x1 = current.x;
                var y1 = current.y;
                var pos1 = y1 * mapWidth + x1;
                var g1 = current.g;

                nodeList.splice(bestIndex, 1);
                openList.splice(openList.indexOf(pos1), 1);
                closedList.push(pos1);

                if (current.x === goalX && current.y === goalY) {
                    best = current;
                    goaled = true;
                    break;
                }

                if (g1 >= searchLimit) {
                    continue;
                }

                for (var j = 0; j < 4; j++) {
                    var direction = 2 + j * 2;
                    var x2 = $gameMap.roundXWithDirection(x1, direction);
                    var y2 = $gameMap.roundYWithDirection(y1, direction);
                    var pos2 = y2 * mapWidth + x2;

                    if (closedList.contains(pos2)) {
                        continue;
                    }
                    if (!this.canPass(x1, y1, direction)) {
                        continue;
                    }

                    var g2 = g1 + 1;
                    var index2 = openList.indexOf(pos2);

                    if (index2 < 0 || g2 < nodeList[index2].g) {
                        var neighbor;
                        if (index2 >= 0) {
                            neighbor = nodeList[index2];
                        } else {
                            neighbor = {};
                            nodeList.push(neighbor);
                            openList.push(pos2);
                        }
                        neighbor.parent = current;
                        neighbor.x = x2;
                        neighbor.y = y2;
                        neighbor.g = g2;
                        neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                        if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                            best = neighbor;
                        }
                    }
                }
            }

            var node = best;
            while (node.parent && node.parent !== start) {
                node = node.parent;
            }

            var deltaX1 = $gameMap.deltaX(node.x, start.x);
            var deltaY1 = $gameMap.deltaY(node.y, start.y);
            if (deltaY1 > 0) {
                return 2;
            } else if (deltaX1 < 0) {
                return 4;
            } else if (deltaX1 > 0) {
                return 6;
            } else if (deltaY1 < 0) {
                return 8;
            }

            var deltaX2 = this.deltaXFrom(goalX);
            var deltaY2 = this.deltaYFrom(goalY);
            if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
                return deltaX2 > 0 ? 4 : 6;
            } else if (deltaY2 !== 0) {
                return deltaY2 > 0 ? 8 : 2;
            }

            return 0;
        },
        searchLimit: function () {
            return 12;
        },
        queueMoveRoute: function (moveRoute) {
            this._originalMoveRoute = moveRoute;
            this._originalMoveRouteIndex = 0;
        },
        posNt: function (x, y) {
            // No through
            return this.pos(x, y) && !this.isThrough();
        },
        moveSpeed: function () {
            return this._moveSpeed;
        },
        setMoveSpeed: function (moveSpeed) {
            this._moveSpeed = moveSpeed;
        },
        moveFrequency: function () {
            return this._moveFrequency;
        },
        setMoveFrequency: function (moveFrequency) {
            this._moveFrequency = moveFrequency;
        },
        opacity: function () {
            return this._opacity;
        },
        setOpacity: function (opacity) {
            this._opacity = opacity;
        },
        blendMode: function () {
            return this._blendMode;
        },
        setBlendMode: function (blendMode) {
            this._blendMode = blendMode;
        },
        isNormalPriority: function () {
            return this._priorityType === 1;
        },
        setPriorityType: function (priorityType) {
            this._priorityType = priorityType;
        },
        isMoving: function () {
            return this._realX !== this._x || this._realY !== this._y;
        },
        isJumping: function () {
            return this._jumpCount > 0;
        },
        jumpHeight: function () {
            return (this._jumpPeak * this._jumpPeak -
                Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
        },
        isStopping: function () {
            return !this.isMoving() && !this.isJumping();
        },
        checkStop: function (threshold) {
            return this._stopCount > threshold;
        },
        resetStopCount: function () {
            this._stopCount = 0;
        },
        realMoveSpeed: function () {
            return this._moveSpeed + (this.isDashing() ? 1 : 0);
        },
        distancePerFrame: function () {
            return Math.pow(2, this.realMoveSpeed()) / 256;
        },
        isDashing: function () {
            return false;
        },
        isDebugThrough: function () {
            return false;
        },
        straighten: function () {
            if (this.isEmfCharacter()) {
                if (this.hasWalkAnime() || this.hasStepAnime()) {
                    this._pattern = -1;
                }
                this._animationCount = 0;
            } else {
                ModernAlgebra.EMF.GameCharacterBase_straighten.apply(this, arguments)
            }
        },
        reverseDir: function (d) {
            return 10 - d;
        },
        canPass: function (x, y, d) {
            var x2 = $gameMap.roundXWithDirection(x, d);
            var y2 = $gameMap.roundYWithDirection(y, d);
            if (!$gameMap.isValid(x2, y2)) {
                return false;
            }
            if (this.isThrough() || this.isDebugThrough()) {
                return true;
            }
            if (!this.isMapPassable(x, y, d)) {
                return false;
            }
            if (this.isCollidedWithCharacters(x2, y2)) {
                return false;
            }
            return true;
        },
        canPassDiagonally: function (x, y, horz, vert) {
            var x2 = $gameMap.roundXWithDirection(x, horz);
            var y2 = $gameMap.roundYWithDirection(y, vert);
            if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
                return true;
            }
            if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
                return true;
            }
            return false;
        },
        isCollidedWithCharacters: function (x, y) {
            return this.isCollidedWithEvents(x, y) || this.isCollidedWithVehicles(x, y);
        },
        isCollidedWithEvents: function (x, y) {
            var events = $gameMap.eventsXyNt(x, y);
            return events.some(function (event) {
                return event.isNormalPriority();
            });
        },
        isCollidedWithVehicles: function (x, y) {
            return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
        },
        setPosition: function (x, y) {
            this._x = Math.round(x);
            this._y = Math.round(y);
            this._realX = x;
            this._realY = y;
        },
        copyPosition: function (character) {
            this._x = character._x;
            this._y = character._y;
            this._realX = character._realX;
            this._realY = character._realY;
            this._direction = character._direction;
        },
        locate: function (x, y) {
            this.setPosition(x, y);
            this.straighten();
            this.refreshBushDepth();
        },
        direction: function () {
            return this._direction;
        },
        setDirection: function (d) {
            if (!this.isDirectionFixed() && d) {
                this._direction = d;
            }
            this.resetStopCount();
        },
        isTile: function () {
            return this._tileId > 0 && this._priorityType === 0;
        },
        isObjectCharacter: function () {
            return this._isObjectCharacter;
        },
        shiftY: function () {
            return this.isObjectCharacter() ? 0 : 6;
        },
        scrolledX: function () {
            return $gameMap.adjustX(this._realX);
        },
        scrolledY: function () {
            return $gameMap.adjustY(this._realY);
        },
        screenX: function () {
            var tw = $gameMap.tileWidth();
            return Math.round(this.scrolledX() * tw + tw / 2);
        },
        screenZ: function () {
            return this._priorityType * 2 + 1;
        },
        isNearTheScreen: function () {
            var gw = Graphics.width;
            var gh = Graphics.height;
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var px = this.scrolledX() * tw + tw / 2 - gw / 2;
            var py = this.scrolledY() * th + th / 2 - gh / 2;
            return px >= -gw && px <= gw && py >= -gh && py <= gh;
        },
        updateJump: function () {
            this._jumpCount--;
            this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
            this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
            this.refreshBushDepth();
            if (this._jumpCount === 0) {
                this._realX = this._x = $gameMap.roundX(this._x);
                this._realY = this._y = $gameMap.roundY(this._y);
            }
        },
        updateMove: function () {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
            }
            if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
            }
            if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
            }
            if (!this.isMoving()) {
                this.refreshBushDepth();
            }
        },
        updateAnimation: function () {
            this.updateAnimationCount();
            if (this._animationCount >= this.animationWait()) {
                this.updatePattern();
                this._animationCount = 0;
            }
        },
        animationWait: function () {
            // If EMF Character
            if (this.isEmfCharacter()) {
                var realSpeed = this.realMoveSpeed();
                var frameNum = this.maxPattern();
                return Math.floor((8 - realSpeed) * (ModernAlgebra.EMF.cycleTime / (4 * frameNum))); // CycleTime divided by number of frames in animation
            } else {
                // Run Default Method - approx. 60 frames at normal speed
                return ModernAlgebra.EMF.GameCharacterBase_animationWait.apply(this, arguments) // original method 
            }
        },
        updateAnimationCount: function () {
            if (this.isMoving() && this.hasWalkAnime()) {
                this._animationCount += 1.5;
            } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
                this._animationCount++;
            }
        },
        updatePattern: function () {
            if (!this.hasStepAnime() && this._stopCount > 0) {
                this.resetPattern();
            } else {
                this._pattern = (this._pattern + 1) % this.maxPattern();
            }
        },
        maxPattern: function () {
            if (this.isEmfCharacter()) {
                return this.emfCharacterState().pattern.length; // Length of pattern array
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_maxPattern.apply(this, arguments); // original method
            }
        },
        pattern: function () {
            if (this.isEmfCharacter()) {
                if (this._pattern < 0) {
                    return this.emfCharacterState().idleFrame; // Idle Frame if _pattern < 0
                } else {
                    var patternIndex = (this._pattern % this.emfCharacterState().pattern.length);
                    return this.emfCharacterState().pattern[patternIndex]; // index of pattern array
                }
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_pattern.apply(this, arguments); // original method
            }
        },
        setPattern: function (pattern) {
            this._pattern = pattern;
        },
        isOriginalPattern: function () {
            if (this.isEmfCharacter()) {
                return this.pattern() === -1;
            } else {
                return ModernAlgebra.EMF.GameCharacterBase_isOriginalpattern.apply(this, arguments); // original method
            }
        },
        resetPattern: function () {
            if (this.isEmfCharacter()) {
                this.setPattern(-1);
            } else {
                ModernAlgebra.EMF.GameCharacterBase_resetPattern.apply(this, arguments); // original method
            }
        },
        refreshBushDepth: function () {
            if (this.isNormalPriority() && !this.isObjectCharacter() &&
                this.isOnBush() && !this.isJumping()) {
                if (!this.isMoving()) {
                    this._bushDepth = 12;
                }
            } else {
                this._bushDepth = 0;
            }
        },
        isOnLadder: function () {
            return $gameMap.isLadder(this._x, this._y);
        },
        isOnBush: function () {
            return $gameMap.isBush(this._x, this._y);
        },
        terrainTag: function () {
            return $gameMap.terrainTag(this._x, this._y);
        },
        regionId: function () {
            return $gameMap.regionId(this._x, this._y);
        },
        increaseSteps: function () {
            if (this.isOnLadder()) {
                this.setDirection(8);
            }
            this.resetStopCount();
            this.refreshBushDepth();
        },
        tileId: function () {
            return this._tileId;
        },
        characterName: function () {
            return this._characterName;
        },
        characterIndex: function () {
            return this._characterIndex;
        },
        setImage: function () {
            ModernAlgebra.EMF.GameCharacterBase_setImage.apply(this, arguments); // original method
            this.maemfSetupEmfCharacter();
            this.resetPattern();
        },
        setTileImage: function (tileId) {
            this._tileId = tileId;
            this._characterName = '';
            this._characterIndex = 0;
            this._isObjectCharacter = true;
        },
        checkEventTriggerTouchFront: function (d) {
            var x2 = $gameMap.roundXWithDirection(this._x, d);
            var y2 = $gameMap.roundYWithDirection(this._y, d);
            this.checkEventTriggerTouch(x2, y2);
        },
        checkEventTriggerTouch: function (x, y) {
            return false;
        },
        isMovementSucceeded: function (x, y) {
            return this._movementSuccess;
        },
        setMovementSuccess: function (success) {
            this._movementSuccess = success;
        },
        moveStraight: function (d) {
            this.setMovementSuccess(this.canPass(this._x, this._y, d));
            if (this.isMovementSucceeded()) {
                this.setDirection(d);
                this._x = $gameMap.roundXWithDirection(this._x, d);
                this._y = $gameMap.roundYWithDirection(this._y, d);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
                this.increaseSteps();
            } else {
                this.setDirection(d);
                this.checkEventTriggerTouchFront(d);
            }
        },
        moveDiagonally: function (horz, vert) {
            this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
            if (this.isMovementSucceeded()) {
                this._x = $gameMap.roundXWithDirection(this._x, horz);
                this._y = $gameMap.roundYWithDirection(this._y, vert);
                this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
                this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
                this.increaseSteps();
            }
            if (this._direction === this.reverseDir(horz)) {
                this.setDirection(horz);
            }
            if (this._direction === this.reverseDir(vert)) {
                this.setDirection(vert);
            }
        },
        jump: function (xPlus, yPlus) {
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            } else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            this._x += xPlus;
            this._y += yPlus;
            var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
            this._jumpPeak = 10 + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        },
        hasWalkAnime: function () {
            return this._walkAnime;
        },
        setWalkAnime: function (walkAnime) {
            this._walkAnime = walkAnime;
        },
        hasStepAnime: function () {
            return this._stepAnime;
        },
        setStepAnime: function (stepAnime) {
            this._stepAnime = stepAnime;
        },
        isDirectionFixed: function () {
            return this._directionFix;
        },
        setDirectionFix: function (directionFix) {
            this._directionFix = directionFix;
        },
        isThrough: function () {
            return this._through;
        },
        setThrough: function (through) {
            this._through = through;
        },
        isTransparent: function () {
            return this._transparent;
        },
        bushDepth: function () {
            return this._bushDepth;
        },
        setTransparent: function (transparent) {
            this._transparent = transparent;
        },
        requestAnimation: function (animationId) {
            this._animationId = animationId;
        },
        requestBalloon: function (balloonId) {
            this._balloonId = balloonId;
        },
        animationId: function () {
            return this._animationId;
        },
        balloonId: function () {
            return this._balloonId;
        },
        startAnimation: function () {
            this._animationId = 0;
            this._animationPlaying = true;
        },
        startBalloon: function () {
            this._balloonId = 0;
            this._balloonPlaying = true;
        },
        isAnimationPlaying: function () {
            return this._animationId > 0 || this._animationPlaying;
        },
        isBalloonPlaying: function () {
            return this._balloonId > 0 || this._balloonPlaying;
        },
        endAnimation: function () {
            this._animationPlaying = false;
        },
        endBalloon: function () {
            this._balloonPlaying = false;
        },
        isEvent: function () {
            return false;
        },
        isPlayer: function () {
            return false;
        },
        processRRNotetags: function () {
            DataManager.processRRNotetags();
        },
        isEventRegionForbid: function (x, y, d) {
            if (this.isPlayer()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionForbid: function (x, y, d) {
            if (this.isEvent()) return false;
            if (this.isThrough()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
            return false;
        },
        isEventRegionAllow: function (x, y, d) {
            if (this.isPlayer()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowEventRegions().contains(regionId)) return true;
            return false;
        },
        isPlayerRegionAllow: function (x, y, d) {
            if (this.isEvent()) return false;
            var regionId = this.getRegionId(x, y, d);
            if (regionId === 0) return false;
            if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
            return false
        },
        getRegionId: function (x, y, d) {
            switch (d) {
                case 1:
                    return $gameMap.regionId(x - 1, y + 1);
                    break;
                case 2:
                    return $gameMap.regionId(x + 0, y + 1);
                    break;
                case 3:
                    return $gameMap.regionId(x + 1, y + 1);
                    break;
                case 4:
                    return $gameMap.regionId(x - 1, y + 0);
                    break;
                case 5:
                    return $gameMap.regionId(x + 0, y + 0);
                    break;
                case 6:
                    return $gameMap.regionId(x + 1, y + 0);
                    break;
                case 7:
                    return $gameMap.regionId(x - 1, y - 1);
                    break;
                case 8:
                    return $gameMap.regionId(x + 0, y - 1);
                    break;
                case 9:
                    return $gameMap.regionId(x + 1, y - 1);
                    break;
                default:
                    return $gameMap.regionId(x, y);
                    break;
            }
        },
        screen_realX: function () {
            return this.scrolledX() * $gameMap.tileWidth()
        },
        screen_realY: function () {
            return this.scrolledY() * $gameMap.tileHeight()
        },
        maClearEmfCharacterState: function () {
            this._isEmfCharacter = false;
            this._emfCharacterState = { frameNum: 3, idleFrame: ModernAlgebra.EMF.idleFrame, pattern: [2, 1, 0, 1] };
        },
        isEmfCharacter: function () {
            return this._isEmfCharacter;
        },
        emfCharacterState: function () {
            return this._emfCharacterState;
        },
        maemfSetupEmfCharacter: function () {
            this.maClearEmfCharacterState();
            var charName = this.characterName();
            if (ImageManager.isEmfCharacter(charName)) {
                var sign = charName.match(/(?:\%[\(\[])[\d\s]+(?:[\)\]])/);
                var signArgs = sign[0].match(/\d+/g); // array of digit strings
                if (signArgs) {
                    this._isEmfCharacter = true;
                    // Map arguments in file name to an array of numbers
                    signArgs = signArgs.map(Number);
                    signArgsLength = signArgs.length;
                    this.emfCharacterState().frameNum = signArgs.shift();
                    this.emfCharacterState().idleFrame = (signArgsLength > 1) ? signArgs.shift() : ModernAlgebra.EMF.idleFrame;
                    if (signArgsLength > 2) {
                        this.emfCharacterState().pattern = signArgs;
                    } else {
                        var success = false;
                        // Check for a default match for this number of frames
                        for (var i = 0; i < ModernAlgebra.EMF.defaultPattern.length; i++) {
                            if (ModernAlgebra.EMF.defaultPattern[i][0] === this.emfCharacterState().frameNum) {
                                this.emfCharacterState().idleFrame = ModernAlgebra.EMF.defaultPattern[i][1];
                                this.emfCharacterState().pattern = ModernAlgebra.EMF.defaultPattern[i].slice(2, (ModernAlgebra.EMF.defaultPattern[i].length));
                                success = true;
                                break;
                            }
                        }
                        // If still no pattern specified
                        if (!success) {
                            // Populate pattern with a simple cycle starting after idle
                            this.emfCharacterState().pattern = [];
                            var idleFramePlus = this.emfCharacterState().idleFrame + 1;
                            for (var i = 0; i < this.emfCharacterState().frameNum; i++) {
                                this.emfCharacterState().pattern.push((i + idleFramePlus) % this.emfCharacterState().frameNum);
                            }
                        }
                    }
                }
            }
        },

    }],
    _displayX: 5,
    _displayY: "2.729166666666666",
    _nameDisplay: true,
    _scrollDirection: 2,
    _scrollRest: 0,
    _scrollSpeed: 4,
    _parallaxName: "!BG_A2_14_xiao",
    _parallaxZero: true,
    _parallaxLoopX: false,
    _parallaxLoopY: false,
    _parallaxSx: 0,
    _parallaxSy: 0,
    _parallaxX: 5,
    _parallaxY: "2.729166666666666",
    _battleback1Name: "BT_3",
    _battleback2Name: "Brick",
    tileEvents: "",
    _needsRefresh: false,
    '@': "Game_Map",
    initialize: function () {
        this._interpreter = new Game_Interpreter();
        this._mapId = 0;
        this._tilesetId = 0;
        this._events = [];
        this._commonEvents = [];
        this._vehicles = [];
        this._displayX = 0;
        this._displayY = 0;
        this._nameDisplay = true;
        this._scrollDirection = 2;
        this._scrollRest = 0;
        this._scrollSpeed = 4;
        this._parallaxName = '';
        this._parallaxZero = false;
        this._parallaxLoopX = false;
        this._parallaxLoopY = false;
        this._parallaxSx = 0;
        this._parallaxSy = 0;
        this._parallaxX = 0;
        this._parallaxY = 0;
        this._battleback1Name = null;
        this._battleback2Name = null;
        this.createVehicles();
    },
    setup: function (mapId) {
        Yanfly.RR.Game_Map_setup.call(this, mapId);
        if ($dataMap) DataManager.processRRNotetags();
    },
    isEventRunning: function () {
        if ($gameTemp._commonEventId > 0) return true;
        return Yanfly.PCE.Game_Map_isEventRunning.call(this);
    },
    tileWidth: function () {
        return 48;
    },
    tileHeight: function () {
        return 48;
    },
    mapId: function () {
        return this._mapId;
    },
    tilesetId: function () {
        return this._tilesetId;
    },
    displayX: function () {
        return parseFloat(Math.floor(this._displayX *
            this.tileWidth())) / this.tileWidth();
    },
    displayY: function () {
        return parseFloat(Math.floor(this._displayY *
            this.tileHeight())) / this.tileHeight();
    },
    parallaxName: function () {
        return this._parallaxName;
    },
    battleback1Name: function () {
        return this._battleback1Name;
    },
    battleback2Name: function () {
        return this._battleback2Name;
    },
    requestRefresh: function (mapId) {
        this._needsRefresh = true;
    },
    isNameDisplayEnabled: function () {
        return this._nameDisplay;
    },
    disableNameDisplay: function () {
        this._nameDisplay = false;
    },
    enableNameDisplay: function () {
        this._nameDisplay = true;
    },
    createVehicles: function () {
        this._vehicles = [];
        this._vehicles[0] = new Game_Vehicle('boat');
        this._vehicles[1] = new Game_Vehicle('ship');
        this._vehicles[2] = new Game_Vehicle('airship');
    },
    refereshVehicles: function () {
        this._vehicles.forEach(function (vehicle) {
            vehicle.refresh();
        });
    },
    vehicles: function () {
        return this._vehicles;
    },
    vehicle: function (type) {
        if (type === 0 || type === 'boat') {
            return this.boat();
        } else if (type === 1 || type === 'ship') {
            return this.ship();
        } else if (type === 2 || type === 'airship') {
            return this.airship();
        } else {
            return null;
        }
    },
    boat: function () {
        return this._vehicles[0];
    },
    ship: function () {
        return this._vehicles[1];
    },
    airship: function () {
        return this._vehicles[2];
    },
    setupEvents: function () {
        this._events = [];
        for (var i = 0; i < $dataMap.events.length; i++) {
            if ($dataMap.events[i]) {
                this._events[i] = new Game_Event(this._mapId, i);
            }
        }
        this._commonEvents = this.parallelCommonEvents().map(function (commonEvent) {
            return new Game_CommonEvent(commonEvent.id);
        });
        this.refreshTileEvents();
    },
    events: function () {
        return this._events.filter(function (event) {
            return !!event;
        });
    },
    event: function (eventId) {
        return this._events[eventId];
    },
    eraseEvent: function (eventId) {
        this._events[eventId].erase();
    },
    parallelCommonEvents: function () {
        return $dataCommonEvents.filter(function (commonEvent) {
            return commonEvent && commonEvent.trigger === 2;
        });
    },
    setupScroll: function () {
        this._scrollDirection = 2;
        this._scrollRest = 0;
        this._scrollSpeed = 4;
    },
    setupParallax: function () {
        this._parallaxName = $dataMap.parallaxName || '';
        this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
        this._parallaxLoopX = $dataMap.parallaxLoopX;
        this._parallaxLoopY = $dataMap.parallaxLoopY;
        this._parallaxSx = $dataMap.parallaxSx;
        this._parallaxSy = $dataMap.parallaxSy;
        this._parallaxX = 0;
        this._parallaxY = 0;
    },
    setupBattleback: function () {
        if ($dataMap.specifyBattleback) {
            this._battleback1Name = $dataMap.battleback1Name;
            this._battleback2Name = $dataMap.battleback2Name;
        } else {
            this._battleback1Name = null;
            this._battleback2Name = null;
        }
    },
    setDisplayPos: function (x, y) {
        if (this.isLoopHorizontal()) {
            this._displayX = x.mod(this.width());
            this._parallaxX = x;
        } else {
            var endX = this.width() - this.screenTileX();
            this._displayX = endX < 0 ? endX / 2 : x.clamp(0, endX);
            this._parallaxX = this._displayX;
        }
        if (this.isLoopVertical()) {
            this._displayY = y.mod(this.height());
            this._parallaxY = y;
        } else {
            var endY = this.height() - this.screenTileY();
            this._displayY = endY < 0 ? endY / 2 : y.clamp(0, endY);
            this._parallaxY = this._displayY;
        }
    },
    parallaxOx: function () {
        if (this._parallaxZero) {
            return this._parallaxX * this.tileWidth();
        } else if (this._parallaxLoopX) {
            return this._parallaxX * this.tileWidth() / 2;
        } else {
            return 0;
        }
    },
    parallaxOy: function () {
        if (this._parallaxZero) {
            return this._parallaxY * this.tileHeight();
        } else if (this._parallaxLoopY) {
            return this._parallaxY * this.tileHeight() / 2;
        } else {
            return 0;
        }
    },
    tileset: function () {
        return $dataTilesets[this._tilesetId];
    },
    tilesetFlags: function () {
        var tileset = this.tileset();
        if (tileset) {
            return tileset.flags;
        } else {
            return [];
        }
    },
    displayName: function () {
        return $dataMap.displayName;
    },
    width: function () {
        return $dataMap.width;
    },
    height: function () {
        return $dataMap.height;
    },
    data: function () {
        return $dataMap.data;
    },
    isLoopHorizontal: function () {
        return $dataMap.scrollType === 2 || $dataMap.scrollType === 3;
    },
    isLoopVertical: function () {
        return $dataMap.scrollType === 1 || $dataMap.scrollType === 3;
    },
    isDashDisabled: function () {
        return $dataMap.disableDashing;
    },
    encounterList: function () {
        return $dataMap.encounterList;
    },
    encounterStep: function () {
        return $dataMap.encounterStep;
    },
    isOverworld: function () {
        return this.tileset() && this.tileset().mode === 0;
    },
    screenTileX: function () {
        return Graphics.width / this.tileWidth();
    },
    screenTileY: function () {
        return Graphics.height / this.tileHeight();
    },
    adjustX: function (x) {
        if (this.isLoopHorizontal() && x < this.displayX() -
            (this.width() - this.screenTileX()) / 2) {
            return x - this.displayX() + $dataMap.width;
        } else {
            return x - this.displayX();
        }
    },
    adjustY: function (y) {
        if (this.isLoopVertical() && y < this.displayY() -
            (this.height() - this.screenTileY()) / 2) {
            return y - this.displayY() + $dataMap.height;
        } else {
            return y - this.displayY();
        }
    },
    roundX: function (x) {
        return this.isLoopHorizontal() ? x.mod(this.width()) : x;
    },
    roundY: function (y) {
        return this.isLoopVertical() ? y.mod(this.height()) : y;
    },
    xWithDirection: function (x, d) {
        return x + (d === 6 ? 1 : d === 4 ? -1 : 0);
    },
    yWithDirection: function (y, d) {
        return y + (d === 2 ? 1 : d === 8 ? -1 : 0);
    },
    roundXWithDirection: function (x, d) {
        return this.roundX(x + (d === 6 ? 1 : d === 4 ? -1 : 0));
    },
    roundYWithDirection: function (y, d) {
        return this.roundY(y + (d === 2 ? 1 : d === 8 ? -1 : 0));
    },
    deltaX: function (x1, x2) {
        var result = x1 - x2;
        if (this.isLoopHorizontal() && Math.abs(result) > this.width() / 2) {
            if (result < 0) {
                result += this.width();
            } else {
                result -= this.width();
            }
        }
        return result;
    },
    deltaY: function (y1, y2) {
        var result = y1 - y2;
        if (this.isLoopVertical() && Math.abs(result) > this.height() / 2) {
            if (result < 0) {
                result += this.height();
            } else {
                result -= this.height();
            }
        }
        return result;
    },
    distance: function (x1, y1, x2, y2) {
        return Math.abs(this.deltaX(x1, x2)) + Math.abs(this.deltaY(y1, y2));
    },
    canvasToMapX: function (x) {
        var tileWidth = this.tileWidth();
        var originX = this._displayX * tileWidth;
        var mapX = Math.floor((originX + x) / tileWidth);
        return this.roundX(mapX);
    },
    canvasToMapY: function (y) {
        var tileHeight = this.tileHeight();
        var originY = this._displayY * tileHeight;
        var mapY = Math.floor((originY + y) / tileHeight);
        return this.roundY(mapY);
    },
    autoplay: function () {
        if ($dataMap.autoplayBgm) {
            AudioManager.playBgm($dataMap.bgm);
        }
        if ($dataMap.autoplayBgs) {
            AudioManager.playBgs($dataMap.bgs);
        }
    },
    refreshIfNeeded: function () {
        if (this._needsRefresh) {
            this.refresh();
        }
    },
    refresh: function () {
        this.events().forEach(function (event) {
            event.refresh();
        });
        this._commonEvents.forEach(function (event) {
            event.refresh();
        });
        this.refreshTileEvents();
        this._needsRefresh = false;
    },
    refreshTileEvents: function () {
        this.tileEvents = this.events().filter(function (event) {
            return event.isTile();
        });
    },
    eventsXy: function (x, y) {
        return this.events().filter(function (event) {
            return event.pos(x, y);
        });
    },
    eventsXyNt: function (x, y) {
        return this.events().filter(function (event) {
            return event.posNt(x, y);
        });
    },
    tileEventsXy: function (x, y) {
        return this.tileEvents.filter(function (event) {
            return event.posNt(x, y);
        });
    },
    eventIdXy: function (x, y) {
        var list = this.eventsXy(x, y);
        return list.length === 0 ? 0 : list[0].eventId();
    },
    scrollDown: function (distance) {
        if (this.isLoopVertical()) {
            this._displayY += distance;
            this._displayY %= $dataMap.height;
            if (this._parallaxLoopY) {
                this._parallaxY += distance;
            }
        } else if (this.height() >= this.screenTileY()) {
            var lastY = this._displayY;
            this._displayY = Math.min(this._displayY + distance,
                this.height() - this.screenTileY());
            this._parallaxY += this._displayY - lastY;
        }
    },
    scrollLeft: function (distance) {
        if (this.isLoopHorizontal()) {
            this._displayX += $dataMap.width - distance;
            this._displayX %= $dataMap.width;
            if (this._parallaxLoopX) {
                this._parallaxX -= distance;
            }
        } else if (this.width() >= this.screenTileX()) {
            var lastX = this._displayX;
            this._displayX = Math.max(this._displayX - distance, 0);
            this._parallaxX += this._displayX - lastX;
        }
    },
    scrollRight: function (distance) {
        if (this.isLoopHorizontal()) {
            this._displayX += distance;
            this._displayX %= $dataMap.width;
            if (this._parallaxLoopX) {
                this._parallaxX += distance;
            }
        } else if (this.width() >= this.screenTileX()) {
            var lastX = this._displayX;
            this._displayX = Math.min(this._displayX + distance,
                this.width() - this.screenTileX());
            this._parallaxX += this._displayX - lastX;
        }
    },
    scrollUp: function (distance) {
        if (this.isLoopVertical()) {
            this._displayY += $dataMap.height - distance;
            this._displayY %= $dataMap.height;
            if (this._parallaxLoopY) {
                this._parallaxY -= distance;
            }
        } else if (this.height() >= this.screenTileY()) {
            var lastY = this._displayY;
            this._displayY = Math.max(this._displayY - distance, 0);
            this._parallaxY += this._displayY - lastY;
        }
    },
    isValid: function (x, y) {
        return x >= 0 && x < this.width() && y >= 0 && y < this.height();
    },
    checkPassage: function (x, y, bit) {
        var flags = this.tilesetFlags();
        var tiles = this.allTiles(x, y);
        for (var i = 0; i < tiles.length; i++) {
            var flag = flags[tiles[i]];
            if ((flag & 0x10) !== 0)  // [*] No effect on passage
                continue;
            if ((flag & bit) === 0)   // [o] Passable
                return true;
            if ((flag & bit) === bit) // [x] Impassable
                return false;
        }
        return false;
    },
    tileId: function (x, y, z) {
        var width = $dataMap.width;
        var height = $dataMap.height;
        return $dataMap.data[(z * height + y) * width + x] || 0;
    },
    layeredTiles: function (x, y) {
        var tiles = [];
        for (var i = 0; i < 4; i++) {
            tiles.push(this.tileId(x, y, 3 - i));
        }
        return tiles;
    },
    allTiles: function (x, y) {
        var tiles = this.tileEventsXy(x, y).map(function (event) {
            return event.tileId();
        });
        return tiles.concat(this.layeredTiles(x, y));
    },
    autotileType: function (x, y, z) {
        var tileId = this.tileId(x, y, z);
        return tileId >= 2048 ? Math.floor((tileId - 2048) / 48) : -1;
    },
    isPassable: function (x, y, d) {
        return this.checkPassage(x, y, (1 << (d / 2 - 1)) & 0x0f);
    },
    isBoatPassable: function (x, y) {
        return this.checkPassage(x, y, 0x0200);
    },
    isShipPassable: function (x, y) {
        return this.checkPassage(x, y, 0x0400);
    },
    isAirshipLandOk: function (x, y) {
        return this.checkPassage(x, y, 0x0800) && this.checkPassage(x, y, 0x0f);
    },
    checkLayeredTilesFlags: function (x, y, bit) {
        var flags = this.tilesetFlags();
        return this.layeredTiles(x, y).some(function (tileId) {
            return (flags[tileId] & bit) !== 0;
        });
    },
    isLadder: function (x, y) {
        return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x20);
    },
    isBush: function (x, y) {
        return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x40);
    },
    isCounter: function (x, y) {
        return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x80);
    },
    isDamageFloor: function (x, y) {
        return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x100);
    },
    terrainTag: function (x, y) {
        if (this.isValid(x, y)) {
            var flags = this.tilesetFlags();
            var tiles = this.layeredTiles(x, y);
            for (var i = 0; i < tiles.length; i++) {
                var tag = flags[tiles[i]] >> 12;
                if (tag > 0) {
                    return tag;
                }
            }
        }
        return 0;
    },
    regionId: function (x, y) {
        return this.isValid(x, y) ? this.tileId(x, y, 5) : 0;
    },
    startScroll: function (direction, distance, speed) {
        this._scrollDirection = direction;
        this._scrollRest = distance;
        this._scrollSpeed = speed;
    },
    isScrolling: function () {
        return this._scrollRest > 0;
    },
    update: function (sceneActive) {
        this.refreshIfNeeded();
        if (sceneActive) {
            this.updateInterpreter();
        }
        this.updateScroll();
        this.updateEvents();
        this.updateVehicles();
        this.updateParallax();
    },
    updateScroll: function () {
        if (this.isScrolling()) {
            var lastX = this._displayX;
            var lastY = this._displayY;
            this.doScroll(this._scrollDirection, this.scrollDistance());
            if (this._displayX === lastX && this._displayY === lastY) {
                this._scrollRest = 0;
            } else {
                this._scrollRest -= this.scrollDistance();
            }
        }
    },
    scrollDistance: function () {
        return Math.pow(2, this._scrollSpeed) / 256;
    },
    doScroll: function (direction, distance) {
        switch (direction) {
            case 2:
                this.scrollDown(distance);
                break;
            case 4:
                this.scrollLeft(distance);
                break;
            case 6:
                this.scrollRight(distance);
                break;
            case 8:
                this.scrollUp(distance);
                break;
        }
    },
    updateEvents: function () {
        var group = this.events();
        var length = group.length;
        for (var i = 0; i < length; ++i) {
            var ev = group[i];
            if (ev) ev.update();
        }
        var group = this._commonEvents;
        var length = group.length;
        for (var i = 0; i < length; ++i) {
            var ev = group[i];
            if (ev) ev.update();
        }
    },
    updateVehicles: function () {
        var group = this._vehicles;
        var length = group.length;
        for (var i = 0; i < length; ++i) {
            var vehicle = group[i];
            if (vehicle) vehicle.update();
        }
    },
    updateParallax: function () {
        if (this._parallaxLoopX) {
            this._parallaxX += this._parallaxSx / this.tileWidth() / 2;
        }
        if (this._parallaxLoopY) {
            this._parallaxY += this._parallaxSy / this.tileHeight() / 2;
        }
    },
    changeTileset: function (tilesetId) {
        this._tilesetId = tilesetId;
        this.refresh();
    },
    changeBattleback: function (battleback1Name, battleback2Name) {
        this._battleback1Name = battleback1Name;
        this._battleback2Name = battleback2Name;
    },
    changeParallax: function (name, loopX, loopY, sx, sy) {
        this._parallaxName = name;
        this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
        if (this._parallaxLoopX && !loopX) {
            this._parallaxX = 0;
        }
        if (this._parallaxLoopY && !loopY) {
            this._parallaxY = 0;
        }
        this._parallaxLoopX = loopX;
        this._parallaxLoopY = loopY;
        this._parallaxSx = sx;
        this._parallaxSy = sy;
    },
    updateInterpreter: function () {
        for (; ;) {
            this._interpreter.update();
            if (this._interpreter.isRunning()) {
                return;
            }
            if (this._interpreter.eventId() > 0) {
                this.unlockEvent(this._interpreter.eventId());
                this._interpreter.clear();
            }
            if (!this.setupStartingEvent()) {
                return;
            }
        }
    },
    unlockEvent: function (eventId) {
        if (this._events[eventId]) {
            this._events[eventId].unlock();
        }
    },
    setupStartingEvent: function () {
        this.refreshIfNeeded();
        if (this._interpreter.setupReservedCommonEvent()) {
            return true;
        }
        if (this.setupTestEvent()) {
            return true;
        }
        if (this.setupStartingMapEvent()) {
            return true;
        }
        if (this.setupAutorunCommonEvent()) {
            return true;
        }
        return false;
    },
    setupTestEvent: function () {
        if ($testEvent) {
            this._interpreter.setup($testEvent, 0);
            $testEvent = null;
            return true;
        }
        return false;
    },
    setupStartingMapEvent: function () {
        var events = this.events();
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (event.isStarting()) {
                event.clearStartingFlag();
                this._interpreter.setup(event.list(), event.eventId());
                return true;
            }
        }
        return false;
    },
    setupAutorunCommonEvent: function () {
        for (var i = 0; i < $dataCommonEvents.length; i++) {
            var event = $dataCommonEvents[i];
            if (event && event.trigger === 1 && $gameSwitches.value(event.switchId)) {
                this._interpreter.setup(event.list);
                return true;
            }
        }
        return false;
    },
    isAnyEventStarting: function () {
        return this.events().some(function (event) {
            return event.isStarting();
        });
    },
    moveAfterCommonEvent: function () {
        var interpreter = $gameMap._interpreter;
        if (!interpreter._list) return false;
        if (interpreter.eventId() > 0) return false;
        var list = interpreter._list;
        if ($gameTemp.destinationX() === $gamePlayer.x &&
            $gameTemp.destinationY() === $gamePlayer.y) {
            $gameTemp.clearDestination();
        }
        for (var i = 0; i < list.length; ++i) {
            var code = list[i].code;
            if ([201, 205, 230, 232, 261, 301].contains(code)) return false;
        }
        return true;
    },
    restrictEventRegions: function () {
        if ($dataMap.restrictEventRegions === undefined) {
            DataManager.processRRNotetags();
        }
        return $dataMap.restrictEventRegions || [];
    },
    restrictPlayerRegions: function () {
        if ($dataMap.restrictPlayerRegions === undefined) {
            DataManager.processRRNotetags();
        }
        return $dataMap.restrictPlayerRegions || [];
    },
    allowEventRegions: function () {
        if ($dataMap.allowEventRegions === undefined) {
            DataManager.processRRNotetags();
        }
        return $dataMap.allowEventRegions || [];
    },
    allowPlayerRegions: function () {
        if ($dataMap.allowPlayerRegions === undefined) {
            DataManager.processRRNotetags();
        }
        return $dataMap.allowPlayerRegions || [];
    },
    pictFX: function () {
        return this._displayX * this.tileWidth();
    },
    pictFY: function () {
        return this._displayY * this.tileHeight();
    },

}