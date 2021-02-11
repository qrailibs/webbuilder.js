export class BuilderToolbox {
    constructor(toolboxElQuery, options) {
        // Set element from query
        this.el = document.querySelector(toolboxElQuery);

        // Check if not found
        if(this.el === undefined) {
            throw new Error('Toolbox element cannot be undefined');
        }
    }

    // Add component to toolbox
    addItem(component) {
        // Add draggable component
        this.el.appendChild(component.produceDraggableEl());
    }
    // Remove component from toolbox
    removeItem(component_name) {
        // Find component
        let componentEl = this.el.querySelector(`[data-component-name=${component_name}]`);
        // Remove component (if found)
        if(componentEl !== undefined) componentEl.remove();
    }
    // Clear all components in toolbox
    clearItems() {
        this.el.innerHTML = '';
    }
}