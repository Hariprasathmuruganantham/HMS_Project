import elementActions from "../../Utilis/elementActions";
export default class basePageDoctor{
    constructor(page){
        this.page=page;
        this.elementActions=new elementActions(page);
    }
}