import { webbuilder } from "../webbuilder";

export class ComponentConfig {
    constructor(canDropOn={}) {
        this.canDropOn = canDropOn;
    }
}
export class Component {
    constructor(name, type, template, config = new ComponentConfig()) {
        if(name !== undefined && type !== undefined && template !== undefined) {
            this.name = name;
            this.type = type;
            this.template = template;
        }
        else {
            throw new Error('Unspecified component name or type or template');
        }
    }

    // Produce draggable element of this component
    produceDraggableEl() {
        // Create div
        let el = document.createElement('div');
        el.setAttribute('class', `component-template`);
        el.setAttribute('component-name', this.name);
        el.setAttribute('component-type', this.type);
        // Make it draggable
        el.setAttribute('draggable', true);
        el.setAttribute('dragging', false);
        el.addEventListener('dragstart', function(e) {
            if(webbuilder.draggingComponent == undefined) {
                webbuilder.draggingComponent = this;
                webbuilder.draggingComponent.setAttribute('dragging', true);
            }
        }, false);
        el.addEventListener('dragend', function(e) {
            e.preventDefault();
            if(webbuilder.draggingComponent != undefined) {
                webbuilder.draggingComponent.setAttribute('dragging', false);
                webbuilder.draggingComponent = undefined;
            }
        }, false);
        // Assign html template to inner
        el.innerHTML = this.template;
        return el;
    }

    produceRealEl() {
        // Create temp element
        var tempEl = document.createElement('template');
        // Set template code as inner
        tempEl.insertAdjacentHTML('afterbegin', this.template)

        if(this.type == 'element') {
            // Return template code in inner as element
            console.log(tempEl.firstElementChild);
            return tempEl.firstElementChild;
        }
        else if(this.type == 'container') {
            // Return template code, with container attr set to true
            tempEl = tempEl.firstElementChild;
            tempEl.setAttribute('container', '');
            return tempEl;
        }
        else throw new Error('Unknown component type, unable to produce element');
    }

    canDropOn(el) {

    }
}