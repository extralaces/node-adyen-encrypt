function adyenEncrypt(version) {
    version = ~~version;

    if (version && (version >= 21 && version <= 25)) {
        return require("./lib/0_1_" + version);
    }

    return require("./lib/0_1_21");
}

module.exports = adyenEncrypt;
