const fs = require('fs');
const YAML = require('yaml');
const utils = require('./utils')

function changesInInactiveAreas(core, changedAreas) {
    const areas = utils.getAllAreas(core);

    let changesWithoutAreas = [];
    const areaOwnersMap = utils.getActiveAreasWithCodeOwners(areas);

    changedAreas.forEach(ca => {
        if (!areaOwnersMap.has(ca)) {
            changesWithoutAreas.push(ca);
        }
    });

    if (changesWithoutAreas.length > 0) {
        core.info("PR contains changes to areas that are not active");
    }

    return changesWithoutAreas;
}

const findChangesInInactiveAreas = (core, changedAreas) => {
    return changesInInactiveAreas(core, JSON.parse(changedAreas));
}

module.exports = findChangesInInactiveAreas;
