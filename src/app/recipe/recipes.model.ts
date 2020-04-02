export class Recipes{
    public name:string;
    public description :string;
    public imagesPath:string;

    constructor(name:string,desc:string,imagePath:string)
    {
        this.name=name;
        this.description=desc;
        this.imagesPath=imagePath;
    }

}