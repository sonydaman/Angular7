import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
    selector: '[appPlaceholder]'
})
export class PLaceHolderDirective {
    constructor(public viewContainerRef: ViewContainerRef){}

}