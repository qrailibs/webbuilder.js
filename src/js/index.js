import { BuilderToolbox } from "./types/BuilderToolbox";
import { BuilderContainer} from "./types/BuilderContainer";
import { Component } from "./types/Component";

export const webbuilder = {
    toolbox: undefined,
    container: undefined,
    components: [],

    // Initialize webbuilder
    init: function(toolbox, container, components=[]) {
        if(toolbox instanceof BuilderToolbox && container instanceof BuilderContainer) {
            this.toolbox = toolbox;
            this.container = container;
            this.components = components;
        }
        else {
            throw new Error('toolbox should be instance of BuilderToolbox, container should be instance of BuilderContainer')
        }
    },

    // Define new component
    define: function(name, type, template) {
        // Create component object
        let component = new Component(name, type, template);
        // Add component to list
        this.components.push(component);
        // Add component to toolbox
        this.toolbox.add(component);
    }
}