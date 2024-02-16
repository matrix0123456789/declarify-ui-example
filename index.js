import {BaseComponent} from "declarify-ui"
import {declarify, DeclarifyScopeManager} from "declarify"
const MyComponent =declarify(class extends BaseComponent{
   constructor() {
       super();
       this.append('Hello, world!')
   }
});
DeclarifyScopeManager.enterScope(Symbol())
document.body.append(new MyComponent().toDOMNode())
