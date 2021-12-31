export class todoList {
  public date: Date;
  public activity: string;
  public catagories: any[];
  public state: string;
  public isActive: boolean = true;
}

export class dummyList {
  constructor(){}
  getData(Numb) {
    let dataList:any[]=[];
    while(dataList.length<=Numb){
    let listData: todoList = new todoList();
    listData.activity = Math.floor(Math.random() * 100).toString();
    listData.isActive=!Math.round(Math.random());
    listData.state=!Math.round(Math.random())?'completed':'pending';
    listData.date = new Date(Date.now()+33);
    dataList.push(listData);
    }
    return dataList;
  }
}
