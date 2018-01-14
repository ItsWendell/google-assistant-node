"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var State;
(function (State) {
    State[State["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    State[State["FINISHED"] = 1] = "FINISHED";
})(State = exports.State || (exports.State = {}));
var Event;
(function (Event) {
    Event[Event["END_OF_UTTERANCE"] = 1] = "END_OF_UTTERANCE";
})(Event = exports.Event || (exports.Event = {}));
var MicMode;
(function (MicMode) {
    MicMode[MicMode["CLOSE_MICROPHONE"] = 1] = "CLOSE_MICROPHONE";
    MicMode[MicMode["DIALOG_FOLLOW_ON"] = 2] = "DIALOG_FOLLOW_ON";
})(MicMode = exports.MicMode || (exports.MicMode = {}));
var Encoding;
(function (Encoding) {
    Encoding[Encoding["LINEAR16"] = 1] = "LINEAR16";
    Encoding[Encoding["FLAC"] = 2] = "FLAC";
    Encoding[Encoding["MP3"] = 2] = "MP3";
    Encoding[Encoding["OPUS_IN_OGG"] = 3] = "OPUS_IN_OGG"; // Output
})(Encoding = exports.Encoding || (exports.Encoding = {}));
var API;
(function (API) {
    API.ENDPOINT = 'embeddedassistant.googleapis.com';
})(API = exports.API || (exports.API = {}));
//# sourceMappingURL=constants.js.map