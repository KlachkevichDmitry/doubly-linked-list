 const Node = require('./node');

class LinkedList {
    constructor() {
        this._head=null;
        this._tail=null;
        this.length=0;
    }

    append(data) {  /* добавление новой ячейки, при добавлении в пустой список присваивать значения добавляемой ячейки,
       при добавлении не в пустой список добавлять данные в конец списка*/
           var newpart=new Node(data);
           if (this.length==0) {
             this._head=newpart;
             this._tail=newpart;
           } else {
               this._tail.next=newpart;
               newpart.prev=this._tail;
               this._tail=newpart;
           }
         this.length++;
         return this;
    }

    head() {//возвращает данные из начала списка
            return this._head.data;
    }

    tail() {// возвращает данные из конца списка
             return this._tail.data;
     }
    at(index) { //возвращает данные по индексу
        var base=this._head;
        for (var i=0; i<index; i++) {
            base=base.next;
        }
        return base.data;
    }

    insertAt(index, data) {// добавляет данные по индексу
        var base=this._head;
        for (var i=0; i<index; i++)  {
            base=base.next;
            if (i=index){
            base.data=(new Node(data)).data;
            }
        }
    }

    isEmpty() {// возвращает true если лист пустой
         return this.length==0;
         }
       
    clear()  {
            while (this.length>0) {
            this._head.data = null;
            this._head.prev = null;
            this._head.next = null;
            this._tail.data=null;
            this._tail.prev = null;
            this._tail.next = null;
            this.length--;
        }
		return this;
    }

    deleteAt(index) {
		var base=this._head;
        for (var i=0; i<index; i++)  {
			base=base.next;}
        if (base.prev==null){
			this.head=base.next;
        }else if(base.next==null) {
			this._tail=base.prev;
		}else{
			base.prev.next=base.next;
			base.next.prev=base.prev;
		}	
      this.length--;
      return this;
    }

	reverse() {//переворачивает список
        var head=this._head;
        var tail=this._tail;
        for (var i=0; i<(this.length-1)/2; i++) {
            var temp=head.data;
            head.data=tail.data;
			tail.data=temp;
            tail=tail.prev;
            head=head.next;
        }
        return this;
    }

    indexOf(data){//перебирает циклом по списку, если данные не найдены возвращает -1
	   var base=this._head;
	   var index=-1;
	   for (var i=0; i<this.length; i++) {
		   if (base.data==data) {
			   return index=i;}
	          base=base.next;}
	   return index;
      }

}

module.exports = LinkedList;