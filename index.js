import {BaseComponent} from "declarify-ui"
import {declarify, declarifyKeep, DeclarifyScopeManager} from "declarify"

const MyComponent = declarify(class extends BaseComponent {
    counter = declarifyKeep(0)

    constructor() {
        super();
        this.append('Hello, world!')
        this.append(this.counter.value)
    }

    onclick() {
        console.log('clicked')
        this.counter.value++;
    }
});
DeclarifyScopeManager.enterScope(Symbol())
document.body.append(new MyComponent().toDOMNode())
