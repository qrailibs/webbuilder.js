class BuilderToolbox {
    constructor(toolboxElQuery, options) {
        //set element from query
        this.el = document.querySelector(toolboxElQuery);

        //check if not found
        if(this.el === undefined) {
            throw new Error('Toolbox element cannot be undefined');
        }
    }

    // Check if toolbox has component
    componentExists(component_name) {
        return this.el.querySelector(`#template-${component_name}`) !== undefined 
            ? true // Was not undefined -> exists
            : false; // Was undefined -> not exists
    }
    // Add component to toolbox
    addComponent(component) {
        if(!this.componentExists(component.name)) {
            // Add draggable component
            this.el.appendChild(component.produceDraggableEl());
        }
        else throw new Error(`Toolbox already have component named '${component.name}'`)
    }
    // Remove component from toolbox
    removeComponent(component_name) {
        // Find component
        let componentEl = this.el.querySelector(`#template-${component_name}`);
        // Remove component (if found)
        if(componentEl !== undefined) componentEl.remove();
    }
    // Clear all components in toolbox
    clearComponents() {
        this.el.innerHTML = '';
    }
}