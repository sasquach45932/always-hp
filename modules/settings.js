import { i18n } from "../alwayshp.js";

export const registerSettings = function () {
    let modulename = "always-hp";

    game.settings.register(modulename, "resourcename", {
        name: i18n("ALWAYSHP.resourcename.name"),
        hint: i18n("ALWAYSHP.resourcename.hint"),
        scope: "world",
        default: game.system.data.primaryTokenAttribute || 'attributes.hp',
        type: String,
        config: true
    });

    game.settings.register(modulename, "add-defeated", {
        name: i18n("ALWAYSHP.add-defeated.name"),
        hint: i18n("ALWAYSHP.add-defeated.hint"),
        scope: "world",
        default: true,
        type: Boolean,
        config: true
    });

    game.settings.register(modulename, "clear-savingthrows", {
        name: i18n("ALWAYSHP.clear-savingthrows.name"),
        hint: i18n("ALWAYSHP.clear-savingthrows.hint"),
        scope: "world",
        default: true,
        type: Boolean,
        config: true
    });

    game.settings.register(modulename, "clear-after-enter", {
        name: i18n("ALWAYSHP.clear-after-enter.name"),
        hint: i18n("ALWAYSHP.clear-after-enter.hint"),
        scope: "client",
        default: true,
        type: Boolean,
        config: true
    });

    game.settings.register(modulename, "double-click", {
        name: i18n("ALWAYSHP.double-click.name"),
        hint: i18n("ALWAYSHP.double-click.hint"),
        scope: "client",
        default: false,
        type: Boolean,
        config: true
    });

    /*
    game.settings.register(modulename, "gm-only", {
        name: i18n("ALWAYSHP.gm-only.name"),
        hint: i18n("ALWAYSHP.gm-only.hint"),
        scope: "world",
        default: false,
        type: Boolean,
        config: true
    });
    */

    //if (game.user.isGM || !game.settings.get("always-hp", "gm-only")){
        game.settings.register(modulename, "show-dialog", {
            name: i18n("ALWAYSHP.show-dialog.name"),
            hint: i18n("ALWAYSHP.show-dialog.hint"),
            scope: "client",
            default: true,
            type: Boolean,
            config: false
        });
    //}
}