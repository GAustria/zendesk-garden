const fs = require('fs');
var _ = require('lodash');

function writeReactFile(data) {
    const fullString = `import React from "react"; \r\n import PropTypes from "prop-types"; \r\n ${data}`
    fs.writeFileSync("./src/IconMerge/IconMerge.js", fullString);
}

function writePropTypes(data, names) {
    let props;
    names.map( item => {
        const propItem = `"${item}", \r\n`;
        props += propItem
    })
    const propsString = `IconMerge.propTypes = {\r\n  color: PropTypes.string, \r\n     icon: PropTypes.oneOf([ \r\n    ${props} \r\n ] \r\n    ) \r\n }`
    let fullStringProps = `${data} \r\n ${propsString}`;

    const str = fullStringProps.replace('undefined', '');

    writeReactFile(str);
}

function writeSwitch(data, names, names14, names26) {
    let caseStr;
    const allNames = names.concat(names14, names26);
    allNames.map(item => {
        const caseItem = `case "${item}": \r\n  return <${item} color={this.props.color} /> \r\n  break; \r\n`;
        caseStr += caseItem;
    }); 

    let compString = `export default class IconMerge extends React.Component { \r\n     render() { \r\n switch(this.props.icon) { \r\n ${caseStr} \r\n } \r\n } \r\n }`;

    let fullString = `${data} \r\n ${compString}`;

    let str = fullString.replace('undefined', '');

    writePropTypes(str, allNames);
}

function writeImports(files, files14, files26) {
    let importString;
    let namesArr = [];
    let namesArr14 = [];
    let namesArr26 =[];

    /* Files for sizes 12px and 16px */
    files.map( item => {
        const clearName = item.substring(0, item.indexOf("."));
        const camelName = _.camelCase(clearName);
        const capName = camelName[0].toUpperCase() + camelName.slice(1);
        
        const importString12 = `import ${capName}12 from '@zendeskgarden/svg-icons/src/12/${item}';\n`;
        const importString16 = `import ${capName}16 from '@zendeskgarden/svg-icons/src/16/${item}';\n`;
        namesArr.push(`${capName}12`);
        namesArr.push(`${capName}16`);

        importString += importString12;
        importString += importString16;
    })

    /* Files for size 14 */
    files14.map( item => {
        const clearName = item.substring(0, item.indexOf("."));
        const camelName = _.camelCase(clearName);
        const capName = camelName[0].toUpperCase() + camelName.slice(1);
        
        const importString14 = `import ${capName}14 from '@zendeskgarden/svg-icons/src/14/${item}';\n`;
        namesArr14.push(`${capName}14`);
        importString += importString14;
    })

    /* Files for size 26 */
    files26.map( item => {
        const clearName = item.substring(0, item.indexOf("."));
        const camelName = _.camelCase(clearName);
        const capName = camelName[0].toUpperCase() + camelName.slice(1);
        
        const importString26 = `import ${capName}26 from '@zendeskgarden/svg-icons/src/26/${item}';\n`;
        namesArr26.push(`${capName}26`);
        importString += importString26;
    })

    const str = importString.replace("undefined", "");

    writeSwitch(str, namesArr, namesArr14, namesArr26);
}

function getFiles() {
    const files = fs.readdirSync("./node_modules/@zendeskgarden/svg-icons/src/12");
    const files14 = fs.readdirSync("./node_modules/@zendeskgarden/svg-icons/src/14");
    const files26 = fs.readdirSync("./node_modules/@zendeskgarden/svg-icons/src/26");
    writeImports(files, files14, files26)
}



getFiles();

/**
 * if(importString !== undefined) {
        fs.writeFileSync("test.js", importString);
    }
 * 
 */