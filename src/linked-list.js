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
               newpart.prev=this.tail;
               this._tail=newpart;

           }
         this.length++;
         return this;




    }

   head() {  /* начало списка */

       if (this.length != null) {
            return this._head.data;
        }

    }

     tail() {  /* конец списка */
         if (this.length != null) {
             return this._tail.data;
         }

     }

    at(index) { /*возвращает данные по индексу*/

        var fact=this._head;

        for (var i=0; i<index; i++) {
            fact=fact.next;
        }
        return fact.data;

    }

    insertAt(index, data) { /*вставляет данные в определенный индекс*/
        

    }

    isEmpty() {  /* проверка на наличие данных в списке */

         if (this.length==0) {
         return true;
         } else {
             return false;

         }

       }

    clear()  {  /*удаляет данные из списка*/
      
        while (this.length>0) {
            this._head.data = null;
            this._head.prev = null;
            this._head.next = null;
            this._tail.data=null;
            this._tail.prev = null;
            this._tail.next = null;

            this.length--;
        }



       



        /*if (this.length>0) {
         this._head.next=null;
         this._tail.prev=null;
         this._tail.=null;
         this._head=null;
         this.length--;
         }*/

        /* this._head=null;
         this._tail=null;
         this.length=0;
         return this; */

    }


    deleteAt(index) { /* удаляет элемент по индексу*/

        }

    reverse() { /*меняет направление списка */
        }

    indexOf(data) { /* возвращает индекс элемента по данным */

        }

}

module.exports = LinkedList;