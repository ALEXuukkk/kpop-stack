(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"borderRadius":0,"scrollBarOpacity":0.5,"paddingTop":0,"desktopMipmappingEnabled":false,"contentOpaque":false,"width":"100%","horizontalAlign":"left","paddingBottom":0,"minHeight":0,"scrollBarColor":"#000000","id":"rootPlayer","minWidth":0,"shadow":false,"layout":"absolute","mediaActivationMode":"window","toolTipHorizontalAlign":"center","mouseWheelEnabled":true,"backgroundColorDirection":"vertical","verticalAlign":"top","overflow":"hidden","vrPolyfillScale":0.75,"paddingLeft":0,"propagateClick":false,"definitions": [{"initialPosition":{"yaw":174.06,"class":"PanoramaCameraPosition","pitch":0.99},"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialSequence":"this.sequence_B8666940_B74F_B101_41C3_55B9258C2E7D","id":"panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_camera"},{"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"aaEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"vfov":180,"partial":false,"overlays":["this.overlay_A648E8D2_B745_BF00_41C0_EC1997CECACB"],"adjacentPanoramas":[{"distance":4.45,"panorama":"this.panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA","yaw":179.48,"select":"this.overlay_A648E8D2_B745_BF00_41C0_EC1997CECACB.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_A648E8D2_B745_BF00_41C0_EC1997CECACB"},"class":"AdjacentPanorama"}],"pitch":0,"id":"panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313","hfovMax":130,"label":trans('panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313.label'),"frames":[{"thumbnailUrl":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","rowCount":1}]},"class":"CubicPanoramaFrame"}],"class":"Panorama","thumbnailUrl":"media/panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_t.jpg","hfov":360,"data":{"label":"\u0423\u043b\u0438\u0446\u0430"},"hfovMin":"135%"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","hoverFactor":0,"automaticZoomSpeed":10,"initialSequence":"this.sequence_A7607C2D_B745_7703_41D8_FA19B216BECF","id":"panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_camera"},{"items":[{"camera":"this.panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313_camera","class":"PanoramaPlayListItem","media":"this.panorama_A70EA0E8_B74F_8F01_41AB_BE52ADA7B313","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_camera","class":"PanoramaPlayListItem","media":"this.panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"vfov":180,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","rowCount":1}]},"class":"CubicPanoramaFrame"}],"hfovMax":130,"pitch":0,"id":"panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA","label":trans('panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA.label'),"class":"Panorama","thumbnailUrl":"media/panorama_A670905A_B745_8F00_41D1_FA37BCFEAFBA_t.jpg","hfov":360,"data":{"label":"IMG_20220930_164745_00_048"},"hfovMin":"135%"},{"toolTipTextShadowColor":"#000000","toolTipOpacity":1,"playbackBarRight":0,"progressBorderRadius":0,"toolTipFontSize":"1.11vmin","subtitlesPaddingLeft":5,"width":"100%","playbackBarBackgroundColorDirection":"vertical","subtitlesBottom":50,"subtitlesPaddingRight":5,"displayTooltipInSurfaceSelection":true,"id":"MainViewer","shadow":false,"translationTransitionDuration":1000,"toolTipBorderSize":1,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipPaddingTop":4,"toolTipShadowBlurRadius":3,"progressLeft":0,"subtitlesFontFamily":"Arial","paddingLeft":0,"progressBorderColor":"#000000","subtitlesEnabled":true,"playbackBarProgressBorderRadius":0,"transitionDuration":500,"toolTipBorderColor":"#767676","progressBarBackgroundColor":["#3399FF"],"paddingRight":0,"playbackBarHeadShadowHorizontalLength":0,"height":"100%","subtitlesPaddingTop":5,"toolTipFontWeight":"normal","progressBackgroundOpacity":1,"toolTipShadowSpread":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"borderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"firstTransitionDuration":0,"subtitlesTop":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"progressBarOpacity":1,"playbackBarHeadBorderSize":0,"toolTipShadowOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","surfaceReticleOpacity":0.6,"borderRadius":0,"playbackBarHeadOpacity":1,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","progressBottom":0,"paddingTop":0,"progressHeight":10,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesShadow":false,"playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"paddingBottom":0,"minHeight":50,"playbackBarBorderRadius":0,"progressBarBorderSize":0,"progressBorderSize":0,"playbackBarProgressBorderColor":"#000000","toolTipFontFamily":"Arial","subtitlesGap":0,"toolTipPaddingRight":6,"minWidth":100,"subtitlesBackgroundColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBottom":5,"toolTipHorizontalAlign":"center","vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"subtitlesVerticalAlign":"bottom","progressBackgroundColorRatios":[0],"progressRight":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"progressOpacity":1,"toolTipFontColor":"#606060","subtitlesHorizontalAlign":"center","progressBarBorderRadius":0,"subtitlesFontSize":"3vmin","propagateClick":false,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"toolTipDisplayTime":600,"playbackBarProgressOpacity":1,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipFontStyle":"normal","progressBarBorderColor":"#000000","transitionMode":"blending","displayTooltipInTouchScreens":true,"subtitlesBorderSize":0,"subtitlesOpacity":1,"progressBarBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"playbackBarHeadBorderColor":"#000000","progressBackgroundColorDirection":"vertical","surfaceReticleSelectionOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"playbackBarHeight":10,"subtitlesFontWeight":"normal","class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"toolTipShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"}},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_B8666940_B74F_B101_41C3_55B9258C2E7D"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_A7249A9A_B745_B301_41D9_1874E4E6C2FD"],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":50,"yaw":179.48,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","hfov":10.5,"vfov":10.5,"image":"this.res_A5A4FCAE_B744_9701_41A0_7568DD8F0D5F","pitch":-20.89,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_A648E8D2_B745_BF00_41C0_EC1997CECACB"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_A7607C2D_B745_7703_41D8_FA19B216BECF"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_A7249A9A_B745_B301_41D9_1874E4E6C2FD"},{"levels":[{"height":119,"width":119,"class":"ImageResourceLevel","url":"media/res_A5A4FCAE_B744_9701_41A0_7568DD8F0D5F_0.png"}],"class":"ImageResource","id":"res_A5A4FCAE_B744_9701_41A0_7568DD8F0D5F"}],"defaultVRPointer":"laser","paddingRight":0,"height":"100%","mobileMipmappingEnabled":false,"backgroundPreloadEnabled":true,"backgroundOpacity":1,"scrollBarWidth":10,"backgroundColorRatios":[0],"children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"borderSize":0,"backgroundColor":["#FFFFFF"],"gap":10,"scrollBarVisible":"rollOver","class":"Player","start":"this.init()","scrollBarMargin":2,"downloadEnabled":true,"scripts":{"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"clone":TDV.Tour.Script.clone,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"shareSocial":TDV.Tour.Script.shareSocial,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizFinish":TDV.Tour.Script.quizFinish,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"existsKey":TDV.Tour.Script.existsKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showPopupImage":TDV.Tour.Script.showPopupImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlays":TDV.Tour.Script.getOverlays,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"isPanorama":TDV.Tour.Script.isPanorama,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"downloadFile":TDV.Tour.Script.downloadFile,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPixels":TDV.Tour.Script.getPixels,"mixObject":TDV.Tour.Script.mixObject,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeJS":TDV.Tour.Script.executeJS,"setLocale":TDV.Tour.Script.setLocale,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setValue":TDV.Tour.Script.setValue,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"translate":TDV.Tour.Script.translate},"data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"rate":1},"locales":{"ru":"locale/ru.txt"},"name":"Player5011","defaultLocale":"ru"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Sat Oct 8 2022