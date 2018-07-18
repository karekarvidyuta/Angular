import{Component} from '@angular/core';

@Component({
 selector:'course',
 template:'<h1>{{ title}}</h1>'
            
})
export class CourseComponent{
    title= "list of course";
}