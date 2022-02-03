import { Context } from "../context";



export class ExplorerTodo {
    static inject = [Context];
    constructor(context) {
        this.context = context;
        this.exemple = "test";
    }
    
	activate() {
		this.load();
	}

	load() {
		this.loadTask();
	}
	
    loadTask(){
		let data = {
			code: "0",
			msg: "Ok",
			task: {
				id: 123,
				title: "rentrer chez moi",
				statut: false
			}
		};
		this.tasks = data.task;
	}
}