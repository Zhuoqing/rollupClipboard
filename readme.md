# how to import and resolve clipboard lib
The typings for [@types/clipboard@1.5.31](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/2d78b6c3b18025e63a71cdf57be00230f6ff72aa/clipboard/index.d.ts) is something like

    declare class Clipboard {...
    }
    
    declare namespace Clipboard {...
    }
    
    export = Clipboard;
    export as namespace Clipboard;

and its [usage example](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/2d78b6c3b18025e63a71cdf57be00230f6ff72aa/clipboard/clipboard-tests.ts) is like 

    import * as Clipboard from 'clipboard';
    var cb1 = new Clipboard('.btn');
when we try to bundle with rollup with same syntax, somehow `new Clipboard` doesn't work and we had to do `new Clipboard.default` which doesn't seem right.
#to repro
`npm i && npm run build`, then load `index.html` and watch the error in console, can also check [jsfiddle here](https://jsfiddle.net/93h4Lx3r/1/)

note if change to use `import Clipboard from 'clipboard';` it works. however in our repo we are using typescript@2.0.10 and it will complain `module has no default export`
