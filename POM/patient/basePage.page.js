import elementActions from "../../Utilis/elementActions";
export default class basePage{
    constructor(page){
        this.page=page;
        this.elementActions=new elementActions(page)
    }
}