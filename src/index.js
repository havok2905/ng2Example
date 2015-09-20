import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {TodoComponent} from 'todo/todo_component';

@Component({
  selector: 'main'
})

@View({
  directives: [TodoComponent],
  template: `
    <todo></todo>
  `
})

class Main {

}

bootstrap(Main);
