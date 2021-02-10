// Base class
export class Component {
    constructor(name, type, template) {
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
        // Create draggable div
        let el = document.createElement('div');
        el.setAttribute('class', `component-template`);
        el.setAttribute('id', `template-${this.name}`)
        // Assign html template to inner
        el.innerHTML = this.template;
        return el;
    }

    // Produce dropped element of this component
    produceDroppedEl() {
        // Create temp element
        let temp = document.createElement('template');
        // Assign HTML template to inner
        temp.innerHTML = this.template;
        // Get inner as element
        return temp.content.firstChild;
    }
}