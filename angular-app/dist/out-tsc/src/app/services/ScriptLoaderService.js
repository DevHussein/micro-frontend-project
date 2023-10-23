var ScriptLoaderService_1;
import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
export let ScriptLoaderService = ScriptLoaderService_1 = class ScriptLoaderService {
    static scriptAlreadyLoaded(scriptUrl) {
        let scripts = document.getElementsByTagName("body")[0].getElementsByTagName("script");
        var scriptAlreadyLoaded = false;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.endsWith(scriptUrl)) {
                scriptAlreadyLoaded = true;
            }
        }
        return scriptAlreadyLoaded;
    }
    loadAllScripts(...scriptUrls) {
        return forkJoin(scriptUrls.map(this.loadScript));
    }
    loadScript(scriptUrl) {
        return new Observable((observer) => {
            if (!ScriptLoaderService_1.scriptAlreadyLoaded(scriptUrl)) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = scriptUrl;
                if (script.readyState) { //IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            observer.next({ script: scriptUrl, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { //Others
                    script.onload = () => {
                        observer.next({ script: scriptUrl, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => observer.error(error);
                document.getElementsByTagName("body")[0].appendChild(script);
            }
            else {
                setTimeout(() => observer.next({ script: scriptUrl, loaded: true, status: 'Loaded' }), 300);
            }
        });
    }
};
ScriptLoaderService = ScriptLoaderService_1 = __decorate([
    Injectable()
], ScriptLoaderService);
//# sourceMappingURL=ScriptLoaderService.js.map