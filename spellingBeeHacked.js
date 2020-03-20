(function() {
    "use strict";
    return function init() {
        var self = this;
        var audioInstance = this.audioInstance;
        require(["jquery", "helpers", "createjs", "movieclip"], function(jq, helpers, cjs, mjs) {
            var config = helpers.parseConfig(self);
            var backupAudio = document.createElement('audio');
            config.manifest = {
                tiles: [
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap1.png", id: "Bitmap1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap2.png", id: "Bitmap2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap3.png", id: "Bitmap3" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap4.png", id: "Bitmap4" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap5.png", id: "Bitmap5" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap6.png", id: "Bitmap6" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap7.png", id: "Bitmap7" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap8.png", id: "Bitmap8" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap9.png", id: "Bitmap9" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap10.png", id: "Bitmap10" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap11.png", id: "Bitmap11" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap12.png", id: "Bitmap12" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/Bitmap13.png", id: "Bitmap13" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/butter01.png", id: "butter01" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/butter02.png", id: "butter02" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/getDefinition.png", id: "getDefinition" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/home.png", id: "home" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_blink.png", id: "james_blink" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_body.png", id: "james_body" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_body.png", id: "james_body_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_emptyhead.png", id: "james_emptyhead" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_frown.png", id: "james_frown" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_glasses.png", id: "james_glasses" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_glasses2.png", id: "james_glasses2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_head.png", id: "james_head" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_head.png", id: "james_head_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_nakedhead.png", id: "james_nakedhead" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_oh.png", id: "james_oh" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_smile.png", id: "james_smile" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_smile.png", id: "james_smile_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_striaght.png", id: "james_striaght" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_wings01.png", id: "james_wings01" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/james_wings01.png", id: "james_wings01_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/key_space.png", id: "key_space" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/light.png", id: "light" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_blink.png", id: "mary_blink" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_blink.png", id: "mary_blink_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_body.png", id: "mary_body" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_body.png", id: "mary_body_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_head.png", id: "mary_head" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_head.png", id: "mary_head_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_head1.png", id: "mary_head1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_head2.png", id: "mary_head2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_mouth.png", id: "mary_mouth" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_skirt.png", id: "mary_skirt" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_skirt.png", id: "mary_skirt_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_smile.png", id: "mary_smile" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_smile.png", id: "mary_smile_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_straight.png", id: "mary_straight" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_straight.png", id: "mary_straight_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_wings01.png", id: "mary_wings01" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_wings01.png", id: "mary_wings01_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mary_yes.png", id: "mary_yes" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_blink.png", id: "mindy_blink" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_body.png", id: "mindy_body" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_body.png", id: "mindy_body_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_frown.png", id: "mindy_frown" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_head.png", id: "mindy_head" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_head.png", id: "mindy_head_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_head_down1.png", id: "mindy_head_down1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_head_down2.png", id: "mindy_head_down2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_mouth.png", id: "mindy_mouth" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_ponytail_left.png", id: "mindy_ponytail_left" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_ponytail_left.png", id: "mindy_ponytail_left_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_ponytail_right.png", id: "mindy_ponytail_right" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_ponytail_right.png", id: "mindy_ponytail_right_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_sad.png", id: "mindy_sad" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_smile.png", id: "mindy_smile" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_smile.png", id: "mindy_smile_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_straight.png", id: "mindy_straight" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_wings03.png", id: "mindy_wings03" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/mindy_wings03.png", id: "mindy_wings03_1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/nohivebg.png", id: "nohivebg" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/page_3.png", id: "page_3" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/page_5.png", id: "page_5" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/repeat.png", id: "repeat" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_body.png", id: "robot_body" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_body2.png", id: "robot_body2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_head1.png", id: "robot_head1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_head2.png", id: "robot_head2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_head3.png", id: "robot_head3" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_leg.png", id: "robot_leg" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_light.png", id: "robot_light" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_mouth.png", id: "robot_mouth" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_paper1.png", id: "robot_paper1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_paper2.png", id: "robot_paper2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/robot_paper3.png", id: "robot_paper3" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/stage_robot.png", id: "stage_robot" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/tab_button.png", id: "tab_button" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/volume_button.png", id: "volume_button" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/volume_button_muted.png", id: "volume_button_muted" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/worm1.png", id: "worm1" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/worm2.png", id: "worm2" },
                    { src: config.assetBasePath + "/dla_spellingbee/media/worm3.png", id: "worm3" }
                ],
                audios: [],
                styles: [
                    { id: "style", src: config.assetBasePath + "/dla_spellingbee/css/style.css" }
                ],
                templates: [
                    { id: "intro", src: config.assetBasePath + "/dla_spellingbee/media/intro.html" },
                    { id: "tiles", src: config.assetBasePath + "/dla_spellingbee/media/tiles.html" }
                ]
            }
            config.containerClass = 'globmedia_dla_spellingbee wrap';
            config.debug = false;
            var overlay, loader, sndCount = 1;
            var tilesData, dlaData, ieFlag = false;
            var jamesSndInstance, mindySndInstance, marySndInstance, robotSndInstance, jamesData, mindyData, maryData, robotData;
            var jamesSound, mindySound, marySound, robotSound, objName;
            var _vocabWordArr = [],
                _vocabDefinArr = [],
                _sndUrl = [],
                soundArr = [],
                loadedSounds = [];

            function onload() {
                helpers.renderTemplate(config, 'intro', {}, function(elm) {
                    overlay = jq(elm);
                    loader = overlay.parent().find(".loader");
                    dlaData = config.data.vocab_item;
                    var len = dlaData.length;
                    if (config.dataBasePath.indexOf('/', config.dataBasePath.length - 1) == -1) {
                        config.dataBasePath += '/';
                    }
                    if (len) {
                        for (var i = 0; i < len; i++) {
                            _sndUrl.push(config.dataBasePath + dlaData[i].vocab_sound);
                            if (typeof dlaData[i].vocab_word === 'boolean') {
                                dlaData[i].vocab_word = dlaData[i].vocab_word.toString();
                            }
                            _vocabWordArr.push(dlaData[i].vocab_word.replace(/(\r\n|\n|\r)/gm, ""));
                            _vocabDefinArr.push(dlaData[i].vocab_definition.replace(/(\r\n|\n|\r)/gm, ""));
                        }
                    } else {
                        _sndUrl.push(config.dataBasePath + dlaData.vocab_sound);
                        if (typeof dlaData.vocab_word === 'boolean') {
                            dlaData.vocab_word = dlaData.vocab_word.toString();
                        }
                        _vocabWordArr.push(dlaData.vocab_word.replace(/(\r\n|\n|\r)/gm, ""));
                        _vocabDefinArr.push(dlaData.vocab_definition.replace(/(\r\n|\n|\r)/gm, ""));
                    }
                    helpers.loadResources(config.manifest.tiles, config, createTiles);
                });
            }

            function createTiles(tiles) {
                loader.show();
                soundsLoad();
            }

            function sndLoadComplete() {
                loader.show();
                helpers.renderTemplate(config, 'tiles', {
                    tiles: config.manifest.tiles
                }, function(elm) {
                    inputTxt = jq(elm).find(".input")[0];
                    defText = jq(elm).find(".deftext")[0];
                    corrText = jq(elm).find(".corrtext")[0];
                    incorrText = jq(elm).find(".incorrtext")[0];
                    tilesData = jq(elm);
                    tilesData.find("img").hide();
                    tilesData.hide();
                    setTimeout(function() {
                        callMe(lib = lib || {}, images = images || {}, cjs);
                        //leaving this here to serve as a marker for this method call's original location
                        //myInit();
                        tilesData.find("img").remove();
                    }, 1000);
                });
            }

            function callMe(lib, img, cjs) {

                var p;

                (lib.spellingbee = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { intro: 0, select: 1, robot: 2, stage: 3, definition: 4, corrected: 5 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_2 = function() {
                        this.mindy_mc.visible = false;
                        this.james_mc.visible = false;
                        this.mary_mc.visible = false;
                    }
                    this.frame_3 = function() {
                        this.mcInput.visible = true;
                        this.home_mc.visible = true;
                        this.mute_mc.visible = true;
                        this.getdefinition_mc.visible = true;
                        this.repeatword_mc.visible = true;
                    }
                    this.frame_4 = function() {
                        this.mcInput.visible = false;
                        this.home_mc.visible = false;
                        this.mute_mc.visible = false;
                        this.getdefinition_mc.visible = false;
                        this.repeatword_mc.visible = false;
                    }
                    this.frame_5 = function() {
                        this.mcInput.visible = false;
                        this.home_mc.visible = false;
                        this.mute_mc.visible = false;
                        this.getdefinition_mc.visible = false;
                        this.repeatword_mc.visible = false;
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5));

                    this.correct_txt_con = new lib.text_con();
                    this.correct_txt_con.setTransform(65, 86);

                    this.def_txt_con = new lib.text_con();
                    this.def_txt_con.setTransform(65, 59);

                    this.txt_con = new lib.text_con();
                    this.txt_con.setTransform(45, 25);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.txt_con }, { t: this.def_txt_con }, { t: this.correct_txt_con }] }).wait(6));

                    this.spacebar_mc2 = new lib.space_btn2();
                    this.spacebar_mc2.setTransform(296, 381);

                    this.instance = new lib.Bitmap11();
                    this.instance.setTransform(220, 382);

                    this.mcDef = new lib.mcDefinition();
                    this.mcDef.setTransform(20.5, 0);

                    this.spacebar_mc3 = new lib.space_btn3();
                    this.spacebar_mc3.setTransform(303.5, 381);

                    this.instance_1 = new lib.Bitmap9();
                    this.instance_1.setTransform(232, 384);

                    this.instance_2 = new lib.Bitmap10();
                    this.instance_2.setTransform(227.6, 48.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.mcDef }, { t: this.instance }, { t: this.spacebar_mc2 }] }, 4).to({ state: [{ t: this.mcDef }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.spacebar_mc3 }] }, 1).wait(1));

                    this.instance_3 = new lib.Bitmap6();
                    this.instance_3.setTransform(244.7, 12);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(4));

                    this.mute_mc = new lib.mute_mc();
                    this.mute_mc.setTransform(690.8, 381);

                    this.mary_mc = new lib.mary_master();
                    this.mary_mc.setTransform(565.5, 358.3);

                    this.james_mc = new lib.james_master();
                    this.james_mc.setTransform(202.3, 358.3);

                    this.mindy_mc = new lib.mindy_master();
                    this.mindy_mc.setTransform(381.2, 360.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.mindy_mc }, { t: this.james_mc }, { t: this.mary_mc }, { t: this.mute_mc }] }, 1).wait(5));

                    this.spacebar_mc0 = new lib.space_btn0();
                    this.spacebar_mc0.setTransform(315, 381);

                    this.tab_btn1 = new lib.tab_btn1();
                    this.tab_btn1.setTransform(57.7, 380);

                    this.instance_4 = new lib.Bitmap12();
                    this.instance_4.setTransform(-1.9, 377);

                    this.spacebar_mc1 = new lib.space_btn1();
                    this.spacebar_mc1.setTransform(78, 381);

                    this.instance_5 = new lib.Bitmap9();
                    this.instance_5.setTransform(6, 384);

                    this.instance_6 = new lib.Bitmap4();
                    this.instance_6.setTransform(22.8, 18);

                    this.robotRoot_mc = new lib.robot_master();
                    this.robotRoot_mc.setTransform(371.5, 214.7);

                    this.back_mc = new lib.stage_robot_mc();
                    this.back_mc.setTransform(372.5, 215, 1, 1, 0, 0, 0, 372.5, 215);

                    this.tab_btn2 = new lib.tab_btn2();
                    this.tab_btn2.setTransform(121.2, 380);

                    this.instance_7 = new lib.Bitmap13();
                    this.instance_7.setTransform(61, 383);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.instance_4 }, { t: this.tab_btn1 }, { t: this.spacebar_mc0 }] }, 1).to({ state: [{ t: this.back_mc }, { t: this.robotRoot_mc }, { t: this.instance_6 }, { t: this.instance_5 }, { t: this.spacebar_mc1 }] }, 1).to({ state: [{ t: this.instance_7 }, { t: this.tab_btn2 }] }, 1).to({ state: [] }, 1).wait(2));

                    this.home_mc = new lib.home_mc();
                    this.home_mc.setTransform(6.8, 381);
                    this.home_mc.visible = false;

                    this.getdefinition_mc = new lib.GetDefinitionOriginal();
                    this.getdefinition_mc.setTransform(47.1, 278.1);
                    this.getdefinition_mc.visible = false;

                    this.repeatword_mc = new lib.RepeatWordOriginal();
                    this.repeatword_mc.setTransform(514.8, 278.1);
                    this.repeatword_mc.visible = false;

                    this.mcInput = new lib.Symbol3();
                    this.mcInput.setTransform(14, -89.9);
                    this.mcInput.visible = false;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.mcInput }, { t: this.repeatword_mc }, { t: this.getdefinition_mc }, { t: this.home_mc }] }).wait(6));

                    this.begin_movie = new lib.WhiteOverlayText();

                    this.timeline.addTween(cjs.Tween.get(this.begin_movie, { override: true }).to({ _off: true }, 1).wait(5));

                    this.instance_8 = new lib.GradiantOriginal();
                    this.instance_8.setTransform(-0.1, 355.3);
                    this.instance_8._off = true;

                    this.timeline.addTween(cjs.Tween.get(this.instance_8, { override: true }).wait(1).to({ _off: false }, 0).wait(5));

                    this.stage_mc = new lib.stage_bees();

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.stage_mc }] }).wait(6));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.Bitmap1 = function() {
                    this.initialize(img.Bitmap1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.Bitmap10 = function() {
                    this.initialize(img.Bitmap10);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 290, 31);

                (lib.Bitmap11 = function() {
                    this.initialize(img.Bitmap11);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 304, 46);

                (lib.Bitmap12 = function() {
                    this.initialize(img.Bitmap12);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 607, 58);

                (lib.Bitmap13 = function() {
                    this.initialize(img.Bitmap13);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 272, 44);

                (lib.Bitmap2 = function() {
                    this.initialize(img.Bitmap2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.Bitmap3 = function() {
                    this.initialize(img.Bitmap3);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 80);

                (lib.Bitmap4 = function() {
                    this.initialize(img.Bitmap4);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 261, 45);

                (lib.Bitmap5 = function() {
                    this.initialize(img.Bitmap5);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 284, 24);

                (lib.Bitmap6 = function() {
                    this.initialize(img.Bitmap6);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 261, 45);

                (lib.Bitmap7 = function() {
                    this.initialize(img.Bitmap7);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 138, 27);

                (lib.Bitmap8 = function() {
                    this.initialize(img.Bitmap8);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 88, 91);

                (lib.Bitmap9 = function() {
                    this.initialize(img.Bitmap9);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 278, 43);

                (lib.butter01 = function() {
                    this.initialize(img.butter01);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 22, 22);

                (lib.butter02 = function() {
                    this.initialize(img.butter02);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 22, 22);

                (lib.getDefinition = function() {
                    this.initialize(img.getDefinition);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 170, 47);

                (lib.home = function() {
                    this.initialize(img.home);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 49, 47);

                (lib.james_blink = function() {
                    this.initialize(img.james_blink);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_body = function() {
                    this.initialize(img.james_body);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 75, 102);

                (lib.james_body_1 = function() {
                    this.initialize(img.james_body_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 75, 102);

                (lib.james_emptyhead = function() {
                    this.initialize(img.james_emptyhead);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_frown = function() {
                    this.initialize(img.james_frown);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_glasses = function() {
                    this.initialize(img.james_glasses);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_glasses2 = function() {
                    this.initialize(img.james_glasses2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_head = function() {
                    this.initialize(img.james_head);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_head_1 = function() {
                    this.initialize(img.james_head_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_nakedhead = function() {
                    this.initialize(img.james_nakedhead);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_oh = function() {
                    this.initialize(img.james_oh);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_smile = function() {
                    this.initialize(img.james_smile);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_smile_1 = function() {
                    this.initialize(img.james_smile_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_striaght = function() {
                    this.initialize(img.james_striaght);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_wings01 = function() {
                    this.initialize(img.james_wings01);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 147, 93);

                (lib.james_wings01_1 = function() {
                    this.initialize(img.james_wings01_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 147, 93);

                (lib.key_space = function() {
                    this.initialize(img.key_space);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 119, 47);

                (lib.light = function() {
                    this.initialize(img.light);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.mary_blink = function() {
                    this.initialize(img.mary_blink);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_blink_1 = function() {
                    this.initialize(img.mary_blink_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_body = function() {
                    this.initialize(img.mary_body);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 33, 32);

                (lib.mary_body_1 = function() {
                    this.initialize(img.mary_body_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 33, 32);

                (lib.mary_head = function() {
                    this.initialize(img.mary_head);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_head_1 = function() {
                    this.initialize(img.mary_head_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_head1 = function() {
                    this.initialize(img.mary_head1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 108, 112);

                (lib.mary_head2 = function() {
                    this.initialize(img.mary_head2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 108, 106);

                (lib.mary_mouth = function() {
                    this.initialize(img.mary_mouth);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 30, 16);

                (lib.mary_skirt = function() {
                    this.initialize(img.mary_skirt);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 50, 55);

                (lib.mary_skirt_1 = function() {
                    this.initialize(img.mary_skirt_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 50, 55);

                (lib.mary_smile = function() {
                    this.initialize(img.mary_smile);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_smile_1 = function() {
                    this.initialize(img.mary_smile_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_straight = function() {
                    this.initialize(img.mary_straight);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_straight_1 = function() {
                    this.initialize(img.mary_straight_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mary_wings01 = function() {
                    this.initialize(img.mary_wings01);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 64, 50);

                (lib.mary_wings01_1 = function() {
                    this.initialize(img.mary_wings01_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 64, 50);

                (lib.mary_yes = function() {
                    this.initialize(img.mary_yes);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 105);

                (lib.mindy_blink = function() {
                    this.initialize(img.mindy_blink);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_body = function() {
                    this.initialize(img.mindy_body);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 40, 76);

                (lib.mindy_body_1 = function() {
                    this.initialize(img.mindy_body_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 40, 76);

                (lib.mindy_frown = function() {
                    this.initialize(img.mindy_frown);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_head = function() {
                    this.initialize(img.mindy_head);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_head_1 = function() {
                    this.initialize(img.mindy_head_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_head_down1 = function() {
                    this.initialize(img.mindy_head_down1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_head_down2 = function() {
                    this.initialize(img.mindy_head_down2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_mouth = function() {
                    this.initialize(img.mindy_mouth);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 31, 14);

                (lib.mindy_ponytail_left = function() {
                    this.initialize(img.mindy_ponytail_left);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 74, 106);

                (lib.mindy_ponytail_left_1 = function() {
                    this.initialize(img.mindy_ponytail_left_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 74, 106);

                (lib.mindy_ponytail_right = function() {
                    this.initialize(img.mindy_ponytail_right);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 72, 111);

                (lib.mindy_ponytail_right_1 = function() {
                    this.initialize(img.mindy_ponytail_right_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 72, 111);

                (lib.mindy_sad = function() {
                    this.initialize(img.mindy_sad);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_smile = function() {
                    this.initialize(img.mindy_smile);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_smile_1 = function() {
                    this.initialize(img.mindy_smile_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_straight = function() {
                    this.initialize(img.mindy_straight);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 106, 90);

                (lib.mindy_wings03 = function() {
                    this.initialize(img.mindy_wings03);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 35);

                (lib.mindy_wings03_1 = function() {
                    this.initialize(img.mindy_wings03_1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 89, 35);

                (lib.nohivebg = function() {
                    this.initialize(img.nohivebg);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.page_3 = function() {
                    this.initialize(img.page_3);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 694, 223);

                (lib.page_5 = function() {
                    this.initialize(img.page_5);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 704, 398);

                (lib.repeat = function() {
                    this.initialize(img.repeat);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 170, 47);

                (lib.robot_body = function() {
                    this.initialize(img.robot_body);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 83, 178);

                (lib.robot_body2 = function() {
                    this.initialize(img.robot_body2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 80, 111);

                (lib.robot_head1 = function() {
                    this.initialize(img.robot_head1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 134, 139);

                (lib.robot_head2 = function() {
                    this.initialize(img.robot_head2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 134, 139);

                (lib.robot_head3 = function() {
                    this.initialize(img.robot_head3);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 134, 139);

                (lib.robot_leg = function() {
                    this.initialize(img.robot_leg);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 88, 91);

                (lib.robot_light = function() {
                    this.initialize(img.robot_light);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 134, 139);

                (lib.robot_mouth = function() {
                    this.initialize(img.robot_mouth);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 134, 139);

                (lib.robot_paper1 = function() {
                    this.initialize(img.robot_paper1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 72, 76);

                (lib.robot_paper2 = function() {
                    this.initialize(img.robot_paper2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 72, 76);

                (lib.robot_paper3 = function() {
                    this.initialize(img.robot_paper3);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 72, 76);

                (lib.stage_robot = function() {
                    this.initialize(img.stage_robot);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.tab_button = function() {
                    this.initialize(img.tab_button);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 83, 54);

                (lib.volume_button = function() {
                    this.initialize(img.volume_button);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 49, 47);

                (lib.volume_button_muted = function() {
                    this.initialize(img.volume_button_muted);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 49, 47);

                (lib.worm1 = function() {
                    this.initialize(img.worm1);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 52, 27);

                (lib.worm2 = function() {
                    this.initialize(img.worm2);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 52, 27);

                (lib.worm3 = function() {
                    this.initialize(img.worm3);
                }).prototype = p = new cjs.Bitmap();
                p.nominalBounds = new cjs.Rectangle(0, 0, 52, 27);

                (lib.text_bdr = function() {
                    this.initialize();
                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#CAFFB4").ss(2, 1, 1).p("EAxmADNMhjLAAAIAAmYMBjLAAAg");
                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-317.4, -20.4, 635, 41);

                (lib.mc_yellow = function() {
                    this.initialize();
                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("#FFFF1D").s().p("ApbD0IAAnnIS3AAIAAHng");
                    this.shape.setTransform(59.5, 23.5);

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 121, 49);

                (lib.worm = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.worm1();
                    this.instance.setTransform(-22.6, -5.4);

                    this.instance_1 = new lib.worm2();
                    this.instance_1.setTransform(-22.6, -5.4);

                    this.instance_2 = new lib.worm3();
                    this.instance_2.setTransform(-22.6, -5.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_2 }] }, 4).to({ state: [{ t: this.instance_1 }] }, 4).wait(4));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-22.6, -5.4, 52, 27);

                (lib.butterfly = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.butter01();

                    this.instance_1 = new lib.butter02();

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 2).wait(2));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 22, 22);

                (lib.robot_legs = function() {
                    this.initialize();

                    this.instance = new lib.robot_leg();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 88, 91);

                (lib.mouth = function() {
                    this.initialize();

                    this.instance = new lib.robot_mouth();
                    this.instance.setTransform(308.1, 29.5);

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(308.1, 29.5, 134, 139);

                (lib.lightbulb = function() {
                    this.initialize();

                    this.instance = new lib.robot_light();
                    this.instance.setTransform(-22, 5.5);

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-22, 5.5, 134, 139);

                (lib.body = function() {
                    this.initialize();

                    this.instance = new lib.robot_body2();
                    this.instance.setTransform(6.9, 2);

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(6.9, 2, 80, 111);

                (lib.robot_torso = function() {
                    this.initialize();

                    this.instance = new lib.robot_body2();
                    this.instance.setTransform(6.4, 2.5);

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(6.4, 2.5, 80, 111);

                (lib.robot_legs_1 = function() {
                    this.initialize();

                    this.instance_1 = new lib.Bitmap8();

                    this.addChild(this.instance_1);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 88, 91);

                (lib.robot_talk2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { play: 0 });

                    this.frame_19 = function() {
                        this.gotoAndPlay("play");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).wait(19).call(this.frame_19));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#646464").ss(1.5, 1, 1).p("AA0gLQgGALgLAAQgBAAgCAAQgFABgEgBQgDAAgDAAQgGgBgGAAQgBAAgCgBQgGgBgHgFQgCgBgCgCQgBgCgCgCQgDgDgEgDQgBgBgDAAAAoACQgHAIgJAHQgDACgDAAQgGACgFABQgIADgJgCQgDgBgCAAQgCAAgCgBQgGgCgFgDQgDgCgDAAQgBAAgCgBQgEgBgDgCQgCgBgBAAQgBgBgBgB");
                    this.shape.setTransform(58.5, -0.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).wait(20));

                    this.instance = new lib.robot_paper1();
                    this.instance.setTransform(0.5, -36.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).wait(20));

                    this.instance_1 = new lib.robot_light();
                    this.instance_1.setTransform(-64.4, -185.9);

                    this.instance_2 = new lib.robot_mouth();
                    this.instance_2.setTransform(-64.4, -185.9);

                    this.instance_3 = new lib.robot_head1();
                    this.instance_3.setTransform(-64.4, -185.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }).to({ state: [{ t: this.instance_3 }, { t: this.instance_1 }] }, 6).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_3 }, { t: this.instance_1 }] }, 5).wait(5));

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEqlmQA2ANBPASQA5ARAlAhQBvBlgUCCAmhklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJApeEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCAphEvIgEAMIAGAF");
                    this.shape_1.setTransform(2.1, -2.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }] }).to({ state: [{ t: this.shape_1 }] }, 6).to({ state: [{ t: this.shape_1 }] }, 4).wait(10));

                    this.instance_4 = new lib.robot_body();
                    this.instance_4.setTransform(-41.6, -71.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(20));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-64.4, -185.9, 137, 292.9);

                (lib.robot_talk = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { f1: 0, "play": 1 });

                    this.frame_39 = function() {
                        this.parent.gotoAndStop("f3");
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).wait(39).call(this.frame_39));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#646464").ss(1.5, 1, 1).p("AA0gLQgGALgLAAQgBAAgCAAQgFABgEgBQgDAAgDAAQgGgBgGAAQgBAAgCgBQgGgBgHgFQgCgBgCgCQgBgCgCgCQgDgDgEgDQgBgBgDAAAAoACQgHAIgJAHQgDACgDAAQgGACgFABQgIADgJgCQgDgBgCAAQgCAAgCgBQgGgCgFgDQgDgCgDAAQgBAAgCgBQgEgBgDgCQgCgBgBAAQgBgBgBgB");
                    this.shape.setTransform(58.5, -0.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).wait(40));

                    this.instance = new lib.robot_paper1();
                    this.instance.setTransform(0.5, -36.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).wait(40));

                    this.instance_1 = new lib.robot_light();
                    this.instance_1.setTransform(-64.4, -185.9);

                    this.instance_2 = new lib.robot_mouth();
                    this.instance_2.setTransform(-64.4, -185.9);

                    this.instance_3 = new lib.robot_head1();
                    this.instance_3.setTransform(-64.4, -185.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }).to({ state: [{ t: this.instance_3 }, { t: this.instance_1 }] }, 6).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_3 }, { t: this.instance_1 }] }, 5).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_3 }, { t: this.instance_1 }] }, 5).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_3 }, { t: this.instance_1 }] }, 2).wait(10));

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEqlmQA2ANBPASQA5ARAlAhQBvBlgUCCAmhklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJApeEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCAphEvIgEAMIAGAF");
                    this.shape_1.setTransform(2.1, -2.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }] }).to({ state: [{ t: this.shape_1 }] }, 6).to({ state: [{ t: this.shape_1 }] }, 4).wait(30));

                    this.instance_4 = new lib.robot_body();
                    this.instance_4.setTransform(-41.6, -71.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(40));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-64.4, -185.9, 137, 292.9);

                (lib.robot_static = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#646464").ss(1.5, 1, 1).p("AA0gLQgGALgLAAQgBAAgCAAQgFABgEgBQgDAAgDAAQgGgBgGAAQgBAAgCgBQgGgBgHgFQgCgBgCgCQgBgCgCgCQgDgDgEgDQgBgBgDAAAAoACQgHAIgJAHQgDACgDAAQgGACgFABQgIADgJgCQgDgBgCAAQgCAAgCgBQgGgCgFgDQgDgCgDAAQgBAAgCgBQgEgBgDgCQgCgBgBAAQgBgBgBgB");
                    this.shape.setTransform(58.5, -0.3);

                    this.instance = new lib.robot_paper1();
                    this.instance.setTransform(0.5, -36.9);

                    this.instance_1 = new lib.robot_head1();
                    this.instance_1.setTransform(-64.4, -185.9);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEqlmQA2ANBPASQA5ARAlAhQBvBlgUCCAmhklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJApeEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCAphEvIgEAMIAGAF");
                    this.shape_1.setTransform(2.1, -2.2);

                    this.instance_2 = new lib.robot_body();
                    this.instance_2.setTransform(-41.6, -71.1);

                    this.addChild(this.instance_2, this.shape_1, this.instance_1, this.instance, this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-64.4, -185.9, 137, 292.9);

                (lib.robot_lookdown = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play": 1 });

                    this.frame_25 = function() {
                        this.parent.gotoAndStop("f2");
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).wait(25).call(this.frame_25));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#646464").ss(1.5, 1, 1).p("AA0gLQgGALgLAAQgBAAgCAAQgFABgEgBQgDAAgDAAQgGgBgGAAQgBAAgCgBQgGgBgHgFQgCgBgCgCQgBgCgCgCQgDgDgEgDQgBgBgDAAAAoACQgHAIgJAHQgDACgDAAQgGACgFABQgIADgJgCQgDgBgCAAQgCAAgCgBQgGgCgFgDQgDgCgDAAQgBAAgCgBQgEgBgDgCQgCgBgBAAQgBgBgBgB");
                    this.shape.setTransform(58.5, -0.3);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#646464").ss(1.5, 1, 1).p("Ag5AgQADAFAJAAQAHAAAGgBQAOgDAQgCQALgCAKgJQACgCABgCQAPgRAMgVQgIAIgMACQgDABgDACQgDACgEAAQgSADgUABQgJABgHgDQgEgDgGgCQgFgCAGgCAA6gkQgDAIgGAG");
                    this.shape_1.setTransform(57, -6.4);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#646464").ss(1.5, 1, 1).p("ABJgdQgaABgaAAQgPAAgLAFQgGACgGABQgDABgCAAQgDABgCAAQgIABgHABQgEAAgEACQgCABgDAAQgHABgIgBQgBAAgBgCABEgYQgZAQgbAOQgGAEgHAAQgDAAgCACQgGAEgHACQgLABgIAHQgCACgCACQgCABgBgB");
                    this.shape_2.setTransform(55, -6.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 4).to({ state: [{ t: this.shape_2 }] }, 4).to({ state: [{ t: this.shape_1 }] }, 11).to({ state: [{ t: this.shape }] }, 4).wait(3));

                    this.instance = new lib.robot_paper1();
                    this.instance.setTransform(0.5, -36.9);

                    this.instance_1 = new lib.robot_paper2();
                    this.instance_1.setTransform(0.5, -39.9);

                    this.instance_2 = new lib.robot_paper3();
                    this.instance_2.setTransform(-0.5, -39.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 4).to({ state: [{ t: this.instance_2 }] }, 4).to({ state: [{ t: this.instance_1 }] }, 11).to({ state: [{ t: this.instance }] }, 4).wait(3));

                    this.instance_3 = new lib.robot_head1();
                    this.instance_3.setTransform(-64.4, -185.9);

                    this.instance_4 = new lib.robot_head2();
                    this.instance_4.setTransform(-64.4, -185.9);

                    this.instance_5 = new lib.robot_head3();
                    this.instance_5.setTransform(-64.4, -185.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).to({ state: [{ t: this.instance_4 }] }, 4).to({ state: [{ t: this.instance_5 }] }, 4).to({ state: [{ t: this.instance_4 }] }, 11).to({ state: [{ t: this.instance_3 }] }, 4).wait(3));

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEqlmQA2ANBPASQA5ARAlAhQBvBlgUCCAmhklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJApeEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCAphEvIgEAMIAGAF");
                    this.shape_3.setTransform(2.1, -2.2);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEllmQA2ANBPASQAdAJBBApQClBshgB2AmmklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJApjEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCApmEvIgEAMIAGAF");
                    this.shape_4.setTransform(2.6, -2.2);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEjlmQA2ANBPASQAdAJBBApQCqBvhgBkAmoklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJAplEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCApoEvIgEAMIAGAF");
                    this.shape_5.setTransform(2.8, -2.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 4).to({ state: [{ t: this.shape_5 }] }, 4).to({ state: [{ t: this.shape_4 }] }, 11).to({ state: [{ t: this.shape_3 }] }, 4).wait(3));

                    this.instance_6 = new lib.robot_body();
                    this.instance_6.setTransform(-41.6, -71.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(26));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-64.4, -185.9, 137, 292.9);

                (lib.mindy_h = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("#FFFF1D").s().p("AvaTwQgGAAgEgEQgFgFAAgGMAAAgnBQAAgGAFgFQAEgEAGAAIe1AAQAGAAAEAEQAFAFAAAGMAAAAnBQAAAGgFAFQgEAEgGAAgAvLTSIeXAAMAAAgmjI+XAAg");

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-100.2, -126.4, 200.5, 253);

                (lib.mindy_mouthG = function() {
                    this.initialize();

                    this.instance = new lib.mindy_mouth();
                    this.instance.setTransform(0, 0, 0.99, 1.011);

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 30.7, 14.2);

                (lib.mary_h = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("#FFFF1D").s().p("AnmW2QgGAAgEgFQgFgEAAgGMAAAgtNQAAgGAFgEQAEgFAGAAIPNAAQAGAAAEAFQAFAEAAAGMAAAAtNQAAAGgFAEQgEAFgGAAgAnXWYIOvAAMAAAgsvIuvAAg");

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-50.1, -146.2, 100.5, 292.5);

                (lib.mary_mouthG = function() {
                    this.initialize();

                    this.instance = new lib.mary_mouth();
                    this.instance.setTransform(0, 0, 0.998, 1.019);

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 30, 16.3);

                (lib.mary_blink_2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0 });

                    this.frame_165 = function() {
                        this.gotoAndPlay("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).wait(165).call(this.frame_165));

                    this.instance = new lib.mary_blink_1();

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.instance }] }, 44).to({ state: [] }, 4).to({ state: [{ t: this.instance }] }, 114).wait(4));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);

                (lib.james_h = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("#FFFF1D").s().p("ArRWdQgGAAgEgFQgFgEAAgGMAAAgsbQAAgGAFgEQAEgFAGAAIWjAAQAGAAAEAFQAFAEAAAGMAAAAsbQAAAGgFAEQgEAFgGAAgArCV/IWFAAMAAAgr9I2FAAg");

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-73.7, -143.7, 147.5, 287.5);

                (lib.james_wglasses = function() {
                    this.initialize();

                    this.instance = new lib.james_emptyhead();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_mouthG = function() {
                    this.initialize();

                    this.instance = new lib.james_oh();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.james_glasses1 = function() {
                    this.initialize();

                    this.instance = new lib.james_glasses2();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 58, 73);

                (lib.btn_htr = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("#FFFF1D").s().p("Aj4DtIAAnZIHxAAIAAHZg");

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-24.9, -23.7, 49.9, 47.5);

                (lib.text_con = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("rgba(102,204,51,0.008)").s().p("AgJAJIAAgSIASAAIAAASg");
                    this.shape.setTransform(1, 1);

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 2, 2);

                (lib.stage_robot_mc = function() {
                    this.initialize();

                    this.instance = new lib.stage_robot();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.stage_bees = function() {
                    this.initialize();

                    this.instance = new lib.Bitmap2();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);


                (lib.shadow = function() {
                    this.initialize();

                    this.instance = new lib.Bitmap7();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 138, 27);


                (lib.mcDefinition = function() {
                    this.initialize();

                    this.instance = new lib.page_5();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 704, 398);

                (lib.inst_txt = function() {
                    this.initialize();

                    this.instance = new lib.Bitmap5();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 284, 24);

                (lib.GradiantOriginal = function() {
                    this.initialize();

                    this.instance = new lib.Bitmap3();

                    this.addChild(this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 80);

                (lib.dum_btn = function() {
                    this.initialize();

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f("#FFFFFF").s().p("AlxFOIAAqcILiAAIAAKcg");
                    this.shape.setTransform(37, 33.5);

                    this.addChild(this.shape);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 74, 67);

                (lib.wormsquirm = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.worm();
                    this.instance.setTransform(353, 168.5, 1, 1, 0, 0, 180, 3.4, 8);

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).wait(4).to({ skewX: -0.3, skewY: 179.5, x: 341.1, y: 164.9 }, 0).wait(4).to({ skewX: -0.8, skewY: 179, x: 329.2, y: 161.3 }, 0).wait(4).to({ skewX: -1.3, skewY: 178.5, x: 317.3, y: 157.8 }, 0).wait(4).to({ skewX: -1.6, skewY: 178.2, x: 308.2, y: 155.4 }, 0).wait(4).to({ regY: 7.9, skewX: -2.1, skewY: 177.7, x: 296.2, y: 152.1 }, 0).wait(4).to({ regX: 3.5, regY: 8, scaleX: 1, scaleY: 1, skewX: -2.6, skewY: 177.2, x: 284, y: 149 }, 0).wait(4).to({ regY: 7.9, skewX: -3.1, skewY: 176.7, x: 271.9, y: 145.9 }, 0).wait(4).to({ regY: 8, skewX: -3.6, skewY: 176.2, x: 259.7, y: 143.2 }, 0).wait(4).to({ skewX: -4.1, skewY: 175.7, x: 247.5, y: 140.3 }, 0).wait(4).to({ regX: 3.6, scaleX: 1, scaleY: 1, skewX: -4.6, skewY: 175.2, x: 235.2, y: 137.7 }, 0).wait(4).to({ skewX: -5.1, skewY: 174.7, x: 222.9, y: 135.2 }, 0).wait(4).to({ regY: 8.1, skewX: -5.6, skewY: 174.2, x: 210.6, y: 132.9 }, 0).wait(4).to({ skewX: -6.1, skewY: 173.7, x: 198.3, y: 130.7 }, 0).wait(4).to({ regY: 8, scaleX: 1, scaleY: 1, skewX: -6.6, skewY: 173.2, x: 185.9, y: 128.4 }, 0).wait(4).to({ skewX: -7.1, skewY: 172.7, x: 173.5, y: 126.4 }, 0).wait(4).to({ regY: 8.2, scaleX: 1, scaleY: 1, skewX: -7.6, skewY: 172.2, x: 161.2, y: 124.8 }, 0).wait(4).to({ regX: 3.5, regY: 8.1, skewX: -8.1, skewY: 171.7, x: 148.8, y: 123 }, 0).wait(4).to({ skewX: -8.6, skewY: 171.2, x: 136.5, y: 121.3 }, 0).wait(4).to({ scaleX: 1, scaleY: 1, skewX: -9.1, skewY: 170.7, x: 124, y: 119.9 }, 0).wait(4).to({ regX: 3.6, regY: 8, skewX: -9.6, skewY: 170.2, x: 111.5, y: 118.4 }, 0).wait(4).to({ regX: 3.5, scaleX: 0.99, scaleY: 0.99, skewX: -10.1, skewY: 169.7, x: 99.1, y: 117.2 }, 0).wait(4).to({ regY: 8.1, skewX: -10.6, skewY: 169.2, x: 86.6, y: 116.2 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -11.1, skewY: 168.7, x: 74.2, y: 115.2 }, 0).wait(4).to({ regX: 3.6, skewX: -11.6, skewY: 168.2, x: 61.6, y: 114.3 }, 0).wait(4).to({ regX: 3.5, scaleX: 0.99, scaleY: 0.99, skewX: -12.1, skewY: 167.7, x: 49, y: 113.5 }, 0).wait(4).to({ skewX: -12.6, skewY: 167.2, x: 36.5, y: 112.9 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -13.1, skewY: 166.7, x: 24, y: 112.4 }, 0).wait(4).to({ skewX: -13.6, skewY: 166.2, x: 11.5, y: 112.1 }, 0).wait(4).to({ regX: 3.4, scaleX: 0.99, scaleY: 0.99, skewX: -14.1, skewY: 165.7, x: -0.7, y: 111.7 }, 0).wait(4).to({ skewX: -14.6, skewY: 165.2, x: -13.3, y: 111.6 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -15.1, skewY: 164.7, x: -25.9 }, 0).wait(4).to({ regY: 8.2, skewX: -15.6, skewY: 164.2, x: -38.4, y: 111.8 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -16.1, skewY: 163.7, x: -50.9, y: 112 }, 0).wait(4).to({ regX: 3.3, scaleX: 0.99, scaleY: 0.99, skewX: -16.6, skewY: 163.2, x: -63.3, y: 112.2 }, 0).wait(4).to({ skewX: -17.1, skewY: 162.7, x: -75.9, y: 112.7 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -17.6, skewY: 162.2, x: -88.4, y: 113.2 }, 0).wait(4).to({ skewX: -18.3, skewY: 161.5, x: -101.1, y: 113.9 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -18.9, skewY: 160.9, x: -113.5, y: 114.7 }, 0).wait(4).to({ skewX: -19.6, skewY: 160.2, x: -126, y: 115.6 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, skewX: -20.1, skewY: 159.7, x: -138.5, y: 116.6 }, 0).wait(4).to({ skewX: -20.8, skewY: 159, x: -151.1, y: 117.8 }, 0).wait(4).to({ regY: 8.3, skewX: -21.4, skewY: 158.4, x: -163.6, y: 119.1 }, 0).wait(4).to({ regY: 8.2, scaleX: 0.98, scaleY: 0.98, skewX: -22.1, skewY: 157.7, x: -176, y: 120.3 }, 0).wait(4).to({ regY: 8.1, skewX: -22.6, skewY: 157.2, x: -188.6, y: 121.7 }, 0).wait(4).to({ regY: 8.2, skewX: -23.3, skewY: 156.5, x: -200.9, y: 123.3 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, skewX: -23.9, skewY: 155.9, x: -213.3, y: 124.9 }, 0).wait(4).to({ skewX: -24.6, skewY: 155.2, x: -225.8, y: 126.6 }, 0).wait(4).to({ skewX: -25.3, skewY: 154.5, x: -238.3, y: 128.4 }, 0).wait(4).to({ regY: 8.3, skewX: -25.9, skewY: 153.9, x: -250.6, y: 130.6 }, 0).wait(4).to({ skewX: -26.6, skewY: 153.2, x: -262.9, y: 132.6 }, 0).wait(4).to({ skewX: -27.3, skewY: 152.5, x: -275.3, y: 134.6 }, 0).wait(4).to({ skewX: -28.1, skewY: 151.7, x: -287.6, y: 136.9 }, 0).wait(4).to({ skewX: -28.8, skewY: 151, x: -299.9, y: 139.2 }, 0).wait(4).to({ skewX: -29.6, skewY: 150.2, x: -312.1, y: 141.7 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, skewX: -30.2, skewY: 149.6, x: -324.4, y: 144.3 }, 0).wait(4).to({ skewX: -30.9, skewY: 148.9, x: -336.6, y: 146.9 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, skewX: -31.6, skewY: 148.2, x: -348.9, y: 149.6 }, 0).wait(4).to({ regX: 3.4, scaleX: 0.99, scaleY: 0.99, skewX: -32.4, skewY: 147.4, x: -361.1, y: 152.5 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -33.1, skewY: 146.7, x: -373.3, y: 155.3 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -33.9, skewY: 145.9, x: -385.5, y: 158.3 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, skewX: -34.4, skewY: 145.4, x: -397.6, y: 161.3 }, 0).wait(4).to({ regX: 3.3, scaleX: 0.99, scaleY: 0.99, skewX: -35.1, skewY: 144.7, x: -409.7, y: 164.4 }, 0).wait(4).to({ regX: 3.4, scaleX: 1, scaleY: 1, skewX: -35.9, skewY: 143.9, x: -422, y: 167.8 }, 0).to({ _off: true }, 4).wait(84).to({ regY: 8, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: -425, y: 168.5, _off: false }, 0).wait(4).to({ rotation: 0.5, x: -413.1, y: 164.9 }, 0).wait(4).to({ rotation: 1, x: -401.2, y: 161.3 }, 0).wait(4).to({ rotation: 1.5, x: -389.2, y: 157.8 }, 0).wait(4).to({ rotation: 1.8, x: -380.2, y: 155.4 }, 0).wait(4).to({ regY: 7.9, rotation: 2.3, x: -368.2, y: 152.1 }, 0).wait(4).to({ regX: 3.5, regY: 8, scaleX: 1, scaleY: 1, rotation: 2.8, x: -356, y: 149 }, 0).wait(4).to({ regY: 7.9, rotation: 3.3, x: -343.8, y: 145.9 }, 0).wait(4).to({ regY: 8, rotation: 3.8, x: -331.7, y: 143.2 }, 0).wait(4).to({ rotation: 4.3, x: -319.4, y: 140.3 }, 0).wait(4).to({ regX: 3.6, scaleX: 1, scaleY: 1, rotation: 4.8, x: -307.1, y: 137.7 }, 0).wait(4).to({ rotation: 5.3, x: -294.8, y: 135.2 }, 0).wait(4).to({ regY: 8.1, rotation: 5.8, x: -282.6, y: 132.9 }, 0).wait(4).to({ rotation: 6.3, x: -270.3, y: 130.7 }, 0).wait(4).to({ regY: 8, scaleX: 1, scaleY: 1, rotation: 6.8, x: -257.9, y: 128.4 }, 0).wait(4).to({ rotation: 7.3, x: -245.5, y: 126.4 }, 0).wait(4).to({ regY: 8.2, scaleX: 1, scaleY: 1, rotation: 7.8, x: -233.1, y: 124.8 }, 0).wait(4).to({ regX: 3.5, regY: 8.1, rotation: 8.3, x: -220.8, y: 123 }, 0).wait(4).to({ rotation: 8.8, x: -208.4, y: 121.3 }, 0).wait(4).to({ scaleX: 1, scaleY: 1, rotation: 9.3, x: -196, y: 119.9 }, 0).wait(4).to({ regX: 3.6, regY: 8, rotation: 9.8, x: -183.4, y: 118.4 }, 0).wait(4).to({ regX: 3.5, scaleX: 0.99, scaleY: 0.99, rotation: 10.3, x: -171, y: 117.2 }, 0).wait(4).to({ regY: 8.1, rotation: 10.8, x: -158.6, y: 116.2 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 11.3, x: -146.1, y: 115.2 }, 0).wait(4).to({ regX: 3.6, rotation: 11.8, x: -133.5, y: 114.3 }, 0).wait(4).to({ regX: 3.5, scaleX: 0.99, scaleY: 0.99, rotation: 12.3, x: -121, y: 113.5 }, 0).wait(4).to({ rotation: 12.8, x: -108.5, y: 112.9 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 13.3, x: -95.9, y: 112.4 }, 0).wait(4).to({ rotation: 13.8, x: -83.4, y: 112.1 }, 0).wait(4).to({ regX: 3.4, scaleX: 0.99, scaleY: 0.99, rotation: 14.3, x: -71, y: 111.7 }, 0).wait(4).to({ rotation: 14.8, x: -58.5, y: 111.6 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 15.3, x: -45.9 }, 0).wait(4).to({ regY: 8.2, rotation: 15.8, x: -33.3, y: 111.8 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 16.3, x: -20.8, y: 112 }, 0).wait(4).to({ regX: 3.3, scaleX: 0.99, scaleY: 0.99, rotation: 16.8, x: -8.4, y: 112.2 }, 0).wait(4).to({ rotation: 17.3, x: 3.9, y: 112.7 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 17.8, x: 16.4, y: 113.2 }, 0).wait(4).to({ rotation: 18.5, x: 29.1, y: 113.9 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 19.1, x: 41.5, y: 114.7 }, 0).wait(4).to({ rotation: 19.8, x: 54, y: 115.6 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, rotation: 20.3, x: 66.5, y: 116.6 }, 0).wait(4).to({ rotation: 21, x: 79.1, y: 117.8 }, 0).wait(4).to({ regY: 8.3, rotation: 21.6, x: 91.6, y: 119.1 }, 0).wait(4).to({ regY: 8.2, scaleX: 0.98, scaleY: 0.98, rotation: 22.3, x: 104.1, y: 120.3 }, 0).wait(4).to({ regY: 8.1, rotation: 22.8, x: 116.6, y: 121.7 }, 0).wait(4).to({ regY: 8.2, rotation: 23.5, x: 128.9, y: 123.3 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, rotation: 24.1, x: 141.4, y: 124.9 }, 0).wait(4).to({ rotation: 24.8, x: 153.8, y: 126.6 }, 0).wait(4).to({ rotation: 25.5, x: 166.3, y: 128.4 }, 0).wait(4).to({ regY: 8.3, rotation: 26.1, x: 178.6, y: 130.6 }, 0).wait(4).to({ rotation: 26.8, x: 191, y: 132.6 }, 0).wait(4).to({ rotation: 27.5, x: 203.3, y: 134.6 }, 0).wait(4).to({ rotation: 28.3, x: 215.6, y: 136.9 }, 0).wait(4).to({ rotation: 29, x: 227.9, y: 139.2 }, 0).wait(4).to({ rotation: 29.8, x: 240.1, y: 141.7 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, rotation: 30.4, x: 252.5, y: 144.3 }, 0).wait(4).to({ rotation: 31.1, x: 264.7, y: 146.9 }, 0).wait(4).to({ scaleX: 0.98, scaleY: 0.98, rotation: 31.8, x: 276.9, y: 149.6 }, 0).wait(4).to({ regX: 3.4, scaleX: 0.99, scaleY: 0.99, rotation: 32.6, x: 289.2, y: 152.5 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 33.3, x: 301.3, y: 155.3 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 34.1, x: 313.6, y: 158.3 }, 0).wait(4).to({ scaleX: 0.99, scaleY: 0.99, rotation: 34.6, x: 325.6, y: 161.3 }, 0).wait(4).to({ regX: 3.3, scaleX: 0.99, scaleY: 0.99, rotation: 35.3, x: 337.7, y: 164.4 }, 0).wait(4).to({ regX: 3.4, scaleX: 1, scaleY: 1, rotation: 36.1, x: 350, y: 167.8 }, 0).to({ _off: true }, 4).wait(84));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(327.1, 155, 52, 27);

                (lib.flightofthebutterfly = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.butterfly();
                    this.instance.setTransform(-384.4, -115.9, 0.9, 0.9, 0, 0, 0, 11, 11);

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).wait(1).to({ rotation: 2.3, x: -382.8, y: -123.9 }, 0).wait(1).to({ rotation: 4.6, x: -378.5, y: -131.2 }, 0).wait(1).to({ regX: 11.1, rotation: 7, x: -372.3, y: -137.1 }, 0).wait(1).to({ regX: 11, regY: 11.1, rotation: 9.3, x: -365.3, y: -141.7 }, 0).wait(1).to({ regY: 11, scaleX: 0.9, scaleY: 0.9, rotation: 11.8, x: -357.9, y: -145.5 }, 0).wait(1).to({ rotation: 14.1, x: -350, y: -148.3 }, 0).wait(1).to({ rotation: 16.5, x: -341.9, y: -150.2 }, 0).wait(1).to({ rotation: 18.8, x: -333.6, y: -151 }, 0).wait(1).to({ regY: 11.1, rotation: 21.3, x: -325.2, y: -150.9 }, 0).wait(1).to({ regY: 11, rotation: 23.6, x: -316.9, y: -150.1 }, 0).wait(1).to({ rotation: 25.8, x: -308.8, y: -148.6 }, 0).wait(1).to({ rotation: 28.3, x: -301, y: -146.4 }, 0).wait(1).to({ rotation: 30.6, x: -293.4, y: -143.3 }, 0).wait(1).to({ rotation: 33.1, x: -286.3, y: -139.3 }, 0).wait(1).to({ rotation: 35.4, x: -279.9, y: -134 }, 0).wait(1).to({ regX: 11.1, rotation: 37.8, x: -274.5, y: -127.5 }, 0).wait(1).to({ regX: 11, rotation: 40.1, x: -270.7, y: -120.1 }, 0).wait(1).to({ rotation: 42.6, x: -268.1, y: -111.9 }, 0).wait(1).to({ rotation: 44.9, x: -266.8, y: -103.6 }, 0).wait(1).to({ rotation: 47.2, x: -266.6, y: -95.2 }, 0).wait(1).to({ rotation: 49.6, x: -267.1, y: -86.8 }, 0).wait(1).to({ regY: 11.1, rotation: 51.9, x: -267.8, y: -78.6 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 54.4, x: -268.3, y: -70.3 }, 0).wait(1).to({ regX: 11, rotation: 56.7, x: -268.6, y: -62 }, 0).wait(1).to({ regY: 11.1, rotation: 59.1, x: -268.7, y: -53.7 }, 0).wait(1).to({ regY: 10.9, rotation: 61.4, x: -268.5, y: -45.4 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 63.9, x: -268.2, y: -37 }, 0).wait(1).to({ regX: 11, rotation: 66.2, x: -267.6, y: -28.8 }, 0).wait(1).to({ regY: 11.1, rotation: 68.5, x: -266.8, y: -20.5 }, 0).wait(1).to({ regY: 11, rotation: 70.9, x: -265.8, y: -12.2 }, 0).wait(1).to({ scaleX: 0.85, scaleY: 0.85, rotation: 73.2, x: -264.5, y: -4 }, 0).wait(1).to({ scaleX: 0.85, scaleY: 0.85, rotation: 72.7, x: -262.9, y: 4 }, 0).wait(1).to({ rotation: 72.2, x: -261.3, y: 12.1 }, 0).wait(1).to({ rotation: 71.7, x: -259.3, y: 20.2 }, 0).wait(1).to({ regY: 11.1, rotation: 71.2, x: -257.2, y: 28.3 }, 0).wait(1).to({ regY: 11, rotation: 70.5, x: -254.1, y: 35.9 }, 0).wait(1).to({ rotation: 70, x: -249, y: 42.6 }, 0).wait(1).to({ regY: 11.1, rotation: 69.4, x: -242.6, y: 47.8 }, 0).wait(1).to({ regY: 11, rotation: 68.9, x: -235.8, y: 52.5 }, 0).wait(1).to({ rotation: 68.4, x: -228.8, y: 56.9 }, 0).wait(1).to({ rotation: 67.7, x: -221.5, y: 61 }, 0).wait(1).to({ regY: 11.1, rotation: 67.2, x: -214.3, y: 64.7 }, 0).wait(1).to({ rotation: 66.7, x: -206.6, y: 68 }, 0).wait(1).to({ regY: 11, rotation: 66.2, x: -198.8, y: 71 }, 0).wait(1).to({ rotation: 65.7, x: -190.8, y: 73.6 }, 0).wait(1).to({ rotation: 65, x: -182.8, y: 75.7 }, 0).wait(1).to({ rotation: 64.4, x: -174.5, y: 77.5 }, 0).wait(1).to({ rotation: 63.9, x: -166.4, y: 78.8 }, 0).wait(1).to({ regX: 11.1, rotation: 63.4, x: -158.1, y: 79.8 }, 0).wait(1).to({ regX: 11, rotation: 62.9, x: -149.8, y: 80.3 }, 0).wait(1).to({ regX: 11.1, rotation: 62.2, x: -141.4, y: 80.5 }, 0).wait(1).to({ regX: 11, rotation: 61.7, x: -133.1, y: 80.2 }, 0).wait(1).to({ regY: 11.1, rotation: 61.2, x: -125, y: 79.7 }, 0).wait(1).to({ regY: 11, rotation: 60.7, x: -116.9, y: 78.5 }, 0).wait(1).to({ rotation: 60.1, x: -108.9, y: 76.8 }, 0).wait(1).to({ rotation: 59.4, x: -101, y: 74.5 }, 0).wait(1).to({ rotation: 58.9, x: -93.2, y: 71.5 }, 0).wait(1).to({ regY: 11.1, rotation: 58.4, x: -85.8, y: 67.8 }, 0).wait(1).to({ regY: 11, rotation: 57.9, x: -78.8, y: 63.4 }, 0).wait(1).to({ rotation: 57.4, x: -72.2, y: 58.3 }, 0).wait(1).to({ regY: 11.1, rotation: 56.7, x: -66.2, y: 52.5 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 56.2, x: -60.8, y: 46.3 }, 0).wait(1).to({ regY: 10.9, scaleX: 0.85, scaleY: 0.85, rotation: 56.7, x: -56.2, y: 39.8 }, 0).wait(1).to({ regX: 11, regY: 11, rotation: 57.4, x: -52.3, y: 32.9 }, 0).wait(1).to({ regY: 10.9, rotation: 57.9, x: -48.8, y: 25.8 }, 0).wait(1).to({ rotation: 58.4, x: -45.7, y: 18.6 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 58.9, x: -43.5, y: 10.7 }, 0).wait(1).to({ regX: 11, scaleX: 0.85, rotation: 59.6, x: -41.8, y: 2.4 }, 0).wait(1).to({ regX: 11.1, regY: 10.9, scaleX: 0.85, rotation: 60.2, x: -40.4, y: -5.4 }, 0).wait(1).to({ regY: 11, scaleX: 0.85, scaleY: 0.85, rotation: 60.7, x: -39.5, y: -13.4 }, 0).wait(1).to({ regX: 11, rotation: 61.2, x: -38.5, y: -21.3 }, 0).wait(1).to({ regX: 11.1, regY: 10.9, rotation: 61.9, x: -37.6, y: -29.1 }, 0).wait(1).to({ rotation: 62.4, x: -36.8, y: -36.9 }, 0).wait(1).to({ regX: 11, rotation: 62.9, x: -35.9, y: -44.7 }, 0).wait(1).to({ regY: 11, rotation: 63.4, x: -34.9, y: -52.6 }, 0).wait(1).to({ rotation: 64.2, x: -33.6, y: -60.3 }, 0).wait(1).to({ regX: 11.1, regY: 10.9, rotation: 64.7, x: -32.1, y: -67.9 }, 0).wait(1).to({ regX: 11, rotation: 65.2, x: -30.6, y: -75.7 }, 0).wait(1).to({ rotation: 65.7, x: -28.8, y: -83.4 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 66.2, x: -27, y: -90.9 }, 0).wait(1).to({ rotation: 66.9, x: -25, y: -98.5 }, 0).wait(1).to({ rotation: 67.4, x: -22.8, y: -106 }, 0).wait(1).to({ rotation: 68, x: -20, y: -113.3 }, 0).wait(1).to({ rotation: 68.5, x: -16.3, y: -120.3 }, 0).wait(1).to({ regY: 10.9, rotation: 69.2, x: -11.8, y: -126.7 }, 0).wait(1).to({ regY: 11, rotation: 69.7, x: -6.7, y: -132.5 }, 0).wait(1).to({ regY: 10.9, rotation: 70.2, x: -0.6, y: -137.7 }, 0).wait(1).to({ rotation: 70.7, x: 5.9, y: -142 }, 0).wait(1).to({ regY: 11, rotation: 71.4, x: 12.9, y: -145.6 }, 0).wait(1).to({ regX: 11, regY: 10.9, rotation: 71.9, x: 20.3, y: -148.5 }, 0).wait(1).to({ rotation: 72.5, x: 27.8, y: -150.6 }, 0).wait(1).to({ regX: 11.1, rotation: 73, x: 35.6, y: -152 }, 0).wait(1).to({ regY: 11, rotation: 73.7, x: 43.5, y: -152.6 }, 0).wait(1).to({ regX: 11, regY: 10.9, rotation: 74.2, x: 51.5, y: -152.8 }, 0).wait(1).to({ regY: 11, rotation: 74.7, x: 59.4, y: -152.1 }, 0).wait(1).to({ rotation: 75.2, x: 67.3, y: -150.8 }, 0).wait(1).to({ rotation: 75.7, x: 74.9, y: -148.9 }, 0).wait(1).to({ regX: 11.1, regY: 10.9, rotation: 76.4, x: 82.5, y: -146.6 }, 0).wait(1).to({ regY: 11, rotation: 77, x: 89.9, y: -143.8 }, 0).wait(1).to({ regX: 11, rotation: 77.5, x: 97.1, y: -140.6 }, 0).wait(1).to({ rotation: 78, x: 104.3, y: -137.1 }, 0).wait(1).to({ regX: 11.1, rotation: 78.7, x: 111, y: -133.1 }, 0).wait(1).to({ regX: 11, regY: 10.9, rotation: 79.2, x: 117.4, y: -128.7 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 79.7, x: 123.2, y: -123.5 }, 0).wait(1).to({ regX: 11, regY: 10.9, scaleX: 0.7, scaleY: 0.7, rotation: 80.2, x: 128.5, y: -117.7 }, 0).wait(1).to({ rotation: 78.5, x: 132.8, y: -111.1 }, 0).wait(1).to({ regY: 11, rotation: 76.9, x: 136.2, y: -103.8 }, 0).wait(1).to({ regY: 10.9, rotation: 75.2, x: 138.7, y: -96.3 }, 0).wait(1).to({ regX: 10.9, rotation: 73.5, x: 140, y: -88.5 }, 0).wait(1).to({ regX: 11, regY: 11, rotation: 71.7, x: 140.5, y: -80.5 }, 0).wait(1).to({ scaleX: 0.7, scaleY: 0.7, rotation: 70, x: 140.3, y: -72.5 }, 0).wait(1).to({ regY: 10.9, rotation: 68.4, x: 139.4, y: -64.7 }, 0).wait(1).to({ rotation: 66.7, x: 137.9, y: -56.9 }, 0).wait(1).to({ regY: 11, rotation: 64.9, x: 136.4, y: -49.2 }, 0).wait(1).to({ regY: 10.9, rotation: 63.2, x: 135, y: -41.6 }, 0).wait(1).to({ rotation: 61.4, x: 133.8, y: -33.9 }, 0).wait(1).to({ rotation: 59.7, x: 132.9, y: -26.2 }, 0).wait(1).to({ rotation: 58.1, x: 132.3, y: -18.5 }, 0).wait(1).to({ regY: 10.8, rotation: 56.4, x: 132, y: -10.7 }, 0).wait(1).to({ regY: 11, rotation: 54.7, x: 131.8, y: -2.7 }, 0).wait(1).to({ regY: 10.9, rotation: 52.9, x: 132.1, y: 4.8 }, 0).wait(1).to({ regY: 11, rotation: 51.2, x: 132.7, y: 12.7 }, 0).wait(1).to({ regX: 10.9, rotation: 49.4, x: 134.2, y: 20.3 }, 0).wait(1).to({ regX: 11, regY: 10.9, rotation: 47.9, x: 137.2, y: 27.8 }, 0).wait(1).to({ regY: 11, rotation: 46.1, x: 141.6, y: 34.5 }, 0).wait(1).to({ regY: 10.9, rotation: 44.4, x: 147.3, y: 40.2 }, 0).wait(1).to({ regY: 11, rotation: 42.6, x: 153.6, y: 45.2 }, 0).wait(1).to({ rotation: 40.9, x: 160.4, y: 49.3 }, 0).wait(1).to({ rotation: 39.3, x: 167.7, y: 52.8 }, 0).wait(1).to({ regY: 10.9, rotation: 37.6, x: 175.1, y: 55.7 }, 0).wait(1).to({ regY: 10.8, rotation: 35.8, x: 182.6, y: 58 }, 0).wait(1).to({ regY: 11, rotation: 34.1, x: 190.1, y: 59.9 }, 0).wait(1).to({ regY: 10.9, rotation: 32.3, x: 197.9, y: 60.9 }, 0).wait(1).to({ regX: 11.1, rotation: 30.6, x: 205.8, y: 61.1 }, 0).wait(1).to({ regX: 11, regY: 11, rotation: 29, x: 213.5, y: 60.3 }, 0).wait(1).to({ regX: 11.1, regY: 10.9, rotation: 27.3, x: 221.3, y: 58.5 }, 0).wait(1).to({ regX: 11, regY: 11, scaleX: 0.75, scaleY: 0.75, rotation: 25.6, x: 228.6, y: 55.9 }, 0).wait(1).to({ regX: 11.1, scaleX: 0.75, scaleY: 0.75, rotation: 26.1, x: 235.7, y: 52.3 }, 0).wait(1).to({ regX: 11, rotation: 26.8, x: 242.3, y: 47.9 }, 0).wait(1).to({ rotation: 27.3, x: 248.5, y: 43 }, 0).wait(1).to({ regX: 10.9, rotation: 28.1, x: 254.3, y: 37.6 }, 0).wait(1).to({ regX: 11, regY: 10.9, rotation: 28.6, x: 259.6, y: 31.9 }, 0).wait(1).to({ regY: 11, rotation: 29.3, x: 264.5, y: 25.9 }, 0).wait(1).to({ rotation: 29.8, x: 269.2, y: 19.6 }, 0).wait(1).to({ rotation: 30.6, x: 273.4, y: 13.1 }, 0).wait(1).to({ regY: 10.9, rotation: 31.1, x: 277.2, y: 6.3 }, 0).wait(1).to({ regX: 11.1, regY: 11, rotation: 31.8, x: 280.6, y: -0.5 }, 0).wait(1).to({ regX: 11, rotation: 32.3, x: 283.4, y: -7.8 }, 0).wait(1).to({ rotation: 32.9, x: 285.7, y: -15.3 }, 0).wait(1).to({ regY: 11.1, rotation: 33.6, x: 287.3, y: -22.9 }, 0).wait(1).to({ regY: 10.9, rotation: 34.1, x: 288.4, y: -30.8 }, 0).wait(1).to({ regY: 11, rotation: 34.8, x: 288.8, y: -38.6 }, 0).wait(1).to({ rotation: 35.4, x: 288.6, y: -46.4 }, 0).wait(1).to({ rotation: 36.1, x: 287.9, y: -54.3 }, 0).wait(1).to({ rotation: 36.6, x: 286.6, y: -62 }, 0).wait(1).to({ regX: 11.1, rotation: 37.3, x: 285.2, y: -69.6 }, 0).wait(1).to({ regX: 10.9, rotation: 37.9, x: 284, y: -77.3 }, 0).wait(1).to({ regX: 11, rotation: 38.6, x: 283.2, y: -84.9 }, 0).wait(1).to({ regX: 10.9, rotation: 39.1, x: 282.7, y: -92.6 }, 0).wait(1).to({ regX: 11, regY: 10.9, rotation: 39.8, x: 282.8, y: -100.4 }, 0).wait(1).to({ regX: 10.9, regY: 11, rotation: 40.4, x: 283.2, y: -108.1 }, 0).wait(1).to({ rotation: 40.9, x: 284.4, y: -115.8 }, 0).wait(1).to({ regX: 11, regY: 10.9, scaleX: 0.9, scaleY: 0.9, rotation: 41.6, x: 286.5, y: -123.4 }, 0).wait(1).to({ regX: 10.9, scaleX: 0.9, scaleY: 0.9, x: 289.4, y: -130.7 }, 0).wait(1).to({ regX: 11, rotation: 41.9, x: 293.3, y: -137.4 }, 0).wait(1).to({ regX: 10.9, x: 297.9, y: -143.6 }, 0).wait(1).to({ regX: 11, rotation: 42.1, x: 303.4, y: -149.4 }, 0).wait(1).to({ regX: 10.9, rotation: 42.3, x: 309.5, y: -154.3 }, 0).wait(1).to({ rotation: 42.4, x: 316.2, y: -158.6 }, 0).wait(1).to({ rotation: 42.6, x: 323.4, y: -162 }, 0).wait(1).to({ x: 331, y: -164.6 }, 0).wait(1).to({ regX: 11, rotation: 42.8, x: 338.6, y: -166.6 }, 0).wait(1).to({ regY: 11, rotation: 42.9, x: 346.4, y: -167.7 }, 0).wait(1).to({ rotation: 43.1, x: 354.1, y: -168.3 }, 0).wait(1).to({ regY: 10.9, x: 362, y: -168.1 }, 0).wait(1).to({ regX: 10.9, rotation: 43.4, x: 369.8, y: -167 }, 0).wait(1).to({ x: 377.3, y: -164.9 }, 0).wait(1).to({ regX: 11, rotation: 43.6, x: 384.8, y: -161.8 }, 0).wait(1).to({ regY: 11, x: 391.6, y: -157.9 }, 0).wait(1).to({ regY: 10.9, rotation: 43.9, x: 398, y: -153.3 }, 0).wait(1).to({ x: 403.9, y: -148.1 }, 0).wait(1).to({ rotation: 44.1, x: 409.5, y: -142.4 }, 0).wait(1).to({ regY: 11, x: 414.5, y: -136.6 }, 0).wait(1).to({ regY: 10.9, rotation: 44.4, x: 419.4, y: -130.8 }, 0).wait(1).to({ regX: 10.9, x: 424, y: -124.8 }, 0).wait(1).to({ regX: 11, rotation: 44.6, x: 428.5, y: -118.5 }, 0).wait(1).to({ regY: 11, rotation: 44.7, x: 432.5, y: -111.9 }, 0).wait(1).to({ regY: 10.9, rotation: 44.9, x: 436, y: -105 }, 0).wait(1).to({ regX: 11.1, regY: 11, scaleX: 1, scaleY: 1, rotation: 45, x: 438.5, y: -97.7 }, 0).to({ _off: true }, 1).wait(60));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-394.3, -125.8, 19.8, 19.8);

                (lib.Robot_Cycle = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.robot_light();
                    this.instance.setTransform(38.5, -150.5);

                    this.instance_1 = new lib.lightbulb("synched", 0);
                    this.instance_1.setTransform(112.5, -110, 1, 1, 0, 0, 0, 52, 46);

                    this.instance_2 = new lib.mouth("synched", 0);
                    this.instance_2.setTransform(107.6, -36.5, 0.999, 0.999, -14.4, 0, 0, 377.1, 142.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.instance }] }, 14).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 112.5, y: -110, regY: 46 } }] }, 3).to({ state: [] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: -15.9, x: 93.6, y: -107.5, regY: 46 } }] }, 2).to({ state: [] }, 2).to({ state: [{ t: this.instance_2, p: { scaleX: 0.999, scaleY: 0.999, rotation: -14.4, x: 107.6, y: -36.5, regX: 377.1, regY: 142.1 } }] }, 6).to({ state: [{ t: this.instance_2, p: { scaleX: 0.999, scaleY: 0.999, rotation: -14.4, x: 107.6, y: -36.5, regX: 377.1, regY: 142.1 } }] }, 2).to({ state: [] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 133.1, y: -113.3, regY: 46 } }] }, 7).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 131.3, y: -111.7, regY: 46 } }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 125.6, y: -39.5, regX: 377.1, regY: 142.1 } }] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 131.3, y: -111.9, regY: 46 } }] }, 1).to({ state: [{ t: this.instance_2, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 129.3, y: -40.6, regX: 377.1, regY: 142.1 } }] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 135, y: -111.6, regY: 46 } }] }, 2).to({ state: [] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 135.5, y: -111.6, regY: 46 } }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 129, y: -39.6, regX: 377.1, regY: 142.1 } }] }, 1).to({ state: [] }, 2).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 152.6, y: -111.5, regY: 46 } }] }, 14).to({ state: [] }, 2).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 149.8, y: -111.4, regY: 46 } }] }, 2).to({ state: [] }, 4).to({ state: [{ t: this.instance_2, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 143, y: -39.6, regX: 377.1, regY: 142.1 } }] }, 6).to({ state: [] }, 2).to({ state: [{ t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: 15.8, x: 185, y: -100.5, regY: 46.1 } }] }, 26).to({ state: [{ t: this.instance_2, p: { scaleX: 0.999, scaleY: 0.999, rotation: 17.5, x: 158, y: -34, regX: 377.1, regY: 142.1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { scaleX: 0.998, scaleY: 0.998, rotation: 5.3, x: 160.6, y: -39.8, regX: 376.9, regY: 142.2 } }] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 6, x: 175.5, y: -110.6, regY: 46 } }, { t: this.instance_2, p: { scaleX: 0.998, scaleY: 0.998, rotation: 5.3, x: 160.6, y: -39.8, regX: 376.9, regY: 142.2 } }] }, 1).to({ state: [] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: 15.8, x: 176.4, y: -105.4, regY: 45.9 } }] }, 1).to({ state: [{ t: this.instance_1, p: { scaleX: 0.998, scaleY: 0.998, rotation: 10.2, x: 166.6, y: -103.3, regY: 46 } }, { t: this.instance_2, p: { scaleX: 0.999, scaleY: 0.999, rotation: 9.3, x: 147.4, y: -34.6, regX: 377, regY: 142 } }] }, 1).to({ state: [] }, 1).wait(27));

                    this.instance_3 = new lib.robot_head1();
                    this.instance_3.setTransform(67, -152);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { x: 67, y: -152, rotation: 0 } }] }).to({ state: [{ t: this.instance_3, p: { x: 65, y: -151, rotation: 0 } }] }, 3).to({ state: [{ t: this.instance_3, p: { x: 56, y: -151.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 43.5, y: -150.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 38, y: -150, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 41, y: -150, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 38.5, y: -150.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 27.6, y: -141.5, rotation: -5.9 } }] }, 5).to({ state: [{ t: this.instance_3, p: { x: 11.4, y: -126.6, rotation: -15.3 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 16, y: -131.8, rotation: -12.4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 14.6, y: -130.9, rotation: -13.3 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 14.6, y: -130.9, rotation: -13.3 } }] }, 8).to({ state: [{ t: this.instance_3, p: { x: 27.6, y: -136.9, rotation: -11.4 } }] }, 1).to({ state: [{ t: this.instance_3, p: { x: 54.6, y: -150.5, rotation: -3.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 58.9, y: -153, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 56.9, y: -152, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 62.4, y: -154.4, rotation: 1.1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 61.4, y: -152.9, rotation: 0.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 61.4, y: -152.9, rotation: 0.7 } }] }, 14).to({ state: [{ t: this.instance_3, p: { x: 71.9, y: -152.9, rotation: 0.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 78.9, y: -152.9, rotation: 0.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 73.9, y: -152.9, rotation: 0.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 75.9, y: -152.9, rotation: 0.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 75.9, y: -152.9, rotation: 0.7 } }] }, 11).to({ state: [{ t: this.instance_3, p: { x: 89.9, y: -154.4, rotation: 0.7 } }] }, 1).to({ state: [{ t: this.instance_3, p: { x: 115, y: -156.4, rotation: 6.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 137.9, y: -161.9, rotation: 18.6 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 120.2, y: -152.5, rotation: 11.4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 117.7, y: -156.5, rotation: 11.4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 126.5, y: -161.9, rotation: 15.4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 123.2, y: -162.9, rotation: 14.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 123.2, y: -162.9, rotation: 14.2 } }] }, 9).to({ state: [{ t: this.instance_3, p: { x: 122.8, y: -157, rotation: 13.2 } }] }, 1).to({ state: [{ t: this.instance_3, p: { x: 106.6, y: -152, rotation: 4.8 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 125.6, y: -161, rotation: 16.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 106.7, y: -160, rotation: 7.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 116.4, y: -164.5, rotation: 16.1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 100.9, y: -156.8, rotation: 9.5 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 85.1, y: -158.2, rotation: 4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 85.3, y: -156.5, rotation: 7.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 74.3, y: -148.3, rotation: 1.5 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 82.1, y: -159.2, rotation: 7.5 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 74.6, y: -149.1, rotation: 1.8 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 72.6, y: -150.6, rotation: 1.8 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 65.5, y: -148.7, rotation: -1.1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: 67.3, y: -151.9, rotation: 0.3 } }] }, 2).wait(12));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#646464").ss(1.5, 1, 1).p("AlRABQgBAAiUgJQiJgKgIAaQgFAShzlIQgTgrgpgUIABgCArqmEQgFBWAAAAAGEgwQAUAACbAEQCVADAPgFQAHgDAUC0IAUCzIAmA8AMGE2IgaBP");
                    this.shape.setTransform(125.1, 1.6);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#646464").ss(1.5, 1, 1).p("AlhABQgBAAiUgJQiJgKgIAaQgBAFgWhIQgjh5gqh6QgUgqgogVIAAgCArmmEIgFBWAF0gwQAUAACbAEQCUADAPgFIA9FkIAlA8AMDE2IgaBP");
                    this.shape_1.setTransform(120.4, 1.6);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#646464").ss(1.5, 1, 1).p("AlvBLQAAAAiUARQiIAPgDAdQgwjngrhKQgbgmgrgNIAAgDArzj/IAKBWAFQhqQAUgDCZgZQCSgYAOgIIBjFUIAwA0AMACuIgLBS");
                    this.shape_2.setTransform(115.3, 3.8);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#646464").ss(1.5, 1, 1).p("AsijSIAPBWQAOAVA1BpQA8B8ALAqQABgdCIgWQCSgYABAAAsTh8QgeglgrgLIAAgCAFIh6QATgFCYgfQCRgfAOgJICZFGIAyAxAMrCAIgIBT");
                    this.shape_3.setTransform(114.3, 5.7);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#646464").ss(1.5, 1, 1).p("As6irIAPBVQADAEBSB2QBSB6AFAUQABgeCIgVQCSgYABAAAsrhWQgdglgrgKIAAgDAFShwQATgFCYggQCRgfAOgIICmEmIAyAyANCBqIgIBT");
                    this.shape_4.setTransform(113.3, 4.8);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#646464").ss(1.5, 1, 1).p("AtfisIAAACQArALAeAlIgPhWAFKhuQAUgECYggQCRgfANgIICaE3IAyAxAMuB+IgIBTAlrBqQAAgBiTAYQiHAWgBAdQgIggiIkO");
                    this.shape_5.setTransform(114, 4.5);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#646464").ss(1.5, 1, 1).p("AsHjeIAPBWQBhDBAfB5QABgeCHgVQCTgYAAAAAr4iIQgeglgqgLIAAgCAFYhwQAUgFCYggQCRgfANgIIBuFIIAyAxAMQCMIgIBT");
                    this.shape_6.setTransform(112.6, 4.8);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFxiBQAUgFCYgfQCRgfANgJIBuFIIAyAxAMpB7IgIBTAs0hYIAyBLQCHCWAcAYQABgdCHgWQCTgYAAAAAtZgcIAAADQAHACAngCQAdgBAMAN");
                    this.shape_7.setTransform(110.1, 6.4);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#646464").ss(1.5, 1, 1).p("AF7iBQAUgFCYgfQCRgfANgJIBuFIIAyAxAMzB7IgIBTAk6BWQgBgCiMAjQiOAjAAAMQgKgJhSADQhSADgJgIQgPgLgbAAQgmABgHgCIAAgDAsMCbIgyhL");
                    this.shape_8.setTransform(109.1, 6.4);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFQkiQAUgECXggQCRgfAOgIIBtFJIAyAwAMHgkIgHBRAs4FLIA4guQACABB+kZQAAgFCNgkQCNgmABABAsBFuQADgPgChC");
                    this.shape_9.setTransform(113.4, 22.5);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#646464").ss(1.5, 1, 1).p("AD4kxQAUgECYggQCRgfANgIIBuFJIAyAyAKwgzIgIBRArhF9IAkhHQgHhAgFhJQgLiRAQgkQEHhQABAAAqWF9QABgCgTgVQgUgWgBga");
                    this.shape_10.setTransform(122.2, 24);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEYkkQAUgECZgTQCUgVAOgHIBTFRIAvAzAK6gGIgNBQArjEiIAZgqQgChAABhJQAAiPATglQELg9ABABArZE5IgPAbAqdFYQAAgCgRgWQgDgDgCgEAq9EjQgNgVAAgW");
                    this.shape_11.setTransform(122.3, 22.6);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFijtQAUAACaAFQCVAEAPgFIAdFXIAlA8ALRBuIgaBPAroCuIAggmQAHhAANhHQAXiNAYghQETgRAAAAArDC1QgKgXAFgWAqsDuQAAgCgNgYQgCgEgBgDArhDGIgUAY");
                    this.shape_12.setTransform(121.9, 20.1);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#646464").ss(1.5, 1, 1).p("AF1jcQATABCaAMQCUAKAQgEIAOFZIAiA9AK2DdIAehNArmCOIAhgkQAKg/AQhFQAeiOAaggQESgGABABArhCnIgUAWAqtDRQABgCgNgZQgCgEgBgEArBCXQgKgXAGgW");
                    this.shape_13.setTransform(123.2, 21.1);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFWj4QAUgBCbABQCTAAAQgFIAmFXIAnA7AK1CpIAZhPAroDAIAegmQAGhAALhJQAUiNAXgiQERgYABABArDDGQgKgXADgVAqqD+QABgBgPgZQgCgDgCgEArhDYIgTAY");
                    this.shape_14.setTransform(123.5, 19.1);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFgjvQAUAACaAFQCVADAPgFIAeFXIAlA8ALQBrIgaBPAroCwIAggmQAHhAAMhHQAXiNAZghQERgSABAAArDC3QgJgXAEgWAriDIIgSAYAqsDwQABgCgOgYQgBgEgCgE");
                    this.shape_15.setTransform(123, 19.6);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFljvQAUAACaAFQCVADAPgFIAPFXIAlA8ALGBrIgaBPAreCwIAggmQAGhXAIgwQAXiNAZghQERgSABAAAqiDwQABgDgOgXIgDgIAq5C3QgKgXAFgWArYDIIgSAY");
                    this.shape_16.setTransform(122.5, 19.6);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#646464").ss(1.5, 1, 1).p("AGVjpQAUAACbAFQCUADAPgFIgbFXIAlA8ALMBxIgaBPAk+i3QgBAAkRASQgPAVgwBzQgyB6gDAnQgEAVAKAYAqoDqQABgDgNgXIgEgIAreDCIgSAYArkCqIAggm");
                    this.shape_17.setTransform(123.1, 19);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#646464").ss(1.5, 1, 1).p("AGVjpICvAFQCUADAPgFIgbFXIAlA8ALMBxIgaBPAk+i3QgBAAkRASQgPATgwB1QgyB6gDAnQgEAVAKAYAqoDqQABgEgNgWIgEgIAreDCIgSAYArkCqIAggm");
                    this.shape_18.setTransform(132.1, 19);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFcjvICvAFQCUADAPgFIAPFXIAlA8AK9BrIgaBPAl3i9QgBAAkRASQgGAIgTCOQgRB9gCAiQgFAVAKAYAqZDwQABgEgOgWIgDgIArPDIIgSAYArVCwIAggm");
                    this.shape_19.setTransform(136, 19.6);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFBjvICuAFQCVADAPgFIAhFXIAlA8AK0BrIgaBPAmSi9QgBAAkRASQgHEegBAXQgFAVAKAYAqQDwQABgFgOgVIgDgIArGDIIgSAYArMCwIAggm");
                    this.shape_20.setTransform(139.9, 19.6);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFQjvICvAFQCUADAPgFIAPFXIAlA8AKxBrIgaBPAmDi9QAAAAkSASQgEC+gQB3QgEAVAKAYAqMDwQABgFgOgVIgEgIArCDIIgTAYArICwIAfgm");
                    this.shape_21.setTransform(137.2, 19.6);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFrjAICvAEQCUADAPgEICLEzIBGAlANIB2IAbBLAuNByIBPgBQAFgrBchRQBdhVAGgdQERgSABABAs+BxQgBAEgyBA");
                    this.shape_22.setTransform(134.5, 14.9);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFxhqICvAEQCUADAPgEICLCXIBFgWANOAwIBBA3AuSAoIBOgBQACgQBmgaQBngbABgJQESgSAAABAtEAnQAAAEgyBA");
                    this.shape_23.setTransform(133.9, 6.3);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#646464").ss(1.5, 1, 1).p("AtVhbIAVBFQABgGBnBoQBnBqABgCQERgSABABAtAgWQgCAKhFgZANCi0IAQBTIA2g7AF1BxQFIAGAKgDICLjV");
                    this.shape_24.setTransform(133.5, -15.7);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#646464").ss(1.5, 1, 1).p("AsYidIABBJQCiFEAAgCQESgSAAABAsXhUQgCAKhFgZAMZjuIAQBTIA2g7AFwCrQFIAGAKgDIBnlJ");
                    this.shape_25.setTransform(134, -21.5);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#646464").ss(1.5, 1, 1).p("AMdicIAHBTIA8g1AsTjyIgHBIQB/FTAAgCQESALABABAsaiqQgDAKhCggAFLDNQFFAoALgCICJk8");
                    this.shape_26.setTransform(142.3, -19.4, 1, 1, 0.6);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#646464").ss(1.5, 1, 1).p("AnACCQgBgBkNgxQAIgdACg5QAEh2ggiUQgFAJg8gpArgkQIARhHALlghIgFBSIBCgtAEIECQE8BWALAAICRkn");
                    this.shape_27.setTransform(156.2, -18.5);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#646464").ss(1.5, 1, 1).p("AnrB/QgBgBkMg0QAkjxgBhwQgCACgLgZQgOgigOgSAqlleIgwBHALCgaIgGBSIBDgrADcEJQE7BaALAAICakr");
                    this.shape_28.setTransform(160.9, -17.7);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#646464").ss(1.5, 1, 1).p("AnSCXQAAAAkQgjQAikKgQhMQgCgLgFgSQgLgmgZgPAqfk1IgxBTAK8hMIASBSIAuguAD8DyQFABFALgBICHkw");
                    this.shape_29.setTransform(156, -18.8);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#646464").ss(1.5, 1, 1).p("AnGCJQgBgBkOgrQAbjWgEh8QgCgKgFgRQgKgjgZgQAqRlIIgtBTAKkgzIAVBSIAwg9AEED7QE+BPALgBIBskq");
                    this.shape_30.setTransform(156.6, -18.1);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKohMIAYBRIAtg/AqVkyIgrBUQAJB8gUDXQEQAiAAABArAjeQgCgJgFgRQgMgjgZgPAETDwQFABEALgBIBiku");
                    this.shape_31.setTransform(153.9, -20);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKth0IAcBRIAqhDAqbkNIgmBXQAQB7gHDXQERATAAAAArBi2QgDgKgGgQQgOgjgagNAErDfQFDAxALgCIBQkx");
                    this.shape_32.setTransform(150.3, -19.3);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKrhkIAbBSIArhDAqZkcIgoBWQANB7gMDXQERAZAAABArBjGQgCgJgGgRQgNgjgagOAEiDmQFCA5ALgCIBXkv");
                    this.shape_33.setTransform(148.3, -19.4, 1, 1, -3.4);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKuiPIAgBQIAnhFAqej0IgiBYQAUB7ABDXQESAIAAABArAicQgDgJgHgQQgPgigbgMAE6DSQFFAlALgCIBEk0");
                    this.shape_34.setTransform(148.2, -18.8, 1, 1, 1.3);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKtiAIAeBRIAphEAqdkDIgkBYQASB7gEDXQESAOAAABArBirQgCgJgHgRQgOgigbgNAExDZQFEAsALgCIBLky");
                    this.shape_35.setTransform(144.6, -21.9, 1, 1, -2.7);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKvihIAhBPIAmhGAmPDJQAAAAkSgCQgHjXgXh5QgDgKgIgQQgQghgbgMAqgjjIgfBaAFEDKQFGAcAKgCIA8k2");
                    this.shape_36.setTransform(145.2, -20.7, 1, 1, 2.9);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKth+IAeBRIAohEAqckEIgkBYQARB6gEDYQERAPABAAArAisQgDgKgHgQQgOgigagNAExDaQFDAtALgCIBMky");
                    this.shape_37.setTransform(139.1, -22.7, 1, 1, -4.7);

                    this.shape_38 = new cjs.Shape();
                    this.shape_38.graphics.f().s("#646464").ss(1.5, 1, 1).p("Ar5jQIgFBWQAVA8ARCGQAPB8gEANQAKgbCGAKQCVALAAAAAr+h6QgTgqgpgVIABgCAEtCYQAUAACbAEQCVADAPgFQAFgCBoigIAfhTALtgIIBNgP");
                    this.shape_38.setTransform(133.8, -18.5);

                    this.shape_39 = new cjs.Shape();
                    this.shape_39.graphics.f().s("#646464").ss(1.5, 1, 1).p("AsTksIgFBWQArB7AkB8QAXBPACgFQAHgcCJAKQCVALAAAAAsYjWQgTgqgpgVIABgCAFKAxQAUAACbAEQCVADAPgFIBhCrIBXAsAL+DeIASBP");
                    this.shape_39.setTransform(133.6, -8.2);

                    this.shape_40 = new cjs.Shape();
                    this.shape_40.graphics.f().s("#646464").ss(1.5, 1, 1).p("AlRABQAAAAiVgJQiJgKgHAaQgFAShzlIQgUgrgogUIAAgCArpmEQgGBWABAAAGEgwQAUAACbAEQCUADAPgFQAIgDAVC0IAUCzIAkA8AMHE2IgbBP");
                    this.shape_40.setTransform(125.1, 1.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 3).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 6).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 6).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 14).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_26 }] }, 4).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 2).to({ state: [{ t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_31 }] }, 12).to({ state: [{ t: this.shape_32, p: { rotation: 0, x: 150.3, y: -19.3 } }] }, 2).to({ state: [{ t: this.shape_32, p: { rotation: 1.3, x: 150.9, y: -19.4 } }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_36 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).to({ state: [{ t: this.shape_38 }] }, 2).to({ state: [{ t: this.shape_39 }] }, 2).to({ state: [{ t: this.shape_40 }] }, 2).wait(22));

                    this.instance_4 = new lib.body("synched", 0);
                    this.instance_4.setTransform(130, 24.9, 1, 1, 0, 0, 0, 46.5, 62);

                    this.timeline.addTween(cjs.Tween.get(this.instance_4, { override: true }).wait(3).to({ x: 123 }, 0).wait(2).to({ regY: 62.1, scaleX: 1, scaleY: 1, rotation: -11.7, x: 120.2, y: 26.6 }, 0).wait(2).to({ regX: 46.4, regY: 62, rotation: -14.8, y: 27.5 }, 0).wait(2).to({ regY: 62.1, rotation: -13.2, y: 27.1 }, 0).wait(2).to({ regY: 62, rotation: -14.8, y: 27.5 }, 0).wait(18).to({ rotation: -16.6, y: 28.7 }, 0).wait(2).to({ regX: 46.5, regY: 62.1, rotation: -11.7, y: 26.6 }, 0).wait(2).to({ regY: 62, scaleX: 1, scaleY: 1, rotation: 0, x: 123, y: 24.9 }, 0).wait(2).to({ regX: 46.4, regY: 62.1, rotation: 2.4, x: 123.6, y: 26.1 }, 0).wait(2).to({ regX: 46.5, regY: 62, rotation: -1.8, x: 123, y: 24.8 }, 0).wait(2).to({ rotation: 0, y: 24.9 }, 0).wait(16).to({ x: 129.1 }, 0).wait(2).to({ x: 138.2 }, 0).wait(2).to({ x: 134.7 }, 0).wait(2).to({ x: 136.9 }, 0).wait(2).to({ x: 135.6 }, 0).wait(12).to({ rotation: 6.3, x: 137.2 }, 0).wait(2).to({ scaleX: 1, scaleY: 1, rotation: 14.9, x: 140.8, y: 25.8 }, 0).wait(2).to({ rotation: 16.7, y: 26.7 }, 0).wait(2).to({ rotation: 13.1, y: 24.9 }, 0).wait(2).to({ rotation: 15, x: 140.7, y: 25.8 }, 0).wait(12).to({ rotation: 13.1, x: 140.8, y: 24.9 }, 0).wait(2).to({ rotation: 9.4 }, 0).wait(2).to({ regX: 46.6, scaleX: 1, scaleY: 1, rotation: 11.9, x: 140.9 }, 0).wait(2).to({ rotation: 6.6, x: 140.8, y: 25 }, 0).wait(2).to({ regX: 46.5, rotation: 9.7, x: 140.3, y: 24.9 }, 0).wait(2).to({ rotation: 5.1, x: 138.2, y: 23.9 }, 0).wait(2).to({ rotation: 8.9, x: 138.3, y: 24.4 }, 0).wait(2).to({ scaleX: 1, scaleY: 1, rotation: 3.1, x: 135.8 }, 0).wait(2).to({ scaleX: 1, scaleY: 1, rotation: 0, x: 129, y: 24.9 }, 0).wait(2).to({ x: 132 }, 0).wait(2).to({ x: 130 }, 0).wait(22));

                    this.instance_5 = new lib.robot_legs("synched", 0);
                    this.instance_5.setTransform(133.5, 102.4, 1, 1, 0, 0, 0, 44, 45.5);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(137));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(130.9, 141.6, 0.926, 0.926, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get(this.instance_6, { override: true }).wait(3).to({ x: 129.6 }, 0).wait(2).to({ x: 125.7 }, 0).wait(2).to({ x: 121.8 }, 0).wait(2).to({ x: 118.5 }, 0).wait(24).to({ x: 121.8 }, 0).wait(2).to({ x: 131.5 }, 0).wait(2).to({ x: 132.2 }, 0).wait(22).to({ x: 138.7 }, 0).wait(2).to({ x: 140 }, 0).wait(16).to({ x: 144.5 }, 0).wait(2).to({ x: 146.5 }, 0).wait(2).to({ x: 147.1 }, 0).wait(26).to({ x: 143.9 }, 0).wait(3).to({ x: 142.6 }, 0).wait(3).to({ x: 136.7 }, 0).wait(3).to({ x: 130.9 }, 0).wait(21));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(43.9, -152, 162.4, 306.2);

                (lib.Mindy_Celeb = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.mindy_smile();
                    this.instance.setTransform(-105.1, -44.6, 0.999, 0.999, 30.6);

                    this.instance_1 = new lib.mindy_head();
                    this.instance_1.setTransform(-105.1, -44.6, 0.999, 0.999, 30.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1, p: { y: -44.6 } }, { t: this.instance, p: { y: -44.6 } }] }).to({ state: [{ t: this.instance_1, p: { y: -45.7 } }, { t: this.instance, p: { y: -45.7 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -49.5 } }, { t: this.instance, p: { y: -49.5 } }] }, 3).to({ state: [{ t: this.instance_1, p: { y: -66 } }, { t: this.instance, p: { y: -66 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -70.4 } }, { t: this.instance, p: { y: -70.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -72.1 } }, { t: this.instance, p: { y: -72.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -72.6 } }, { t: this.instance, p: { y: -72.6 } }] }, 3).to({ state: [{ t: this.instance_1, p: { y: -68.8 } }, { t: this.instance, p: { y: -68.8 } }] }, 3).to({ state: [{ t: this.instance_1, p: { y: -53.4 } }, { t: this.instance, p: { y: -53.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -46.8 } }, { t: this.instance, p: { y: -46.8 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -45.7 } }, { t: this.instance, p: { y: -45.7 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -44.6 } }, { t: this.instance, p: { y: -44.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -49 } }, { t: this.instance, p: { y: -49 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -65.5 } }, { t: this.instance, p: { y: -65.5 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -69.3 } }, { t: this.instance, p: { y: -69.3 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -72.1 } }, { t: this.instance, p: { y: -72.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -72.6 } }, { t: this.instance, p: { y: -72.6 } }] }, 3).to({ state: [{ t: this.instance_1, p: { y: -68.8 } }, { t: this.instance, p: { y: -68.8 } }] }, 3).to({ state: [{ t: this.instance_1, p: { y: -53.4 } }, { t: this.instance, p: { y: -53.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -46.8 } }, { t: this.instance, p: { y: -46.8 } }] }, 2).to({ state: [{ t: this.instance_1, p: { y: -45.7 } }, { t: this.instance, p: { y: -45.7 } }] }, 2).wait(1));

                    this.instance_2 = new lib.mindy_ponytail_right();
                    this.instance_2.setTransform(-27.3, -23, 0.996, 0.996, 20.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { rotation: 20.4, x: -27.3, y: -23, scaleX: 0.996, scaleY: 0.996 } }] }).to({ state: [{ t: this.instance_2, p: { rotation: 29, x: -23.1, y: -19.4, scaleX: 0.996, scaleY: 0.996 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 29, x: -23.1, y: -19.4, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 32.3, x: -20.4, y: -21.1, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 34.6, x: -21.6, y: -40.9, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 35.4, x: -19, y: -49.3, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 30.9, x: -22.6, y: -52.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 28.6, x: -25.3, y: -52, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 27.5, x: -25.4, y: -51.9, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 18.4, x: -31.2, y: -46.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 6.6, x: -37.9, y: -29.3, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 13.2, x: -32.6, y: -26.2, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 20.4, x: -27.3, y: -23, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 29, x: -23.1, y: -19.4, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 32.3, x: -20.4, y: -21.1, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 34.6, x: -20.5, y: -40.9, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 34.6, x: -20, y: -47.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 30.9, x: -22.6, y: -52.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 28.6, x: -25.3, y: -52, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 27.5, x: -25.4, y: -51.9, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 18.4, x: -31.2, y: -46.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 6.6, x: -37.9, y: -29.3, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 13.2, x: -32.6, y: -26.2, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 20.4, x: -27.3, y: -23, scaleX: 0.996, scaleY: 0.996 } }] }, 2).wait(1));

                    this.instance_3 = new lib.mindy_ponytail_left();
                    this.instance_3.setTransform(-141.5, -78.8, 0.996, 0.996, 25.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { rotation: 25.8, x: -141.5, y: -78.8, scaleX: 0.996, scaleY: 0.996 } }] }).to({ state: [{ t: this.instance_3, p: { rotation: 18.8, x: -147.6, y: -69.7, scaleX: 0.996, scaleY: 0.996 } }] }, 1).to({ state: [{ t: this.instance_3, p: { rotation: 18.8, x: -147.6, y: -69.7, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 14.5, x: -151.5, y: -66.2, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 7.7, x: -157.5, y: -79.4, scaleX: 0.995, scaleY: 0.995 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 14.5, x: -152.2, y: -95.6, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 24.5, x: -141.1, y: -106.8, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 27, x: -138.8, y: -108.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 29.3, x: -136.8, y: -110.3, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 35.1, x: -130.1, y: -111.3, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 43.4, x: -120.1, y: -101.2, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 34.1, x: -132.1, y: -88.9, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 25.8, x: -141.5, y: -78.8, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 18.8, x: -147.6, y: -69.7, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 14.5, x: -151.5, y: -66.2, scaleX: 0.996, scaleY: 0.996 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 7.7, x: -157.5, y: -79.4, scaleX: 0.995, scaleY: 0.995 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 21.5, x: -143.9, y: -98.2, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 24.5, x: -141.1, y: -106.8, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 27, x: -138.8, y: -108.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 29.3, x: -136.8, y: -110.3, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 35.1, x: -130.1, y: -111.3, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 43.4, x: -120.1, y: -101.2, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 34.1, x: -132.1, y: -88.9, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 25.8, x: -141.5, y: -78.8, scaleX: 0.996, scaleY: 0.996 } }] }, 2).wait(1));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhakkQBTApgOByQgFAkgOAtQgIAXgKAbQgGAShVBrQhvCNgFAGAiPElQATgpBOhsQAog2AjgyQAFgMAcgUQAggUAigMQBggjAqBA");
                    this.shape.setTransform(-35.1, -38.8);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgWkAQAXgEAbASQAbASANAeQAiBNhVBGQhyBEg4BHQhxCGgDAEAEOCEQgnhuh3AJQgnADgoAQQghAMgBAGQiGCigMAc");
                    this.shape_1.setTransform(-34.7, -35.2);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkADGQACgCBpiIQAXgcBKggQBygxAFgDQBFgkANgmQASg2hqgtAEBDHQg6ijhlAIQgvAEgzAdQhXAxgvBk");
                    this.shape_2.setTransform(-36, -36.5);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABKjYQBqAtgSA2QgNAmhFAkQgXAMhgAfQhLAYgWAbQhpCIgCACADzC+QAHg+gogsQgngtg8AFQgzAEgwAYQhXAtguBk");
                    this.shape_3.setTransform(-37.3, -37.4);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjmCiQA3igCkgwQAmgMBHgKQAzgIAFgIQAlg7g2gjQgkgZgjAmADkC9QAKg4gag2Qgbg3gxgSQg2gSg8AlQhDAtg/B3");
                    this.shape_4.setTransform(-38.6, -49.8);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADiBxQAKgjADgPQAGgbgLgVQgagygygNQgPgEgkANQgpAQgoAcQhsBVgkCPAjwDOQAnh6ByhnQBahVAxgIQAvgIAFgIQAlg7g2gjQgkgZgjAm");
                    this.shape_5.setTransform(-37.6, -57.4);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjwDaQAwiZBZhQQAfgcAuguQAhggAVgDQAvgIAFgIQAlg7g2gjQgkgZghAmADiBVQALgnACgLQAGgcgLgSQgbg0gxgNQgPgEgkANQgaAKhXBxQhgB9gQBA");
                    this.shape_6.setTransform(-37.6, -61.8);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjiDmQAwiZBYhQQAVgTCLiCQAkg7g2gjQgjgZghAmAhoEBQAQhABeh9QAdglAshFQAhg1AJgEQAlgOAgAOQAxAWgQBY");
                    this.shape_7.setTransform(-39, -63);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhsERQDTm5BdAwQA2AbgeBQAjmD2QBJitCHiKQAyg1AegyQAlg7g2gjQgkgZghAm");
                    this.shape_8.setTransform(-38.6, -63.8);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhjERQBwjsA8hXQBFhmAtAXQA2AbgeBQAjdD2QBPi9B4h6QAZgcAuhLQAlg7g2gjQgigZgjAm");
                    this.shape_9.setTransform(-39.5, -61.1);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhrEuQBzkEAeg/QAjhMA/gZQA6gXAkAjAjlETQBDhdBDiHQAjhEAohSQAVglgNhOQgRhUg0AB");
                    this.shape_10.setTransform(-38.7, -48.7);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhmEuQAthmAphtQAkhmAEgKQAVgsA+gpQBFguAxAPAjgETQBChbBEiJQALgXAQgwQAQg0AOgbQAWglgPhOQgQhUg0AB");
                    this.shape_11.setTransform(-39.2, -42.4);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhoEBQAQhABeh9QAdglAshFQAhg1AJgEQAlgOAgAOQAxAWgQBYAjiDmQAwiZBYhQQAVgTCLiCQAkg7g2gjQgjgZghAm");
                    this.shape_12.setTransform(-39, -63);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape }] }, 2).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape }] }, 2).wait(1));

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADAACgEIgDAJ");
                    this.shape_13.setTransform(-124.7, 137.5);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFYAwIgdhBIgSAuADAk2QAwADAyBSQAYAnADA8QAAADgCBqIA5AeAgzmdQgjAXghAMQgsAQgaABQhTAFguhuIg1gcAlIoXIAKBFIAkgrAhxIYIA5gvIg9AEAirDDQhUAageASQhEAoAZA4QAPAgAvAYQAwAYBDAGAicGxIgXAyAicGxIg6AmAg7DKQikBhBDBnQAhAzBDAk");
                    this.shape_14.setTransform(-109.2, 94.7);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiyB7IBIAKIg1gyACzhrQiegzhTA2QhhA+A1Cv");
                    this.shape_15.setTransform(-135.2, 116.8);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFSEeIgdhCIgSAvADGhIQAwADAyBQQAKARADAbQABARABAmIgCBuIA5AfAgtivQg4AlgMAEQgrAQgbABQhVAFgshoIg1gcAlCkdIAKBFIAkgr");
                    this.shape_16.setTransform(-109.8, 70.9);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_17.setTransform(-124.7, 137.5);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABXBVQiQgsgZg6QgfhJC1g4AA7CTIAXgyIg6Am");
                    this.shape_18.setTransform(-133.2, 128.3);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADg");
                    this.shape_19.setTransform(-124.7, 137.5);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGNBEIgchCIgSAwAECkhQAwACAyBTQAKAQADAcQABAQABAmIgCBsIA5AfAANmJQg2AlgMAFQgrAPgbACQhVAEgshnIg1gdAkGn3IAKBGIAkgsAgNCFQhBgvgjgXQgpgbhAgKQg8gJgnA4QgoA6gLB3Ig5hDAlwD6IgKhHAhxH4IAWgyIg5AlAhVG6QiTgsgZg8QgehJC2g5");
                    this.shape_20.setTransform(-115.7, 92.7);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AERlCQApACAyBTQAYAnADA8QAAACgJCAIgSAuAGaA5IgchBIA5AeAkToOIAKBFIg1gcAAcmpQhcBFhNgVQgtgMhPhEIAkgrAAACCQhLg9gXgPQg+gpgrgHQhBgHgwAwQg3A4gKBxIgKhHAhGHRQiEgogbhAQgQgnAhgoQAkgrBWgbAl9DYIg5hCAhiIPIAWgyIg5Am");
                    this.shape_21.setTransform(-117.2, 90.3);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFiEWIgdhCIgRAvADZhkQApACAyBTQAXAkAEA8IgKCDIA6AfAgajMQg9AsgaANQgrAWgigJQhOgVg8g0Ig2gdAlTkVIALBGIAkgs");
                    this.shape_22.setTransform(-111.6, 52.8);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADvi5Qifh/gagEQiggXhLCjIg5hDAi1iwIgLhHACLFAIAXgyIg6AmACnECQg6hfABiDQAAhuAlhN");
                    this.shape_23.setTransform(-141.2, 111);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlTkvQgGAKAAASQAAASgHAFQABAAACABQAAAAgCAKQgBAMAJAMQBQBrBdgFQAdgCAlgOQAogPAFgBAF6EwIgchCIgKAvAC5grQBlAfAjBkQATA1AAA9QAHAhADADIA5AfAmWkfQAqAjAJACIABAAQABgBgBgBIACAAAlij6IAFgBAmSjvQAHgIAogD");
                    this.shape_24.setTransform(-108.4, 44.9);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgJIAAAGg");
                    this.shape_25.setTransform(-124.7, 137.5);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD2h8QhwhZhVgpQiEhAh1AVIgshCACSF+IAWgyIg6AlACuFAQgcgugGizQgGiuAUgpAjIkpIAJhU");
                    this.shape_26.setTransform(-141.8, 104.9);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlWlBQgHAKAAASQAAASgGAFQABAAABABQABAAgBAJQABANAFAMQAcA8AUAZQAgAoAxAFQAOABAoAFQApADAogGAF+FBIgdhCIgKAvACgAAQBMAXAXAMQAzAZAPAtQAMAjAQBzIA6AfAmZkxQApAjAJACIABAAQABgBgBgBIADAAAlmkMIAFgBAmVkBQAHgIAngD");
                    this.shape_27.setTransform(-105.9, 40.4);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD5hiQhwhYhVgqQhmgxgPgGQg/gahMgOIgshCACVGYIAWgyIg5AlACxFaQgcgugGizQgGiuAUgpAjMlDIAJhU");
                    this.shape_28.setTransform(-142.1, 102.3);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD2lYQCPAUAwBdQAOAbAHAmQAHAhADACIA5AgAHwhAIgchDIgKAwAj1p0QgCgCgBABIgCAAQABABgBAAIAFAAQAAAAAGAhQAJAoAUAfQBABjCTgWAjrqoQgGAJAAATQAAASgHAFAkuqYQAqAiAJADIABgBAkqpoQAHgIAogDAgZCuQhwhZhVgpQhogwgPgGQg/gahMgNIgshDAh9KpIAWgyIg5AmAhhJsQgcgugGizQgGiwAUgpAnggxIAJhU");
                    this.shape_29.setTransform(-114.5, 74.9);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGAE5IgdhCIgKAwACGAqQCjABAtBmQAWAygJA0IA5AfAlTk5QgRAwgEADQABAAABABQABAAAFAiQARBDAVAaQA8BKCRAAAmPk1QARAOAJATQAIAQABAAIABAAQABgBgBgBIADAAAmbkBQAFgFAqACAlrkEIAFgB");
                    this.shape_30.setTransform(-103.3, 38.6);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJIADgDg");
                    this.shape_31.setTransform(-124.7, 137.5);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD2h+QiDhohCggQg5gchHABQglABhUAPIgshWACSFoIAWgyIg6AmACuEqQgxhPgFiSQgDhwAlhMAjIkRIAJhU");
                    this.shape_32.setTransform(-141.8, 107);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ak2kRQgRAygKAHQACAJABAEQACAJAJA4QAGAiAJAKQAgAoAjAQQAoASBFAAAFpEqIgchDIgKAvABvBSQAaABA3gNQAygKAWADQBHAKgCCeIA5AgAmFj9IA0AlIgUhRAlRjYIAAAA");
                    this.shape_33.setTransform(-101.1, 50.6);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADIiGQhNg9gXgQQg+gogpgHQh2gRgVDxIg5hDACADHQiCgogbhBQgQgnAhgnQAigqBWgaAiOgiIgLhHAB6DSIgWAyAB6DSIg5Am");
                    this.shape_34.setTransform(-137.3, 117);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFKEjIASgwQgChrg4g+Qg3g/hkgFAlGkaIgmAnIABAEIABAAQAXA8ABAAQAPAjAWAUQA6A1CGgYAlqjvIgBAAIAAAAQgpgaAAABAl0k1IAIBCAF4E2IgchDIA5Ag");
                    this.shape_35.setTransform(-103.4, 63);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABSCqIA4gvIg8AEAAYipQhSAagfASQhDAoAZA4QAPAeAvAYQAwAYBBAGAAmBDIgWAyAAmBDIg3AmACHiiQihBhBBBkQAhA0BCAk");
                    this.shape_36.setTransform(-128.8, 131.4);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACACIAAgGIgDAJg");
                    this.shape_37.setTransform(-145.1, 132.7);

                    this.shape_38 = new cjs.Shape();
                    this.shape_38.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAaAOIgzgb");
                    this.shape_38.setTransform(-143.7, 44.5);

                    this.shape_39 = new cjs.Shape();
                    this.shape_39.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRkrQA3ADAyBSQA3BZgCBwIA5AdAGLAzIgchAIgSAtAk3oiIAKBGIAkgsAktncQAxB0BQgEQAagCAsgPQAygSASgEAhgIjIA4gvIg8ADAlTGAQgqgpgSgxQgEgKgDgLQgOg6AVgtQAYgtAygJQA4gJBHArAmnGFIBPAGIhKg2AgrDVQijBgBDBnQAhA0BCAk");
                    this.shape_39.setTransform(-110.8, 93.7);

                    this.shape_40 = new cjs.Shape();
                    this.shape_40.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGPAwIgdhBIgSAuAD4k2QAvADAzBSQAXAnADA8QAAADgCBqIA5AeAADmdQghAXgiAMQgrAQgaABQhTAFguhuIg2gcAkRoXIALBFIAkgrAg6IYIA5gvIg9AEAlWFVQg+htAChDQACg4AvgTQApgRA7AQQA5AQAlAiAmqFaIBOAGIhJg2AgEDGQigBfBBBqQAhA1BBAl");
                    this.shape_40.setTransform(-114.7, 94.7);

                    this.shape_41 = new cjs.Shape();
                    this.shape_41.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGxAeIgchAIgSAtAEolcQApACAyBTQAYAmADA8QAAACgJCBIA5AfAAznEQhcBFhNgUQgtgMhPhEIg1gdAj8opIAKBGIAkgsAl5DrQgLhEATg0QASgzAngTQApgUAyAUQA3AXA3BFAgJIqIA2gvIg6ADAAqC4QiOBoA7B2QAeA7A4AqAnNDRIBPAmIg6hS");
                    this.shape_41.setTransform(-119.5, 93);

                    this.shape_42 = new cjs.Shape();
                    this.shape_42.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADZhkQApACAyBTQAXAkAEA8IgKCDIA6AfAFiEWIgdhCIgRAvAgajMQg9AsgaANQgrAWgigJQhOgVg8g0Ig2gdAlTkVIALBGIAkgs");
                    this.shape_42.setTransform(-111.6, 52.8);

                    this.shape_43 = new cjs.Shape();
                    this.shape_43.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj0kTQgEgIAtgMQAtgLAiAAQBfABAqASQAzAVA3BBADgFLIA9gEQgjgYgNieQgPiqAshxAEdFHIg5AvAkcldIAjBWIAChu");
                    this.shape_43.setTransform(-143.5, 110.9);

                    this.shape_44 = new cjs.Shape();
                    this.shape_44.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlTkvQgGAKAAASQAAASgHAFQABAAACABQAAAAgCAKQgBAMAJAMQBQBrBdgFQAdgCAlgOQAogPAFgBAC5grQBlAfAjBkQATA1AAA9QAHAhADADIA5AfAF6EwIgchCIgKAvAmWkfQAqAjAJACIABAAQABgBgBgBIACAAAlij6IAFgBAmSjvQAHgIAogD");
                    this.shape_44.setTransform(-108.4, 44.9);

                    this.shape_45 = new cjs.Shape();
                    this.shape_45.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj+lRQgCgDAmAEQArAFAwAOQCOApBWBdAEEhwQgVA2ALDaQAKDYATANIg5AvADaGJIA9gEAkWmbIATBWIAahu");
                    this.shape_45.setTransform(-142.9, 104.7);

                    this.shape_46 = new cjs.Shape();
                    this.shape_46.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlWlBQgHAKAAASQAAASgGAFQABAAABABQABAAgBAJQABANAFAMQAcA8AUAZQAgAoAxAFQAOABAoAFQApADAogGACgAAQBMAXAXAMQAzAZAPAtQAMAjAQBzIA6AfAF+FBIgdhCIgKAvAmZkxQApAjAJACIABAAQABgBgBgBIADAAAlmkMIAFgBAmVkBQAHgIAngD");
                    this.shape_46.setTransform(-105.9, 40.4);

                    this.shape_47 = new cjs.Shape();
                    this.shape_47.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj+lhQgCgDAkAEQAQACCEBRQCRBZAcANAEEhgQgVA2ALDaQAKDYATANIg5AvADaGZIA9gEAkWmrIATBWIAahu");
                    this.shape_47.setTransform(-142.9, 103.1);

                    this.shape_48 = new cjs.Shape();
                    this.shape_48.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIDhbIgchCIgKAvAEJlyQCPAUAvBcQAPAbAHAmQAHAhADADIA5AfAjjqPQgBgBgBAAIgDAAQACABgCABIAFgBQABAAAGAiQAJAoATAeQBBBkCTgXAjYrDQgHAKAAASQAAASgGAFAkcqzQArAjAIACIABAAAkXqDQAHgIAngDAoHhhQgBgEAkAFQAPACCEBQQCUBYAbANAgDCeQgVA1ALDcQAKDYARAOIg3AvAgsKYIA6gDAofisIATBWIAahu");
                    this.shape_48.setTransform(-116.4, 77.6);

                    this.shape_49 = new cjs.Shape();
                    this.shape_49.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACGAqQCjABAtBmQAWAygJA0IgKAwAGAE5IgdhCIA5AfAmbkBQAFgFAqACIABAAIAFgBQABAAAFAiQARBDAVAaQA8BKCRAAAlrkEQABgBgBgBIADAAQABAAABABAmPk1QARAOAJATQAIAQABAAAlTk5QgRAwgEAD");
                    this.shape_49.setTransform(-103.3, 38.6);

                    this.shape_50 = new cjs.Shape();
                    this.shape_50.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj0kTQgEgIAtgMQAtgLAiAAQBfABAqASQAzAVA3BBADgFLIA9gEIg5AvAEKiKQgsBxAPCqQANCeAjAYAj5kHIAChuAkcldIAjBW");
                    this.shape_50.setTransform(-143.5, 110.9);

                    this.shape_51 = new cjs.Shape();
                    this.shape_51.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmFj9IA0AlIAAAAQACAJABAEQACAJAJA4QAGAiAJAKQAgAoAjAQQAoASBFAAAFpEqIgchDIA5AgABvBSQAaABA3gNQAygKAWADQBHAKgCCeIgKAvAlRjYIgUhRAk2kRQgRAygKAH");
                    this.shape_51.setTransform(-101.1, 50.6);

                    this.shape_52 = new cjs.Shape();
                    this.shape_52.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiCgaQgkhBAEg/QAEg7AigeQAkgfAuATQAzAWAwBRADUhpQiQBoA7B0QAeA8A6ApIg9AEACeEHIA5gvAiHgOIg6hSAjWg0IBPAm");
                    this.shape_52.setTransform(-136.5, 122);

                    this.shape_53 = new cjs.Shape();
                    this.shape_53.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AF4E2IgchDQgChrg4g+Qg3g/hkgFAl0k1IAIBCIABAEQgpgaAAABAlrjvIABAAIgBAAgAlqjvQAXA8ABAAQAPAjAWAUQA6A1CGgYAlGkaIgmAnAGVETIg5ggAFKEjIASgw");
                    this.shape_53.setTransform(-103.4, 63);

                    this.shape_54 = new cjs.Shape();
                    this.shape_54.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJAACgEIAAAGIgDAD");
                    this.shape_54.setTransform(-124.7, 137.5);

                    this.shape_55 = new cjs.Shape();
                    this.shape_55.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACHiiQihBhBBBkQAhA0BCAkIg8AEABSCqIA4gvAAYipQhSAagfASQhDAoAZA4QAPAeAvAYQAwAYBBAGAAmBDIgWAyAAmBDIg3Am");
                    this.shape_55.setTransform(-128.8, 131.4);

                    this.shape_56 = new cjs.Shape();
                    this.shape_56.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFXAzIgdhAIA5AdACdkrQA2ADAzBSQA2BZgCBwIgSAtAlhncIAkgsAlsoiIALBGQAxB0BQgEQAZgCAsgPQAzgSASgEAhfDVQijBgBCBnQAiA0BCAkIg9ADAiVIjIA5gvAjODOQhVAageARQhEAoAaA4QAPAhAuAXQAxAZBCAGAjAG7IgXAyAjAG7Ig6Am");
                    this.shape_56.setTransform(-105.6, 93.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }).to({ state: [{ t: this.shape_18 }, { t: this.shape_17, p: { x: -124.7, y: 137.5 } }, { t: this.shape_16 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_20 }, { t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_21 }, { t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_23 }, { t: this.shape_17, p: { x: -124.7, y: 137.5 } }, { t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_26 }, { t: this.shape_25, p: { x: -124.7, y: 137.5 } }, { t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_28 }, { t: this.shape_17, p: { x: -124.7, y: 137.5 } }, { t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_29 }, { t: this.shape_17, p: { x: -124.7, y: 137.5 } }] }, 3).to({ state: [{ t: this.shape_32 }, { t: this.shape_31, p: { x: -124.7, y: 137.5 } }, { t: this.shape_30 }] }, 3).to({ state: [{ t: this.shape_34 }, { t: this.shape_19 }, { t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_36 }, { t: this.shape_13 }, { t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }] }, 2).to({ state: [{ t: this.shape_40 }, { t: this.shape_25, p: { x: -149.3, y: 129.4 } }] }, 2).to({ state: [{ t: this.shape_41 }, { t: this.shape_17, p: { x: -157.6, y: 117.1 } }] }, 2).to({ state: [{ t: this.shape_43 }, { t: this.shape_31, p: { x: -168.3, y: 83.9 } }, { t: this.shape_42 }] }, 2).to({ state: [{ t: this.shape_45 }, { t: this.shape_17, p: { x: -168.7, y: 71.5 } }, { t: this.shape_44 }] }, 2).to({ state: [{ t: this.shape_31, p: { x: -168.7, y: 68.3 } }, { t: this.shape_47 }, { t: this.shape_46 }] }, 2).to({ state: [{ t: this.shape_48 }, { t: this.shape_17, p: { x: -168.7, y: 68.3 } }] }, 3).to({ state: [{ t: this.shape_50 }, { t: this.shape_25, p: { x: -168.3, y: 83.9 } }, { t: this.shape_49 }] }, 3).to({ state: [{ t: this.shape_52 }, { t: this.shape_31, p: { x: -149.9, y: 119.9 } }, { t: this.shape_51 }] }, 2).to({ state: [{ t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }] }, 2).to({ state: [{ t: this.shape_56 }, { t: this.shape_54 }, { t: this.shape_38 }] }, 2).wait(1));

                    this.instance_4 = new lib.mindy_body();
                    this.instance_4.setTransform(-114.7, 41, 0.999, 0.999, 25.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { y: 41 } }] }).to({ state: [{ t: this.instance_4, p: { y: 37.1 } }] }, 5).to({ state: [{ t: this.instance_4, p: { y: 21.5 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 18.9 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 21.5 } }] }, 8).to({ state: [{ t: this.instance_4, p: { y: 37.1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 41 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 37.1 } }] }, 6).to({ state: [{ t: this.instance_4, p: { y: 21.5 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 18.9 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 21.5 } }] }, 8).to({ state: [{ t: this.instance_4, p: { y: 37.1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: 41 } }] }, 2).wait(3));

                    this.instance_5 = new lib.mindy_wings03();
                    this.instance_5.setTransform(-132.4, 30.1, 0.997, 0.997, 26.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5, p: { y: 30.1 } }] }).to({ state: [{ t: this.instance_5, p: { y: 27.9 } }] }, 5).to({ state: [{ t: this.instance_5, p: { y: 12 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 9.2 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 8.1 } }] }, 4).to({ state: [{ t: this.instance_5, p: { y: 10.3 } }] }, 4).to({ state: [{ t: this.instance_5, p: { y: 24.1 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 27.9 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 29.6 } }] }, 3).to({ state: [{ t: this.instance_5, p: { y: 27.9 } }] }, 3).to({ state: [{ t: this.instance_5, p: { y: 13.6 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 8.7 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 7.6 } }] }, 4).to({ state: [{ t: this.instance_5, p: { y: 8.7 } }] }, 4).to({ state: [{ t: this.instance_5, p: { y: 25.7 } }] }, 2).to({ state: [{ t: this.instance_5, p: { y: 30.7 } }] }, 2).wait(3));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(-108, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(46));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-187.5, -78.8, 227.4, 237);


                (lib.Mary_Cycle = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGABJQgDgJgEAUIgEAYIAxgIQAjgPg6gZAF1BsQhvAdhXghQhFjUgKgQAl0BeIgKAeIDAgPQAihnAnhxAl+B8IgBABQgpAAgCgCQgagbA8gC");
                    this.shape.setTransform(287.5, 13.3);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGPBOQA6AZgjAPIgxAIQiMg2g6gWQhGjWgJgOAGABbQgDgKgEAVIgEAYAl0CUIgKAeIDAh7IBJjYAl+CyIgBABQgpAAgCgCQgagbA8gC");
                    this.shape_1.setTransform(282.7, 20);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGABbQgDgKgEAVIgEAYIAxgIQAjgPg6gZAF1B+Qg4gNhAghQhNgqgBAAQhGjUgJgPAl0CgIgKAeIDAiTIBJjYAmICgQg9ACAbAbQACACApAAIABgB");
                    this.shape_2.setTransform(280.3, 21.2);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGMAUQgDgIgDAUIgCAYIAwgNQAhgSg7gUAGEA4QgNgIhqgUQhcgSgPgBIhQjEAmCCZIgHAgIDdhxIAsjeAmWCbQg9AJAeAYQACABApgDIABgB");
                    this.shape_3.setTransform(280.3, 19.2);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGngsQA8ASgfASQgtAOgCAAQjVAygKgKQhmjBgPgRAGbgcQgEgHgCAUQgBAPABAGAmUCCIgGAgQALgDBXgOQBjgRAfgBQAHgRAShrQAShpgCgKAmpCFQg1AMAYATQAEADAngFQAAAAABAA");
                    this.shape_4.setTransform(279.6, 13.8);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGng8QA8ARgfATIgvAQQhSARhQAiQg7AYgCgCQhmjAgPgSAGbgsQgEgHgCAUQAAARAAAGAmUBgIgGAgQAHgCDdAUQAEgLAljkAmpBjQg1AMAYATQAEADAngFIABAA");
                    this.shape_5.setTransform(279.6, 10.5);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGjhRQA9ARggATIguAQQgiAIheAsQhXArgBgBQhnjBgOgRAGXhBQgEgHgBAUQgBARABAGAmQA/IgHAgQADgBA6AZQBNAaBaABQAEgKAljlAmlBCQg2AMAZATQAEADAngFIAAAA");
                    this.shape_6.setTransform(280.7, 13.3);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGaACQgEgGgCATQgBASAAAFIAvgPQAggSg8gQABJiOQAOASBiDEQAAABDagjAmSBhIgHAgQABAADiAOQAFgMArjiAmnBkQg2AKAYAVQAFACAngDIAAgB");
                    this.shape_7.setTransform(284.5, 14.9);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGdBJQgEgIgDAVQgCAMAAALIAwgMQAhgQg7gWABXibQAMASBUDLQABACBCAPQBPASBLAIAmTB8IgJAfQAAAABKgSQBXgUBAgFQAFAAAPg+QAYhhAThLAmoB9Qg3AHAXAWQAFADAmgBIABgB");
                    this.shape_8.setTransform(289, 16.4);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGdCNQgDgIgEAUIgEAYIAxgJQAigOg5gaABpiwQALAUBFDPQAAAEBaA4QBgA8AfAGAmSA4IgLAfIA5gKQAagCA2gHQAzgEAmAIQAGgKBJjcAmnA4Qg3ADAVAXQAFAEAnABIAAAA");
                    this.shape_9.setTransform(290.3, 19.1);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGcCMQgCgJgFAUIgGAYIAygGQAjgNg4gdAmPgHIgMAcIDjAmQAGgKBVjYAmkgIQg5gBAWAXQAEADAnAEIABAAAB4iuQAJARA8DWQC+BxAUAF");
                    this.shape_10.setTransform(291.7, 16.4);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGdBoQgDgJgFAUIgFAYIAxgGQAkgNg5gdAGQCLQgcAAgjgEQhFgIhPgiQg7jWgKgRAhdiDQhCCpgYAtIjkhHIgBAAQgpgCgCgCQgYgaA8ABAmPgQIgMAc");
                    this.shape_11.setTransform(292, 12.8);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGZBCQgDgJgFAUIgFAYIAxgGQAkgNg5gdAB1h3QAJAQA8DWQA0AXCeghAhhhwQgsBwgmBlIjkgfIgBAAQgpgCgCgCQgZgcA9ABAmLAoIgMAe");
                    this.shape_12.setTransform(289.2, 13.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).wait(2));

                    this.instance = new lib.mary_blink();
                    this.instance.setTransform(251.8, -98.5, 1, 1, 5.9);

                    this.instance_1 = new lib.mary_smile();
                    this.instance_1.setTransform(251.8, -98.5, 1, 1, 5.9);

                    this.instance_2 = new lib.mary_straight();
                    this.instance_2.setTransform(251.8, -98.5, 1, 1, 5.9);

                    this.instance_3 = new lib.mary_head();
                    this.instance_3.setTransform(251.8, -98.5, 1, 1, 5.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { rotation: 5.9, x: 251.8, y: -98.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_2, p: { rotation: 5.9, x: 251.8, y: -98.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: 5.9, x: 251.8, y: -98.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 5.9, x: 251.8, y: -98.5, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_3, p: { rotation: 2.8, x: 241.1, y: -95.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_2, p: { rotation: 2.8, x: 241.1, y: -95.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: 2.8, x: 241.1, y: -95.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 2.8, x: 241.1, y: -95.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -2, x: 230.7, y: -91.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_2, p: { rotation: -2, x: 230.7, y: -91.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: -2, x: 230.7, y: -91.7, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: -2, x: 230.7, y: -91.7, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -5, x: 225, y: -90.2, scaleX: 1, scaleY: 1 } }, { t: this.instance_2, p: { rotation: -5, x: 225, y: -90.2, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: -5, x: 225, y: -90.2, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: -5, x: 225, y: -90.2, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -7.1, x: 219.7, y: -90.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_2, p: { rotation: -7.1, x: 219.7, y: -90.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { rotation: -7.1, x: 219.7, y: -90.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: -7.1, x: 219.7, y: -90.8, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -7.8, x: 219.2, y: -90.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_2, p: { rotation: -7.8, x: 219.2, y: -90.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { rotation: -7.8, x: 219.2, y: -90.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: -7.8, x: 219.2, y: -90.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -9.4, x: 218.4, y: -87.1, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_2, p: { rotation: -9.4, x: 218.4, y: -87.1, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_1, p: { rotation: -9.4, x: 218.4, y: -87.1, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance, p: { rotation: -9.4, x: 218.4, y: -87.1, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -10.4, x: 220.8, y: -84.1, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_2, p: { rotation: -10.4, x: 220.8, y: -84.1, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_1, p: { rotation: -10.4, x: 220.8, y: -84.1, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance, p: { rotation: -10.4, x: 220.8, y: -84.1, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -10.4, x: 227.6, y: -84.5, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_2, p: { rotation: -10.4, x: 227.6, y: -84.5, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_1, p: { rotation: -10.4, x: 227.6, y: -84.5, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance, p: { rotation: -10.4, x: 227.6, y: -84.5, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -5.4, x: 237.6, y: -89.4, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_2, p: { rotation: -5.4, x: 237.6, y: -89.4, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_1, p: { rotation: -5.4, x: 237.6, y: -89.4, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance, p: { rotation: -5.4, x: 237.6, y: -89.4, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 249.2, y: -96.7, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_2, p: { rotation: 0, x: 249.2, y: -96.7, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_1, p: { rotation: 0, x: 249.2, y: -96.7, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance, p: { rotation: 0, x: 249.2, y: -96.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 5.4, x: 259.1, y: -101, scaleX: 0.997, scaleY: 0.997 } }, { t: this.instance_2, p: { rotation: 5.4, x: 259.1, y: -101, scaleX: 0.997, scaleY: 0.997 } }, { t: this.instance_1, p: { rotation: 5.4, x: 259.1, y: -101, scaleX: 0.997, scaleY: 0.997 } }, { t: this.instance, p: { rotation: 5.4, x: 259.1, y: -101, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 7.2, x: 257.7, y: -99.5, scaleX: 0.997, scaleY: 0.997 } }, { t: this.instance_2, p: { rotation: 7.2, x: 257.7, y: -99.5, scaleX: 0.997, scaleY: 0.997 } }, { t: this.instance_1, p: { rotation: 7.2, x: 257.7, y: -99.5, scaleX: 0.997, scaleY: 0.997 } }, { t: this.instance, p: { rotation: 7.2, x: 257.7, y: -99.5, scaleX: 0.997, scaleY: 0.997 } }] }, 2).wait(2));

                    this.instance_4 = new lib.mary_body();
                    this.instance_4.setTransform(270.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { rotation: 0, x: 270.8, y: -7.3, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_4, p: { rotation: -4.7, x: 264.4, y: -5.4, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: -5.2, x: 262.3, y: -5.2, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: -6.7, x: 260.4, y: -6.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: -8, x: 258.6, y: -7.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: -8, x: 258.4, y: -8.4, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: -6.7, x: 260.4, y: -6.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: -4.7, x: 264.4, y: -5.4, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: 0, x: 270.8, y: -7.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: 3, x: 274.1, y: -8.1, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: 6.1, x: 277.9, y: -11, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: 8.1, x: 279.1, y: -12.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { rotation: 3, x: 274.1, y: -8.5, scaleX: 1, scaleY: 1 } }] }, 2).wait(2));

                    this.instance_5 = new lib.mary_skirt();
                    this.instance_5.setTransform(261.2, 20, 0.999, 0.999, -12.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5, p: { rotation: -12.7, x: 261.2, y: 20, scaleX: 0.999, scaleY: 0.999 } }] }).to({ state: [{ t: this.instance_5, p: { rotation: -9.7, x: 257.8, y: 18.6, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: -7.4, x: 256.2, y: 17.6, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: -1.1, x: 255.8, y: 12.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 2.8, x: 255.6, y: 9.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 7.6, x: 256.8, y: 6.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 8.9, x: 258, y: 7.8, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 10.1, x: 261.3, y: 9.1, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 11.7, x: 265.5, y: 8.8, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 6.3, x: 266.4, y: 11, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: -0.7, x: 266.7, y: 12.3, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: -8.2, x: 265.8, y: 14.6, scaleX: 0.997, scaleY: 0.997 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: -13, x: 263.3, y: 18.3, scaleX: 0.997, scaleY: 0.997 } }] }, 2).wait(2));

                    this.instance_6 = new lib.mary_wings01();
                    this.instance_6.setTransform(254.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6, p: { x: 254.6, rotation: 0, y: -25.4, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_6, p: { x: 249.4, rotation: 0, y: -25.4, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 245.6, rotation: -3.2, y: -23.5, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 243.7, rotation: -5, y: -23.6, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 239.6, rotation: -8.5, y: -24.2, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 238.8, rotation: -8.5, y: -24.6, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 241.7, rotation: -7, y: -22.4, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 246.1, rotation: -5, y: -22.8, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 253, rotation: -2, y: -24.6, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 257.2, rotation: 0.2, y: -25.8, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 263.8, rotation: 5.7, y: -29.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 265.1, rotation: 6.8, y: -31.3, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_6, p: { x: 263.1, rotation: 8.6, y: -30.5, scaleX: 0.998, scaleY: 0.998 } }] }, 2).wait(2));

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgaERQA/kWAhj1AhFkTQAKDYgHFP");
                    this.shape_13.setTransform(313.7, -116.8);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhfECQAChQAghhQA7i1CKiBAgPkEQhwDEgIFF");
                    this.shape_14.setTransform(309.8, -116.2);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah1DwQAAgjARgzQAVg5AJgeQAtiPC4h1AidDzQADiEAchvQAtirBghH");
                    this.shape_15.setTransform(303.1, -115.3);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah+D6QAAgQgJhIQgKhJABgyQAEioBxh4AhWD4QgMhoAXhhQAui+Cugq");
                    this.shape_16.setTransform(295.4, -116);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhgD6QgwiyAAghQAEi5BihnAg4D4QgMhqAahfQAqiiCRhV");
                    this.shape_17.setTransform(286.4, -120.5);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AASECQgJggghhCQgphNgPgnQg+ibBCiSAA6D/QgYiMgDhqQgFjJBVgu");
                    this.shape_18.setTransform(274.8, -121.3);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhyjlQglC+BmCFQAVAdA7A9QAsAuAKAaABYj/QhRCTAwCqQANAuAeBGQAZA7ACAQ");
                    this.shape_19.setTransform(268.1, -118.1);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB9DxQgSgXg5g2Qg1g1gWgfQg4hLgjhIQgQghgghUAClDuQg5hQgyhhQhhi+Aihv");
                    this.shape_20.setTransform(264.1, -116.6);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjKipQALAIAyAgQA2AkAtAlQCJB0BDCXAg6jSQA+AmBWCFQBaCKAWBt");
                    this.shape_21.setTransform(266.4, -113.6);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACiC1QgwilifhMQgygYg6gOQgvgJgCgCAhJi0QAiAGAtAbQA1AeArAtQBwBwgMCK");
                    this.shape_22.setTransform(275.4, -110.6);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjKh8QAAABA4AMQBDASA4AdQCxBbAICpADKDBQAVlJkKg7");
                    this.shape_23.setTransform(288.9, -112.1);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiZiaIAtAPQA0AWApAiQCABtglDIAB0DfQAxh5gPhHQgpi8h2hE");
                    this.shape_24.setTransform(306.5, -115.1);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhsjWIAeAjQAjAtAaA1QBPCoguC4AA4EMQA6iQgGibQgHiphShG");
                    this.shape_25.setTransform(311, -115.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_13 }] }).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 2).wait(2));

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkfG/QBUggAxgfQAPgKA5gNQgpkSABhxQAAgjANhMQAOhXAEguQAKiFgBgNAAgm+QAIAaANB6QAQCSAECAQAGCygPC8IC0AoABAFWIAEASIDcA6");
                    this.shape_26.setTransform(291, 93.1);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhemgIgUCtQgUCxAAAoQgBA+AWB4QAZCTAGA6Qg5ANgPAKQgxAfhUAgAAIm+QAIAZANB7QAFApAUBlQASBWABAuQAGCygPC8IC0AoABAFWIAEASIDcA6");
                    this.shape_27.setTransform(291, 93.1);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhymgIgUCtQgTCrgBAuQgBAoBJFbQg5ANgPAKQgxAfhUAgAgGm+QAFARBCGVQAJD4gKB2IC0AoABAFWIAEASIDcA6");
                    this.shape_28.setTransform(291, 93.1);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkfG/QBpgnAYgQQADgCAigqQAggnAHAAQgfiQgPkwIgKkVAg+m+QACAGAuBdQA1B9AyCiQAHAVgNCSQgHBPgMB8IC0BIABAE2IAEASIDcBa");
                    this.shape_29.setTransform(291, 93.1);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Agqm+QAUBGBFCYQA/CHAAANQAACNguDRIC0gsABAESIAEAaIDgg6AkjG/QBVggAwgfQAPgKAohxQgopQgDhV");
                    this.shape_30.setTransform(291.8, 93.1);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Agqm+QANAvBvFXQAHAjgCB8QgDCYgUBbIC0hEABAFaIAEAaIDghSAkjG/QBVggAwgfQAFgEAWgIQAXgQARgvQg1qcgCg5");
                    this.shape_31.setTransform(291.8, 93.1);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEgFeIjcAKIgEgSQAVkkgTh8QgJg4gZhgQgsiwgKgsAD0E6Ii0AcAkfG/QBVggAwgfQAFgEAUgEQAVgMARgvQgoqIgDhV");
                    this.shape_32.setTransform(291.4, 93.1);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkfG/QBUggAxgfQAPgKA5gNQgFgxgXicQgSh2ABhAQAAgiAPhNQARhWAEgvQAKiFgBgNAAUm+QAIAZANB7QADAaApD4QABAigICHQgHCGgHA/IC0AoABAFWIAEASIDcA6");
                    this.shape_33.setTransform(291, 93.1);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAwm+QAIAZANB7QAXDtABAlQADBIggEmIC0AoAkfG/QBUggAxgfQAPgKA5gNQgulZABgqQBOl/gBgHABAFWIAEASIDcA6");
                    this.shape_34.setTransform(291, 93.1);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag6mgQAAADgwCzQgxCzAAANQgBAqA6E1QgTAEhFA9QhIA/gdAKAA0m+QAIAZANB7QADAagDEQQgDEegGA4IC0AoABAFWIAEASIDcA6");
                    this.shape_35.setTransform(291, 93.1);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AklDWQC/AzAOgBQhBlpAAgHQBOkmgBgDAEmGxIiKglIg6hhIgEgSQAHhTgNk4QgNkrgFgSACcGEIAAAIAD6GMQhDADhZh2");
                    this.shape_36.setTransform(290.4, 91.7);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AklFKQC+AzAPgBQgDgXgkltQAahLAVilQATiQgDgJAEmGxIiKglIhGgtIgEgSQAVkJgHi2QgGh+gThnQgJgtgMgrAD6GMQg4ADgRgEQgKgDgLgFIAAAJACcGDQg0gYgWge");
                    this.shape_37.setTransform(290.4, 91.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_26 }] }).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 2).to({ state: [{ t: this.shape_30 }] }, 3).to({ state: [{ t: this.shape_31 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 3).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_36 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).wait(2));

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(289.7, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_7.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get(this.instance_7, { override: true }).wait(3).to({ x: 286.8 }, 0).wait(3).to({ x: 283 }, 0).wait(3).to({ x: 280.2 }, 0).wait(3).to({ x: 283 }, 0).wait(3).to({ x: 286.8 }, 0).wait(3).to({ x: 290.6 }, 0).wait(4).to({ x: 293.5 }, 0).wait(3).to({ x: 291.6 }, 0).wait(1));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(241.1, -144.4, 99.3, 291.9);


                (lib.James_Cycle = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABtieQANgLCPgWQCKgWANACQAPBFBKDCIAAAAIACAEQAIAYALAEQATAJAmgcAH7A4QAEAUARAWQAbAlAqgIAiniWQgPgJiGAFQiAAEgLAFQhOEYACAEQAHAsgUAUQgTATgegUAoTCLQgpBHgYhA");
                    this.shape.setTransform(-273.4, 25.8);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AJRCVQgqAHgbgkQgRgWgEgVIgCgDIAAgBQhJi/gQhHQhLgOhGgLQiMgXgGAFAJDBWQgmAdgTgJQgLgFgIgYAibjhQgHgDiOAzQh0ApgfAMQhOEYACAFQAHArgUAUQgTAUgegVAoPChQgpBHgYhB");
                    this.shape_1.setTransform(-279, 32.1);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIdDIQgqAIgbglQgRgWgEgUIgCgEIAAAAQg5iWgYhpQgegFhphNIhkhJAIPCKQgmAcgTgJQgLgEgIgYAiPkVQjrDEgVAJQhOEYACAEQAHAsgUAUQgTATgegUAocDbQAYBAAphH");
                    this.shape_2.setTransform(-284.2, 23.7);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AnoCnQAYBAAphHQgIgXgHh/QgHiCAKgMQAKgMB4gnQB/gpAfAHACBjhQA5gYDiAzQAIAFgXEaIAAAAIACAEQAIAYALAEQATAJAmgcAHpCkQgqAIgbglQgRgVgEgVAnlDfQAeAUATgTQATgVgGgr");
                    this.shape_3.setTransform(-285, 12.6);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AntDOQAeAVATgUQATgUgGgrQgHgTgJi4QgCg/AWgbQANgOBoAfQChAyACAAACBhaQAOgDBuhDQBvg/AgAJQAHACAEB9QADB5gFAuIAAABIACADQAEAVARAWQAbAkAqgHAGXBUQAIAYALAFQATAJAmgdAnwCWQAYBBAphH");
                    this.shape_4.setTransform(-283.4, -1.7);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiXguQg3gfg9gcQh5g3gjAPQgOAGgSCLQgRCGAFANQAHArgUAVQgTATgegUAB9g2QA2gtA3gqQBvhUAnAGQA9EIgEAfIAAAAIACAEQAIAYALAEQATAJAmgcAIVCXQgqAIgbglQgRgWgEgUAoUCaQAYBAAphH");
                    this.shape_5.setTransform(-283, 0.2);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACBg+QAegZBrg6QBwg9ASADQAXBoAmBXQAdBDgBAFIAAAAIACAEQAIAYALAEQATAJAmgcAJBCHQgqAIgbglQgRgVgEgVAiTg2QgjgUhygpQh7gtgQAHQgGADglCKQgkCIADAHQAHArgUAVQgTATgegUAn/CDQgpBHgYhA");
                    this.shape_6.setTransform(-279.4, 13);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIdDIQgqAIgbglQgRgWgEgUIgCgEIAAAAQg5iWgYhpQgegFhphNIhkhJAIPCKQgmAcgTgJQgLgEgIgYAocDbQAYBAAphHQgCgEBOkYQAVgJDrjEAnbDUQAHAsgUAUQgTATgegU");
                    this.shape_7.setTransform(-269.4, 21.7);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACBjhQA5gYDiA0QAIAFgXEZIAAABIACADQAIAYALAFQATAJAmgdAHpClQgqAHgbgkQgRgWgEgVAnoCnQAYBBAphHQgIgXgHh/QgHiDAKgMQAKgLB4gnQB/gqAfAHAnlDfQAeAVATgUQATgUgGgr");
                    this.shape_8.setTransform(-268.2, 11.7);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACBiNQBVgkBYgZQBdgbARAMQAIAFgXEZIAAABIACADQAIAYALAFQATAJAmgdAGPBJQAEAVARAWQAbAkAqgHAiTiFQhHgQhggGQhqgGgPARQgWAaALB7QAKBqANAmQAGArgTAUQgTAUgegVAnoCbQAYBBAphH");
                    this.shape_9.setTransform(-267.8, 3.3);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB9g2QA2gtA3gqQBvhUAnAGQA9EIgEAfIAAAAIACAEQAIAYALAEQATAJAmgcAIVCXQgqAIgbglQgRgWgEgUAiXguQg3gfg9gcQh5g3gjAPQgOAGgSCLQgRCGAFANQAHArgUAVQgTATgegUAoUCaQAYBAAphH");
                    this.shape_10.setTransform(-267.4, 0.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape, p: { x: -273.4, y: 25.8 } }] }).to({ state: [{ t: this.shape_1, p: { x: -279, y: 32.1 } }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6, p: { x: -279.4, y: 13 } }] }, 2).to({ state: [{ t: this.shape, p: { x: -274.2, y: 25 } }] }, 2).to({ state: [{ t: this.shape_1, p: { x: -271.4, y: 32.5 } }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_6, p: { x: -271.4, y: 14.6 } }] }, 2).wait(2));

                    this.instance = new lib.james_smile();
                    this.instance.setTransform(-307.9, -63.4);

                    this.instance_1 = new lib.james_head();
                    this.instance_1.setTransform(-307.9, -63.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1, p: { x: -307.9, y: -63.4 } }, { t: this.instance, p: { x: -307.9, y: -63.4 } }] }).to({ state: [{ t: this.instance_1, p: { x: -311.1, y: -64.2 } }, { t: this.instance, p: { x: -311.1, y: -64.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -313.5, y: -77.8 } }, { t: this.instance, p: { x: -313.5, y: -77.8 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -313.5, y: -82.6 } }, { t: this.instance, p: { x: -313.5, y: -82.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -314.3, y: -86.6 } }, { t: this.instance, p: { x: -314.3, y: -86.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -314.3, y: -81 } }, { t: this.instance, p: { x: -314.3, y: -81 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -311.9, y: -69.8 } }, { t: this.instance, p: { x: -311.9, y: -69.8 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -308.7, y: -64.2 } }, { t: this.instance, p: { x: -308.7, y: -64.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -304.7, y: -64.2 } }, { t: this.instance, p: { x: -304.7, y: -64.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -300.7, y: -80.2 } }, { t: this.instance, p: { x: -300.7, y: -80.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -300.7, y: -87.4 } }, { t: this.instance, p: { x: -300.7, y: -87.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -300.7, y: -90.6 } }, { t: this.instance, p: { x: -300.7, y: -90.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -299.9, y: -84.2 } }, { t: this.instance, p: { x: -299.9, y: -84.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { x: -303.1, y: -68.2 } }, { t: this.instance, p: { x: -303.1, y: -68.2 } }] }, 2).wait(2));

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiMEsIAkkqQgDgqAXiKQAUh6gFgDAhXExQgDgeAGgxQACgKAfh1QALgmATgvQAOgiABgOQAGhHAwhNQAbgrBChP");
                    this.shape_11.setTransform(-264.6, -92.6);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AigEfIAckpQgFhFAmhxQAhhigCgBAhrEkQgHg/ADgQQAeiLBAiRQAhhRA4gyQAagXA/gl");
                    this.shape_12.setTransform(-266.6, -91.8);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhYEYQgHg9ADgSQAMhCALguQAThVAXg8QBCi2BxgLAiNETQgGh0gCgyQgEhVAGg1QAPiLBihv");
                    this.shape_13.setTransform(-270.4, -104.9);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AggE3QgKhZAQiFQAajZBcibAhVEyQgJiXADidQAGkFApgv");
                    this.shape_14.setTransform(-276.4, -112.4);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAuFBQgKhhADi4QAEkfAohEAhNlAQgRASApEUQAwFHABAP");
                    this.shape_15.setTransform(-284.7, -117.8);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABnE+IgckqQgIiCAFgrQAEhKACgZQAFgqARgJAArFDQADgdgGgyQgHgzACgWQgymEhXhp");
                    this.shape_16.setTransform(-289.8, -112.4);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABJFJQADgdgGgyQgHgzACgWQgXithCiWQgyhwg6hGABBkpQgFADALBAQALBHgBAMQgCAUANA4QAOA8gBAlIAcEq");
                    this.shape_17.setTransform(-290.3, -101.5);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABmE8QADgegHgxQgBgKggh1QgYhZg6iAQhNiog7goACaE3IgjkrQACgpgUiKQgRh6AFgD");
                    this.shape_18.setTransform(-290.1, -94.2);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABiEwQAFgogShxQgUiCghhQQgkhggvg2Qglgrg9ghAAvkvQBPEDgDAsIAcEr");
                    this.shape_19.setTransform(-285.3, -93);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACOETQAGh0ACgyQAEhVgGg1QgPiLhihvABZEYQAHg9gDgSQgMhCgLguQgThVgXg8QhCi2hxgL");
                    this.shape_20.setTransform(-281.4, -107.1);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABWEyQAJiXgDidQgGkFgpgvAAhE3QAKhZgQiFQgajZhcib");
                    this.shape_21.setTransform(-275.8, -118.5);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AghFBQAKhhgDi4QgDjVhBhuABalAQARASgpEUQgwFHgBAP");
                    this.shape_22.setTransform(-268.9, -121.3);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhWE+IAckqQgChsgHhBQgKh3gqgUAgaFDQgDgdAHgyQAGgzgBgWQAxmEBYhp");
                    this.shape_23.setTransform(-262.7, -114.9);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag/E8QgDgeAGgxQACgKAfh1QAdhwAEgqQAPiZBih2Ah2kkQARAJAJBxQAFA+AHB4IgkEr");
                    this.shape_24.setTransform(-261.7, -97.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_11 }] }).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).wait(2));

                    this.instance_2 = new lib.james_body();
                    this.instance_2.setTransform(-321.4, -5.9);

                    this.instance_3 = new lib.james_wings01();
                    this.instance_3.setTransform(-352.6, 1.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { x: -352.6, y: 1.6 } }, { t: this.instance_2, p: { x: -321.4, y: -5.9 } }] }).to({ state: [{ t: this.instance_3, p: { x: -356.4, y: -1.4 } }, { t: this.instance_2, p: { x: -325.2, y: -8.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -360.1, y: -15.6 } }, { t: this.instance_2, p: { x: -328.9, y: -23.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -360.1, y: -19.6 } }, { t: this.instance_2, p: { x: -328.9, y: -27.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -360.1, y: -13.6 } }, { t: this.instance_2, p: { x: -328.9, y: -21.2 } }] }, 4).to({ state: [{ t: this.instance_3, p: { x: -356.4, y: -1.4 } }, { t: this.instance_2, p: { x: -325.2, y: -8.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -352.6, y: 1.6 } }, { t: this.instance_2, p: { x: -321.4, y: -5.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -348.9, y: -0.6 } }, { t: this.instance_2, p: { x: -317.7, y: -8.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -345.1, y: -18.6 } }, { t: this.instance_2, p: { x: -313.9, y: -26.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -345.1, y: -22.6 } }, { t: this.instance_2, p: { x: -313.9, y: -30.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { x: -345.1, y: -16.6 } }, { t: this.instance_2, p: { x: -313.9, y: -24.2 } }] }, 4).to({ state: [{ t: this.instance_3, p: { x: -348.9, y: -0.6 } }, { t: this.instance_2, p: { x: -317.7, y: -8.2 } }] }, 2).wait(2));

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACCkbQCABZgTBvQgRBmiVCIIE2BSAluD4IFChnQk8jrD6jIAgsCRIlSCSABJCbIEzB4");
                    this.shape_25.setTransform(-280, 118.3);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB3krQA8AqAaBEQAXA+gLA9QgVB9h7BwIE2BTAiPkzQhaCDAZB9QAaB9CKBYIlSCSAgsCiIlCBmABJCrIEzB4");
                    this.shape_26.setTransform(-280, 116.6);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABGliQATANAXAnQAdAyAMA6QAhClh3CcIE2DWABDB/IE0D8AloFgQC/gqBWiVQgyiPgRhgQgQhcgQjhAhTChQg3Bzg5AtQg5Avh8Ab");
                    this.shape_27.setTransform(-280.5, 107.8);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AirmWQAIBsAhCqQAgCgAaBLQgXAxgxA8QhYBoiFBXABRmDQAeAUAQAOQAuAoAUArQBACIjJCDIE2DVAA4gDIE0D6AhIBrQgZArhiBYQhYBQhCAt");
                    this.shape_28.setTransform(-281.6, 106.7);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABLl9QAWAOA3AhQAtAgAKAbQAZBEghA6QglBAhvBCIEzD6AlYFmQAMgIBDg2QBBg1ALgKQBMhFAvhPQgqBYgfAlQhaBriDBUAAzgTIE2DUAhCBVQgghLgehfQg7jCALh5");
                    this.shape_29.setTransform(-281.1, 106.2);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlYFlQD2hiAgg2QgghGgWgxQgohYgMgoQgZhSAGhzQALh5AEgoABLlSIBNAwQAuAgAJAbQAgBVgdA0QgQAcgtAeQgSANhQAtIE2DXAAzAWIEzD9AloGRQBug+A7giQBshAARgk");
                    this.shape_30.setTransform(-281.1, 106.2);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGCEaIlKhuQCEhlgDi2QgChGgWg5QgVg2gagLAirkrQhDCBAhB5QAnCFB0BKIlRCSAgyCeIlBBmAGED1IlMhJ");
                    this.shape_31.setTransform(-279.4, 117);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC5kmQA5AoAMBBQAIAsgMBJQgPBaiiCTIE2BTAg3ktQiEBpgEBzQgFB7CYByIlSCSAluEDIFChnABJClIEzB4");
                    this.shape_32.setTransform(-280, 117.2);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhElvQgHAGgNAXIgWAqQgdAygLA5QgiCmB3CbIkpD9AC4mFQgQDhgQBbQgRBhgyCPQBWCUC/ArABVCnQA3ByA5AuQAhAbAUAJQAbAOA6ANAhBCEIkgDB");
                    this.shape_33.setTransform(-276.9, 107.3);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag8l7QhlAngYBkQgIAiACAjQACAcAFAJQAlA/BvBCIkzD6AFNGCQg+gogmgjQgegbgxg7QgfglgqhYQA/h1AUhAQAqiJgPinAFbFoQgggVgjgdQhBg1gLgKQhMhEgvhPAgkgFIk2DV");
                    this.shape_34.setTransform(-276.8, 104.7);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhClqIhNAwQgtAggKAbQgZBDAhA7QAQAcAoAaQAGAEBWAzIkzD6AFRF9Qh5hahEhRQgegjgrhaQAJgUAog3QAkgvALgkQA8jFguhuAFhFlQgNgIhCg2IhMg/QhLhDgwhQAgqgUIk2DV");
                    this.shape_35.setTransform(-276.4, 104.2);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhClMIhNAwQguAggJAbQggBWAdAzQAQAcAtAfQASANBQAtIkzD8AFTGLQhkg+gngWQgxgdgqgqQgjgkgLgWQBui/AIgbQAZhRgGh0QgEgvgOg2QgOg1gBgHAFhFrQhxgthWg5QhIgxgTgeAgqAdIk2DW");
                    this.shape_36.setTransform(-275.9, 105.6);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhTkuQgEADhDBZQhBBWAeBkQAdBjB0BSIlSCSACsknQBjBFgaCbQgQBficCOIE2BTAgsCdIlCBnABJCmIEzB4");
                    this.shape_37.setTransform(-280, 117.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_25 }] }).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 2).to({ state: [{ t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_31 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_36 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).wait(2));

                    this.instance_4 = new lib.shadow();
                    this.instance_4.setTransform(-283.4, 141.6, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_4.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get(this.instance_4, { override: true }).wait(3).to({ x: -285.3 }, 0).wait(3).to({ x: -286.9 }, 0).wait(6).to({ x: -284.1 }, 0).wait(2).to({ x: -280.5 }, 0).wait(3).to({ x: -277.3 }, 0).wait(3).to({ x: -274.5 }, 0).wait(3).to({ x: -275.3 }, 0).wait(2).to({ x: -276.9 }, 0).wait(2).to({ x: -279.7 }, 0).wait(1));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-352.6, -123.2, 147, 275.4);


                (lib.robot_shake = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play": 1 });

                    this.frame_39 = function() {
                        this.parent.gotoAndStop("f4");
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ABaipQAEgOAMAKQAFAEAHgDQAIgDAGgGQAMABACAQQAAACACACAhEiPQAbgLAZARQAFAEAGACQAWAGAKAcQAMAiAOAaQABADgCAEQgOAWgcgFQgggHgXAUQgGAEgFAFQgMAMgIAKQAQAJAYAKQAIAEAIAEQAHAEAIACQAWAHATAOQAGAEAAAJQAAAIgBAJQgBALgCAKQgDAIgEAEQgJAIgBAKQAAABAGACQAHAAgMAHQgRAJgSgEQgSgEAKgMAhyhhQAAAQAEAPQABACgFADQgQAJgRAB");
                    this.shape.setTransform(29.8, -40.7);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ABeAlQgLAKAIgNQAFgJAGgJQAHgIAEgIQACgCACgDQACgEAEgCQAZgLANgWQALAHAMAHQAFACAGAAQAPAAANgGQANgFANABQAHAAAGACQAXAJAbgJQAIgCAFADQgDgFABgJQACgNgJgMQAYAGALgNQADgDAEgDQAXgNgDgYQgBgGgDgGQgFgJgGgJQgFgGgEgGAFJggQgCgCgCgBAAOBtQAFAYgXAHQgJACgJADQgLAEgEgKQgBgFgFgEQgVgTgdgCQgHAMADARQgMAcgagBQgGAAgGABQgTAEgQgJQgHgEgIgDQgWgIAAgZQABgGgFgGQgFgIgLABQgCAAgCgCQgDgEgDgEQgFgHgLACQgGABgEADQgGAFAAAIQAAAPADAPQABAEAAAEQgbACgcABQgGAAgCgLQgDgYgWgHQgCgBgCgCQgOgSAJgUQADgGACgGQACAAACAA");
                    this.shape_1.setTransform(14.7, -56);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AALjQQAOALAOAMQAEAEABAGQACARgSAGQgGADgHADQgUAJgMAQQgKANAKAGQAcASAfgIQADgBADADQAQALAKAQQAEAGABAIQADAUgNANQgDADgEACQgcAQgeANQgHAFgIAHQgJAJgIALQgKANgQAIQgEACgDADQgKAKACANQADAOAJALQAFAGAGAEQAAAKgKAGQgEADgEAFQgIAPgGAQQgEAMALAEQAFACAEAC");
                    this.shape_2.setTransform(26.8, -28.3);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AIIjhQAbgOARgYQACgEgGgHQgRgWAQgbQADgEgCgHQgLgjgKgiQgCgJAFgKQAFgJALgDQAGgDAGgCQATgFAAgYQAAgLACgKQAEgZgVgIQAMgLAJgLQAEgDgCgIQgEgMgHgKQgVgdgcAQQgEADgDgCQgEgDgEgFQgEgFgHgDQgGgCgGAAQgHgBgCgLQgFgagYAAQgGABgGAEQgHAGgCAKQAAADgEACQgOAHgPAAQgHAAgFgFQgOgKgRgDQgFgCgHAAAIMimQgIAIgFAKQgCADACAEQAHAMgMAMQgQAQgSAFQgHACgJgCQgKgBgKACAFxhSQgRATgQgQAEdAAQAJAJAKAGQAGAEACAGQACAGAAAHQAAAGAAAGAEEIlQAkgGADAjQABALAGAJQAEAGAAAIQAAAIgFAEQgJAHgDAGQACAGALACQAGABAHAAADaFxQANAfgFAfAjQhvQgeAKgegSQgFgDgGAAQgPgCgKgGQgGgEgGgJQgDgEgFABQgMADgKAGQgaAPgcgFQgJgBgIgFQgLgFgGgLQgLAPgIAIQgCACgEABQgVAEgMgOQgDgDgCgFQgNgPgFgMQgBgCADgEQABgCACgDQgNgHgPgIQgHgEgFgHQgEgFgCgGAhni7QgdgIgHgYQgCgDACgHQACgGgCgGQgCgDgDgDQgKgMgGgPQgBgFgFgFQgCgCgCgBAosjhQgQABAFgNQADgHACgHQACgFACgGQACgFAEgEQAMgNgPgFQgLgFgJgIQgGgHgIgEQgLgGAFgJQACgEACgDQAJgLAOgNAARAIQgXgEgTgRQgJgIgKgHQgGgEgGABQgJACgJAFQgMAIgEAMQgCAEgHADQgUALgWgGQgWgGgWgDQgEgBgEgIQgCgFgEgEQgRAKgRAJQgEACgEACQAFgegcgGQgHgCgHAHQgHAHgLgCQgbgEgDAYQgBAGACAIQACAFAAAEQABAFgIACQgWAJgYAGQgTAFgBAXQAAAPgCAOQgDATASASQAGAGAGAEQAUAPgHAYQgBABAEACQAIAFgIAHQgUAUgeAJQADALANAFQADABADADQAGAEAGABQAEABACACQACACAAAEQgCAKgJAIQgGAFgBAHQgBAGAEAFQAEAHAGAHQAFAGAEAG");
                    this.shape_3.setTransform(1.1, -42.6);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAjhyQgQgCANAOQAHAHAHAHQANAOgQAKQgeATgaAVQgDACAAAEQgBAKgJACQgGABgHADQgQAHAFAPQADAHAIADQAMAFACANQABAGABAGQABAMgIAKQgHAJAGAIQADADAGgBQASgCgBAQ");
                    this.shape_4.setTransform(22.3, -19.7);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ADvs6QgPACgOADQgEABgFACQADgWgYAAQgZABgZAAQAAgCAAgCQAAgCAAgDQACgDACgFQgYAFgXAJQgDABgEAAQgNgCgNAAQAMgLgCgNQgBgGgJgDQgOgFgPgEQgKgDgKACQgFABgBAFQgMgQgJgUQgBgDABgFQgeADgdACQgDAAgDADQgJAHgLgBQgMgBgLgEQgLgFgMgEQgMgDgBgNAEMtDQgEgXgNgOQgIgHgMABQgLACgIABAEls2QAXgWAlgDQAGAAAGACQAGACAGABQAFABAEABQAgAEAVgJQADgCAHACQAKACALgBQASgCAMALQADACABAHQAEATARgJQAKgGAKgEQAIABAAALQABAJABAJQABAGgEAFQgLAWAZAAQAUACASAAQAEAAAEAGQAJAQAAARQAAAJgKAHQgYAQAZATQANAKADAMQABAFgFAEQgSARgXACQgLAAgKACAFPjBQAZAbgaAWQgHAGgCAIAEyFeQADgUADgRADeKpQAJANgEAOQAAABADADQgOAJgCALQAAAGAFAFQAFAGAFAFQACADAAAEQACANAOAFQALAFgBAKQgBAHgFAGQgDAEgDAFQgCAEAAAEQAAAIgEAHQgCAEACAGQAEAQARgDAnplcQgeAQghgIQgGgCgGgBQgGgBgFgDQgEgBgCgEQgSgbgIgdQgBgFADgFQAMgSATgIQABgBABgEQAEgPABgOQABgLgBgLQgBgKgDgKQgBgFgFgDQgSgSgYgEQAEghAigRQAJgEAGgHQACgCgCgDQgJgagJgaQgBgDACgDQAEgGAHgDQAMgFAMgGQADgBACgBQgCgLgIgIQgFgFAAgGQgCgNgFgKQgDgGgJgBQgKgBgLAAQgGAAgFgEQgIgEgBgKQAAgHgEgHQgDgEgCgEQAMgLAFgQQACgFABgFQABgDAEAAQAHAAAGABQAXABAXgDQAKgBAFgLQACgFAAgFQAAgJgGgHQgKgRAUgIQAUgJAWAHQAOAEAMgDQAHgCAJADQAGABAFgBQAMgDAKgHQAHgFAGgHQACADABABQAOATASgOQAFgCACgHQACgEACgEAjQubQgMAEgMAFQgDABgCADQgCgYgTgLQgMgGAEgOQgSADgMASAi3nrQgVgcgJggQgBgCACgFQAJgPABgPQABgDgDgFQgVgbglAAQgEAAgFgGQgEgEgBgFQgBgGAEgGQAFgGAGgHQAGgEAFgGQAJgJAJgGQAHgEAGgEQgIgLgQgFQgDgBgCgFQgCgMgHgJQAJgBAIgGQALgHAOACAhvoEQgLAPAFASQACADAEAAQAFABgFAJAmEgZQgOAXABAZQABANgIANQgFAKAAAKQAAANADANQAFARAGAPQAFALAHAKQAcAjgTArQgCAFgHADQgJAFgJAFQgeAQgWAZQgGAGABAHQADAIAJAFQAMAGANACQAQADAJAMQAIAKAMAHQATAMAMASQADAFgDAFQgDAHgIAGQgJAHgCAKQAKAKAPABQACAAACACQgFATgYADQgfAFgCAcQgBAGAFAFQAQAXgIAaQgCAJgLAGQgOAJgOAGQgDACgCAEQgHAQAIAMQAKAPASAEQAnAHAlAPQAGACAEADQAJAGABAJQADAJgBALQgCATAGARQABAEAFADQAIAFAFAHQAHAJgCALQAAAHgDAFQgDAHgIAFQgLAHgIAMQgNAUATAGQAEABAAAGQAAANAJAKQAGAGAGAGQAEADgBADQgBAFgDAFQgDAIgEAHQgEAMgJAIQgEAEAAAGQAAAFADADQAHAHAEAJQAAABAEAA");
                    this.shape_5.setTransform(2.3, -24);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ACdBeQgCAAgCgBQgeAJgZgQQgEgDgEABQgGABgHACQgEABgEgBQgWgBgVAHQgLAEgJABQgGAAgFgDQgkgRglgPQgEAAgDgHQgBgEgDgBQgGgBgGADQgRAKgIATQgIAUgXgDQgJgBgFALQgBAEAEAFQAEAFAEAFQgSgQgRgRQgHgGgBgJQgBgHAEgIQAFgLAEgLQAJgUAKgRQAIgLADgNQABgEgCgDQgGgJgJgIQgIgHgFgIQgDgHADgHQADgHAHgFQAGgEAFgDQAIgGgGgEQgDgBgDgEQgFgFgHgEQABgNAQACQAIABAJgDADDhhQABAdAGAeQAFAYgJATQgDAIgDAGQgCAGACAFQADAJADAJQAEAKgIAFQgKAGgKAEQgRAFgRADQACAEADADQAEAEAEAB");
                    this.shape_6.setTransform(12.6, 30.9);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#66FFFF").ss(2, 1, 1).p("Ag/zsQAKgNALgMQACgCAGACQAVAIAPAOQAEADAAAIQAMgGANACQAEAAAEAFQALANAXgBQAIAAAEAHQAHAMACAPQADAeAaADAg3t7QgQADgHgLQgEgHADgKQADgIADgJQAEgNgKgJQgDgDgDgDQgDgDgFgBQgXgCgXAAQgCABgDgEQgFgFgHgCQgNgEgFgOQgKgdgeAGQgEABgEgBQgQgGgRgGQgFgBgEgHQgDgIAGgFQALgLAPgFQgdgjgigkQgEgEgBgJQAAgRARACQARADARAEQAUAGgFgSQgCgHgEgGQgKgQAGgQQABgEAGgDQAjgUAeAXQAQgNAQgGAB3t7QASgWAZgFQAJgCAHAIQAEAHAIAAQAJAAAIAAQARACAPgGQACAAABgHQABgKAOAAQAJAAAIAAQATAAAKARQABACAEAAQAVgBAMgSQABAAADACQAQALASgDQAAAAAAgEAEfhnQANAHANAEQAHACAIgFQADgBACgCQAPgOAXAGQAGABAGABQAZADAWgIQACAAACACQAHAJAEAIQADAGAEADQAHADAIgBQAHgBAEACQACABACACQACACAEABQAEABACADQAFAHABAJQABAEAAAEQAAAHAAAGQATgEASgJAoZsGQASgbAWgUQAGgFAIgCQAPgDAPgEQAOgDADAOQADAPANAAQAZgBASgRQADgDAAgGQAAgLADgJQACgDAEgBQAXgCAWAEQADABADADQAKAQASgLQAUgLAWgGAkmq6QgUgPABgXQAAgGAGgGQAJgIAFgLQABgCgBgFQgBgEgBgEQgDgQADgRQABgJAHgFQAIgHALgDQAGgCAEADQgPAEAJgCQAIgCAIABQALABAIgFQACgBAAgHQABgTAUACAjngLQAVATAAAeQAAAdgVAVQgWAVgeAAQgfAAgVgVQgWgVAAgdQAAgeAWgTQAVgVAfAAQAeAAAWAVgAhyGbQgaggAIgoQACgKgHgIQgIgKgLgIQgKgHgJgJQgEgEAAgGQAAgCABgDQAFgLAEgJQALgXAbgCQADAAABgFQAFgegXgRQgGgFgJgBQgOgBgPgCQgPgBACgOQABgLgDgKQgCgGAAgGQgBgOgQAEQgIABgIACAiPHrQAAgZAVgRQACgCACgCAkmN9QgSgaASgbQACgDgDgGQgHgJgJgIQgGgEgGgFQAJgMALgGAlpObQgJAWACAYQABAMAEAKQAGAQAOALQAJAIALAGQgPANgPAPQgOANgMAQQgFAGgGAEQgSAOAMAMQAIAHAKAFQARAJARAEQALACAHAIQADAEgBAGQgBANgCAMQgBAHgDADQgHAHgLADQgQAFgEANQgDAMALACQAKABAFALQACAGgDADQgDAFgHAAQgrADgpAL");
                    this.shape_7.setTransform(9.3, -25.9);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgPigQAMAagPAYQgGAJAEALQADAIADAHQADAFgBAGQgCAWgJAUQgIAQAJAPQAFAJABAJQABAGgBAHQgDATATAHQAGADAGAEQgLARgFASQgBADADADQAHAIAEAKQADAGACAFQACADAEADQAOAJgKAD");
                    this.shape_8.setTransform(29.2, 85.4);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f("#66FFFF").s().p("AgyAyQgWgVAAgdQAAgcAWgVQAVgVAdAAQAeAAAVAVQAWAVAAAcQAAAdgWAVQgVAVgeAAQgdAAgVgVg");
                    this.shape_9.setTransform(-19.1, -22.1);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AiLz0QAegTAfAPQAKAEAJAJQAQAPACAWQABAJAIAFQAKAIALAGQAKAGAFAJQAIALgBAOQAAANAEALQAJAagXAHQgNAEgNAGQgLAFAEAKQACAGAEAEQAMAPgUAKQgTAKgUgJQgFgDgHgCQABALAHAKQAGAIAHAAQgeAYgkANQgDABgDADQgDAMAMABQAJABAHAFQADADAAAEQgCAHgFADQgHAFgHAEQgEACAAAEQgEAaAbgCQARAAARgDAGcDrQgZAlgqAAQgUAAgDgPQgCgLgEgLQgIADgJABQgCABgCgFAFADBQAHAXAbgGQAOgCgBAPQgBACAAACQAIAEANgMQACgCACgDAGhARQAEAOANAOQADAEABAGQAEAdgLAaQgEAIAFAFQADADADAEQAKAMABAOQABAKgHAHQgDAEgCAEQgEALgJAGABVSbQgBAagEAgQgBAHgFAHQgKASgVAGQgFgOgZACQgOACgQACQgJACgHAFQgBACgCABIAGACQgBgCgCgDQgCgEgDgEQgPgSgNgUQgOgUAQgRQAHgIAFgJQABgBAAgDAlEtVQAdgGAegDQAHgBAGgGQAEgEAFgCQADgBAEAAQAHAAAGgCAkeC9QgbgCAAgXQAAgEgDgEQgNgTgSgRQgCgCACgEQADgJABgJQABgHgBgJQAAgPAEgPQABgDgDgEQgagdglALQgKADgIAFQgIAFgHAIQgGAHgEAHQgCAEACACQAEAGAGAEQANAKAEAPQAOgCAOgIQAGgCAEgFQAEADAAAGQAAACAAAC");
                    this.shape_10.setTransform(20.6, -26.3);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ABrhyQgNgKgFARQgDALgBALQgBAIACAJQAIAhASAdQAJANgTAKQgdAQANAbQgTAFgTAFQgNAEgIgKQgHABABALQAAAFgDACQgFAEgHABQgUAGgYAEQgIACgGAFQgFADgCAGQAAgCgBgCQgMgUgVgCQgFgBgHAGQgPAMALAN");
                    this.shape_11.setTransform(-36.4, 97.2);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ABBxJQgUgEgCAVQgBANgCAMQgNgCgLgGQgBAAgCgEQgJgRgRAEQgLACgKAGQgIgNAJgQQAKgTgTgOQgOgLgPAKQACgGABgCQABgCAAgCQgRADgKgKQgCgBAAgFQAEgVgRAAQgNAAgLgEQgBAAgCgEQgFgWAPgHAHPCwQACACACACQAJAIAJAIQAGgBABgDQADgGACgGQAEAEAEgBQAFgBAEgCAGlC4QADgGALgFQADgBADACQAEACADADQAFAFAOgEAG/DqQAKAFAKAFQADABABAAQAHgCAGAAQAFAAAEADQAGgDABgFQABgDAAgFABrNwQADgTgTgHQgOgEAHgPQACgFAFgDQAHgGgBgIQAAgGgEgGQgDgEgBgFQgBgEACgEABvPEQgKgcgCgeQgBgLAJgGAnBS3QgOgEgMgHQgBgBgDAAQgBAGgDAGQgCAFgCAEQgHgGgJAEQgFACgFAD");
                    this.shape_12.setTransform(5.9, -17);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAJgfQgagDgYAMQgGADgEAJQgLAVASAPQAJAIADAMQAEAOAKACQAKABAJACQAGAAAGAAQALABAFgMQAFgKAGgJQADgFACgGQACgFAAgGQAAgKAFgHQADgGABgJQACgMgHgJQgIgJgMgNQgDgDgGABQgGABgHAAQgCAAgCgC");
                    this.shape_13.setTransform(-19.9, -19.6);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgHuCQgVAEgQgMQgTgPgYgEQgEAAgEgEQgCgCgBgDQgJgRgPgMQgFgEgCgGQgDgKgBgLQAAgMAHgJQAFgFAFgFQANgIgNgKQgZgVgOgdQgEgHACgJQADgKAEgKQAJgQAQAFQAKADALgCQADgBAAgDQADgLgBgLQgBgeAbgGQALgDALABQAKABAJAAQAEAAADgDQADgDADgCQAEgEAFgDQAWgKAIAaQABAEADAEQAJgTATgHQAFgCAEABQADABACAEQAIASAOgRQACgDADgDQAKAIACAOQAAADACACAEbhyQgRAOgUgDQgDAAgBgHQgBgIgDgHQgBgDgFgCQgJgDgBAFQgIAIgGALQgDAGgCAGQgFgPgQgDQgGgBgGACQgKADgHAGQgHgXgTgGQgDgBgDgCQgEgCgCgEQgEgIgNAHQgGADgGACQgIAEgDANAEsgFQgLANgMANQgEAEgHABQgEABgDgCQgFgEgGgEQgHgFgJAAQgGAAgFAEQgDADgDADQgLANgEAHQgFAIACAKQACAHAFAFQAFAGAAAHQAAAHACAGQACALgNAFQgDABgCAEQgKAVAaAFQARADARAGQACABACACQgKAPgGARQAAADgFABQgSADgPAHQAWALgLAWQgGANADARQAAACgEABQgGABgGgCQgLgCgLgDQgIgBgFgDQgDgCgEABQgFACgEACAkrraQAKgcAcgJQAMgEACAKQABAGAHACQAFACAHgBIAYgFQAEAAABgHQAHgRASgCQACAAACACQASAUAZABQAFAAAEgHQAEgHAFgEQAOACAKAHQAKAIANgGQAIgDAHgFAD1N/QgBAaAKAVQACADgCAFQgBAEgCADQgCADgEABQgGADgHACQAJAEAHAFQAGAEgCAJQgBADADAEQAIAMAJAMQABACgCADQgHAKgOAHQANAFABAMQABAHABAGQADAPgIALQgCADgCADQgCAGgEAEQgDAEgCAEQACAAACAAQAFAAAEAAAESStQAAAKACAKQABADACAC");
                    this.shape_14.setTransform(0.9, -39);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgYgbQAQgFAIAMQACAGAEAFQACADgCADQgCAEgDAFQgBADAAAEQAFAHALgDQALgDgEAJQgBADACAE");
                    this.shape_15.setTransform(-7.6, -17.5);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAjxzQAWgWAdgHQAJgBAIAEQAIAEAGAGQAHAGAHgBQAJgBAIgFQAVgKARALQAFAEABAJQACAPAPgDQAKgCAJADQANAEgDANQgBAJAAAIQAAAGADAFQAJALAEAOQADAIABAIQABAHgDAHQgIARAHASQADAIADAHQAIASgRANQgFAFgFAFQgDADgEADQgPANAAAUQAAADgFACQgOAJgPAKQgFADgEAGQgEAFgBAFQgCAEgCADQgCAEgBAEQgCAGgEADQgFAEgFAGQgHAJgBANQAAABgDACQgIADgGAIQgBgCgBgBQgIgRgPgNQgDABgBABQgBAGgCAEQAAABgDAAABegnQgKgFgJgHQAIgOgEgFQgLgLALgNQACgEgEgGQgDgGgCgHQgBgEAEgDQAEgEAFgDQAFgCAFgDQgSgKgSgBQgDAAgEABADoD/QAWAKAQgRQAFgFAEgIQABgDABgDQACgHgCgHQgBgGABgEQACgIAGgIQAKgMAPgEAGVBkQAMgCAMAAQAJAAAJACQAXAIAUgQQAEgDAEADQAFADACAFQANAfAdgBQATgCAGANQABAEADACAEgBwQAIgHAHgIQADgDADgCADTEEQghAJANAeQADAHAEAHQAGALACANQADAOgEAMQgEAPgDAOQgCAJgEAIQgLAUgfgFQgPgDgPgCQgQgDgMgKQgIgIgKgGQgTgMgQAPQgJAIgNAFQgXAKANAbQAFAJAAAKQAAADgBAEQgBAGADAHQAGAKgCALQgtAKgYgjQgJgOgKgMQgVgZgCgfQgBgOgNAEQgVAFgUAAQgDAAgEgEQgdAUARAjQABADADACQgWADgDgDQgNgOgIgQAE1QHQgFANgEANQgDALAMgBQgOAHgDAOQgBAFADAEQAPAUADARQADASgOAPQAFACADAAAlDqqQgfAJgjADQgFAAgFAAQgIAAgIgBQgFgBgFgBQgOgBgNgEQgGgCgGAFQgLAHgLAGQgJAFgHADQgHACgHgCQgegJgSAPQgOALADAPQACAGAGAEQAOAKAPAMQAYAVgbAVQgEAEgDAEQgEAGgGAEQgJAGAMANQAFAFAIABQAKABAKABQAVABAQAMQAHAEAHADQgHAPAAAPQAAAGAHAFQAFAFAGACQAHADAFADQAFAFADAHQAKgDAKgCQgCAKgDAKQALAAAKAAAmFlzQgEARAPAI");
                    this.shape_16.setTransform(-3.5, -44.4);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ABxvNQgYgIgLAZQgHAPgJALQgDADgDACQgDAEgDAEQgJARgLANQgBACgEgBQgUgEgGASQgBADgEAAQgKABgFgMQgDgKgBgKQgBgLgDgLQgBgCgEgBQgQgDgNgHQgCgBgFACQgMAJABAQQgQgQgVgLQgDgCABgDQABgEABgDQAJgPgTgBQgNgBgMAFQgIAEgBAGQgBAFgGAAQgQgPABgSQAAgEAFgDQAKgFALgBQgLgmgmgHQgQgDAAgNQAAgOANgJQAKgGAJgHAgqjAQgLgEANgNQADgDAAgFQAAgIgKABQgOABgFgHQgCgDgFACQgFABgFADQgCgCARgOQgEgDgIgBQgHAAgMAEAhQj3QAMgBALgCQAFAAAFACQAMAEAIgJAgHDwQAOAAAPAAQADAAACAAAGnAkQAKAYASAEQAHACAHAEQATALgKAWQgBAEAFADQAEADAFACQATAFAIAVQADAIADAGQADAIAAAJQAAAGAAAGAC/QDQgPAUAPAQQALAKgNAKQgBABACAFAndoSIABAAQANgBAHAFQgLgQgSAEQAGABACAHQgEACgEABQgGAEAAAFQgEAEgBAFQAAABgBAAQAAAPAEAOQgBgJACgFQACgEADgDQgBgEgCgFIAAAAQgCgFABgEQAFgGAKgDQAAgBgBgCgAm5ntQABAAAAAAQgBgDgEgDQgBAAgBgBQABAGAFABQgLgCgDgOQgEgEgCgFQgDgFgCgGQgFABgFABQABACAAABQABAIAFAGQgKABgLAAQgDAAgDAAQgBAAAAAAQAAABAAAAAntnfQABADADABQABABACAAQAMACAJgJQAEgEAFgDQgWADANgMQAEgDgEgFQgBACgFAFQACAAAEABQAEACAFACQACgSgPABQADACABADQgOgCgIAHQAFAPgHAKQgBABgCABQgFAAgDgCQgEgDgEgEQgJgMAAgOQAKAAAKgBQgHgEgJgEQgRAYAOAZQABADADACQAIADAGAFQAEADAEACQAGADAIAAQAjgBAEgjQAAgCgBgDQAAgCgCgDAm/n0QgBgEAAgEQAAgIgDgEQgCgDgCgCQAEAHgEAJQAEAFAEAEgAnIoOIABABAm2noQADAAAAgCQACgCgHgBAmuBXQgGgPACgQQABgGACgHQADgHAEgGQAEgGgCgIQgBgFABgFQACgGAFgHAlTE4QgFgNgEgMQgBgDAAgCAmVEAQgQgQAHgZQABgDADgCAjTFSQAAgKAFgGQALgKAPgCQAbgFAKAfQABAFAGgDQAKgCAFgKQAFgIAEgKQAFgKgCgLQANAEANABQAIAAAHAAAnmnaQAhAJAMgcAnxoWQAHgFAFAB");
                    this.shape_17.setTransform(8.2, -36.8);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAmi0QAAALAEAHQAGALAIAJQAFAGAAAHQABASgJAQQgDAFAFAFQAGAFAHACQglAOglANQgFACgGAAQgPACgPACQgFABgFACQAKAVAJAVQAIASgHAXQgCAHgIAEQgIAEgHADQgDACgCACQAAANAPAEQAgAHAEAcQACAKgDAJQgCAEgCADQgLASAQARQAFAFAKAA");
                    this.shape_18.setTransform(-31.6, 17.1);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#66FFFF").ss(2, 1, 1).p("Ajau/QgfgMgCgjQAAgEADgEQAEgDAEgDQATgNgOgWQgJgQgFgQQgCgFABgFQACgOAHgLQADgEAGgBQAJgCAFgEQADgDgCgEQgEgJgFgJQgOgTATgLQANgIAMAGQAKAFAKAEQAFADAFABQAGgDgCgLQgCgRALgGQAEgDAFgCQAIgDAHgEQACgBADAAQAEASAPgKQAPgJANAKQAFAEAEAGAhwjIQALAAAJgDAG8CLQgDAJgDAJQAkAFgHAkQgGAdATARQANALABAZQAAAGAFAFQAMAOgUALAkjGRQADgFADgFQACgDADgDQACADACADQADAFADAFQAFgNAKgNAnqgGQgKgSgCgSQAAgHACgIQAAgDAAgCAnqIGQAEgkgKgeQgBgDgDgCAnGLSQAAAYAAAWQAAAIAHAFQAJAFAKABQAYACANgTQAJgNAKALQAFAFAFAFQAIgNAMgHQAGgDAFgCQAJAjAagQQATgMAPgUQACgCADACQAHAFAGAHQAFAGAFAFQACgCACgEQADgHADgHACnSeQgMAQAKAOQACADgGAHQgCADgCAD");
                    this.shape_19.setTransform(13.1, -40);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgDgOQgDgKgCgKQggAXARApQACAGAEACQAGADAIgBQANgCALACQAFABADgGQAQgbgIgfQgBgGgGgDQgUgNgSALQgIgCgIAAQgHAAgFAFQgDACAAAF");
                    this.shape_20.setTransform(-40, -85.2);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgIhOQAbANgQAYQgDAIAAAIQAAAGABAGQADAGADAGAgCA4QAAAJgCAIQgBADgDAD");
                    this.shape_21.setTransform(64.5, -6.4);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AiLg/QAEgiAhgIQAEgBAEABQAGAAAEgFQAHgNAKgMQADgEAEgBQAEgBAFACQAMAGANAEQANAFgEAOQgDALAAALQgBAGAGgBQAVgCASgPQAFgEAHgDQAPgHAJAOQADAEAGADQADABAAACQABAFgCAFQgGAMAGAKQAGAKAFAJQACAEAAAFQgBAJAKABQAMADALAEQAFADAFADQACACABADQAKAPgOAIQgFAEgGADQgFACgDAFQgJAOANAKQAMAIANAGQAJAEgGAMQgCADgBADQgDAIABALQABAEgCAEQgHAOgMAG");
                    this.shape_22.setTransform(9.3, -149.8);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ACtrzQAEAXANAVQAFAJADAJQABAFgCAFQgDAGgDAGQgGAMgBAPQAAAEgEACQgHADgIgBQgKgBgKgEQgIgCgIAAQgFAAgCAJQgBAIgDAGQgIAVAWAMQgLAMgRAIQgOAGgHgMQgCgFgCgGQgCgFgDgGQgLAKgNAJQgCACAAAEQABAHAEAGQAEAHABAIQABAEAAAEQAAADgCACQgGAIABAJAFMIAQgDAaAHAPQABAFAAAFQAAAPAAAPAIGLgQAAAGACABQAJADAIAHQAFAEADgCQAUgJAYgBQAGAAACgEQAKgTARgPQglAZgjgdQgFgEgDgFQgCgFAAgGAoqIFQgKAPgNANQgDADgBAEQgBADgCADQgFAOgBALQAAAIgEAIQgJARgMASQgGAIgCAIQAAACACADQAUARgLAZQgEAJAAAK");
                    this.shape_23.setTransform(2.2, -72.1);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AABA6QAVgVgPgVQgHgJABgIQAAgFADgGQAFgMgJgHQgFgDgEgHQgKgOAUgC");
                    this.shape_24.setTransform(-36.5, -7.3);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AByrAQgNADgEARQgDALgEAKQgBAEgDAAQgKAAgJgEQgWgJgTgQQgIgHAEgJQADgIgFgGQgWgcgcAXQgCACgBAAQgXABgPgSQgDgEABgFQABgGAHgEQAHgEAIgDQANgDgIgNQgFgIgIgEQgOgHgLgJQgBgBACgFQAEgJAKgGAFbHsQgHAKAAALAJnJZQgcAagOgfQgCgEgCgDQgGgLgSARQgLgBAEgRQABgFAAgGAJEJ8QgRAGgRgFQgEgBgFgDQgEgDgGAAQgKgCAGgPApTLiQgXARAEAiQABAFAAAFQAAAFABAGQABAKAAAK");
                    this.shape_25.setTransform(0.7, -61.5);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAUhJQgTAdALAdQAAABgCAEQgKAQAAAWQAAAJgIAGQgWAPAWAJQAIAEAKAD");
                    this.shape_26.setTransform(-60.9, 3.8);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgkrXQgNgEgBgPQAAgMgDgNQgEgXAXgIQAUgHABgRQAAgFgCgFQgGgMADgNQADgHAFgGQAGgHAEgFQAMgJgHgNQgDgGACgIQAHgVAWgCQAUgBAKARQAEAEAFAAQAFAAAEgCQATgLAGgTQABgCAEgBQATAAAQALQAJAHALgCQAGgEAFgBQAQgCAHAOQAFAJAFAIQAEAGACAGQACAFAAAFQAAAFAFABQAFACACAFQACAHAAAIQAAANgFAMQABABACABQAEABAEAAAJMJ+QgXAHgBgTQAAgDAAgDAlRiPQAIgJAIgHQADgCADgCQAEgDAAgFQAAgCgBgDQgCgEABgEQACgYgRgHQgEgCgDgCQgEgCgBgGQgBgHgKABQgCAAgDgBQgPgGgGAGQgCABgEAAQgFAAgFAAQgEAAgFgCQgKgEgBAIQAAADgDACApLMNQADgKACgKQAAgDAAgDApAOSQAHAbAcADQAAABABAFQAAANAPgDAI6KzQgLgGgMgHQgDgCgDgDAFqMGQgCAKACAIQAFAIAAAHQAAAKgDAJQgCAGAAAHQAAADAAAC");
                    this.shape_27.setTransform(-1.1, -66.3);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgDhOQgNAqAQAkQAAACABAFQAEAXACAXQABAFgCAFQgFAPAJAB");
                    this.shape_28.setTransform(-58.9, 26.3);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AEru1QAUABAKASQAHANAHAMQAIAMAFAPQACAGADAGQADAGAAAHQAAADgBADQAAALgLAEQgFADgFADQgDACgDADQgCACABACQADAPgDAPQAAAGgEAEQgPASgVgFQgDAAgEACQgSANAGAYQABACgEABQgOAIgIALQgCACABACQACAKALAEQAUAJgGAQAHKM0QgJAlAEAhQABAHgCAHQgBAHAEAGQADAGACAFQADAGgCAHQAAAFgDAEAkkkfQgcAEACAcQABAJgEAHQgDAFABAHQABAFABAFQABAEACACQAFADAHAAQAGABAGAGQACACAEgBQADgBACAAQAFAAAFABQAFABAEAAAnNNlQANAcAcgIQADAIACAC");
                    this.shape_29.setTransform(-11.6, -59.8);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgOgtQAAAfADAdQAAAFACAGQAEALAHAGQADADAFAAQADAAACAA");
                    this.shape_30.setTransform(-57.9, 29.6);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ADjtkQgdASALAfQADAJAHAFQAGAFAEAFQACAFAFACQAKAFALgFQATgJAOgSQADADACAFQAEAIADAHQADAGAHgBQADgBADAAQAJgBAGgJQAEgHAGgFQABgCACgBQAHAIAHAIQAHAHAGgDAGkLpQgJAOAFAPQACAEgDAEQgIALABARQAAACgCADAGtNdQAAAFACADAHlMlQgKABgGAGAkzmGQAAAEABAEQABADADACQAPgFAJgGQAEgCABgCQADgFACgHQABgFAAgFQABgKgCgJQgCgEAAgFAnkLDQACANAIAAQADgBACgC");
                    this.shape_31.setTransform(-7.8, -42);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgDgKQAAAQAHAF");
                    this.shape_32.setTransform(-58.4, 31.7);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AEUsyQACgPAOAEQAEABADAFQAJAPALgNQALgNAMAHQAWALAFgYQACgLAJAAQAJASAMAIQACABACAAQAKABAJAAQAFABAEgCAGpNUQgEAAgFAAAlqnMQgIgXgUgEQgEgFAAgFQgBgHgJALQgFAHgNABQgCAAgCADQgDAEgDAE");
                    this.shape_33.setTransform(1.3, -39.3);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAAgGQAAAGAAAG");
                    this.shape_34.setTransform(36, 51.7);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgWvLQANgXASASQADADADAAQAGABAEgEQACgCADgCQADgDAEAAQAEAAAEAAQALABALgBQAJgBABAHQABACADABAhHPZQgFAAgEAA");
                    this.shape_35.setTransform(48.4, -24.3);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AAAgiQgQAOABATQABADAFAEQAGAGAFAEQALAHADAM");
                    this.shape_36.setTransform(-42.2, -83.3);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#66FFFF").ss(2, 1, 1).p("ABEw5QAUgNAKASQAFAJAAAKQABACACABQgBAHgEAIQgCADACAEQAFAKgIAEAhpQ2QAAAFAAAE");
                    this.shape_37.setTransform(51.3, -12.7);

                    this.shape_38 = new cjs.Shape();
                    this.shape_38.graphics.f().s("#66FFFF").ss(2, 1, 1).p("AgLAKQARAGAFgOQABgCAAgBQAAgFgCgF");
                    this.shape_38.setTransform(-36.4, -81.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [] }).to({ state: [{ t: this.shape }] }, 4).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }] }, 1).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }] }, 1).to({ state: [] }, 1).to({ state: [{ t: this.shape_15 }, { t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_18 }, { t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_20 }, { t: this.shape_19 }] }, 1).to({ state: [{ t: this.shape_22 }, { t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_24 }, { t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_28 }, { t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_30 }, { t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_32 }, { t: this.shape_31 }] }, 1).to({ state: [{ t: this.shape_34 }, { t: this.shape_33 }] }, 1).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }] }, 1).to({ state: [{ t: this.shape_38 }, { t: this.shape_37 }] }, 1).to({ state: [] }, 1).wait(15));

                    this.shape_39 = new cjs.Shape();
                    this.shape_39.graphics.f().s("#646464").ss(1.5, 1, 1).p("AA0gLQgGALgLAAQgBAAgCAAQgFABgEgBQgDAAgDAAQgGgBgGAAQgBAAgCgBQgGgBgHgFQgCgBgCgCQgBgCgCgCQgDgDgEgDQgBgBgDAAAAoACQgHAIgJAHQgDACgDAAQgGACgFABQgIADgJgCQgDgBgCAAQgCAAgCgBQgGgCgFgDQgDgCgDAAQgBAAgCgBQgEgBgDgCQgCgBgBAAQgBgBgBgB");
                    this.shape_39.setTransform(58.5, -0.3);

                    this.shape_40 = new cjs.Shape();
                    this.shape_40.graphics.f().s("#646464").ss(1.5, 1, 1).p("AAoACQgHAIgJAHQgDACgDAAQgGACgFABQgIADgJgCQgDgBgCAAQgCAAgCgBQgGgCgFgDQgDgCgDAAQgBAAgCgBQgEgBgDgCQgCgBgBAAQgBgBgBgBAA0gLQgGALgLAAQgBAAgCAAQgFABgEgBQgDAAgDAAQgGgBgGAAQgBAAgCgBQgGgBgHgFQgCgBgCgCQgBgCgCgCQgDgDgEgDQgBgBgDAA");
                    this.shape_40.setTransform(58.5, -2.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_39, p: { x: 58.5, y: -0.3 } }] }).to({ state: [{ t: this.shape_40, p: { x: 58.5, y: -2.6 } }] }, 4).to({ state: [{ t: this.shape_39, p: { x: 57.6, y: -3.9 } }] }, 2).to({ state: [{ t: this.shape_39, p: { x: 56.7, y: -2.6 } }] }, 2).to({ state: [{ t: this.shape_40, p: { x: 56.7, y: 4.1 } }] }, 2).to({ state: [{ t: this.shape_39, p: { x: 57.2, y: 5.9 } }] }, 2).to({ state: [{ t: this.shape_40, p: { x: 59, y: 3.6 } }] }, 2).to({ state: [{ t: this.shape_39, p: { x: 58.5, y: -0.3 } }] }, 2).to({ state: [{ t: this.shape_39, p: { x: 58.5, y: -0.3 } }] }, 9).wait(15));

                    this.instance = new lib.robot_paper1();
                    this.instance.setTransform(0.5, -36.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance, p: { y: -36.9, x: 0.5 } }] }).to({ state: [{ t: this.instance, p: { y: -39.2, x: 0.5 } }] }, 4).to({ state: [{ t: this.instance, p: { y: -40.5, x: -0.3 } }] }, 2).to({ state: [{ t: this.instance, p: { y: -39.2, x: -1.2 } }] }, 2).to({ state: [{ t: this.instance, p: { y: -32.4, x: -1.3 } }] }, 2).to({ state: [{ t: this.instance, p: { y: -30.6, x: -0.8 } }] }, 2).to({ state: [{ t: this.instance, p: { y: -32.9, x: 1 } }] }, 2).to({ state: [{ t: this.instance, p: { y: -36.9, x: 0.5 } }] }, 2).to({ state: [{ t: this.instance, p: { y: -36.9, x: 0.5 } }] }, 9).wait(15));

                    this.instance_1 = new lib.robot_head1();
                    this.instance_1.setTransform(-64.4, -185.9);

                    this.instance_2 = new lib.robot_light();
                    this.instance_2.setTransform(-69.3, -184.4, 1, 1, -2.7);

                    this.instance_3 = new lib.robot_head2();
                    this.instance_3.setTransform(-64.4, -185.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -64.4, y: -185.9 } }] }).to({ state: [{ t: this.instance_1, p: { rotation: -2.7, x: -69.3, y: -184.4 } }, { t: this.instance_2, p: { scaleY: 1, rotation: -2.7, x: -69.3, y: -184.4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: -64.4, y: -185.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 6, x: -54.4, y: -186.7 } }, { t: this.instance_2, p: { scaleY: 1.064, rotation: 5.5, x: -54.6, y: -184.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -3.7, x: -71.8, y: -175.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 2.5, x: -62.7, y: -192.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -1.9, x: -68.2, y: -182.2 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 1.3, x: -63.7, y: -187.5 } }, { t: this.instance_2, p: { scaleY: 1, rotation: 1.3, x: -63.7, y: -187.5 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -64.4, y: -185.9 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -64.4, y: -185.9 } }] }, 9).wait(15));

                    this.shape_41 = new cjs.Shape();
                    this.shape_41.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEqlmQA2ANBPASQA5ARAlAhQBvBlgUCCAmhklQiIA+gmCXQgkCNALCVQAEAuADAvIACARQABARAIAOQACAEADAEIAEgJApeEoQALAMAPAHQAEACADACQACABACAAQAHABAFgBQABAAAAgCAphEvIgEAMIAGAF");
                    this.shape_41.setTransform(2.1, -2.2);

                    this.shape_42 = new cjs.Shape();
                    this.shape_42.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFElhQDrAOA0BxQATAogDA3QgBAMgLBFAmKlZQhPAkhNCfQhXCyAMCxIAHBdIACASQABAQAIAOIAFAIIAEgIApnEkQAMAMAOAHIAHAEIAEABQAHABAFgBIABgDApqEqIgEAMIAGAG");
                    this.shape_42.setTransform(2.2, -1.8);

                    this.shape_43 = new cjs.Shape();
                    this.shape_43.graphics.f().s("#646464").ss(1.5, 1, 1).p("AJxgeQAGgngLgyQgMg8ghgzQhZiHjGgJApNFuIgDAJIgFgJQgIgNgBgQIgHgHIAFgLIgHheQgnjgBkisQAjg9AwguQAkgjAbgMApdE4QALANAOAGIAIAEIADABQAHABAGgBIAAgCApeFRIgCgS");
                    this.shape_43.setTransform(1.2, -3.8);

                    this.shape_44 = new cjs.Shape();
                    this.shape_44.graphics.f().s("#646464").ss(1.5, 1, 1).p("AKChKQASh0gzhNQhMh0jSBJAl6j4QhFgKg+AhQg7AhglA/QgmBCgCBPQgDBXAnBXIAHBdIACASQABAQAIAOIAFAIIAEgIApaEbIgEAMIAGAGApXEVQALAMAPAHIAHAEIAEABQAHABAFgBIABgD");
                    this.shape_44.setTransform(-1.7, -0.3);

                    this.shape_45 = new cjs.Shape();
                    this.shape_45.graphics.f().s("#646464").ss(1.5, 1, 1).p("AJ3g/QAMg1AEgjQAJhAgQgqQgth+kAAaAmAkGQh/Axg/BPQhmCBAlDaIAHBdIACASQABAQAIAOIAFAIIADgJAp4EyIgFAMIAHAGAp1ErQALANAOAGIAIAEIADABQAHABAGgBIAAgC");
                    this.shape_45.setTransform(-1.1, -0.5);

                    this.shape_46 = new cjs.Shape();
                    this.shape_46.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFDlvQDggpBEB9QApBLgTB5ApoFxIgEAJIgFgIQgIgOgBgQIgGgGIAEgMIgHhdQAQioBLiTQBJiRBbg3Ap6FUIgCgSAp5E7QALAMAPAHIAHAEIAEABQAHABAFgBIABgC");
                    this.shape_46.setTransform(0, 1.8);

                    this.shape_47 = new cjs.Shape();
                    this.shape_47.graphics.f().s("#646464").ss(1.5, 1, 1).p("AFGl2QC4gGBUCHQAeAxALA8QAKAxgFAiApmFvIgDAIIgFgIQgIgOgBgQIgHgGIAFgMIgHhdQAQinBLiUQBJiRBbg2Ap3FRIgCgSAp2E5QAKAMAPAHIAIAEIADABQAHABAGgBIAAgD");
                    this.shape_47.setTransform(-0.2, 2);

                    this.shape_48 = new cjs.Shape();
                    this.shape_48.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEll2QBuAMBrCMQArA6AZA5QAZA5gFAhAmjk4QgqAZhODQQgfBTgPBgQgEAagJBkIAHBdIACASQABAQAIAOIAFAIIAEgIApME5QALAMAPAHIAHAEIAEABQAHABAFgBIABgDApPE/IgEAMIAGAG");
                    this.shape_48.setTransform(3.5, -1.5);

                    this.shape_49 = new cjs.Shape();
                    this.shape_49.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEslWQC8AABOB+QA3BagQBlApFFOIgDAJIgFgIQgIgOgBgQIgHgGIAFgMIgHhdQgBiSAUheQAmiyCKhJApVEYQALANAOAGIAIAEIADABQAHABAGgBIAAgCApWExIgCgS");
                    this.shape_49.setTransform(3.2, -0.2);

                    this.shape_50 = new cjs.Shape();
                    this.shape_50.graphics.f().s("#646464").ss(1.5, 1, 1).p("AJtgIQAChqhAhjQhXiHipgIAmQkiQhhA0g+BrQhWCTAiDAIAHBdIACASQABAQAIAOIAFAIIADgIApZEnQAKAMAPAHIAIAEIADABQAHABAGgBIAAgDApcEtIgFAMIAHAG");
                    this.shape_50.setTransform(2, -3.3);

                    this.shape_51 = new cjs.Shape();
                    this.shape_51.graphics.f().s("#646464").ss(1.5, 1, 1).p("AEsldQAlAJBkAEQBCADAhAdQAiAfAYA1QAmBQgOBVAmfkuQiMBAgmCVQgkCOALCUIAHBdIACASQABAQAIAOIAFAIIAEgJApgEfQAMANAOAGIAHAEIAEABQAHABAFgBIABgCApjEmIgEAMIAGAG");
                    this.shape_51.setTransform(1.9, -1.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_41 }] }).to({ state: [{ t: this.shape_42 }] }, 1).to({ state: [{ t: this.shape_43 }] }, 2).to({ state: [{ t: this.shape_44 }] }, 2).to({ state: [{ t: this.shape_45 }] }, 2).to({ state: [{ t: this.shape_46 }] }, 2).to({ state: [{ t: this.shape_47 }] }, 1).to({ state: [{ t: this.shape_48 }] }, 1).to({ state: [{ t: this.shape_49 }] }, 2).to({ state: [{ t: this.shape_50 }] }, 2).to({ state: [{ t: this.shape_51 }] }, 2).to({ state: [{ t: this.shape_41 }] }, 2).to({ state: [{ t: this.shape_41 }] }, 6).wait(15));

                    this.instance_4 = new lib.robot_torso("synched", 0);
                    this.instance_4.setTransform(-1.9, -11.9, 1, 1, 0, 0, 0, 46.5, 62);

                    this.instance_5 = new lib.robot_body();
                    this.instance_5.setTransform(-41.6, -71.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { regX: 46.5, regY: 62, rotation: 0, x: -1.9, y: -11.9 } }] }).to({ state: [{ t: this.instance_4, p: { regX: 46.6, regY: 61.9, rotation: 3, x: -0.1, y: -11.2 } }] }, 1).to({ state: [{ t: this.instance_4, p: { regX: 46.4, regY: 62.2, rotation: 0.2, x: -2.7, y: -12.7 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.6, regY: 62.1, rotation: 0.2, x: -2.5, y: -2 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.4, regY: 62.1, rotation: 0.2, x: -1.5, y: -6.2 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.6, regY: 62.1, rotation: 0.2, x: -0.7, y: -5 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.4, regY: 62.1, rotation: 0.2, x: -0.9, y: -9.8 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.6, regY: 62.1, rotation: 0.2, x: -0.1, y: -5.6 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.5, regY: 62, rotation: 0, x: -0.9, y: -9.9 } }] }, 2).to({ state: [{ t: this.instance_4, p: { regX: 46.5, regY: 62, rotation: 0, x: -0.9, y: -8.1 } }] }, 2).to({ state: [{ t: this.instance_5 }] }, 2).wait(21));

                    this.instance_6 = new lib.robot_legs_1("synched", 0);
                    this.instance_6.setTransform(-0.4, 66.5, 1, 1, 0, 0, 0, 44, 45.5);

                    this.timeline.addTween(cjs.Tween.get(this.instance_6, { override: true }).to({ _off: true }, 19).wait(21));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-64.4, -185.9, 137, 298);

                (lib.mindy_mouthOnly = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_60 = function() {
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(60).call(this.frame_60));

                    this.instance = new lib.mindy_mouthG("synched", 0);
                    this.instance.setTransform(15.4, 7, 1, 1, 0, 0, 0, 15.4, 7);
                    this.instance._off = true;

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).wait(1).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 5).wait(6).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).wait(3));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);

                (lib.mindy_wrong = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(99));

                    this.instance = new lib.mindy_blink();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_straight();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.instance_2 = new lib.mindy_head_1();
                    this.instance_2.setTransform(-45.9, -43.1);

                    this.instance_3 = new lib.mindy_frown();
                    this.instance_3.setTransform(-45.9, -43.1);

                    this.instance_4 = new lib.mindy_head_down1();
                    this.instance_4.setTransform(-45.9, -39.1);

                    this.instance_5 = new lib.mindy_sad();
                    this.instance_5.setTransform(-46.8, -25.1, 0.999, 0.999, -2.4);

                    this.instance_6 = new lib.mindy_head_down2();
                    this.instance_6.setTransform(-48.6, -34.9, 0.999, 0.999, -2.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -43.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: 0, x: -45.9, y: -43.1, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { scaleX: 1, scaleY: 1, rotation: 0, x: -45.9, y: -43.1 } }] }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -43.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: 0, x: -45.9, y: -43.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -45.9, y: -43.1, scaleX: 1, scaleY: 1 } }] }, 14).to({ state: [{ t: this.instance_2, p: { rotation: 2.5, x: -44.4, y: -45.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: 2.5, x: -44.4, y: -45.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 2.3, x: -44.9, y: -45, scaleX: 1, scaleY: 1 } }] }, 9).to({ state: [{ t: this.instance_2, p: { rotation: 2.8, x: -44.2, y: -45.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: 2.8, x: -44.2, y: -45.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 2.3, x: -44.9, y: -45, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -0.9, x: -46.5, y: -42.2, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: -0.9, x: -46.5, y: -42.2, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -44.9, y: -42.6, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -3, x: -47.6, y: -40.2, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: -3, x: -47.6, y: -40.2, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -43.5, y: -42.6, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -4.7, x: -48.4, y: -38.4, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { rotation: -4.7, x: -48.4, y: -38.4, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: -4.7, x: -48.7, y: -38.4, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -8.8, x: -50, y: -34.4, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { rotation: -8.8, x: -50, y: -34.4, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: -8.9, x: -49.6, y: -33.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -5.7, x: -48.8, y: -37.6, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { rotation: -5.7, x: -48.8, y: -37.6, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { scaleX: 0.999, scaleY: 0.999, rotation: -4.7, x: -48.7, y: -38.4 } }, { t: this.instance_3, p: { rotation: -5.3, x: -48.7, y: -37.3, scaleX: 1, scaleY: 1 } }] }, 10).to({ state: [{ t: this.instance_2, p: { rotation: -2.7, x: -47.5, y: -39.6, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { rotation: -2.7, x: -47.5, y: -39.6, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { scaleX: 0.999, scaleY: 0.999, rotation: -2.7, x: -47.5, y: -39.6 } }, { t: this.instance_3, p: { rotation: -2.7, x: -47.6, y: -39.1, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -0.1, x: -46.2, y: -39, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_4 }, { t: this.instance_1, p: { rotation: -0.1, x: -46.2, y: -39, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { scaleX: 0.999, scaleY: 0.999, rotation: -0.1, x: -46.2, y: -33.5 } }, { t: this.instance_3, p: { rotation: 0, x: -45.9, y: -38.1, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -2.4, x: -48.6, y: -34.9, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_6, p: { rotation: -2.4, x: -48.6, y: -34.9, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_5, p: { rotation: -2.4, x: -46.8, y: -25.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: -2.4, x: -45.8, y: -1.5, scaleX: 0.999, scaleY: 0.616 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -0.6, x: -47.5, y: -34.6, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_6, p: { rotation: -0.6, x: -47.5, y: -34.6, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_5, p: { rotation: -0.6, x: -46, y: -24.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: -0.6, x: -45.7, y: -1.2, scaleX: 0.999, scaleY: 0.616 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_6, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_5, p: { rotation: 0, x: -45.9, y: -23.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -45.4, y: 0.3, scaleX: 1, scaleY: 0.612 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_6, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { scaleX: 1, scaleY: 1, rotation: 0, x: -45.9, y: -25.1 } }, { t: this.instance_5, p: { rotation: 0, x: -45.9, y: -23.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -45.4, y: 0.3, scaleX: 1, scaleY: 0.612 } }] }, 21).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_6, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_5, p: { rotation: 0, x: -45.9, y: -23.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -45.4, y: 0.3, scaleX: 1, scaleY: 0.612 } }] }, 4).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_6, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { scaleX: 1, scaleY: 1, rotation: 0, x: -45.9, y: -25.1 } }, { t: this.instance_5, p: { rotation: 0, x: -45.9, y: -23.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -45.4, y: 0.3, scaleX: 1, scaleY: 0.612 } }] }, 3).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_6, p: { rotation: 0, x: -45.9, y: -33.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_5, p: { rotation: 0, x: -45.9, y: -23.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -45.4, y: 0.3, scaleX: 1, scaleY: 0.612 } }] }, 4).wait(25));

                    this.instance_7 = new lib.mindy_ponytail_right_1();
                    this.instance_7.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7, p: { rotation: 0, x: 36.8, y: -68.2, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_7, p: { rotation: 2.5, x: 39.3, y: -66.8, scaleX: 1, scaleY: 1 } }] }, 23).to({ state: [{ t: this.instance_7, p: { rotation: 2.8, x: 39.6, y: -66.7, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -0.9, x: 35.8, y: -68.7, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -3, x: 33.6, y: -69.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -4.7, x: 31.8, y: -70.2, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -6, x: 29.6, y: -71.5, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -11, x: 26.2, y: -69.2, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -11.8, x: 25.7, y: -68.9, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -6.4, x: 29.3, y: -70.4, scaleX: 0.998, scaleY: 0.998 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -5.7, x: 30.8, y: -70.8, scaleX: 0.999, scaleY: 0.999 } }] }, 7).to({ state: [{ t: this.instance_7, p: { rotation: -2.7, x: 33.8, y: -68.5, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -0.1, x: 36.3, y: -64.3, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -0.4, x: 34.3, y: -62.3, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: 1.5, x: 36.9, y: -57.8, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: 0, x: 35.3, y: -47.7, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: 0, x: 35.8, y: -45.7, scaleX: 1, scaleY: 1 } }] }, 1).wait(56));

                    this.instance_8 = new lib.mindy_ponytail_left_1();
                    this.instance_8.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_8, p: { rotation: 0, x: -92.1, y: -65.7, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_8, p: { rotation: 2.5, x: -89.5, y: -70, scaleX: 1, scaleY: 1 } }] }, 23).to({ state: [{ t: this.instance_8, p: { rotation: 2.8, x: -89.1, y: -70.4, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -0.9, x: -92.9, y: -63.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -3, x: -94.9, y: -60.2, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -4.7, x: -96.3, y: -57, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -8.8, x: -99.1, y: -49.6, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -13.5, x: -101, y: -43.6, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -17.6, x: -102.3, y: -38.5, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -13.5, x: -101, y: -43.6, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -5.7, x: -97, y: -55.3, scaleX: 0.999, scaleY: 0.999 } }] }, 7).to({ state: [{ t: this.instance_8, p: { rotation: -2.7, x: -94.7, y: -59.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: -0.1, x: -92.4, y: -61.2, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: 2.7, x: -90.2, y: -62.1, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: 1.5, x: -90.8, y: -57.3, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: 0, x: -90.9, y: -49, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_8, p: { rotation: 0, x: -90.9, y: -46.5, scaleX: 1, scaleY: 1 } }] }, 1).wait(56));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhXEhQgZi5Asi8QAShIABg8QABhFhAgDQgrgDgLAzAAeD6QgpnoBngGQA9gEAOBU");
                    this.shape.setTransform(17.5, -64.2);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhpEhQgSi5Azi7QAUhHADg7QAFhGhBgFQgrgFgNAzAAND/QgXnqBngCQA9gCAMBV");
                    this.shape_1.setTransform(19.3, -64.4);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhREhQgRi6Ajh/QAjiBgCg/QgBg/gugHQgugHgoATAAlEAQgwn6BaADQBcAEgHA+");
                    this.shape_2.setTransform(18.6, -64.5);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhiEpQgRi5AliAQAkiCAChLQAChLgzAAQgzgBgRAqAAVEJQgloMBaAFQBbAFgHA9");
                    this.shape_3.setTransform(20.3, -62.7);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhwEjQgQi6AniBQAoiDAJhEQALhDg7AAQhBgBgEAVAAHECQgYn0BSAAQBTAAAKA2");
                    this.shape_4.setTransform(19.9, -62);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhzElQgRi6AmiAQAmiDAPhJQAQhKhSAIQgyACgIAOAAEEEQgfn5BUACQBWADAXAm");
                    this.shape_5.setTransform(18.4, -62.2);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhbEqQgbi5Aqi8QAQhJAGhJQAGhJg1gCQg2gDgfAYAAaECQgpn4BPgBQBRgBAqAg");
                    this.shape_6.setTransform(14.4, -60.7);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgwEdQggi3Ali+QAPhJgUg8QgUg9gtgCQgtgDgDBVABEDyQhMoOBVAFQBYAEgDA8");
                    this.shape_7.setTransform(8.1, -58.4);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag4EkQggi4Ali+QAOhJgJhCQgJhDgugDQgugDgbA8AA8D5QhDn6BTgDQBUgCAPBB");
                    this.shape_8.setTransform(8.9, -59);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhEEgQggi4Ali+QAOhIgBg7QgBhGhAAAQgrgCgKAzAAwD1Qg8nnBmgKQA9gGASBU");
                    this.shape_9.setTransform(10.1, -58.6);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhIEdQgbi5Aqi8QAQhJgBg6QAAg7g1gFQg1gFgSA8AAtD1QgenvBOgFQBPgEgFBX");
                    this.shape_10.setTransform(12.5, -56.7);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhXEgQgQi6Abh/QAciCAQg/QAPg/gugFQgugGgzA3AAgD/Qgan7BaAEQBbADgjBI");
                    this.shape_11.setTransform(15.6, -57.2);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAKEFQgQn3BRgBQBTgCAHAuAhtEmQgRi6A1i6QAUhHAEg7QAFhFhBgNQgpgHgOAM");
                    this.shape_12.setTransform(19.6, -54.2);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhoEcQgRi6A1i6QAUhHAEg7QAFhFhCAFQhBAEAVA+AAOD7QgKngBUgBQBUAAgVBd");
                    this.shape_13.setTransform(19.1, -53.2);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAKEAQgTnqBmgBQA9gBALBVAhtEhQgRi6A1i5QAUhIAEg7QAFhFhAgGQgrgFgNAy");
                    this.shape_14.setTransform(19.6, -53.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 23).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 8).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).wait(53));

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_15.setTransform(-0.7, 143.4);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACAnpQBJCiAiDOIAvA6AEDg3IgYhCIgXArABEBOIAAFyIBLAoABEHAIAdAqAjqhJQgdgRgPgnQgKAnAXAiAi1nkQhTCEgODfQAYgCAQAbAiNHqIAXgyIg6AmAhxBHIAAFm");
                    this.shape_16.setTransform(10.9, 99.9);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADg");
                    this.shape_17.setTransform(-0.7, 143.4);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACki5QAdgQAPgnIAAAAQgYgCgQAaABPnpQAwgKBKAQQBKAPAlAuQAkAugYAxQgYAxhcAmQAKAmgXAjAATBTIAAFxIBLAoAATHEIAdAqAj/g7QgRgdAHgpQgcAcADAqAjmngQi6CXCXDIQAVAKABAfAi9HuIAWgyIg5AmAihGxIAAlm");
                    this.shape_18.setTransform(15.7, 99.5);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABenYQFuiLigFzQgVAKgBAfQAqAKgTgzIgBAAAFGirQADgpgcgcAAiBjIAAFyIBLAoAAiHVIAdAqAkIhIQgDgpAcgcQgqghghgoQgkgtACg5QADg5AoglQAogmAygPAjYhkQgBgfgWgLQgHApASAdAjviNQAAAAAAgBAiuH/IAWgyIg5AmAiTBcIAAFm");
                    this.shape_19.setTransform(14.2, 97.8);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AF0ibQgNgnglgPQgQASALAdQA2AQgxg/QBGlJlCAyAAKBUIAAFyIBLAnAAKHGIAdApAkghXQgCgqAbgcQgpghghgoQglgtADg5QACg4AogmQAoglAzgQAjwh0QgBgfgVgKQgHApARAdAkHidQAAAAABAAAjGHvIAWgyIg5AnAiqBMIAAFm");
                    this.shape_20.setTransform(16.6, 99.3);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEli9IAAAAQAiA9gugQQgFgVAIgOQAEgGAFgEIAAAAQAPgUAIgcQALgsgJgtQgJgtgZgnQgXglgpgWQgogXgvABQgMAAgOAAAFPiAQgIgpgigUIAAAAAAwBRIAAFyIBKAnAAwHDIAdApAj7haQgCgqAbgcQgpghghgoQgkgtACg5QACg4AogmQAoglAzgQAjLh3QgBgfgVgKQgHApARAdAjiigQABAAAAAAAihHsIAXgyIg6AnAiFGvIAAlm");
                    this.shape_21.setTransform(12.9, 99.6);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABxhQQAaABAOgFQAAgNAFgKQADgFAFgFIAAAAQA6gTAggpQAigsAMg3QALg4gYgyQgXgxgtgcQgmgZgugHACmh1IAAAAIAAAAQAjAUAIApACZhUQAYgJgLgYACbhIQgCgGAAgGABNBQIAAFyIBLAoABNHCIAdAqAjdhbQgCgpAbgcQgpghghgoQglgtADg5QACg5AoglQAogmAzgPAith3QgBgfgVgLQgHAqARAcAjEigQAAAAABgBAiDHsIAWgyIg5AmAhnBJIAAFm");
                    this.shape_22.setTransform(9.9, 99.7);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAyheQAEgGAEgFQAJgJAKgDQAGgCAHAAIAAABQA3gDAxghQAtgfAdgtQAegxgGg3QgGg5gjgoQgjgpg3gPQgGgBgGgDABNguQAXgigKgmQgHAigvAPABaBQIAAFyIBKAoABaHCIAdAqAjRhbQgCgpAbgcQgpghghgoQgkgtACg5QACg5AoglQAogmAzgPAihh3QgBgfgVgLQgHAqARAcAi4igQABAAAAgBAh3HsIAXgyIg6AmAhbBJIAAFm");
                    this.shape_23.setTransform(8.7, 99.7);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgJIAAAGg");
                    this.shape_24.setTransform(-0.7, 143.4);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACfnrQA3ATAjAoQAjArAAA4QAAA5gjAtQgSAXgYAPQgxAfg3AJQgpAJgqgBQgRgQgbAKAguiAQAhAFAhgWQgQAlglANABjBQIAAFyIAdAqABjHCIBLAoAjHhbQgDgpAcgcQAAAAAAgBQgHAqARAcAiuihQAVALACAfAiWniQgzAPgoAmQgoAlgCA5QgCA5AkAtQAhAoAqAhAhXG6Ig6AmAhSGvIAAlmAhXG6IgXAy");
                    this.shape_25.setTransform(7.8, 99.7);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACynrQAxAhAXAwQAXAzgOA1QgPA3guAjQgWARgcAJQg3ARg4gGQgogCgogLQgZAfgpACAB3BQIAAFyIBKAnAB3HCIAdAqAi0hbQgCgpAbgdQgpghghgoQgkgtACg5QACg4AogmQAoglAzgQAiEh4QgBgfgVgKQgHApARAdAibihQABAAAAAAAhaHsIAXgyIg6AmAg+BIIAAFmAhxjCQAeAOAogMQgNgUgeAC");
                    this.shape_26.setTransform(5.8, 99.7);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADEnqQAnAsAJA0QAKA3gcAwQgcAxg2AWQgaALgdABQg6ACgygTQgogNgkgWQggAYgogJACIBQIAAFyIBLAnACIHCIAdApAijkYQAaAVAqgBQgHgXgegFAiihbQgDgqAcgcQgqghghgoQgkgtACg5QADg4AogmQAoglAygQAh+hbQgSgdAHgpQAAAAAAAAAhyh4QgBgfgWgKAhIHrIAWgyIg5AnAgtBIIAAFm");
                    this.shape_27.setTransform(4, 99.7);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRnqQAaA1gCA3QgBA2gsArQgrAqg6AEQg4ABgpglQgOgNgFgTQgFgSADgSIAAAAIAAgBQAUgkAdgMACVBQIAAFxIBLAoACVHBIAdAqAiVhcQgCgpAbgcQgpghghgoQglgtADg5QACg5AoglQAogmAzgPAgflYIAAABQAXAFASgYAhxhbQgRgdAHgpQgBAAAAAAAhlh4QgBgfgVgKAg7HrIAWgyIg5AmAgfBIIAAFmAgflXQgFgoAcgf");
                    this.shape_28.setTransform(2.7, 99.8);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACznqQArAiAYAxQAYAwgIA3QgHAtgfAcQgVASgbALQg3AUgxgTQgbgKgOgXQgTgeAIglQABAAAAAAQANgTgOgbAgDluQAAAhAXAgQgkgKgSglAB3BPIAAFyIAdAqAB3HBIBKAoAi0hcQgCgpAbgcQABAAAAgBQgHApARAdAiaiiQAVALABAfAiCnjQgzAPgoAmQgoAlgCA5QgCA5AkAtQAhAoApAhAhDG5Ig6AmAg+GuIAAlmAhDG5IgXAy");
                    this.shape_29.setTransform(5.8, 99.8);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACinrQAqARAhAfQAYAWAMAhQAQAtgPArQgPAvgnAXQgrAcgsgPQgYgHgOgSQgUAigoAIABfjyIAAAAQgmARgggJABfjyQgPgSgeAGABlBQIAAFyIBLAnABlHCIAdAqAjFhbQgDgpAcgdQgqghghgoQgkgtACg5QADg4AogmQAoglAygQAiVh4QgBgfgWgKQgHApASAdAisihQAAAAAAAAAhrHsIAWgyIg5AmAhQBIIAAFm");
                    this.shape_30.setTransform(7.5, 99.7);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADMigQAegHAPASIAAAAQAzgdARg1QARgzgJg2QgJg4gngpQglgmg6gNQgNgEgOgDAC8hrQApgIAUgiQgmASgggKABfBQIAAFyIBLAoABfHCIAdAqAi7hiQgOgCgMgGQgOgIgKgLQgGgHgEgIIAAAAQgBAAgBgBQgygdgRg0QgRgzAJg2QAJg4AngpQAlgmA6gNQANgEAOgDAjKiXQgfgHgOASQAlASAggKAhxHsIAWgyIg5AmAhWGvIAAlm");
                    this.shape_31.setTransform(8.1, 99.7);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEChAQAdgQAOgnQgXgCgRAaACbnrQBXAYBCCCQBCCChJBYQAKAmgWAiABfBQIAAFyIBLAoABfHCIAdAqAianiQhXAYhCCCQhCCCBJBYQAXgCARAaAkBg3QgdgQgOgnQgKAmAWAiAhyHsIAXgyIg6AmAhWGvIAAlm");
                    this.shape_32.setTransform(8.2, 99.7);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AE2gvQgIgogigUQAMgfABgfQABgrgIgtQgIgsgPgrQgPgrgMgaQgMgagRgVQgRgUgXgLAEBg+QgHgeASgPQARAmgJAgAEMhrQAAAAAAAAABfBQIAAFyIAdAqABfHCIBLAoAianiQgXALgRAUQgRAVgMAaQgMAagPArQgPArgIAsQgIAtABArQABAfAMAfQgiAUgIAoAkLhiQAAAAAAAAQgRAmAJAgAkLhiQASAPgHAeAhbG6Ig6AmAhWGvIAAlmAhbG6IgXAy");
                    this.shape_33.setTransform(8.2, 99.7);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACbnrQgEABAXCcQAWCdAwBdQAhATAIAoAD7gPQAJgggRgmIAAAAQgSAPAHAeAD0hUIgBgBABfBQIAAFyIBLAoABfHCIAdAqAianiQAEABgXCcQgWCdgwBdIABgBIAAAAQASAPgHAeAjyhMQgRAmAJAgAkcgQQAIgoAhgTAhyHsIAXgyIg6AmAhWBJIAAFm");
                    this.shape_34.setTransform(8.2, 99.7);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJAACgEIAAAGIgDAD");
                    this.shape_35.setTransform(-0.7, 143.4);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACbnrQAHAAANBuQAYDLANBdIAAAAIAAAAQgWAKgBAfADUhVQAHApgSAdADtgQQADgpgcgcABfBRIAAFxIAdAqABfHCIBLAoAianiQgCADgBACQgHATgKBWQgYDLgNBdQgBABAAAAQgbAcADAoAjThMIAAAAQAAABAAABQgGAoAQAcAjThMIAAAAQAWAKABAfAhbG6Ig6AmAhWBJIAAFmAhbG6IgXAy");
                    this.shape_36.setTransform(8.2, 99.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }] }).to({ state: [{ t: this.shape_18 }, { t: this.shape_17 }] }, 23).to({ state: [{ t: this.shape_19 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_20 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_21 }, { t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_22 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_23 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_25 }, { t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_26 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_27 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_28 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_29 }, { t: this.shape_24 }] }, 3).to({ state: [{ t: this.shape_30 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_31 }, { t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_32 }, { t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_33 }, { t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_34 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }] }, 2).wait(51));

                    this.instance_9 = new lib.mindy_body_1();
                    this.instance_9.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_9 }] }).to({ state: [{ t: this.instance_9 }] }, 26).to({ state: [{ t: this.instance_9 }] }, 3).wait(71));

                    this.instance_10 = new lib.mindy_wings03_1();
                    this.instance_10.setTransform(-33.4, 36.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_10 }] }).wait(100));

                    this.instance_11 = new lib.shadow();
                    this.instance_11.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_11.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_11 }] }).wait(100));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);

                (lib.mindy_shuffle3 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.frame_44 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).wait(44).call(this.frame_44));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJIADgDg");
                    this.shape.setTransform(-0.7, 143.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEDg3IgYhCIAvA6ACAnpQBJCiAiDOIgXArABEBOIAAFyIAdAqABEHAIBLAoAi1nkQhTCEgODfQgKAnAXAiAjqhJQgdgRgPgnQAYgCAQAbAhxBHIAAFmAh2G4Ig6AmAiNHqIAXgy");
                    this.shape_1.setTransform(10.9, 99.9);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABinpQAYA1A5BXQA6BYAcA+IgXArAEhiFIgYhCIAvA6AAmBOIAAFyIAdAqAAmHAIBLAoAjTnkQhTCEgODfQgKAnAXAiAkIhJQgdgRgPgnQAYgCAQAbAiPBHIAAFmAiUG4Ig6AmAirHqIAXgy");
                    this.shape_2.setTransform(13.9, 99.9);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABWnpQAYA1A5BXQAVAgAwgaQAagOAGgCQAPgEAGAOIAjA6AEbkbIAGhCIgQgyAAaBOIAAFyIAdAqAAaHAIBLAoAjfnkQhTCEgODfQgKAnAXAiAkUhJQgdgRgPgnQAYgCAQAbAibBHIAAFmAigG4Ig6AmAi3HqIAXgy");
                    this.shape_3.setTransform(15.1, 99.9);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABNnLQALAZArAuQApAsAKABQAPACAihEQAfhFACgBQAQgDAGANIAogsAFNnPIgvgGIgRgyAAQBsIAAFyIAdAqAAQHeIBLAoAjpnGQhSCEgODfQgKAnAXAiAkdgrQgegRgOgnQAXgCARAbAikBlIAAFmAiqHWIg5AmAjAIIIAWgy");
                    this.shape_4.setTransform(16, 96.9);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AERpEQAlgHgFAVQgFAWgcAGQASgVgGgLQgFgMgZAOAEQoaQgQAGgJgHQgKgHANgMAEQoaQgEAFgOBjQgNBfgFgBQh8gngHgRAAsCrIAAFyIAdAqAAsIdIBLAoAjNmHQhSCEgODfQgKAlAXAiAkBASQgegRgOglQAXgCARAbAiICkIAAFmAiOIVIg5AmAikJHIAWgy");
                    this.shape_5.setTransform(13.2, 90.6);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADcpCQAIAZAMgJQAJgFADgMQANgUgHgTQgHgSgXAaADZpMQgFgOAQgBQAQgCAIAaQAYDrgEgBQgwgPgwAGQgmAEgBgCABNDXIAAFyIAdApABNJJIBLAnAislcQhTCEgODeQgKAmAXAjAjhA9QgdgQgPgnQAYgCAQAaAhoDPIAAFmAhtJAIg6AnAiEJyIAXgy");
                    this.shape_6.setTransform(10, 86.2);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADAACgEIgDAJ");
                    this.shape_7.setTransform(-0.7, 143.4);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADKpYQAIAZANgJQAIgFAEgMQgIgagRACQgPABAEAOADSp4QAYgbAHATQAHATgNAUQAPCdAXBVQgUgGg8ARQg3ATAAgBABNDtIAAFyIBLAoABNJfIAdAqAjhBTQgdgQgOgnQgLAmAXAjAislFQhTCDgNDeQAXgCARAaAhoDlIAAFmAhtJXIgWAyAhtJXIg5Am");
                    this.shape_8.setTransform(9.9, 84);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACKlAQAAAAA/gcQBAgbAIACQgchSgQidQANgUgHgTQgHgTgeAhAC7pnQgEgOAPgBQAYgCAHAUQgFAPgNAIQgNAIgIgYABND3IAAFyIAdAqABNJpIBLAoAisk7QhTCDgNDeQgLAmAXAjAjhBdQgdgQgOgnQAXgCARAaAhoDvIAAFmAhtJhIg5AmAiDKTIAWgy");
                    this.shape_9.setTransform(9.9, 83);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACwpUQAIAYANgIQARgLAHgVQgEgLgMgBQgPACgGAAQgPACAEAOAC4p1QALgMARAJQAQAJgHALQAMB3AoB1QiHAjAAgBABNDiIAAFxIBLAoABNJTIAdAqAjhBIQgdgRgOgnQgLAnAXAiAislRQhTCEgNDdQAXgCARAbAhoDaIAAFmAhtJLIgWAyAhtJLIg5Am");
                    this.shape_10.setTransform(9.9, 85.2);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADDpsQALgMARAJQAEACAKABQAGABgCAEQAEAoAFBPQAGBFARAwQhaAXgtAFAC7pLQAIAYANgIQAYgQAJgcQgCgFgFABIgnAGQgPACAEAOABNDZIAAFxIBLAoABNJKIAdAqAjhA/QgdgRgOgnQgLAnAXAiAislaQhTCEgNDdQAXgCARAbAhoDRIAAFmAhtJCIgWAyAhtJCIg5Am");
                    this.shape_11.setTransform(9.9, 86.1);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJAACgEIAAAGIgDAD");
                    this.shape_12.setTransform(-0.7, 143.4);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRp6QALgMARAJQAQAJgHALQgEgLgMgBQgPACgGAAQgPACAEAOADJpZQAIAYANgIQARgLAHgVQAEArADBUQAEBJAQAuQiHAjAAgBABNDnIAAFxIAdAqABNJYIBLAoAjhBNQgdgRgOgnQAXgCARAbAislMQhTCEgNDdQgLAnAXAiAhtJQIg5AmAhoDfIAAFmAhtJQIgWAy");
                    this.shape_13.setTransform(9.9, 84.7);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC2pnQgEgOAPgBQAYgCAHAUQgFAPgNAIQgNAIgIgYACKlAQAAAAA/gcQBAgbAIACQgkhmgNiJQANgUgHgTQgHgTgeAhABND3IAAFyIAdAqABNJpIBLAoAjhBdQgdgQgOgnQAXgCARAaAisk7QhTCDgNDeQgLAmAXAjAhtJhIg5AmAhoDvIAAFmAhtJhIgWAy");
                    this.shape_14.setTransform(9.9, 83);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACwpUQAIAYANgIQARgLAHgVQAMB3AoB1QiHAjAAgBAC4p1QALgMARAJQAQAJgHALQgEgLgMgBQgPACgGAAQgPACAEAOABNDiIAAFxIAdAqABNJTIBLAoAjhBIQgdgRgOgnQAXgCARAbAislRQhTCEgNDdQgLAnAXAiAhtJLIg5AmAhoDaIAAFmAhtJLIgWAy");
                    this.shape_15.setTransform(9.9, 85.2);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_16.setTransform(-0.7, 143.4);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADDpsQALgMARAJQAEACAKABQAGABgCAEQAEAoAFBPQAGBFARAwQhaAXgtAFAC7pLQAIAYANgIQAYgQAJgcQgCgFgFABIgnAGQgPACAEAOABNDZIAAFxIBLAoABNJKIAdAqAislaQhTCEgNDdQAXgCARAbAjhA/QgdgRgOgnQgLAnAXAiAiDJ0IAWgyIg5AmAhoDRIAAFm");
                    this.shape_17.setTransform(9.9, 86.1);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRp6QALgMARAJQAQAJgHALQAEArADBUQAEBJAQAuQiHAjAAgBADJpZQAIAYANgIQARgLAHgVQgEgLgMgBQgPACgGAAQgPACAEAOABNDnIAAFxIBLAoABNJYIAdAqAjhBNQgdgRgOgnQgLAnAXAiAislMQhTCEgNDdQAXgCARAbAhoDfIAAFmAhtJQIgWAyAhtJQIg5Am");
                    this.shape_18.setTransform(9.9, 84.7);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACKlAQAAAAA/gcQBAgbAIACQgkhmgNiJQANgUgHgTQgHgTgeAhAC2pnQgEgOAPgBQAYgCAHAUQgFAPgNAIQgNAIgIgYABND3IAAFyIAdAqABNJpIBLAoAisk7QhTCDgNDeQgLAmAXAjAjhBdQgdgQgOgnQAXgCARAaAhoDvIAAFmAhtJhIg5AmAiDKTIAWgy");
                    this.shape_19.setTransform(9.9, 83);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADZpMQgFgOAQgBQAQgCAIAaQANgUgHgTQgHgSgXAaADcpCQAIAZAMgJQAJgFADgMQAYDrgEgBQgwgPgwAGQgmAEgBgCABNDXIAAFyIBLAnABNJJIAdApAislcQhTCEgODeQAYgCAQAaAjhA9QgdgQgPgnQgKAmAXAjAiEJyIAXgyIg6AnAhoDPIAAFm");
                    this.shape_20.setTransform(10, 86.2);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AERpEQAlgHgFAVQgFAWgcAGQASgVgGgLQgFgMgZAOAEQoaQgQAGgJgHQgKgHANgMAEQoaQgEAFgOBjQgNBfgFgBQh8gngHgRAAsCrIAAFyIAdAqAAsIdIBLAoAkBASQgegRgOglQAXgCARAbAjNmHQhSCEgODfQgKAlAXAiAiOIVIg5AmAiICkIAAFmAiOIVIgWAy");
                    this.shape_21.setTransform(13.2, 90.6);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABWnpQAYA1A5BXQAVAgAwgaQAagOAGgCQAPgEAGAOIgQgyAFEkjIgjg6IgGBCAAaBOIAAFyIBLAoAAaHAIAdAqAjfnkQhTCEgODfQAYgCAQAbAkUhJQgdgRgPgnQgKAnAXAiAi3HqIAXgyIg6AmAibBHIAAFm");
                    this.shape_22.setTransform(15.1, 99.9);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEhiFIgYhCIgXArABinpQAYA1A5BXQA6BYAcA+IAvA6AAmBOIAAFyIBLAoAAmHAIAdAqAjTnkQhTCEgODfQAYgCAQAbAkIhJQgdgRgPgnQgKAnAXAiAirHqIAXgyIg6AmAiPBHIAAFm");
                    this.shape_23.setTransform(13.9, 99.9);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEDg3IgYhCIgXArACAnpQBJCiAiDOIAvA6ABEBOIAAFyIBLAoABEHAIAdAqAi1nkQhTCEgODfQAYgCAQAbAjqhJQgdgRgPgnQgKAnAXAiAiNHqIAXgyIg6AmAhxBHIAAFm");
                    this.shape_24.setTransform(10.9, 99.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_3 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_4 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_5 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_6 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_9 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_10 }, { t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_11 }, { t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_15 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_18 }, { t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_19 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_20 }, { t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_21 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_22 }, { t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_23 }, { t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_24 }, { t: this.shape_16 }] }, 2).wait(5));

                    this.instance = new lib.mindy_straight();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_head_1();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.instance_2 = new lib.mindy_blink();
                    this.instance_2.setTransform(-45.9, -43.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_1 }, { t: this.instance }, { t: this.instance_2 }] }, 7).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 28).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 9).wait(1));

                    this.instance_3 = new lib.mindy_ponytail_right_1();
                    this.instance_3.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).to({ state: [{ t: this.instance_3 }] }, 44).wait(1));

                    this.instance_4 = new lib.mindy_ponytail_left_1();
                    this.instance_4.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).to({ state: [{ t: this.instance_4 }] }, 44).wait(1));

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAeD6QgpnoBngGQA9gEAOBUAhXEhQgZi5Asi8QAShIABg8QABhFhAgDQgrgDgLAz");
                    this.shape_25.setTransform(17.5, -64.2);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhXEhQgZi5Asi8QAShIABg8QABhFhAgDQgrgDgLAzAAeD6QgpnoBngGQA9gEAOBU");
                    this.shape_26.setTransform(17.5, -64.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_25 }] }).to({ state: [{ t: this.shape_26 }] }, 44).wait(1));

                    this.instance_5 = new lib.mindy_body_1();
                    this.instance_5.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).to({ state: [{ t: this.instance_5 }] }, 44).wait(1));

                    this.instance_6 = new lib.mindy_wings03_1();
                    this.instance_6.setTransform(-35.3, 37.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).to({ state: [{ t: this.instance_6 }] }, 44).wait(1));

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_7.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7 }] }).wait(45));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);

                (lib.mindy_shuffle2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJIADgDg");
                    this.shape.setTransform(-0.7, 143.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEDg3IgYhCIAvA6ACAnpQBJCiAiDOIgXArABEBOIAAFyIAdAqABEHAIBLAoAi1nkQhTCEgODfQgKAnAXAiAjqhJQgdgRgPgnQAYgCAQAbAhxBHIAAFmAh2G4Ig6AmAiNHqIAXgy");
                    this.shape_1.setTransform(10.9, 99.9);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJAACgEIAAAGIgDAD");
                    this.shape_2.setTransform(-0.7, 143.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACcnpQA3B5AoDzQgogHARAyADnhHQAogUgUgiQAYAEADAcQADAdgjgDABgBOIAAFyIAdAqABgHAIBLAoAjmhZQgggSgIgWQAXgCARAbAiZnkQhpCmgMC9QgIAiABAHQACAVAigJAhaG4Ig6AmAhVBHIAAFmAhaG4IgXAy");
                    this.shape_3.setTransform(8.1, 99.9);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_4.setTransform(-0.7, 143.4);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADjhLQApgUgVgiQgpgHASAyACMnpQBLCkAgDEQAYAEADAcQADAdgjgDABQBOIAAFyIBLAoABQHAIAdAqAipnkQhSCDgPDgQAXgCARAbAjihZQgfgSgJgWQgIAiABAHQACAVAigJAiBHqIAXgyIg6AmAhlBHIAAFm");
                    this.shape_5.setTransform(9.7, 99.9);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACSnpQBYDCAbCmQgogHARAyADxhLQApgUgVgiQAYAEADAcQADAdgjgDABbBPIgFFxIAdAqABWHAIBLAoAjwhZQgfgSgJgWQAXgCARAbAijnkQhpCogMC7QgIAiABAHQACAVAigJAhaBHIgFFmAhkG4Ig6AmAh7HqIAXgy");
                    this.shape_6.setTransform(9.1, 99.9);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACSnpQBGCaAhDOQgpgHASAyADlhLQApgUgVgiQAYAEADAcQADAdgjgDABWBOIAAFyIAdAqABWHAIBLAoAjkhVQgfgSgJgWQAXgCARAbAijnkQhbCTgODUQgIAiABAHQACAVAigJAhkG4Ig6AmAhfBHIAAFmAhkG4IgXAy");
                    this.shape_7.setTransform(9.1, 99.9);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACWnpQBYDCAbCmQgogHARAyAD1hLQApgUgVgiQAYAEADAcQADAdgjgDABfBPIgFFxIAdAqABaHAIBLAoAj0hVQgfgSgJgWQAXgCARAbAifnkQhyC3gLCwQgIAiABAHQACAVAigJAhWBHIgFFmAhgG4Ig6AmAh3HqIAXgy");
                    this.shape_8.setTransform(8.7, 99.9);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACanpQA+CIAlDgQgpgHASAyADphLQApgUgVgiQAYAEADAcQADAdgjgDABeBOIAAFyIAdAqABeHAIBLAoAjohVQgfgSgJgWQAXgCARAbAibnkQhpCogMC/QgIAiABAHQACAVAigJAhcG4Ig6AmAhXBHIAAFmAhcG4IgXAy");
                    this.shape_9.setTransform(8.3, 99.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD1hLQApgUgVgiQAYAEADAcQADAdgjgDACWnpQBYDCAbCmQgogHARAyABfBPIgFFxIAdAqABaHAIBLAoAifnkQhyC3gLCwQgIAiABAHQACAVAigJAj0hVQgfgSgJgWQAXgCARAbAhWBHIgFFmAhgG4Ig6AmAh3HqIAXgy");
                    this.shape_10.setTransform(8.7, 99.9);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADAACgEIgDAJ");
                    this.shape_11.setTransform(-0.7, 143.4);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACMnpQBLCkAgDEQAYAEADAcQADAdgjgDADjhLQApgUgVgiQgpgHASAyABQBOIAAFyIBLAoABQHAIAdAqAjihZQgfgSgJgWQgIAiABAHQACAVAigJAipnkQhSCDgPDgQAXgCARAbAhlBHIAAFmAhqG4IgXAyAhqG4Ig6Am");
                    this.shape_12.setTransform(9.7, 99.9);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACWnpQBYDCAbCmQgogHARAyAD1hLQApgUgVgiQAYAEADAcQADAdgjgDABaBOIAAFyIAdAqABaHAIBLAoAj0hVQgfgSgJgWQAXgCARAbAifnkQhyC3gLCwQgIAiABAHQACAVAigJAhgG4Ig6AmAhbBHIAAFmAhgG4IgXAy");
                    this.shape_13.setTransform(8.7, 99.9);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACInpQBFCaAiDKIgPA3AEHhDIgYhCIAvA6ABMBOIAAFyIAdAqABMHAIBLAoAitnkQhgCYgNDLQgKAnAXAiAjuhJQgegRgOgnQAXgCARAbAhpBHIAAFmAhuG4Ig6AmAiFHqIAXgy");
                    this.shape_14.setTransform(10.1, 99.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 44).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_6 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_7 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_8 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_9 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_10 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_12 }, { t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_6 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_13 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape }] }, 17).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 2).wait(9));

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAeEOQgpnpBngGQA9gEAOBUAhdD+QgNieAmihQAShIABg7QABhGhAgCQgrgEgLAz");
                    this.shape_15.setTransform(17.5, -66.1);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhwD5QgEiBAsi5QARhHACg8QABhFhAgDQgrgEgLAzAAKEOQgTjrAZiFQAZh8A3gDQA9gEAOBV");
                    this.shape_16.setTransform(19.5, -66.1);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiFD8QAAh2AvjHQADgLASg5QANgoABgXQABhFhAgDQgrgEgLAzAgKEOQgOikAmjMQAZh8A3gDQA9gDAOBU");
                    this.shape_17.setTransform(21.7, -66.1);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiSD5QAHhmAxjRQACgHAXg9QANgoABgXQABhFhAgDQgrgEgLAzAgaELQgHhIAOhjQAHgxAaiOQAZh8A3gDQA8gDAPBU");
                    this.shape_18.setTransform(23.3, -65.8);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgxEJQgGhIAOhmQACgOAXg5QAWg6AKg0QAZh8A2gDQA9gEAPBUAimD1QAEgiAKguQAGgaAxjQQAAgBAKgQQAMgTAJgYQANgnABgYQABhFhAgDQgrgDgLAz");
                    this.shape_19.setTransform(25.6, -65.7);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ai+DpQAEggAJgtQAThUBijAQAMgYABgnQABhFhAgDQgrgDgLAzAC/hfQgPhZg8AJQhbAMhbD1QgOBmAHBI");
                    this.shape_20.setTransform(28, -64.8);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhlD8QgCgdAIgyQAFgcAMhAQAqhxAugyQAmgoA0gHQASgCAuAUQAyAVADAVAjYDvQAAgBABgBQAJg0ACghQAEg4BYiGQBYiHAAgFQABhFhAgDQgYgCgVAJQgYAMgFAX");
                    this.shape_21.setTransform(30.8, -64.3);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhYjbQAwgOAcAbQAaAbAAA7Qg/A2hBA5QiBBvgCAXQgBAbgHAnQgBAJgCAJAEBg6QiFgmhLAXQh3AlhBC2QgKAdAEAy");
                    this.shape_22.setTransform(34.8, -61.6);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEdANQgdAWhxAHQhfAHgYgFQhHgNg1AcQguAZgRAvQgKAdAEAyAkcDIIABgFQAOheBOg4QAqgeA5gUQAKgGAngSQAfgOAIgHQBEhEhFhb");
                    this.shape_23.setTransform(37.6, -60.1);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkaBsIAAgFQANhUBQgsQAbgPA1ACQAeAABBADQB3gDAsh2AEbCIQhIAigzgVQghgNgrgzQgvg4gZgPQgugahAAUQgYAIgYAnQgXAmACAZ");
                    this.shape_24.setTransform(37.4, -51);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkNgnQAJg+BAgcQAngRAbACQAlAIAYAZQgDAAgDAAQg8ABgTBWAhFhvQAsACAoApQALALAOAdQhAgOgkg3QgFgHgEgHgAEOB5QhzA+g+hjQgPgXgbg+QgGgPgFgMQAoAJAugUQAsgSAVgh");
                    this.shape_25.setTransform(36.1, -36.6);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjshdQAJg/A/gbQAogSAbACQAkAIAYAZQgDAAgDAAQg7ACgUBWAglimQAqACAqAqQALAKAOAdQAJBhAKAQQAQAaAVAyQhNgHgjhNQgSgqgYhlQgFgSgFgSADtDIQhBgIggg5QgGgPgGgOQAEAAAFAAQAkAAATgd");
                    this.shape_26.setTransform(32.9, -31.1);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjKhzQAJg/A/gbQAogSAbACQAkAIAYAZQgDAAgDAAQg7ACgUBWAgCizQBLD6AIAeQAFAQAUAiQAVAkALAHAgDi8QAqACAqAqQALAKAOAdQgBApAIAvQAGAoAFAKQBBBzAOBK");
                    this.shape_27.setTransform(29.5, -28.9);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjPh0QAJg/A/gbQAogSAbACQAkAIAYAZQgDAAgDAAQg7ACgUBWAgHi0QBLD6AIAeQAHAjAFAdQALA5AEACAgIi9QAqACAqAqQALAKAOAdQgBApAIAvQAEAbAMAXQBJCAALA9");
                    this.shape_28.setTransform(30, -28.8);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgHi9QA+DQAVBOQAJA5ADATQALA5AEACAjPiDQAIg4BAgcQApgSAaACQAkAIAYAZIgGAAQg9ACgSBQAgIjGQAkACAqAqQAHAHAvCqQBEB3AQBY");
                    this.shape_29.setTransform(30.5, -27.3);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjPiMQAIg4BAgcQAegNAlADQAkAIAYAZIgGAAQg+ACgRBKADQDpQgShhhCh0QgvirgHgGQgrgqgjgCAgHjAQA+DQAVBOIAMBSQALA5AEAC");
                    this.shape_30.setTransform(30, -26.4);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjJhlQALhLA9gbQAOgGA0AKQAyAKALAJQAUAFAKABQAFABAYAOQBEApAVB2QARBlABADQANA8AZAqAgCi0IgCABIACAAgAgUirQAIgGAIgCIgEAAQg6ABgVBcAgJiuQAGAGAdCDQAtDCALAp");
                    this.shape_31.setTransform(29.4, -30.4);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC4DMQgpisg6iiQgFgNgdgDQgZgDgKADQgBgSgfggQhTgbgnBNQgOAbgMAwQgNA1gGAUAhFARQAMhHAng1QASgbAQgMIAwE6");
                    this.shape_32.setTransform(27.6, -40.9);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiMCoQADgRAFhHQADgtAKgWQAHhpA9hXQAFgHAgAIQAeAIAHANQAWAmgCAqIAHA/ACMBHQABifg9gvIglA6QhRBRANCz");
                    this.shape_33.setTransform(23.2, -57.5);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhZFfQABgNgBhUQAAhHAFg3QAIhgAIiZQASikAShQABalWQgaBngUB2QgSBoAACKQADCkABBR");
                    this.shape_34.setTransform(17.5, -75.8);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhwEaQAAi2AgiHQACgLATg5QANgoAAgXQABg8gegnQgrg6haAqAAJEsQgRjdAbiTQAeiVAtgDQAMAAAzgfQAlgWAPAY");
                    this.shape_35.setTransform(19.6, -69.1);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAQEBQgQjcAbiTQANhBAMgVQANgZAagBQAbgCANAlQAFAPALBBAhoDvQgBi2AgiGQABgCAUhIQANgsABgYQAAgegQgFQgagBgVgBQgSgBgMApQgKAzgEAR");
                    this.shape_36.setTransform(18.9, -64.9);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAJEGQgRjaAbiVQAXhyA5gDQA6gEARBoAhwD0QAAi2AgiGQACgKATg7QANgnAAgYQABgjgJgKQgIgKgggCQgVgCgaAWQgbAWgFAa");
                    this.shape_37.setTransform(19.6, -65.4);

                    this.shape_38 = new cjs.Shape();
                    this.shape_38.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiojdQALgzArAEQBAADgBBFQgRBDgPBUQgdCmALCDAAUEOQgEg3gNh3QgEhqAPhYQAZh8A2gDQA+gDAOBU");
                    this.shape_38.setTransform(18.5, -66.1);

                    this.shape_39 = new cjs.Shape();
                    this.shape_39.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhdD+QgNieAmihQAShIABg7QABhGhAgCQgrgEgLAzAAeEOQgpnpBngGQA9gEAOBU");
                    this.shape_39.setTransform(17.5, -66.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_15 }] }).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 33).to({ state: [{ t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_31 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_36 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).to({ state: [{ t: this.shape_38 }] }, 2).to({ state: [{ t: this.shape_39 }] }, 2).wait(11));

                    this.instance = new lib.mindy_straight();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_head_1();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.instance_2 = new lib.mindy_blink();
                    this.instance_2.setTransform(-45.9, -43.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_1 }, { t: this.instance }, { t: this.instance_2 }] }, 41).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 38).wait(11));

                    this.instance_3 = new lib.mindy_ponytail_right_1();
                    this.instance_3.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).wait(90));

                    this.instance_4 = new lib.mindy_ponytail_left_1();
                    this.instance_4.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(90));

                    this.instance_5 = new lib.mindy_body_1();
                    this.instance_5.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5, p: { x: -12.2 } }] }).to({ state: [{ t: this.instance_5, p: { x: -12.5 } }] }, 46).to({ state: [{ t: this.instance_5, p: { x: -11.5 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -11.8 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -11.5 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -12.2 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -11.5 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -12.2 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -11.3 } }] }, 2).to({ state: [{ t: this.instance_5, p: { x: -12.2 } }] }, 2).wait(28));

                    this.instance_6 = new lib.mindy_wings03_1();
                    this.instance_6.setTransform(-35.3, 37.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(90));

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_7.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7 }] }).wait(90));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);


                (lib.mindy_shuffle1 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgJIAAAGg");
                    this.shape.setTransform(-0.7, 143.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEDg3IgYhCIgXArACAnpQBJCiAiDOIAvA6ABEBOIAAFyIBLAoABEHAIAdAqAi1nkQhTCEgODfQAYgCAQAbAjqhJQgdgRgPgnQgKAnAXAiAiNHqIAXgyIg6AmAhxGtIAAlm");
                    this.shape_1.setTransform(10.9, 99.9);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJAACgEIAAAGIgDAD");
                    this.shape_2.setTransform(-0.7, 143.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACsnpQA9CIAnDoIgYArAEng3IgXhCIAuA6ABvBOIAAFyIAdAqABvHAIBLAoAiKnkQgbAshGBhQg4BdgGBdQgDANgNAZQgJAVAKAOAkghXQgLgGADgXQADgegEgLQAMgBAVAhAhLG4Ig5AmAhGBHIAAFmAhLG4IgWAy");
                    this.shape_3.setTransform(6.5, 99.9);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADynpQAaA5ASBnQAKA9AWCTIgXArAFWg3IgYhCIAvA6AC2BOIAAFyIAdAqAC2HAIBKAoAlri7QgEgHBDgfQgFASgiAsAkfitQgNgUAAggIAAAAQAKgRDcjqAgEG4Ig6AmAAABHIAAFmAgEG4IgXAy");
                    this.shape_4.setTransform(-0.4, 99.9);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEBnpQAUAsAlBwQAuCIAJBAIgXArAGJhDIgYhCIAvA6ADFBOIAAFyIAdAqADFHAIBKAoAmfljQAHAFANAGQAcAMAbgNQgBAEgdAGQggAFgNARAllklQgEgHAKgQQALgTAAgKIAAAAQADgEBhgoQB1gxBEgmAAJG4Ig4AmAAOBHIAAFmAAJG4IgVAy");
                    this.shape_5.setTransform(-1.9, 99.9);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADXnpQANAeCaEgIgMA3AGnhpIgphCIA6AiACaBOIAAFyIAdAqACaHAIBLAoAm3kzQAIAGAMAFQAcAMAbgNQgBAEgeAGQggAFgMARAl9j1QgFgHAKgQQAMgUAAgJIAAAAQDdiaAtgZAggG4Ig6AmAgbBHIAAFmAggG4IgXAy");
                    this.shape_6.setTransform(2.3, 99.9);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACinpQD0D7AAAEIgLA3AHAioIgqhCIA7AiABmBOIAAFyIAdAqABmHAIBKAoAmWi2QgEgHAKgQQALgUAAgJIAAAAQBYg9BLhcQBHhXAFgCAnQj0QAKAHAKAEQAdAMAagNQgBAEgdAGQggAFgNARAhVG4Ig5AmAhPBHIAAFmAhVG4IgWAy");
                    this.shape_7.setTransform(7.5, 99.9);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABpnpQADAGCGBSQCGBRAAACIANArAHAkaIhIgkIBNgOAAtBOIAAFyIAdAqAAtHAIBKAoAnDiRQgEgHBDgfQgGASghAsAl3iDQgNgUAAggIAAAAQAMgoAag0QA0hoBbhhAiNG4Ig6AmAiIBHIAAFmAiNG4IgXAy");
                    this.shape_8.setTransform(13.2, 99.9);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABMnpQEeB/AAABIANArAGylFIhIgkIBNgOAAQBOIAAFyIAdAqAAQHAIBLAoAm2hmQgDgFAXgXQAZgYAAgDQgQBIAHAEAloh9QgUghgNABQADgoBIiIQAyhgAjg3AiqG4Ig6AmAilBHIAAFmAiqG4IgXAy");
                    this.shape_9.setTransform(16.1, 99.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJIADgDg");
                    this.shape_10.setTransform(-0.7, 143.4);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACMnpQADAGB8BjQB7BjAAACIANArAHOj3IhIgkIBNgOABQBOIAAFyIAdAqABQHAIBKAoAmFitQgNgUAAggIAAAAQAKgRDcjqAnRi7QgEgHBDgfQgFASgiAsAhlBHIAAFmAhqG4Ig6AmAiBHqIAXgy");
                    this.shape_11.setTransform(9.7, 99.9);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADFnpQAHAQBiCHQBgCFABAGIgLA3AG5iFIgqhCIA7AiACJBOIAAFyIAdAqACJHAIBKAoAmPj1QgEgHAKgQQALgUAAgJIAAAAQDdiaAugZAnJkzQAIAGAMAFQAcAMAbgNQgBAEgdAGQggAFgNARAgsBHIAAFmAgyG4Ig5AmAhIHqIAWgy");
                    this.shape_12.setTransform(4, 99.9);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGJhDIgYhCIAvA6AEBnpQAUAsAlBwQAuCIAJBAIgXArADFBOIAAFyIAdAqADFHAIBKAoAmfljQAHAFANAGQAcAMAbgNQgBAEgdAGQggAFgNARAllklQgEgHAKgQQALgTAAgKIAAAAQADgEBhgoQB1gxBEgmAAOBHIAAFmAAJG4Ig4AmAgMHqIAVgy");
                    this.shape_13.setTransform(-1.9, 99.9);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADgnpQCUFOAAAEIgMA3AGehVIgqhCIA6AiACkBOIAAFyIAdAqACkHAIBKAoAmtkzQAHAGANAFQAbAMAcgNQgCAEgdAGQggAFgMARAl0j1QgEgHAKgQQAMgUAAgJIAAAAQDciaAugZAgXG4Ig5AmAgRBHIAAFmAgXG4IgWAy");
                    this.shape_14.setTransform(1.3, 99.9);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC5npQAHAQBiCHQBgCFABAGIgMA3AGtiFIgqhCIA6AiAB9BOIAAFyIAdAqAB9HAIBKAoAmDizQgEgHAKgQQAMgUAAgJIAAAAQBXg9BNheQBJhYAFgCAm8jxQAJAHALAEQAcAMAbgNQgCAEgdAGQggAFgMARAg9G4Ig6AmAg4BHIAAFmAg9G4IgXAy");
                    this.shape_15.setTransform(5.2, 99.9);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB6npQADAGB8BjQB7BjAAACIANArAG8j3IhIgkIBNgOAA+BOIAAFyIAdAqAA+HAIBKAoAm/iLQgEgHBDgfQgGASghAsAlzh9QgNgUAAggIAAAAQAPgpAdg2QA7hrBbhhAh8G4Ig6AmAh3BHIAAFmAh8G4IgXAy");
                    this.shape_16.setTransform(11.5, 99.9);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGylFIhIgkIBNgOABMnpQEeB/AAABIANArAAQBOIAAFyIAdAqAAQHAIBLAoAloh9QgUghgNABQADgoBIiIQAyhgAjg3Am2hmQgDgFAXgXQAZgYAAgDQgQBIAHAEAilBHIAAFmAiqG4Ig6AmAjBHqIAXgy");
                    this.shape_17.setTransform(16.1, 99.9);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA5npQACAGB8BjQB8BjAAACIAMArAF6j3IhHgkIBMgOAgCBOIAAFyIAbAqAgCHAIBJAoAj9nkQh0C5gKCkQgKAnAXAiAlPhPQgegRgOgnQAXgCARAbAi4BHIAAFmAi+G4Ig5AmAjUHqIAWgy");
                    this.shape_18.setTransform(18, 99.9);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgBDEQgegQgOgnQAXgCARAaAAxjVQhQCEgODeQgKAmAXAj");
                    this.shape_19.setTransform(-12.3, 72.7);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD7htIgqhCIA7AiAAlnpQCsE2AAAEIgLA3AgVBOIAAFyIAbAqAgVHAIBJAoAjMBHIAAFmAjRG4Ig6AmAjoHqIAXgy");
                    this.shape_20.setTransform(20, 99.9);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD0g3IgYhCIAvA6ACDnpQAgBHAWBmQAKAuAZCVIgXArABHBOIAAFyIAdAqABHHAIBLAoAjbhJQgegRgOgnQAXgCARAbAiynkQhFBugQD1QgKAnAXAiAhuBHIAAFmAhzG4Ig6AmAiKHqIAXgy");
                    this.shape_21.setTransform(10.6, 99.9);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADAACgEIgDAJ");
                    this.shape_22.setTransform(-0.7, 143.4);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACAnpQBJCiAiDOIAvA6AEDg3IgYhCIgXArABEBOIAAFyIBLAoABEHAIAdAqAjqhJQgdgRgPgnQgKAnAXAiAi1nkQhTCEgODfQAYgCAQAbAhxBHIAAFmAh2G4Ig6AmAh2G4IgXAy");
                    this.shape_23.setTransform(10.9, 99.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_4 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_5 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_6 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_7 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_8 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_9 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_12 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_13 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_15 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_16 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_17 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_18 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_20 }, { t: this.shape_10 }, { t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_21 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_23 }, { t: this.shape_22 }] }, 2).wait(1));

                    this.instance = new lib.mindy_straight();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_head_1();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.instance_2 = new lib.mindy_blink();
                    this.instance_2.setTransform(-45.9, -43.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_1 }, { t: this.instance }, { t: this.instance_2 }] }, 6).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 26).wait(5));

                    this.instance_3 = new lib.mindy_ponytail_right_1();
                    this.instance_3.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).wait(37));

                    this.instance_4 = new lib.mindy_ponytail_left_1();
                    this.instance_4.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(37));

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhXEhQgZi5Asi8QAShIABg8QABhFhAgDQgrgDgLAzAAeD6QgpnoBngGQA9gEAOBU");
                    this.shape_24.setTransform(17.5, -64.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_24 }] }).wait(37));

                    this.instance_5 = new lib.mindy_body_1();
                    this.instance_5.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(37));

                    this.instance_6 = new lib.mindy_wings03_1();
                    this.instance_6.setTransform(-35.3, 37.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(37));

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_7.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7 }] }).wait(37));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);


                (lib.mindy_right = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(91));

                    this.instance = new lib.mindy_blink();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_straight();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.instance_2 = new lib.mindy_head_1();
                    this.instance_2.setTransform(-45.9, -43.1);

                    this.instance_3 = new lib.mindy_smile_1();
                    this.instance_3.setTransform(-45.9, -43.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { y: -43.1, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_1 }, { t: this.instance, p: { y: -43.1, rotation: 0, x: -45.9 } }] }).to({ state: [{ t: this.instance_2, p: { y: -43.1, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -43.1, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }] }, 10).to({ state: [{ t: this.instance_2, p: { y: -35.6, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -35.6, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }] }, 4).to({ state: [{ t: this.instance_2, p: { y: -25.1, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -25.1, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -48.4, rotation: 1.7, x: -44.7 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.1, rotation: 10.1, x: -31.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.1, rotation: 10.1, x: -31.8, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -66.7, rotation: 4.5, x: -41.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -66.7, rotation: 4.5, x: -41.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -52.2, rotation: 3, x: -42.2, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -52.2, rotation: 3, x: -42.2, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -48.4, rotation: 1.7, x: -44.7 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.1, rotation: 10.1, x: -31.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.1, rotation: 10.1, x: -31.8, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -66.7, rotation: 4.5, x: -41.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -66.7, rotation: 4.5, x: -41.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -52.2, rotation: 3, x: -42.2, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -52.2, rotation: 3, x: -42.2, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -48.4, rotation: 1.7, x: -44.7 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.1, rotation: 10.1, x: -31.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.1, rotation: 10.1, x: -31.8, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -66.7, rotation: 4.5, x: -41.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -66.7, rotation: 4.5, x: -41.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -52.2, rotation: 3, x: -42.2, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -52.2, rotation: 3, x: -42.2, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -15.8, rotation: 0, x: -45.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -15.8, rotation: 0, x: -45.9 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { y: -48.4, rotation: 1.7, x: -44.7, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { y: -48.4, rotation: 1.7, x: -44.7 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -87.8, rotation: 10.1, x: -31.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { y: -90.3, rotation: 10.1, x: -31, scaleX: 0.999, scaleY: 0.999 } }] }, 2).wait(2));

                    this.instance_4 = new lib.mindy_ponytail_right_1();
                    this.instance_4.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 0, x: 36.8, y: -68.2, scaleY: 1 } }] }).to({ state: [{ t: this.instance_4, p: { scaleX: 1.164, rotation: -14.9, x: 25.8, y: -54.7, scaleY: 1 } }] }, 14).to({ state: [{ t: this.instance_4, p: { scaleX: 1.163, rotation: -34.2, x: 15.4, y: -35.9, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -44.9, x: 11.5, y: -20.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -26.4, x: 20.1, y: -30, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 0, x: 36.8, y: -27.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 16.7, x: 46.5, y: -59.4, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 20.4, x: 62.6, y: -97.8, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 10.1, x: 54.3, y: -98, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -19.8, x: 32.4, y: -92.4, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -27.4, x: 26.8, y: -85.4, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -40.4, x: 13.3, y: -68.6, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -41.9, x: 12.8, y: -55.6, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -44.9, x: 11.5, y: -20.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -26.4, x: 20.1, y: -30, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 0, x: 36.8, y: -27.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 16.7, x: 46.5, y: -59.4, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 20.4, x: 62.6, y: -97.8, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 10.1, x: 54.3, y: -98, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -19.8, x: 32.4, y: -92.4, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -27.4, x: 26.8, y: -85.4, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -40.4, x: 13.3, y: -68.6, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -41.9, x: 12.8, y: -55.6, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -44.9, x: 11.5, y: -20.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -26.4, x: 20.1, y: -30, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 0, x: 36.8, y: -27.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 16.7, x: 46.5, y: -59.4, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 20.4, x: 62.6, y: -97.8, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 10.1, x: 54.3, y: -98, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -19.8, x: 32.4, y: -92.4, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -27.4, x: 26.8, y: -85.4, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -40.4, x: 13.3, y: -68.6, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -41.9, x: 12.8, y: -55.6, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -44.9, x: 11.5, y: -20.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: -26.4, x: 20.1, y: -30, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 0, x: 36.8, y: -27.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 1, rotation: 16.7, x: 46.5, y: -59.4, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 20.4, x: 62.6, y: -97.8, scaleY: 1.196 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: 10.1, x: 54.3, y: -98, scaleY: 1.197 } }] }, 2).to({ state: [{ t: this.instance_4, p: { scaleX: 0.999, rotation: -19.8, x: 32.4, y: -92.4, scaleY: 1.197 } }] }, 2).wait(2));

                    this.instance_5 = new lib.mindy_ponytail_left_1();
                    this.instance_5.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 0, x: -92.1, y: -65.7, scaleY: 1 } }] }).to({ state: [{ t: this.instance_5, p: { scaleX: 1.1, rotation: 15, x: -86.9, y: -75.4, scaleY: 1 } }] }, 14).to({ state: [{ t: this.instance_5, p: { scaleX: 1.1, rotation: 36, x: -63.7, y: -82.7, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 60, x: -31.5, y: -71.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 37.2, x: -58.8, y: -64.8, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 0, x: -92.1, y: -25.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: -13.2, x: -95.9, y: -43, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: -4.8, x: -83.9, y: -101.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 10.1, x: -73, y: -118.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 40.1, x: -38.9, y: -142, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 46.7, x: -31.2, y: -141, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 49.5, x: -35, y: -125.4, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 48, x: -37, y: -111.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 60, x: -31.5, y: -71.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 37.2, x: -58.8, y: -64.8, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 0, x: -92.1, y: -25.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: -13.2, x: -95.9, y: -43, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: -4.8, x: -83.9, y: -101.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 10.1, x: -73, y: -118.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 40.1, x: -38.9, y: -142, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 46.7, x: -31.2, y: -141, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 49.5, x: -35, y: -125.4, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 48, x: -37, y: -111.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 60, x: -31.5, y: -71.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 37.2, x: -58.8, y: -64.8, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 0, x: -92.1, y: -25.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: -13.2, x: -95.9, y: -43, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: -4.8, x: -83.9, y: -101.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 10.1, x: -73, y: -118.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 40.1, x: -38.9, y: -142, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 46.7, x: -31.2, y: -141, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 49.5, x: -35, y: -125.4, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 48, x: -37, y: -111.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 60, x: -31.5, y: -71.2, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 37.2, x: -58.8, y: -64.8, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: 0, x: -92.1, y: -25.8, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 1, rotation: -13.2, x: -95.9, y: -43, scaleY: 0.814 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: -4.8, x: -83.9, y: -101.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 10.1, x: -73, y: -118.1, scaleY: 1.153 } }] }, 2).to({ state: [{ t: this.instance_5, p: { scaleX: 0.999, rotation: 40.1, x: -38.9, y: -142, scaleY: 1.153 } }] }, 2).wait(2));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhYEhQgZi5Ati8QAShJABg7QABhFhAgDQgrgDgLAzAAeD6QgpnoBngGQA8gEAPBU");
                    this.shape.setTransform(17.5, -64.2);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhZEqQgYiwAniyQACgKACgJQARhIAAhIQAAhIg2gEQg2gEABAEAAcEEQgSjHAHh1QAKiwA/gDQA9gEAKAF");
                    this.shape_1.setTransform(16.9, -59.1);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAgElQgSjHAGiUQAGiWAXgmQAXgnAxgQAhWFLQgXiwAniyQACgKACgJQAShIAKhVQAKhVgsgSQgrgRgFgL");
                    this.shape_2.setTransform(16.5, -53.6);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Agbl0QAQBtg1DeQgmClAiD5AAxFPQA4jlgfjCQgZiiAhh2");
                    this.shape_3.setTransform(13.2, -45.7);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAcEEQgSjHAHh1QAKiwA/gDQA9gEAKAFAhZEqQgYiwAniyQACgKACgJQARhIAAhIQAAhIg2gEQg2gEABAE");
                    this.shape_4.setTransform(15.3, -39.7);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhLENQgYiwAoiyQACgJACgKQARhIgMg7QgLg7hkAvQhjAuB/BdAAqDnQgRjHAHh1QAKivBwAuQBwAviCBk");
                    this.shape_5.setTransform(14.6, -37);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhvEfQgFiZApiVQAaiEgrg+QgagngggbQgvgmgvBjQgiBJBLAPQAbAFAggkAAKEEQABigAMhqQAXhxBLgyQBihBAeBjQAaBVhOADQg2ABgJgx");
                    this.shape_6.setTransform(17.9, -61.6);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiUELQALiYA5iQQAfg1gVg+Qgehag7gRQgsgOgqgBQg9gBAaBsQASBOBEgkQAZgNADgwAgXD+QATifAIhoQAIhJA1geQBPgrBHAWQBwAkg6BWQgyBGgzg6QgjgoAggl");
                    this.shape_7.setTransform(33, -87.4);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AinEfQAKi6BQiwQAehEAMg6QAPhEg/gOQgpgMgVAwAgrEQQAwnoBoAOQA9AHgCBW");
                    this.shape_8.setTransform(36.2, -98.6);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AASluQABBuhPDWQg8CeABD7AgPFYQBWjbAAizQABi1Awhw");
                    this.shape_9.setTransform(32.4, -105.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiPEhQgEi7BCi1QAahGAIg7QAJhEg/gKQgrgJgQAxAgUEIQANnqBnAGQA9ADAFBW");
                    this.shape_10.setTransform(35.1, -100.7);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAUFTQBCjjgRixQgRi0Alh0AgMlzQAMBug8DcQgtCjAaD6");
                    this.shape_11.setTransform(19.5, -90.2);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAoFQQA3jmgaixQgZizAfh2Agbl0QASBtgyDfQgkClAmD4");
                    this.shape_12.setTransform(16.1, -72.8);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Agbl0QAQBtg1DeQgnClAjD5AAxFPQA4jlgfjBQgZiiAhh3");
                    this.shape_13.setTransform(13.2, -45.7);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhLENQgXiwAniyQACgJACgKQARhIgLg7QgMg7hkAvQhjAuB/BdAArDnQgSjHAHh1QAKivBwAuQBwAviCBk");
                    this.shape_14.setTransform(14.6, -37);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAKEEQABigANhpQAWhyBLgyQBihBAfBkQAZBUhNADQg3ACgJgxAhuEfQgGiZApiVQAaiEgrg+QgagngggbQgvgmgvBkQgiBIBLAPQAbAFAhgk");
                    this.shape_15.setTransform(17.9, -61.6);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgMlzQAMBug8DcQgtCjAaD6AAUFTQBCjjgRixQgRi0Alh0");
                    this.shape_16.setTransform(19.5, -90.2);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Agbl0QASBtgyDfQgkClAmD4AAoFQQA3jmgaixQgZizAfh2");
                    this.shape_17.setTransform(16.1, -72.8);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAxFPQA4jlgfjBQgZiiAhh3Agbl0QAQBtg1DeQgnClAjD5");
                    this.shape_18.setTransform(13.2, -45.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1, p: { x: 16.9, y: -59.1 } }] }, 14).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_1, p: { x: 15.3, y: -39.7 } }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).wait(2));

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_19.setTransform(-0.7, 143.4);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACAnpQBJCiAiDOIAvA6AEDg3IgYhCIgXArABEBOIAAFyIBLAoABEHAIAdAqAjqhJQgdgRgPgnQgKAnAXAiAi1nkQhTCEgODfQAYgCAQAbAiNHqIAXgyIg6AmAhxGtIAAlm");
                    this.shape_20.setTransform(10.9, 99.9);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACKnpQADAIBQBKQBOBJg2DVIAuA6AEMg3IgXhCIgYArABmBOQhqC5BqC5IgdAqABmHAIhKAoAisnkQgDAGhJBWQhJBXA1CwQAXgCARAbAjghJQgegRgOgnQgKAnAXAiAiDHqIAWgyIg5AmAhnBHQiBDGCBCg");
                    this.shape_21.setTransform(9.9, 99.9);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADAACgEIgDAJ");
                    this.shape_22.setTransform(-0.7, 143.4);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACOnKQCKgYAuCFQAwCOhrBoIAuA6AEiglIgXhCIgYArAB9A2QhdBUAQB1QAHAyAZArQAYApAhAgIgdAqACJGlIhKAoAiWm+QgdAFgwASQgwATglAuQgmAuANBcQANBcBOAgQAXgCARAbAjKgoQgegRgOgnQgKAnAXAiAhRBUQhUAxgIBcQgCAUAGAUQAYBQBAA5AhXGdIg5AmAhXGdIgWAy");
                    this.shape_23.setTransform(7.7, 102.6);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA/izQkWDVEgBwIgdAiAAACyIBJgg");
                    this.shape_24.setTransform(13.8, 131);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgDIgDAHIADgDg");
                    this.shape_25.setTransform(-0.7, 144.4);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACEmOQCHA2A7AyQB7BqjSBaIAvAvAEHgtIgYg1IgXAjAixmKQh2AxguAzQhSBcCVBhQAYgBAQAVAiJGPIAXgpIg6AfAhtFdQj6h2D6iuAjmg7QgdgOgPggQgKAgAXAc");
                    this.shape_26.setTransform(10.5, 109);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACEmOQCHA2A7AyQB7BqjSBaIAvAvABhAnQkWDWEgBwIgdAiAEHgtIgYg1IgXAjABrFtIhLAgAixmKQh2AxguAzQhSBcCVBhQAYgBAQAVAiJGPIAXgpIg6AfAhtFdQj6h2D6iuAjmg7QgdgOgPggQgKAgAXAc");
                    this.shape_27.setTransform(10.5, 109);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgkAPIBJgeIgdAf");
                    this.shape_28.setTransform(17.5, 147.3);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABEikQkbDZEgBw");
                    this.shape_29.setTransform(13.9, 129);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AALCqIAcgyIAAAAIg9ApAAnipQicCpCcB4");
                    this.shape_30.setTransform(10.5, 114);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACSnUQByA2AdB5QAPA/gUBAQgPAzgjApIAvAvAECgVIgYg1IAAAAIgXAjAjYgsQgegNgOggQgKAgAXAcAiknQQh0A9gNB9QgKBjArBaQAXgBARAVAiPHVIAcgyIAAAAIg/AoAhzB/QieCqCeB6");
                    this.shape_31.setTransform(6.1, 84.2);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AD/hHIgRhEIgcApACloCQA5CnAQDQIApA/AA0AtQhZDaBoDmIgZAsAgCIbIBFguAiPoaQhfB7giDdQAXABAOAbAjqiGQgbgTgLgpQgOAmAUAkAiJICIAbgwIg8AhAh/AUQhyDtCDDR");
                    this.shape_32.setTransform(5, 67.8);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AHMjUIgxgyIgDAwAB6nQQCbArCGCfIBDAhAAJArQiQCyCmDfIgZAsAglHqIBEguAi7noQijgOhPCUQAQARgJAdAm8kdQgGghAVgkQgkARgMAoAjpHdIAbgwIg8AhAiqASQjRCFCtEW");
                    this.shape_33.setTransform(9.3, 62.7);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AoKn1QATgcAogLQglgOgkAUAh2A9QlFCJC5DqIAAAAIABA3AkmHrIAkg7ABemBQCOgxCsgSQAegEAfgCIA/gpAIZnbIhEARIApAcABZIjIAFhUIgaArAAGBHQiaEMDyB8Ah2mbQh7hfjegiQAAAYgcAO");
                    this.shape_34.setTransform(7.6, 52.7);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAKAqIAChSIgWAq");
                    this.shape_35.setTransform(20.7, 106.9);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABtmuQCJAbBlgcQBmgdAfgRIAAAAIABAAIgBAAIAuASAHhndIAzg2AIfn9Ig+AgAAnAdQi1FtEtAtAobocQApgBAbAeIAAAAQCnBQDIgQAnXn/QgMAUgfAAAoen5QAegQApAKAkPIeIAZgxIg7AjAhVAZQk/CVCeE/");
                    this.shape_36.setTransform(5.9, 58.7);

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABzl0QDBgUChiNIAPhJAH5pRIgkA8IAwgJACEKIIAEhVIgZAsAAwCsQiZEMDxB7AoEp1QAgALAVAkQADgngcgfAhgmOQicAXjTjPQgXAGgVgXAiNKNIAbgwIg9AhAiECfQgMEAAeC+");
                    this.shape_37.setTransform(5.4, 69.9);

                    this.shape_38 = new cjs.Shape();
                    this.shape_38.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAEAYIAZgvIg5Ah");
                    this.shape_38.setTransform(13.5, 148.5);

                    this.shape_39 = new cjs.Shape();
                    this.shape_39.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB5l/QDAgZCdiRIANhKAH4pnIgiA+IAwgLABeJtQgajhAAjeAhbmUQicAcjYjKQgXAHgVgXAoFpwQAgALAWAjQACgngdgeAiPJ6IA8gjQgii8AFkBAhtKIIAagx");
                    this.shape_39.setTransform(7.1, 83.9);

                    this.shape_40 = new cjs.Shape();
                    this.shape_40.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACEmOQCHA2A7AyQB7BqjSBaIAvAvAAgGNIBLggQkghwEWjWAEHgtIgYg1IgXAjABOGPIAdgiAixmKQh2AxguAzQhSBcCVBhQAYgBAQAVAhtFdQj6h2D6iuAhyFmIg6AfAiJGPIAXgpAjmg7QgdgOgPggQgKAgAXAc");
                    this.shape_40.setTransform(10.5, 109);

                    this.shape_41 = new cjs.Shape();
                    this.shape_41.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAEIADgDIAAgEg");
                    this.shape_41.setTransform(-0.7, 144.4);

                    this.shape_42 = new cjs.Shape();
                    this.shape_42.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACEmOQCHA2A7AyQB7BqjSBaIAvAvAEHgtIgYg1IgXAjABhAnQkWDWEgBwIgdAiABrFtIhLAgAixmKQh2AxguAzQhSBcCVBhQAYgBAQAVAhtFdQj6h2D6iuAhyFmIg6AfAiJGPIAXgpAjmg7QgdgOgPggQgKAgAXAc");
                    this.shape_42.setTransform(10.5, 109);

                    this.shape_43 = new cjs.Shape();
                    this.shape_43.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACEmOQCHA2A7AyQB7BqjSBaIAvAvABmAiQkbDbEgBwIgdAiAEHgtIgYg1IgXAjABrFtIhLAgAixmKQh2AxguAzQhSBcCVBhQAYgBAQAVAhtFdQj6h2D6iuAhyFmIg6AfAiJGPIAXgpAjmg7QgdgOgPggQgKAgAXAc");
                    this.shape_43.setTransform(10.5, 109);

                    this.shape_44 = new cjs.Shape();
                    this.shape_44.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AECgVIgYg1IAAAAIgXAjACSnUQByA2AdB5QAPA/gUBAQgPAzgjApIAvAvAiknQQh0A9gNB9QgKBjArBaQAXgBARAVAjYgsQgegNgOggQgKAgAXAcAiPHVIAcgyIAAAAIg/AoAhzB/QieCqCeB6");
                    this.shape_44.setTransform(6.1, 84.2);

                    this.shape_45 = new cjs.Shape();
                    this.shape_45.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACloCQA5CnAQDQIApA/AD/hHIgRhEIgcApAA0AtQhZDaBoDmIgZAsAgCIbIBFguAiPoaQhfB7giDdQAXABAOAbAjqiGQgbgTgLgpQgOAmAUAkAiJICIAbgwIg8AhAh/AUQhyDtCDDR");
                    this.shape_45.setTransform(5, 67.8);

                    this.shape_46 = new cjs.Shape();
                    this.shape_46.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB6nQQCbArCGCfIBDAhAHMjUIgxgyIgDAwAAJArQiQCyCmDfIgZAsAglHqIBEguAm8kdQgGghAVgkQgkARgMAoAi7noQijgOhPCUQAQARgJAdAjpHdIAbgwIg8AhAiqASQjRCFCtEW");
                    this.shape_46.setTransform(9.3, 62.7);

                    this.shape_47 = new cjs.Shape();
                    this.shape_47.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AoKn1QATgcAogLQglgOgkAUAh2A9QlFCJC5DqIAAAAIABA3AkmHrIAkg7AIZnbIhEARIApAcABemBQCOgxCsgSQAegEAfgCIA/gpABZIjIAFhUIgaArAAGBHQiaEMDyB8Ah2mbQh7hfjegiQAAAYgcAO");
                    this.shape_47.setTransform(7.6, 52.7);

                    this.shape_48 = new cjs.Shape();
                    this.shape_48.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIfn9Ig+AgIgBAAIAAAAIABAAIAzg2AHgndIAuASABtmuQCJAbBlgcQBmgdAfgRAAnAdQi1FtEtAtAoen5QAegQApAKQgbgegpABAhom/QjIAQinhQQgMAUgfAAAnXn/IAAAAAkPIeIAZgxIg7AjAhVAZQk/CVCeE/");
                    this.shape_48.setTransform(5.9, 58.7);

                    this.shape_49 = new cjs.Shape();
                    this.shape_49.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AH5pRIgkA8IAwgJABzl0QDBgUChiNIAPhJACEKIIAEhVIgZAsAAwCsQiZEMDxB7AhgmOQicAXjTjPQgXAGgVgXAoEp1QAgALAVAkQADgngcgfAiNKNIAbgwIg9AhAiECfQgMEAAeC+");
                    this.shape_49.setTransform(5.4, 69.9);

                    this.shape_50 = new cjs.Shape();
                    this.shape_50.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AH4pnIgiA+IAwgLAB5l/QDAgZCdiRIANhKABeJtQgajhAAjeAhbmUQicAcjYjKQgXAHgVgXAoFpwQAgALAWAjQACgngdgeAiPJ6IA8gjQgii8AFkBAhtKIIAagx");
                    this.shape_50.setTransform(7.1, 83.9);

                    this.shape_51 = new cjs.Shape();
                    this.shape_51.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACEmOQCHA2A7AyQB7BqjSBaIAvAvAAgGNIBLggQkghwEWjWAEHgtIgYg1IgXAjABOGPIAdgiAixmKQh2AxguAzQhSBcCVBhQAYgBAQAVAiJGPIAXgpIg6AfAhtFdQj6h2D6iuAjmg7QgdgOgPggQgKAgAXAc");
                    this.shape_51.setTransform(10.5, 109);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_20 }, { t: this.shape_19 }] }).to({ state: [{ t: this.shape_21 }, { t: this.shape_19 }] }, 14).to({ state: [{ t: this.shape_23 }, { t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_27 }, { t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_29 }, { t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_31 }, { t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).to({ state: [{ t: this.shape_39 }, { t: this.shape_38 }] }, 2).to({ state: [{ t: this.shape_40 }, { t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_42 }, { t: this.shape_41 }] }, 2).to({ state: [{ t: this.shape_43 }, { t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_44 }, { t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_45 }] }, 2).to({ state: [{ t: this.shape_46 }] }, 2).to({ state: [{ t: this.shape_47 }] }, 2).to({ state: [{ t: this.shape_48 }, { t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_49 }] }, 2).to({ state: [{ t: this.shape_50 }, { t: this.shape_38 }] }, 2).to({ state: [{ t: this.shape_27 }, { t: this.shape_41 }] }, 2).to({ state: [{ t: this.shape_27 }, { t: this.shape_41 }] }, 2).to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_29 }, { t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_31 }, { t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).to({ state: [{ t: this.shape_39 }, { t: this.shape_38 }] }, 2).to({ state: [{ t: this.shape_51 }, { t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_27 }, { t: this.shape_41 }] }, 2).to({ state: [{ t: this.shape_26 }, { t: this.shape_41 }, { t: this.shape_29 }, { t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_31 }, { t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).wait(2));

                    this.instance_6 = new lib.mindy_body_1();
                    this.instance_6.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 37.7, x: -12.2, rotation: 0 } }] }).to({ state: [{ t: this.instance_6, p: { scaleY: 1.053, y: 37.7, x: -12.2, rotation: 0 } }] }, 14).to({ state: [{ t: this.instance_6, p: { scaleY: 0.945, y: 45.9, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.888, y: 36, x: -15.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.925, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: 2.6, x: -13.8, rotation: 3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 15.8, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 29.5, x: -11.3, rotation: 3.8 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.888, y: 36, x: -15.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.925, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: 2.6, x: -13.8, rotation: 3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 15.8, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 29.5, x: -11.3, rotation: 3.8 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.888, y: 36, x: -15.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.925, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: 2.6, x: -13.8, rotation: 3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 15.8, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: 29.5, x: -11.3, rotation: 3.8 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.814, y: 58.4, x: -12.2, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.888, y: 36, x: -15.5, rotation: 0 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 1, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.925, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).to({ state: [{ t: this.instance_6, p: { scaleY: 0.849, y: -0.2, x: -13, rotation: 5.3 } }] }, 2).wait(2));

                    this.instance_7 = new lib.mindy_wings03_1();
                    this.instance_7.setTransform(-33.4, 36.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7, p: { y: 36.8, scaleY: 1, rotation: 0, x: -33.4 } }] }).to({ state: [{ t: this.instance_7, p: { y: 45.9, scaleY: 1, rotation: 0, x: -33.4 } }] }, 14).to({ state: [{ t: this.instance_7, p: { y: 50.4, scaleY: 1, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 29.8, scaleY: 1, rotation: 5, x: -32.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 0.6, scaleY: 1, rotation: 3, x: -34.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 12.9, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 27.2, scaleY: 1, rotation: 3.8, x: -32.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 29.8, scaleY: 1, rotation: 5, x: -32.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 0.6, scaleY: 1, rotation: 3, x: -34.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 12.9, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 27.2, scaleY: 1, rotation: 3.8, x: -32.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 29.8, scaleY: 1, rotation: 5, x: -32.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 0.6, scaleY: 1, rotation: 3, x: -34.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 12.9, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 27.2, scaleY: 1, rotation: 3.8, x: -32.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 57.7, scaleY: 0.814, rotation: 0, x: -33.4 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: 29.8, scaleY: 1, rotation: 5, x: -32.9 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).to({ state: [{ t: this.instance_7, p: { y: -3, scaleY: 1, rotation: 5.3, x: -34 } }] }, 2).wait(2));

                    this.instance_8 = new lib.shadow();
                    this.instance_8.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_8.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get(this.instance_8, { override: true }).wait(26).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 0.77, scaleY: 0.77, alpha: 0.051 }, 0).wait(4).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 1, scaleY: 1, alpha: 0.102 }, 0).wait(8).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 0.77, scaleY: 0.77, alpha: 0.051 }, 0).wait(4).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 1, scaleY: 1, alpha: 0.102 }, 0).wait(8).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 0.77, scaleY: 0.77, alpha: 0.051 }, 0).wait(4).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 1, scaleY: 1, alpha: 0.102 }, 0).wait(8).to({ scaleX: 0.88, scaleY: 0.88, alpha: 0.07 }, 0).wait(4).to({ scaleX: 0.77, scaleY: 0.77, alpha: 0.051 }, 0).wait(2));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);

                (lib.mindy_move2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.mindy_straight();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_head_1();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 13).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 4).to({ state: [{ t: this.instance_1 }] }, 3).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 4).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 15).wait(1));

                    this.instance_2 = new lib.mindy_ponytail_right_1();
                    this.instance_2.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }] }).to({ state: [{ t: this.instance_2 }] }, 39).wait(1));

                    this.instance_3 = new lib.mindy_ponytail_left_1();
                    this.instance_3.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).to({ state: [{ t: this.instance_3 }] }, 39).wait(1));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAeD6QgpnoBngGQA9gEAOBUAhXEhQgZi5Asi8QAShIABg8QABhFhAgDQgrgDgLAz");
                    this.shape.setTransform(17.5, -64.2);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAeD6QgpnoBngGQA8gEAPBUAhYEhQgZi5Ati8QAShJABg7QABhFhAgDQgrgDgLAz");
                    this.shape_1.setTransform(17.5, -64.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 39).wait(1));

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIgDAJAACgEIAAAGIgDAD");
                    this.shape_2.setTransform(-0.7, 143.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACAnpQBJCiAiDOIgXArAEDg3IgYhCIAvA6ABEBOIAAFyIAdAqABEHAIBLAoAjqhJQgdgRgPgnQAYgCAQAbAi1nkQhTCEgODfQgKAnAXAiAh2G4Ig6AmAhxBHIAAFmAh2G4IgXAy");
                    this.shape_3.setTransform(10.9, 99.9);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgJIAAAGg");
                    this.shape_4.setTransform(-0.7, 143.4);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABqnpQALAZBDCCQAxBeAZBKIgYArAEZhkIgXhCIAuA6AAtBOIAAFyIAdAqAAtHAIBLAoAkAhJQgegRgOgnQAXgCARAbAjMnkQhSCEgODfQgKAnAXAiAiNG4Ig5AmAiHGtIAAlmAiNG4IgWAy");
                    this.shape_5.setTransform(13.1, 99.9);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABBnpQACAEBGB8QAbAvAkAaQAoAdAfgPIANArAFLjQIg8hCIBKAWAAFBOIAAFyIAdAqAAFHAIBLAoAkphJQgdgRgPgnQAYgCAQAbAj0nkQhTCEgODfQgKAnAXAiAi1G4Ig6AmAi1G4IgXAyAiwBHIAAFm");
                    this.shape_6.setTransform(17.2, 99.9);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAtnpQABADBQB9QAMAUA/gGQA2gGAXgLIBDAQAFtmEIhXAYIAvgyAgNBOIAAFyIAbAqAgNHAIBJAoAk9hJQgdgRgPgnQAYgCAQAbAkInkQhTCEgODfQgKAnAXAiAjJG4Ig6AmAjJG4IgXAyAjEBHIAAFm");
                    this.shape_7.setTransform(19.2, 99.9);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA3nTQABABAhAkQApAwAhAzQAFAIAygzQA5g4AEgDIBMgdAFcn+IhFBNIALhMAgDBkIAAFyIAbApAgDHWIBJAnAkzg0QgdgQgPgnQAYgCAQAaAj+nPQhTCEgODgQgKAmAXAjAi/HNIg6AnAi6HCIAAlmAi/HNIgXAy");
                    this.shape_8.setTransform(18.2, 97.7);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABAnGQABABAhAlQApAvAhA0QAFAIAygzQA5g5AEgCIA6hBAE4oMIgYBpIgZhNAAEBxIAAFyIAdAqAAEHjIBLAoAkqgmQgdgRgPgnQAYgCAQAbAj1nBQhTCEgODfQgKAnAXAiAi2HbIg6AmAi2HbIgXAyAixBqIAAFm");
                    this.shape_9.setTransform(17.3, 96.4);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABOnBQAAABAiAkQApAwAhAzQAEAIAzgzQA4g4AFgDIAehTAEhoQIANBxIgshDAARB2IAAFyIAdApAARHoIBLAnAkcgiQgegQgOgnQAXgCARAaAjom9QhSCEgODgQgKAmAXAjAipHfIg5AnAipHfIgWAyAijBuIAAFm");
                    this.shape_10.setTransform(15.9, 95.9);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABAnGQABABAhAlQApAvAhA0QAFAIAygzQA5g5AEgCIA6hBAE4oMIgYBpIgZhNAAEBxIAAFyIAdAqAAEHjIBLAoAj1nBQhTCEgODfQgKAnAXAiAkqgmQgdgRgPgnQAYgCAQAbAi2HbIg6AmAi2HbIgXAyAixBqIAAFm");
                    this.shape_11.setTransform(17.3, 96.4);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#343632").ss(1.5, 1, 1).p("AACgEIAAAGIgDADg");
                    this.shape_12.setTransform(-0.7, 143.4);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA3nTQABABAhAkQApAwAhAzQAFAIAygzQA5g4AEgDIALhMAFcn+IhFBNIBMgdAgDBkIAAFyIBJAnAgDHWIAbApAkzg0QgdgQgPgnQgKAmAXAjAj+nPQhTCEgODgQAYgCAQAaAjWH/IAXgyIg6AnAi6HCIAAlm");
                    this.shape_13.setTransform(18.2, 97.7);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAtnYQABABAhAkQApAwAhAzQAFAIAygzQA5g4AEgDIBVgCAFtnoIhgAyIAmhDAgNBfIAAFyIAbApAgNHRIBJAnAkInUQhTCEgODgQgKAmAXAjAk9g5QgdgQgPgnQAYgCAQAaAjJHIIg6AnAjJHIIgXAyAjEBXIAAFm");
                    this.shape_14.setTransform(19.2, 98.2);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_15.setTransform(-0.7, 143.4);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABOnBQAAABAiAkQApAwAhAzQAEAIAzgzQA4g4AFgDIgshDAEhoQIANBxIAehTAARB2IAAFyIBLAnAARHoIAdApAkcgiQgegQgOgnQgKAmAXAjAjom9QhSCEgODgQAXgCARAaAi/IRIAWgyIg5AnAijBuIAAFm");
                    this.shape_16.setTransform(15.9, 95.9);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAtnpQABADBQB9QAMAUA/gGQA2gGAXgLIAvgyAFtmEIhXAYIBDAQAgNBOIAAFyIBJAoAgNHAIAbAqAk9hJQgdgRgPgnQgKAnAXAiAkInkQhTCEgODfQAYgCAQAbAjgHqIAXgyIg6AmAjEBHIAAFm");
                    this.shape_17.setTransform(19.2, 99.9);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA2npQACAEBGB8QAbAvAkAaQAoAdAfgPIBTggAFkkPIhggDIAxAiAgEBOIAAFyIBJAoAgEHAIAbAqAk0hJQgdgRgPgnQgKAnAXAiAj/nkQhTCEgODfQAYgCAQAbAjXHqIAXgyIg6AmAi7BHIAAFm");
                    this.shape_18.setTransform(18.3, 99.9);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABcnpQARAmBHB5QA6BlAYBIIA4AxAEwhSIgqhLIgFA9AAgBOIAAFyIBLAoAAgHAIAdAqAkOhJQgdgRgPgnQgKAnAXAiAjZnkQhTCEgODfQAYgCAQAbAixHqIAXgyIg6AmAiVGtIAAlm");
                    this.shape_19.setTransform(14.5, 99.9);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEMhAIghhCIgOA9ABunpQA1B1ATAzQAmBkAPBbIBBA6AAyBOIAAFyIBLAoAAyHAIAdAqAj8hJQgdgRgPgnQgKAnAXAiAjHnkQhTCEgODfQAYgCAQAbAifHqIAXgyIg6AmAiDBHIAAFm");
                    this.shape_20.setTransform(12.7, 99.9);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACAnpQBJCiAiDOIAvA6AEDg3IgYhCIgXArABEBOIAAFyIBLAoABEHAIAdAqAjqhJQgdgRgPgnQgKAnAXAiAi1nkQhTCEgODfQAYgCAQAbAiNHqIAXgyIg6AmAhxBHIAAFm");
                    this.shape_21.setTransform(10.9, 99.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 4).to({ state: [{ t: this.shape_6 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_7 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_8 }, { t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_9 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_10 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_11 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_8 }, { t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_9 }, { t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_17 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_18 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_19 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_20 }, { t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_21 }, { t: this.shape_15 }] }, 3).wait(1));

                    this.instance_4 = new lib.mindy_body_1();
                    this.instance_4.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).to({ state: [{ t: this.instance_4 }] }, 39).wait(1));

                    this.instance_5 = new lib.mindy_wings03_1();
                    this.instance_5.setTransform(-35.3, 37.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).to({ state: [{ t: this.instance_5 }] }, 39).wait(1));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(40));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);

                (lib.mindy_move1 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.instance = new lib.mindy_straight();
                    this.instance.setTransform(-45.9, -43.1);

                    this.instance_1 = new lib.mindy_head_1();
                    this.instance_1.setTransform(-45.9, -43.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -45.9, y: -43.1 } }, { t: this.instance, p: { rotation: 0, x: -45.9, y: -43.1 } }] }).to({ state: [{ t: this.instance_1, p: { rotation: -2, x: -48.7, y: -41.1 } }, { t: this.instance, p: { rotation: -2, x: -48.7, y: -41.1 } }] }, 5).to({ state: [{ t: this.instance_1, p: { rotation: -3.8, x: -51.1, y: -39.3 } }, { t: this.instance, p: { rotation: -3.8, x: -51.1, y: -39.3 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -5.8, x: -53.7, y: -37.1 } }, { t: this.instance, p: { rotation: -5.8, x: -53.7, y: -37.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -3.8, x: -51.1, y: -39.3 } }, { t: this.instance, p: { rotation: -3.8, x: -51.1, y: -39.3 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -2, x: -48.7, y: -41.1 } }, { t: this.instance, p: { rotation: -2, x: -48.7, y: -41.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -45.9, y: -43.1 } }, { t: this.instance, p: { rotation: 0, x: -45.9, y: -43.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 1.6, x: -43.8, y: -44.6 } }, { t: this.instance, p: { rotation: 1.6, x: -43.8, y: -44.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 3.6, x: -40.9, y: -46 } }, { t: this.instance, p: { rotation: 3.6, x: -40.9, y: -46 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 4.9, x: -39, y: -47.4 } }, { t: this.instance, p: { rotation: 4.9, x: -39, y: -47.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 3.6, x: -40.9, y: -46 } }, { t: this.instance, p: { rotation: 3.6, x: -40.9, y: -46 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 1.6, x: -43.8, y: -44.6 } }, { t: this.instance, p: { rotation: 1.6, x: -43.8, y: -44.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -45.9, y: -43.1 } }, { t: this.instance, p: { rotation: 0, x: -45.9, y: -43.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: -45.9, y: -43.1 } }, { t: this.instance, p: { rotation: 0, x: -45.9, y: -43.1 } }] }, 12).wait(1));

                    this.instance_2 = new lib.mindy_ponytail_right_1();
                    this.instance_2.setTransform(36.8, -68.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 36.8, y: -68.2, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_2, p: { rotation: -0.7, x: 34.9, y: -68.5, scaleX: 1, scaleY: 1 } }] }, 7).to({ state: [{ t: this.instance_2, p: { rotation: -1.5, x: 32.4, y: -69, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: -1.3, x: 32.3, y: -68.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 34, y: -68.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.2, x: 36.9, y: -68.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 2.5, x: 40.7, y: -67, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 3.7, x: 44.1, y: -66.3, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 4.8, x: 47.3, y: -65.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 3.7, x: 46.3, y: -66.3, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 2.7, x: 43.7, y: -67.4, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.4, x: 40.2, y: -68.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 0.4, x: 38.1, y: -68.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 36.8, y: -68.2, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 36.8, y: -68.2, scaleX: 1, scaleY: 1 } }] }, 8).wait(1));

                    this.instance_3 = new lib.mindy_ponytail_left_1();
                    this.instance_3.setTransform(-92.1, -65.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: -92.1, y: -65.7, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_3, p: { rotation: -0.7, x: -93.9, y: -64.2, scaleX: 1, scaleY: 1 } }] }, 7).to({ state: [{ t: this.instance_3, p: { rotation: -1.5, x: -96.3, y: -62.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -1.3, x: -96.5, y: -63.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: -94.8, y: -65.5, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 1.2, x: -91.9, y: -68.4, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 2.5, x: -88.1, y: -70, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 3.7, x: -84.6, y: -72.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 4.8, x: -81.2, y: -73.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 3.7, x: -82.3, y: -72.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 2.7, x: -85, y: -70.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 1.4, x: -88.5, y: -68.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0.4, x: -90.4, y: -66.3, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: -92.1, y: -65.7, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: -92.1, y: -65.7, scaleX: 1, scaleY: 1 } }] }, 8).wait(1));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhXEhQgZi5Asi8QAShIABg8QABhFhAgDQgrgDgLAzAAeD6QgpnoBngGQA9gEAOBU");
                    this.shape.setTransform(17.5, -64.2);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AACD6QgSjpAaiGQAah8A4gDQA9gEAOBUAhzEhQgUiUA2jhQAfhcABgoQABhFhAgDQgqgDgMAz");
                    this.shape_1.setTransform(16.8, -64.2);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAD6QgTjeAdiRQAbh8A3gDQA9gEAOBUAh3EhQgTiKA5jrQAghdAAgnQABhFhAgDQgqgDgMAz");
                    this.shape_2.setTransform(15.4, -64.2);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAD6QgTjdAdiSQAah8A4gDQA9gEAOBUAh3EhQgTiJA4jsQAghcABgoQABhFhAgDQgrgDgLAz");
                    this.shape_3.setTransform(12.3, -63.8);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAjD6QgRiNgHg+QgLhoAMg8QAah8A3gDQA9gEAPBUAhSEhQgSh/gBgkQgGhuAYhkQAghcAAgoQABhFhAgDQgqgDgMAz");
                    this.shape_4.setTransform(10.7, -63.8);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgqEhQgSiBgBgiQgEhHAFiLQAAglAIgrQAHgrAAgJQAAhFhAgDQgqgDgMAzABMD6QgHg1gWhEQgWhDgCgPQgLhpAMg7QAPhIAKgWQAOggAZgBQA+gEAOBU");
                    this.shape_5.setTransform(9.1, -63.8);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB0D3QgHg3gahDQgZhCgCgPQgGg8gDhVQgDhdAHgNQAQggAagCQA+gDAOBUAgCEdQgFgqgOh4Qghk2AAgZQABhFhAgDQgngEgMAz");
                    this.shape_6.setTransform(7.5, -63.5);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgqEhQAggmgKjGQgJiqgXhjQABhFhBgDQgmgEgMA0ABWD6QAZgvgZhZQhHj2AahPQAIgaATgGQABAAAXgBQA9gEAOBU");
                    this.shape_7.setTransform(11.9, -63.8);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgzEhQAggmgKjGQgIiogYhlQABhFhAgDQgogEgLA0ABND6QAZgugZhaQgzixAgiUQAFgaAQgGIAVgBQA9gEAPBU");
                    this.shape_8.setTransform(15.9, -63.8);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhNEhQAmgugKi+QgCgmAChwQAChQgJgnQABhFhAgDQgogDgLAzAAzD6QAJgQgGjQQgGjWAFgXQAFgaAQgGIAVgBQA+gEANBU");
                    this.shape_9.setTransform(20.3, -63.8);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgBD6QAEgMAGg0QAHhFgChbQgDhYAUhNQAWhAABgIQAFgaARgGIAVgBQA9gEAOBUAiDEhQApgygJi6QAMhKAChMQAAgcAQgqQAOglgDgMQABhFhAgDQgngDgLAz");
                    this.shape_10.setTransform(23.6, -63.8);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgWD6QAGgLAGg1QALh+gBgiQAAgkAKgxQAPg2AGgaQAWg/ABgJQAFgaARgGIAVgBQA9gEAOBUAijEhQA3hCgJiqQAfhkABgyQABgdAPgpQAOgkgDgNQABhFhAgDQgngEgLA0");
                    this.shape_11.setTransform(24.3, -63.8);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUD6QADgFAFheQAGhdgBggQgBgPAfhuQAghtABgDQAFgaARgGIAUgBQA9gEAPBUAioEhQAzg/gJitQAqi6ANgiQAOgkgDgNQABhFhAgDQgngEgLA0");
                    this.shape_12.setTransform(22.1, -63.8);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAGD6QACgEgGgdQgHgjAEgfQADguAEhdQAChIAKgvQAKgqANgjQAMgaAAgBQAEgXAYgJIAVgBQA+gEANBUAiMEhQApgzgJi5QA4j6gEgTQABhEhHgEQgogDgLAz");
                    this.shape_13.setTransform(19.3, -63.8);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAeD6QgpnoBngGQA8gEAPBUAhYEhQgZi5Ati8QAShJABg7QABhFhAgDQgrgDgLAz");
                    this.shape_14.setTransform(17.5, -64.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 5).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape }] }, 2).to({ state: [{ t: this.shape_14 }] }, 8).wait(1));

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#343632").ss(1.5, 1, 1).p("AgBAFIADgDIAAgGg");
                    this.shape_15.setTransform(-0.7, 143.4);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEDg3IgYhCIgXArACAnpQBJCiAiDOIAvA6ABEBOIAAFyIBLAoABEHAIAdAqAi1nkQhTCEgODfQAYgCAQAbAjqhJQgdgRgPgnQgKAnAXAiAiNHqIAXgyIg6AmAhxBHIAAFm");
                    this.shape_16.setTransform(10.9, 99.9);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACAnpQBJCiAiDOIgXArAEDg3IgYhCIAvA6ABEBOIAAFyIAdAqABEHAIBLAoAjqhJQgdgRgPgnQAYgCAQAbAi1nkQhTCEgODfQgKAnAXAiAh2G4Ig6AmAhxGtIAAlmAiNHqIAXgy");
                    this.shape_17.setTransform(10.9, 99.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }] }).to({ state: [{ t: this.shape_17 }, { t: this.shape_15 }] }, 39).wait(1));

                    this.instance_4 = new lib.mindy_body_1();
                    this.instance_4.setTransform(-12.2, 37.7);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).to({ state: [{ t: this.instance_4 }] }, 39).wait(1));

                    this.instance_5 = new lib.mindy_wings03_1();
                    this.instance_5.setTransform(-35.3, 37.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).to({ state: [{ t: this.instance_5 }] }, 39).wait(1));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(8.9, 144.6, 1, 1, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(40));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-92.1, -93.1, 200.9, 251.3);

                (lib.mary_mouthOnly = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_60 = function() {
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(60).call(this.frame_60));

                    this.instance = new lib.mary_mouthG("synched", 0);
                    this.instance.setTransform(15, 8.2, 1, 1, 0, 0, 0, 15, 8.2);
                    this.instance._off = true;

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).wait(1).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 5).wait(6).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).wait(3));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);

                (lib.mary_wrong = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(63));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AABEGIgFlXQgChoA8gLQAsgJgJA5AglEJIgNnZQgCg+glAH");
                    this.shape.setTransform(243.3, -117.9);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AACEGIAGlQQAAgvAqg4QAQgWANgHQANgJgDAOAhZkHQAQgDAUEKQALCYAGBx");
                    this.shape_1.setTransform(240.4, -109.9);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgkETQgYiAAKjmQAHjHAAAAAA2jGIggCMQgcCsAICp");
                    this.shape_2.setTransform(241, -87.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAUDBQhNhhgNhCQgPhPAviXABLipIgWApQgYAygNAxQgoCZBUBN");
                    this.shape_3.setTransform(233.2, -81);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgziXQg3BTARBeQATByB8AKABeCeQh9g9AfiEQAJgqAZgsQAMgXAKgN");
                    this.shape_4.setTransform(227.3, -77.5);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiegyQApCABfAmQAgAOAvAEQAaACAtACAgriJQghBoBSBMQArAoBtA1");
                    this.shape_5.setTransform(220.1, -76.7);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AipgmQAFAtAwAXQAhARBFAKQBWAOAPAEQAwANAFAbAhMhyQAVAxAmAcQATAPAyAUQAvARAWASQAiAcAPA0");
                    this.shape_6.setTransform(219.7, -74.2);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB7CMQg3iChZgoQhBgdhDATACZCKQgGgcgHgYQgMgvgSgmQg5hxhngb");
                    this.shape_7.setTransform(223.1, -75.5);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhohrQASgFAeARQAgASAYAhQBEBWghB4ABBCgQgBgCAQgpQATgvAEgmQAQh+h7hD");
                    this.shape_8.setTransform(235.7, -75.9);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhMiTQADgBAVAeQAYAkAOAnQArB3hKBYAAcijQASAKAPAjQAOAiACBPQACBtheA6");
                    this.shape_9.setTransform(245.5, -73.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABYiJQAoBQg4BeQg3BfhbASAAIiVQACAAAEAhQAFAogGAoQgOB7hnA/");
                    this.shape_10.setTransform(252.1, -71.1);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AChgGQgPAjgpAMQgaAIg6ABQg9ACgZAGQgtAKgUAhABthkQgBAcgoAVQgQAJhFAaQiDAtgMBI");
                    this.shape_11.setTransform(259.6, -65.4);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACuBCQhhhYhwAWQgoAGgiAUQgbAPgHALAitA0QAZhWCCgYQAvgJAyADQAtADAUAL");
                    this.shape_12.setTransform(260.3, -60.9);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah6A5QAAgZAegWQAggWAqgDQBtgJA+B+ACFgsQhkhehgA7QgnAXgZAoQgYAlgBAk");
                    this.shape_13.setTransform(256.6, -62.4);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhwB2QABg8AkgmQAegfAwgJQAtgJAqAOQAqAPAQAdAiOB2QgYiJBihCQAmgaArgFQArgEAaAR");
                    this.shape_14.setTransform(253.3, -70.9);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhIChQgqiAAehYQAahMBDgdAgqChQgjhpBQhdQAcgiAggTQAegSAEAJ");
                    this.shape_15.setTransform(244.2, -76.6);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgvijQgSAIgKAfQgLAgAFAsQALBvBdBlABUiLQgCgEgUAXQgYAcgOAjQgpBrBGBy");
                    this.shape_16.setTransform(233.8, -77.1);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABlCjQhMhagNh+QgEgpADgmQADghACADAhfiLQgGACABAWQACAbAOAkQAoBlBzBy");
                    this.shape_17.setTransform(229.8, -77);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah+hgQgBAsAjAhQAVATA4AfQA3AfAVATQAkAhAAAsAgPidQgIA3AaAnQARAYApAaQAVAtAeA6QASApgDAb");
                    this.shape_18.setTransform(228.7, -76.3);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgaiLQBjAAAlCGQAXBSgHA/ABgCMQALh7hkg6QgkgXgpgGQgngFgSAM");
                    this.shape_19.setTransform(229, -73.9);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAicQBKACAZCNQARBagJBQAhthNQBmgKAzBrQATAlAJAuQAHAkgCAS");
                    this.shape_20.setTransform(230.8, -75.6);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAGijQA7AEASCPQALBggIBUAA4CkQABgIgGgmQgIgygNgrQgoiEhPgR");
                    this.shape_21.setTransform(233, -76.3);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAsCgQABgIgGgmQgChAgJgeQgahPgRgkQgcgzgkgIAASifQAhAMAKAcQAGAQAKBSQAIBEgLBx");
                    this.shape_22.setTransform(234.2, -75.9);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgHiHQBKhsADDFQACBhgOB5AASCuQABhzgPh+QgIhKgTAOQg0AmAHBP");
                    this.shape_23.setTransform(234.8, -100.8);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAPDwQgBiugLh1QgSjkg/AwAAijhQA2hDgLEDQgGCAgQCP");
                    this.shape_24.setTransform(235.4, -108.3);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAPDqQgBi0gLhvQgSjlg/AxAAijZQA2hDgLEDQgGCEgQCL");
                    this.shape_25.setTransform(237.8, -115.5);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAhkQQAgASgcDDQgkD+AFBcAggESQgBi0gLhvQgGhHAJhbQAHhBgPgq");
                    this.shape_26.setTransform(242.7, -119.5);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAEEJIgFlXQgChoA8gLQAsgJgJA5AgiEMIgNnZQgBgfgNgRQgMgRgTAE");
                    this.shape_27.setTransform(243, -118.2);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AATEGIgHlXQgBg3AGgRQAHgUAegFQAVgEAQAkQAPAigFAeAgTEJIgTnNQgBgMgfgqQgMgRgTAE");
                    this.shape_28.setTransform(241.5, -117.9);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAFEJIgGlXQgBg3AEgRQANghAYgEQAYgEANAeQAZA3gDAPAghEMIgUnNQgBgbgYghQgGgJgCgDQgEgDgIAC");
                    this.shape_29.setTransform(242.9, -118.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 4).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 2).to({ state: [{ t: this.shape }] }, 2).to({ state: [{ t: this.shape }] }, 2).wait(1));

                    this.instance = new lib.mary_straight_1();
                    this.instance.setTransform(180.4, -96.1);

                    this.instance_1 = new lib.mary_head_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.instance_2 = new lib.mary_head1();
                    this.instance_2.setTransform(169.3, -101);

                    this.instance_3 = new lib.mary_head2();
                    this.instance_3.setTransform(171.1, -92.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_2 }] }, 4).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 171.1, y: -92.6 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -11.6, x: 161.4, y: -80.5 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -15.8, x: 158.5, y: -75.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -15.3, x: 158.8, y: -76.3 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -13.6, x: 159.9, y: -78.3 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -9.9, x: 162.6, y: -82.5 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -0.9, x: 170, y: -91.7 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 5.9, x: 176.6, y: -98 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 10.7, x: 181.6, y: -101.8 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 12.6, x: 183.7, y: -103.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 10.9, x: 181.9, y: -101.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 7.2, x: 177.9, y: -99 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -0.4, x: 170.4, y: -92.1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -6.4, x: 165.2, y: -86.2 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -8.6, x: 163.4, y: -83.8 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -7.4, x: 164.4, y: -85.1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -2.7, x: 168.3, y: -89.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0.2, x: 171, y: -92.8 } }] }, 2).to({ state: [{ t: this.instance_2 }] }, 8).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 3).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 12).wait(1));

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABTg7IASB+AhThCIgRCF");
                    this.shape_30.setTransform(225.4, 8.3);

                    this.instance_4 = new lib.mary_body_1();
                    this.instance_4.setTransform(209.8, -7.3);

                    this.instance_5 = new lib.mary_skirt_1();
                    this.instance_5.setTransform(201.6, 14.2);

                    this.instance_6 = new lib.mary_wings01_1();
                    this.instance_6.setTransform(193.6, -25.4);

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_7.alpha = 0.102;

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAxplIARB9IAjFMQAHA0AhASAi/ijIgNgoIAAABQhHBpBgAaABlicQgTA5ATAcAiYplIg0GbADuIkIiIhcIAEAaIC0BqAkdJlIC8hkQgLl+gMl9AgMkYIByLg");
                    this.shape_31.setTransform(230.6, 76.5);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_31 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.shape_30 }] }).wait(64));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.mary_shuffle3 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABTg7IASB+AhThCIgRCF");
                    this.shape.setTransform(225.4, 8.3);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABgkOIARB9IAjFLQAHAzAhATAiQCyIgNgoIAAABQhHBpBgAaACUC6QgSA4ASAdAhpkOIg0GZ");
                    this.shape_1.setTransform(225.8, 42.2);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC8FDQghgSgHg0QgSA5ASAcAiQD2IgNgoIAAABQhHBpBgAaABFlKIBPJHAhdlRIhAIg");
                    this.shape_2.setTransform(225.8, 35.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC8FDQghgSgHg0QgSA5ASAcAiQD2IgNgoIAAABQhHBpBgAaABFlKIBPJHAhflRIg+Ig");
                    this.shape_3.setTransform(225.8, 35.4);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiQD2IgNgoIAAABQhHBpBgAaAC8FDQghgSgHg0QgSA5ASAcAhglRIg9IgABFlKIBPJH");
                    this.shape_4.setTransform(225.8, 35.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 14).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 2).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 14).wait(1));

                    this.instance = new lib.mary_blink_2();
                    this.instance.setTransform(224.3, -42.9, 1, 1, 0, 0, 0, 44.5, 52.5);

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).wait(35));

                    this.instance_1 = new lib.mary_straight_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.instance_2 = new lib.mary_head_1();
                    this.instance_2.setTransform(180.4, -96.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 34).wait(1));

                    this.instance_3 = new lib.mary_body_1();
                    this.instance_3.setTransform(209.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 209.8, y: -7.3 } }] }).to({ state: [{ t: this.instance_3, p: { rotation: 4.8, x: 210.1, y: -8.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 4.8, x: 209.7, y: -8.9 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 4.8, x: 210.1, y: -8.9 } }] }, 14).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 209.8, y: -7.3 } }] }, 2).wait(15));

                    this.instance_4 = new lib.mary_skirt_1();
                    this.instance_4.setTransform(201.6, 14.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { x: 201.6, rotation: 0, y: 14.2 } }] }).to({ state: [{ t: this.instance_4, p: { x: 199.9, rotation: 0, y: 14.2 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 199.2, rotation: 0, y: 14.2 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 199.9, rotation: 0, y: 14.2 } }] }, 14).to({ state: [{ t: this.instance_4, p: { x: 201.6, rotation: 0, y: 14.2 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 201.4, rotation: -2, y: 15.1 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 201.5, rotation: -0.9, y: 14.6 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 201.6, rotation: 0, y: 14.2 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 201.6, rotation: 0, y: 14.2 } }] }, 8).wait(1));

                    this.instance_5 = new lib.mary_wings01_1();
                    this.instance_5.setTransform(193.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5, p: { rotation: 0, x: 193.6, y: -25.4 } }] }).to({ state: [{ t: this.instance_5, p: { rotation: 1.8, x: 193.5, y: -26.4 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 1.8, x: 193.2, y: -26.4 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 1.8, x: 193.2, y: -26.4 } }] }, 14).to({ state: [{ t: this.instance_5, p: { rotation: 0, x: 193.6, y: -25.4 } }] }, 2).to({ state: [{ t: this.instance_5, p: { rotation: 0, x: 193.6, y: -25.4 } }] }, 14).wait(1));

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAVBHIgCiPAgRBJIgDiR");
                    this.shape_5.setTransform(241.3, -98.8);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAC/IgEjGQgChpA8gKQAsgJgJA5AgpC/IgJlFQgCg+glAH");
                    this.shape_6.setTransform(243.3, -125.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] }).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] }, 34).wait(1));

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADuF+IiIhcIAEAaIC0BqAkdG/IC8hkQgLl9gMl+AgMm+IByLg");
                    this.shape_7.setTransform(230.6, 93.1);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkEHMIC8hkQgDiAgSj9QgQj/gEh/AgKnKQBeDmAiB0QAFAPgDCQQgCCOAEAHIA/CLIBMBBAB6DEIAEAaIA7Bx");
                    this.shape_8.setTransform(228.1, 91.9);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AApnKQAhBOBCB3QA4BmAMAmQgDBFhcBLQhbBAABABIA+CLIAXBdAAXBYIADAaIA7BxAjPHMIC8hkQgvqmgDhV");
                    this.shape_9.setTransform(222.8, 91.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgjBFIAjB3IgniRgAAXnKQAMAcBfCNQBcCLADALQgCAukGCIAAAC8IAaBXAjhHMIC8hkQgvqmgDhV");
                    this.shape_10.setTransform(224.6, 91.9);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AApnKQBuDhA4BwQABAFhiBjQhkBjgfAYIAlCRIAcBXAgVBqIAEAaIAhB3AjPHMIC8hkQgvqmgDhV");
                    this.shape_11.setTransform(222.8, 91.9);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABAnKQAWA5ArCTQAkCCAUAnQikDlgVAQIA5CRIAcBXAAACgIAEAaIA1B3Ai4HMIC6hkQguqmgChV");
                    this.shape_12.setTransform(220.5, 91.9);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAQD7Ighh3IgEgaIAlCRIAcBXAjPHMIC8hkQgvqmgDhVAApnKQBuDhA4BwQABAFhiBjQhkBjgfAY");
                    this.shape_13.setTransform(222.8, 91.9);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgKnKQBeDmAiB0QAFAPgDCQQgCCOAEAHIA/CLIBMBBAkEHMIC8hkQgDiAgSj9QgQj/gEh/AB6DEIAEAaIA7Bx");
                    this.shape_14.setTransform(228.1, 91.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_7 }] }).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 14).wait(1));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(35));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.mary_shuffle2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABOlKIAjD9IAjFKQAHA0AhASAiQD2IgNgoIAAABQhHBpBgAaACUD9QgSA5ASAcAhXlRIhGIg");
                    this.shape.setTransform(225.8, 35.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADfD9QghgSgHg0QgTA5ATAcAArlKQAEAcAMBzQAIBOAJAuQAaCABRB2AizD2IgNgoIAAABQhHBpBgAaAh6lRIhGIg");
                    this.shape_1.setTransform(229.3, 35.4);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEMBxQgNgHgIgVQgQgkgDgGQgTA5ATAcAAAlKQABATAeDuQACAPBYAlQBcAmAPAaAjgD2IgNgoIAAABQhHBpBgAaAinlRIhGIg");
                    this.shape_2.setTransform(233.8, 35.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEshlQhIAAgCgEQAFAWAZAMQAdAOAEAGADihpQgGgKhlAXQhkAXAAgEQgxj0gCgNAj/D2IgNgoIgBABQhHBpBgAaAjHlRIhGIg");
                    this.shape_3.setTransform(237, 35.4);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEnkXQgdAAgZALQgSAMgBgCQADAPBFATAgblKQBIC+AOBDQChi7ACACAj7D2IgNgoIAAABQhHBpBgAaAjDlRIhFIg");
                    this.shape_4.setTransform(236.6, 35.4);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEclUQgdAAgZAMQgSALgBgBQADAOBKATAgUlHQAYBCAvBZQAmBIAEAVQA1hFBBiqAj0D5IgNgoIAAAAQhHBpBgAbAi8lPIhFIg");
                    this.shape_5.setTransform(235.9, 35.1);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUkwQARAsByDMQAVgbAahVQAoiCANghQABACBIgiAj0EQIgNgoIAAAAQhHBpBgAbAi8k4IhFIgAEgkvQhKgOgDgO");
                    this.shape_6.setTransform(235.9, 32.8);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUkpQAFAMAtBIQA8BaAqBKQAOgSBBkPQABACBIgiAj0EXIgNgoIAAAAQhHBpBgAbAi8kxIhFIgAEgk2QhKgOgDgO");
                    this.shape_7.setTransform(235.9, 32.1);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUlHQAYBCAvBZQAmBIAEAVQA1hFBBiqQABABASgLQAZgMAdAAADTk+QADAOBKATAj0D5IgNgoIAAAAQhHBpBgAbAi8lPIhFIg");
                    this.shape_8.setTransform(235.9, 35.1);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUlKQARAtBZDLQBNhiAwh/QAAACATgMQAagLAcAAADTkzQADAPBKATAj0D2IgNgoIAAABQhHBpBgAaAi8lRIhFIg");
                    this.shape_9.setTransform(235.9, 35.4);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUkwQAJAYBABvQBABrABAGQAUgaAYhWQAgh3ARgsQABACBIgiAj0EQIgNgoIAAAAQhHBpBgAbAi8k4IhFIgAEgkvQhKgOgDgO");
                    this.shape_10.setTransform(235.9, 32.8);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgUkpQALAdCGDbQAOgSBIkPQABACBIgiAj0EXIgNgoIAAAAQhHBpBgAbAi8kxIhFIgAEgk2QhKgOgDgO");
                    this.shape_11.setTransform(235.9, 32.1);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEaksQgdAAgSAWQgMAWgBgCQACAJAjgFQAjgGABABAgblKQBJC+AOBDQChi7ABACAj6D2IgNgoIgBABQhHBpBgAaAjClRIhGIg");
                    this.shape_12.setTransform(236.5, 35.4);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEcirQgLAUgYAZQgUAWgEAAQAdAOAvgfADhhoQAAAAAAgBQgPgIhcAVQhkAXgBgEQgxj0gBgNAkBD2IgNgoIAAABQhHBpBgAaAjJlRIhFIg");
                    this.shape_13.setTransform(237.2, 35.4);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEeADQgcAVgPAKQgcASgFgJQgHAWAkAFQArAGAEAHAgSlKQADATAcDuQACAPBYAlQBcAmAPAaAjxD2IgNgoIgBABQhHBpBgAaAi5lRIhGIg");
                    this.shape_14.setTransform(235.6, 35.4);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADtDaQgBAAgngJQgZgFgDgVQgIAYANAWQAHANAQATAAdlKQAEAcAMBzQAIBOAJAuQAaCABRB2AjBD2IgNgoIAAABQhHBpBgAaAiIlRIhGIg");
                    this.shape_15.setTransform(230.7, 35.4);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABTg7IASB+AhThCIgRCF");
                    this.shape_16.setTransform(225.4, 8.3);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABxkOIASB9IAAFLQAHA0AhASAh+CyIgNgoIAAABQhHBpBfAaACDC6QgTA4ATAdAhXkOIg0GZ");
                    this.shape_17.setTransform(224.1, 42.2);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABnkOIARB9IAVFLQAHA0AhASAiJCyIgNgoIAAABQhHBpBgAaACNC6QgTA4ATAdAhikOIg0GZ");
                    this.shape_18.setTransform(225.1, 42.2);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABgkOIARB9IAjFLQAHAzAhATAiQCyIgNgoIAAABQhHBpBgAaACUC6QgSA4ASAdAhpkOIg0GZ");
                    this.shape_19.setTransform(225.8, 42.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_18 }, { t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_19 }, { t: this.shape_16 }] }, 2).wait(2));

                    this.instance = new lib.mary_blink_2();
                    this.instance.setTransform(224.3, -42.9, 1, 1, 0, 0, 0, 44.5, 52.5);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).wait(46));

                    this.instance_1 = new lib.mary_straight_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.instance_2 = new lib.mary_head_1();
                    this.instance_2.setTransform(180.4, -96.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }).wait(46));

                    this.instance_3 = new lib.mary_body_1();
                    this.instance_3.setTransform(209.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).wait(46));

                    this.instance_4 = new lib.mary_skirt_1();
                    this.instance_4.setTransform(201.6, 14.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(46));

                    this.instance_5 = new lib.mary_wings01_1();
                    this.instance_5.setTransform(193.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(46));

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgRBJIgDiRAAVBHIgCiP");
                    this.shape_20.setTransform(241.3, -98.8);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAC/IgEjGQgChpA8gKQAsgJgJA5AgpC/IgJlFQgCg+glAH");
                    this.shape_21.setTransform(243.3, -125.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_21 }, { t: this.shape_20 }] }).wait(46));

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADuF+IiIhcIAEAaIC0BqAkdG/IC8hkQgLl9gMl+AgMm+IByLg");
                    this.shape_22.setTransform(230.6, 93.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_22 }] }).wait(46));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(46));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.mary_shuffle1 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABTg7IASB+AhThCIgRCF");
                    this.shape.setTransform(225.4, 8.3);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABgkOIARB9IAjFLQAHAzAhATAiQCyIgNgoIAAABQhHBpBgAaACUC6QgSA4ASAdAhpkOIg0GZ");
                    this.shape_1.setTransform(225.8, 42.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(24));

                    this.instance = new lib.mary_blink_2();
                    this.instance.setTransform(179.8, -95.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).wait(24));

                    this.instance_1 = new lib.mary_straight_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.instance_2 = new lib.mary_head_1();
                    this.instance_2.setTransform(180.4, -96.1);

                    this.instance_3 = new lib.mary_blink_1();
                    this.instance_3.setTransform(180.4, -96.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance_3 }] }, 6).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 5).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance_3 }] }, 3).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 2).wait(8));

                    this.instance_4 = new lib.mary_body_1();
                    this.instance_4.setTransform(209.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(24));

                    this.instance_5 = new lib.mary_skirt_1();
                    this.instance_5.setTransform(201.6, 14.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(24));

                    this.instance_6 = new lib.mary_wings01_1();
                    this.instance_6.setTransform(193.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(24));

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAVBHIgCiPAgRBJIgDiR");
                    this.shape_2.setTransform(241.3, -98.8);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAC/IgEjGQgChpA8gKQAsgJgJA5AgpC/IgJlFQgCg+glAH");
                    this.shape_3.setTransform(243.3, -125.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }).wait(24));

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADuF+IiIhcIAEAaIC0BqAkdG/IC8hkQgLl9gMl+AgMm+IByLg");
                    this.shape_4.setTransform(230.6, 93.1);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADfF+IiIhcIAEAaIC0BqAkOG/IC8hkQgLl9gMl+AABm+IBWLg");
                    this.shape_5.setTransform(229.1, 93.1);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABhFFIBhBWIhlhwgAjzG9IC8hkQgLl9gMl+ADCGbIAyAnAAfnAIA+Lr");
                    this.shape_6.setTransform(226.4, 93.4);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABtFRIBPBWIhThwgAjhGxIC8hkQgLl9gMl+AC8GnIAmAnAAxnMIA4MD");
                    this.shape_7.setTransform(224.6, 94.6);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACRFgIAxBWIg1hwgAjnGiIC8hkQgLl9gMl+ADCG2IAmAnAArnbIBiMh");
                    this.shape_8.setTransform(225.2, 96.1);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACIFjIBVBWIhZhwgAkCGfIC8hkQgLl9gMl+ADdG5IAmAnAAQneIB0Mn");
                    this.shape_9.setTransform(227.9, 96.4);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkgGnIC8hkQgMl9gLl+AgNnWICbMzIBZBUIA6AmADnGxIhVg6IgEga");
                    this.shape_10.setTransform(230.9, 95.5);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ak4GwIC8hkQgMl9gLl+AglnNICnMhIB9BUIA6AmACCFUIAEAZIB5A7");
                    this.shape_11.setTransform(233.3, 94.6);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlKG7IC8hkQgMl9gLl+AEbGaIiWhCIALAaIC7BRAg6nCIC/Ma");
                    this.shape_12.setTransform(235.1, 93.5);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AlEG/IC8hkQgLl9gMl+AEVGKIiUhQIAEAaIDABeAgzm+IC0L4");
                    this.shape_13.setTransform(234.5, 93.1);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AksG/IC8hkQgLl9gMl+AD9F+IiIhcIAEAaIC0BqAgbm+ICQLg");
                    this.shape_14.setTransform(232.1, 93.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_4 }] }).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).wait(2));

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_7.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7 }] }).wait(24));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.mary_right = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(105));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABOlKIAjD9IAjFKQAHA0AhASAiQD2IgNgnQhHBpBgAaACUD9QgSA5ASAcAhXlRIhGIg");
                    this.shape.setTransform(225.8, 35.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AH7gXIAAABIAAgBIAAAAQAsgngCgiAH7gXQAUgwgUggABwhhICiDPIDpiFAgzhtQhSBthTBqIkThKQAqh2hkgBAoCgBIAXAh");
                    this.shape_1.setTransform(222.3, 12.3);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Am+kPQgBAvAAAWQhogOBpg3QABhAAIgPAidFTIkiodAH0kjQghAtgRAmQgOAhgPAUIAAAAQB+AmhhhbAAgFfIGFn6");
                    this.shape_2.setTransform(235.5, -34.9);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAXhCIAABCIAABDIggAAQgmgwBGgT");
                    this.shape_3.setTransform(179.1, -45.8);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhxF/Ij6hnIh7khAGhkyIAbhMQBiAnh9AlgAA/F2IFiqo");
                    this.shape_4.setTransform(230.2, -38);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AnSCOQAagVAMAcQgiASAMAdIAiAAIgMgvAGTlzIAQhOQBnAZh3A1gACUFhID/rUAmgDEIBxD+IEVhB");
                    this.shape_5.setTransform(219.7, -37);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADtpcQBqgDhlBTgAC3DxIA7r9AAdEbIAAFCIkYjXIANgaQhFgfAWA5IAiAA");
                    this.shape_6.setTransform(214, -26.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 18).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] }, 20).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 2).wait(63));

                    this.instance = new lib.mary_straight_1();
                    this.instance.setTransform(180.4, -96.1);

                    this.instance_1 = new lib.mary_blink_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.instance_2 = new lib.mary_head_1();
                    this.instance_2.setTransform(180.4, -96.1);

                    this.instance_3 = new lib.mary_smile_1();
                    this.instance_3.setTransform(180.4, -96.1);

                    this.instance_4 = new lib.mary_yes();
                    this.instance_4.setTransform(153.4, -78.5, 0.999, 0.999, -16.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_1, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 180.4, y: -96.1 } }, { t: this.instance }] }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }, { t: this.instance }] }, 14).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }] }, 3).to({ state: [{ t: this.instance_2, p: { rotation: 4.8, x: 190.5, y: -99.4, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 4.8, x: 190.5, y: -99.4, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.7, x: 196.9, y: -100.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.7, x: 196.9, y: -100.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -5.7, x: 173.4, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: -5.7, x: 173.4, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 20).to({ state: [{ t: this.instance_2, p: { rotation: -9.3, x: 166.2, y: -87.3, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: -9.3, x: 166.2, y: -87.3, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -16.6, x: 156.7, y: -79.2, scaleX: 0.998, scaleY: 0.998 } }, { t: this.instance_3, p: { rotation: -16.6, x: 156.7, y: -79.2, scaleX: 0.998, scaleY: 0.998 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: -16.1, x: 153.3, y: -79.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: -16.2, x: 153, y: -79.5 } }, { t: this.instance_4 }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: -16.1, x: 153.3, y: -79.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: -16.2, x: 153, y: -79.5 } }] }, 4).to({ state: [{ t: this.instance_2, p: { rotation: -16.1, x: 153.3, y: -79.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: -16.2, x: 153, y: -79.5 } }, { t: this.instance_4 }] }, 8).to({ state: [{ t: this.instance_2, p: { rotation: -16.1, x: 153.3, y: -79.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: -16.1, x: 153.3, y: -79.5, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_1, p: { scaleX: 0.999, scaleY: 0.999, rotation: -16.2, x: 153, y: -79.5 } }] }, 5).wait(46));

                    this.instance_5 = new lib.mary_body_1();
                    this.instance_5.setTransform(209.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5, p: { rotation: 0, x: 209.8, y: -7.3, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_5, p: { rotation: 4.8, x: 212.4, y: -8.4, scaleX: 1, scaleY: 1 } }] }, 18).to({ state: [{ t: this.instance_5, p: { rotation: 7.7, x: 214.1, y: -9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_5, p: { rotation: 2.7, x: 211.4, y: -8, scaleX: 0.999, scaleY: 0.999 } }] }, 20).to({ state: [{ t: this.instance_5, p: { rotation: -0.8, x: 209.3, y: -7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_5, p: { rotation: -7.6, x: 205.7, y: -4.9, scaleX: 1, scaleY: 1 } }] }, 1).wait(65));

                    this.instance_6 = new lib.mary_skirt_1();
                    this.instance_6.setTransform(201.6, 14.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 201.6, y: 14.2 } }] }).to({ state: [{ t: this.instance_6, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 201.6, y: 14.2 } }] }, 18).to({ state: [{ t: this.instance_6, p: { scaleX: 1, scaleY: 1, rotation: 0, x: 201.6, y: 14.2 } }] }, 1).to({ state: [{ t: this.instance_6, p: { scaleX: 0.999, scaleY: 0.999, rotation: -1.8, x: 201.4, y: 15 } }] }, 20).to({ state: [{ t: this.instance_6, p: { scaleX: 0.999, scaleY: 0.999, rotation: -3.4, x: 201.2, y: 15.7 } }] }, 1).to({ state: [{ t: this.instance_6, p: { scaleX: 1, scaleY: 1, rotation: -7.4, x: 200.6, y: 17.4 } }] }, 1).wait(65));

                    this.instance_7 = new lib.mary_wings01_1();
                    this.instance_7.setTransform(193.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7, p: { rotation: 0, x: 193.6, y: -25.4 } }] }).to({ state: [{ t: this.instance_7, p: { rotation: 4.8, x: 197.8, y: -27.8 } }] }, 18).to({ state: [{ t: this.instance_7, p: { rotation: 7.7, x: 200.5, y: -29 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: 2, x: 195.5, y: -26.5 } }] }, 20).to({ state: [{ t: this.instance_7, p: { rotation: 0, x: 193.6, y: -25.4 } }] }, 1).to({ state: [{ t: this.instance_7, p: { rotation: -7.2, x: 187.5, y: -20.9 } }] }, 1).wait(65));

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AABEGIgFlXQgChoA8gLQAsgJgJA5AglEJIgNnZQgCg+glAH");
                    this.shape_7.setTransform(243.3, -117.9);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAUESQAmitgiinQgXhzAbgmQAagmAuAdAgSERQA0lNiFjV");
                    this.shape_8.setTransform(250.9, -117.1);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABbkBQAkBXgMBSIgzFaAAYD/QASkggmhoQgkhphVgF");
                    this.shape_9.setTransform(252.3, -113.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag6EFQC1jvgcjlAhiECQCUkohYje");
                    this.shape_10.setTransform(264.7, -114.1);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhnEGQAsjsAGjqQAHg+ARAHAhAEJQBFiWgOibQgMh3A0gEQA3gEASBK");
                    this.shape_11.setTransform(265.2, -114.5);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhcEIIAynWQAHg9gmABAg0ELIAnlVQAMhoA9gCQAtgDgRA3");
                    this.shape_12.setTransform(264.1, -114.8);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAERIgVlWQgKhuAvgTQAwgTAhAgAgoEVIggnXQgEg+gUgU");
                    this.shape_13.setTransform(237.6, -115.9);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgWEVQg0jvgRiSQgQiVAxgTAAPEOQgsi8AIiaQAEhlAggQQAjgRAuAA");
                    this.shape_14.setTransform(228.4, -116.3);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAfEMQhpjfgViNQgEgbgBgWQgDhkA8gWABED+QhMiggXh6QgOhLALgqQAHgbAQgNQApgiBHAB");
                    this.shape_15.setTransform(209.5, -114.2);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABREEQh3jKgxiGQgyiJAhguAB2D2Qhcidgzh9Qg0iAAzgnQAwgnA5AW");
                    this.shape_16.setTransform(204.5, -113.3);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACBERQiDjogfiKQgeiLhmBoACmEDQhGijg2iiQgshzgBgdQgBgdgOgh");
                    this.shape_17.setTransform(199.7, -114.7);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABsECQhsj/gmiAQgoiDhCAaACRD0QhGijg2ihQgaiEASggQATggArAr");
                    this.shape_18.setTransform(201.8, -113.2);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABUD3IiWm/QgUg7giARAB5DpIhslGQgfhjA2gcQAngVAJA4");
                    this.shape_19.setTransform(204.2, -112);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_7 }] }).to({ state: [{ t: this.shape_8 }] }, 18).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 14).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).wait(57));

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQAAgTgBgTQgLlqgLlrADuF+IiIhcIAEAaIC0BqAgMm+IByLg");
                    this.shape_20.setTransform(230.6, 93.1);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQAAgTgBgTQgLlqgLlrAgMm+IByLgIAEAaIC0BqADuF+IiIhc");
                    this.shape_21.setTransform(230.6, 93.1);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG4IC8hkIgPsGIBwgEIBmLQIAEAaIC0BrABmEaICIBc");
                    this.shape_22.setTransform(230.6, 93.9);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdHCIC8hkIgFsZIBtgGIBfLmIAEAaIC0BqABmElICIBc");
                    this.shape_23.setTransform(230.6, 92.8);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdHOIC8hkQAAgTgBgTQgLlqAlmZIBsgOIBCL+IAEAaIC0BqABmExICIBc");
                    this.shape_24.setTransform(230.6, 91.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_20 }] }).to({ state: [{ t: this.shape_21 }] }, 18).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 20).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).wait(65));

                    this.instance_8 = new lib.shadow();
                    this.instance_8.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_8.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_8 }] }).wait(106));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.mary_move2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABTg7IASB+AhThCIgRCF");
                    this.shape.setTransform(225.4, 8.3);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABgkOIARB9IAjFLQgSA4ASAdAhokOIg1GZIAAAAQhHBpBgAbAiPCzIgNgoQgBAAAAAAACUC6QAHA0AhAS");
                    this.shape_1.setTransform(225.8, 42.2);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABZlKIA7JHQgSA5ASAcAhOlRIhPIgQhHBpBgAaAiQD2IgNgoIAAABAC8FDQghgSgHg0");
                    this.shape_2.setTransform(225.8, 35.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABvlKIAlJHQgTA5ATAcAgvlRIhuIgQhHBpBgAaAiPD2IgNgoIgBABAC8FDQghgSgHg0");
                    this.shape_3.setTransform(225.7, 35.4);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABrlKIAfJHQgTA5ATAcAg4lRIhaIgQhIBpBhAaAiFD2IgNgoIAAABACyFDQghgSgHg0");
                    this.shape_4.setTransform(227.8, 35.4);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACyFDQghgSgHg0Ig0pHAhNlRIhFIgQhIBpBhAaAiFD2IgNgoIAAABACKD9QgTA5ATAc");
                    this.shape_5.setTransform(229.9, 35.4);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA6lKIBVJHQgTA5ATAcAC3FDQghgSgHg0AhklRIg0IgQhHBpBgAaAiKD2IgNgoIgBAB");
                    this.shape_6.setTransform(230.6, 35.4);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA0lKIBbJHQgTA5ATAcAhelRIg6IgQhHBpBgAaAiKD2IgNgoIgBABAC3FDQghgSgHg0");
                    this.shape_7.setTransform(228.5, 35.4);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA6lKIBVJHQgTA5ATAcAhblRIg9IgQhHBpBgAaAiKD2IgNgoIgBABAC3FDQghgSgHg0");
                    this.shape_8.setTransform(226.4, 35.4);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABClKIBSJHQgTA5ATAcAC8FDQghgSgHg0AhUlRIhJIgQhHBpBgAaAiPD2IgNgoIgBAB");
                    this.shape_9.setTransform(223.7, 35.8);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhHlRIhLIgQhIBpBhAaAiFD2IgNgoIAAABABZlKIAxJHQgTA5ATAcACyFDQghgSgHg0");
                    this.shape_10.setTransform(220.6, 35.4);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiKDsIgNgoIgBAAIBioVABhlKIAuJHQgTA5ATAcAC3FDQghgSgHg0AiYDEQhHBpBgAb");
                    this.shape_11.setTransform(218, 35.4);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiKDsIgNgoIgBAAIB3oVAB2lKIAZJHQgTA5ATAcAC3FDQghgSgHg0AiYDEQhHBqBgAa");
                    this.shape_12.setTransform(215.9, 35.4);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiPD2IgNgoIgBABIBrogABulKIAmJHQgTA5ATAcAC8FDQghgSgHg0AidDPQhHBpBgAa");
                    this.shape_13.setTransform(218.5, 35.4);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABLlKIBJJHQgTA5ATAcAC8FDQghgSgHg0AhUlRIhJIgQhHBpBgAaAiPD2IgNgoIgBAB");
                    this.shape_14.setTransform(223.7, 35.4);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABZlKIAjD9IAYFKQgTA5ATAcAhNlRIhQIgQhHBpBgAaAiPD2IgNgoIgBABACUD9QAHA0AhAS");
                    this.shape_15.setTransform(224.8, 35.4);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABgkOIARB9IAjFLQgSA4ASAdAhpkOIg0GZQhHBpBgAaAiQCyIgNgoIAAABACUC6QAHAzAhAT");
                    this.shape_16.setTransform(225.8, 42.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 3).to({ state: [{ t: this.shape_6 }] }, 4).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 3).to({ state: [{ t: this.shape_13 }] }, 4).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }, { t: this.shape }] }, 2).wait(5));

                    this.instance = new lib.mary_straight_1();
                    this.instance.setTransform(180.4, -96.1);

                    this.instance_1 = new lib.mary_head_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1, p: { rotation: 0, y: -96.1, x: 180.4 } }, { t: this.instance, p: { rotation: 0, y: -96.1, x: 180.4 } }] }).to({ state: [{ t: this.instance_1, p: { rotation: -0.7, y: -95.7, x: 180.4 } }, { t: this.instance, p: { rotation: -0.7, y: -95.7, x: 180.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -1.7, y: -94.6, x: 180.5 } }, { t: this.instance, p: { rotation: -1.7, y: -94.6, x: 180.5 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -2.7, y: -93.7, x: 180.1 } }, { t: this.instance, p: { rotation: -2.7, y: -93.7, x: 180.1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: -1.7, y: -94.6, x: 180.5 } }, { t: this.instance, p: { rotation: -1.7, y: -94.6, x: 180.5 } }] }, 7).to({ state: [{ t: this.instance_1, p: { rotation: -0.7, y: -95.7, x: 180.4 } }, { t: this.instance, p: { rotation: -0.7, y: -95.7, x: 180.4 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0.3, y: -96.8, x: 180.9 } }, { t: this.instance, p: { rotation: 0.3, y: -96.8, x: 180.9 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 1.9, y: -98, x: 181.8 } }, { t: this.instance, p: { rotation: 1.9, y: -98, x: 181.8 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 2.6, y: -98.8, x: 182.6 } }, { t: this.instance, p: { rotation: 2.6, y: -98.8, x: 182.6 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 3.2, y: -98.9, x: 182.5 } }, { t: this.instance, p: { rotation: 3.2, y: -98.9, x: 182.5 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 2.3, y: -98.2, x: 182.1 } }, { t: this.instance, p: { rotation: 2.3, y: -98.2, x: 182.1 } }] }, 7).to({ state: [{ t: this.instance_1, p: { rotation: 0.8, y: -97.1, x: 180.7 } }, { t: this.instance, p: { rotation: 0.8, y: -97.1, x: 180.7 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, y: -96.1, x: 180.4 } }, { t: this.instance, p: { rotation: 0, y: -96.1, x: 180.4 } }] }, 2).wait(7));

                    this.instance_2 = new lib.mary_body_1();
                    this.instance_2.setTransform(209.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 209.8, y: -7.3, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_2, p: { rotation: -1.2, x: 210.3, y: -6.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: -3.2, x: 212.2, y: -6.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: -4.5, x: 213.9, y: -6, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: -3.2, x: 212.2, y: -6.3, scaleX: 1, scaleY: 1 } }] }, 7).to({ state: [{ t: this.instance_2, p: { rotation: -1.2, x: 210.3, y: -6.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 209, y: -7.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 2.3, x: 208, y: -7.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 4.1, x: 207.2, y: -8.4, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 5.6, x: 206.2, y: -8.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 4.1, x: 207.2, y: -8.4, scaleX: 1, scaleY: 1 } }] }, 7).to({ state: [{ t: this.instance_2, p: { rotation: 2.3, x: 208, y: -7.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: 209.8, y: -7.3, scaleX: 1, scaleY: 1 } }] }, 2).wait(7));

                    this.instance_3 = new lib.mary_skirt_1();
                    this.instance_3.setTransform(201.6, 14.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 201.6, y: 14.2, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_3, p: { rotation: 1, x: 203.5, y: 13.7, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 3.1, x: 206.9, y: 12.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 3.9, x: 209.7, y: 12.5, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 1.9, x: 209.4, y: 13.3, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -0.8, x: 209, y: 14.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -4.1, x: 206, y: 16, scaleX: 0.999, scaleY: 0.999 } }] }, 3).to({ state: [{ t: this.instance_3, p: { rotation: -5.4, x: 203.2, y: 16.5, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -6.1, x: 200.7, y: 16.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -6.1, x: 198.4, y: 16.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -6.1, x: 196.3, y: 16.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -4.3, x: 194.7, y: 16.1, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -0.9, x: 195, y: 14.6, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 2.6, x: 195.6, y: 13.1, scaleX: 0.998, scaleY: 0.998 } }] }, 3).to({ state: [{ t: this.instance_3, p: { rotation: 5.9, x: 198.5, y: 11.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 5.9, x: 200.4, y: 11.7, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 3.9, x: 202.7, y: 12.6, scaleX: 0.998, scaleY: 0.998 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 201.7, y: 14.2, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: -1.4, x: 201.4, y: 14.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_3, p: { rotation: 0, x: 201.6, y: 14.2, scaleX: 1, scaleY: 1 } }] }, 2).wait(1));

                    this.instance_4 = new lib.mary_wings01_1();
                    this.instance_4.setTransform(193.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { x: 193.6 } }] }).to({ state: [{ t: this.instance_4, p: { x: 194.5 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 196.3 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 198.6 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 196.8 } }] }, 7).to({ state: [{ t: this.instance_4, p: { x: 195 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 193.6 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 191.8 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 190.5 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 188.7 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 190 } }] }, 7).to({ state: [{ t: this.instance_4, p: { x: 191.4 } }] }, 2).to({ state: [{ t: this.instance_4, p: { x: 193.6 } }] }, 2).wait(7));

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAVBHIgCiPAgRBJIgDiR");
                    this.shape_17.setTransform(241.3, -98.8);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAC/IgEjGQgChoA8gLQAsgJgJA5AgpC/IgJlFQgCg+glAH");
                    this.shape_18.setTransform(243.3, -125.3);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AABEGIgFlXQgChoA8gLQAsgJgJA5AglEJIgNnZQgCg+glAH");
                    this.shape_19.setTransform(243.3, -117.9);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAHEGQgQjOAFiJQgChoA8gLQAsgIgJA4AgfEJQgLiTgFhNQgIiFAFh0QACg/gpAI");
                    this.shape_20.setTransform(242.7, -117.9);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AATEGQgNiEgFg5QgHhgACg6QgChoA8gLQAsgIgJA4AgTEJQgEg2gLhLQgMhKgBgVQgIiFAFh0QACg/gpAI");
                    this.shape_21.setTransform(241.5, -117.9);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAiEGQgJiXgDgmQgDgfgNg3QgIgwABgUQgChoA8gLQAsgIgJA4AgEEJQgIh8gBgFQgMhNgBgSQgCgmgPhaQgMhOACgrQACg/gpAI");
                    this.shape_22.setTransform(240, -117.9);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAcEGQgEikgCgZQgEgigMg0QgIgvABgVQgChoA8gLQAsgIgJA4AgKEJQgDh+AAgDQgMhRgBgOQgDgmgOhaQgMhOACgrQACg/gpAI");
                    this.shape_23.setTransform(240.6, -117.9);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAHEGQABisgBgRQAEg0gIgiQgDgXAAgtQAAhoA8gLQAsgIgJA4AgfEJIgDiBQgFghABgfQADgaAAgFQgGhigFgeQgMhOACgrQACg/gpAI");
                    this.shape_24.setTransform(242.7, -117.9);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgOEGQAJiygBgLQAEiLABgPQgChoA8gLQAsgIgJA4Ag2EJIgDiBQALgugCgxQgJiPAEhqQACg/gpAI");
                    this.shape_25.setTransform(245, -117.9);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgaEGQAJiygBgLQACg6AHgyQAIgpAAgFQgChoA8gLQAsgIgJA4AhCEJIgDiBQAJgfAFgQQAIgcgBgUQgJiUAEhlQACg/gpAI");
                    this.shape_26.setTransform(246.6, -117.9);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgjEGQAJiygBgLQACg8AHgwQAOgqAAgEQgChoA8gLQAsgIgJA4AhLEJIgDiBIAOgvQAIgbgBgVQgEg8AEhMQAGhPABgiQACg/gpAI");
                    this.shape_27.setTransform(248.3, -117.5);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhVEJIgDiBIASgvQAIgZgBgXQgBgRAGh3QAGhbABgWQACg+glAHABYiUQAJg4gsAIQg8ALACBoQAAACgNA+QgOBBgBAZQABAHgNC2");
                    this.shape_28.setTransform(249.6, -117);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhXEJIgEiBIATgvQAIgZgBgXQgBgRAGh3QAPhiAAgPQADg+glAHABaiUQAJg4gsAIQg8ALACBoQAAABgSA/QgNBBgBAZQAAAHgMC2");
                    this.shape_29.setTransform(250.1, -117);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABciUQAJg4gsAIQhFANACBmQAAABgWA/QgOBDAAAXQABAQABAjQAAA+gFBMAhZEJIgEiBQAWiWAEhRQAYhnABgKQACg+glAH");
                    this.shape_30.setTransform(250.3, -117);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABViUQAJg4gsAIQhKANADBmIgLBbQgKBhAEARQABA4gGBSAhTEJIgDiBQAJg+AChIQAAhGABgbQAhhqABgHQACg+glAH");
                    this.shape_31.setTransform(249.1, -117);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABViUQAJg4gsAIQhJANACBmIgLBbQgJBhADARQABAxgGBZAhTEJIgDiBQAIg8ADhKIABhhQAhhpABgIQACg+glAH");
                    this.shape_32.setTransform(247.9, -117);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABQiZQAJg4gsAIQhGANADBrQgKDBACAMQAAABAEA6QACAsgCAjAhCEJIgDiBQADgZgChqIgChkQAThAAFgxQADg+glAH");
                    this.shape_33.setTransform(246.2, -117);

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABQiWQAJg4gsAIQhBAMACBsQgICdAKAvQAAABADA7QADArgCAkAg0ELIgEiBQgBg8gChHIgChjQAFgRAKhgQADhDglAH");
                    this.shape_34.setTransform(244.8, -117.3);

                    this.shape_35 = new cjs.Shape();
                    this.shape_35.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgRBJIgDiRAAVBHIgCiP");
                    this.shape_35.setTransform(241.3, -98.8);

                    this.shape_36 = new cjs.Shape();
                    this.shape_36.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAC/IgEjGQgChpA8gKQAsgJgJA5AgpC/IgJlFQgCg+glAH");
                    this.shape_36.setTransform(243.3, -125.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_18 }, { t: this.shape_17 }] }).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 3).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 3).to({ state: [{ t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_31 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_34 }] }, 2).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }] }, 2).wait(3));

                    this.shape_37 = new cjs.Shape();
                    this.shape_37.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgMm+IByLgIAEAaIC0BqAkdG/IC8hkQgLl9gMl+ADuF+IiIhc");
                    this.shape_37.setTransform(230.6, 93.1);

                    this.shape_38 = new cjs.Shape();
                    this.shape_38.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgDh/ADj+QAEj/gEh/AAIm+IBeLgIAEAaIC0BqADuF+IiIhc");
                    this.shape_38.setTransform(230.6, 93.1);

                    this.shape_39 = new cjs.Shape();
                    this.shape_39.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgBgnAGh4QAHiFgBhZQAAhbAKiEQAKh5gBgmAAmm+IBALgIAEAaIC0BqADuF+IiIhc");
                    this.shape_39.setTransform(230.6, 93.1);

                    this.shape_40 = new cjs.Shape();
                    this.shape_40.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABEm+IAiLgIAEAaIC0BqAkdG/IC8hkQA+qggChbADuF+IiIhc");
                    this.shape_40.setTransform(230.6, 93.1);

                    this.shape_41 = new cjs.Shape();
                    this.shape_41.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgBgqAblTQAalTgBgrAAxm+IA1LgIAEAaIC0BqADuF+IiIhc");
                    this.shape_41.setTransform(230.6, 93.1);

                    this.shape_42 = new cjs.Shape();
                    this.shape_42.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAcm+IBKLgIAEAaIC0BqAkdG/IC8hkQAAgcAZrfADuF+IiIhc");
                    this.shape_42.setTransform(230.6, 93.1);

                    this.shape_43 = new cjs.Shape();
                    this.shape_43.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAHm+IBfLgIAEAaIC0BqAkdG/IC8hkQgakSAbnpADuF+IiIhc");
                    this.shape_43.setTransform(230.6, 93.1);

                    this.shape_44 = new cjs.Shape();
                    this.shape_44.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgTkcgCgsQgKjhALjSAgXm+IB9LgIAEAaIC0BqADuF+IiIhc");
                    this.shape_44.setTransform(230.6, 93.1);

                    this.shape_45 = new cjs.Shape();
                    this.shape_45.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgWkcgJh+QgOjaAHiHAghm+ICHLgIAEAaIC0BqADuF+IiIhc");
                    this.shape_45.setTransform(230.6, 93.1);

                    this.shape_46 = new cjs.Shape();
                    this.shape_46.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgLirgfk4QgVjYADhAAgsm+ICSLgIAEAaIC0BqADuF+IiIhc");
                    this.shape_46.setTransform(230.6, 93.1);

                    this.shape_47 = new cjs.Shape();
                    this.shape_47.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AkdG/IC8hkQgalkgJh/QgOjPAEhJAghm+ICHLgIAEAaIC0BqADuF+IiIhc");
                    this.shape_47.setTransform(230.6, 93.1);

                    this.shape_48 = new cjs.Shape();
                    this.shape_48.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgXm+IB9LgIAEAaIC0BqAkdG/IC8hkQgmozALjIADuF+IiIhc");
                    this.shape_48.setTransform(230.6, 93.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_37 }] }).to({ state: [{ t: this.shape_38 }] }, 2).to({ state: [{ t: this.shape_39 }] }, 2).to({ state: [{ t: this.shape_40 }] }, 2).to({ state: [{ t: this.shape_41 }] }, 7).to({ state: [{ t: this.shape_42 }] }, 2).to({ state: [{ t: this.shape_43 }] }, 2).to({ state: [{ t: this.shape_44 }] }, 2).to({ state: [{ t: this.shape_45 }] }, 2).to({ state: [{ t: this.shape_46 }] }, 2).to({ state: [{ t: this.shape_47 }] }, 7).to({ state: [{ t: this.shape_48 }] }, 2).to({ state: [{ t: this.shape_37 }] }, 2).wait(7));

                    this.instance_5 = new lib.shadow();
                    this.instance_5.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_5.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(41));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.mary_move1 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABTg7IASB+AhThCIgRCF");
                    this.shape.setTransform(225.4, 8.3);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABgkOIARB9IAjFLQAHAzAhATAiQCyIgNgoIAAABQhHBpBgAaACUC6QgSA4ASAdAhpkOIg0GZ");
                    this.shape_1.setTransform(225.8, 42.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(52));

                    this.instance = new lib.mary_straight_1();
                    this.instance.setTransform(180.4, -96.1);

                    this.instance_1 = new lib.mary_head_1();
                    this.instance_1.setTransform(180.4, -96.1);

                    this.instance_2 = new lib.mary_blink_1();
                    this.instance_2.setTransform(198.6, -104, 0.999, 0.999, 11.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_1, p: { rotation: 3.3, x: 185.7, y: -98.6, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 3.3, x: 185.7, y: -98.6, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 6, x: 190.1, y: -100.2, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 6, x: 190.1, y: -100.2, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 8.3, x: 194.2, y: -101.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 8.3, x: 194.2, y: -101.7, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_2 }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_2 }] }, 4).to({ state: [{ t: this.instance_1, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }] }, 3).to({ state: [{ t: this.instance_1, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_2 }] }, 6).to({ state: [{ t: this.instance_1, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 9.1, x: 195.5, y: -102.1, scaleX: 0.999, scaleY: 0.999 } }] }, 4).to({ state: [{ t: this.instance_1, p: { rotation: 8.3, x: 194.2, y: -101.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 8.3, x: 194.2, y: -101.7, scaleX: 0.999, scaleY: 0.999 } }] }, 10).to({ state: [{ t: this.instance_1, p: { rotation: 6, x: 190.1, y: -100.2, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 6, x: 190.1, y: -100.2, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 3.3, x: 185.7, y: -98.6, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 3.3, x: 185.7, y: -98.6, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_1, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: 180.4, y: -96.1, scaleX: 1, scaleY: 1 } }] }, 2).wait(11));

                    this.instance_3 = new lib.mary_body_1();
                    this.instance_3.setTransform(209.8, -7.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).wait(52));

                    this.instance_4 = new lib.mary_skirt_1();
                    this.instance_4.setTransform(201.6, 14.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(52));

                    this.instance_5 = new lib.mary_wings01_1();
                    this.instance_5.setTransform(193.6, -25.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(52));

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAVBHIgCiPAgRBJIgDiR");
                    this.shape_2.setTransform(241.3, -98.8);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAC/IgEjGQgChpA8gKQAsgJgJA5AgpC/IgJlFQgCg+glAH");
                    this.shape_3.setTransform(243.3, -125.3);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB2jdQADgOgRAFQgQAFgUATQg3A1ACBDIAIFXAgPEEQACj3gsi0QAAgfgVggQgVgggTAE");
                    this.shape_4.setTransform(244.9, -116.4);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABxkDQABgEgLAMQgLAPgLAVQghA/ADBDQATCrgMCsAASEFQABiEgNhXQgOhjgrhhQgBgQgZgoQgagogJAC");
                    this.shape_5.setTransform(245.6, -115.2);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABjkMIgOBOQgNBWABAcQAWDAgLCXAAsENQABiAgNhbQgJg8gihUQgbhBgTgeQgdgugMAD");
                    this.shape_6.setTransform(246.6, -115.6);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhgjdQALgCAOAHQAaALAPAkQAiBTALCFQAEA/gKCcAAxEIQA0jTgEk+");
                    this.shape_7.setTransform(251.1, -115);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgHD6QAWhdAMh1QAOh5AJgoQAPg6ALgXQAIgPAQgQQANgOACgHAhyj5QAnAKATAyQAQAsgEA2QAQA8gLBEQAEBDgOCX");
                    this.shape_8.setTransform(257.1, -113.9);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgxD/QASg/AJgiQARg9AFgwQASh/AFgaQAKhEAwgPQAZgIAXADAiAkDQBOgGgMCRQANAzgSBuQADAtgbCu");
                    this.shape_9.setTransform(261.3, -114.4);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhtkKQBEgFgNCaQgIBegMBHQABAOgPA/QgUBSgJA8AhLEGQAWhLAGgWQAahiACgMQAUh9ADgSQAIg6AOgOQADgDAigLQAQgFARALQAVAMABAb");
                    this.shape_10.setTransform(263.9, -115);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhJEGQAXhLAGgWQAahiABgMQAWh0ABgMQAEgeAOgZQAPgaAQgFQAhgLALAHQAPAJABAtAhNkKQAqAEADAiQACAYgLBXQgDAggWCFQABAPgPA+QghCDgBAL");
                    this.shape_11.setTransform(263.7, -115);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhTEGIAdhhQAahgABgOQAjh4ABgFQADgeAPgZQAOgaARgFQAlgNAJAGQAVANAAApAhKkKQAqAEADAiQABAKgNBlQgCAWghCPQABAQgPA9QghCFgBAJ");
                    this.shape_12.setTransform(262.9, -114.8);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACahbQgghNhEAxQgXARgVAcQgRAYgBAJQAAADgjBiQAAACgOAgQgPAmgLAmIgcBhAiZEQQABgIAhiGQAUhDgBgKQANg3AUg5IARg1QAag4gBgyQgCgygagD");
                    this.shape_13.setTransform(262.5, -115.3);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiAEGIAdhhQAOg6AwhSQAYgnAUgfQAAgEARgPQAVgTAWgLQBDghAkA9AgDkKQAPAChLDHQgFAPgTArQgPAigFAUQAAADgWBLQgXBagRA0");
                    this.shape_14.setTransform(260, -116);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AimEBQAehmAKgoQAIgrATg0QAUgxAFgTQATg1AOgbQAnhPA4gxACniNQhAANg+A9QgrArgUAlQgFAKgpBGQgXAngFAXIgdBh");
                    this.shape_15.setTransform(255.5, -115.4);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACIiqQgcAFgiAkQgHAGgzA9QgiArggBXQgUA2gJAmIgOBhAiHEGQAMgoADgvQADgwABgHQAli+AUgjQBLiCAfga");
                    this.shape_16.setTransform(252.3, -115.9);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABsiXQhQhKgoCoQg0DRAFB0AhjEPQgQhfASh/QACgNArjfQgBgVAXglQARgagMAC");
                    this.shape_17.setTransform(249.5, -118.5);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AABEGIgFlXQgChoA8gLQAsgJgJA5AglEJIgNnZQgCg+glAH");
                    this.shape_18.setTransform(243.3, -117.9);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAVEFQATiFgnjSQgBhoA9gMQAsgIgJA4AgREHQAIhlgQiGQgWibgLhPQgBg+gmAG");
                    this.shape_19.setTransform(241.3, -117.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 19).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).wait(1));

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADuF+IiIhcIAEAaIC0BqAkdG/IC8hkQgLl9gMl+AgMm+IByLg");
                    this.shape_20.setTransform(230.6, 93.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_20 }] }).wait(52));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(232.5, 133.9, 0.688, 1, 0, 0, 0, 69, 13.5);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(52));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(180.4, -144.5, 99.6, 291.9);

                (lib.james_mouthOnly = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_60 = function() {
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(60).call(this.frame_60));

                    this.instance = new lib.james_mouthG("synched", 0);
                    this.instance.setTransform(29, 36.5, 1, 1, 0, 0, 0, 29, 36.5);
                    this.instance._off = true;

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).wait(1).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 5).wait(6).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 3).wait(3).to({ startPosition: 0, _off: false }, 0).to({ _off: true }, 4).wait(3).to({ startPosition: 0, _off: false }, 0).wait(3));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);

                (lib.james_wrong = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(145));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGREyQA4gdgshPQgRApANALADRlwQDiD+gWE4IAAAAQBQA1g7BVAhDloQklCtgbGlIAAA7QANBXg5gMAmDElQgnBDgggk");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AG9FUQA4gcgshQIAAAAQBPA2g7BUAHEEcQgNgKASgqAnbFnQA5ANgNhYQBHjiBmjAQBljDBlghAmvEcQgmBEghglAHJDoQhGmQimjJ");
                    this.shape_1.setTransform(-241, 17.6);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIcFqIgWiMIAAAAIBXCGAHwEUIAWg2ApcE5IBngtIggBtAn1EMIG7p8AIGDeIkspW");
                    this.shape_2.setTransform(-240.7, 18.2);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIAFVIgHiEIABAAIBWCIAHfEFIAag0ApPFbIBHhQIgaByAoIELIGtqAAH6DRIlApN");
                    this.shape_3.setTransform(-237.5, 18.7);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIVFfIgciAIAAAAIBWB2AHjETIAWg0AhIlvIm6J2IhMBAAoIF3IAGhwAH5DfIkspV");
                    this.shape_4.setTransform(-239.4, 18.1);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIUFUIgkh8IAAAAIB0BYAHbEOIAVg2AhlluImsKAIhSAiApNF2IA8hkIAAAAACwl1IFAJN");
                    this.shape_5.setTransform(-236.5, 18);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIPFuQAMhMgSg8IAAAAQAzBBAMBJAH5EcIAQg2Ag4loIm6J2QgtAYgoAAAoaFkQA2gxgOglAIJDmIkspV");
                    this.shape_6.setTransform(-241, 17.4);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIIFOQA4gdgshPIAAAAQBQA1g7BVAIQEWQgNgLARgpAhAlkIm6J2QgnBDggglAomFcQA5ANgNhXAIUDiIlApN");
                    this.shape_7.setTransform(-240.1, 17);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhQAfICgg9");
                    this.shape_8.setTransform(-277.5, 16.8);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AKGDfQhhAjgehbIkBhXIirk6AI6CwQgIgPgrAGQBBA/AqguApqDpQA5ANgNhYQgnBEggglAmcBgIDilC");
                    this.shape_9.setTransform(-228, 4);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAAzIAAhlAAAgyIAAAA");
                    this.shape_10.setTransform(-267.2, 9.7);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AIKgzQgqAuhBg+QAfBYBhggAHSg6QgHgPgsAFQAAABAAAAAnRBFQghBRgqgnAnRBFQAAgBAAAAIAAAAQhDAngKgwAkFijIjMFOAAQiqICAFEIEPje");
                    this.shape_11.setTransform(-220.5, -2.2);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhHBMICPiX");
                    this.shape_12.setTransform(-256.6, 9);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEPi7QgRADgGAsIhIFxIhAlTAFRj4QAHBnhfAEQBNgtghg1Ai+BhQgDAFgCAGQBCgoALAvAi+BhQAdhFApAkAikhmIisFf");
                    this.shape_13.setTransform(-230.1, -8.3);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AB3CHIkmB0ACgB6IAIAlACtC5IgFgaACtC5IADAUABZj6IBHF0");
                    this.shape_14.setTransform(-242.8, -6);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAKkvQAPBRAhAmIgIh6AA6i4QAegyAAhTACBC9QAUgCAKAIIAxkFACIDiQgMgPgkgJAjPE+ICKl4ACIDiQAKALgFAOACBC9QgRACgYALACREPIAOhMQALAJABAVACHEGQAEgGACgF");
                    this.shape_15.setTransform(-239.7, -12.7);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACBktIgxBwQAygfAmhJABck8QgYBOAMAxIA2F5IAGAqQAEAIgCAKIADAWIAOhLQgJgIgQABQgDAAgCAAQgRACgYALQAkAKAMAOQACACACADACOD4QAAABgBACQgCAFgEAGACrDgQgBgVgLgIIAxkFABYDJIknB0ICKl4");
                    this.shape_16.setTransform(-239.7, -12.6);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhNhCIiKF4IEnh0QAYgKARgDQAEAAAEAAIgjl6QA6gJA/g0ACck1Qg1A+gKAyIBahUABQDCQAkAKAMAOQAEAEABAFIgEguQAOAAAIAHIAxkFAB/D/QAEgGACgFQABgDABgCQAAgGgCgGACjDZQgBgVgLgIIgOBMIgCgZ");
                    this.shape_17.setTransform(-238.9, -11.9);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAKkvQAPBRAgAnIAAgBIgHh6AA5i4IAAAAQAegzABhRAhFg7IiKF4IEnh0QAkAKAMAOIgHglQAUgCAKAJIAxkFACBC8QgRADgYAKACrDgQgBgVgLgIIgOBMIgEgUQgCAFgEAGACND7QAFgOgKgMgACBC8IhIl0");
                    this.shape_18.setTransform(-239.7, -12.6);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA5jMIABAAIgBAAgAhhkEIBjBGIAAAAQgTg3hBgzAh3jiQBJAmAwgCIB1FoQAFgCAFAAQAUgCAKAIIAxkFAhFhPIiKF4IEnh0QARgIAOgDIAJAbQAFAEADAEQAKALgFAOQAAACgBACIAFAQIAOhMQALAJABAVACHDxQADgDACgEIgMglQgOgJgagH");
                    this.shape_19.setTransform(-239.7, -10.6);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA5i3IAAgBIABABgAAykyIAHB6IABAAQAdgzABhSAAKkvQAPBRAgAmAhFg6IiKF4IEnh1QAYgKARgCQAUgDAKAJIAxkFABYDJQAkAKAMAPIgHglIhIl0ACrDhQgBgVgLgJIgOBMIgEgUIgFgZQAKALgFAOQgCAFgEAG");
                    this.shape_20.setTransform(-239.7, -12.7);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhFhCIiKF5IEmh1QAZgKARgCQADgBADAAIgvl5QAHgxAzhBACvkaIhXBWQA6gLA+g1AA5i/IAAAAIAAAAgABXDCQAlAKAMAPQADADABADIgFgsQAPAAAJAHIAwkFACHD/QAEgGACgFQABgCAAgCQABgIgDgHACrDZQgBgUgLgJIgOBLIgDgX");
                    this.shape_21.setTransform(-239.6, -12);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACvkUIhXBWQA6gLA+g2ABzk7QghBLAFAyIAwF4QAPAAAJAHIAwkFAA5i5IAAAAIAAAAgACHEEQAEgFACgGQABgBAAgCQACgJgEgHQgCgDgCgDQgMgPglgJIkmB0ICKl4ABXDIQAZgLARgCQADAAADgBIAFAsACrDfQgBgVgLgJIgOBMIgDgX");
                    this.shape_22.setTransform(-239.6, -12.5);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACtkTIhXBXQA6gLA+g2AA6i4IgBAAIAAAAgABPk8QgMBRATAvIAxF4QgDAAgDAAQgRADgYAKIknB0ICKl4ACHC8IAFArQgCgDgCgDQgMgOgkgKACMDnQAEAIgCAJQAAABgBACQgCAFgEAGACHC8QAPgBAJAIQALAIABAVACOD4IADAXIAOhMIAxkF");
                    this.shape_23.setTransform(-239.7, -12.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 16).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] }, 16).to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_15 }, { t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 9).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 9).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_20 }] }, 9).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 5).to({ state: [{ t: this.shape_23 }] }, 2).wait(56));

                    this.instance = new lib.james_blink();
                    this.instance.setTransform(-263.9, -89.8);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_glasses();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.instance_3 = new lib.james_nakedhead();
                    this.instance_3.setTransform(-263.9, -89.8);

                    this.instance_4 = new lib.james_oh();
                    this.instance_4.setTransform(-263.9, -89.8);

                    this.instance_5 = new lib.james_frown();
                    this.instance_5.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }, { t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }] }, 14).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.114, scaleY: 1.114, x: -267.2, y: -92.9 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.209, scaleY: 1.209, x: -270, y: -95 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.114, scaleY: 1.114, x: -267.2, y: -92.9 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.209, scaleY: 1.209, x: -270, y: -95 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.114, scaleY: 1.114, x: -267.2, y: -92.9 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.209, scaleY: 1.209, x: -270, y: -95 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1.114, scaleY: 1.114, x: -267.2, y: -92.9 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_4 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }, { t: this.instance_5 }] }, 2).to({ state: [{ t: this.instance_3 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }, { t: this.instance_5 }, { t: this.instance }] }, 76).to({ state: [{ t: this.instance_3 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }, { t: this.instance_5 }] }, 3).to({ state: [{ t: this.instance_3 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }, { t: this.instance_5 }, { t: this.instance }] }, 3).to({ state: [{ t: this.instance_3 }, { t: this.instance_2, p: { scaleX: 1, scaleY: 1, x: -263.9, y: -89.8 } }, { t: this.instance_5 }] }, 3).wait(29));

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_24.setTransform(-230.1, -115.9);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAUE4IAYkqQAUkiBGgJQAPgCALAFAgnE9QA1mkglhzQgmhzgqAUQgpATgPAg");
                    this.shape_25.setTransform(-232.8, -121);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag2GWQAsmkgNjKQgDgsgDiRAAEGRIAYkqQAOkHANiZ");
                    this.shape_26.setTransform(-231.2, -129.9);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgCGRIAXkqQAdkHANitAg+GWQATmgADh9QACh8ABiS");
                    this.shape_27.setTransform(-230.4, -129.9);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAMDNIAZkpQAKh4BZA0QBaAzieBPAguDSQAqmZg7gIQg6gJglA+QgmA+BsA8");
                    this.shape_28.setTransform(-232, -110.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_24 }] }).to({ state: [{ t: this.shape_25 }] }, 16).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).wait(114));

                    this.instance_6 = new lib.james_body_1();
                    this.instance_6.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(146));

                    this.instance_7 = new lib.james_wings01_1();
                    this.instance_7.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7 }] }).wait(146));

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuF3IFSh7IAAgbIlSBmAGvFPIk2hTIEzB4ACUluIgbJqAhcl2IAAJX");
                    this.shape_29.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_29 }] }).wait(146));

                    this.instance_8 = new lib.shadow();
                    this.instance_8.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_8.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_8 }] }).wait(146));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_shuffle4 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgvlYQgLAHh4A/QhDAkgjAhQhcBYgjDuIAAA7QgnBDggglADllgQDiD/gWE3IAAAAQgRAqANALAGlFCQA4gcgshQQBQA2g7BVAmXC0QANBXg5gN");
                    this.shape_1.setTransform(-241.8, 15.8);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgOlYQgBABiIAAQiGABgPAMQgcAXgdA4QgUAmg/CCIAAA7QgnBBggglAEGlgQDiD/gWE3IAAAAQgRAqANALAHGFCQA4gcgshQQBQA2g7BVAm4gYQANBVg5gN");
                    this.shape_2.setTransform(-245.1, 15.8);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgElWQkjgSgKAIIizBsQgNAWgSANQgKANAGAqAmrifQgPAFgRgYQgTgZgGgpAERldQDiD+gXE3IAAABQgRApANALAHQFFQA4gdgshPQBQA1g7BV");
                    this.shape_3.setTransform(-246.2, 15.6);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADsCSQhXgHh6gQQhXgMgDADQgFADgqg8QgXgjg0hKQgDAGgEgQQgDgPAAgUQgBg3AZAJAjqhyQgFAhAcAaQALALAIABQAJABgCgK");
                    this.shape_4.setTransform(-270.3, -33.3);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah7lgQDgD/gXE3IAAAAQgRAqANALABCFCQA4gcgshQQBQA2g7BV");
                    this.shape_5.setTransform(-206.4, 15.8);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhUgqQhXgsh1hRQhfhCgBACQgCABAGiZQADiegOgUQgDAGgEgQQgDgOAAgVQgBg3AZAJAmHoxQACAKgJgBQgIgBgLgLQgdgaAGghADBgyQDhD8gWE6IAAAAQgRAqANAKAGAJwQA4gcgshQQBQA1g7BV");
                    this.shape_6.setTransform(-238.2, -14.3);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj3rdQgXANANBQQACADg9CqQhACvgBAHQCyEjA7AdAi0q7QgPgGgeAcQgdAZgDAMACEAcQDiD+gWE5IAAABQgRApANALAFELAQA4gdgshPQBQA1g7BV");
                    this.shape_7.setTransform(-232.1, -22.2);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhQrpQhKApAIAwQjSFnACAEQB6E2A9AeAg7rLQgKgEhNA/ABpAoQDiD+gWE5IAAABQgRApANALAEpLMQA4gdgshPQBQA1g7BV");
                    this.shape_8.setTransform(-229.4, -23.4);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ajsq5QgSgpgFAXQgFAVAHAtQACADg9CqQhACvgBAHQCyElA7AbAkBqJQBVhjgcBKACEASQDiD/gWE5IAAAAQgRAqANALAFEK2QA4gcgshQQBQA2g7BV");
                    this.shape_9.setTransform(-232.1, -21.3);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiIASQgmgSg7g/QhNhUhPiDQATlpgBgCQBWhkgdBLAleqxQgSgqgFAYQgFATAHAvACMAKQDiD/gWE5IAAAAQgRAqANALAFMKuQA4gcgshQQBQA2g7BV");
                    this.shape_10.setTransform(-232.9, -20.5);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhVAaQgOgHh6h4Qh9h+gQgbQgnj2gjiVQBWhjgdBKAmfq5QgSgqgFAYQgFASAHAwAC/ATQDiD+gWE5IAAABQgRApANALAF/K3QA4gdgshPQBQA1g7BV");
                    this.shape_11.setTransform(-238, -21.3);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgVASQkhjfgHgVQgTg2g0iHQgth5gOg8QgEg3AAgGQABgeAKgcAn4q7QAGBGAzAhAEAAKQDiD+gXE6IAAAAQgRApANALAG/KuQA4gdgshPQBQA1g7BV");
                    this.shape_12.setTransform(-244.5, -20.5);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AoGq7QAHBHAyAgQAGAXBICjQBLCsAEAMQAHAVEiDfAnNpUIgDg9QABgeAJgcAENAKQDiD+gWE6IAAAAQgRApAMALAHNKuQA4gdgshPQBQA1g7BV");
                    this.shape_13.setTransform(-245.8, -20.5);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AoPp5QAHBHAyAgQAFAYA7CUQA/ChADAIQADAJCKA5QCBA1BGAXAnPqJQgKAdgBAdIAEA9AEWg2QDiD8gWE5IAAABQgRApANALAHWJsQA4gdgshPQBQA1g7BV");
                    this.shape_14.setTransform(-246.7, -13.8);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AARjBQg4gEjzgcQgEADhahMQhfhPgXghQgDAFgEgPQgDgPAAgUQgBg4AZAJAnumaQACAKgJgCQgIAAgLgLQgdgbAGggAEnjIQDiD8gWE5IAAABQgRApANALAHnHaQA4gdgshPQBQA1g7BV");
                    this.shape_15.setTransform(-248.4, 0.7);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACyl0QDiD/gWE3IAAAAQgSAqANALAFyEuQA4gcgshQQBPA2g7BVAhjlsQiIBRg7CeQgvB9gPDuIAAA7QgnBDggglAlkEpQANBXg5gN");
                    this.shape_16.setTransform(-236.7, 17.8);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADDl0QDiD/gWE3IAAAAQgRAqANALAGDEuQA4gcgshQQBQA2g7BVAhRlsQijBgg1CPQhACpgMDCIAAA7QgnBDggglAl1EpQANBXg5gN");
                    this.shape_17.setTransform(-238.4, 17.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 6).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 5).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape }] }, 2).wait(12));

                    this.instance = new lib.james_glasses1("synched", 0);
                    this.instance.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.instance_3 = new lib.james_blink();
                    this.instance_3.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.instance_3 }] }, 33).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }, 4).wait(20));

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_18.setTransform(-230.1, -115.9);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA0D1IAYkpQAKh4BEgIQBJgIgPCCAgGD6QABgKhoAHQhpAGABgHQABgTA0hDQBGhbAZgpQBxi6h9hb");
                    this.shape_19.setTransform(-236, -114.3);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACCDPIAZkpQAKh4BDgIQBJgIgPCCAgIhXQj5CUgfBZQgKAcANAVQAPARgBADQAAACCrgFQCqgGgBAE");
                    this.shape_20.setTransform(-243.8, -110.5);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACuDPIAYkpQAKh4BEgIQBJgIgPCCAixA2QhPgJgkAeQgXATgTA4QgHATAYAyQAAACGugH");
                    this.shape_21.setTransform(-248.2, -110.5);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADyDPIAYkpQAKh4BEgIQBJgIgPCCAC1DWQosAIAAgDQgCgEgNgVQgKgQgDgLQgGggA0ga");
                    this.shape_22.setTransform(-255, -110.5);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEIDPIAYkpQAKh4BEgIQBJgIgPCCADLDWQosAIAAgDQhihBAjgS");
                    this.shape_23.setTransform(-257.2, -110.5);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEIC1IAYkpQAKh4BEgIQBJgIgPCCAmqDyQAtAOBjgpQB4g5A/gaQBtgvBCAFQBXAGAoBc");
                    this.shape_24.setTransform(-257.2, -107.9);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACOC1IAYkpQAKh4BEgIQBJgIgPCCABRC8QACiYgyg5Qgqg1hJAcQhFAag/BQQhBBUgZBl");
                    this.shape_25.setTransform(-245, -107.9);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA4DSIAYkpQAKh4BEgIQBJgIgPCCAgDDZQAYi/gcheQgahTg4AKQg0AKgoBRQgqBXAGBz");
                    this.shape_26.setTransform(-236.4, -110.8);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAvDSIAYkpQAKh4BEgIQBJgIgPCCAgMDZQAXnEhsAXQgmAIgnA9QgkA6ACAg");
                    this.shape_27.setTransform(-235.5, -110.8);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjDk/QCAgRAyChQAQA0AGBIQAGBCABAPQAFApgPBUQgZCTgDAUAAhE7IAYkrQAKh2BEgIQBJgIgPCA");
                    this.shape_28.setTransform(-234.1, -121.3);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgKFgIAWkqQAKh2BEgJQBJgIgPCAAhHFnQADgUAbiTQAShigDgbIgHhRQgOh6gIggQgdiChCg8");
                    this.shape_29.setTransform(-229.6, -125);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ABBD8IAYkoQAKh4BEgJQBJgIgPCCAAFEBQAjjAgEiKQgDhvgZgvQgUgohTAYQhWAYgtBG");
                    this.shape_30.setTransform(-237.3, -115);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgDEFIAWkoQAKh4BEgJQBJgIgPCCAg/EKQAsmkgphNQgphMggBcQgWA/gCBw");
                    this.shape_31.setTransform(-230.3, -115.9);

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgMEDIAWkpQAKh3BEgJQBJgIgPCCAhIEIQArmaguhWQgUglgQAHQgPAGgQAwQgNAmAXAqQAeArAHAR");
                    this.shape_32.setTransform(-229.4, -115.7);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgHEKIAXkpQAKh4BDgIQBJgIgPCCAhDEPQAqmRg5hrQgUglgOAFQgTAIgPAtQgGAQAIA+QAIA2AFAO");
                    this.shape_33.setTransform(-229.9, -116.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_18 }] }).to({ state: [{ t: this.shape_19 }] }, 20).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).to({ state: [{ t: this.shape_24 }] }, 5).to({ state: [{ t: this.shape_25 }] }, 2).to({ state: [{ t: this.shape_26 }] }, 2).to({ state: [{ t: this.shape_27 }] }, 2).to({ state: [{ t: this.shape_28 }] }, 2).to({ state: [{ t: this.shape_29 }] }, 2).to({ state: [{ t: this.shape_30 }] }, 2).to({ state: [{ t: this.shape_31 }] }, 2).to({ state: [{ t: this.shape_32 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_33 }] }, 2).to({ state: [{ t: this.shape_18 }] }, 2).wait(2));

                    this.instance_4 = new lib.james_body_1();
                    this.instance_4.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(57));

                    this.instance_5 = new lib.james_wings01_1();
                    this.instance_5.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(57));

                    this.shape_34 = new cjs.Shape();
                    this.shape_34.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluIgbJqIEzB4AGvFPIk2hTAhcl2IAAJX");
                    this.shape_34.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_34 }] }).wait(57));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(57));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_shuffle3 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQAeAiBJBFQA1AzAWAiQA8BfgiDTIAAAAQgRApANALAGRDqQA4gdgshPQBQA2g7BUAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape_1.setTransform(-239.8, 17.4);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADTlwQDoBiAJAPQAOAWgYBgQgNA0gXBVIAAAAQgRApANALAGKBsQA4gdgshPQBQA2g7BUAhBloQkmCtgaGlIAAA7QgnBDgggkAmBElQANBXg5gM");
                    this.shape_2.setTransform(-240, 17.4);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC1lwQBjAYB0AJQBaAIACADQADAGhXBIQhdBNgHAhIAAAAQgRApAMALAEkgcQA3gdgrhPQBPA2g7BSAhgloQklCtgbGlIAAA7QgnBDgggkAmgElQANBXg5gM");
                    this.shape_3.setTransform(-237, 17.4);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC2lwQEvA/ABACQABABhvBHQhxBJgDANIAAAAQgRApANALAD4glQA4gdgshPQBQA2g7BUAheloQkmCtgaGlIAAA7QgnBDgggkAmeElQANBXg5gM");
                    this.shape_4.setTransform(-237.1, 17.4);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AC8lwQEcA7AIAMQjRCtgCAJIAAAAQgRApANALAEBgHQA4gdgshPQBQA2g7BSAhYloQkmCtgaGlIAAA7QgnBDgggkAmYElQANBXg5gM");
                    this.shape_5.setTransform(-237.7, 17.4);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADFlwQB5AZBVAqQA6AcAKAPQiLBzgtBSIAAAAQgRApANALAETAtQA4gdgshNQBQA2g7BSAhPloQkmCtgaGlIAAA7QgnBDgggkAmPElQANBXg5gM");
                    this.shape_6.setTransform(-238.6, 17.4);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFHBmQA7hUhPg0IAAAAQAFgUCPixQgJgNhTg0Qhhg9g0gLAEnBIQA3gdgrhNAEuAQQgMgLARgnAg/loQklCtgbGlIAAA7QgnBDgggkAl/ElQANBXg5gM");
                    this.shape_7.setTransform(-240.3, 17.4);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AEnBIQA3gdgrhNIAAAAQAFgUCPixQgJgNhTg0Qhhg9g0gLAFHBmQA7hUhPg0AEuAQQgMgLARgnAg/loQklCtgbGlIAAA7QgnBDgggkAl/ElQANBXg5gM");
                    this.shape_8.setTransform(-240.3, 17.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape }] }, 2).wait(2));

                    this.instance = new lib.james_glasses1("synched", 0);
                    this.instance.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(42));

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_9.setTransform(-230.1, -115.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_9 }] }).wait(42));

                    this.instance_3 = new lib.james_body_1();
                    this.instance_3.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3 }] }).wait(42));

                    this.instance_4 = new lib.james_wings01_1();
                    this.instance_4.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(42));

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluIgbJqIEzB4AGvFPIk2hTAhcl2IAAJX");
                    this.shape_10.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_10 }] }).wait(42));

                    this.instance_5 = new lib.shadow();
                    this.instance_5.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_5.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(42));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_shuffle2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADPlYQB+CPAyBxQA+CLgWCbIAAABQgRApANALAGbE7QA4gdgshPQBQA1g7BVAhFlQQisBmhCBaQhbB8ABDPIAAA7QgnBDggglAmND2QANBXg5gN");
                    this.shape_1.setTransform(-239.6, 15);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AHAE3QA7hVhQg1IAAgBQAyj5hlhqQgcgfg/glQg+gkgUgXAGnDhQgNgLARgpQAsBPg4AdAm9ESQA5ANgNhXQgdhsAbhzQA1jpEVguAnYDmQAgAlAnhD");
                    this.shape_2.setTransform(-239.2, 11.6);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmxDaQAdAHAMgUQAOgWgLgnQhPkMCNhQQAvgaBQgJQBTgGAcgFAC7kCQAeADAjADQBIAGAvAYQCYBQhsEGIAAABQgRApANALAGTDlQA4gdgshPQBQA1g7BVAnMCuQAgAlAnhD");
                    this.shape_3.setTransform(-237.6, 6.4);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmQC2QAdAHAMgTQAVgigSgcQhKhxgOgwQgVhEAxgmQAQgNBxgNQCfgTAMgCACgjWQDcAXAJAGQA8AlgMA4QgMA5hFCDIAAABQgHAQgMAuAGPDXQgQgMgGgkQgHgugOgYQAaARAbAnQAXAgATAGAmrCKQAgAlAnhD");
                    this.shape_4.setTransform(-234.9, 2);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah8inQgLACieAFQiWAFgGAFQgUAQA9BbQBOBpAXAlQgnBDgggkACYiuQEhAQAIAFQAXAOhIBZQhUBmgPAmIAAABQgLAbAQAnAGCCoQggAPgTgSQgSgRgQg5QAOARATANQAkAaAhgPAkzBjQATAdgWAhQgMATgdgG");
                    this.shape_5.setTransform(-234.1, -1.8);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah7i4Qk9AygFAEQgNAKDDDtQgnBDggglACajAQAfAEB8AcQCEAeAEAHQANAVhkBZQhlBYgCAFIAAABQgLAaAQAoAFUCeQghAPgSgSQgSgSgQg4QAPASASAMQAkAaAhgPAkHB1QATAcgWAiQgMATgdgH");
                    this.shape_6.setTransform(-234.3, -0.1);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah6jCQjNAmhkA4QgFAEAwA3QBcBqAyA+QgnBDggglACajKQATADD/BgQAFAIhjBjQgxAyg0AzIAAABQgLAaAQAoAE+C3QghAPgSgSQgSgSgQg4QAOASATAMQAkAaAhgPAjyB/QASAcgVAiQgMATgdgH");
                    this.shape_7.setTransform(-234.3, 0.8);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah4i7QjfAqheA0QCkCrAhAqQgnBDggglACdjDQAbAED+BfQADAFjSDBIAAABQgKAaAQAoAE9C0QghAPgTgSQgRgSgRg4QAOARATANQAlAaAhgPAjwB4QATAcgWAiQgMATgdgH");
                    this.shape_8.setTransform(-234.6, 0.1);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGzEyQAGhKgeg3IAAAAQAxj6hkhqQgdgeg/glQg9gkgUgXAHqEkQgKgTgSgnQgSgjghgWAGWDlQgMgLARgpAnOEXQA5AMgNhXQgchrAahzQA1jqEVgtAnpDrQAgAkAnhD");
                    this.shape_9.setTransform(-237.6, 11.1);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADHlwQDVDxgXFTIAAAAQgRApAMALAF5FAQA3gdgrhPQBPA2g7BUAhOloQiNBThECYQg+CIgODfIAAA7QgnBDgggkAlrElQANBXg5gM");
                    this.shape_10.setTransform(-238.8, 17.4);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADClwQDFDegZFmIAAAAQgRApANALAFiFAQA4gdgshPQBQA2g7BUAhTloQiNBThECYQgaA7gKBjQgFA8gHCNIAAA7QgnBDgggkAlUElQANBXg5gM");
                    this.shape_11.setTransform(-238.3, 17.4);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADOlwQDODpgXFUIAAAAQgRApAMALAF5E5QA3gdgrhPQBPA2g7BUAhHloQiOBUhGCXQhCCLgODcIAAA7QgnBDgggkAlrElQANBXg5gM");
                    this.shape_12.setTransform(-239.5, 17.4);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADQlwQDYD0gXFCIAAAAQgRApANALAGFEyQA4gdgshPQBQA2g7BUAhFloQkXClgbGtIAAA7QgnBDgggkAl3ElQANBXg5gM");
                    this.shape_13.setTransform(-239.7, 17.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 26).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).wait(6));

                    this.instance = new lib.james_glasses1("synched", 0);
                    this.instance.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.instance_3 = new lib.james_blink();
                    this.instance_3.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.instance_3 }] }, 21).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.instance_3 }] }, 3).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }, 3).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.instance_3 }] }, 3).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }, 4).wait(26));

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_14.setTransform(-230.1, -115.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_14 }] }).wait(60));

                    this.instance_4 = new lib.james_body_1();
                    this.instance_4.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(60));

                    this.instance_5 = new lib.james_wings01_1();
                    this.instance_5.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(60));

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluIgbJqIEzB4AGvFPIk2hTAhcl2IAAJX");
                    this.shape_15.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_15 }] }).wait(60));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(60));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_shuffle1 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQBQA1g7BVAGREyQA4gdgshPQgRApANALAhDloQklCtgbGlIAAA7QANBXg5gMAmDElQgnBDgggk");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhVlVQhiA6glAaQhCAwgkAzQhYB7AZDnIAAA7QgNAXgGAjQgFAdgLAHAC/lcQBRA9AcAaQA1AwAbAxQBBB2gyDQIAAABQgGAOgUAQQgPALAEADAFcEHQAGgYAVgYQASgVACgfQAiAWgLAgQgHAUgeA2AmBD/QAEAfAJAdQAHAWAAAK");
                    this.shape_1.setTransform(-238, 15.5);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFFDdQAmhCgGglIAAgBQCXj1iQhVQgrgZhTgRQhPgPgLgIAEdC1QADgMAbgXQAbgXAPgFAiAkPQkoA4gJDPQgFBlA3BcQgFAIANArQANApgDACAl/C5QBIAzAAAN");
                    this.shape_2.setTransform(-233.7, 8.5);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ahyi9QhOANiKASQhkAWABA0QAAAnA6AtQBHA6ANAWQgDAFBAA4ACijFQACACBmASQBoATARAJQAjAVAGAPQAGAOgQAXQgJAPglAqQgeAjgwBOIAAABQgRAFgZAXQgcAXgCAMAEmBfQAFAlglBCAkfBQQAQgIAgAGQAfAFAAAH");
                    this.shape_3.setTransform(-235.1, 0.3);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiCiQQhIAMhvBKQhsBHABAdQAAAOCNALQCRALAEAHQgDAFA/A4ABqCZQALgUAbgeQAVgXADgPIAAgBQEChagFgMQgEgJhYgnQhjgrhUgXABMBsQABgFApgSQAkgQAOgEAiCBVQAHgEAkAFQAkAFAAAE");
                    this.shape_4.setTransform(-233.5, -4.1);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AiKhzQghAFhwBsQhuBnABARQAAAGCegjQCegiABABQgHANA3AxACKh7QAeAIBwBlQByBlgBAXQAAAChRgQQhxgUiEgNIAAAAQhpAQAAADAhLA4QAFgCBDgJABDA/QgBAFgjAZQgkAZgDAG");
                    this.shape_5.setTransform(-232.7, -7);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACWibQAOAEBSCVQBRCRAAANQAAABiUhLQgtgVgkgQIBEgZAhrAAIBJAAQAKAAAMADIhqAzAgPAAIgTAAABOA8IBMAoAgMADQAmALBIAfIgfALAhyiPQgWADi+EYQAAAEGGhb");
                    this.shape_6.setTransform(-233.9, -3.8);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhYiZQgGABguBTQhCB2hGBoQAXAIBSgRQAMgCAwgLQgLAPgBATACwikQAKACAyCWQAzCXgMAQACoCGIAAAAIicghQBYgHAOgDQAZAJATASQAHAGADAKgACoCGQABAEADACQADACAAAEAB6BaQAXAFAWADQATAEAMANQACACACABQACACABADQABACABABQABACABAAACoCGIBmAWAikCEQAFgPAQgGQAlgMAmgGIBQAIQhNATguALQAEgFAEgFQAPgPATgJ");
                    this.shape_7.setTransform(-236.5, -2.8);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape_8.setTransform(-239.8, 17.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 47).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_1 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).wait(4));

                    this.instance = new lib.james_glasses1("synched", 0);
                    this.instance.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.instance_3 = new lib.james_blink();
                    this.instance_3.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.instance_3 }] }, 51).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }, 2).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.instance_3 }] }, 5).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }, 2).wait(15));

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_9.setTransform(-230.1, -115.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_9 }] }).wait(75));

                    this.instance_4 = new lib.james_body_1();
                    this.instance_4.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).wait(75));

                    this.instance_5 = new lib.james_wings01_1();
                    this.instance_5.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(75));

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAApXAhcDhIAAAbIlSB7AGvFPIk2hTIEzB4ACUluIgbJq");
                    this.shape_10.setTransform(-238.6, 101.2);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuEbIFSg5IAAAbIlSBOACUltIgbJqIEzB4AGvFQIk2hTAhcl0IAAJW");
                    this.shape_11.setTransform(-238.6, 101);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuDfIFSADIAAAbIlSASACUltIgbJqIEzB4AGvFQIk2hTAhcl0IAAJW");
                    this.shape_12.setTransform(-238.6, 101);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuD/IFSgdIAAAbIlSAyACUltIgbJqIEzB4AGvFQIk2hTAhcl0IAAJW");
                    this.shape_13.setTransform(-238.6, 101);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluIgbJqIEzB4AGvFPIk2hTAhcl2IAAJX");
                    this.shape_14.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_10 }] }).to({ state: [{ t: this.shape_11 }] }, 14).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).wait(31));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(75));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_right = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "play": 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(89));

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQBQA1g7BVAGREyQA4gdgshPQgRApANALAhDloQklCtgbGlIAAA7QANBXg5gMAmDElQgnBDgggk");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape_1.setTransform(-239.8, 17.4);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGBEcQA4gdgshPIAAAAQBQA1g7BVAGJDkQgNgLARgpAjJl+QkCCpBYIQQgnBDgggkAmfGGQA5AMgNhXAGNCwQiAkqjCkM");
                    this.shape_2.setTransform(-226.4, 19.6);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhEl2QBxC/B5CKQBdBmBgBLQAfBaBggjAHOCUQgqAuhCg+IAAgBQAtgGAHAPAFiCEIABAAAlfF3QA4gSg3hFIAAAAQkJlfENkvAleEgQAABOgvgQ");
                    this.shape_3.setTransform(-211.9, 18);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AHQBaQgqAuhBg+QAAAAAAgBQAsgGAHAPAHlCBQhhAjgfhaIAAAAAhrlkQA3CeB0B3QB2B2CvAjAmClcQkNEvHVE8QAABNgugPAi7FlQA4gRg3hF");
                    this.shape_4.setTransform(-208, 16.2);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGuAZQgdA4hPgsQApgRALANAHMA6QhVA7g1hPIAAgBAmzkwQhZEwDwBcQDwBdgPA0QgmBDghgkAg7DtQANBXg5gMAick4QCqGRE0gz");
                    this.shape_5.setTransform(-203.1, 11.8);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AGqh9QgcA4hPgrIgBgBQAqgRALANAnIkiQAYDxD3BXQD1BZAwBgQA3A3gsAVACoEdQAcg0hYgKAixkqQCqEjFGhpQA1BPBVg7");
                    this.shape_6.setTransform(-201, 10.4);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AE6BJQARg3hXAFIgBAAIAAAAIABAAAGyh3QgdA4hPgsIAAAAQApgRALANAi4h+QC0DiFKjPQA1BQBVg7ADzAXQjMCkjbheQjchdg/h3AELBgQAogchAgt");
                    this.shape_7.setTransform(-200.3, -6.6);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhZBfQAMANAMAMQiGAtiog+AFHisIhiA2IBbhNAFWicQgVBChTA7QABgEABgDQAGgmAPgCAhBB4QDODRBhloQAxgRAlgkQAlgkAHgYAhBB4QB6grCHiVIAlgu");
                    this.shape_8.setTransform(-209.9, -29);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhtB0QALANAMAMQiGAtiog+AF8gZQg+AehkgPQADgCADgCQAegWANAIAhWCNQDODRBiloQAuAUAzABQA0ABAWgMAhWCNQB7grCGiVIAmguIAWhuADRhhIAAh3");
                    this.shape_9.setTransform(-207.8, -31.1);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhZBLQAMANAMAMQiGAtiog+AFUinQgFAMgHALIhiAGIBugdIAFgBAFUinQABgFACgEAFwijQgHAXglAlQglAkgxAQQABgDABgEQAGglAPgDAFViRIgNABQgbAxg/AsQhiFojNjRQB6grCHiVIAmgu");
                    this.shape_10.setTransform(-209.9, -27);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AF8gZQg+AehkgPQADgCADgCQAegWANAIAmEB8QCoA+CGgtQDODRBiloQAuAUAzABQA0ABAWgMADnjPIgWBuIAAh3AhWCNQB7grCGiVIAmguAhtB0QALANAMAM");
                    this.shape_11.setTransform(-207.8, -31.1);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADvgzQhiFojOjRQB6gqCHiWIAmguIBjgGQgcAxg+AsQAAgDABgEQAGglAPgDAhZBLQAMAOAMALQiGAuiog/ADvgzQAwgQAlgkQAlgkAHgYAFJiQIAMgBADmiKIBugdQgFAMgGALAFZioIgFABQABgEACgF");
                    this.shape_12.setTransform(-209.9, -27);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhUAAQAuAUAyABQAzABAWgMABMgPQg+AehigPQADgCADgCQAfgWAMAI");
                    this.shape_13.setTransform(-177.4, -32.1);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgeB0QALANAMAMQiGAtiog+AEpgKQhiFojOjRQB7grCGiVIAmguIAWhuAEghhIAAh3");
                    this.shape_14.setTransform(-215.7, -31.1);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhZBLQAMANAMAMQiGAtiog+AFZioIgFABQABgFACgEAFViRIgNABIhiAGIBugdQgFAMgHALQgbAxg/AsQABgDABgEQAGglAPgDAhBBkQDNDRBiloQAxgQAlgkQAlglAHgXAhBBkQB6grCHiVIAmgu");
                    this.shape_15.setTransform(-209.9, -27);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AFwijQgHAYglAkQglAkgwAQQAAgDABgEQAGglAPgDAlvBTQCoA/CGguQDODRBiloQA+gsAcgxIAMgBAhBBkQB6gqCHiWIAmguIBjgGAhZBLQAMAOAMALADmiKIBugdQgFAMgGALAFZioIgFABQABgEACgF");
                    this.shape_16.setTransform(-209.9, -27);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 22).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 4).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] }, 2).wait(2));

                    this.instance = new lib.james_blink();
                    this.instance.setTransform(-263.9, -89.8);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.instance_3 = new lib.james_smile_1();
                    this.instance_3.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_1 }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_1 }] }, 14).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }] }, 3).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.8, scaleX: 1, scaleY: 1 } }] }, 10).to({ state: [{ t: this.instance_2, p: { rotation: 3.3, x: -259.6, y: -91.3, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 3.3, x: -259.6, y: -91.3, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 3.3, x: -259.6, y: -91.3, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 6.5, x: -255.4, y: -92.6, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 6.5, x: -255.4, y: -92.6, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 6.5, x: -255.4, y: -92.6, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 10.8, x: -249.7, y: -93.9, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 10.8, x: -249.7, y: -93.9, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 10.8, x: -249.7, y: -93.9, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 1.9, x: -261.3, y: -90.7, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 0, x: -263.9, y: -89.5, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7.8, x: -253.6, y: -92.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_2, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance_3, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }, { t: this.instance, p: { rotation: 11, x: -249.2, y: -93.8, scaleX: 0.999, scaleY: 0.999 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 15, x: -243.7, y: -94.9, scaleX: 1, scaleY: 1 } }] }, 1).to({ state: [{ t: this.instance_2, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance_3, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }, { t: this.instance, p: { rotation: 7, x: -254.7, y: -92.8, scaleX: 1, scaleY: 1 } }] }, 2).wait(1));

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_17.setTransform(-230.1, -115.9);

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AALEcQAAkGA1jFQA1jHBUChAgvEeQAombg1hVQg1hVg+BSQg9BRBZgE");
                    this.shape_18.setTransform(-227.7, -117.9);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAYEdQAtiZAEimQAEiphZgvQhbgvg+AfABUEfIBFknQAlighDh2");
                    this.shape_19.setTransform(-230.4, -117.4);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAXEKQA3iVgNiDQgMiGhOg+QhQg+hwAjABSEQQCEiRADiPQAFidh+hi");
                    this.shape_20.setTransform(-224.8, -114.7);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAfDyQBBhvAChuQADhsgqg+Qgrg9hNgIQhOgIhbA7ABaD8QBYhWAjhhQAjhfgfhVQgfhVh0g3");
                    this.shape_21.setTransform(-221.1, -111.6);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah2lZQBFC0gPD5QgICHhGB1ACPjyQgWEtjMEf");
                    this.shape_22.setTransform(-203.6, -121);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjJEjQgtlIEsj/AiNElQBekRD/jx");
                    this.shape_23.setTransform(-207.6, -118);

                    this.shape_24 = new cjs.Shape();
                    this.shape_24.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjsD+QgJmVFEhmAiwD7QB/l6EegS");
                    this.shape_24.setTransform(-210.5, -114.6);

                    this.shape_25 = new cjs.Shape();
                    this.shape_25.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ai4DWQBam/FtDNAj0DbQiAnEHxAP");
                    this.shape_25.setTransform(-212.2, -111.2);

                    this.shape_26 = new cjs.Shape();
                    this.shape_26.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhrE0QBam/Ddh7AinE5QiAnEFKit");
                    this.shape_26.setTransform(-219.9, -120.6);

                    this.shape_27 = new cjs.Shape();
                    this.shape_27.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhOEbQBEkhhdkPAgSEdQBfjQAblp");
                    this.shape_27.setTransform(-220, -117.2);

                    this.shape_28 = new cjs.Shape();
                    this.shape_28.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AA4EXQDcjejNlPAgCERQB1lCkcig");
                    this.shape_28.setTransform(-223.5, -115.7);

                    this.shape_29 = new cjs.Shape();
                    this.shape_29.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAfDyQBBhvAChuQADhsgqg+Qgrg9hNgIQhOgIhbA7ABaD8QBYhWAjhhQAjhfgfhVQgfhVh0g4");
                    this.shape_29.setTransform(-221.1, -111.6);

                    this.shape_30 = new cjs.Shape();
                    this.shape_30.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ah1lZQBEC0gPD5QgICHhGB1ACPjyQgWEtjMEf");
                    this.shape_30.setTransform(-203.6, -121);

                    this.shape_31 = new cjs.Shape();
                    this.shape_31.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj0DbQiAnEHxAQAi4DWQBbm/FsDO");
                    this.shape_31.setTransform(-212.2, -111.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_17 }] }).to({ state: [{ t: this.shape_18 }] }, 28).to({ state: [{ t: this.shape_19 }] }, 1).to({ state: [{ t: this.shape_20 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_31 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_31 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).wait(1));

                    this.instance_4 = new lib.james_body_1();
                    this.instance_4.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4 }] }).to({ state: [{ t: this.instance_4 }] }, 34).to({ state: [{ t: this.instance_4 }] }, 8).to({ state: [{ t: this.instance_4 }] }, 8).to({ state: [{ t: this.instance_4 }] }, 8).to({ state: [{ t: this.instance_4 }] }, 8).to({ state: [{ t: this.instance_4 }] }, 8).to({ state: [{ t: this.instance_4 }] }, 8).wait(8));

                    this.instance_5 = new lib.james_wings01_1();
                    this.instance_5.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).to({ state: [{ t: this.instance_5 }] }, 34).to({ state: [{ t: this.instance_5 }] }, 8).to({ state: [{ t: this.instance_5 }] }, 8).to({ state: [{ t: this.instance_5 }] }, 8).to({ state: [{ t: this.instance_5 }] }, 8).to({ state: [{ t: this.instance_5 }] }, 8).to({ state: [{ t: this.instance_5 }] }, 8).wait(8));

                    this.shape_32 = new cjs.Shape();
                    this.shape_32.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuF3IFSh7IAAgbIlSBmAGvFPIk2hTIEzB4Ahcl2IAAJXACUluIgbJq");
                    this.shape_32.setTransform(-238.6, 101.2);

                    this.shape_33 = new cjs.Shape();
                    this.shape_33.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ahcl2IAAJXIlSBmAmuF3IFSh7IAAgbACUluIgbJqIEzB4AGvFPIk2hT");
                    this.shape_33.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_32 }] }).to({ state: [{ t: this.shape_33 }] }, 34).to({ state: [{ t: this.shape_33 }] }, 8).to({ state: [{ t: this.shape_33 }] }, 8).to({ state: [{ t: this.shape_33 }] }, 8).to({ state: [{ t: this.shape_33 }] }, 8).to({ state: [{ t: this.shape_33 }] }, 8).to({ state: [{ t: this.shape_33 }] }, 8).wait(8));

                    this.instance_6 = new lib.shadow();
                    this.instance_6.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_6.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(90));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_move2 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADdlqQDiD+gWE4IAAAAQgRApANALAGdE4QA4gdgshPQBQA1g7BVAg3liQlAC8gYGKIgBA5QgnBEgfgjAmQEdQANBZg4gM");
                    this.shape_1.setTransform(-241, 16.8);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgylYQg1AgheA0QhMAsgpAmQhpBfgLCsIgBA5QgNAXgSAYQgLATgCAgADilgQDiD/gWE3IAAAAQgRAqANALAGiFCQA4gcgshQQBQA2g7BVAmvCSQALBQASAA");
                    this.shape_2.setTransform(-241.5, 15.8);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgclYQhGAgg9AhQh2BBhPBVQhHBMgYAVQgOAagWAbQgNAVAFAWAD4lgQDiD/gWE3IAAAAQgRAqAMALAG4FCQA4gcgshQQBQA2g7BVAnDggQAEAbACAdQADASAUAE");
                    this.shape_3.setTransform(-243.7, 15.8);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuiWQgTgEgKhMQA2gkAzgKQAdgFA+AAQA9ABAqgIQBBgOBMgqAEBlgQDiD/gWE3IAAAAQgRAqANALAHBFCQA4gcgshQQBQA2g7BVAn3iEQgPg7A7gn");
                    this.shape_4.setTransform(-244.6, 15.8);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AnLlyQgCgHgWgjQgLgQAXgQQAFAgAkAOQAEADAjAGIAGABAnXm8QAugUAVAsQAGAOAHARQALAeAcA0QAnBFAYAKQAmAOBIgEQBKgFBCgWADuj9QDiD9gXE5IAAAAQgRApANALAGtGlQA4gdgshPQBQA1g7BV");
                    this.shape_5.setTransform(-242.7, 5.9);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ak/nSQgKgMgkgEQgjgFAAAKQAAgBgCABQgTgzA9gqAhuh+QgxAMhjgHQhXgGgggMQgcgKgIhaQgIhhAViMIAAgBACniGQDiD9gWE5IAAABQgSApANALAFnIdQA3gdgrhPQBPA1g7BV");
                    this.shape_6.setTransform(-235.6, -5.9);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Aj/oLQgKgMgkgFQgkgEABAKQAAgBgCABQgTgzA9gqAlQoWIAAABQhYCyAaDMQAJADB8AsQB7ApAVgFACchMQDhD8gWE6IAAAAQgRApANALAFbJWQA4gdgshPQBQA1g7BV");
                    this.shape_7.setTransform(-234.5, -11.7);

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjWorQgLgMgkgFQgjgEABAKQgBgBgBABQgMgeAhgYQAigaAiAjAkno2IAAABQhBCCgYBZQgaBfAKBQQEHBuAPgDACahIQDiD8gWE6IAAAAQgRApAMALAFaJaQA4gdgshPQBQA1g7BV");
                    this.shape_8.setTransform(-234.3, -12.1);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjWofQgLgMgkgFQgjgEABAKQgBgBgBABQgLgeAggYQAigaAiAjAknoqIAAABQhICRgRA+QgaBeAKBRQB1AxBUAbQBDAVAKgCACahUQDiD8gWE6IAAAAQgRApAMALAFaJOQA4gdgshPQBQA1g7BV");
                    this.shape_9.setTransform(-234.3, -10.9);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjWoSQgLgMgkgEQgjgFABAKQgBAAgBABQgLgeAggZQAigZAiAiAknodIAAABQhICTgRA9QgaBdAKBRQBOAhDIAjACahiQDiD9gWE5IAAAAQgRAqAMALAFaJAQA4gcgshQQBQA2g7BV");
                    this.shape_10.setTransform(-234.3, -9.5);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjWofQgLgMgkgFQgjgEABAKQgBgBgBABQgLgeAggYQAigaAiAjAh6hMQgKAChDgVQhUgbh1gxQgKhRAaheQARg+BIiRIAAgBACahUQDiD8gWE6IAAAAQgRApAMALAFaJOQA4gdgshPQBQA1g7BV");
                    this.shape_11.setTransform(-234.3, -10.9);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjSoxQgKgMgkgFQgkgEABAKQAAgBgCABQgLgeAggYQAigaAjAjAh/g6Qg8gChTgwQh3hFgGgDQgKhRAZheQAXhRBCiHIAAgBACWhCQDhD8gWE6IAAAAQgRApANALAFVJgQA4gdgshPQBQA1g7BV");
                    this.shape_12.setTransform(-233.9, -12.7);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ajgo1QgLgMgkgFQgjgEABAKQgBgBgBABQgLgeAggYQAigaAiAjAh+g3Qg9gChSgwQh3hFgHgDQgMhkAUhKQAliGAthaIAAgBACWg+QDiD8gWE5IAAABQgRApANALAFWJkQA4gdgshPQBQA1g7BV");
                    this.shape_13.setTransform(-233.9, -13);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AjvouQgKgMgkgEQgkgFABAKQAAAAgCABQgLgeAggZQAigZAjAiAlAo5IAAABQgUApguCoQgVBLANBpQAEACB5BGQBJAqBGADACXhGQDhD8gWE6IAAAAQgRAqANAKAFWJcQA4gcgshQQBQA1g7BV");
                    this.shape_14.setTransform(-234, -12.3);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 25).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_8 }] }, 2).to({ state: [{ t: this.shape_9 }] }, 3).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 2).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_1 }] }, 2).wait(4));

                    this.instance = new lib.james_glasses1("synched", 0);
                    this.instance.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.instance_3 = new lib.james_blink();
                    this.instance_3.setTransform(-263.9, -89.8);

                    this.instance_4 = new lib.james_wglasses("synched", 0);
                    this.instance_4.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.5, rotation: 0, x: -234.9, y: -53.2, regX: 29, scaleX: 1, scaleY: 1 } }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.5, rotation: 0, x: -234.9, y: -53.2, regX: 29, scaleX: 1, scaleY: 1 } }, { t: this.instance_3 }] }, 6).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.5, rotation: 0, x: -234.9, y: -53.2, regX: 29, scaleX: 1, scaleY: 1 } }] }, 3).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.5, rotation: 0, x: -234.9, y: -53.2, regX: 29, scaleX: 1, scaleY: 1 } }, { t: this.instance_3 }] }, 4).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.5, rotation: 0, x: -234.9, y: -53.2, regX: 29, scaleX: 1, scaleY: 1 } }] }, 3).to({ state: [{ t: this.instance_4 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.4, rotation: -3.5, x: -234.6, y: -51.6, regX: 29, scaleX: 1, scaleY: 1 } }] }, 26).to({ state: [{ t: this.instance_4 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.6, rotation: -5.7, x: -234, y: -50.5, regX: 28.9, scaleX: 1, scaleY: 1 } }] }, 2).to({ state: [{ t: this.instance_4 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.6, rotation: 0, x: -233.5, y: -50.5, regX: 29.2, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_4 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.6, rotation: 5.8, x: -234, y: -51.4, regX: 29, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_4 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.8, rotation: 3.5, x: -234.6, y: -52, regX: 28.9, scaleX: 0.999, scaleY: 0.999 } }] }, 2).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance, p: { regY: 36.5, rotation: 0, x: -234.9, y: -53.2, regX: 29, scaleX: 1, scaleY: 1 } }] }, 2).wait(18));

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_15.setTransform(-230.1, -115.9);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_15 }] }).wait(70));

                    this.instance_5 = new lib.james_body_1();
                    this.instance_5.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(70));

                    this.instance_6 = new lib.james_wings01_1();
                    this.instance_6.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_6 }] }).wait(70));

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluIgbJqIEzB4AGvFPIk2hTAhcl2IAAJX");
                    this.shape_16.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_16 }] }).wait(70));

                    this.instance_7 = new lib.shadow();
                    this.instance_7.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_7.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_7 }] }).wait(70));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.james_move1 = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, {});

                    this.shape = new cjs.Shape();
                    this.shape.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQBQA1g7BVAGREyQA4gdgshPQgRApANALAhDloQklCtgbGlIAAA7QANBXg5gMAmDElQgnBDgggk");
                    this.shape.setTransform(-239.8, 17.4);

                    this.shape_1 = new cjs.Shape();
                    this.shape_1.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQB9CMAuByQA4CJgXCuIAAABQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDlpQiiBghNCAQhcCWALDdIAAA7QgnBDggglAmDElQANBXg5gN");
                    this.shape_1.setTransform(-239.8, 18.5);

                    this.shape_2 = new cjs.Shape();
                    this.shape_2.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhIlPQhlA7gjAZQhEAvgoAzQhfB6AIDjIAABHQgnBDgggkADMlXQCNBkAwB2QAvBygLDKIAAABQgRApANALAGhEsQA4gdgshPQBQA1g7BVAmTELQANBXg5gM");
                    this.shape_2.setTransform(-239.3, 22.2);

                    this.shape_3 = new cjs.Shape();
                    this.shape_3.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADGlkQBHA7BABxQBqC+gWDVIAAAAQgRApANALAGVFHQA4gdgshPQBQA2g7BUAm8FcQAeAHAOgTQAPgUgGgqIgJg7QgFj2CCigQBBhQCEhNAmHESQgnBDgggl");
                    this.shape_3.setTransform(-238.7, 25.7);

                    this.shape_4 = new cjs.Shape();
                    this.shape_4.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADLlrQBKA9A8B/QBZC7gcDUIAAAAQgRApAMALAGCFMQA3gdgrhPQBPA2g7BUAhKljQhvBBhOBzQh3CuALDmIAAA7QgnBDggglAlzEgQANBXg5gN");
                    this.shape_4.setTransform(-239.2, 24.2);

                    this.shape_5 = new cjs.Shape();
                    this.shape_5.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADIl1QAiAbAdAzQAFAJAyBkQBXCwggDqIAAAAQgRApAMALAFpFMQA3gdgrhPQBPA2g7BUAhMluQhlA8hJB4QhtC0AMD1IAAA7QgnBDgggkAmHF1QA5AMgNhX");
                    this.shape_5.setTransform(-238.9, 20);

                    this.shape_6 = new cjs.Shape();
                    this.shape_6.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADOlwQDVDwgXFNIAAAAQgRApAMALAGAE5QA3gdgrhPQBPA2g7BUAhHloQiPBUhJCXQhFCNgODaIAAA7QgnBDgggkAlyElQANBXg5gM");
                    this.shape_6.setTransform(-239.5, 17.4);

                    this.shape_7 = new cjs.Shape();
                    this.shape_7.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADRlwQDiD+gWE4IAAAAQgRApANALAGREyQA4gdgshPQBQA1g7BVAhDloQklCtgbGlIAAA7QgnBDgggkAmDElQANBXg5gM");
                    this.shape_7.setTransform(-239.8, 17.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 9).to({ state: [{ t: this.shape_2 }] }, 2).to({ state: [{ t: this.shape_3 }] }, 2).to({ state: [{ t: this.shape_4 }] }, 3).to({ state: [{ t: this.shape_5 }] }, 2).to({ state: [{ t: this.shape_6 }] }, 2).to({ state: [{ t: this.shape_7 }] }, 2).wait(18));

                    this.instance = new lib.james_glasses1("synched", 0);
                    this.instance.setTransform(-234.9, -53.2, 1, 1, 0, 0, 0, 29, 36.5);

                    this.instance_1 = new lib.james_striaght();
                    this.instance_1.setTransform(-263.9, -89.8);

                    this.instance_2 = new lib.james_head_1();
                    this.instance_2.setTransform(-263.9, -89.8);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_2, p: { y: -89.8 } }, { t: this.instance_1, p: { y: -89.8 } }, { t: this.instance, p: { y: -53.2 } }] }).to({ state: [{ t: this.instance_2, p: { y: -89.2 } }, { t: this.instance_1, p: { y: -89.2 } }, { t: this.instance, p: { y: -52.6 } }] }, 9).to({ state: [{ t: this.instance_2, p: { y: -86.2 } }, { t: this.instance_1, p: { y: -86.2 } }, { t: this.instance, p: { y: -49.6 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -83.8 } }, { t: this.instance_1, p: { y: -83.8 } }, { t: this.instance, p: { y: -47.2 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -82.3 } }, { t: this.instance_1, p: { y: -82.3 } }, { t: this.instance, p: { y: -45.7 } }] }, 1).to({ state: [{ t: this.instance_2, p: { y: -81.4 } }, { t: this.instance_1, p: { y: -81.4 } }, { t: this.instance, p: { y: -44.8 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -86.2 } }, { t: this.instance_1, p: { y: -86.2 } }, { t: this.instance, p: { y: -49.6 } }] }, 2).to({ state: [{ t: this.instance_2, p: { y: -89.8 } }, { t: this.instance_1, p: { y: -89.8 } }, { t: this.instance, p: { y: -53.2 } }] }, 2).wait(20));

                    this.shape_8 = new cjs.Shape();
                    this.shape_8.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AgFEFIAWkoQAKh4BEgJQBJgIgPCCAhBEKQAsmkgphNQgqhMgfBcQggBcAWAz");
                    this.shape_8.setTransform(-230.1, -115.9);

                    this.shape_9 = new cjs.Shape();
                    this.shape_9.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag9EIQArmdgohMQgVgngcABQgdABgPAtQgDAIgaA2QgKAVAJAUAgBEDIAWkoQAFhAAOgcQAPghAggEQAwgFAXAMQAhARgGA6");
                    this.shape_9.setTransform(-230, -111.5);

                    this.shape_10 = new cjs.Shape();
                    this.shape_10.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag1D6QAol4glhFQgdg3gUABQhnADgPBmAAFD1IAZkoQACggAYgrQAYgsAPgCQBvgMALBO");
                    this.shape_10.setTransform(-231.4, -107.5);

                    this.shape_11 = new cjs.Shape();
                    this.shape_11.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ADjh4QgFgkgjgLQgdgJg9AGQgQADgXArQgYAsgCAbIgZEoAgzD4QAol1glhEQgdg2gUAAQh1ADgNBa");
                    this.shape_11.setTransform(-231.5, -106.5);

                    this.shape_12 = new cjs.Shape();
                    this.shape_12.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag4DyQAnl1glhEQgWgrgaABQhmACgQB3ADehaQgMgtgngSQgegPglAEQgcAEgQAeQghA9gBAKIgYEo");
                    this.shape_12.setTransform(-231, -104.3);

                    this.shape_13 = new cjs.Shape();
                    this.shape_13.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag1D+QAqmKgnhHQgXgqgaAAQgrABgNAvQgIAcgGBNACpgqQADhHgcgqQgVgegQABQgbAEgQAeQghA9gBAKIgZFI");
                    this.shape_13.setTransform(-231.3, -109.9);

                    this.shape_14 = new cjs.Shape();
                    this.shape_14.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AAAEFIAWkoQAKh4BEgJQAigEAKAfQAIAagIBFAg8EKQAsmkgphNQgqhMgfBcQgeBXAYA4");
                    this.shape_14.setTransform(-230.6, -115.9);

                    this.shape_15 = new cjs.Shape();
                    this.shape_15.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag6EMQAtmogqhNQgVgmgbAEQgbAEgQAuQghBgARApAAAEHIAZksQAKh4BDgJQBPgJgPB9");
                    this.shape_15.setTransform(-230.8, -116.1);

                    this.shape_16 = new cjs.Shape();
                    this.shape_16.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("Ag8EMQAsmogphNQgVgmgbAEQgfAEgQAuQgkBlAQAkAAAEHIAWksQAKh4BEgJQAogEAVAdQAWAegHA9");
                    this.shape_16.setTransform(-230.6, -116.1);

                    this.shape_17 = new cjs.Shape();
                    this.shape_17.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AhCELQAsmkgphNQgVgngXADQgXADgQAtQggBeAWA1AgGEGIAXkoQAJh4BEgJQAmgEATAfQAVAggIA/");
                    this.shape_17.setTransform(-230, -116);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_8, p: { y: -115.9 } }] }).to({ state: [{ t: this.shape_8, p: { y: -113.7 } }] }, 9).to({ state: [{ t: this.shape_9 }] }, 2).to({ state: [{ t: this.shape_10 }] }, 2).to({ state: [{ t: this.shape_11 }] }, 1).to({ state: [{ t: this.shape_12 }] }, 2).to({ state: [{ t: this.shape_13 }] }, 2).to({ state: [{ t: this.shape_14 }] }, 2).to({ state: [{ t: this.shape_15 }] }, 2).to({ state: [{ t: this.shape_16 }] }, 2).to({ state: [{ t: this.shape_17 }] }, 2).to({ state: [{ t: this.shape_8, p: { y: -115.9 } }] }, 2).wait(12));

                    this.instance_3 = new lib.james_body_1();
                    this.instance_3.setTransform(-278.3, -29.6);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_3, p: { y: -29.6 } }] }).to({ state: [{ t: this.instance_3, p: { y: -28 } }] }, 9).to({ state: [{ t: this.instance_3, p: { y: -22.5 } }] }, 2).to({ state: [{ t: this.instance_3, p: { y: -20.8 } }] }, 2).to({ state: [{ t: this.instance_3, p: { y: -22.5 } }] }, 3).to({ state: [{ t: this.instance_3, p: { y: -27.4 } }] }, 2).to({ state: [{ t: this.instance_3, p: { y: -29.6 } }] }, 2).wait(20));

                    this.instance_4 = new lib.james_wings01_1();
                    this.instance_4.setTransform(-309.5, -22.1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_4, p: { y: -22.1 } }] }).to({ state: [{ t: this.instance_4, p: { y: -21.6 } }] }, 9).to({ state: [{ t: this.instance_4, p: { y: -16.8 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: -11.8 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: -13.8 } }] }, 3).to({ state: [{ t: this.instance_4, p: { y: -18.8 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: -21.3 } }] }, 2).to({ state: [{ t: this.instance_4, p: { y: -22.1 } }] }, 2).wait(18));

                    this.shape_18 = new cjs.Shape();
                    this.shape_18.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAApXAhcDhIAAAbIlSB7AGvFPIk2hTIEzB4ACUluIgbJq");
                    this.shape_18.setTransform(-238.6, 101.2);

                    this.shape_19 = new cjs.Shape();
                    this.shape_19.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluQAaE8g1EuIEzB4AGvFPIk2hTAhcl2Qg0E9A0Ea");
                    this.shape_19.setTransform(-238.6, 101.2);

                    this.shape_20 = new cjs.Shape();
                    this.shape_20.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuEoIFShmIAAAbIlSB7ACUlXQBECmgSCFQgHAzgXBJQgOArghBiIEzB4AB5DdIE2BTAhcDCQiFj6CIkd");
                    this.shape_20.setTransform(-238.6, 104.2);

                    this.shape_21 = new cjs.Shape();
                    this.shape_21.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("ACUlFQBRCfgXB4QgIArgbBGQgnBlgLAjIEzB4AmuFGIFSh7IAAgbQgVgkgNgcQgZgzgJg1QgciaBjixAB5DLIE2BTAmuEWIFShm");
                    this.shape_21.setTransform(-238.6, 106);

                    this.shape_22 = new cjs.Shape();
                    this.shape_22.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuEoIFShmIAAAbIlSB7ACUlXQBGCpgSCVQgMBihDCUIEzB4AB5DdIE2BTAhZlVQiIEdCFD6");
                    this.shape_22.setTransform(-238.6, 104.2);

                    this.shape_23 = new cjs.Shape();
                    this.shape_23.graphics.f().s("#5E5548").ss(1.5, 1, 1).p("AmuFHIFShmIAAAbIlSB7ACUluIgbJqIEzB4AGvFPIk2hTAhcl2IAAJX");
                    this.shape_23.setTransform(-238.6, 101.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.shape_18 }] }).to({ state: [{ t: this.shape_19 }] }, 9).to({ state: [{ t: this.shape_20 }] }, 2).to({ state: [{ t: this.shape_21 }] }, 2).to({ state: [{ t: this.shape_22 }] }, 3).to({ state: [{ t: this.shape_19 }] }, 2).to({ state: [{ t: this.shape_23 }] }, 2).wait(20));

                    this.instance_5 = new lib.shadow();
                    this.instance_5.setTransform(-240.3, 133.7, 0.605, 0.786, 0, 0, 0, 68.9, 13.6);
                    this.instance_5.alpha = 0.102;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_5 }] }).wait(40));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-309.5, -142.6, 147, 286.9);

                (lib.WhiteOverlayText = function() {
                    this.initialize();

                    this.intro_btn = new lib.dum_btn();
                    this.intro_btn.setTransform(0, 0, 10.068, 6.418);
                    this.intro_btn.alpha = 0.012;

                    this.instance = new lib.Bitmap1();

                    this.addChild(this.instance, this.intro_btn);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 745, 430);

                (lib.tab_btn2 = function() {
                    this.initialize();

                    this.t_btn2 = new lib.dum_btn();
                    this.t_btn2.setTransform(0, 0, 1.107, 0.717);
                    this.t_btn2.alpha = 0.012;

                    this.instance = new lib.tab_button();

                    this.addChild(this.instance, this.t_btn2);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 83, 54);

                (lib.tab_btn1 = function() {
                    this.initialize();

                    this.t_btn1 = new lib.dum_btn();
                    this.t_btn1.setTransform(0, 0, 1.107, 0.717);
                    this.t_btn1.alpha = 0.012;

                    this.instance = new lib.tab_button();

                    this.addChild(this.instance, this.t_btn1);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 83, 54);

                (lib.Symbol3 = function() {
                    this.initialize();
                    this.txt_bdr = new lib.text_bdr();
                    this.txt_bdr.setTransform(347, 138.5);
                    this.txt_bdr.visible = false;
                    this.instructions_mc = new lib.inst_txt();
                    this.instructions_mc.setTransform(205, 95);
                    this.instance = new lib.page_3();
                    this.addChild(this.instance, this.instructions_mc, this.txt_bdr);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 694, 223);

                (lib.space_btn3 = function() {
                    this.initialize();
                    this.skip_btn3 = new lib.dum_btn();
                    this.skip_btn3.setTransform(0, 0, 1.594, 0.694);
                    this.skip_btn3.alpha = 0.012;
                    this.instance = new lib.key_space();
                    this.h3 = new lib.mc_yellow();

                    this.addChild(this.h3, this.instance, this.skip_btn3);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 121, 49);

                (lib.space_btn2 = function() {
                    this.initialize();

                    this.skip_btn2 = new lib.dum_btn();
                    this.skip_btn2.setTransform(0, 0, 1.594, 0.694);
                    this.skip_btn2.alpha = 0.012;

                    this.instance = new lib.key_space();

                    this.h2 = new lib.mc_yellow();

                    this.addChild(this.h2, this.instance, this.skip_btn2);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 121, 49);

                (lib.space_btn1 = function() {
                    this.initialize();

                    this.skip_btn1 = new lib.dum_btn();
                    this.skip_btn1.setTransform(0, 0, 1.594, 0.694);
                    this.skip_btn1.alpha = 0.012;

                    this.instance = new lib.key_space();

                    this.h1 = new lib.mc_yellow();

                    this.addChild(this.h1, this.instance, this.skip_btn1);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 121, 49);

                (lib.space_btn0 = function() {
                    this.initialize();

                    this.skip_btn1 = new lib.dum_btn();
                    this.skip_btn1.setTransform(0, 0, 1.594, 0.694);
                    this.skip_btn1.alpha = 0.012;

                    this.instance = new lib.key_space();

                    this.addChild(this.instance, this.skip_btn1);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 119, 47);

                (lib.RepeatWordOriginal = function() {
                    this.initialize();

                    this.rep_btn = new lib.dum_btn();
                    this.rep_btn.setTransform(0, 0, 2.297, 0.694);
                    this.rep_btn.alpha = 0.012;

                    this.instance = new lib.repeat();

                    this.r_h = new lib.btn_htr();
                    this.r_h.setTransform(85.2, 23.5, 3.459, 1.027);
                    this.r_h.visible = false;
                    this.addChild(this.r_h, this.instance, this.rep_btn);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 170, 47);

                (lib.mute_mc = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, f2: 1 });

                    this.frame_0 = function() {
                        this.stop();
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(1));

                    this.mute_btn = new lib.dum_btn();
                    this.mute_btn.setTransform(0, 0, 0.655, 0.687);
                    this.mute_btn.alpha = 0.012;

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.mute_btn }] }).wait(2));

                    this.instance = new lib.volume_button();

                    this.instance_1 = new lib.volume_button_muted();

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).wait(1));

                    this.m_h = new lib.btn_htr();
                    this.m_h.setTransform(24.5, 23.3);
                    this.m_h.visible = false;

                    this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.m_h }] }).wait(2));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 49, 47);

                (lib.home_mc = function() {
                    this.initialize();

                    this.home_btn = new lib.dum_btn();
                    this.home_btn.setTransform(0, 0, 0.655, 0.687);
                    this.home_btn.alpha = 0.012;

                    this.instance = new lib.home();

                    this.h_h = new lib.btn_htr();
                    this.h_h.setTransform(24.5, 23.3);
                    this.h_h.visible = false;
                    this.addChild(this.h_h, this.instance, this.home_btn);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 49, 47);

                (lib.GetDefinitionOriginal = function() {
                    this.initialize();

                    this.def_btn = new lib.dum_btn();
                    this.def_btn.setTransform(0, 0, 2.297, 0.694);
                    this.def_btn.alpha = 0.012;

                    this.instance = new lib.getDefinition();

                    this.d_h = new lib.btn_htr();
                    this.d_h.setTransform(85.2, 23.5, 3.459, 1.027);
                    this.d_h.visible = false;
                    this.addChild(this.d_h, this.instance, this.def_btn);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(0, 0, 170, 47);

                (lib.mc_win = function() {
                    this.initialize();

                    this.instance = new lib.wormsquirm();
                    this.instance.setTransform(31.6, 16);

                    this.instance_1 = new lib.Robot_Cycle();
                    this.instance_1.setTransform(118.9, -26.7, 1, 1, 0, 0, 0, 127.9, 10);

                    this.instance_2 = new lib.James_Cycle();
                    this.instance_2.setTransform(-280, 12.3, 1, 1, 0, 0, 0, -279.1, 14.1);

                    this.instance_3 = new lib.flightofthebutterfly();
                    this.instance_3.setTransform(-383.4, -86.4, 1, 1, 0, 0, 0, -384.4, -115.9);

                    this.instance_4 = new lib.Mary_Cycle();
                    this.instance_4.setTransform(289.7, -1.3, 1, 1, 0, 0, 0, 290.7, 1.1);

                    this.instance_5 = new lib.Mindy_Celeb();
                    this.instance_5.setTransform(-74.7, -1.9, 1, 1, 0, 0, 0, -73.8, 39.6);

                    this.instance_6 = new lib.nohivebg();
                    this.instance_6.setTransform(-372.6, -216.5);

                    this.addChild(this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-393.5, -216.5, 804.2, 430);

                (lib.robot_master = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "f2": 1, f3: 2, f4: 3, f5: 4 });

                    this.frame_0 = function() {
                        this.stop();
                        this.robot_mc1.gotoAndPlay("play");
                    }
                    this.frame_1 = function() {
                        this.stop();
                        this.robot_mc2.gotoAndPlay("play");
                    }
                    this.frame_2 = function() {
                        this.stop();
                        this.robot_mc3.gotoAndPlay("play");
                    }
                    this.frame_3 = function() {
                        this.stop();
                        this.robot_mc4.gotoAndPlay("play");
                    }
                    this.frame_24 = function() {
                        this.parent.gotoAndStop("stage");
                        this.gotoAndStop("f1");
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(21).call(this.frame_24));

                    this.robot_mc1 = new lib.robot_lookdown();
                    this.robot_mc1.setTransform(0, 0.1);

                    this.robot_mc2 = new lib.robot_talk();
                    this.robot_mc2.setTransform(4, -39.3, 1, 1, 0, 0, 0, 4, -39.5);

                    this.robot_mc3 = new lib.robot_shake();

                    this.robot_mc4 = new lib.robot_talk2();
                    this.robot_mc4.setTransform(4, -39.3, 1, 1, 0, 0, 0, 4, -39.5);

                    this.robot_mc5 = new lib.robot_static();
                    this.robot_mc5.setTransform(4, -39.3, 1, 1, 0, 0, 0, 4, -39.5);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.robot_mc1 }] }).to({ state: [{ t: this.robot_mc2 }] }, 1).to({ state: [{ t: this.robot_mc3 }] }, 1).to({ state: [{ t: this.robot_mc4 }] }, 1).to({ state: [{ t: this.robot_mc5 }] }, 1).wait(21));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-64.4, -185.9, 137, 292.9);

                (lib.mindy_shuffles = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, play1: 1, play2: 37, play3: 127 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_36 = function() {
                        this.gotoAndStop("f1")
                    }
                    this.frame_126 = function() {
                        this.gotoAndStop("f1")
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(36).call(this.frame_36).wait(90).call(this.frame_126).wait(45));

                    this.instance = new lib.mindy_shuffle1("synched", 0, false);
                    this.instance.setTransform(100.5, 125.2, 1, 1, 0, 0, 0, 8.3, 32);

                    this.instance_1 = new lib.mindy_shuffle2("synched", 0, false);
                    this.instance_1.setTransform(92.2, 93.2);

                    this.instance_2 = new lib.mindy_shuffle3("synched", 0, false);
                    this.instance_2.setTransform(100.5, 125.2, 1, 1, 0, 0, 0, 8.3, 32);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 37).to({ state: [{ t: this.instance_2 }] }, 90).wait(45));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 200.9, 251.3);

                (lib.mindy_movement = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play1": 1, "play2": 40 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_39 = function() {
                        this.gotoAndStop("f1")
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(39).call(this.frame_39).wait(40));

                    this.instance = new lib.mindy_move1("synched", 0, false);
                    this.instance.setTransform(92.2, 93.2);

                    this.instance_1 = new lib.mindy_move2("synched", 0, false);
                    this.instance_1.setTransform(92.2, 93.2);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 40).wait(40));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-4.3, 0, 215.6, 251.3);

                (lib.mary_shuffles = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play1": 1, "play2": 24, "play3": 70 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_23 = function() {
                        this.gotoAndStop("f1")
                    }
                    this.frame_69 = function() {
                        this.gotoAndStop("f1")
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(23).call(this.frame_23).wait(46).call(this.frame_69).wait(35));

                    this.instance = new lib.mary_shuffle1("synched", 0, false);
                    this.instance.setTransform(50, 145.6, 1, 1, 0, 0, 0, 229.8, 1);

                    this.instance_1 = new lib.mary_shuffle2("synched", 0, false);
                    this.instance_1.setTransform(50, 145.6, 1, 1, 0, 0, 0, 229.8, 1);

                    this.instance_2 = new lib.mary_shuffle3("synched", 0, false);
                    this.instance_2.setTransform(50.1, 145.6, 1, 1, 0, 0, 0, 229.8, 1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 24).to({ state: [{ t: this.instance_2 }] }, 46).wait(35));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 100.2, 291.9);

                (lib.mary_movement = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play1": 1, "play2": 52 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_51 = function() {
                        this.gotoAndStop("f1")
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(51).call(this.frame_51).wait(41));

                    this.instance = new lib.mary_blink_2();
                    this.instance.setTransform(-0.5, 49);

                    this.timeline.addTween(cjs.Tween.get(this.instance, { override: true }).to({ _off: true }, 1).wait(92));

                    this.instance_1 = new lib.mary_move1("synched", 0, false);
                    this.instance_1.setTransform(-180.3, 144.6);

                    this.instance_2 = new lib.mary_move2("synched", 0);
                    this.instance_2.setTransform(49.9, 145.6, 1, 1, 0, 0, 0, 230.2, 1);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance_1 }] }).to({ state: [{ t: this.instance_2 }] }, 52).wait(41));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(-3.2, -1.1, 108.5, 293.1);

                (lib.james_shuffles = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play1": 1, "play2": 75, "play3": 135, play4: 177 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_74 = function() {
                        this.gotoAndStop("f1")
                    }
                    this.frame_134 = function() {
                        this.gotoAndStop("f1")
                    }
                    this.frame_176 = function() {
                        this.gotoAndStop("f1")
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(74).call(this.frame_74).wait(60).call(this.frame_134).wait(42).call(this.frame_176).wait(57));

                    this.instance = new lib.james_shuffle1("synched", 0, false);
                    this.instance.setTransform(73.6, 143.1, 1, 1, 0, 0, 0, -236, 0.4);

                    this.instance_1 = new lib.james_shuffle2("synched", 0, false);
                    this.instance_1.setTransform(73.6, 143.2, 1, 1, 0, 0, 0, -236, 0.4);

                    this.instance_2 = new lib.james_shuffle3("synched", 0, false);
                    this.instance_2.setTransform(73.6, 143.2, 1, 1, 0, 0, 0, -236, 0.4);

                    this.instance_3 = new lib.james_shuffle4("synched", 0, false);
                    this.instance_3.setTransform(73.6, 143.2, 1, 1, 0, 0, 0, -236, 0.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 75).to({ state: [{ t: this.instance_2 }] }, 60).to({ state: [{ t: this.instance_3 }] }, 42).wait(57));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, 0, 147, 286.9);

                (lib.james_movement = function(mode, startPosition, loop) {
                    this.initialize(mode, startPosition, loop, { "f1": 0, "play1": 1, "play2": 40 });

                    this.frame_0 = function() {
                        this.stop();
                    }
                    this.frame_39 = function() {
                        this.gotoAndStop("f1")
                    }

                    this.timeline.addTween(cjs.Tween.get(this, { override: true }).call(this.frame_0).wait(39).call(this.frame_39).wait(70));

                    this.instance = new lib.james_move1("synched", 0, false);
                    this.instance.setTransform(73.6, 143.2, 1, 1, 0, 0, 0, -236, 0.4);

                    this.instance_1 = new lib.james_move2("synched", 0, false);
                    this.instance_1.setTransform(73.6, 143.2, 1, 1, 0, 0, 0, -236, 0.4);

                    this.timeline.addTween(cjs.Tween.get({ override: true }).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 40).wait(70));

                }).prototype = p = new cjs.MovieClip();
                p.nominalBounds = new cjs.Rectangle(0, -0.3, 147, 287.4);

                (lib.mindy_master = function() {
                    this.initialize();

                    this.mindy_h = new lib.mindy_h();
                    this.mindy_h.setTransform(-0.5, -126.3);
                    this.mindy_h.visible = false;

                    this.mindy_btn = new lib.dum_btn();
                    this.mindy_btn.setTransform(-100.4, -251.2, 2.704, 3.746);
                    this.mindy_btn.alpha = 0.012;

                    this.mindy_mouth = new lib.mindy_mouthOnly();
                    this.mindy_mouth.setTransform(-16.9, -127.2);

                    this.mindy_wrong = new lib.mindy_wrong();
                    this.mindy_wrong.setTransform(-8.2, -158);
                    this.mindy_wrong.visible = false;

                    this.mindy_right = new lib.mindy_right();
                    this.mindy_right.setTransform(-8.2, -158);
                    this.mindy_right.visible = false;

                    this.mindy_shuffle = new lib.mindy_shuffles();
                    this.mindy_shuffle.setTransform(-100.4, -251.2);
                    this.mindy_shuffle.visible = false;

                    this.mindy_move = new lib.mindy_movement();
                    this.mindy_move.setTransform(-100.4, -251.2);

                    this.addChild(this.mindy_move, this.mindy_shuffle, this.mindy_right, this.mindy_wrong, this.mindy_mouth, this.mindy_btn, this.mindy_h);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-100.4, -251.2, 200.9, 251.3);

                (lib.mary_master = function() {
                    this.initialize();

                    this.mary_h = new lib.mary_h();
                    this.mary_h.setTransform(2, -147.4);
                    this.mary_h.visible = false;

                    this.mary_btn = new lib.dum_btn();
                    this.mary_btn.setTransform(-50.4, -245.2, 1.34, 3.642);
                    this.mary_btn.alpha = 0.012;

                    this.mary_mouth = new lib.mary_mouthOnly();
                    this.mary_mouth.setTransform(-21.8, -173.7);

                    this.mary_wrong = new lib.mary_wrong();
                    this.mary_wrong.setTransform(0.1, -146.2, 1, 1, 0, 0, 0, 230.2, 1);
                    this.mary_wrong.visible = false;

                    this.mary_right = new lib.mary_right();
                    this.mary_right.setTransform(-6.4, -144.3, 1, 1, 0, 0, 0, 223.6, 2.9);
                    this.mary_right.visible = false;

                    this.mary_shuffle = new lib.mary_shuffles();
                    this.mary_shuffle.setTransform(-91, -146.2, 1, 1, 0, 0, 0, -40.3, 145.6);
                    this.mary_shuffle.visible = false;

                    this.mary_move = new lib.mary_movement();
                    this.mary_move.setTransform(-90, -146.2, 1, 1, 0, 0, 0, -40.3, 145.6);

                    this.addChild(this.mary_move, this.mary_shuffle, this.mary_right, this.mary_wrong, this.mary_mouth, this.mary_btn, this.mary_h);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-50.4, -291.8, 100.3, 291.9);

                (lib.james_master = function() {
                    this.initialize();

                    this.james_h = new lib.james_h();
                    this.james_h.setTransform(0, -143.1);
                    this.james_h.visible = false;

                    this.james_btn = new lib.dum_btn();
                    this.james_btn.setTransform(-50.4, -235.2, 1.286, 3.505);
                    this.james_btn.alpha = 0.012;

                    this.james_mouth = new lib.james_mouthOnly();
                    this.james_mouth.setTransform(-26.6, -228.1);

                    this.james_wrong = new lib.james_wrong();
                    this.james_wrong.setTransform(0.1, -143.6, 1, 1, 0, 0, 0, -236, 0.4);
                    this.james_wrong.visible = false;

                    this.james_right = new lib.james_right();
                    this.james_right.setTransform(0.1, -143.6, 1, 1, 0, 0, 0, -236, 0.4);
                    this.james_right.visible = false;

                    this.james_shuffle = new lib.james_shuffles();
                    this.james_shuffle.setTransform(0, -143.6, 1, 1, 0, 0, 0, 73.5, 143.1);
                    this.james_shuffle.visible = false;

                    this.james_move = new lib.james_movement();
                    this.james_move.setTransform(0, -143.7, 1, 1, 0, 0, 0, 73.5, 143.1);

                    this.addChild(this.james_move, this.james_shuffle, this.james_right, this.james_wrong, this.james_mouth, this.james_btn, this.james_h);
                }).prototype = p = new cjs.Container();
                p.nominalBounds = new cjs.Rectangle(-73.4, -286.9, 147, 287);
                myInit();
            }

            function getIE() {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf('MSIE ');
                var trident = ua.indexOf('Trident/');

                if (msie > 0) {
                    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                }
                if (trident > 0) {
                    var rv = ua.indexOf('rv:');
                    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                }
                return 0;
            }

            var lib, canvas, stage, exportRoot, images;
            var inputTxt, defText, corrText, incorrText, domInputTxt, domTxt1, domTxt2, domTxt3, selectedBee, beeName, charSnd, crntWord, ansFlag, gameWin, intId;
            var intervalId1, intervalId2, intervalId3, timeoutId1, vocWordLen, rndNum = 0,
                num = 0,
                keyevent, typedStr, isAndroid = false,
                volMuted = false;
            var myLetters = [],
                vocabWordArr = [],
                vocabDefinArr = [],
                sndUrl = [];
            var sndInst1, sndInst2, winSnd, wordSnd;
            var tempText, tabNum = 1;

            function myInit() {
                vocWordLen = _vocabWordArr.length;
                for (var i = 0; i < vocWordLen; i++) {
                    vocabWordArr.push(_vocabWordArr[i]);
                    vocabDefinArr.push(_vocabDefinArr[i]);
                    sndUrl.push(_sndUrl[i]);
                }
                canvas = overlay.find("canvas")[0];
                images = images || {};
                jq.each(config.manifest.tiles, function(itemIndex, itemValue) {
                    images[itemValue.id] = tilesData.find("." + itemValue.id)[0];
                })
                domTxt1 = new cjs.DOMElement(defText);
                domTxt2 = new cjs.DOMElement(corrText);
                domTxt3 = new cjs.DOMElement(incorrText);
                domInputTxt = new cjs.DOMElement(inputTxt);
                handleComplete();
            }

            function handleFileLoad(evt) {
                if (evt.item.type == "image") {
                    images
                        [evt.item.id] = evt.result;
                }
            }

            function handleComplete() {
                loader.hide();
                exportRoot = new lib.spellingbee();
                stage = new cjs.Stage(canvas);
                stage.addChild(exportRoot);
                stage.autoClear = true;
                stage.update();
                stage.enableMouseOver(10);
                cjs.Ticker.setFPS(30);
                cjs.Ticker.addEventListener("tick", stage);
                startActivity();
                exportRoot.txt_con.addChild(domInputTxt);
                exportRoot.txt_con.visible = false;
                exportRoot.def_txt_con.addChild(domTxt1);
                exportRoot.def_txt_con.visible = false;
                defText.setAttribute("readonly", "readonly");
                exportRoot.correct_txt_con.addChild(domTxt2);
                exportRoot.correct_txt_con.addChild(domTxt3);
                exportRoot.correct_txt_con.visible = false;
                corrText.setAttribute("readonly", "readonly");
                incorrText.setAttribute("readonly", "readonly");
            }

            function playSound(id, loop) {
                sndInst1 = cjs.Sound.play(id, cjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
            }

            function startActivity() {
                exportRoot.begin_movie.intro_btn.cursor = "pointer";
                exportRoot.begin_movie.intro_btn.addEventListener("click", beginMovieClick);
                exportRoot.james_mc.james_btn.cursor = "pointer";
                exportRoot.james_mc.james_btn.addEventListener("mouseover", beeBtnMouseOverEvent);
                exportRoot.james_mc.james_btn.addEventListener("click", beeBtnClickEvent);
                exportRoot.james_mc.james_btn.name = "james";
                exportRoot.james_mc.toX = exportRoot.james_mc.x;
                exportRoot.james_mc.toY = exportRoot.james_mc.y;
                exportRoot.mindy_mc.mindy_btn.cursor = "pointer";
                exportRoot.mindy_mc.mindy_btn.addEventListener("mouseover", beeBtnMouseOverEvent);
                exportRoot.mindy_mc.mindy_btn.addEventListener("click", beeBtnClickEvent);
                exportRoot.mindy_mc.mindy_btn.name = "mindy";
                exportRoot.mindy_mc.toX = exportRoot.mindy_mc.x;
                exportRoot.mindy_mc.toY = exportRoot.mindy_mc.y;
                exportRoot.mary_mc.mary_btn.cursor = "pointer";
                exportRoot.mary_mc.mary_btn.addEventListener("mouseover", beeBtnMouseOverEvent);
                exportRoot.mary_mc.mary_btn.addEventListener("click", beeBtnClickEvent);
                exportRoot.mary_mc.mary_btn.name = "mary";
                exportRoot.mary_mc.toX = exportRoot.mary_mc.x;
                exportRoot.mary_mc.toY = exportRoot.mary_mc.y;
                exportRoot.getdefinition_mc.def_btn.cursor = "pointer";
                exportRoot.getdefinition_mc.def_btn.addEventListener("click", definBtnClickEvent);
                exportRoot.repeatword_mc.rep_btn.cursor = "pointer";
                exportRoot.repeatword_mc.rep_btn.addEventListener("click", repeatBtnClickEvent);
                exportRoot.spacebar_mc1.skip_btn1.cursor = "pointer";
                exportRoot.spacebar_mc1.skip_btn1.addEventListener("click", skipBtn1ClickEvent);
                exportRoot.spacebar_mc2.skip_btn2.cursor = "pointer";
                exportRoot.spacebar_mc2.skip_btn2.addEventListener("click", skipBtn2ClickEvent);
                exportRoot.spacebar_mc3.skip_btn3.cursor = "pointer";
                exportRoot.spacebar_mc3.skip_btn3.addEventListener("click", skipBtn3ClickEvent);
                exportRoot.home_mc.home_btn.cursor = "pointer";
                exportRoot.home_mc.home_btn.addEventListener("click", homeBtnClickEvent);
                exportRoot.mute_mc.mute_btn.cursor = "pointer";
                exportRoot.mute_mc.mute_btn.addEventListener("click", muteBtnClickEvent);
                document.addEventListener("mousedown", _stageMouseDownEvent);
                var useragent = navigator.userAgent.toLowerCase();
                canvas.setAttribute("tabindex", "0");
                canvas.style.outline = "none";
                canvas.style.boarder = "0";
                rndNum = Math.round(Math.random() * (vocabWordArr.length - 1));
                if (useragent.indexOf('android') != -1) {
                    keyevent = "keyup";
                    isAndroid = true;
                } else {
                    keyevent = "keypress";
                }
                canvas.addEventListener('keydown', spaceStart);
                canvas.focus();
            }

            function spaceStart(e) {
                if (e.keyCode == 13 || e.keyCode == 32) {
                    canvas.removeEventListener('keydown', spaceStart);
                    beginMovieClick();
                }
            }

            function _stageMouseDownEvent(e) {
                hideHighlighter();
            }

            function hideHighlighter() {
                exportRoot.james_mc.james_h.visible = false;
                exportRoot.mindy_mc.mindy_h.visible = false;
                exportRoot.mary_mc.mary_h.visible = false;
                exportRoot.mute_mc.m_h.visible = false;
                exportRoot.repeatword_mc.r_h.visible = false;
                exportRoot.getdefinition_mc.d_h.visible = false;
                exportRoot.home_mc.h_h.visible = false;
                exportRoot.mcInput.txt_bdr.visible = false;
                tabNum = 1;
            }

            function definBtnClickEvent(e) {
                showDefinitionWin();
            }

            function showDefinitionWin() {
                exportRoot.gotoAndStop("definition");
                exportRoot.def_txt_con.visible = true;
                defText.value = vocabDefinArr[rndNum];
                exportRoot.txt_con.visible = false;
                inputTxt.removeEventListener(keyevent, checkKeyPressed, false);
                canvas.addEventListener("mousedown", stageMouseDownEvent);
                canvas.removeEventListener("keydown", tabKeyPressed3, false);
                inputTxt.removeEventListener("keydown", tabKeyPressed3, false);
                canvas.addEventListener("keydown", tabKeyPressed6, false);
                defText.addEventListener("keydown", tabKeyPressed6, false);
                canvas.focus();
                exportRoot.spacebar_mc2.h2.visible = true;
            }

            function tabKeyPressed6(e) {
                if (e.keyCode == 9) {
                    canvas.focus();
                    if (tabNum == 1) {
                        exportRoot.spacebar_mc2.h2.visible = true
                        screenRead("Go Back. Press spacebar to return to the spell word screen.");
                        tabNum++;
                    } else {
                        exportRoot.spacebar_mc2.h2.visible = false;
                        defText.focus();
                        tabNum = 1;
                    }
                } else if (e.keyCode == 13 || e.keyCode == 32) {
                    if (exportRoot.spacebar_mc2.h2.visible) {
                        gotoStage(true);
                        hideHighlighter();
                    }
                }
                e.preventDefault();
            }

            function repeatBtnClickEvent(e) {
                setTimeout(textAutoFocus, 500);
                repeatWordSnd();
            }

            function repeatWordSnd() {
                wordSnd.play();
                wordSnd.addEventListener("ended", handleComplete5);
                sndInst2 = wordSnd;
            }

            function handleComplete5(e) {
                sndInst2 = null;
            }

            function skipBtn1ClickEvent(e) {
                exportRoot.gotoAndStop("stage");
                if (sndInst2) {
                    sndInst2.stop();
                }
                startTyping();
                hideHighlighter();
            }

            function spceKeyDownEvent1(e) {
                if (e.keyCode == 13 && exportRoot.spacebar_mc1.h1.visible || e.keyCode == 32 && exportRoot.spacebar_mc1.h1.visible) {
                    exportRoot.gotoAndStop("stage");
                    if (sndInst2) {
                        sndInst2.stop();
                    }
                    startTyping();
                    hideHighlighter();
                    e.preventDefault();
                }
            }

            function skipBtn2ClickEvent(e) {
                gotoStage(true);
                hideHighlighter();
            }

            function gotoStage(keepText) {
                exportRoot.gotoAndStop("stage");
                exportRoot.home_mc.home_btn.visible = true;
                exportRoot.getdefinition_mc.def_btn.visible = true;
                exportRoot.repeatword_mc.rep_btn.visible = true;
                exportRoot.def_txt_con.visible = false;
                exportRoot.txt_con.visible = true;
                inputTxt.addEventListener(keyevent, checkKeyPressed, false);
                setTimeout(textAutoFocus, 500);
                if (!keepText) inputTxt.value = '';
                canvas.removeEventListener("mousedown", stageMouseDownEvent);
                canvas.addEventListener("keydown", tabKeyPressed3, false);
                inputTxt.addEventListener("keydown", tabKeyPressed3, false);
                canvas.removeEventListener("keydown", tabKeyPressed6, false);
                defText.removeEventListener("keydown", tabKeyPressed6, false);
            }

            function skipBtn3ClickEvent(e) {
                if (sndInst2) {
                    sndInst2.stop();
                    robotSound.stop();
                }
                loadNext();
                canvas.removeEventListener("keydown", tabKeyPressed5, false);
            }

            function stageMouseDownEvent(e) {
                exportRoot.spacebar_mc2.h2.visible = false;
                exportRoot.spacebar_mc3.h3.visible = false;
            }

            function homeBtnClickEvent(e) {
                gotoMainMenu();
            }

            function gotoMainMenu() {
                if (sndInst2) {
                    sndInst2.stop();
                }
                clearInterval(intervalId1);
                clearInterval(intervalId2);
                clearInterval(intervalId3);
                clearTimeout(timeoutId1);
                exportRoot.txt_con.visible = false;
                selectedBee[beeName + "_move"].visible = true;
                selectedBee[beeName + "_right"].visible = false;
                selectedBee[beeName + "_wrong"].visible = false;
                selectedBee[beeName + "_shuffle"].visible = false;
                selectedBee[beeName + "_mouth"].gotoAndStop("f1");
                selectedBee.x = selectedBee.toX;
                selectedBee.y = selectedBee.toY;
                exportRoot.james_mc.james_btn.visible = true;
                exportRoot.mindy_mc.mindy_btn.visible = true;
                exportRoot.mary_mc.mary_btn.visible = true;
                exportRoot.mcInput.visible = false;
                exportRoot.home_mc.visible = false;
                exportRoot.getdefinition_mc.visible = false;
                exportRoot.repeatword_mc.visible = false;
                exportRoot.mindy_mc.visible = true;
                exportRoot.james_mc.visible = true;
                exportRoot.mary_mc.visible = true;
                if (gameWin) {
                    exportRoot.removeChild(gameWin);
                    winSnd.stop();
                    winSnd = null;
                    vocWordLen = _vocabWordArr.length;
                    vocabWordArr = [];
                    vocabDefinArr = [];
                    sndUrl = [];
                    for (var i = 0; i < vocWordLen; i++) {

                        vocabWordArr.push(_vocabWordArr[i]);
                        vocabDefinArr.push(_vocabDefinArr[i]);
                        sndUrl.push(_sndUrl[i]);
                    }
                }
                canvas.removeEventListener("keydown", tabKeyPressed3, false);
                inputTxt.removeEventListener("keydown", tabKeyPressed3, false);
                canvas.removeEventListener("keydown", tabKeyPressed4, false);
                hideHighlighter();
                initMode();
            }

            function muteBtnClickEvent(e) {
                _setVolume(e.currentTarget);
            }

            function _setVolume(tgt) {
                if (!tgt.clicked) {
                    tgt.parent.gotoAndStop("f2");
                    tgt.clicked = true;
                    volMuted = true;
                    volumeMuted(0);
                } else {
                    tgt.parent.gotoAndStop("f1");
                    tgt.clicked = false;
                    volMuted = false;
                    volumeMuted(1);
                }
            }

            function checkVol(e) {
                volumeMuted(volMuted);
            }

            function volumeMuted(vol) {
                for (var i = 0; i < soundArr.length; i++) {
                    soundArr[i].volume(vol);
                }

                backupAudio.volume = vol;

                jamesSndInstance.volume(vol);
                mindySndInstance.volume(vol);
                marySndInstance.volume(vol);
                robotSndInstance.volume(vol);

            }

            function beginMovieClick(e) {
                backupAudio.src = config.assetBasePath + '/dla_spellingbee/media/act-audio-init.mp3';
                backupAudio.play();
                tilesData.show();
                initMode();
            }

            function initMode() {
                canvas.addEventListener("keydown", tabKeyPressed1, false);
                var con = $(self.element.parentNode.parentNode.firstChild)
                    //console.log(con)
                if (con.hasClass('ui-dialog-titlebar')) {
                    //con.find('button').attr({tabIndex: '-1'})
                }
                //console.log(self.element.parentNode.parentNode.firstChild)
                exportRoot.gotoAndStop("select");
            }

            function tabKeyPressed1(e) {
                if (e.keyCode == 9) {
                    if (tabNum == 1) {
                        exportRoot.james_mc.james_h.visible = true;
                        exportRoot.mute_mc.m_h.visible = false;
                        screenRead("James. A tall thin bee with a striped shirt and glasses.");
                        char1RandMove();
                    } else if (tabNum == 2) {
                        exportRoot.mindy_mc.mindy_h.visible = true;
                        exportRoot.james_mc.james_h.visible = false;
                        screenRead("Mandy. A small bee with red hair and pigtails.");
                        char2RandMove();
                    } else if (tabNum == 3) {
                        exportRoot.mary_mc.mary_h.visible = true;
                        exportRoot.mindy_mc.mindy_h.visible = false;
                        screenRead("Mindy. Mandy's older sister She is tall with purple hair and a black dress.");
                        char3RandMove();
                    } else {
                        exportRoot.james_mc.james_h.visible = false;
                        exportRoot.mindy_mc.mindy_h.visible = false;
                        exportRoot.mary_mc.mary_h.visible = false;
                        exportRoot.mute_mc.m_h.visible = true;
                        screenRead("Mute. This will mute the in-game sounds.");
                        tabNum = 0;
                    }
                    tabNum++;
                } else if (e.keyCode == 13 || e.keyCode == 32) {
                    if (exportRoot.james_mc.james_h.visible) {
                        exportRoot.james_mc.james_btn.visible = false;
                        beeName = exportRoot.james_mc.james_btn.name;
                        selectedBee = exportRoot[beeName + "_mc"];
                        startGame();
                    } else if (exportRoot.mindy_mc.mindy_h.visible) {
                        exportRoot.mindy_mc.mindy_btn.visible = false;
                        beeName = exportRoot.mindy_mc.mindy_btn.name;
                        selectedBee = exportRoot[beeName + "_mc"];
                        startGame();
                    } else if (exportRoot.mary_mc.mary_h.visible) {
                        exportRoot.mary_mc.mary_btn.visible = false;
                        beeName = exportRoot.mary_mc.mary_btn.name;
                        selectedBee = exportRoot[beeName + "_mc"];
                        startGame();
                    } else if (exportRoot.mute_mc.m_h.visible) {
                        _setVolume(exportRoot.mute_mc.mute_btn);
                    }
                }
                e.preventDefault();
            }

            function screenRead(str) {
                var wait = 100;
                if (getIE() != 0) {
                    wait = 300;
                }
                canvas.blur();
                jq(canvas).attr("title", str);
                canvas.focus();
                setTimeout(function() {
                    jq(canvas).attr("title", "");
                }, wait)
            }

            function beeBtnMouseOverEvent(e) {
                if (e.currentTarget.name == "james") {
                    char1RandMove();
                } else if (e.currentTarget.name == "mindy") {
                    char2RandMove();
                } else {
                    char3RandMove();
                }
            }

            function char1RandMove() {
                var r = 1 + Math.round(Math.random() * 1);
                exportRoot.james_mc.james_move.gotoAndPlay("play" + r);
                exportRoot.james_mc.james_move.cache(0, 0, canvas.width, canvas.height);
                exportRoot.james_mc.james_move.uncache();
                if (r == 1) {
                    playMoveSnd(5);
                } else {
                    playMoveSnd(0);
                }
            }

            function char2RandMove() {
                var r = 1 + Math.round(Math.random() * 1);
                exportRoot.mindy_mc.mindy_move.gotoAndPlay("play" + r);
                exportRoot.mindy_mc.mindy_move.cache(0, 0, canvas.width, canvas.height);
                exportRoot.mindy_mc.mindy_move.uncache();
                if (r == 1) {} else {
                    playMoveSnd(15);
                }
            }

            function char3RandMove() {
                var r = 1 + Math.round(Math.random() * 1);
                exportRoot.mary_mc.mary_move.gotoAndPlay("play" + r);
                exportRoot.mary_mc.mary_move.cache(0, 0, canvas.width, canvas.height);
                exportRoot.mary_mc.mary_move.uncache();
                if (r == 1) {
                    playMoveSnd(13);
                } else {
                    playMoveSnd(4);
                }
            }

            function playMoveSnd(i) {
                sndInst1 = soundArr[i];
                soundArr[i].play();
            }

            function beeBtnClickEvent(e) {
                e.currentTarget.visible = false;
                beeName = e.currentTarget.name;
                selectedBee = exportRoot[beeName + "_mc"];
                startGame();
            }

            function startGame() {
                if (sndInst1) {
                    sndInst1.stop();
                }
                clearInterval(intervalId1);
                clearInterval(intervalId2);
                clearInterval(intervalId3);
                exportRoot.gotoAndStop("robot");
                exportRoot.mute_mc.visible = true;
                exportRoot.robotRoot_mc.robot_mc1.gotoAndPlay("play");
                exportRoot.robotRoot_mc.robot_mc1.cache(0, 0, canvas.width, canvas.height);
                exportRoot.robotRoot_mc.robot_mc1.uncache();
                selectedBee[beeName + "_move"].visible = false;
                selectedBee[beeName + "_right"].visible = false;
                selectedBee[beeName + "_wrong"].visible = false;
                selectedBee[beeName + "_shuffle"].visible = true;
                var snd = soundArr[10];
                snd.play();
                snd.addEventListener("ended", handleComplete1);
                crntWord = vocabWordArr[rndNum];
                exportRoot.mcInput.instructions_mc.visible = true;
                inputTxt.removeAttribute("readonly", "readonly");
                inputTxt.style.color = "#000";
                inputTxt.value = "";
                exportRoot.spacebar_mc1.h1.visible = true;
                canvas.addEventListener("keydown", spceKeyDownEvent1, false);
                canvas.removeEventListener("keydown", tabKeyPressed1, false);
                canvas.addEventListener("keydown", tabKeyPressed2, false);
                hideHighlighter();
                canvas.focus();
                sndInst2 = snd;
                wordSnd = backupAudio;
                backupAudio.src = sndUrl[rndNum];
            }

            function tabKeyPressed2(e) {
                if (e.keyCode == 9) {
                    if (tabNum == 1) {
                        exportRoot.spacebar_mc1.h1.visible = false;
                        exportRoot.mute_mc.m_h.visible = true;
                        screenRead("Mute. This will mute the in-game sounds.");
                    } else {
                        exportRoot.spacebar_mc1.h1.visible = true;
                        exportRoot.mute_mc.m_h.visible = false;
                        screenRead("The Robot is reading the word. Press spacebar to skip the reading of the word.");
                        tabNum = 0;
                    }
                    tabNum++;
                } else if (e.keyCode == 13 || e.keyCode == 32) {
                    if (exportRoot.mute_mc.m_h.visible) {
                        _setVolume(exportRoot.mute_mc.mute_btn);
                    }
                }
                e.preventDefault();
            }

            function handleComplete1(e) {
                var snd = soundArr[9];
                snd.play();
                snd.addEventListener("ended", handleComplete2);
                sndInst2 = snd;
            }

            function handleComplete2(e) {
                var snd = soundArr[11];
                snd.play();
                snd.addEventListener("ended", handleComplete3);
                sndInst2 = snd;
            }

            function handleComplete3(e) {
                timeoutId1 = setTimeout(playWordSnd, 100);
            }

            function playWordSnd() {
                clearTimeout(timeoutId1);
                wordSnd.play()
                wordSnd.addEventListener("ended", handleComplete4);
                sndInst2 = wordSnd;
            }

            function handleComplete4(e) {
                exportRoot.robotRoot_mc.gotoAndPlay("f5");
                exportRoot.robotRoot_mc.cache(0, 0, canvas.width, canvas.height);
                exportRoot.robotRoot_mc.uncache();
                timeoutId1 = setTimeout(startTyping, 800);
                sndInst2 = null;
            }

            function startTyping() {
                clearInterval(intervalId1);
                clearInterval(intervalId2);
                clearInterval(intervalId3);
                clearTimeout(timeoutId1);
                selectedBee.visible = true;
                selectedBee.x = 745 / 2;
                selectedBee.y = 350;
                exportRoot.txt_con.visible = true;
                inputTxt.style.visibility = 'visible';
                setTimeout(textAutoFocus, 500);
                inputTxt.addEventListener(keyevent, checkKeyPressed, false);
                intervalId1 = setInterval(charRandShuffle, 10000);
                exportRoot.mcInput.instructions_mc.visible = true;
                exportRoot.home_mc.home_btn.visible = true;
                exportRoot.getdefinition_mc.def_btn.visible = true;
                exportRoot.repeatword_mc.rep_btn.visible = true;
                exportRoot.getdefinition_mc.visible = true;
                exportRoot.repeatword_mc.visible = true;
                canvas.removeEventListener("keydown", spceKeyDownEvent1, false);
                canvas.removeEventListener("keydown", tabKeyPressed2, false);
                canvas.addEventListener("keydown", tabKeyPressed3, false);
                inputTxt.addEventListener("keydown", tabKeyPressed3, false);
                hideHighlighter();
                inputTxt.onfocus = function() {
                    tabNum = 2;
                };
            }

            function tabKeyPressed3(e) {
                if (e.keyCode == 9) {
                    if (tabNum == 1) {
                        exportRoot.mute_mc.m_h.visible = false;
                        exportRoot.mcInput.txt_bdr.visible = true;
                        inputTxt.focus();
                        jq(inputTxt).attr("title", inputTxt.value);
                        setTimeout(function() {
                            jq(inputTxt).attr("title", "");
                        }, 100)
                    } else if (tabNum == 2) {
                        exportRoot.mcInput.txt_bdr.visible = false;
                        exportRoot.getdefinition_mc.d_h.visible = true;
                        screenRead("Get Definition. This will give you the definition for the word you must spell.");
                        tabNum++;
                    } else if (tabNum == 3) {
                        exportRoot.repeatword_mc.r_h.visible = true;
                        exportRoot.getdefinition_mc.d_h.visible = false;
                        screenRead("Repeat the Word. Hear the word again.");
                        canvas.focus();
                        tabNum++;
                    } else if (tabNum == 4) {
                        exportRoot.home_mc.h_h.visible = true;
                        exportRoot.repeatword_mc.r_h.visible = false;
                        screenRead("Return Home. This will take you to the Choose Bee screen.");
                        canvas.focus();
                        tabNum++;
                    } else {
                        exportRoot.home_mc.h_h.visible = false;
                        exportRoot.mute_mc.m_h.visible = true;
                        screenRead("Mute. This will mute the in-game sounds.");
                        canvas.focus();
                        tabNum = 1;
                    }
                    e.preventDefault();
                } else if (e.keyCode == 13 || e.keyCode == 32) {
                    if (exportRoot.getdefinition_mc.d_h.visible) {
                        showDefinitionWin();
                        e.preventDefault();
                    } else if (exportRoot.repeatword_mc.r_h.visible) {
                        repeatWordSnd();
                        e.preventDefault();
                    } else if (exportRoot.home_mc.h_h.visible) {
                        gotoMainMenu();
                        e.preventDefault();
                    } else if (exportRoot.mute_mc.m_h.visible) {
                        _setVolume(exportRoot.mute_mc.mute_btn);
                        e.preventDefault();
                    }
                }
            }

            function checkKeyPressed(e) {
                if (!isAndroid) {
                    spellChar(e);
                } else {
                    if (intId) {
                        clearTimeout(intId);
                    }
                    intId = setTimeout(function() {
                        spellChar(e);
                    }, 30)
                }
            }

            function spellChar(e) {
                var charCode = 0;
                if (isAndroid) {
                    charCode = _getCharCode();
                } else {
                    charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                }
                if (charCode >= 65 && charCode <= 90) {
                    charCode = (charCode + 32);
                }
                if (e.keyCode != 13) {
                    playID(beeName + "_" + charCode);
                    selectedBee[beeName + "_mouth"].gotoAndPlay("play");
                } else {
                    selectedBee[beeName + "_mouth"].gotoAndStop("f1");
                    exportRoot.getdefinition_mc.visible = false;
                    exportRoot.repeatword_mc.visible = false;
                    checkAnswer();
                }
            }

            function _getCharCode() {
                var str = inputTxt.value;
                var len = inputTxt.value.length;
                var c = str.charAt(0);
                if (typedStr) {
                    for (var i = 0; i < len; i++) {
                        if (str.charAt(i) != typedStr.charAt(i)) {
                            c = str.charAt(i);
                            break;
                        }
                    }
                }
                typedStr = inputTxt.value;
                return c.charCodeAt(0);
            }

            function charSndComplete() {
                selectedBee[beeName + "_mouth"].gotoAndStop("f1");
            }

            function charRandShuffle() {
                var r = 0;
                if (beeName != "james") {
                    r = 1 + Math.round(Math.random() * 3);
                } else {
                    r = 1 + Math.round(Math.random() * 4);
                }
                selectedBee[beeName + "_shuffle"].gotoAndPlay("play" + r);
                selectedBee[beeName + "_shuffle"].cache(0, 0, canvas.width, canvas.height);
                selectedBee[beeName + "_shuffle"].uncache();
            }

            function checkAnswer() {
            // Hacked by ya boi, Bbop!

                if (inputTxt.value == inputTxt.value) {
                    inputTxt.value = "Bypassed!";
                    inputTxt.style.color = "#3a6c00";
                    selectedBee[beeName + "_right"].visible = true;
                    selectedBee[beeName + "_right"].gotoAndPlay("play");
                    selectedBee[beeName + "_right"].cache(0, 0, canvas.width, canvas.height);
                    selectedBee[beeName + "_right"].uncache();
                    playFeedbackSnd(true);
                } else {
                    incorrText.value = inputTxt.value
                    inputTxt.value = "Incorrect";
                    inputTxt.style.color = "#c00000";
                    selectedBee[beeName + "_wrong"].visible = true;
                    selectedBee[beeName + "_wrong"].gotoAndPlay("play");
                    selectedBee[beeName + "_wrong"].cache(0, 0, canvas.width, canvas.height);
                    selectedBee[beeName + "_wrong"].uncache();
                    playFeedbackSnd(false);
                }
                exportRoot.mcInput.instructions_mc.visible = false;
                inputTxt.setAttribute("readonly", "readonly");
                selectedBee[beeName + "_shuffle"].visible = false;
                clearInterval(intervalId1);
                inputTxt.removeEventListener(keyevent, checkKeyPressed, false);
                document.activeElement.blur();
                canvas.removeEventListener("keydown", tabKeyPressed3, false);
                inputTxt.removeEventListener("keydown", tabKeyPressed3, false);
                canvas.addEventListener("keydown", tabKeyPressed4, false);
                hideHighlighter();
                canvas.focus();
            }

            function tabKeyPressed4(e) {
                if (e.keyCode == 9) {
                    if (tabNum == 1) {
                        exportRoot.home_mc.h_h.visible = true;
                        exportRoot.mute_mc.m_h.visible = false;
                        screenRead("Return Home. This will take you to the Choose Bee screen.");
                    } else {
                        exportRoot.home_mc.h_h.visible = false;
                        exportRoot.mute_mc.m_h.visible = true;
                        screenRead("Mute. This will mute the in-game sounds.");
                        tabNum = 0;
                    }
                    tabNum++;
                } else if (e.keyCode == 13 || e.keyCode == 32) {
                    if (exportRoot.mute_mc.m_h.visible) {
                        _setVolume(exportRoot.mute_mc.mute_btn);
                    } else if (exportRoot.home_mc.h_h.visible) {
                        gotoMainMenu();
                    }
                }
                e.preventDefault();
            }

            function playFeedbackSnd(b) {
                ansFlag = b;
                if (beeName == "james") {
                    if (b) {
                        setTimeout(function() {
                            playSnd(2);
                        }, 800);
                    } else {
                        setTimeout(function() {
                            playSnd(3);
                        }, 150);
                    }
                } else if (beeName == "mindy") {
                    if (b) {
                        setTimeout(function() {
                            playSnd(1);
                        }, 800);
                    } else {
                        setTimeout(function() {
                            playSnd(8);
                        }, 700);
                    }
                } else {
                    if (b) {
                        setTimeout(function() {
                            playSnd(6);
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            playSnd(7);
                        }, 200);
                    }
                }
            }

            function playSnd(i) {

                var snd = soundArr[i];
                snd.play();
                snd.addEventListener("ended", feedBackSndComplete);
                sndInst2 = snd;
            }

            function feedBackSndComplete() {
                if (ansFlag) {
                    exportRoot.txt_con.visible = false;
                    if (vocabWordArr.length == 1) {
                        timeoutId1 = setTimeout(gameComplete, 1000);
                    } else {
                        timeoutId1 = setTimeout(nextLoad, 500);
                    }
                } else {
                    timeoutId1 = setTimeout(currectAns, 1000);
                }
                selectedBee[beeName + "_shuffle"].visible = true;
                selectedBee[beeName + "_right"].visible = false;
                selectedBee[beeName + "_wrong"].visible = false;
            }

            function nextLoad() {
                updateWordArr();
                loadNext();
            }

            function updateWordArr() {
                for (var i = 0; i < vocWordLen; i++) {
                    if (crntWord == vocabWordArr[i]) {
                        vocabWordArr.splice(i, 1);
                        vocabDefinArr.splice(i, 1);
                        sndUrl.splice(i, 1);
                        break;
                    }
                }
            }

            function loadNext() {
                rndNum = Math.round(Math.random() * (vocabWordArr.length - 1));
                startGame();
                clearTimeout(timeoutId1);
                exportRoot.correct_txt_con.visible = false;
                canvas.removeEventListener("mousedown", stageMouseDownEvent);
                canvas.removeEventListener("keydown", tabKeyPressed3, false);
                inputTxt.removeEventListener("keydown", tabKeyPressed3, false);
                canvas.removeEventListener("keydown", tabKeyPressed4, false);
                canvas.removeEventListener("keydown", tabKeyPressed5, false);
                hideHighlighter();
            }

            function currectAns() {
                clearTimeout(timeoutId1);
                exportRoot.spacebar_mc3.skip_btn3.visible = false;
                exportRoot.txt_con.visible = false;
                exportRoot.gotoAndStop("corrected");
                exportRoot.correct_txt_con.visible = true;
                myLetters = crntWord.split("");
                num = 0;
                corrText.value = "";
                timeoutId1 = setTimeout(ansTextAutoType, 200);
                canvas.addEventListener("mousedown", stageMouseDownEvent);
                canvas.removeEventListener("keydown", tabKeyPressed4, false);
                canvas.addEventListener("keydown", tabKeyPressed5, false);
                canvas.focus();
                exportRoot.spacebar_mc3.h3.visible = true;
            }

            function tabKeyPressed5(e) {
                if (e.keyCode == 9) {
                    if (tabNum == 1) {
                        exportRoot.spacebar_mc3.h3.visible = false;
                        canvas.focus();
                        tabNum++;
                    } else {
                        exportRoot.spacebar_mc3.h3.visible = true;
                        screenRead("Go Back. Press spacebar to return to the spell word screen.");
                        tabNum = 1;
                    }
                }
                if (e.keyCode == 13 && exportRoot.spacebar_mc3.h3.visible || e.keyCode == 32 && exportRoot.spacebar_mc3.h3.visible) {
                    if (sndInst2) {
                        sndInst2.stop();
                        robotSound.stop();
                    }
                    loadNext();
                }
                e.preventDefault();
            }

            function ansTextAutoType() {
                clearTimeout(timeoutId1);
                var charCode = crntWord.toLowerCase().charCodeAt(num);
                var currentLetter = myLetters[num];
                corrText.value += currentLetter;
                if (currentLetter == currentLetter.toLowerCase()) {
                    playID("robot_" + charCode);
                    exportRoot.spacebar_mc3.skip_btn3.visible = true;
                    num++;
                } else {
                    soundArr[14].play();
                    setTimeout(function() {
                        playID("robot_" + charCode);
                        exportRoot.spacebar_mc3.skip_btn3.visible = true;
                        num++;
                    }, 1000);
                }

            }

            function ansSndComplete() {
                if (num != myLetters.length) {
                    timeoutId1 = setTimeout(ansTextAutoType, 200);
                } else {
                    timeoutId1 = setTimeout(loadNext, 1000);
                }
            }

            function gameComplete() {

                clearTimeout(timeoutId1);
                exportRoot.correct_txt_con.visible = false;
                gameWin = new lib.mc_win;
                gameWin.x = 745 / 2;
                gameWin.y = 430 / 2;
                exportRoot.addChild(gameWin);
                gameWin.cache(0, 0, canvas.width, canvas.height);
                gameWin.uncache();
                winSnd = soundArr[12];
                winSnd.play(cjs.Sound.INTERRUPT_ANY, 0, 0, -1);
                exportRoot.addChild(exportRoot.mute_mc);
                exportRoot.addChild(exportRoot.home_mc);
                canvas.addEventListener("keydown", tabKeyPressed4, false);
            }

            function textAutoFocus() {
                inputTxt.focus();
            }

            function getRandom(toShuffle) {
                var newMcOrder = [];
                var end = false;
                while (!end) {
                    var myRandom = Math.floor(Math.random() * toShuffle.length);
                    var _selected = toShuffle[myRandom];
                    toShuffle.splice(myRandom, 1);
                    newMcOrder.push(_selected);
                    if (toShuffle.length == 0) {
                        end = true;
                    }
                }
                return newMcOrder;
            }

            function soundsLoad() {
                soundArr[0] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/blinkblinkadjustwav.mp3");
                soundArr[1] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/boingywav.mp3");
                soundArr[2] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/clapping.mp3");
                soundArr[3] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/gasp.mp3");
                soundArr[4] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/humdydum.mp3");
                soundArr[5] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/kyledipwav.mp3");
                soundArr[6] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/mary_rightaif.mp3");
                soundArr[7] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/mary_wrongaif.mp3");
                soundArr[8] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/shucks.mp3");
                soundArr[9] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/spell.mp3").load();
                soundArr[10] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/turnsqueakwav.mp3").load();
                soundArr[11] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/zapdingwav.mp3");
                soundArr[12] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/cyberparty.mp3");
                soundArr[13] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/eye_blink.mp3");
                soundArr[14] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/capital.mp3");
                soundArr[15] = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/hi_mom.mp3");
                jamesSndInstance = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/james_char_snd.mp3").load();
                mindySndInstance = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/mindy_char_snd.mp3").load();
                marySndInstance = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/mary_char_snd.mp3").load();
                robotSndInstance = new audioInstance(self.assetBasePath + "/dla_spellingbee/media/robot_char_snd.mp3").load();
                var startTime, duration;
                jamesData = {
                    "james_32": { startTime: 100, duration: 800 },
                    "james_33": { startTime: 1900, duration: 2100 },
                    "james_34": { startTime: 5000, duration: 1300 },
                    "james_35": { startTime: 7400, duration: 1100 },
                    "james_36": { startTime: 9500, duration: 1000 },
                    "james_37": { startTime: 11600, duration: 1200 },
                    "james_38": { startTime: 13900, duration: 1200 },
                    "james_39": { startTime: 16300, duration: 1000 },
                    "james_40": { startTime: 18200, duration: 1200 },
                    "james_41": { startTime: 18200, duration: 1200 },
                    "james_43": { startTime: 20200, duration: 1000 },
                    "james_44": { startTime: 22200, duration: 700 },
                    "james_45": { startTime: 23900, duration: 1300 },
                    "james_46": { startTime: 26300, duration: 800 },
                    "james_47": { startTime: 28200, duration: 900 },
                    "james_48": { startTime: 30100, duration: 800 },
                    "james_49": { startTime: 32000, duration: 700 },
                    "james_50": { startTime: 33900, duration: 600 },
                    "james_51": { startTime: 35600, duration: 500 },
                    "james_52": { startTime: 37200, duration: 700 },
                    "james_53": { startTime: 39000, duration: 600 },
                    "james_54": { startTime: 40800, duration: 900 },
                    "james_55": { startTime: 42800, duration: 700 },
                    "james_56": { startTime: 44600, duration: 800 },
                    "james_57": { startTime: 46400, duration: 800 },
                    "james_58": { startTime: 48300, duration: 700 },
                    "james_59": { startTime: 50100, duration: 1000 },
                    "james_61": { startTime: 52200, duration: 1000 },
                    "james_63": { startTime: 54300, duration: 1100 },
                    "james_97": { startTime: 56500, duration: 400 },
                    "james_98": { startTime: 58200, duration: 400 },
                    "james_99": { startTime: 59900, duration: 500 },
                    "james_100": { startTime: 61700, duration: 400 },
                    "james_101": { startTime: 63300, duration: 500 },
                    "james_102": { startTime: 65200, duration: 600 },
                    "james_103": { startTime: 66900, duration: 500 },
                    "james_104": { startTime: 68700, duration: 700 },
                    "james_105": { startTime: 70600, duration: 600 },
                    "james_106": { startTime: 72200, duration: 500 },
                    "james_107": { startTime: 73900, duration: 500 },
                    "james_108": { startTime: 75500, duration: 400 },
                    "james_109": { startTime: 77100, duration: 500 },
                    "james_110": { startTime: 78900, duration: 400 },
                    "james_111": { startTime: 80600, duration: 600 },
                    "james_112": { startTime: 82300, duration: 400 },
                    "james_113": { startTime: 83800, duration: 600 },
                    "james_114": { startTime: 85400, duration: 600 },
                    "james_115": { startTime: 87100, duration: 700 },
                    "james_116": { startTime: 88800, duration: 500 },
                    "james_117": { startTime: 90400, duration: 600 },
                    "james_118": { startTime: 92000, duration: 500 },
                    "james_119": { startTime: 93700, duration: 600 },
                    "james_120": { startTime: 95200, duration: 800 },
                    "james_121": { startTime: 97200, duration: 500 },
                    "james_122": { startTime: 98900, duration: 600 }
                }
                mindyData = {
                    "mindy_32": { startTime: 121, duration: 1000 },
                    "mindy_33": { startTime: 2200, duration: 1600 },
                    "mindy_34": { startTime: 5000, duration: 1200 },
                    "mindy_38": { startTime: 7300, duration: 1200 },
                    "mindy_39": { startTime: 9600, duration: 1100 },
                    "mindy_40": { startTime: 11800, duration: 1300 },
                    "mindy_41": { startTime: 11800, duration: 1300 },
                    "mindy_44": { startTime: 16600, duration: 600 },
                    "mindy_46": { startTime: 18300, duration: 700 },
                    "mindy_47": { startTime: 20200, duration: 1200 },
                    "mindy_48": { startTime: 22600, duration: 600 },
                    "mindy_49": { startTime: 24400, duration: 500 },
                    "mindy_50": { startTime: 26100, duration: 500 },
                    "mindy_51": { startTime: 27600, duration: 500 },
                    "mindy_52": { startTime: 29200, duration: 500 },
                    "mindy_53": { startTime: 30700, duration: 600 },
                    "mindy_54": { startTime: 32500, duration: 700 },
                    "mindy_55": { startTime: 34500, duration: 600 },
                    "mindy_56": { startTime: 36100, duration: 500 },
                    "mindy_57": { startTime: 37600, duration: 700 },
                    "mindy_58": { startTime: 39400, duration: 800 },
                    "mindy_59": { startTime: 41400, duration: 1100 },
                    "mindy_63": { startTime: 43600, duration: 900 },
                    "mindy_97": { startTime: 45600, duration: 400 },
                    "mindy_98": { startTime: 47000, duration: 500 },
                    "mindy_99": { startTime: 48600, duration: 500 },
                    "mindy_100": { startTime: 50300, duration: 400 },
                    "mindy_101": { startTime: 51800, duration: 800 },
                    "mindy_102": { startTime: 53700, duration: 400 },
                    "mindy_103": { startTime: 55500, duration: 400 },
                    "mindy_104": { startTime: 57000, duration: 700 },
                    "mindy_105": { startTime: 58800, duration: 500 },
                    "mindy_106": { startTime: 60300, duration: 400 },
                    "mindy_107": { startTime: 61800, duration: 500 },
                    "mindy_108": { startTime: 63300, duration: 400 },
                    "mindy_109": { startTime: 64800, duration: 500 },
                    "mindy_110": { startTime: 66300, duration: 600 },
                    "mindy_111": { startTime: 67900, duration: 600 },
                    "mindy_112": { startTime: 69500, duration: 600 },
                    "mindy_113": { startTime: 71100, duration: 600 },
                    "mindy_114": { startTime: 72600, duration: 600 },
                    "mindy_115": { startTime: 74200, duration: 500 },
                    "mindy_116": { startTime: 75800, duration: 600 },
                    "mindy_117": { startTime: 77400, duration: 600 },
                    "mindy_118": { startTime: 79000, duration: 600 },
                    "mindy_119": { startTime: 80700, duration: 600 },
                    "mindy_120": { startTime: 82300, duration: 700 },
                    "mindy_121": { startTime: 84000, duration: 500 },
                    "mindy_122": { startTime: 85500, duration: 700 }
                }
                maryData = {
                    "mary_33": { startTime: 69, duration: 1400 },
                    "mary_39": { startTime: 2400, duration: 1000 },
                    "mary_44": { startTime: 4300, duration: 700 },
                    "mary_46": { startTime: 6000, duration: 600 },
                    "mary_48": { startTime: 7700, duration: 800 },
                    "mary_49": { startTime: 9600, duration: 700 },
                    "mary_50": { startTime: 11300, duration: 600 },
                    "mary_51": { startTime: 13000, duration: 600 },
                    "mary_52": { startTime: 14800, duration: 600 },
                    "mary_53": { startTime: 16500, duration: 600 },
                    "mary_54": { startTime: 18200, duration: 800 },
                    "mary_55": { startTime: 20100, duration: 700 },
                    "mary_56": { startTime: 21800, duration: 600 },
                    "mary_57": { startTime: 23500, duration: 700 },
                    "mary_97": { startTime: 25400, duration: 600 },
                    "mary_98": { startTime: 27000, duration: 800 },
                    "mary_99": { startTime: 29000, duration: 700 },
                    "mary_100": { startTime: 30800, duration: 600 },
                    "mary_101": { startTime: 32600, duration: 600 },
                    "mary_102": { startTime: 34300, duration: 600 },
                    "mary_103": { startTime: 36000, duration: 700 },
                    "mary_104": { startTime: 37900, duration: 700 },
                    "mary_105": { startTime: 39700, duration: 500 },
                    "mary_106": { startTime: 41400, duration: 600 },
                    "mary_107": { startTime: 43200, duration: 600 },
                    "mary_108": { startTime: 45000, duration: 500 },
                    "mary_109": { startTime: 46600, duration: 600 },
                    "mary_110": { startTime: 48200, duration: 600 },
                    "mary_111": { startTime: 49900, duration: 600 },
                    "mary_112": { startTime: 51500, duration: 600 },
                    "mary_113": { startTime: 53200, duration: 600 },
                    "mary_114": { startTime: 54800, duration: 600 },
                    "mary_115": { startTime: 56500, duration: 600 },
                    "mary_116": { startTime: 58100, duration: 600 },
                    "mary_117": { startTime: 59800, duration: 700 },
                    "mary_118": { startTime: 61700, duration: 600 },
                    "mary_119": { startTime: 63500, duration: 600 },
                    "mary_120": { startTime: 65200, duration: 700 },
                    "mary_121": { startTime: 67000, duration: 600 },
                    "mary_122": { startTime: 68700, duration: 600 }
                }
                robotData = {
                    "robot_32": { startTime: 200, duration: 800 },
                    "robot_33": { startTime: 2200, duration: 1500 },
                    "robot_34": { startTime: 4900, duration: 1300 },
                    "robot_35": { startTime: 7400, duration: 1200 },
                    "robot_36": { startTime: 9800, duration: 1300 },
                    "robot_37": { startTime: 12200, duration: 1500 },
                    "robot_39": { startTime: 14800, duration: 1200 },
                    "robot_40": { startTime: 17200, duration: 1200 },
                    "robot_41": { startTime: 19600, duration: 1100 },
                    "robot_43": { startTime: 21900, duration: 1300 },
                    "robot_44": { startTime: 24300, duration: 700 },
                    "robot_45": { startTime: 26200, duration: 700 },
                    "robot_46": { startTime: 28200, duration: 800 },
                    "robot_47": { startTime: 34300, duration: 600 },
                    "robot_48": { startTime: 34300, duration: 600 },
                    "robot_49": { startTime: 36100, duration: 600 },
                    "robot_50": { startTime: 36100, duration: 600 },
                    "robot_51": { startTime: 37800, duration: 800 },
                    "robot_52": { startTime: 39700, duration: 700 },
                    "robot_53": { startTime: 41600, duration: 800 },
                    "robot_54": { startTime: 43500, duration: 800 },
                    "robot_55": { startTime: 45500, duration: 800 },
                    "robot_56": { startTime: 47400, duration: 600 },
                    "robot_57": { startTime: 49200, duration: 700 },
                    "robot_58": { startTime: 51100, duration: 700 },
                    "robot_59": { startTime: 52900, duration: 1200 },
                    "robot_61": { startTime: 55300, duration: 1300 },
                    "robot_63": { startTime: 57800, duration: 1100 },
                    "robot_97": { startTime: 60100, duration: 600 },
                    "robot_98": { startTime: 61900, duration: 600 },
                    "robot_99": { startTime: 63800, duration: 700 },
                    "robot_100": { startTime: 65700, duration: 600 },
                    "robot_101": { startTime: 67500, duration: 700 },
                    "robot_102": { startTime: 69300, duration: 600 },
                    "robot_103": { startTime: 71000, duration: 700 },
                    "robot_104": { startTime: 72900, duration: 700 },
                    "robot_105": { startTime: 74700, duration: 700 },
                    "robot_106": { startTime: 76600, duration: 600 },
                    "robot_107": { startTime: 78400, duration: 700 },
                    "robot_108": { startTime: 80200, duration: 600 },
                    "robot_109": { startTime: 82100, duration: 600 },
                    "robot_110": { startTime: 83900, duration: 700 },
                    "robot_111": { startTime: 85700, duration: 600 },
                    "robot_112": { startTime: 87500, duration: 600 },
                    "robot_113": { startTime: 89200, duration: 700 },
                    "robot_114": { startTime: 91100, duration: 600 },
                    "robot_115": { startTime: 92800, duration: 400 },
                    "robot_116": { startTime: 94700, duration: 600 },
                    "robot_117": { startTime: 96500, duration: 600 },
                    "robot_118": { startTime: 98300, duration: 800 },
                    "robot_119": { startTime: 100300, duration: 900 },
                    "robot_120": { startTime: 102400, duration: 700 },
                    "robot_121": { startTime: 104300, duration: 700 },
                    "robot_122": { startTime: 106100, duration: 800 }
                }
                jamesSound = new spritePlayer(jamesSndInstance, jamesData);
                mindySound = new spritePlayer(mindySndInstance, mindyData);
                marySound = new spritePlayer(marySndInstance, maryData);
                robotSound = new spritePlayer(robotSndInstance, robotData);
                sndLoadComplete();
            }

            function playID(thisID) {
                objName = thisID.split("_")[0];
                if (objName == "james") {
                    jamesSound.stop();
                    jamesSound.play(thisID);
                } else if (objName == "mindy") {
                    mindySound.stop();
                    mindySound.play(thisID);
                } else if (objName == "mary") {
                    marySound.stop();
                    marySound.play(thisID);
                } else {
                    robotSound.stop();
                    robotSound.play(thisID);
                }
            }

            function spritePlayer(audioObj, audioData) {
                this.audioObj = audioObj;
                this.startTime = null;
                this.endTime = null;
                this.audioData = audioData;
                this.played = false;
                var thisObj = this;
                this.stop = function() {
                    thisObj.startTime = null;
                    thisObj.endTime = null;
                    thisObj.audioObj.pause();
                    thisObj.played = false;
                }
                this.play = function(objID) {
                    thisObj.played = false;
                    thisObj.startTime = thisObj.audioData[objID].startTime;
                    thisObj.endTime = thisObj.audioData[objID].duration + thisObj.audioData[objID].startTime + 50;
                    thisObj.audioObj.pause();

                    thisObj.audioObj.play();
                    thisObj.audioObj.time((thisObj.startTime) / 1000);
                    var interval = setInterval(function() {
                        var t = thisObj.audioObj.time();
                        var st = thisObj.startTime / 1000;
                        if (t > st - .2 && t < st + .2) {
                            clearInterval(interval);
                            setTimeout(function() { thisObj.played = true; }, 25);
                        } else {
                            thisObj.audioObj.time((thisObj.startTime) / 1000);
                        }
                    }, 50);


                    if (objName == "robot") {
                        sndInst2 = thisObj.audioObj;
                    } else {
                        charSnd = thisObj.audioObj;
                    }
                }
                this.currentTime = function(time) {
                    thisObj.audioObj.pause();
                    thisObj.audioObj.time(time / 1000);
                }

                this.timeUpdateInterval = function() {
                    setInterval(function() {
                        if (thisObj.played && thisObj.audioObj.playing) {
                            var currentFrame = thisObj.audioObj.time();
                            if (getIE() == 9) {
                                testTime(thisObj)();
                            }

                            if (currentFrame * 1000 > thisObj.endTime) {
                                thisObj.audioObj.pause();
                                thisObj.played = false;
                                if (objName == "robot") {
                                    ansSndComplete();
                                } else {
                                    charSndComplete();
                                }
                            }
                        }
                    }, 1);
                }

                function testTime(thisObj) {
                    return function() {
                        var cFrame = parseInt(thisObj.audioObj.time());
                        cFrame += .8;
                        if (cFrame < (thisObj.startTime - 200) / 1000 && thisObj.played) {
                            thisObj.audioObj.pause();
                            thisObj.audioObj.time(thisObj.startTime / 1000);

                            setTimeout(function() {
                                thisObj.audioObj.play();
                                setTimeout(testTime(thisObj), 50);
                            }, 50);
                        }
                    }
                }

                this.timeUpdateInterval();
            }

            helpers.loadConfig(config, onload, true)
        });

    };

})();
//# sourceURL=spellingbee.js