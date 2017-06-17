///<reference path="../../../node_modules/@types/requirejs/index.d.ts"/>

requirejs.config({
    baseUrl: "../scripts/app"
})

requirejs(['AMDbootstrapper'], (AMDbootstrapper) => {AMDbootstrapper.run();})