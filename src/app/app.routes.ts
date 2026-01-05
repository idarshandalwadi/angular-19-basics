import { Routes } from '@angular/router';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { SignalTypesComponent } from './signal-types/signal-types.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { PipesComponent } from './pipes-demo/pipes.component';

export const routes: Routes = [
  { path: '', component: IfElseComponent },
  { path: 'switch-demo', component: SwitchDemoComponent },
  { path: 'for-loop', component: ForLoopComponent },
  { path: 'signal-demo', component: SignalDemoComponent },
  { path: 'signal-types', component: SignalTypesComponent },
  { path: 'to-do', component: ToDoListComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'sender', component: SenderComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'profile/:id/:email', component: ProfileComponent},
  { path: 'simple-reactive-form', component: SimpleReactiveFormComponent},
  { path: 'reactive-form-group', component: ContactMeComponent},
  { path: 'template-driven', component: TemplateDrivenFormComponent},
  { path: 'pipes', component: PipesComponent},
  // Wildcard route, should be in last
  { path: '**', component: PageNotFoundComponent }, // ** - To catch any unknown / invalid URLs. 
];
