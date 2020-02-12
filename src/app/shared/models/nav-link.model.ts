export class NavLink{
    label: string;
    path: string;
    active: boolean;

    constructor(label:string, path: string, active: boolean){
        this.label = label;
        this.path = path;
        this.active = active;
    }
}