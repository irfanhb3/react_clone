import * as snabbdom from 'snabbdom';
import propsModule from 'snabbdom/modules/props';

const reconcile = snabbdom.init([propsModule]);

let root = null;

const render = (element, rootElement) => {
    if (root === null) {
        root = rootElement;
    }
    root = reconcile(root, element);
};

const ApnaReactDOM = {
    render
};

export default ApnaReactDOM;