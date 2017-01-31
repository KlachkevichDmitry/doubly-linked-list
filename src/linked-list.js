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
               this._tail=newpart;
           }
         this.length++;

    }

   head() {  /* начало списка */

       if (this._head != null) {
            return this._head.data;
        }

    }

     tail() {  /* конец списка */
         if (this._tail != null) {
             return this._tail.data;
         }

     }

    at(index) { /*возвращает данные по индексу*/

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
        
    }


    deleteAt(index) { /* удаляет элемент по индексу*/
            
        }

    reverse() { /*меняет направление списка */ 
        }

    indexOf(data) { /* возвращает индекс элемента по данным */
        
        }

}

module.exports = LinkedList;