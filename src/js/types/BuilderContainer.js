class BuilderContainer {
    constructor(containerElQuery) {
        //set element from query
        this.el = document.querySelector(containerElQuery);

        //check if not found
        if(this.el === undefined) {
            throw new Error('Container element cannot be undefined');
        }
    }
}